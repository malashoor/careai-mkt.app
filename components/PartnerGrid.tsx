import Image from 'next/image';

const partners = [
  { name: 'Hospitals', src: '/images/Hospital.png' },
  { name: 'Insurance', src: '/images/Insurance.png' },
  { name: 'Pharmacies', src: '/images/Pharmacies.png' },
];

export default function PartnerGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
          {partners.map((p) => (
            <li key={p.name} className="w-full flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.name}
                width={240}
                height={80}
                className="h-16 md:h-20 w-auto max-w-[220px] object-contain opacity-90 hover:opacity-100 transition"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
