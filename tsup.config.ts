import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*"],
  //   splitting: false,
  //   sourcemap: true,
  format: ["esm"],
  dts: "src/index.ts",
  clean: true,
  minify: false,
});
