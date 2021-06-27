import Home from "./views/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from 'react-router-dom';
import Nav from "./components/NavBar";
function App() {
  return (
    <div>

      <Route path={["/game/:id", "/"]}>
        <GlobalStyles />
        <Nav />
        <Home />
      </Route>
    </div>

  );
}

export default App;
