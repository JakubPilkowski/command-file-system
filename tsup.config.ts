import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*"],
  format: ["esm", "cjs"],
  dts: "src/index.ts",
  clean: true,
  minify: true,
  // legacyOutput: true,
});
