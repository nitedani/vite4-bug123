import { createServer } from "vite";
import { join } from "path";
async function main() {
  const server = await createServer();
  server.ssrLoadModule(join(process.cwd(), "src/entry.js"));
}
main();
