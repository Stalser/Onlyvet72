import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Заявка и описание ситуации',
    description: 'Вы оставляете заявку и подробно описываете проблему. Расскажите о симптомах, длительности заболевания, особенностях поведения животного.',
    details: [
      'Заполните форму на сайте или напишите на почту',
      'Опишите симптомы и историю заболевания',
      'Укажите возраст, породу и пол животного',
      'Приложите имеющиеся документы: анализы, снимки, назначения',
    ],
    tip: 'Чем подробнее вы опишете ситуацию, тем точнее будет предварительная оценка врача.',
  },
  {
    number: '02',
    title: 'Изучение информации врачом',
    description: 'Врач внимательно изучает все предоставленные данные, анализирует документы и формулирует уточняющие вопросы.',
    details: [
      'Врач получает вашу заявку',
      'Изучает приложенные документы и анализы',
      'Формулирует предварительные гипотезы',
      'Подготавливает вопросы для уточнения деталей',
    ],
    tip: 'Обычно на этом этапе врач связывается в течение 24 часов для уточнения деталей.',
  },
  {
    number: '03',
    title: 'Онлайн-консультация',
    description: 'Проводится видеозвонок или консультация в чате. Врач задаёт вопросы, уточняет детали и обсуждает с вами ситуацию.',
    details: [
      'Видеозвонок через удобную платформу (Zoom, Telegram, WhatsApp)',
      'Или текстовая консультация в чате',
      'Длительность: 30–60 минут',
      'Возможность задать все вопросы в реальном времени',
    ],
    tip: 'Подготовьтесь к звонку: обеспечьте хорошее освещение и будьте рядом с животным.',
  },
  {
    number: '04',
    title: 'Письменное заключение и рекомендации',
    description: 'После консультации вы получаете подробное письменное заключение с рекомендациями и планом действий.',
    details: [
      'Письменное резюме консультации',
      'Рекомендации по дополнительным исследованиям',
      'Схема лечения (если требуется)',
      'План наблюдения и контрольные точки',
    ],
    tip: 'Заключение сохраняется у вас — вы можете вернуться к нему в любой момент.',
  },
];

const preparationTips = [
  {
    icon: '📝',
    title: 'Подготовьте историю',
    text: 'Запишите ключевые даты: когда появились симптомы, что менялось в состоянии',
  },
  {
    icon: '📸',
    title: 'Соберите документы',
    text: 'Все анализы, снимки, назначения — чем больше информации, тем лучше',
  },
  {
    icon: '🎥',
    title: 'Снимите видео',
    text: 'Если есть необычное поведение или симптомы — короткое видео поможет врачу',
  },
  {
    icon: '❓',
    title: 'Список вопросов',
    text: 'Запишите вопросы заранее, чтобы ничего не забыть во время консультации',
  },
];

const formats = [
  {
    name: 'Видеоконсультация',
    duration: '30–60 минут',
    platforms: ['Zoom', 'Telegram', 'WhatsApp'],
    best: 'Для первичных консультаций и сложных случаев',
  },
  {
    name: 'Текстовая консультация',
    duration: 'В течение 24 часов',
    platforms: ['Email', 'Мессенджеры'],
    best: 'Для разбора анализов и вторых мнений',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Как проходит консультация
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Простой и прозрачный процесс из четырёх шагов. 
              Начните с заявки — получите экспертную помощь для вашего питомца.
            </p>
          </div>
        </div>
      </section>

      {/* Пошаговый процесс */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Номер и заголовок */}
                <div className="lg:col-span-1">
                  <div className="text-6xl font-bold text-primary-light mb-4">{step.number}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                </div>

                {/* Описание и детали */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-primary text-lg mt-0.5">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary-light border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Совет:</span> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форматы консультаций */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Форматы консультаций
            </h2>
            <p className="text-lg text-gray-600">
              Выберите удобный способ общения с врачом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formats.map((format, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{format.name}</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-semibold">Длительность:</span> {format.duration}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Платформы:</span> {format.platforms.join(', ')}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Подходит:</span> {format.best}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Советы по подготовке */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как подготовиться к консультации
            </h2>
            <p className="text-lg text-gray-600">
              Несколько простых советов помогут сделать консультацию максимально эффективной
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationTips.map((tip, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Оставьте заявку на консультацию — мы свяжемся с вами в ближайшее время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:consult@onlyvet.ru"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Написать на почту
            </a>
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
