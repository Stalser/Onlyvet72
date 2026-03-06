'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const mainNavLinks = [
  { href: '/services', label: 'Услуги' },
  { href: '/doctors', label: 'Врачи' },
  { href: '/prices', label: 'Цены' },
  { href: '/reviews', label: 'Отзывы' },
];

const dropdownLinks = [
  { href: '/how-it-works', label: 'Как это работает' },
  { href: '/safety', label: 'Безопасность' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'О сервисе' },
  { href: '/documents', label: 'Документы' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Поиск по всем страницам - перенаправляем на страницу с результатами
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-header.png"
              alt="OnlyVet"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Выпадающее меню */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                Ещё
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-gray-700 hover:text-primary hover:bg-primary-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Поиск */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              aria-label="Поиск"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>

          {/* Кнопка записи */}
          <div className="hidden lg:block">
            <Link
              href="/booking"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Записаться
            </Link>
          </div>

          {/* Мобильное меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Поиск для десктопа */}
        {isSearchOpen && (
          <div className="hidden lg:block py-4 border-t border-gray-200">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по сайту (например: анализы, онкология, консультация)"
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Найти
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="px-4 py-2.5 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
            </form>
          </div>
        )}

        {/* Мобильное меню */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {/* Поиск в мобильном меню */}
              <form onSubmit={handleSearch} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск по сайту"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-gray-200">
                <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">Дополнительно</p>
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
                >
                  Записаться на консультацию
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
