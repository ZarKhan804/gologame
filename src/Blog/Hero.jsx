
function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">

        <div className="mx-auto w-fit rounded-full border border-yellow-300 bg-white px-5 py-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-600">
            Golo Game Information
          </p>
        </div>

        <h1 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Golo Game <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-yellow-400" />

        <article className="mx-auto mt-9 max-w-4xl rounded-2xl border border-gray-300 bg-white px-6 py-8 shadow-sm sm:px-9">

          <p className="text-base leading-8 text-slate-600">
            Welcome to the Golo Game Blog, a useful space for learning about
            Golo Game, its online gaming platform, features, interface,
            navigation, mobile accessibility, and available gaming options.
            Explore informative content designed to make Golo Game easier to
            understand for visitors looking for a simple online gaming
            experience.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Golo Game is designed with a modern interface, clean layout, and
            straightforward navigation. Visitors can explore different
            sections of the platform and learn about available features
            through an organized website structure. The responsive design
            makes Golo Game convenient to browse across different devices.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            On this blog, visitors can learn about Golo Game Online, Golo Game
            Download, Golo Game App, Golo Game features, mobile accessibility,
            website navigation, and the overall Golo Game experience. The
            content provides general information about the platform while
            keeping the language simple and easy to follow.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Whether you are interested in understanding Golo Game, exploring
            its online features, learning about the Golo Game App, or finding
            information about Golo Game Download, this blog provides
            straightforward content in an easy-to-read format. Content is
            structured for comfortable browsing across smartphones, tablets,
            laptops, and desktop devices.
          </p>

        </article>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Golo Game",
            "Golo Game Online",
            "Golo Game Download",
            "Golo Game App",
            "Golo Game Features",
            "Golo Game Guide",
            "Online Golo Game",
          ].map((keyword) => (
            <span
              key={keyword}
              className="border-l-4 border-yellow-400 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;

