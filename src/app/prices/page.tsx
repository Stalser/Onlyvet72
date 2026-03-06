'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

type ServiceCategory = 'все' | 'консультация' | 'второе мнение' | 'диагностика' | 'сопровождение';
type SortOption = 'price-asc' | 'price-desc' | 'name';

const categoryLabels: Record<ServiceCategory, string> = {
  'все': 'Все услуги',
  'консультация': 'Консультации',
  'второе мнение': 'Второе мнение',
  'диагностика': 'Диагностика',
  'сопровождение': 'Сопровождение',
};

export default function PricesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('все');
  const [sortBy, setSortBy] = useState<SortOption>('price-asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  // Фильтрация и сортировка услуг
  const filteredServices = useMemo(() => {
    let result = services.filter((service) => {
      // Фильтр по категории
      if (selectedCategory !== 'все' && service.category !== selectedCategory) {
        return false;
      }

      // Поиск по названию и описанию
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inName = service.name.toLowerCase().includes(query);
        const inDescription = service.shortDescription.toLowerCase().includes(query);
        const inTags = service.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!inName && !inDescription && !inTags) return false;
      }

      return true;
    });

    // Сортировка
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.priceFrom - b.priceFrom;
        case 'price-desc':
          return b.priceFrom - a.priceFrom;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [selectedCategory, sortBy, searchQuery]);

  // Группировка для сравнения
  const servicesByCategory = useMemo(() => {
    const groups: Record<string, typeof services> = {};
    services.forEach((service) => {
      if (!groups[service.category]) {
        groups[service.category] = [];
      }
      groups[service.category].push(service);
    });
    return groups;
  }, []);

  const clearFilters = () => {
    setSelectedCategory('все');
    setSortBy('price-asc');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'все' || sortBy !== 'price-asc' || searchQuery.trim();

  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Цены на услуги
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Прозрачное ценообразование без скрытых платежей. 
              Выберите подходящий формат консультации для вашего питомца.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Поиск, категория и сортировка */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Поиск */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск услуг (например: анализы, онкология)"
                    className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Категория */}
              <div className="flex flex-wrap gap-2">
                {(Object.keys(categoryLabels) as ServiceCategory[]).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                      ${selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>

              {/* Сортировка */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium bg-white"
              >
                <option value="price-asc">Сначала дешевле</option>
                <option value="price-desc">Сначала дороже</option>
                <option value="name">По названию</option>
              </select>
            </div>

            {/* Переключатель сравнения и результат */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showComparison}
                  onChange={(e) => setShowComparison(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700 font-medium">Показать сравнение услуг</span>
              </label>

              <div className="text-sm text-gray-500">
                Найдено услуг: <span className="font-semibold text-gray-900">{filteredServices.length}</span>
                {hasActiveFilters && (
                  <span className="ml-2">из <span className="font-semibold">{services.length}</span></span>
                )}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="ml-4 text-primary hover:text-primary-dark font-medium"
                  >
                    Сбросить фильтры
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Таблица сравнения */}
      {showComparison && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Сравнение услуг по категориям
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Услуга
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Категория
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Цена
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Описание
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Действие
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {services.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-900">{service.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary">
                          {categoryLabels[service.category]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-bold text-primary">{service.priceLabel}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{service.shortDescription}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/booking?serviceId=${service.id}`}
                          className="text-primary hover:text-primary-dark font-medium text-sm"
                        >
                          Записаться →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Прайс-лист */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary-light hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <span className="text-xs uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-primary-light text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-2xl font-bold text-primary">
                        {service.priceLabel}
                      </span>
                      <Link
                        href={`/booking?serviceId=${service.id}`}
                        className="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                      >
                        Записаться
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Услуги не найдены
              </h3>
              <p className="text-gray-600 mb-6">
                Попробуйте изменить параметры поиска или фильтры
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Информация о ценах */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Важная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                💳 Оплата услуг
              </h3>
              <p className="text-gray-600 text-sm">
                Оплата производится после согласования времени консультации 
                и перед началом услуги. Принимаем оплату банковскими картами 
                и банковским переводом.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                🔄 Возврат средств
              </h3>
              <p className="text-gray-600 text-sm">
                Полный возврат при отмене более чем за 24 часа до консультации. 
                При отмене менее чем за 24 часа — возврат 50% стоимости.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                📋 Что входит в стоимость
              </h3>
              <p className="text-gray-600 text-sm">
                Консультация (30-60 минут), письменное заключение с рекомендациями, 
                возможность уточняющих вопросов в течение 24 часов после консультации.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                📞 Повторные обращения
              </h3>
              <p className="text-gray-600 text-sm">
                Повторная консультация в течение 7 дней по тому же вопросу 
                предоставляется со скидкой 20%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Остались вопросы по ценам?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Напишите нам, и мы поможем подобрать оптимальный формат консультации 
            для вашей ситуации и бюджета
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Записаться на консультацию
            </Link>
            <a
              href="mailto:consult@onlyvet.ru"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
            >
              Написать нам
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
