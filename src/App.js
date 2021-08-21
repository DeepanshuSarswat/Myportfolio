import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import About from "./component/About";
import Layout from "./Layout";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BE185D",
    },
  },
});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/project">
                <Projects />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
