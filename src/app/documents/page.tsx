import Link from 'next/link';

const documents = [
  {
    category: 'Основные документы',
    items: [
      {
        title: 'Пользовательское соглашение',
        description: 'Правила использования сервиса OnlyVet, права и обязанности сторон',
        icon: '📄',
        href: '/documents/terms',
      },
      {
        title: 'Политика конфиденциальности',
        description: 'Как мы собираем, храним и защищаем ваши персональные данные',
        icon: '🔒',
        href: '/documents/privacy',
      },
      {
        title: 'Правила оплаты и возврата',
        description: 'Условия оплаты услуг, порядок возврата средств',
        icon: '💳',
        href: '/documents/refund',
      },
    ],
  },
  {
    category: 'Медицинские документы',
    items: [
      {
        title: 'Согласие на дистанционную консультацию',
        description: 'Информированное согласие на получение ветеринарных услуг онлайн',
        icon: '✍️',
        href: '/documents/consent',
      },
      {
        title: 'Дисклеймер',
        description: 'Важная информация об ограничениях онлайн-формата',
        icon: '⚠️',
        href: '/documents/disclaimer',
      },
    ],
  },
  {
    category: 'Дополнительно',
    items: [
      {
        title: 'Политика использования cookies',
        description: 'Информация об использовании файлов cookie на сайте',
        icon: '🍪',
        href: '/documents/cookies',
      },
      {
        title: 'Правила использования сайта',
        description: 'Правила и рекомендации по работе с сайтом',
        icon: '📋',
        href: '/documents/site-rules',
      },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Документы
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Юридическая информация и документы, регулирующие работу сервиса OnlyVet. 
            Рекомендуем ознакомиться перед записью на консультацию.
          </p>
        </div>
      </section>

      {/* Список документов */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {documents.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.href}
                      className="p-6 bg-gray-50 rounded-xl hover:bg-primary-light hover:shadow-md transition-all"
                    >
                      <div className="text-3xl mb-4">{doc.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Важная информация */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Важная информация
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Перед записью на консультацию пожалуйста ознакомьтесь с документами выше. 
                Особенно важно прочитать <strong>дисклеймер</strong> и <strong>согласие на дистанционную консультацию</strong>.
              </p>
              <p>
                Запись на консультацию означает автоматическое согласие с условиями 
                <Link href="/documents/terms" className="text-primary hover:underline ml-1">пользовательского соглашения</Link>.
              </p>
              <div className="bg-primary-light border-l-4 border-primary p-4 rounded-r-lg mt-6">
                <p className="text-gray-700">
                  <span className="font-semibold">Обратите внимание:</span> Онлайн-консультация 
                  не заменяет очный приём ветеринарного врача. В экстренных случаях немедленно 
                  обращайтесь в ближайшую клинику.
                </p>
              </div>
            </div>
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
            Если у вас возникли вопросы по документам или условиям работы сервиса, напишите нам
          </p>
          <a
            href="mailto:consult@onlyvet.ru"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
          >
            Написать нам
          </a>
        </div>
      </section>
    </div>
  );
}
