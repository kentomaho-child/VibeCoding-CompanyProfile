const benefits = [
  'Networking eksklusif dengan para pengusaha sukses.',
  'Akses ke perpustakaan digital ekonomi syariah.',
  'Bimbingan spiritual intensif untuk ketenangan batin.',
]

export default function CallToAction() {
  return (
    <section className="max-w-max-width mx-auto px-gutter py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
          <img
            className="w-full h-full object-cover"
            alt="A diverse group of professional Muslim men and women in contemporary attire, engaged in a collaborative workshop within a high-tech conference room. The atmosphere is energetic yet focused. The background features a large window with a view of a city skyline at dusk. Soft warm lighting and premium corporate interior design elements."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx1YZfhAyHdWxUs5gYPrRw4L1UApuKfxbgeQ8XJvwTwqPo8X2q3nPdr3zLvmZTtxWXuQGx_OW4jjitsL83dLHJcmILRchs49oSXJBvYCt0G0z2mURGXoaoyTsDjtLFYCuV72jHoLbzsYqv9TNXh8z5CEhemLY7wXIxmCVSk2tQ1fOhUs0yc9-w-NdU0aVTcap0kHISEd-YtwywtdeWrAZDGYnb4TKU2dHqTPThy4DrIYF_BjbRFyaCnfFy_EjwXFjllapeY610YA"
          />
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-emerald-accent">
            <p className="font-body-md text-body-md text-primary italic">
              "Keberhasilan finansial adalah wasilah, keridhaan Allah adalah ghayah (tujuan utama)
              kita."
            </p>
            <p className="font-label-md text-label-md text-emerald-accent mt-2 font-bold">
              — Ust. Pembina Masjid
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Mari Bergabung dalam Ekosistem Billionaire Muslim
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Kami tidak hanya membangun masjid sebagai tempat sholat, tapi sebagai sentral kehidupan
            umat. Bergabunglah dalam program bimbingan bisnis mingguan dan rasakan keberkahan dalam
            setiap langkah usaha Anda.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <p className="font-body-md text-body-md">{benefit}</p>
              </li>
            ))}
          </ul>
          <button className="px-10 py-5 bg-primary text-white rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-emerald-accent transition-all shadow-lg">
            Pelajari Selengkapnya
          </button>
        </div>
      </div>
    </section>
  )
}
