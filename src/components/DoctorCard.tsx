import Image from 'next/image';
import type { Doctor } from '@/data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article
      className="
        bg-white
        rounded-2xl
        border border-gray-200
        p-6
        shadow-sm
        transition-all
        duration-150
        hover:-translate-y-[2px]
        hover:shadow-md
      "
    >
      {/* Фото или аватар с инициалами */}
      <div className="flex items-center gap-4 mb-4">
        {doctor.imageUrl ? (
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
            <Image
              src={doctor.imageUrl}
              alt={doctor.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
            <span className="text-xl font-semibold text-primary">
              {doctor.initials}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-sm text-gray-600">{doctor.role}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        {doctor.servicesShort}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {doctor.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs bg-primary-light text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">{doctor.experienceLabel}</p>
      </div>
    </article>
  );
}
