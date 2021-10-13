import { useState } from "react"
import { Link } from "react-router-dom"
import { BiMenuAltRight } from "react-icons/bi"
import { navbar } from "../data/navbar"
import styled from 'styled-components'
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar)

  return (
    <Wrapper>
      <div className="menu-btn">
        <button onClick={() => setIsOpen(!isOpen)}>
          <BiMenuAltRight />
        </button>
      </div>

      <header className={`${isOpen ? "header open" : "header"}`}>
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id} onClick={() => setIsOpen(false)}>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </Wrapper>
  )
}
const Wrapper = styled.div`
/* Menu button */

.menu-btn {
  position: absolute;
  right: 80px;
  margin-top: 50px;
  z-index: 9999999;
}

.menu-btn button {
  background-color: transparent;
  font-size: 36px;
  color: #fff;
  border: none;
  cursor: pointer;
}

/* Header */

.header {
  position: absolute;
  right: 0;
  height: 0;
  overflow: hidden;
  width: 200px;
  transition: all 0.5s ease-in-out;
}

.header.open {
  height: 100vh;
  background-color: var(--background-overlay);
}

.header nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.header nav ul li {
  margin: 20px 0;
}


@media (max-width: 500px) {
  .menu-btn {
    right: 30px;
  }
}


`
export default Menu
