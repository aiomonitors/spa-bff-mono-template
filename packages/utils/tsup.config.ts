import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: [
    "src/index.ts",
    "src/money.ts",
  ],
  splitting: true,
  format: [
    "esm",
    "cjs",
  ],
  dts: true,
  treeshake: true,
  bundle: false,
  ...options,
}));
