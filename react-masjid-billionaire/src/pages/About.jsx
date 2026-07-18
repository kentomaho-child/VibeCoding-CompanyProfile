import { Link } from 'react-router-dom'

const misi = [
  'Membangun kawasan Masajidallah sebagai pusat peradaban Islam.',
  'Mengembangkan program sosial melalui pengelolaan dana ZISWAF secara amanah.',
  'Mencetak generasi Qurani yang berkarakter, berilmu, dan siap berkontribusi bagi umat.',
  'Mendorong kemandirian masjid melalui pengembangan unit usaha produktif.',
]

const nilaiOrganisasi = [
  {
    icon: 'sentiment_very_satisfied',
    title: 'Menyenangkan',
    description: 'Menghadirkan pengalaman belajar dan beribadah yang nyaman.',
  },
  {
    icon: 'restaurant',
    title: 'Mengenyangkan',
    description: 'Memberikan manfaat nyata melalui program sosial dan pemberdayaan.',
  },
  {
    icon: 'lightbulb',
    title: 'Mencerahkan',
    description: 'Membangun masyarakat dengan pendidikan Al-Qur\u2019an dan ilmu yang bermanfaat.',
  },
]

const pilarProgram = [
  {
    icon: 'mosque',
    title: 'Baitullah',
    description:
      'Berfokus pada pembangunan dan kemakmuran masjid sebagai pusat ibadah dan peradaban.',
  },
  {
    icon: 'menu_book',
    title: 'Baitul Qur\u2019an',
    description:
      'Mengembangkan pendidikan Islam, pembinaan karakter, dan kaderisasi generasi Qurani.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Baitul Maal',
    description:
      'Mengelola penghimpunan dan penyaluran dana sosial melalui berbagai program kemanusiaan.',
  },
  {
    icon: 'storefront',
    title: 'Baitul Muamalah',
    description:
      'Mengembangkan unit usaha produktif untuk mendukung kemandirian dakwah dan operasional masjid.',
  },
]

const programUnggulan = [
  { icon: 'nutrition', name: 'Gerakan Gizi Santri' },
  { icon: 'celebration', name: 'Festival Yatim Bahagia' },
  { icon: 'storefront', name: 'Pasar Bahagia' },
  { icon: 'elderly', name: 'Lansia Bahagia' },
  { icon: 'payments', name: 'Pejuang Rupiah Bahagia' },
  { icon: 'school', name: 'Beasiswa Santri 100%' },
  { icon: 'workspace_premium', name: 'Pondok CEO' },
  { icon: 'groups', name: 'Majelis Bismillah Academy' },
  { icon: 'agriculture', name: 'MB Farm' },
  { icon: 'skillet', name: 'MB Kitchen' },
  { icon: 'wb_twilight', name: 'Kajian Subuh Bahagia' },
  { icon: 'menu_book', name: 'Wakaf dan Sedekah Al-Qur\u2019an' },
]

const dampak = [
  'Pendidikan Al-Qur\u2019an',
  'Beasiswa santri',
  'Bantuan sosial untuk dhuafa',
  'Pemberdayaan ekonomi umat',
  'Ketahanan pangan santri',
  'Pengembangan kawasan masjid sebagai pusat aktivitas masyarakat',
]

const komitmen = [
  { icon: 'verified_user', text: 'Amanah dan transparansi' },
  { icon: 'workspace_premium', text: 'Profesionalisme dalam pengelolaan program' },
  { icon: 'rocket_launch', text: 'Inovasi berbasis teknologi' },
  { icon: 'handshake', text: 'Pelayanan terbaik kepada masyarakat' },
  { icon: 'diversity_3', text: 'Kolaborasi untuk memperluas manfaat' },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[560px] md:min-h-[680px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-container text-white">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary-container/20 border border-secondary/30 text-secondary-fixed font-label-md text-label-md uppercase tracking-[0.2em]">
            Profil Organisasi
          </span>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-8 leading-tight">
            Tentang Masjid <br className="hidden md:block" /> Muslim Billionaire
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed/80 max-w-3xl mx-auto mb-10">
            Gerakan dakwah, sosial, pendidikan, dan pemberdayaan umat yang berpusat di kawasan
            Masjid Muslim Billionaire, Cinangneng, Bogor, Jawa Barat. Berada di bawah naungan
            Yayasan Muslim Billionaire Indonesia (YMBI).
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="w-full md:w-auto px-10 py-4 bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-widest rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Gabung Komunitas
            </Link>
            <a
              className="flex items-center gap-2 text-white hover:text-emerald-accent transition-colors font-label-md text-label-md uppercase tracking-widest"
              href="#profil"
            >
              Pelajari Lebih Lanjut
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Profil Organisasi */}
      <section className="py-20 md:py-28 bg-surface-container-lowest" id="profil">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
                Profil Organisasi
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Membangun Peradaban Berbasis Masjid
              </h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full mx-auto"></div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Masjid Muslim Billionaire (MMB) merupakan sebuah gerakan dakwah, sosial, pendidikan,
              dan pemberdayaan umat yang berpusat di kawasan Masjid Muslim Billionaire, Cinangneng,
              Bogor, Jawa Barat. Berada di bawah naungan Yayasan Muslim Billionaire Indonesia (YMBI),
              MMB hadir dengan visi menjadikan masjid bukan hanya sebagai tempat ibadah, tetapi juga
              sebagai pusat lahirnya solusi bagi berbagai persoalan umat.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Melalui konsep &ldquo;Membangun Peradaban Berbasis Masjid&rdquo;, MMB mengembangkan
              berbagai program yang mengintegrasikan dakwah, pendidikan, kepedulian sosial, dan
              kemandirian ekonomi sehingga manfaatnya dapat dirasakan oleh masyarakat secara luas.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-surface-light relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-primary p-10 rounded-2xl text-white card-lift relative overflow-hidden">
              <span className="material-symbols-outlined text-6xl text-secondary-fixed mb-6">
                visibility
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">Visi</h3>
              <p className="font-body-lg text-body-lg text-primary-fixed/90 leading-relaxed">
                Mendatangkan keberkahan untuk Indonesia dengan optimasi kemakmuran masjid
                berdasarkan konsep Masajidallah.
              </p>
            </div>
            {/* Misi */}
            <div className="bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/30 card-lift">
              <span className="material-symbols-outlined text-6xl text-emerald-accent mb-6">
                flag
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Misi</h3>
              <ul className="space-y-4">
                {misi.map((item, index) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-emerald-accent/10 text-emerald-accent font-label-sm text-label-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Organisasi */}
      <section className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
              Nilai Organisasi
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary">
              Tiga Nilai Utama Kami
            </h3>
            <p className="font-body-md text-body-md text-muted-slate max-w-2xl mx-auto">
              Dalam setiap program, Masjid Muslim Billionaire berkomitmen menghadirkan manfaat
              melalui tiga nilai utama.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nilaiOrganisasi.map((nilai) => (
              <div
                key={nilai.title}
                className="bg-surface-light p-8 rounded-xl border border-outline-variant/30 card-lift text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-emerald-accent/10 text-emerald-accent rounded-full mb-6">
                  <span className="material-symbols-outlined text-4xl">{nilai.icon}</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-3">
                  {nilai.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {nilai.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilar Program */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest font-bold">
              Empat Pilar Utama
            </span>
            <h3 className="font-headline-lg text-headline-lg text-white">Pilar Program</h3>
            <p className="font-body-md text-body-md text-primary-fixed/70 max-w-2xl mx-auto">
              Seluruh aktivitas MMB dikembangkan melalui empat pilar utama.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilarProgram.map((pilar) => (
              <div
                key={pilar.title}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-primary-fixed/20 card-lift"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-emerald-accent/20 text-emerald-accent rounded-full mb-6">
                  <span className="material-symbols-outlined text-3xl">{pilar.icon}</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-white mb-3">{pilar.title}</h4>
                <p className="font-body-md text-body-md text-primary-fixed/70">
                  {pilar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
              Program Unggulan
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary">
              Menjawab Kebutuhan Masyarakat
            </h3>
            <p className="font-body-md text-body-md text-muted-slate max-w-2xl mx-auto">
              Berbagai program yang dirancang agar memberikan manfaat berkelanjutan bagi masyarakat,
              mulai dari bidang pendidikan, sosial, dakwah, hingga pemberdayaan ekonomi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programUnggulan.map((program) => (
              <div
                key={program.name}
                className="flex items-center gap-4 bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 card-lift"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-secondary-container/40 text-secondary rounded-lg">
                  <span className="material-symbols-outlined">{program.icon}</span>
                </div>
                <p className="font-body-md text-body-md font-semibold text-primary">
                  {program.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dampak yang Dihadirkan */}
      <section className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
                Dampak yang Dihadirkan
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary">
                Manfaat Nyata untuk Umat
              </h3>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Melalui kolaborasi bersama donatur, relawan, dan masyarakat, Masjid Muslim Billionaire
                terus menghadirkan manfaat dalam berbagai bidang. Setiap program dijalankan dengan
                semangat amanah, profesional, dan berorientasi pada kebermanfaatan jangka panjang.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dampak.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-surface-light p-5 rounded-xl border border-outline-variant/30"
                >
                  <span
                    className="material-symbols-outlined text-emerald-accent shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komitmen Organisasi */}
      <section className="py-20 md:py-28 bg-surface-light relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
              Komitmen Organisasi
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary">
              Menjalankan Setiap Amanah
            </h3>
            <p className="font-body-md text-body-md text-muted-slate max-w-2xl mx-auto">
              Masjid Muslim Billionaire berkomitmen menjalankan setiap amanah dengan mengedepankan
              nilai-nilai berikut.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {komitmen.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 card-lift"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-accent/10 text-emerald-accent rounded-full">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <p className="font-body-md text-body-md font-semibold text-primary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknologi & Digitalisasi */}
      <section className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {['language', 'devices', 'account_balance_wallet', 'share'].map((icon, index) => (
                <div
                  key={icon}
                  className={`flex items-center justify-center aspect-square rounded-2xl card-lift ${
                    index % 2 === 0
                      ? 'bg-primary text-secondary-fixed'
                      : 'bg-emerald-accent text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-6xl">{icon}</span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="font-label-md text-label-md text-emerald-accent uppercase tracking-widest font-bold">
                Teknologi dan Digitalisasi
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary">
                Adaptif Terhadap Perkembangan Zaman
              </h3>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Sebagai lembaga yang adaptif terhadap perkembangan zaman, Masjid Muslim Billionaire
                memanfaatkan teknologi digital untuk meningkatkan pelayanan kepada masyarakat melalui
                website resmi, sistem informasi internal, platform donasi digital, media sosial,
                serta berbagai kanal komunikasi yang memudahkan masyarakat dalam mengakses informasi
                maupun berpartisipasi dalam program-program yang dijalankan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harapan ke Depan + CTA */}
      <section className="py-24 bg-on-background text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center relative z-10">
          <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest font-bold">
            Harapan ke Depan
          </span>
          <h2 className="font-headline-xl-mobile md:font-headline-lg text-headline-xl-mobile md:text-headline-lg mb-6 mt-4">
            Ekosistem Masjid untuk Peradaban Islam
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant/70 max-w-3xl mx-auto mb-10">
            Masjid Muslim Billionaire bercita-cita membangun ekosistem masjid yang tidak hanya
            menjadi tempat ibadah, tetapi juga pusat pendidikan, kepedulian sosial, pemberdayaan
            ekonomi, dan pembinaan generasi. Dengan semangat kolaborasi, MMB ingin menghadirkan
            manfaat yang semakin luas serta menjadi bagian dari terwujudnya peradaban Islam yang
            memberi keberkahan bagi Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="inline-block px-12 py-5 bg-secondary text-white font-label-md text-label-md uppercase tracking-widest rounded-lg font-bold hover:bg-secondary-fixed-dim transition-all shadow-2xl shadow-secondary/20"
            >
              Gabung Komunitas Sekarang
            </Link>
            <Link
              to="/donasi"
              className="inline-block px-12 py-5 border border-surface-variant/40 text-white font-label-md text-label-md uppercase tracking-widest rounded-lg hover:bg-white/5 transition-all"
            >
              Salurkan Donasi
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
