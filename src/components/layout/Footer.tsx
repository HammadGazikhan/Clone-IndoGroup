import { Link } from 'react-router-dom'
import image from '../../assets/images'
import { navItems, siteConfig } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-8 lg:px-10 lg:py-20">
        <div>
          <Link to="/" className="inline-block">
            <img
              src={image.FooterLogo}
              alt="Indo Group logo"
              className="h-14 w-auto"
            />
            <p className="mt-2 text-sm font-medium text-gold">
              {siteConfig.tagline}
            </p>
          </Link>
          <div className="mt-8 space-y-4 text-sm text-white/70">
            <p>
              <span className="font-semibold text-white">Address:</span>
              <br />
              Office No. 103+104, Landmark Building, 490/491 Nana Peth, Pune,
              Maharashtra - 411002
            </p>
            <p>
              <span className="font-semibold text-white">Contact:</span>
              <br />
              <a href="tel:+917378666783" className="hover:text-gold">
                7378666783
              </a>
              ,{' '}
              <a href="tel:+919822054197" className="hover:text-gold">
                9822054197
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <ul className="space-y-3 text-sm">
            {navItems
              .filter((item) => !item.children)
              .map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/70 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            <li>
              <a
                href="#top"
                className="text-white/70 transition hover:text-gold"
              >
                Back To Top ↑
              </a>
            </li>
          </ul>
          <ul className="space-y-3 text-sm">
            {navItems
              .find((item) => item.children)
              ?.children?.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/70 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/50 md:px-8 lg:px-10">
          © {year} Indo Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
