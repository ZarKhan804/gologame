import { Link } from "react-router-dom";

const gameImage =
  "https://gologame.org/wp-content/uploads/2024/09/download-2.jpeg";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">

          {/* BRAND + ARTICLE */}
          <section>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={gameImage}
                alt="Golo Game Logo"
                className="h-12 w-12 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-xl font-black text-white">
                  GOLO<span className="text-yellow-400"> GAME</span>
                </h2>

                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  Download Game
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Golo Game is a modern online gaming platform that offers a simple
              interface, smooth navigation, and a convenient browsing
              experience. Users can explore Golo Game Online, learn about its
              features, and discover different gaming options through a
              responsive design that works across smartphones, tablets, laptops,
              and desktop devices.
            </p>
          </section>

          {/* PAGES */}
          <nav>
            <h3 className="text-base font-bold text-white">Pages</h3>

            <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
              <Link
                to="/"
                className="transition hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:text-yellow-400"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="transition hover:text-yellow-400"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-yellow-400"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* INFORMATION */}
          <section>
            <h3 className="text-base font-bold text-white">GOLO GAME</h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Explore the website and read the available information about the
              platform, its interface, navigation, and features.
            </p>
          </section>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-5 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
          © 2026 Golo Game. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;