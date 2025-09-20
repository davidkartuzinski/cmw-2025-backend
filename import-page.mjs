// import-page.mjs
import fs from "node:fs";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const TOKEN = process.env.STRAPI_TOKEN; // Set this in your env when running

if (!TOKEN) {
  console.error("Missing STRAPI_TOKEN env var.");
  process.exit(1);
}

const raw = fs.readFileSync("./about.json", "utf8");
const dump = JSON.parse(raw);

// Expecting the shape you pasted: { data: [ { ...page } ], meta: {...} }
const page = dump.data?.[0];
if (!page) {
  console.error("No page data found in about.json");
  process.exit(1);
}

const {
  title,
  slug,
  mdxBody,
  Blocks,
  Blocks2,
  seo,
  publishedAt,
  locale = "en",
  localizations = [],
} = page;

// Helper for Content API calls with API Token
async function api(path, method = "GET", body) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${path} -> ${res.status}: ${text}`);
  }
  return await res.json();
}

(async () => {
  console.log("Creating EN base page…");

  // 1) Create EN base entry
  const enPayload = {
    data: {
      title,
      slug,
      locale, // 'en'
      mdxBody,
      ...(Blocks ? { Blocks } : {}),
      ...(Blocks2 ? { Blocks2 } : {}),
      ...(seo ? { seo } : {}),
      ...(publishedAt ? { publishedAt } : {}),
    },
  };

  const enResp = await api("/api/pages", "POST", enPayload);
  const enId = enResp?.data?.id;
  const baseDocId = enResp?.data?.attributes?.documentId;
  if (!enId || !baseDocId) throw new Error("Failed to create EN or missing documentId.");
  console.log(`EN created: id=${enId} documentId=${baseDocId}`);

  // 2) Create each localization (FR/ES) referencing the same document
  for (const loc of localizations) {
    const { title: lt, slug: ls, mdxBody: lb, locale: ll, publishedAt: lp } = loc;

    const locPayload = {
      data: {
        title: lt,
        slug: ls,
        locale: ll,
        mdxBody: lb,
        // Link to the same multi-locale document:
        documentId: baseDocId,
        ...(lp ? { publishedAt: lp } : {}),
      },
    };

    console.log(`Creating localization ${ll}…`);
    const lr = await api("/api/pages", "POST", locPayload);
    console.log(`Locale ${ll} created: id=${lr?.data?.id}`);
  }

  console.log("All done ✅");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
