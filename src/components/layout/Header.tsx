import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import image from '../../assets/images'
import { navItems } from '../../data/site'
import { Button } from '../ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const services = navItems.find((item) => item.children)?.children ?? []

  const linkClass = (active: boolean) =>
    `relative text-sm font-medium transition ${
      active ? 'text-teal' : 'text-ink hover:text-teal'
    }`

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header
        id="top"
        className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#F6F4EE] shadow-sm"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-8 lg:px-10">
          <Link to="/" className="relative z-[60] shrink-0" onClick={() => setOpen(false)}>
            <img
              src={image.Logo}
              alt="Indo Group"
              className="h-10 w-auto max-w-[160px] object-contain sm:h-12 sm:max-w-[200px] md:h-14"
            />
          </Link>

          <nav className="site-desktop-nav">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={linkClass(location.pathname.startsWith('/services'))}
                  >
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-black/5 bg-white p-3 shadow-xl"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block rounded-xl px-4 py-3 text-sm text-ink transition hover:bg-paper-2 hover:text-teal"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={linkClass(location.pathname === item.href)}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold" />
                  )}
                </Link>
              ),
            )}
          </nav>

          <div className="site-desktop-cta">
            <Button to="/contact" variant="primary">
              Get a quote
            </Button>
          </div>

          <button
            type="button"
            className="site-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="site-mobile-drawer fixed inset-0 z-40 overflow-y-auto bg-[#141414] px-6 pb-10 pt-24"
          >
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.children ? (
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#EEE8A9]">
                        {item.label}
                      </p>
                      <div className="space-y-3 pl-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block text-lg text-white/90"
                            onClick={() => setOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block font-display text-2xl text-white"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Button to="/contact" className="mt-8" onClick={() => setOpen(false)}>
                Get a quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
