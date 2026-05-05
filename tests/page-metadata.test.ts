import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { describe, it, expect } from "vitest";

const pages = [
  "src/pages/index.astro",
  "src/pages/bio.astro",
  "src/pages/mentoria.astro",
  "src/pages/arteterapia.astro",
  "src/pages/preguntas.astro",
];

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const readProjectFile = async (relativePath: string) => {
  const fullPath = path.join(rootDir, relativePath);
  return readFile(fullPath, "utf-8");
};

describe("Page metadata", () => {
  for (const pagePath of pages) {
    it(`includes keywords metadata in ${pagePath}`, async () => {
      const content = await readProjectFile(pagePath);
      expect(content).toContain('keywords="');
    });
  }
});
