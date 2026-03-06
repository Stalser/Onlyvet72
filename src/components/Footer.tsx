import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { href: '/services', label: 'Онлайн-консультация' },
    { href: '/services', label: 'Разбор анализов' },
    { href: '/services', label: 'Второе мнение' },
    { href: '/services', label: 'Сопровождение' },
  ],
  info: [
    { href: '/how-it-works', label: 'Как это работает' },
    { href: '/safety', label: 'Безопасность' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'О сервисе' },
  ],
  legal: [
    { href: '/documents', label: 'Документы' },
    { href: '/documents', label: 'Политика конфиденциальности' },
    { href: '/documents', label: 'Пользовательское соглашение' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.svg"
                alt="OnlyVet"
                width={140}
                height={45}
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Профессиональные онлайн-консультации ветеринарного врача для кошек и собак
            </p>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Услуги</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Информация</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Документы */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Документы</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} OnlyVet. Все права защищены.
            </p>
            <p className="text-gray-400 text-xs">
              Онлайн-консультация не заменяет очный приём ветеринарного врача
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
