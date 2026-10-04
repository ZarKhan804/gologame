import { Helmet } from "react-helmet-async";

import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import InternalLinksArticle from "./InternalLinksArticle";

function About() {
  return (
    <>
      <Helmet>
        <title>About Golo Game | Platform Information & Game Guide</title>

        <meta
          name="description"
          content="Learn about Golo Game, its platform information, gaming features, mobile access, account guidance, and responsible gaming tips for users in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.goloogames.com/about"
        />

        <meta
          property="og:title"
          content="About Golo Game | Platform Information & Game Guide"
        />

        <meta
          property="og:description"
          content="Explore Golo Game platform information, mobile access guidance, account security, and responsible gaming resources."
        />

        <meta
          property="og:url"
          content="https://www.goloogames.com/about"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.goloogames.com/og-image.webp"
        />

        <meta
          name="twitter:title"
          content="About Golo Game | Platform Information & Game Guide"
        />

        <meta
          name="twitter:description"
          content="Explore Golo Game platform information, mobile access guidance, account security, and responsible gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.goloogames.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <AboutHero />
        <AboutContent />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default About;