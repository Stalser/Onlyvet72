'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

type ServiceCategory = 'все' | 'консультация' | 'второе мнение' | 'диагностика' | 'сопровождение';

const categoryLabels: Record<ServiceCategory, string> = {
  'все': 'Все услуги',
  'консультация': 'Консультации',
  'второе мнение': 'Второе мнение',
  'диагностика': 'Диагностика',
  'сопровождение': 'Сопровождение',
};

const specializationLabels: Record<string, string> = {
  'эксперт': 'Эксперт',
  'терапия': 'Терапия',
  'диагностика': 'Диагностика',
  'онкология': 'Онкология',
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('все');
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация услуг
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // Фильтр по категории
      if (selectedCategory !== 'все' && service.category !== selectedCategory) {
        return false;
      }

      // Фильтр по специализации
      if (selectedSpecializations.length > 0) {
        const hasSpecialization = selectedSpecializations.some((spec) =>
          service.specializations.includes(spec as any)
        );
        if (!hasSpecialization) return false;
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
  }, [selectedCategory, selectedSpecializations, searchQuery]);

  // Уникальные специализации для фильтра
  const availableSpecializations = useMemo(() => {
    const specs = new Set<string>();
    services.forEach((service) => {
      service.specializations.forEach((spec) => specs.add(spec));
    });
    return Array.from(specs);
  }, []);

  const toggleSpecialization = (spec: string) => {
    setSelectedSpecializations((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('все');
    setSelectedSpecializations([]);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'все' || selectedSpecializations.length > 0 || searchQuery.trim();

  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Услуги OnlyVet
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональные ветеринарные консультации дистанционно. 
              Выберите подходящий формат помощи для вашего питомца.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Поиск и категория */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Поиск */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск услуг (например: анализы, онкология, консультация)"
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
            </div>

            {/* Специализации */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Специализация:</span>
              {availableSpecializations.map((spec) => (
                <button
                  key={spec}
                  onClick={() => toggleSpecialization(spec)}
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-medium transition-colors
                    ${selectedSpecializations.includes(spec)
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {specializationLabels[spec] || spec}
                </button>
              ))}

              {/* Сброс фильтров */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="ml-auto text-sm text-primary hover:text-primary-dark font-medium"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>

            {/* Результат поиска */}
            <div className="text-sm text-gray-500">
              Найдено услуг: <span className="font-semibold text-gray-900">{filteredServices.length}</span>
              {hasActiveFilters && (
                <span className="ml-2">из <span className="font-semibold">{services.length}</span></span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Список услуг */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} showDetailsButton={false} />
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

      {/* Как выбрать услугу */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Как выбрать услугу
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                🩺 Онлайн-консультация
              </h3>
              <p className="text-gray-600 text-sm">
                Подходит для первичного обращения с любыми вопросами здоровья питомца. 
                Врач соберёт анамнез, оценит состояние и даст рекомендации.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                🔍 Второе мнение
              </h3>
              <p className="text-gray-600 text-sm">
                Если вы уже получили диагноз в клинике, но хотите убедиться 
                в правильности назначений или рассмотреть альтернативы.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                📊 Разбор анализов и УЗИ
              </h3>
              <p className="text-gray-600 text-sm">
                Подробная расшифровка результатов исследований с объяснением 
                всех показателей и их значения для вашего питомца.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                📋 Долгосрочное сопровождение
              </h3>
              <p className="text-gray-600 text-sm">
                Для пациентов с хроническими заболеваниями. Регулярный контроль, 
                корректировка лечения и планирование обследований.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Нужна помощь в выборе?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Напишите нам, и мы поможем подобрать оптимальный формат консультации 
            для вашей ситуации
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
