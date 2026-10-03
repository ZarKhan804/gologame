
import { Helmet } from "react-helmet-async";
import DownloadHero from "./DownloadHero";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Download() {
  return (
    <>
      <Helmet>
        <title>Golo Game Download Guide | Mobile Access Information</title>

        <meta
          name="description"
          content="Explore the Golo Game download and mobile access guide, compatible device information, application safety, account guidance, and general gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://goloogames.com/download"
        />

        <meta
          property="og:title"
          content="Golo Game Download Guide | Mobile Access Information"
        />

        <meta
          property="og:description"
          content="Learn about Golo Game mobile access, application information, device compatibility, account guidance, and general gaming resources."
        />

        <meta
          property="og:url"
          content="https://goloogames.com/download"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <DownloadHero />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Download;

