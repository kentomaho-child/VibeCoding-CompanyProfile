import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Privacy Policy', to: '/' },
  { label: 'Terms of Service', to: '/' },
  { label: 'Contact Us', to: '/' },
  { label: 'Volunteer', to: '/' },
]

const contacts = [
  { icon: 'location_on', text: 'Jl. Peradaban No. 101, Jakarta Selatan, DKI Jakarta' },
  { icon: 'phone_iphone', text: '+62 811 2345 6789' },
  { icon: 'mail', text: 'info@muslimbillionaire.org' },
]

const socials = ['public', 'alternate_email', 'chat_bubble']

export default function Footer() {
  return (
    <footer className="bg-on-background text-surface-light border-t border-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-20 max-w-max-width mx-auto">
        <div className="space-y-6 md:col-span-1">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-emerald-accent text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mosque
            </span>
            <span className="font-headline-md text-headline-md text-primary-fixed">
              Masjid Muslim Billionaire
            </span>
          </div>
          <p className="font-body-md text-body-md text-surface-variant/70 leading-relaxed">
            Menciptakan ekosistem yang menghubungkan antara ketaatan spiritual dan kesuksesan
            finansial untuk kejayaan umat.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-accent transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">{social}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-white uppercase tracking-widest">
            Tautan Cepat
          </h4>
          <nav className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                className="text-surface-variant/70 hover:text-tertiary-fixed transition-colors font-body-md"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-white uppercase tracking-widest">
            Kontak Kami
          </h4>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.icon} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-emerald-accent">
                  {contact.icon}
                </span>
                <p className="text-surface-variant/70 font-body-md">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-white uppercase tracking-widest">
            Berlangganan
          </h4>
          <p className="text-surface-variant/70 font-body-md">
            Dapatkan info jadwal kajian dan peluang bisnis terbaru.
          </p>
          <div className="flex">
            <input
              className="bg-white/5 border-white/20 rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-accent outline-none text-white"
              placeholder="Email Anda"
              type="email"
            />
            <button className="bg-emerald-accent px-4 py-2 rounded-r-lg hover:bg-emerald-accent/80 transition-all">
              <span className="material-symbols-outlined text-white">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 px-margin-desktop text-center">
        <p className="font-body-md text-body-md text-surface-variant/50">
          © 2024 Masjid Muslim Billionaire. Excellence in Service and Worship.
        </p>
      </div>
    </footer>
  )
}
