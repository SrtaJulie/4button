import { useState } from "react";
import Button from "./components/Button";
import Label from "./components/Label";

function App() {
  const possibleStates = Object.freeze({
    SPRING: {
      value: 0,
      enabling: {
        TO_SPRING: false,
        TO_SUMMER: true,
        TO_FALL: false,
        TO_WINTER: false,
      },
    },
    SUMMER: {
      value: 1,
      enabling: {
        TO_SPRING: false,
        TO_SUMMER: false,
        TO_FALL: true,
        TO_WINTER: false,
      },
    },
    FALL: {
      value: 2,
      enabling: {
        TO_SPRING: false,
        TO_SUMMER: false,
        TO_FALL: false,
        TO_WINTER: true,
      },
    },
    WINTER: {
      value: 3,
      enabling: {
        TO_SPRING: true,
        TO_SUMMER: false,
        TO_FALL: false,
        TO_WINTER: false,
      },
    },
  });
  const [state, setState] = useState(possibleStates.SPRING);
  const [labelSeason, setLabelSeason] = useState("Spring");
  return (
    <>
      <p className="h1 text-center">Four Buttons</p>
      <div className="container text-center bg-light border border-dark rounded p-3">
        <Row>
          <Button
            text="Srping"
            enabled={state.enabling.TO_SPRING}
            onClick={toSpring}
          />
          <Button
            text="Summer"
            enabled={state.enabling.TO_SUMMER}
            onClick={toSummer}
          />
        </Row>
        <Row>
          <Label text={labelSeason} />
        </Row>
        <Row>
          <Button
            text="Fall"
            enabled={state.enabling.TO_FALL}
            onClick={toFall}
          />
          <Button
            text="Winter"
            enabled={state.enabling.TO_WINTER}
            onClick={toWinter}
          />
        </Row>
      </div>
    </>
  );

  function toSpring() {
    switch (state.value) {
      case possibleStates.SPRING.value:
        //ERREUR.
        break;
      case possibleStates.SUMMER.value:
        //ERREUR.
        break;
      case possibleStates.FALL.value:
        //ERREUR.
        break;
      case possibleStates.WINTER.value:
        setState(possibleStates.SPRING);
        setLabelSeason("Spring");
        break;
    }
  }
  function toSummer() {
    switch (state.value) {
      case possibleStates.SPRING.value:
        setState(possibleStates.SUMMER);
        setLabelSeason("Summer");
        break;
      case possibleStates.SUMMER.value:
        //ERREUR.
        break;
      case possibleStates.FALL.value:
        //ERREUR.
        break;
      case possibleStates.WINTER.value:
        //ERREUR.
        break;
    }
  }
  function toFall() {
    switch (state.value) {
      case possibleStates.SPRING.value:
        //ERREUR.
        break;
      case possibleStates.SUMMER.value:
        setState(possibleStates.FALL);
        setLabelSeason("Fall");
        break;
      case possibleStates.FALL.value:
        //ERREUR.
        break;
      case possibleStates.WINTER.value:
        //ERREUR.
        break;
    }
  }
  function toWinter() {
    switch (state.value) {
      case possibleStates.SPRING.value:
        //ERREUR.
        break;
      case possibleStates.SUMMER.value:
        //ERREUR.
        break;
      case possibleStates.FALL.value:
        setState(possibleStates.WINTER);
        setLabelSeason("Winter");

        break;
      case possibleStates.WINTER.value:
        //ERREUR.
        break;
    }
  }
}
function Row({ children }) {
  return <div className="row justify-content-around">{children}</div>;
}
export default App;
