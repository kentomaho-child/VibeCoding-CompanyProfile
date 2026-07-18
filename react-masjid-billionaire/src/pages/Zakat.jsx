import { useMemo, useState } from 'react'

// Constants (mirrors the original calculator logic)
const NISAB_GOLD_VALUE = 98200000
const GOLD_PRICE_PER_GR = 1155000
const SILVER_PRICE_PER_GR = 13200

const formatIDR = (num) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(num || 0)

const tabs = [
  { id: 'wealth', icon: 'account_balance_wallet', label: 'Zakat Maal (Wealth)' },
  { id: 'professional', icon: 'work', label: 'Professional Zakat' },
  { id: 'gold', icon: 'savings', label: 'Gold & Silver' },
]

const inputClass =
  'w-full py-4 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-emerald-accent focus:border-emerald-accent transition-all'

const toNum = (value) => parseFloat(value) || 0

export default function Zakat() {
  const [activeTab, setActiveTab] = useState('wealth')

  const [wealth, setWealth] = useState({ cash: '', invest: '', other: '', debt: '' })
  const [prof, setProf] = useState({ income: '', bonus: '' })
  const [metals, setMetals] = useState({ gold: '', silver: '' })

  const result = useMemo(() => {
    if (activeTab === 'wealth') {
      const net = toNum(wealth.cash) + toNum(wealth.invest) + toNum(wealth.other) - toNum(wealth.debt)
      const met = net >= NISAB_GOLD_VALUE
      return { subject: net, total: met ? net * 0.025 : 0, met }
    }
    if (activeTab === 'professional') {
      const totalIncome = toNum(prof.income) + toNum(prof.bonus)
      const nisabMonthly = NISAB_GOLD_VALUE / 12
      const met = totalIncome >= nisabMonthly
      return { subject: totalIncome, total: met ? totalIncome * 0.025 : 0, met }
    }
    // gold & silver
    let total = 0
    let subject = 0
    let met = false
    const gold = toNum(metals.gold)
    const silver = toNum(metals.silver)
    if (gold >= 85) {
      subject += gold * GOLD_PRICE_PER_GR
      total += gold * GOLD_PRICE_PER_GR * 0.025
      met = true
    }
    if (silver >= 595) {
      subject += silver * SILVER_PRICE_PER_GR
      total += silver * SILVER_PRICE_PER_GR * 0.025
      met = true
    }
    return { subject, total, met }
  }, [activeTab, wealth, prof, metals])

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="max-w-max-width mx-auto px-gutter relative z-10 text-center">
          <h1 className="font-headline-xl text-headline-xl mb-4">Purify Your Prosperity</h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto opacity-90">
            Calculating your Zakat is an act of spiritual excellence. Use our precise tools to fulfill
            your third pillar of Islam with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-gutter max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Sidebar: Categories */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-surface-container-low rounded-xl p-2 space-y-1 border border-outline-variant/30">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-label-md transition-all ${
                      isActive
                        ? 'text-emerald-accent bg-white shadow-sm border border-emerald-accent/20'
                        : 'text-muted-slate hover:bg-surface-container-high'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Nisab Information Card */}
            <div className="bg-primary text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-accent/20 rounded-full -mr-12 -mt-12"></div>
              <h3 className="font-headline-md text-headline-md mb-2">Current Nisab</h3>
              <div className="space-y-4 relative z-10">
                <div>
                  <p className="text-label-sm opacity-70 uppercase tracking-widest">Gold (85g)</p>
                  <p className="font-headline-md text-secondary-fixed">Rp 98,200,000</p>
                </div>
                <div>
                  <p className="text-label-sm opacity-70 uppercase tracking-widest">Silver (595g)</p>
                  <p className="font-headline-md text-secondary-fixed">Rp 7,850,000</p>
                </div>
                <p className="text-[11px] font-body-md opacity-60 leading-relaxed italic">
                  *Updated today based on global market prices.
                </p>
              </div>
            </div>
          </aside>

          {/* Center: Interactive Form */}
          <div className="lg:col-span-6 space-y-8">
            {/* Wealth Calculator */}
            {activeTab === 'wealth' && (
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm transition-opacity duration-300">
                <div className="mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                    Wealth Calculator
                  </h2>
                  <p className="font-body-md text-muted-slate">
                    Combine your annual savings, investments, and other liquid assets.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Cash & Savings (Bank & On-hand)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        Rp
                      </span>
                      <input
                        className={`${inputClass} pl-12 pr-4`}
                        placeholder="0"
                        type="number"
                        value={wealth.cash}
                        onChange={(e) => setWealth({ ...wealth, cash: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Total Investments (Stocks, Bonds, Mutual Funds)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        Rp
                      </span>
                      <input
                        className={`${inputClass} pl-12 pr-4`}
                        placeholder="0"
                        type="number"
                        value={wealth.invest}
                        onChange={(e) => setWealth({ ...wealth, invest: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Other Assets (Gold for trade, Accounts Receivable)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        Rp
                      </span>
                      <input
                        className={`${inputClass} pl-12 pr-4`}
                        placeholder="0"
                        type="number"
                        value={wealth.other}
                        onChange={(e) => setWealth({ ...wealth, other: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30">
                    <label className="block font-label-md text-on-surface mb-2">
                      Total Debt & Short-term Liabilities (Deductible)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-error font-bold">
                        - Rp
                      </span>
                      <input
                        className="w-full pl-14 pr-4 py-4 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-error focus:border-error transition-all"
                        placeholder="0"
                        type="number"
                        value={wealth.debt}
                        onChange={(e) => setWealth({ ...wealth, debt: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Calculator */}
            {activeTab === 'professional' && (
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm transition-opacity duration-300">
                <div className="mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                    Professional Income
                  </h2>
                  <p className="font-body-md text-muted-slate">
                    Monthly or annual income from your career or business expertise.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Gross Monthly Income
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        Rp
                      </span>
                      <input
                        className={`${inputClass} pl-12 pr-4`}
                        placeholder="0"
                        type="number"
                        value={prof.income}
                        onChange={(e) => setProf({ ...prof, income: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Other Professional Bonuses/Dividends
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        Rp
                      </span>
                      <input
                        className={`${inputClass} pl-12 pr-4`}
                        placeholder="0"
                        type="number"
                        value={prof.bonus}
                        onChange={(e) => setProf({ ...prof, bonus: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Gold & Silver Calculator */}
            {activeTab === 'gold' && (
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm transition-opacity duration-300">
                <div className="mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                    Gold & Silver Calculator
                  </h2>
                  <p className="font-body-md text-muted-slate">
                    Calculate Zakat for precious metals based on total weight.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Gold Weight (Grams)
                    </label>
                    <div className="relative">
                      <input
                        className={`${inputClass} pr-12 pl-4`}
                        placeholder="0"
                        type="number"
                        value={metals.gold}
                        onChange={(e) => setMetals({ ...metals, gold: e.target.value })}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        gr
                      </span>
                    </div>
                    <p className="text-[11px] mt-1 text-muted-slate">Nisab: 85gr</p>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-2">
                      Silver Weight (Grams)
                    </label>
                    <div className="relative">
                      <input
                        className={`${inputClass} pr-12 pl-4`}
                        placeholder="0"
                        type="number"
                        value={metals.silver}
                        onChange={(e) => setMetals({ ...metals, silver: e.target.value })}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-slate font-bold">
                        gr
                      </span>
                    </div>
                    <p className="text-[11px] mt-1 text-muted-slate">Nisab: 595gr</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Result */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 bg-white border border-outline-variant/50 rounded-xl overflow-hidden shadow-xl">
              <div className="bg-primary-container p-6 text-white text-center">
                <p className="font-label-md uppercase tracking-widest text-on-primary-container mb-1">
                  Your Total Zakat
                </p>
                <div className="font-headline-lg text-headline-lg text-primary-fixed transition-transform duration-100">
                  {formatIDR(result.total)}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-body-md">
                  <span className="text-muted-slate">Subject Amount:</span>
                  <span className="font-bold">{formatIDR(result.subject)}</span>
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-muted-slate">Nisab Met:</span>
                  <span className={result.met ? 'text-emerald-accent font-bold' : 'text-error font-bold'}>
                    {result.met ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="pt-4 border-t border-outline-variant/30">
                  <button className="w-full bg-secondary-container text-on-secondary-container font-label-md py-4 rounded-lg shadow-sm hover:brightness-95 transition-all flex items-center justify-center gap-2">
                    Bayar Sekarang
                    <span className="material-symbols-outlined">payments</span>
                  </button>
                  <p className="text-[11px] text-center text-muted-slate mt-4">
                    Funds are distributed directly to verified Asnaf through the Masjid Muslim
                    Billionaire Foundation.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex flex-col items-center gap-4 text-center p-6 bg-surface-container rounded-xl border border-outline-variant/30">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
              <p className="font-headline-md text-headline-md text-primary">Certified Trust</p>
              <p className="font-body-md text-muted-slate text-sm">
                Shariah-compliant methodology reviewed by the Global Zakat Committee.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Educational Bento Grid */}
      <section className="py-20 px-gutter max-w-max-width mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12">
          The Pillars of Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-on-background rounded-2xl p-10 text-white relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLl19Ec51umvudmjrpRBUGFtBz24ISPLL9KWSPih0EbEXsOxGyx3gwqA977Td7AXjR3mQg2cw5mh5NoSlsSkdODuy1zdwUcT8OVRZKXzRSntiPDdfvD0bsc1MgGh26L2UGn1EzXbgPPqxsgSFQWoMHV4pfeP5VVj0ecEL4TcTinTPH76UeNfsW6LIkg_-yykhqwhd8kunuazWkId6DoQD5MsyFi-NXpQjUZxJwlk9RErMNAj4asrW4b2n5uMejxD0YPhbvl71p7g')",
              }}
            ></div>
            <div className="relative z-10 max-w-md">
              <span className="bg-emerald-accent text-white px-3 py-1 rounded text-[10px] font-label-md uppercase tracking-widest mb-4 inline-block">
                Ihsan (Excellence)
              </span>
              <h3 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-4">
                Why Calculate Precisely?
              </h3>
              <p className="font-body-md opacity-80 leading-relaxed mb-8">
                Zakat is not just a donation; it's a financial obligation that requires precision. In
                the spirit of Ihsan, we provide tools to ensure your wealth is purified exactly as
                prescribed.
              </p>
              <a
                className="inline-flex items-center gap-2 font-label-md text-secondary-fixed hover:gap-4 transition-all"
                href="#"
              >
                Learn more about the Fiqh
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-gutter">
            <div className="bg-surface-container-high rounded-2xl p-8 border border-outline-variant/30 flex-1">
              <span className="material-symbols-outlined text-emerald-accent text-4xl mb-4">
                volunteer_activism
              </span>
              <h4 className="font-headline-md text-headline-md mb-2">Empowering Asnaf</h4>
              <p className="font-body-md text-muted-slate">
                Your Zakat funds education and micro-finance for the 8 categories of eligible
                recipients.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/30 flex-1 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">analytics</span>
              <h4 className="font-headline-md text-headline-md mb-2">Transparency</h4>
              <p className="font-body-md text-muted-slate">
                View real-time distribution reports and impact stories on our public dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
