import { Link } from 'react-router-dom'

const features = [
  {
    icon: 'mosque',
    title: 'Baitullah',
    description:
      'Berfokus pada pembangunan dan kemakmuran masjid sebagai pusat ibadah dan peradaban.',
    accent: 'bg-emerald-accent group-hover:bg-emerald-accent group-hover:text-white',
    bar: 'bg-emerald-accent',
    link: 'Selengkapnya',
    to: '/about',
  },
  {
    icon: 'menu_book',
    title: 'Baitul Qur\u2019an',
    description:
      'Mengembangkan pendidikan Islam, pembinaan karakter, dan kaderisasi generasi Qurani.',
    accent: 'bg-secondary group-hover:bg-secondary group-hover:text-white',
    bar: 'bg-secondary-fixed',
    link: 'Selengkapnya',
    to: '/about',
  },
  {
    icon: 'volunteer_activism',
    title: 'Baitul Maal',
    description:
      'Mengelola penghimpunan dan penyaluran dana sosial melalui berbagai program kemanusiaan.',
    accent: 'bg-primary-container group-hover:bg-primary-container group-hover:text-white',
    bar: 'bg-primary-container',
    link: 'Mulai Berdonasi',
    to: '/donasi',
  },
  {
    icon: 'storefront',
    title: 'Baitul Muamalah',
    description:
      'Mengembangkan unit usaha produktif untuk mendukung kemandirian dakwah dan operasional masjid.',
    accent: 'bg-secondary group-hover:bg-secondary group-hover:text-white',
    bar: 'bg-secondary',
    link: 'Lihat Direktori',
    to: '/directory',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-gutter max-w-max-width mx-auto bg-surface-bright">
      <div className="text-center mb-16 space-y-4">
        <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
          Empat Pilar Utama
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">Pilar Program</h2>
        <p className="font-body-md text-body-md text-muted-slate max-w-2xl mx-auto">
          Seluruh aktivitas Masjid Muslim Billionaire dikembangkan melalui empat pilar utama yang
          mengintegrasikan dakwah, pendidikan, kepedulian sosial, dan kemandirian ekonomi.
        </p>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <Link
              className="flex items-center gap-2 text-emerald-accent font-bold hover:gap-4 transition-all"
              to={feature.to}
            >
              {feature.link} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
