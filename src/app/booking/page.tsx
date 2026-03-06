'use client';

import { useState } from 'react';
import Link from 'next/link';

type BookingMode = 'short' | 'full';

export default function BookingPage() {
  const [kind, setKind] = useState<BookingMode>('short');

  // Контакты
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');

  // Питомец (для полной формы)
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petAge, setPetAge] = useState('');

  // Проблема
  const [complaint, setComplaint] = useState('');

  // Статус
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log({
      kind,
      lastName,
      firstName,
      phone,
      email,
      telegram,
      petName,
      petSpecies,
      petAge,
      complaint,
    });

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/onlyvet_clinic', '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 bg-gradient-to-br from-primary-light via-white to-white py-16">
          <div className="max-w-2xl mx-auto px-4">
            <section className="bg-white rounded-3xl border border-emerald-200 shadow-lg p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-2xl">✓</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Заявка отправлена
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Мы получили вашу заявку. Администратор свяжется с вами в ближайшее время
                    для подтверждения времени консультации и уточнения деталей.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setLastName('');
                    setFirstName('');
                    setPhone('');
                    setEmail('');
                    setTelegram('');
                    setPetName('');
                    setPetSpecies('');
                    setPetAge('');
                    setComplaint('');
                  }}
                  className="px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition"
                >
                  Создать новую заявку
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm hover:bg-gray-50 transition"
                >
                  На главную
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-br from-primary-light via-white to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Хлебные крошки */}
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Записаться на консультацию</span>
          </nav>

          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Записаться на онлайн-консультацию
            </h1>
            <p className="text-gray-600">
              Выберите удобный формат: короткая заявка, подробная форма или переписка в Telegram
            </p>
          </div>

          {/* Выбор формата */}
          <section className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Краткая заявка */}
              <button
                type="button"
                onClick={() => setKind('short')}
                className={`
                  rounded-3xl border px-5 py-5 text-left
                  transition-all duration-150
                  flex flex-col justify-between
                  ${kind === 'short'
                    ? 'bg-emerald-50 border-emerald-300 shadow-lg -translate-y-[1px]'
                    : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:-translate-y-[1px]'
                  }
                `}
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-700 mb-1">
                    Краткая заявка
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Только контакты и суть проблемы
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    Администратор уточнит детали при созвоне
                  </p>
                </div>
              </button>

              {/* Подробная заявка */}
              <button
                type="button"
                onClick={() => setKind('full')}
                className={`
                  rounded-3xl border px-5 py-5 text-left
                  transition-all duration-150
                  flex flex-col justify-between
                  ${kind === 'full'
                    ? 'bg-emerald-50 border-emerald-300 shadow-lg -translate-y-[1px]'
                    : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:-translate-y-[1px]'
                  }
                `}
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-700 mb-1">
                    Подробная заявка
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Полное описание с выбором врача
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    Для сложных случаев с деталями
                  </p>
                </div>
              </button>

              {/* Telegram */}
              <button
                type="button"
                onClick={handleTelegramClick}
                className="
                  rounded-3xl border border-sky-200 bg-sky-50
                  px-5 py-5 text-left
                  transition-all duration-150
                  hover:shadow-lg hover:-translate-y-[1px]
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center">
                    <span className="text-white text-sm">✈</span>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-sky-800">
                    Telegram
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Написать администратору
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  Удобно для вопросов и быстрой связи
                </p>
              </button>
            </div>
          </section>

          {/* Форма */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-8 space-y-6"
          >
            {/* Контактные данные */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Контактные данные
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Фамилия *
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Имя *
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Иван"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Отчество
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Иванович"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+7 900 000-00-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telegram
                  </label>
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="@username"
                  />
                </div>
              </div>
            </div>

            {/* Питомец (только для полной формы) */}
            {kind === 'full' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Информация о питомце
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Кличка *
                    </label>
                    <input
                      type="text"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Барсик"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Вид животного
                    </label>
                    <input
                      type="text"
                      value={petSpecies}
                      onChange={(e) => setPetSpecies(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Кошка / Собака"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Возраст
                    </label>
                    <input
                      type="text"
                      value={petAge}
                      onChange={(e) => setPetAge(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="2 года"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Описание проблемы */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Описание проблемы
              </h2>
              <textarea
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                rows={kind === 'short' ? 3 : 5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={
                  kind === 'short'
                    ? 'Кратко опишите проблему (например: кошка не ест второй день)'
                    : 'Подробно опишите симптомы, историю заболевания, текущие назначения и результаты анализов'
                }
              />
            </div>

            {/* Согласия */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">
                  Я согласен(на) на{' '}
                  <Link href="/documents/consent" className="text-primary hover:underline">
                    обработку персональных данных
                  </Link>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700">
                  Я принимаю условия{' '}
                  <Link href="/documents/terms" className="text-primary hover:underline">
                    пользовательского соглашения
                  </Link>
                </span>
              </label>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full py-4 rounded-xl
                bg-primary text-white
                font-semibold text-lg
                hover:bg-primary-dark
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors
              "
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              После отправки администратор свяжется с вами для подтверждения времени консультации
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
