import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["lib/main.ts"],
  clean: true,
  dts: true,
  ...options,
}));
