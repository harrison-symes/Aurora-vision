import * as React from "react";

const SITE_URL = "https://www.auroravision.nz";
const SITE_NAME = "AuroraVision";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface ISeoProps {
  /** Page title, without the brand suffix. */
  title: string;
  description: string;
  /** Path only, e.g. "/our-work". */
  path: string;
  /** Absolute URL. Defaults to the site's share image. */
  image?: string;
  /** "video.other" for the film pages, otherwise a website. */
  type?: "website" | "video.other";
  /** Keeps a page out of search results without hiding it from people. */
  noIndex?: boolean;
}

type Tag = {
  selector: string;
  create: () => HTMLElement;
  attr: string;
  value: string;
};

/** Updates the tag if it is already in the head, otherwise adds it. */
const upsert = ({ selector, create, attr, value }: Tag) => {
  let element = document.head.querySelector<HTMLElement>(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
};

const metaTag = (key: "name" | "property", name: string, value: string): Tag => ({
  selector: `meta[${key}="${name}"]`,
  create: () => {
    const el = document.createElement("meta");
    el.setAttribute(key, name);
    return el;
  },
  attr: "content",
  value,
});

/**
 * Per-page title, description, canonical and social tags.
 *
 * This writes to document.head directly rather than going through
 * react-helmet-async. That library is installed and was being used on every
 * page, but renders nothing under React 18's StrictMode - which is why every
 * page on the live site served the same title from index.html, with no
 * canonical and no per-page description.
 *
 * Social scrapers do not execute JavaScript, so they read the static defaults
 * in index.html. These per-page tags are for Google, which does.
 */
const Seo = (props: ISeoProps) => {
  const { title, description, path, image, type, noIndex } = props;

  React.useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = `${title} | ${SITE_NAME}`;
    const shareImage = image ?? DEFAULT_IMAGE;

    document.title = fullTitle;

    const tags: Tag[] = [
      metaTag("name", "description", description),
      metaTag("name", "robots", noIndex ? "noindex, follow" : "index, follow"),
      metaTag("property", "og:site_name", SITE_NAME),
      metaTag("property", "og:type", type ?? "website"),
      metaTag("property", "og:title", fullTitle),
      metaTag("property", "og:description", description),
      metaTag("property", "og:url", url),
      metaTag("property", "og:image", shareImage),
      metaTag("property", "og:locale", "en_NZ"),
      metaTag("name", "twitter:card", "summary_large_image"),
      metaTag("name", "twitter:title", fullTitle),
      metaTag("name", "twitter:description", description),
      metaTag("name", "twitter:image", shareImage),
      {
        selector: 'link[rel="canonical"]',
        create: () => {
          const el = document.createElement("link");
          el.setAttribute("rel", "canonical");
          return el;
        },
        attr: "href",
        value: url,
      },
    ];

    tags.forEach(upsert);
  }, [title, description, path, image, type, noIndex]);

  return null;
};

export default Seo;
