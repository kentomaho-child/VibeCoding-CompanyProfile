import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  'Semua Kategori',
  'Makanan & Minuman',
  'Teknologi',
  'Keuangan',
  'Kesehatan',
  'Arsitektur',
  'Pendidikan',
]

const businesses = [
  {
    id: 1,
    name: 'Halal Harvest Co.',
    owner: 'Ahmad Sulaiman',
    category: 'Makanan & Minuman',
    icon: 'restaurant',
    accent: 'emerald',
    description:
      'Pemasok bahan organik premium dan layanan katering yang menjunjung standar Tayyib tertinggi untuk acara korporat.',
    location: 'Jakarta, Indonesia',
  },
  {
    id: 2,
    name: 'Ihsan Wealth Partners',
    owner: 'Dr. Sarah Al-Farsi',
    category: 'Keuangan',
    icon: 'account_balance_wallet',
    accent: 'secondary',
    description:
      'Konsultasi investasi sesuai syariah dan perencanaan pensiun untuk para profesional muslim modern.',
    location: 'Singapura',
  },
  {
    id: 3,
    name: 'Qibla Tech Solutions',
    owner: 'Yusuf Khalid',
    category: 'Teknologi',
    icon: 'developer_mode',
    accent: 'emerald',
    description:
      'Pengembangan perangkat lunak khusus dan migrasi cloud untuk lembaga nirlaba serta organisasi komunitas.',
    location: 'Dubai, UEA',
  },
  {
    id: 4,
    name: 'Medina Medical Group',
    owner: 'Dr. Ismail Ibrahim',
    category: 'Kesehatan',
    icon: 'health_and_safety',
    accent: 'emerald',
    description:
      'Layanan kesehatan primer dan pusat kesehatan holistik yang memadukan kedokteran modern dengan prinsip pengobatan ala Nabi.',
    location: 'Kuala Lumpur, Malaysia',
  },
  {
    id: 5,
    name: 'Mihrab Design Studio',
    owner: 'Maryam Siddiqui',
    category: 'Arsitektur',
    icon: 'architecture',
    accent: 'emerald',
    description:
      'Desain arsitektur dan penataan interior yang memadukan kemewahan kontemporer dengan estetika geometris Islam.',
    location: 'London, Inggris',
  },
  {
    id: 6,
    name: 'Billionaire Academy',
    owner: 'Omar Farooq',
    category: 'Pendidikan',
    icon: 'school',
    accent: 'emerald',
    description:
      'Platform edukasi yang menyediakan pelatihan kewirausahaan khusus bagi komunitas muslim global.',
    location: 'Istanbul, Turki',
  },
]

const accentClasses = {
  emerald: {
    border: 'border-emerald-accent',
    icon: 'text-emerald-accent',
  },
  secondary: {
    border: 'border-secondary',
    icon: 'text-secondary',
  },
}

export default function Directory() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Semua Kategori')

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return businesses.filter((business) => {
      const matchesCategory =
        activeCategory === 'Semua Kategori' || business.category === activeCategory
      const matchesQuery =
        normalizedQuery === '' ||
        business.name.toLowerCase().includes(normalizedQuery) ||
        business.owner.toLowerCase().includes(normalizedQuery) ||
        business.description.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <main className="relative pt-20 min-h-screen bg-background">
      <div className="absolute inset-0 islamic-pattern pointer-events-none"></div>
      {/* Hero Section & CTA */}
      <section className="relative z-10 max-w-max-width mx-auto px-gutter pt-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-l-4 border-emerald-accent pl-8 py-4">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-4">
              Direktori Bisnis
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Menghubungkan keunggulan di dalam Ummah. Temukan usaha milik anggota yang
              berkomitmen pada prinsip Ihsan dan pelayanan komunitas.
            </p>
          </div>
          <Link
            to="/join"
            className="group flex items-center gap-3 px-8 py-4 bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-widest hover:bg-secondary hover:text-white transition-all rounded-lg"
          >
            <span className="material-symbols-outlined">add_business</span>
            Daftarkan Usaha Anda
          </Link>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="relative z-10 max-w-max-width mx-auto px-gutter mb-12">
        <div className="bg-surface-container-lowest p-6 flex flex-col lg:flex-row gap-6 items-center border border-outline-variant/30 shadow-sm rounded-lg">
          <div className="relative w-full lg:w-1/2">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-slate">
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface-light border border-outline-variant focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 outline-none font-body-md transition-all rounded-lg"
              placeholder="Cari berdasarkan nama atau kata kunci..."
            />
          </div>
          <div className="flex flex-wrap gap-3 w-full lg:w-1/2 lg:justify-end">
            {categories.map((category) => {
              const isActive = category === activeCategory
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 font-label-sm text-label-sm rounded-full transition-colors ${
                    isActive
                      ? 'bg-emerald-accent text-white'
                      : 'border border-outline-variant text-on-surface-variant hover:border-emerald-accent'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="relative z-10 max-w-max-width mx-auto px-gutter pb-32">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((business) => {
              const accent = accentClasses[business.accent] ?? accentClasses.emerald
              return (
                <div
                  key={business.id}
                  className={`card-lift bg-white border-t-2 ${accent.border} flex flex-col p-8 h-full shadow-sm rounded-lg`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-surface-light flex items-center justify-center border border-outline-variant/30 rounded-lg">
                      <span className={`material-symbols-outlined ${accent.icon} text-3xl`}>
                        {business.icon}
                      </span>
                    </div>
                    <span className="bg-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                      {business.category}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-1">
                    {business.name}
                  </h3>
                  <p className="font-label-sm text-label-sm text-muted-slate mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">person</span>
                    {business.owner}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                    {business.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20 mt-auto">
                    <div className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-muted-slate text-sm">
                        location_on
                      </span>
                      <span className="text-xs text-muted-slate font-label-sm">
                        {business.location}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-emerald-accent font-label-md text-label-md flex items-center gap-1 group"
                    >
                      Lihat Profil
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-muted-slate text-6xl mb-4">
              search_off
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Tidak ada usaha yang ditemukan
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Coba ubah kata kunci pencarian atau pilih kategori lain.
            </p>
          </div>
        )}
      </section>

      {/* Membership Banner */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
        <div className="max-w-max-width mx-auto px-gutter relative z-10 text-center">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-6">
            Apakah Anda anggota jaringan Billionaire?
          </h2>
          <p className="text-surface-variant/80 font-body-lg text-body-lg max-w-2xl mx-auto mb-10">
            Perluas jangkauan Anda dan berkolaborasi dengan sesama pengusaha yang sevisi.
            Bergabunglah ke direktori kami dan berkontribusi pada kekuatan ekonomi Ummah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/join"
              className="px-10 py-4 bg-emerald-accent text-white font-label-md text-label-md uppercase tracking-widest shadow-lg hover:scale-105 transition-transform rounded-lg"
            >
              Daftarkan Usaha
            </Link>
            <Link
              to="/about"
              className="px-10 py-4 border border-surface-variant text-surface-variant font-label-md text-label-md uppercase tracking-widest hover:bg-white/5 transition-all rounded-lg"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
