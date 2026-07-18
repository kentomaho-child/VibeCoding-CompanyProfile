const stats = [
  { value: '4', label: 'Pilar Program', color: 'text-primary' },
  { value: '12+', label: 'Program Unggulan', color: 'text-emerald-accent' },
  { value: '100%', label: 'Beasiswa Santri', color: 'text-secondary' },
  { value: 'ZISWAF', label: 'Dikelola Amanah', color: 'text-primary' },
]

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-10"
          alt="A clean, minimalist high-end office lobby with subtle Islamic architectural details and lush indoor plants. The lighting is bright and natural. The atmosphere is professional, quiet, and affluent. Cinematic depth of field with focus on texture and light. Use deep emerald and soft gold tones for a corporate modern aesthetic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl8pAF3qsI3T7Q3Ad5EH1Dzs21Hp1P64_sTPCTW-u8XXpltXGqipcKxHODA2g2dxsHOO9kqrP16PPCpkpTYUgKg_S_HEcmvztQpBysA0-Udg3a2E6iAzLddc_Gtw-95HMVmdGgSUjOLE55hE2e3wN2xlyTvSwKmyrwFkZP2cgiC5g2vugR_adquF2cKO6KDsCe_7AlNUCWvtr84a6FqUHmo1aWoqSLvicGgPlsIdMpHvEtPbG9wRPk_dtTi5A32ZLlz34BqWZ1ow"
        />
      </div>

      <div className="relative z-10 max-w-max-width mx-auto px-gutter">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className={`font-headline-xl text-headline-xl ${stat.color}`}>{stat.value}</p>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
