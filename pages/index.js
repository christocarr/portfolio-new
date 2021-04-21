import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { getAllProjects } from '../lib/projects';

export async function getStaticProps() {
  const allProjects = await getAllProjects();
  return {
    props: {
      allProjects,
    },
  };
}

export default function Index({ allProjects }) {
  console.log(allProjects);
  return (
    <Layout>
      <h2>Projects</h2>
      <ul>
        {allProjects.map(({ fields, sys }) => (
          <li key={sys.id}>
            <h3>{fields.projectTitle}</h3>
            <Image
              src={`https:${fields.screenshot.fields.file.url}`}
              width={fields.screenshot.fields.file.details.image.width}
              height={fields.screenshot.fields.file.details.image.height}
              alt={fields.screenshot.fields.title}
            />
            <p>{fields.description}</p>
            <Link href={`/projects/${fields.slug}`}>
              <a>See more...</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
