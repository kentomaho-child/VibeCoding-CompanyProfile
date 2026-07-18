import { useState } from 'react'

const benefits = [
  {
    icon: 'diversity_3',
    borderClass: 'border-emerald-accent',
    iconClass: 'text-emerald-accent',
    title: 'Global Networking',
    description: 'Connect with high-net-worth individuals and business leaders worldwide.',
  },
  {
    icon: 'psychology',
    borderClass: 'border-secondary',
    iconClass: 'text-secondary',
    title: 'Expert Mentorship',
    description: 'Learn the intersection of Sharia-compliant finance and modern enterprise.',
  },
]

const supportOptions = ['Funding', 'Mentorship', 'Partnerships', 'Spiritual Guidance']

const inputClass =
  'w-full px-4 py-3 rounded border border-outline-variant focus:ring-2 focus:ring-emerald-accent focus:border-emerald-accent outline-none transition-all'
const labelClass = 'font-label-md text-label-md text-on-surface-variant block'

const totalSteps = 3

export default function Join() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((step) => step + 1)
    } else {
      setSubmitted(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1)
    }
  }

  const progress = submitted ? 100 : (currentStep / totalSteps) * 100

  return (
    <main className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full islamic-pattern pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Context & Testimonials */}
        <div className="lg:col-span-5 space-y-12">
          <section>
            <span className="inline-block font-label-md text-label-md text-emerald-accent uppercase tracking-[0.2em] mb-4">
              Ihsan & Excellence
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
              Elevate Your Success Through Divine Purpose
            </h1>
            <p className="font-body-lg text-body-lg text-muted-slate leading-relaxed">
              Join a global brotherhood of visionary entrepreneurs and professionals committed to
              building wealth that serves the Ummah and honors Allah.
            </p>
          </section>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`flex items-start p-6 bg-surface-container-low rounded-xl border-l-4 ${benefit.borderClass}`}
              >
                <span
                  className={`material-symbols-outlined ${benefit.iconClass} mr-4`}
                  style={{ fontVariationSettings: "'opsz' 32" }}
                >
                  {benefit.icon}
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">
                    {benefit.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="p-8 bg-on-background text-white rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">format_quote</span>
            </div>
            <p className="font-body-lg text-body-lg italic mb-6 relative z-10">
              &ldquo;Joining this community wasn't just about business; it was about realigning my
              career with my values. The networking here is unparalleled.&rdquo;
            </p>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-emerald-accent"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1KcsQOaX3m1ckHWM-pC_iDSDTpBJXA3oH3gedCksYpVOC7O8MYG50h2Uuc4RzIMpO89qcXAOfSkcLNeOsP6uUdFa8fOaXKIWWrIr69kqe6ryC_hK1rU67lkvX2eZJph3cYjf-5fAG81gcgbi8m4v7LYMzvneRfOrhmb2CuimCLwypnFRTKM8VG00NKoejvIpnbcA1qMc6pjV-jUpRr_bDcDBHP0mK9aN-j7kaFotEdssBN1oIgQpiu8yJgHl0ojMVvVo6VJWzqw')",
                }}
              ></div>
              <div>
                <p className="font-label-md text-label-md font-bold">Ahmed Al-Mansoor</p>
                <p className="font-label-sm text-label-sm text-primary-fixed-dim">
                  Founder, Vertex Global
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Registration Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-12 rounded-xl premium-shadow border border-outline-variant/30">
            {/* Progress Bar */}
            <div className="flex items-center mb-12">
              <div className="flex-1 h-1 bg-surface-container-high rounded-full relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-emerald-accent transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="ml-6 font-label-md text-label-md text-muted-slate uppercase">
                {submitted ? 'Completed' : `Step ${currentStep} of ${totalSteps}`}
              </span>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {!submitted && (
                <>
                  {/* Step 1: Personal Details */}
                  {currentStep === 1 && (
                    <div className="step-transition">
                      <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                        Personal Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className={labelClass}>Full Name</label>
                          <input className={inputClass} placeholder="Enter your full name" type="text" />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Email Address</label>
                          <input className={inputClass} placeholder="name@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Phone Number</label>
                          <input className={inputClass} placeholder="+1 (555) 000-0000" type="tel" />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Location (City, Country)</label>
                          <input className={inputClass} placeholder="e.g. Dubai, UAE" type="text" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Information */}
                  {currentStep === 2 && (
                    <div className="step-transition">
                      <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                        Business & Profession
                      </h2>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className={labelClass}>Company Name / Organization</label>
                          <input className={inputClass} placeholder="Your business name" type="text" />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Industry Sector</label>
                          <select className={`${inputClass} bg-white`}>
                            <option>Technology & Innovation</option>
                            <option>Real Estate & Construction</option>
                            <option>Finance & Fintech</option>
                            <option>Healthcare & Biotech</option>
                            <option>Retail & E-commerce</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>LinkedIn Profile URL</label>
                          <input
                            className={inputClass}
                            placeholder="linkedin.com/in/username"
                            type="url"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Motivation */}
                  {currentStep === 3 && (
                    <div className="step-transition">
                      <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                        Vision & Motivation
                      </h2>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className={labelClass}>
                            Why do you want to join the Muslim Billionaire community?
                          </label>
                          <textarea
                            className={inputClass}
                            placeholder="Tell us about your goals and how you wish to contribute..."
                            rows="4"
                          ></textarea>
                        </div>
                        <div className="space-y-4">
                          <label className={labelClass}>How can we support your growth?</label>
                          <div className="grid grid-cols-2 gap-4">
                            {supportOptions.map((option) => (
                              <label
                                key={option}
                                className="flex items-center p-3 border border-outline-variant rounded cursor-pointer hover:bg-surface-light transition-all"
                              >
                                <input className="rounded text-emerald-accent mr-3" type="checkbox" />
                                <span className="font-body-md text-body-md">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Form Actions */}
                  <div className="flex justify-between items-center pt-8 border-t border-outline-variant/30">
                    <button
                      type="button"
                      onClick={handleBack}
                      className={`px-6 py-2 text-muted-slate font-label-md text-label-md uppercase tracking-wider hover:text-primary transition-all ${
                        currentStep === 1 ? 'invisible' : ''
                      }`}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-10 py-4 bg-emerald-accent text-white rounded font-label-md text-label-md uppercase tracking-wider shadow-lg shadow-emerald-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      {currentStep === totalSteps ? 'Submit Application' : 'Continue'}
                    </button>
                  </div>
                </>
              )}

              {/* Success State */}
              {submitted && (
                <div className="step-transition text-center py-10">
                  <div className="w-20 h-20 bg-emerald-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="material-symbols-outlined text-emerald-accent text-5xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                    Application Received!
                  </h2>
                  <p className="font-body-lg text-body-lg text-muted-slate mb-8 max-w-md mx-auto">
                    Our community council will review your application within 48 hours. In the
                    meantime, join our pre-onboarding groups.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a
                      className="flex items-center justify-center px-8 py-3 bg-[#25D366] text-white rounded font-label-md text-label-md uppercase tracking-wider hover:opacity-90 transition-all"
                      href="#"
                    >
                      <span className="material-symbols-outlined mr-2">chat</span> WhatsApp Group
                    </a>
                    <a
                      className="flex items-center justify-center px-8 py-3 bg-[#0088cc] text-white rounded font-label-md text-label-md uppercase tracking-wider hover:opacity-90 transition-all"
                      href="#"
                    >
                      <span className="material-symbols-outlined mr-2">send</span> Telegram Channel
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
