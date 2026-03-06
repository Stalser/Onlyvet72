'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import DoctorCard from '@/components/DoctorCard';
import { doctors } from '@/data/doctors';

type DoctorSpecialization = 'все' | 'эксперт' | 'терапия' | 'диагностика' | 'онкология';

const specializationLabels: Record<DoctorSpecialization, string> = {
  'все': 'Все врачи',
  'эксперт': 'Эксперты',
  'терапия': 'Терапевты',
  'диагностика': 'Диагносты',
  'онкология': 'Онкологи',
};

export default function DoctorsPage() {
  const [selectedSpecialization, setSelectedSpecialization] = useState<DoctorSpecialization>('все');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация врачей
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      // Фильтр по специализации
      if (selectedSpecialization !== 'все' && doctor.specialization !== selectedSpecialization) {
        return false;
      }

      // Поиск по имени, роли, тегам
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inName = doctor.name.toLowerCase().includes(query);
        const inRole = doctor.role.toLowerCase().includes(query);
        const inTags = doctor.tags.some((tag) => tag.toLowerCase().includes(query));
        const inServices = doctor.servicesShort.toLowerCase().includes(query);
        if (!inName && !inRole && !inTags && !inServices) return false;
      }

      return true;
    });
  }, [selectedSpecialization, searchQuery]);

  const clearFilters = () => {
    setSelectedSpecialization('все');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedSpecialization !== 'все' || searchQuery.trim();

  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши специалисты
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Опытные ветеринарные врачи с экспертизой в различных областях. 
              Каждый специалист готов помочь вашему питомцу получить качественную 
              медицинскую помощь дистанционно.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Поиск и специализация */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Поиск */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск врача (например: онкология, терапия, Эльвин)"
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

              {/* Специализация */}
              <div className="flex flex-wrap gap-2">
                {(Object.keys(specializationLabels) as DoctorSpecialization[]).map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialization(spec)}
                    className={`
                      px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                      ${selectedSpecialization === spec
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {specializationLabels[spec]}
                  </button>
                ))}
              </div>
            </div>

            {/* Результат поиска */}
            <div className="text-sm text-gray-500">
              Найдено врачей: <span className="font-semibold text-gray-900">{filteredDoctors.length}</span>
              {hasActiveFilters && (
                <span className="ml-2">из <span className="font-semibold">{doctors.length}</span></span>
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
      </section>

      {/* Список врачей */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <Link key={doctor.id} href={`/doctors/${doctor.id}`}>
                  <DoctorCard doctor={doctor} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Врачи не найдены
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

      {/* Как мы работаем */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Почему нам доверяют
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Квалифицированные врачи
              </h3>
              <p className="text-gray-600 text-sm">
                Все специалисты имеют высшее ветеринарное образование и регулярно повышают квалификацию
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Доказательная медицина
              </h3>
              <p className="text-gray-600 text-sm">
                Рекомендации основаны на современных научных данных и международных протоколах
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600 text-sm">
                Каждый случай рассматривается подробно, с учётом всех особенностей пациента
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Готовы записаться к врачу?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Выберите специалиста и оставьте заявку на консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Записаться на консультацию
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
            >
              Посмотреть услуги
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
