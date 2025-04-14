import { execSync } from "child_process";

const type = process.argv[2] || "patch"; // Por defecto: patch
const valid = ["patch", "minor", "major"];

if (!valid.includes(type)) {
  console.error(`Tipo de release inválido: ${type}`);
  process.exit(1);
}

try {
  execSync("npm run build", { stdio: "inherit" });
  execSync(`npm version ${type}`, { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  execSync("git push --tags", { stdio: "inherit" });
  execSync("npm publish", { stdio: "inherit" });
} catch (err) {
  console.error("Error al hacer release:", err);
  process.exit(1);
}
