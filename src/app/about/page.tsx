import Link from 'next/link';

const values = [
  {
    icon: '🩺',
    title: 'Профессионализм',
    description: 'Все врачи имеют высшее ветеринарное образование, сертификаты и регулярно повышают квалификацию.',
  },
  {
    icon: '📚',
    title: 'Доказательная медицина',
    description: 'Рекомендации основаны на современных научных данных, международных протоколах и клинических исследованиях.',
  },
  {
    icon: '❤️',
    title: 'Забота о пациентах',
    description: 'Главный приоритет — благополучие животных. Минимизируем стресс от визитов в клинику там, где это возможно.',
  },
  {
    icon: '🔒',
    title: 'Прозрачность',
    description: 'Чёткие правила работы, понятное ценообразование и полная конфиденциальность медицинской информации.',
  },
];

const benefits = [
  {
    title: 'Для владельцев',
    items: [
      'Экономия времени — не нужно ехать в клинику',
      'Отсутствие стресса для животного',
      'Быстрый доступ к экспертному мнению',
      'Возможность получить второе мнение',
      'Сопровождение хронических заболеваний без частых визитов',
    ],
  },
  {
    title: 'Для животных',
    items: [
      'Минимум стресса — остаются в привычной обстановке',
      'Отсутствие риска внутрибольничных инфекций',
      'Комфортная среда для пожилых и пугливых животных',
      'Своевременная помощь без задержек',
    ],
  },
];

const principles = [
  'Онлайн-консультация не заменяет очный приём, когда он необходим',
  'Врач всегда сообщает о пределах своих возможностей дистанционно',
  'При подозрении на экстренное состояние — немедленное направление в клинику',
  'Рекомендации даются с объяснением логики назначений',
  'Владелец получает письменное заключение для сохранения информации',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О сервисе OnlyVet
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональный онлайн-сервис ветеринарных консультаций. 
              Помогаем владельцам кошек и собак получать экспертную помощь 
              дистанционно, без стресса для питомцев.
            </p>
          </div>
        </div>
      </section>

      {/* Философия */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наша философия
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                OnlyVet — это не клиника с офлайн-приёмами и не маркетплейс ветеринарных услуг. 
                Это экспертная онлайн-платформа, где ветеринарные специалисты помогают владельцам животных.
              </p>
              <p>
                Мы верим, что качественная ветеринарная помощь должна быть доступной и удобной. 
                Онлайн-формат не заменяет очный приём полностью, но помогает владельцам принимать 
                безопасные и обоснованные решения о здоровье питомцев.
              </p>
              <p>
                Наша миссия — снизить количество ненужных визитов в клинику, обеспечить своевременный 
                доступ к экспертному мнению и сопровождать хронических пациентов без дополнительного стресса.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Преимущества онлайн-формата
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Почему владельцы и животные выбирают дистанционные консультации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-primary text-lg mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Принципы работы */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Принципы работы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Правила, которые мы соблюдаем в каждой консультации
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Готовы записаться на консультацию?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Получите профессиональную помощь для вашего питомца без стресса и поездок в клинику
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
