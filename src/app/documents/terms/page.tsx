import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Пользовательское соглашение
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Правила использования сервиса OnlyVet
          </p>
        </div>
      </section>

      {/* Содержимое */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-secondary-light border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700">
                <span className="font-semibold">Примечание:</span> Это шаблон документа. 
                Пожалуйста, замените этот текст на актуальное пользовательское соглашение 
                из файла «Пользовательское_соглашение_OnlyVet.pages».
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 mb-4">
              1.1. Настоящее Пользовательское соглашение (далее — Соглашение) регулирует 
              отношения между пользователем (далее — Пользователь) и сервисом OnlyVet 
              (далее — Исполнитель) в части использования онлайн-сервиса ветеринарных 
              консультаций.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Настоящее Соглашение является публичной офертой в соответствии с 
              законодательством Российской Федерации.
            </p>
            <p className="text-gray-700 mb-4">
              1.3. Начиная использовать сервис OnlyVet, Пользователь полностью принимает 
              условия настоящего Соглашения.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Предмет соглашения</h2>
            <p className="text-gray-700 mb-4">
              2.1. Исполнитель обязуется предоставлять Пользователю услуги дистанционных 
              ветеринарных консультаций, а Пользователь обязуется оплачивать эти услуги.
            </p>
            <p className="text-gray-700 mb-4">
              2.2. Услуги оказываются дистанционно посредством связи через интернет.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Права и обязанности сторон</h2>
            <p className="text-gray-700 mb-4">
              3.1. <strong>Исполнитель обязуется:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Предоставлять квалифицированные ветеринарные консультации</li>
              <li>Соблюдать конфиденциальность полученной информации</li>
              <li>Предоставлять письменное заключение после консультации</li>
            </ul>

            <p className="text-gray-700 mb-4">
              3.2. <strong>Пользователь обязуется:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Предоставлять достоверную информацию о животном</li>
              <li>Своевременно оплачивать услуги</li>
              <li>Соблюдать правила использования сервиса</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Порядок оказания услуг</h2>
            <p className="text-gray-700 mb-4">
              4.1. Для получения услуги Пользователь оставляет заявку на сайте.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Исполнитель связывается с Пользователем для согласования времени консультации.
            </p>
            <p className="text-gray-700 mb-4">
              4.3. Консультация проводится посредством видеосвязи или в текстовом формате.
            </p>
            <p className="text-gray-700 mb-4">
              4.4. После консультации Пользователь получает письменное заключение.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Ответственность сторон</h2>
            <p className="text-gray-700 mb-4">
              5.1. Исполнитель не несёт ответственности за последствия, возникшие в результате 
              предоставления Пользователем недостоверной информации.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Исполнитель не гарантирует положительный результат лечения, так как он 
              зависит от множества факторов.
            </p>
            <p className="text-gray-700 mb-4">
              5.3. Пользователь несёт ответственность за соблюдение рекомендаций Исполнителя.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Ограничения</h2>
            <p className="text-gray-700 mb-4">
              6.1. Онлайн-консультация не заменяет очный приём ветеринарного врача.
            </p>
            <p className="text-gray-700 mb-4">
              6.2. В экстренных случаях (травма, отравление, кровотечение) необходимо 
              немедленно обратиться в ближайшую ветеринарную клинику.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Заключительные положения</h2>
            <p className="text-gray-700 mb-4">
              7.1. Исполнитель оставляет за собой право вносить изменения в настоящее 
              Соглашение в одностороннем порядке.
            </p>
            <p className="text-gray-700 mb-4">
              7.2. Все споры и разногласия решаются путём переговоров.
            </p>
            <p className="text-gray-700 mb-4">
              7.3. Контакты для связи: consult@onlyvet.ru
            </p>
          </div>
        </div>
      </section>

      {/* Навигация */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/documents"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            ← Вернуться к списку документов
          </Link>
        </div>
      </section>
    </div>
  );
}
