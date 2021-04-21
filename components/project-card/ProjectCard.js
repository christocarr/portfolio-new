import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ fields }) {
  const { projectTitle, screenshot, description, slug } = fields;
  return (
    <div>
      <h3>{projectTitle}</h3>
      <div>
        <Image
          src={`https:${screenshot.fields.file.url}`}
          width={screenshot.fields.file.details.image.width}
          height={screenshot.fields.file.details.image.height}
          alt={screenshot.fields.title}
        />
      </div>
      <p>{description}</p>
      <Link href={`/projects/${slug}`}>
        <a>See more...</a>
      </Link>
    </div>
  );
}

export default ProjectCard;
