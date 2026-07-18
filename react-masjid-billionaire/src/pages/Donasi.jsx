import { useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '150+', label: 'Mustahik Terbantu' },
  { value: '12', label: 'Program Aktif' },
  { value: '8.4M', label: 'Dana Tersalurkan' },
  { value: '100%', label: 'Transparansi Publik' },
]

const secondaryCampaigns = [
  {
    title: 'Beasiswa Santri Billionaire',
    description:
      'Mencetak generasi hafidz yang menguasai teknologi dan manajemen bisnis global.',
    progress: 82,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWkKmi74pwKOUyUmN8Kyigp2Ko4Cc8zC2y1zUS6utRe2PRCs8vGXZSF-uXynl5sDwhgeV_HcLlDAR3Y8axlYcuGcMHPhNVmPg_DcQXsdD3oE0KHf7fy5cTK71mBQtKdtyuasFuoYaetIVX4aaip1t3geSZoqLRiwKnserNBiiiBwWR4uxjw7i8yCORsTagKmdph9YxDQ52TMTkN-oNrALO6P-khR1AVYjYN9a3vIU8Of8l8Dss7_3c4x1WECqAQlpkqmJ0nn6ELQ',
  },
  {
    title: 'Pangan Sehat Umat',
    description: 'Distribusi paket nutrisi premium bagi keluarga prasejahtera di area urban.',
    progress: 45,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8C0QYgt2el_ZT1VRpULWeIuu-JbdQEc8bZ0HMDVCBFxHuWNVpFzWL0k4-fG0qE5rvCPe_Mm1Qr2qXzLqalehc5vBMwoHA7d-Ou-ofB3eI5ofsrZZ5VQ1OhL1F5bCBfDhdpZuWXPGwEE9aiu_ZwdRhv6zckPEEAoRn9e0eC6K65sv5XaGpX1f7moEDG9z4uvtbJB6Ak8k1-FsvTdIJMZMnxR5qMQY5P2PCkhRiPPzhXRNFcZdluXxLvrlaRQLWxVriP9yx8GUBZQ',
  },
  {
    title: 'Klinik Berkah Gratis',
    description:
      'Layanan kesehatan spesialis gratis dengan standar kualitas rumah sakit internasional.',
    progress: 30,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlsrgGM5I-iZlYS5igix4VDTx8Pi7QHkaD5gZVQlobq8oTExdS0q_sQlf7atkXmwj1mQ5iOoIAMa8IuK2sBxfLK6nTjXdO9Foh-Ph1LMVaYsqGDeL3JbAIRx04UvXtU2vge87dZT_OO1kZB0eWeLdhPSBiftPyWuU_A4yMHIRsx8ArWC1hNJBFJzy4hssWteOdmvHw9Vlwu0vblgRTbRCRZfvdHicFrLnyiC6ZfyM-zBlQBrHuOadgUhKX9tg_Qwm6MwImVWcI6Q',
  },
]

const paymentMethods = [
  { icon: 'qr_code_2', label: 'QRIS' },
  { icon: 'account_balance', label: 'VIRTUAL ACCOUNT' },
  { icon: 'smartphone', label: 'E-WALLET' },
  { icon: 'credit_card', label: 'VISA/MASTER' },
  { icon: 'language', label: 'TRANSFER GLOBAL' },
]

const quickAmounts = ['Rp 100rb', 'Rp 500rb', 'Rp 1jt', 'Lainnya']

const donorAvatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBBhlIKbxUVyVVsACmLmghfBjg6MmUF50l24kcsV-BZZ31rOL6BQt-YUvu9NCa_8_hm5IjLu8l-KfVVdguIHf_RWjvsteeFF_HQaRt9l7COZhHGdP4jDfg-QOcuHjZYN9bsd-6z4LSq8jTO-cjHwtUgMEy32ZaBgj5jxgBdhTy69cAtdhHnykWCU2b4zQZ2G4gqZVBFEzJcCGQx6s2Y7C8Tq4ILIL6St-dGd0iuzGQopgqBoglNLFI7tpoResfUnDAEtMY7M3NaQg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDbNGche0NQyaB49aNYUtEc6bcyE0C2ZDpouzeCr70xISq3RFZKCZEJMqpuPRO0AycBlHP2rplWoY2Z0ZcAIqkR67QNYcsXkjmhH8v7_4EeXbaH3ITUUc_04-A15N9W1GuDFifEmQ6IPGebIDGNom4rDu0LWAHFi3PnjM70iIc98RAgcpfxKKBlw-NfrbSXO3BHhDhFOddYfa2E2UIiqX2yYbqZfrp_qm2tpRyi0YB0GbWMyGU28Fxwexb_st1sd62WeQpjwI-Kxw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCMCKPLk9p8JtQhiNnur1wDkqppnHAvaGUjg27thfojpBmZ2lmH2D4YD7IlLKdPzMQ-e9qimURrQsKkERj_b7Witz2y4QO2DpMrBlQqte8YNS-uCY8Sq2-WkOG0Lg4ZAIYzkDaQ4x4AmoSrOw-540pHGOJwvfPlGmn9qrQhNkRUe52i03z-Mdf87K7rsptOrnnwP8XYPL_671wMthgduXkWKcb34OXsaCmm7-kFCCUhdtVEeM_Odmj7L5K2e9J05QfcMukIeDpovg',
]

export default function Donasi() {
  const [selectedAmount, setSelectedAmount] = useState('Rp 1jt')

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 hero-gradient text-white">
        <div className="absolute inset-0 islamic-pattern opacity-20"></div>
        <div className="relative z-10 max-w-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span
                className="material-symbols-outlined text-[#EAB308]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <span className="font-label-md text-label-sm uppercase tracking-widest text-primary-fixed">
                Ihsan & Keunggulan
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl leading-tight">
              Zakat & Infaq untuk <span className="text-secondary-fixed">Kemaslahatan</span> Umat
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant opacity-90 max-w-xl">
              Ubah kesuksesan finansial Anda menjadi keberkahan yang berkelanjutan. Salurkan Zakat,
              Infaq, Shadaqah, dan Wakaf melalui platform amanah untuk membangun peradaban ekonomi
              umat yang mandiri.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="px-8 py-4 bg-[#EAB308] text-[#0F172A] font-label-md font-bold rounded-full hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2"
                href="#campaigns"
              >
                Mulai Berdonasi <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <Link
                className="px-8 py-4 border border-white/30 hover:bg-white/10 font-label-md rounded-full transition-all flex items-center gap-2"
                to="/zakat"
              >
                <span className="material-symbols-outlined">calculate</span> Hitung Zakat
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-accent/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Masjid modern yang megah saat golden hour dengan aksen emerald dan emas"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIgyA9Lq2gixiFRYNO07HSG6sSLjSzskqAVViDxcBOQ09NyG7j_xDciWSNH16qQNHgyUA29pxmbgpEYDrEKXZKTX6rhmETr9JaugorxCoxhJsJqDtxZoJs9ogdNIlwg4EQ3LTKY8KkDwQoJK0qeuR1fO3UM9987AebqDXXXa_GP8UNYUdwSNgT1BmJnklokJZP6rILqotr5V1mATVdhjJWXGiOg5DpTs3Wa_LhA8e4T25aIAmS0353BCwa0X8quoUAdGp6cvqLKA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-outline-variant/30">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="font-headline-lg text-primary">{stat.value}</div>
                <div className="font-label-sm text-muted-slate uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Section (Bento Style) */}
      <section className="py-24 bg-surface-light" id="campaigns">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Program Unggulan
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Pilih kampanye yang ingin Anda dukung. Setiap rupiah yang Anda titipkan adalah
                investasi akhirat untuk membangun kekuatan ekonomi dan spiritual umat.
              </p>
            </div>
            <a className="text-emerald-accent font-label-md flex items-center gap-2 group" href="#">
              Lihat Semua Program
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Featured Campaign */}
            <div className="md:col-span-8 group relative rounded-xl overflow-hidden bg-white border border-outline-variant/30 hover:shadow-xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative overflow-hidden h-64 lg:h-full">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Visualisasi arsitektur kompleks masjid dan pusat komunitas modern"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk_Bi9wc_fyMTiyGfj3bj6vb3TjF7SicCFy78T6_21KkkAQleE2T7vTKPvJVbobCiQ1f_N5d5glnd_MTuNwu4Ct6ZaIL0pQaVkmvW5J4YaVUAb9cbwlC7GuisYGY8gB5fsVbxynTTEKchV5JB1Sd4PNcRtudfnB1AHg6h35mSbSlHhsCWzfT6e4Ami_pPFXCCjJwNVWIT_vMeoEE10HLmeVRP6B7YPTO8Wm86XTb0ZmYvzBxoZjR1AHEvNXzej6Das7dgB0agNAw"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-accent text-white px-3 py-1 rounded text-label-sm uppercase font-bold">
                    Terpopuler
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">
                      Pembangunan Kompleks Masjid & Business Hub
                    </h3>
                    <p className="text-on-surface-variant font-body-md mb-6">
                      Membangun pusat ibadah sekaligus inkubator bisnis bagi pengusaha muslim muda
                      untuk menciptakan ekosistem ekonomi syariah yang mandiri.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between font-label-md">
                        <span>
                          Terkumpul:{' '}
                          <span className="text-primary font-bold">Rp 3.200.000.000</span>
                        </span>
                        <span className="text-muted-slate">64%</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-accent rounded-full" style={{ width: '64%' }}></div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-colors">
                    Donasi Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Campaigns */}
            {secondaryCampaigns.map((campaign) => (
              <div
                key={campaign.title}
                className="md:col-span-4 group bg-white border border-outline-variant/30 rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={campaign.title}
                    src={campaign.image}
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {campaign.title}
                </h3>
                <p className="text-on-surface-variant text-body-md mb-6">{campaign.description}</p>
                <div className="space-y-4">
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-accent rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <button className="w-full py-3 border border-emerald-accent text-emerald-accent font-bold rounded-lg hover:bg-emerald-accent hover:text-white transition-all">
                    Pilih Program
                  </button>
                </div>
              </div>
            ))}

            {/* Zakat focus card */}
            <div className="md:col-span-4 group bg-primary text-white rounded-xl p-8 hover:shadow-xl transition-all flex flex-col justify-center">
              <span
                className="material-symbols-outlined text-4xl text-[#EAB308] mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_balance_wallet
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">Zakat Maal & Fitrah</h3>
              <p className="text-primary-fixed opacity-80 text-body-md mb-8">
                Sucikan harta Anda sesuai syariah. Kami mengelola zakat secara profesional untuk 8
                asnaf.
              </p>
              <Link
                to="/zakat"
                className="w-full py-4 bg-[#EAB308] text-[#0F172A] font-bold rounded-lg hover:scale-[1.02] transition-all text-center"
              >
                Hitung & Bayar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Readiness Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-12">
            <p className="font-label-md text-emerald-accent uppercase tracking-widest mb-2">
              Metode Pembayaran
            </p>
            <h2 className="font-headline-lg text-primary">Kemudahan Berbagi di Ujung Jari</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {paymentMethods.map((method) => (
              <div key={method.label} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">{method.icon}</span>
                <span className="font-label-sm font-bold">{method.label}</span>
              </div>
            ))}
          </div>

          {/* Spiritual + Quick Donation Section */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-emerald-accent"></div>
              <h3 className="font-headline-md text-headline-xl-mobile lg:text-headline-lg text-primary">
                &ldquo;Perumpamaan orang yang menafkahkan hartanya di jalan Allah adalah serupa
                dengan sebutir benih yang menumbuhkan tujuh bulir...&rdquo;
              </h3>
              <p className="font-body-lg text-on-surface-variant italic">— QS. Al-Baqarah: 261</p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Di Masjid Muslim Billionaire, kami percaya bahwa kekayaan adalah titipan yang harus
                dikelola dengan prinsip <span className="italic">Ihsan</span>. Setiap donasi Anda
                bukan sekadar transaksi, melainkan investasi abadi yang akan terus mengalir pahalanya
                (Jariyah) bahkan setelah kehidupan dunia berakhir. Bergabunglah bersama komunitas
                dermawan yang berkomitmen membangun masa depan umat yang lebih bermartabat.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-4">
                  {donorAvatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-4 border-white overflow-hidden"
                    >
                      <img className="w-full h-full object-cover" alt="Donatur" src={avatar} />
                    </div>
                  ))}
                </div>
                <span className="text-body-md text-on-surface-variant">
                  <span className="font-bold text-primary">2.400+</span> Donatur telah bergabung
                  bulan ini
                </span>
              </div>
            </div>

            <div className="bg-surface-container rounded-3xl p-8 md:p-12 border border-emerald-accent/10 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-container/30 rounded-full blur-2xl"></div>
              <div className="relative z-10 space-y-8">
                <h4 className="font-headline-md text-primary">Donasi Cepat</h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickAmounts.map((amount) => {
                    const isActive = selectedAmount === amount
                    return (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-4 rounded-lg font-bold transition-all border ${
                          isActive
                            ? 'border-emerald-accent bg-emerald-accent/5 text-emerald-accent'
                            : 'border-outline bg-white hover:border-emerald-accent hover:text-emerald-accent'
                        }`}
                      >
                        {amount}
                      </button>
                    )
                  })}
                </div>
                <div className="space-y-4">
                  <label className="block font-label-md text-on-surface-variant">Pilih Program</label>
                  <select className="w-full p-4 rounded-lg border-outline focus:ring-emerald-accent focus:border-emerald-accent bg-white">
                    <option>Zakat Maal</option>
                    <option>Infaq Pembangunan Masjid</option>
                    <option>Wakaf Tunai Produktif</option>
                    <option>Beasiswa Pendidikan</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-emerald-accent text-white font-bold rounded-lg shadow-lg hover:brightness-110 transition-all flex justify-center items-center gap-2">
                  Lanjutkan Pembayaran <span className="material-symbols-outlined">payments</span>
                </button>
                <p className="text-center text-label-sm text-muted-slate flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">lock</span> Transaksi Aman &
                  Terenkripsi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
