import { Link } from 'react-router-dom'

const coreValues = [
  {
    icon: 'payments',
    title: 'Ihsan dalam Ekonomi',
    description:
      'Mengejar keunggulan profesional dengan standar tertinggi. Kami percaya bahwa setiap transaksi adalah bentuk ibadah, dan setiap keuntungan adalah alat untuk perjuangan di jalan Allah.',
  },
  {
    icon: 'groups',
    title: 'Ukhuwah Sejati',
    description:
      'Saling menguatkan dalam jaringan bisnis dan spiritual yang tak terputus.',
  },
  {
    icon: 'auto_awesome',
    title: 'Integritas Mutlak',
    description:
      'Kejujuran tanpa kompromi dalam setiap aspek kehidupan dan bisnis.',
  },
  {
    icon: 'rocket_launch',
    title: 'Inovasi Berkelanjutan',
    description:
      'Mengadaptasi teknologi modern untuk efisiensi dakwah dan pemberdayaan ekonomi umat di era digital.',
  },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[560px] md:min-h-[716px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-container text-white">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary-container/20 border border-secondary/30 text-secondary-fixed font-label-md text-label-md uppercase tracking-[0.2em]">
            The Vision of Excellence
          </span>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-8 leading-tight">
            Tentara Allah: Visi <br className="hidden md:block" /> Masjid Muslim Billionaire
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed/80 max-w-2xl mx-auto mb-10">
            Membangun peradaban umat melalui sinergi ketaatan spiritual dan keunggulan ekonomi.
            Kami percaya bahwa kekayaan adalah amanah untuk melayani Sang Pencipta.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-10 py-4 bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-widest rounded-lg font-bold hover:scale-105 transition-transform">
              Gabung Komunitas
            </button>
            <a
              className="flex items-center gap-2 text-white hover:text-emerald-accent transition-colors font-label-md text-label-md uppercase tracking-widest"
              href="#sejarah"
            >
              Pelajari Lebih Lanjut
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-surface-container-lowest" id="sejarah">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-accent/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
                  <img
                    className="w-full h-full object-cover"
                    alt="Arsitektur masjid modern dengan sentuhan pola geometris emerald tradisional"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIAaYxCxtPxbYjCgcFX1OznYJGLILpxFB9IwHygyYo0OQdocABCPVHGe7NDvWj3Tyn5n9qummZeF7ffGouvReLcjgY0E_kr-fzpczPL2WLfdfDE1fZE6rJ5oz9BMjAE6bBs10RFEk6IvFhFf4P7lWBeyy-rFgqGbjTRz8QSCgVZBr6RGWSkPwfBc4HQWuenEeH_VfxF3sO8DRlTDC0tQGozbbipA4RnHHCtH6Ydhxty4vzv1ryW2LqvByxa7ncqKjc0apITzlpuQ"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 hidden md:block w-64 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-surface">
                  <img
                    className="w-full h-full object-cover"
                    alt="Pertemuan komunitas kolaboratif di pusat sumber daya masjid"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLfgAOFqs_eL63uk5t84QVa7WHMZ-3SHWwXnGh_U-S7cMxxi7tGNaiFh4LuE_wm7nXMNDmoe3LfzFesLzqsdrI7HDaeLL2VNrv-c2FwRETOOJ8pGSRR8x4bCVqW1xqWK4k6Jsp5R27xfsTuobXvfNtbaNabhYPhktwAUA1rCROGcXwobGqwL5NTaZEg_dhoggwJXklxSKOzMN6PGhNpGMPF2MJW7DEYQhD410QWp4hpC1D-VqO4EQdKLvDHRKZsdrSnVssMAzD4g"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-primary">Sejarah Kami</h2>
                <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Berdiri di tengah arus modernitas, Masjid Muslim Billionaire lahir dari kegelisahan
                akan pemisahan antara kesuksesan duniawi dan ketaatan ukhrawi. Kami memulai sebagai
                komunitas kecil pengusaha yang rindu akan tempat sujud yang juga menjadi pusat
                inkubasi ide-ide besar bagi umat.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant/80 italic border-l-4 border-emerald-accent pl-6 py-2">
                &ldquo;Visi kami bukan sekadar membangun tempat ibadah, melainkan mencetak 'Tentara
                Allah' yang mandiri secara finansial dan kokoh secara spiritual untuk menebar
                manfaat seluas-luasnya.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-headline-md font-bold text-emerald-accent">20+</div>
                  <div className="text-label-sm text-muted-slate uppercase tracking-wider">
                    Negara Terjangkau
                  </div>
                </div>
                <div>
                  <div className="text-headline-md font-bold text-emerald-accent">150k+</div>
                  <div className="text-label-sm text-muted-slate uppercase tracking-wider">
                    Anggota Komunitas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Bento Grid */}
      <section className="py-20 bg-surface-light relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-[0.02]"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h3 className="font-headline-lg text-headline-lg text-primary">Nilai-Nilai Utama</h3>
            <p className="font-body-md text-body-md text-muted-slate max-w-xl mx-auto">
              Prinsip dasar yang menjadi fondasi setiap langkah pergerakan kami dalam melayani umat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 card-lift group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-emerald-accent/10 text-emerald-accent rounded-full">
                  <span className="material-symbols-outlined text-4xl">{coreValues[0].icon}</span>
                </div>
                <div className="space-y-4">
                  <h4 className="font-headline-md text-headline-md text-primary">
                    {coreValues[0].title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {coreValues[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-primary p-8 rounded-xl text-white card-lift flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl text-secondary-fixed mb-8">
                {coreValues[1].icon}
              </span>
              <div className="space-y-2">
                <h4 className="font-headline-md text-headline-md">{coreValues[1].title}</h4>
                <p className="font-body-md text-body-md text-primary-fixed/70">
                  {coreValues[1].description}
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 card-lift">
              <div className="flex flex-col h-full space-y-6">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary-container/30 text-secondary rounded-lg">
                  <span className="material-symbols-outlined">{coreValues[2].icon}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline-md text-headline-md text-primary">
                    {coreValues[2].title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {coreValues[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="md:col-span-2 bg-emerald-accent p-8 rounded-xl text-white card-lift relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="space-y-4 md:w-2/3">
                  <h4 className="font-headline-md text-headline-md">{coreValues[3].title}</h4>
                  <p className="font-body-md text-body-md text-white/80">
                    {coreValues[3].description}
                  </p>
                </div>
                <div className="hidden md:block w-1/3">
                  <span className="material-symbols-outlined text-[120px] text-white/10 absolute -right-4 -bottom-4">
                    {coreValues[3].icon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-on-background text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center relative z-10">
          <h2 className="font-headline-xl-mobile md:font-headline-lg text-headline-xl-mobile md:text-headline-lg mb-6">
            Siap Menjadi Bagian dari Perubahan?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant/70 max-w-2xl mx-auto mb-10">
            Mari bergabung dalam barisan Muslim yang berdaya secara ekonomi dan bertakwa secara
            spiritual. Masa depan umat ada di tangan kita yang berani melangkah.
          </p>
          <Link
            to="/"
            className="inline-block px-12 py-5 bg-secondary text-white font-label-md text-label-md uppercase tracking-widest rounded-lg font-bold hover:bg-secondary-fixed-dim transition-all shadow-2xl shadow-secondary/20"
          >
            Gabung Komunitas Sekarang
          </Link>
        </div>
      </section>
    </main>
  )
}
