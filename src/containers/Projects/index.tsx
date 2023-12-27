import Project from '../../components/Project';
import Title from '../../components/Title';
import { projects } from '../../utils/projects';

import { Lista } from './styles';

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      {projects.map((project) => (
        <li key={project.title}>
          <Project
            title={project.title}
            description={project.description}
            url={project.url}
            githubUrl={project.githubUrl}
          />
        </li>
      ))}
    </Lista>
  </section>
);

export default Projects;
