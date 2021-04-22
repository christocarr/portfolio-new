import Layout from '../components/layout/Layout';
import ProjectCard from '../components/project-card/ProjectCard';
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
      <h2>About Me</h2>
      <h2>Projects</h2>
      <ul>
        {allProjects.map(({ fields, sys }) => (
          <li key={sys.id}>
            <ProjectCard fields={fields} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
