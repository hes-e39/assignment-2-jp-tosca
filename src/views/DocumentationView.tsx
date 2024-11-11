import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Countdown from "../components/timers/Countdown";
import Stopwatch from "../components/timers/Stopwatch";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Stopwatch"
          component={<Stopwatch />}
          propDocs={[
            {
              prop: "refreshRate",
              description: "Sets the refresh rate in ms",
              type: "number",
              defaultValue: "1000",
            }
          ]}
        />
        <DocumentComponent
          title="Contdown"
          component={<Countdown />}
          propDocs={[
            {
              prop: "initTime",
              description: "Sets the initial time in ms",
              type: "number",
              defaultValue: "60000",
            },
            {
              prop: "refreshRate",
              description: "Sets the refresh rate in ms",
              type: "number",
              defaultValue: "1000",
            }
          ]}
        />
        <DocumentComponent
          title="XY"
          component={<XY/>}
          propDocs={[
            {
              prop: "initTime",
              description: "Sets the round length in ms",
              type: "number",
              defaultValue: "60000",
            },
            {
              prop: "initRounds",
              description: "Sets the number of rounds",
              type: "number",
              defaultValue: "10",
            },
            {
              prop: "refreshRate",
              description: "Sets the refresh rate in ms",
              type: "number",
              defaultValue: "1000",
            }

          ]}
        />
        <DocumentComponent
          title="Tabata"
          component={<Tabata />}
          propDocs={[
            {
              prop: "initWorkTime",
              description: "Sets the length in ms time of the Work period",
              type: "number",
              defaultValue: "60000",
            },
            {
              prop: "initWorkTime",
              description: "Sets the length in ms time of the Rest period",
              type: "number",
              defaultValue: "15000",
            },
            {
              prop: "initRounds",
              description: "Sets the number of rounds",
              type: "number",
              defaultValue: "10",
            },
            {
              prop: "refreshRate",
              description: "Sets the refresh rate in ms",
              type: "number",
              defaultValue: "1000",
            }
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
