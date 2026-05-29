// Run this with: node fetch-cloudinary-urls.mjs
// Fill in your API_KEY and API_SECRET from Cloudinary Settings > API Keys

const CLOUD_NAME = "dbeh0eisn";
const API_KEY = "YOUR_API_KEY";       // ← paste from Cloudinary
const API_SECRET = "YOUR_API_SECRET"; // ← paste from Cloudinary

const BASE_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`;
const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

async function fetchAll() {
  let allResources = [];
  let nextCursor = null;

  do {
    const url = new URL(BASE_URL);
    url.searchParams.set("max_results", "500");
    url.searchParams.set("prefix", "");
    if (nextCursor) url.searchParams.set("next_cursor", nextCursor);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Basic ${auth}` },
    });
    const data = await res.json();
    allResources = allResources.concat(data.resources || []);
    nextCursor = data.next_cursor || null;
  } while (nextCursor);

  // Filter only d7d440 images
  const d7Images = allResources
    .filter((r) => r.public_id.includes("d7d440"))
    .sort((a, b) => {
      const numA = parseInt(a.public_id.split("_")[0]) || 0;
      const numB = parseInt(b.public_id.split("_")[0]) || 0;
      return numA - numB;
    });

  console.log(`\nFound ${d7Images.length} d7d440 images.\n`);

  // Generate the IMAGES array for tech-flat/page.tsx
  const lines = d7Images.map(
    (r, i) =>
      `  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/${r.public_id}",`
  );

  const output = `const IMAGES = [\n${lines.join("\n")}\n];`;
  console.log(output);

  // Also write to a file
  const fs = await import("fs");
  fs.writeFileSync("./cloudinary-images.txt", output);
  console.log("\n✅ Saved to cloudinary-images.txt — paste into tech-flat/page.tsx");
}

fetchAll().catch(console.error);
