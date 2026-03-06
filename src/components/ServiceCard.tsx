import Link from 'next/link';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  showDetailsButton?: boolean;
}

const categoryLabels: Record<string, string> = {
  'консультация': 'Консультация',
  'второе мнение': 'Второе мнение',
  'диагностика': 'Диагностика',
  'сопровождение': 'Сопровождение',
};

export default function ServiceCard({
  service,
  showDetailsButton = true,
}: ServiceCardProps) {
  return (
    <article
      className="
        h-full
        bg-white
        rounded-2xl
        border border-gray-200
        p-6
        flex
        flex-col
        shadow-sm
        transition-all
        duration-150
        hover:-translate-y-[2px]
        hover:shadow-md
      "
    >
      <div className="mb-3">
        <div className="text-xs uppercase tracking-wider text-secondary mb-2">
          {categoryLabels[service.category] || service.category}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
      </div>

      <p className="text-gray-600 text-sm mb-4 flex-1">
        {service.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs bg-primary-light text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between text-sm">
        <span className="font-bold text-primary text-base">
          {service.priceLabel}
        </span>

        {showDetailsButton && (
          <Link
            href="/services"
            className="text-primary hover:text-primary-dark font-medium"
          >
            Подробнее →
          </Link>
        )}
      </div>
    </article>
  );
}
