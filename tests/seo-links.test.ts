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

describe("SEO and social links", () => {
  it("uses the correct Instagram handle in structured data", async () => {
    const content = await readProjectFile("src/pages/index.astro");
    expect(content).toContain("https://instagram.com/florencia.villeneuve");
    expect(content).not.toContain("https://instagram.com/florhesiendo");
  });

  it("includes the correct Instagram link in README", async () => {
    const readme = await readProjectFile("README.md");
    expect(readme).toContain("https://instagram.com/florencia.villeneuve");
  });
});
