export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Политика конфиденциальности
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Как мы собираем, храним и защищаем ваши персональные данные
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
                Пожалуйста, замените этот текст на актуальную политику конфиденциальности 
                из файла «политика хранения onlyvet.pages».
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 mb-4">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
              персональных данных пользователей сервиса OnlyVet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Сбор данных</h2>
            <p className="text-gray-700 mb-4">
              Мы собираем следующие категории данных:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Контактная информация (имя, email, телефон)</li>
              <li>Информация о питомце (кличка, вид, порода, возраст)</li>
              <li>Медицинская информация (история болезни, анализы, назначения)</li>
              <li>Платёжная информация</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Использование данных</h2>
            <p className="text-gray-700 mb-4">
              Собранные данные используются для:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Предоставления ветеринарных консультаций</li>
              <li>Связи с пользователем</li>
              <li>Обработки платежей</li>
              <li>Улучшения качества сервиса</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Защита данных</h2>
            <p className="text-gray-700 mb-4">
              Мы применяем технические и организационные меры для защиты ваших данных 
              от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Передача данных</h2>
            <p className="text-gray-700 mb-4">
              Мы не передаём персональные данные третьим лицам, за исключением случаев, 
              предусмотренных законодательством или необходимых для оказания услуг 
              (например, платёжным системам).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Права пользователя</h2>
            <p className="text-gray-700 mb-4">
              Пользователь имеет право на доступ, исправление и удаление своих персональных 
              данных. Для этого необходимо направить запрос на электронную почту сервиса.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Контакты</h2>
            <p className="text-gray-700 mb-4">
              По вопросам обработки персональных данных обращайтесь:
              <br />
              Email: <a href="mailto:privacy@onlyvet.ru" className="text-primary hover:underline">privacy@onlyvet.ru</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
