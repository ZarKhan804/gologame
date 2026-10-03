
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <>
      <Helmet>
        <title>Golo Game Online | Golo Games Official Website</title>

        <meta
          name="description"
          content="Explore Golo Game for platform information, game features, mobile access, gameplay guides, account security, and responsible gaming tips."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://goloogames.com/"
        />

        <meta
          property="og:title"
          content="Golo Game Online | Golo Games"
        />

        <meta
          property="og:description"
          content="Explore Golo Game platform information, game features, mobile access, and helpful gameplay guides."
        />

        <meta
          property="og:url"
          content="https://goloogames.com/"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main>
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Home;

