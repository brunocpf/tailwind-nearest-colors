import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: "#!/usr/bin/env node", // Ensure CLI script is executable
    };
  },
});
