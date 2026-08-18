import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("dateFi", (date) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("fi-FI", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Europe/Helsinki"
    }).format(d);
  });

  eleventyConfig.addCollection("esseet", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("essee")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("uusimmatEsseet", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("essee")
      .sort((a, b) => b.date - a.date)
      .slice(0, 5);
  });

  eleventyConfig.addCollection("toisetTekstit", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("toiset")
      .sort((a, b) => b.date - a.date);
  });

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"]
  };
}
