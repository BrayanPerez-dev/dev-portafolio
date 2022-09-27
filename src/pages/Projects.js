import { useState } from "react"
import { FaGithub, FaVideo } from "react-icons/fa"
import { projects } from "../data/projects"
import styled from 'styled-components'

const Projects = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(projects)

  return (
    <Wrapper>
      <section className="projects">
        <h1>Projects Page</h1>

        <div className="cards">
          {cards.map(({ id, title, desc, github, demo, image }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="github"
                  >
                    <FaGithub style={{ marginRight: 5 }} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="demo"
                  >
                    <FaVideo style={{ marginRight: 5 }} /> Demo
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.projects {
  background-image: var(--background-image);
}

.projects h1 {
  padding: 50px 80px;
  color: #fff;
}

.projects .cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1100px;
  margin: auto;
  gap: 20px;
  color: #fff;
  padding-bottom: 20px;
}

.projects .cards h4 {
  font-size: 24px;
  margin: 20px 0 10px;
}

.projects .cards p {
  font-size: 18px;
  margin-bottom: 30px;
}

.projects .cards ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.projects .cards ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects .cards ul li a.github {
  background-color: #333;
  padding: 5px;
  font-size: 15px;
}

.projects .cards ul li a.demo {
  background-color: #224899;
  padding: 5px;
  font-size: 15px;
}

@media (max-width: 1150px) {
  .projects .cards {
    padding: 0 20px 20px;
  }
}


@media (max-width: 768px) {
  .projects .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  
  .projects h1 {
    padding: 50px 30px;
  }

  .projects .cards {
    grid-template-columns: 1fr;
  }

  .projects .cards p {
    font-size: 15px;
  }
}

`
export default Projects
