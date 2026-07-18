const features = [
  {
    icon: 'school',
    title: 'Academy & Programs',
    description:
      'Kurikulum komprehensif yang menggabungkan Fiqh Muamalah dengan strategi bisnis modern untuk mencetak entrepreneur tangguh.',
    accent: 'bg-emerald-accent group-hover:bg-emerald-accent group-hover:text-white',
    bar: 'bg-emerald-accent',
    link: 'Lihat Program',
  },
  {
    icon: 'groups',
    title: 'Business Community',
    description:
      'Jaringan eksklusif billionaire muslim untuk kolaborasi strategis, mentoring bisnis, dan akses ke permodalan syariah.',
    accent: 'bg-secondary group-hover:bg-secondary group-hover:text-white',
    bar: 'bg-secondary-fixed',
    link: 'Bergabung',
  },
  {
    icon: 'real_estate_agent',
    title: 'Zakat & Infaq',
    description:
      'Pengelolaan dana umat secara profesional, transparan, dan produktif untuk mengentaskan kemiskinan dan membangun ekonomi.',
    accent: 'bg-primary-container group-hover:bg-primary-container group-hover:text-white',
    bar: 'bg-primary-container',
    link: 'Mulai Berdonasi',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-gutter max-w-max-width mx-auto bg-surface-bright">
      <div className="text-center mb-16 space-y-4">
        <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
          Pilar Peradaban
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">Ekosistem Pemberdayaan Umat</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="card-lift bg-white p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between h-full relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 w-1 h-full ${feature.bar}`} />
            <div>
              <div
                className={`w-14 h-14 bg-primary-fixed/30 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${feature.accent}`}
              >
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{feature.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {feature.description}
              </p>
            </div>
            <a
              className="flex items-center gap-2 text-emerald-accent font-bold hover:gap-4 transition-all"
              href="#"
            >
              {feature.link} <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
