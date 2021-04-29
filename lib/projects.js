import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getAllProjects(contentType) {
  const res = await client.getEntries(contentType);
  return res.items;
}

export async function getAllPaths() {}
