import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import PokemonGrid from "./components/PokemonGrid";
import Title from "./components/Title";
import Party from "./components/Party";
import PartyList from "./components/PartyList";
import PartyMemberCount from "./components/PartyMemberCount";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Container>
            <Row>
              <Col md={2}>
                <Title page="index" />
              </Col>
              <Col xs={12} xs={{ order: 2 }} md={8} md={{ order: 1 }}>
                <PokemonGrid />
              </Col>
              <Col xs={{ order: 1 }} md={2} md={{ order: 2 }}>
                <PartyList />
              </Col>
            </Row>
          </Container>
        </Route>
        <Route exact path="/party">
          <Container>
            <Row>
              <Col md={2}>
                <Title page="party" />
              </Col>
              <Col xs={12} md={8}>
                <Party />
              </Col>
              <Col md={2}>
                <PartyMemberCount />
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
