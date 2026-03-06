const testimonials = [
  {
    name: 'Елена',
    city: 'Москва',
    pet: 'Кот Марс',
    petAge: '5 лет',
    service: 'Разбор анализов',
    text: 'Благодаря онлайн-консультации смогли вовремя заметить проблему с почками. Врач подробно объяснил анализы — каждый показатель, что значит повышение креатинина и мочевины. Назначили диету и добавки. Сейчас кот чувствует себя отлично, пересдали анализы через месяц — всё значительно лучше!',
    result: 'Своевременное выявление проблемы с почками',
  },
  {
    name: 'Дмитрий',
    city: 'Санкт-Петербург',
    pet: 'Собака Альма',
    petAge: '3 года',
    service: 'Второе мнение',
    text: 'Получили второе мнение по сложному дерматологическому случаю. У собаки была хроническая аллергия, которую лечили уже полгода без особого успеха. Оказалось, что предыдущее лечение было неполным — не учли возможную пищевую непереносимость. После корректировки диеты и добавления препаратов всё прошло за пару недель.',
    result: 'Успешное лечение после корректировки диагноза',
  },
  {
    name: 'Мария',
    city: 'Екатеринбург',
    pet: 'Кошка Муся',
    petAge: '8 лет',
    service: 'Сопровождение хронического заболевания',
    text: 'Очень удобно для хронического пациента. У кошки ХБП, нужно регулярно наблюдать за анализами и корректировать терапию. Не нужно каждый раз везти кошку в клинику просто за консультацией — она очень стрессует в дороге. Врач всегда на связи, помогает расшифровать новые анализы и скорректировать лечение.',
    result: 'Регулярное наблюдение без стресса для животного',
  },
  {
    name: 'Александр',
    city: 'Казань',
    pet: 'Собака Бим',
    petAge: '6 лет',
    service: 'Онлайн-консультация',
    text: 'Собака начала хромать, но не было возможности сразу поехать в клинику — жили за городом. Проконсультировались онлайн, врач подробно расспросил о симптомах, посмотрел видео, как собака двигается. Порекомендовал сделать рентген в ближайшей клинике и временно ограничить нагрузку. Оказалось, растяжение связок. Всё зажило за пару недель.',
    result: 'Быстрая помощь в неэкстренной ситуации',
  },
  {
    name: 'Ольга',
    city: 'Новосибирск',
    pet: 'Кот Барсик',
    petAge: '12 лет',
    service: 'Второе мнение',
    text: 'Коту поставили диагноз «лимфома» и предложили эвтаназию. Решила получить второе мнение. Врач OnlyVet внимательно изучил все анализы, гистологию, и сказал, что диагноз не совсем однозначен. Порекомендовал дополнительную диагностику и схему поддерживающей терапии. Кот жив уже полгода, чувствует себя нормально. Спасибо за надежду!',
    result: 'Продление жизни питомца',
  },
  {
    name: 'Ирина',
    city: 'Минск',
    pet: 'Собака Джесси',
    petAge: '2 года',
    service: 'Разбор анализов',
    text: 'Щенок плохо набирал вес, постоянно был вялый. Сдали кучу анализов в местной клинике, но ничего не могли понять. Врач онлайн внимательно изучил все результаты, заметил, что не хватает одного важного анализа. Когда сделали — обнаружили паразитов. После лечения щенок наконец начал расти и веселиться!',
    result: 'Точная диагностика после подробного разбора',
  },
];

const stats = [
  { value: '500+', label: 'Проведённых консультаций' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '24 ч', label: 'Среднее время ответа' },
  { value: '50+', label: 'География клиентов' },
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Отзывы владельцев животных
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Реальные истории тех, кто уже воспользовался нашими консультациями. 
              Делимся с разрешения владельцев.
            </p>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center">
                      <span className="text-2xl">🐾</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{testimonial.pet}</p>
                      <p className="text-gray-500 text-sm">{testimonial.petAge}</p>
                    </div>
                    <div className="text-3xl">🐕</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                <div className="bg-primary-light border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Результат:</span> {testimonial.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Хотите стать частью наших историй?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Запишитесь на консультацию и получите профессиональную помощь для вашего питомца
          </p>
          <a
            href="mailto:consult@onlyvet.ru"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
          >
            Записаться на консультацию
          </a>
        </div>
      </section>
    </div>
  );
}
