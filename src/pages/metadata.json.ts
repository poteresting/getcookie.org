import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const legalEntries = await getCollection('legal');

  const legal: Record<string, { lastUpdated: number }> = {};

  for (const entry of legalEntries) {
    // Convert slug (privacy-policy) to camelCase (privacyPolicy)
    const key = entry.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    legal[key] = {
      lastUpdated: Math.floor(entry.data.lastUpdated.getTime() / 1000),
    };
  }

  return new Response(JSON.stringify({ legal }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
