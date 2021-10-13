import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createGlobalStyle } from 'styled-components'

// Components
import Homepage from "./components/Homepage"
import Menu from "./components/Menu"

// Pages
import Projects from "./pages/Projects"
import Error from "./pages/Error"
import Contacts from "./pages/Contacts"

const GlobalStyles = createGlobalStyle`
    :root {
  --background-image: linear-gradient(
    120deg,
    hsl(169, 100%, 35%),
    rgba(1, 84, 69, 0.67)
  );
  --background-overlay: rgba(0, 0, 0, 0.8);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

img {
  max-width: 100%;
}

body {
  font-family: "Manrope", sans-serif;
  overflow: auto;
}

a {
  font-family: inherit;
  text-decoration: none;
  color: #fff;
}
`
const App = () => {
  return (
    
    <BrowserRouter>
     <GlobalStyles/>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contacts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
