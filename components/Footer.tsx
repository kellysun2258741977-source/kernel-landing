import Logo from "./Logo";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 font-serif text-2xl text-ink">
              {footer.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-ink">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ink-soft transition-colors hover:text-grass-600"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-sm text-ink-faint">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
