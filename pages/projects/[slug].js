import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { getAllProjects } from '../../lib/projects';

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
  const { name } = project.fields;
  return (
    <Layout>
      <Head>
        <title>Project</title>
      </Head>
      <h2>{name}</h2>
    </Layout>
  );
}

export default Project;
