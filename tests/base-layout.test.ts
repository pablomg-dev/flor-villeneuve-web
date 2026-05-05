import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { describe, it, expect } from "vitest";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const readProjectFile = async (relativePath: string) => {
  const fullPath = path.join(rootDir, relativePath);
  return readFile(fullPath, "utf-8");
};

describe("BaseLayout SEO metadata", () => {
  it("defines keywords prop and renders SEO metadata", async () => {
    const content = await readProjectFile("src/layouts/BaseLayout.astro");

    expect(content).toContain("keywords?: string;");
    expect(content).toContain(
      "const { title, description, canonical = Astro.url.pathname, keywords } = Astro.props;",
    );
    expect(content).toContain('<meta name="keywords" content={keywords} />');
    expect(content).toContain(
      '<meta name="author" content="Florencia Villeneuve" />',
    );
    expect(content).toContain('<meta name="robots" content="index, follow" />');
  });

  it("uses Spanish language attribute in the HTML tag", async () => {
    const content = await readProjectFile("src/layouts/BaseLayout.astro");
    expect(content).toContain('lang="es"');
  });
});
