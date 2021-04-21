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

// const space = '2lcsgwiz8z11';
// const environment = 'master';
// const accessToken = 'n3XQMZsr20JB0vyyMbaZCuhU0KhQwf-FQvrwEMusPno';

// const path = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`;

// export async function getAllProjects() {
//   const res = await fetch(path);
//   const data = await res.json();
//   return data.items;
// }
