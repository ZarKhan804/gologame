import { Helmet } from "react-helmet-async";

import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import InternalLinksArticle from "./InternalLinksArticle";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Golo Game Blog | Game Guides & Platform Information</title>

        <meta
          name="description"
          content="Explore Golo Game guides, gameplay information, mobile access tips, account security, platform features, and responsible gaming resources for users in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://goloogames.com/blog"
        />

        <meta
          property="og:title"
          content="Golo Game Blog | Game Guides & Platform Information"
        />

        <meta
          property="og:description"
          content="Explore Golo Game platform guides, mobile access information, account security tips, and responsible gaming resources."
        />

        <meta
          property="og:url"
          content="https://goloogames.com/blog"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://goloogames.com/og-image.webp"
        />

        <meta
          name="twitter:title"
          content="Golo Game Blog | Game Guides & Platform Information"
        />

        <meta
          name="twitter:description"
          content="Explore Golo Game platform guides, mobile access information, account security tips, and responsible gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://goloogames.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <BlogHero />
        <BlogPosts />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Blog;