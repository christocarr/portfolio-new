import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { getAllProjects } from '../../lib/projects';
import styles from './slug.module.css';

export const getStaticPaths = async () => {
  const contentType = { content_type: 'project' };
  const allProjects = await getAllProjects(contentType);

  const paths = allProjects.map(({ fields }) => {
    return {
      params: { slug: fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const contentType = {
    content_type: 'project',
    'fields.slug': params.slug,
  };
  const items = await getAllProjects(contentType);
  return {
    props: {
      project: items[0],
    },
  };
};

function Project({ project }) {
  console.log(project);
  const { name, screenshot } = project.fields;
  return (
    <>
      <Head>
        <title>Project - {name}</title>
      </Head>
      <Layout>
        <h2>{name}</h2>
        <div className={styles.card__container}>
          <Image
            src={`https:${screenshot.fields.file.url}`}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Link href="/projects">
          <a>&larr; Projects</a>
        </Link>
      </Layout>
    </>
  );
}

export default Project;
