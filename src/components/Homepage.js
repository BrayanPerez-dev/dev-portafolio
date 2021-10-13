import {FaGithub } from "react-icons/fa"
import styled from 'styled-components'

const Homepage = () => {
  return (
    <Wrapper>
      <section className="homepage">
        <div className="overlay">
          <h1>Brayan Perez</h1>
          <p>Front-end Web Developer</p>

          <ul>
            <li>
              <a
                href="https://github.com/BrayanPerez-dev"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.homepage {
  background: url("./showcase.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.homepage .overlay {
  background-image: var(--background-image);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  text-align: center;
}

.homepage .overlay h1 {
  text-transform: uppercase;
  font-size: 96px;
}

.homepage .overlay p {
  font-size: 36px;
}

.homepage .overlay ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.homepage .overlay ul li {
  margin: 0 20px;
}

.homepage .overlay ul li a {
  font-size: 46px;
}


@media (max-width: 992px) {
  .homepage .overlay h1 {
    font-size: 64px;
  }
}


@media (max-width: 500px) {
  
  .homepage .overlay h1 {
    font-size: 30px;
  }

  .homepage .overlay p {
    font-size: 20px;
    margin-top: 20px;
  }

  .homepage .overlay ul li a {
    font-size: 24px;
  }

  
}

`
export default Homepage
