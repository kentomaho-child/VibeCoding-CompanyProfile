import { Link } from 'react-router-dom'

const prayerTimes = [
  { name: 'Subuh', time: '04:12', active: false },
  { name: 'Dzuhur', time: '11:45', active: false },
  { name: 'Ashar', time: '15:08', active: true },
  { name: 'Maghrib', time: '17:58', active: false },
  { name: 'Isya', time: '19:10', active: false },
]

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <img
          className="w-full h-full object-cover"
          alt="A majestic, modern mosque architectural marvel with clean lines and white marble during golden hour. The sky is a soft blend of amber and deep teal. The lighting is ethereal and warm, highlighting the intricate geometric patterns of the facade. Professional architectural photography style with a high-end corporate feel, emphasizing scale and spiritual grandeur."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnohXo_-eENmeMOsBRRTlRuLADkJg407GF_KGKkIAPhvHnalwwyTni5OPpsNVky0Tjbj0IpZjDr-bHAh7hRNZip9bESHjXY5G7kSVoaXN474_c6HhDHC-k0CKTEgj7qpzgSh8zFfQzF2lO9OOTgwo4W-VIFw-3mHfmrIG0tocQMzx8ziBdtznCfSPOw6Ms8YdaLkjitzy5adrrSPBnjlgXcpFm1QIjW1phZm-8iaFQb1Nt_dh6wya4o7diw7KFX4V4Cy9gg9q3eQ"
        />
      </div>

      <div className="relative z-20 max-w-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              Cinangneng, Bogor &middot; Naungan YMBI
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-white leading-tight">
            Membangun Peradaban <br />
            <span className="text-secondary-fixed">Berbasis Masjid.</span>
          </h1>

          <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
            Masjid Muslim Billionaire adalah gerakan dakwah, sosial, pendidikan, dan pemberdayaan
            umat. Menjadikan masjid bukan hanya tempat ibadah, tetapi pusat lahirnya solusi bagi
            berbagai persoalan umat.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/donasi"
              className="px-8 py-4 bg-emerald-accent hover:bg-emerald-accent/90 text-white font-label-md text-label-md uppercase tracking-wider rounded-lg flex items-center gap-3 transition-all"
            >
              Salurkan Donasi
              <span className="material-symbols-outlined">volunteer_activism</span>
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-label-md text-label-md uppercase tracking-wider rounded-lg flex items-center gap-3 transition-all"
            >
              Tentang Kami
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Prayer Times Widget */}
        <div className="hidden lg:block">
          <div className="bg-primary-container/90 backdrop-blur-xl p-8 rounded-2xl border border-primary-fixed/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 islamic-pattern" />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8 border-b border-primary-fixed/20 pb-4">
                <h3 className="font-headline-md text-headline-md text-white">Waktu Sholat</h3>
                <div className="text-right">
                  <p className="font-label-sm text-label-sm text-primary-fixed">Jakarta, Indonesia</p>
                  <p className="font-body-md text-body-md text-white/60">12 Jumada al-Ula 1446</p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {prayerTimes.map((prayer) => (
                  <div
                    key={prayer.name}
                    className={`text-center space-y-2 ${
                      prayer.active
                        ? 'bg-secondary/30 rounded-xl p-2 border border-secondary/50'
                        : 'opacity-60'
                    }`}
                  >
                    <p className="font-label-sm text-label-sm text-primary-fixed uppercase">
                      {prayer.name}
                    </p>
                    <p className="font-headline-md text-headline-md text-white">{prayer.time}</p>
                    {prayer.active && (
                      <div className="h-1 w-8 bg-secondary-fixed mx-auto rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
