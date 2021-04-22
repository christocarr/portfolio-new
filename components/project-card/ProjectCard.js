import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

function ProjectCard({ fields }) {
  console.log(fields);
  const { name, screenshot, description, slug } = fields;
  return (
    <div className={styles.card__container}>
      <div className={styles.card__image_container}>
        <Image
          src={`https:${screenshot.fields.file.url}`}
          layout="fill"
          objectFit="cover"
          alt={screenshot.fields.title}
        />
      </div>
      <div className={styles.card__details_container}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link href={`/projects/${slug}`}>
          <a>See more...</a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
