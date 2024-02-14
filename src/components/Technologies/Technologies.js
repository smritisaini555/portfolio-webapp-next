import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      I have worked on multiple stack during my web developemen life cycle{" "}
    </SectionText>
    <List>
      <ListItem>
        <DiReact />
        <ListContainer> Front-End</ListContainer>
        <ListParagraph>
          Experience With <br />
          React Js & Next Js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase />
        <ListContainer> Back-End</ListContainer>
        <ListParagraph>
          Experience With <br />
          Node.Js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend />
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
          Experience With <br />
          Figma & Open-source React component library for designing
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
