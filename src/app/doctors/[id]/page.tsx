import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { doctors } from '@/data/doctors';
import { services } from '@/data/services';

interface DoctorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  // Услуги, которые соответствуют специализации врача
  const doctorServices = services.filter((s) =>
    s.specializations.includes(doctor.specialization)
  );

  const specializationLabels: Record<string, string> = {
    эксперт: 'Эксперт по сложным случаям',
    терапия: 'Терапевт',
    диагностика: 'Диагност',
    онкология: 'Онколог',
  };

  return (
    <div className="flex flex-col">
      {/* Hero-блок с информацией о враче */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Фото/аватар */}
            <div className="flex justify-center lg:justify-start">
              {doctor.imageUrl ? (
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 ring-4 ring-primary-light">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 rounded-full bg-primary-light flex items-center justify-center ring-4 ring-primary-light">
                  <span className="text-6xl font-bold text-primary">
                    {doctor.initials}
                  </span>
                </div>
              )}
            </div>

            {/* Информация */}
            <div className="lg:col-span-2">
              <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
                {specializationLabels[doctor.specialization] || doctor.specialization}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {doctor.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {doctor.role}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {doctor.servicesShort}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {doctor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-sm bg-primary-light text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/booking?doctorId=${doctor.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
                >
                  Записаться к врачу
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary-light transition-colors font-medium"
                >
                  Все услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О враче */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            О специалисте
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Специализация
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {doctor.servicesFull.join(' ')}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Опыт работы
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {doctor.experienceLabel}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                С какими проблемами работает
              </h3>
              <ul className="space-y-3">
                {doctor.servicesFull.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги врача */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Услуги, которые оказывает врач
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Выберите подходящую услугу для записи на консультацию
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xs uppercase tracking-wider text-secondary mb-2">
                  {service.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">
                    {service.priceLabel}
                  </span>
                  <Link
                    href={`/booking?doctorId=${doctor.id}&serviceId=${service.id}`}
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Записаться →
                  </Link>
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
            Готовы записаться на консультацию?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <Link
            href={`/booking?doctorId=${doctor.id}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
          >
            Записаться к {doctor.name.split(' ')[0]}
          </Link>
        </div>
      </section>
    </div>
  );
}
