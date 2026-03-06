import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import ReviewCard from '@/components/ReviewCard';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { reviews } from '@/data/reviews';

const whenSuitable = [
  {
    icon: '🔍',
    title: 'Разобраться в симптомах',
    description: 'Понять, насколько серьёзна ситуация и нужна ли срочная помощь',
  },
  {
    icon: '📊',
    title: 'Интерпретировать анализы',
    description: 'Получить расшифровку и объяснение результатов исследований',
  },
  {
    icon: '🩺',
    title: 'Получить второе мнение',
    description: 'Убедиться в правильности диагноза или предложенного плана лечения',
  },
  {
    icon: '📋',
    title: 'Сопровождение хронических заболеваний',
    description: 'Корректировка терапии и наблюдение в динамике',
  },
];

const whatPossible = [
  'Оценка состояния животного по описанию и документам',
  'Расшифровка анализов крови, мочи, УЗИ, рентгена',
  'Рекомендации по дополнительным исследованиям',
  'Корректировка схемы лечения',
  'Помощь в выборе дальнейшей тактики',
  'Ответы на вопросы по уходу и содержанию',
];

const whatNotPossible = [
  {
    limitation: 'Физический осмотр',
    explanation: 'Врач не может пропальпировать, прослушать или провести визуальный осмотр',
  },
  {
    limitation: 'Экстренная помощь',
    explanation: 'При острых состояниях (травма, отравление, кровотечение) нужен очный приём',
  },
  {
    limitation: 'Процедурные манипуляции',
    explanation: 'Постановка капельниц, уколов, обработка ран требуют присутствия',
  },
  {
    limitation: 'Диагностика без анализов',
    explanation: 'Некоторые диагнозы требуют лабораторного подтверждения',
  },
];

const consultationSteps = [
  {
    step: '01',
    title: 'Опишите ситуацию',
    description: 'Заполните форму, расскажите о проблеме и приложите имеющиеся документы',
  },
  {
    step: '02',
    title: 'Врач изучает информацию',
    description: 'Специалист внимательно анализирует все данные и готовит вопросы',
  },
  {
    step: '03',
    title: 'Онлайн-консультация',
    description: 'Видеозвонок или чат с врачом, обсуждение симптомов и истории',
  },
  {
    step: '04',
    title: 'Письменное заключение',
    description: 'Вы получаете подробные рекомендации и план действий',
  },
];

const safetyPoints = [
  {
    icon: '👨‍⚕️',
    title: 'Квалифицированные врачи',
    description: 'Все специалисты имеют высшее ветеринарное образование и сертификаты',
  },
  {
    icon: '📚',
    title: 'Доказательная медицина',
    description: 'Рекомендации основаны на современных научных данных и протоколах',
  },
  {
    icon: '🔒',
    title: 'Конфиденциальность',
    description: 'Ваши данные и история консультаций защищены и не передаются третьим лицам',
  },
  {
    icon: '⚖️',
    title: 'Прозрачная ответственность',
    description: 'Чёткие правила сервиса и юридическое оформление всех консультаций',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-secondary font-medium tracking-wider text-sm mb-4">BEYOND CARE</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Профессиональные онлайн-консультации{' '}
              <span className="text-primary">ветеринарного врача</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Экспертная помощь для кошек и собак дистанционно. 
              Разбор анализов, второе мнение и сопровождение хронических заболеваний 
              без стресса для вашего питомца.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                Узнать больше об услугах
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Когда онлайн-консультация подходит */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Когда подходит онлайн-консультация
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Онлайн-формат эффективен для многих неэкстренных ситуаций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whenSuitable.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-primary-light transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что можно сделать онлайн */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Что можно сделать{' '}
                <span className="text-primary">онлайн</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Многие вопросы решаются дистанционно без визита в клинику
              </p>
              <ul className="space-y-4">
                {whatPossible.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center p-8">
                <div className="text-center">
                  <span className="text-8xl">🐱🐶</span>
                  <p className="text-gray-500 mt-6 text-lg">
                    Забота о питомце<br />не выходя из дома
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что онлайн-консультация не может заменить */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ограничения онлайн-формата
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Важно понимать, когда необходим очный приём
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatNotPossible.map((item, index) => (
              <div
                key={index}
                className="p-6 border-2 border-gray-200 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.limitation}</h3>
                <p className="text-gray-600 text-sm">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как проходит консультация */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как проходит консультация
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс из четырёх шагов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary-light absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Подробнее о процессе →
            </Link>
          </div>
        </div>
      </section>

      {/* Безопасность */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему сервис безопасен
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход и прозрачные правила работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyPoints.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональные ветеринарные консультации дистанционно
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Все услуги →
            </Link>
          </div>
        </div>
      </section>

      {/* Врача */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши специалисты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Опытные ветеринарные врачи с экспертизой в различных областях
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Link key={doctor.id} href={`/doctors/${doctor.id}`}>
                <DoctorCard doctor={doctor} />
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/doctors"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Все врачи →
            </Link>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы владельцев животных
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Истории тех, кто уже воспользовался нашими консультациями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Читать все отзывы →
            </Link>
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
            Оставьте заявку, и мы свяжемся с вами в ближайшее время для уточнения деталей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
            >
              Заполнить форму записи
            </Link>
            <a
              href="mailto:consult@onlyvet.ru"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary-light transition-colors text-lg font-medium"
            >
              Написать на почту
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
