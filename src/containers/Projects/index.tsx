import { ChangeEvent, useState } from 'react';
import Project from '../../components/Project';
import Title from '../../components/Title';
import { projects } from '../../utils/projects';

import { Lista, Container } from './styles';

const Projects = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const filteredProjects = projects.filter((projects) => {
    if (selectedOption === 'backend') {
      return projects.stack === 'back-end';
    } else if (selectedOption === 'frontend') {
      return projects.stack === 'front-end';
    } else if (selectedOption === 'fullstack') {
      return projects.stack === 'full-stack';
    }

    return true;
  });
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section>
      <Container>
        <Title fontSize={16}>Projetos</Title>
        <select
          name=""
          id=""
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Todos</option>
          <option value="frontend">Front-end</option>
          <option value="backend">Back-end</option>
          <option value="fullstack">Full-stack</option>
        </select>
      </Container>
      <Lista>
        {filteredProjects.map((project) => (
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
};

export default Projects;
