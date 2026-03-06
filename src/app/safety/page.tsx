import Link from 'next/link';

const whatDoctorCan = [
  {
    title: 'Оценить состояние по описанию',
    description: 'Врач анализирует симптомы, историю заболевания и поведение животного на основе вашего подробного описания.',
  },
  {
    title: 'Интерпретировать анализы',
    description: 'Расшифровка результатов крови, мочи, биохимии с объяснением всех отклонений и их значения.',
  },
  {
    title: 'Анализировать снимки',
    description: 'Оценка УЗИ, рентгена, КТ и МРТ по предоставленным изображениям и заключениям.',
  },
  {
    title: 'Рекомендовать исследования',
    description: 'Список необходимых анализов и процедур для уточнения диагноза с приоритетами.',
  },
  {
    title: 'Назначить лечение',
    description: 'Схема терапии с дозировками, кратностью и длительностью приёма препаратов.',
  },
  {
    title: 'Скорректировать терапию',
    description: 'Изменение схемы лечения на основе динамики состояния и контрольных анализов.',
  },
];

const whatDoctorCannot = [
  {
    title: 'Провести физический осмотр',
    description: 'Врач не может пропальпировать живот, прослушать лёгкие и сердце, оценить температуру.',
    recommendation: 'При необходимости очного осмотра врач порекомендует клинику.',
  },
  {
    title: 'Оказать экстренную помощь',
    description: 'Травмы, отравления, кровотечения, судороги требуют немедленного очного вмешательства.',
    recommendation: 'В экстренных случаях сразу обращайтесь в ближайшую клинику.',
  },
  {
    title: 'Выполнить процедуры',
    description: 'Постановка капельниц, уколов, обработка ран, хирургические манипуляции.',
    recommendation: 'Врач даст рекомендации, где можно выполнить назначения.',
  },
  {
    title: 'Гарантировать диагноз без анализов',
    description: 'Некоторые заболевания требуют лабораторного подтверждения для точной диагностики.',
    recommendation: 'Врач объяснит, какие анализы необходимы.',
  },
];

const decisionMaking = [
  {
    step: 'Сбор анамнеза',
    description: 'Врач получает подробную информацию о симптомах, истории заболевания, условиях содержания и питания.',
  },
  {
    step: 'Анализ документов',
    description: 'Изучение результатов анализов, снимков, предыдущих назначений и их эффективности.',
  },
  {
    step: 'Формулировка гипотез',
    description: 'На основе данных врач выдвигает несколько возможных диагнозов с оценкой вероятности.',
  },
  {
    step: 'План действий',
    description: 'Рекомендации по дополнительным исследованиям или схеме лечения с контрольными точками.',
  },
  {
    step: 'Наблюдение',
    description: 'Врач отслеживает динамику и при необходимости корректирует назначения.',
  },
];

const responsibility = [
  {
    title: 'Ответственность врача',
    items: [
      'Предоставление квалифицированной консультации на основе современных данных',
      'Обоснование рекомендаций с объяснением логики назначений',
      'Своевременное направление на очный приём при необходимости',
      'Конфиденциальность медицинской информации',
    ],
  },
  {
    title: 'Ответственность владельца',
    items: [
      'Предоставление полной и достоверной информации о животном',
      'Следование рекомендациям врача',
      'Своевременное сообщение об изменениях состояния',
      'Обращение за очной помощью при ухудшении',
    ],
  },
];

export default function SafetyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Безопасность онлайн-консультаций
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Прозрачный подход к возможностям и ограничениям дистанционной ветеринарии. 
              Понимание того, что можно и нельзя сделать онлайн.
            </p>
          </div>
        </div>
      </section>

      {/* Что может врач */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что ветеринарный врач может сделать онлайн
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Дистронционный формат эффективен для многих задач
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatDoctorCan.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-primary text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что нельзя сделать онлайн */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ограничения онлайн-формата
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Важно понимать, когда необходим очный приём
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatDoctorCannot.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white border-2 border-gray-200 rounded-xl"
              >
                <div className="text-error text-2xl mb-3">✗</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-primary-light border-l-4 border-primary p-3 rounded-r">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Рекомендация:</span> {item.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как принимаются клинические решения */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как принимаются клинические решения
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачный процесс анализа и формирования рекомендаций
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {decisionMaking.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ответственность */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ответственность сторон
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Чёткое понимание зон ответственности врача и владельца
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {responsibility.map((section, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-primary text-lg mt-0.5">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Остались вопросы?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Мы готовы ответить на любые вопросы о формате онлайн-консультаций
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Посмотреть FAQ
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
