import emailjs from '@emailjs/browser'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { contactCards } from '../../data/contact'
import { emailJsConfig, serviceOptions } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

const serviceLinks = [
  { label: 'Indo Electricals', href: '/services/electricals' },
  { label: 'Indo Solar Solutions', href: '/services/energy-solutions' },
  { label: 'Indo Manpower', href: '/services/manpower' },
  { label: 'Indo Construction', href: '/services/construction' },
]

export function ContactFormSection() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service') ?? ''

  const defaultService = useMemo(() => {
    if (initialService === 'manpower') return 'Indo Manpower'
    if (initialService === 'electricals') return 'Indo Electricals'
    if (initialService === 'construction')
      return 'Indo Construction & Developers'
    if (initialService === 'energy-solutions') return 'Indo Energy Solutions'
    return ''
  }, [initialService])

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_number: '',
    selectedService: defaultService,
    message: '',
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !form.name ||
      !form.email ||
      !form.phone_number ||
      !form.selectedService ||
      !form.message
    ) {
      toast.error('Please fill in all required fields.')
      return
    }

    emailjs
      .send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        form,
        emailJsConfig.publicKey,
      )
      .then(() => {
        toast.success('Message sent successfully!')
        setForm({
          name: '',
          email: '',
          phone_number: '',
          selectedService: '',
          message: '',
        })
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.')
      })
  }

  return (
    <section className="relative z-10 -mt-10 pb-20 md:-mt-14 md:pb-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 lg:grid lg:grid-cols-[minmax(0,380px)_1fr]">
            {/* Sidebar */}
            <div className="bg-ink p-8 text-white md:p-10 lg:p-12">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Reach us directly
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                We&apos;re here to{' '}
                <span className="text-gold">help you</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Call, email, or fill in the form — we typically respond within
                one business day.
              </p>

              <div className="mt-10 space-y-8">
                {contactCards.slice(0, 2).map((card) => (
                  <div key={card.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {card.title}
                    </p>
                    <div className="mt-3 space-y-2">
                      {card.items.map((item) => (
                        <p key={item}>
                          {item.includes('@') ? (
                            <a
                              href={`mailto:${item}`}
                              className="text-base font-medium text-white transition hover:text-gold"
                            >
                              {item}
                            </a>
                          ) : (
                            <a
                              href={`tel:${item.replace(/\s/g, '')}`}
                              className="text-base font-medium text-white transition hover:text-gold"
                            >
                              {item}
                            </a>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Our divisions
                </p>
                <ul className="mt-4 space-y-2">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/75 transition hover:text-gold"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-xs uppercase tracking-[0.2em] text-teal">
                Send a message
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                Tell us about your project
              </h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { id: 'name', label: 'Name *', type: 'text', key: 'name' as const },
                    {
                      id: 'email',
                      label: 'Email *',
                      type: 'email',
                      key: 'email' as const,
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        value={form[field.key]}
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.key]: event.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Phone No *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone_number}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          phone_number: event.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Service *
                    </label>
                    <select
                      id="service"
                      value={form.selectedService}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          selectedService: event.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    >
                      <option value="">Select Service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                    className="w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="Describe your requirements..."
                  />
                </div>

                <Button type="submit">Submit inquiry</Button>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
