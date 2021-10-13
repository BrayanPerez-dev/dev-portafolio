import { FaPhone, FaEnvelope } from "react-icons/fa"
import styled from 'styled-components'

const Contacts = () => {
  return (
    <Wrapper>
      <section className="contacts">
        <h1>Contact Me</h1>
        <ul>
          <li>
            <a href="tel:+50375716344">
              <FaPhone /> +503 75716344
            </a>
          </li>
          <li>
            <a href="mailto:bryanjperez20@gmail.com">
              <FaEnvelope /> bryanjperez20@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.contacts {
  background-image: var(--background-image);
  height: 100vh;
}

.contacts h1 {
  padding: 50px 80px;
  color: #fff;
}

.contacts ul {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.contacts ul li {
  margin: 10px 0;
}

.contacts ul li a {
  font-size: 30px;
}

@media (max-width: 500px) {
  .contacts ul li a {
    font-size: 18px;
  }

  .contacts h1{
    padding: 50px 30px;
  }

}

`

export default Contacts
