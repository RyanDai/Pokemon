import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import PokemonGrid from "./components/PokemonGrid";
import Title from "./components/Title";
import Party from "./components/Party";
import PartyList from "./components/PartyList";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Container>
            <Row>
              <Col>
                <Title />
              </Col>
              <Col xs={12} md={8}>
                <PokemonGrid />
              </Col>
              <Col>
                <PartyList />
              </Col>
            </Row>
          </Container>
        </Route>
        <Route exact path="/party">
          <Container>
            <Row>
              <Col>
                <Title />
              </Col>
              <Col xs={12} md={8}>
                <Party />
              </Col>
              <Col>
                <PartyList />
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
