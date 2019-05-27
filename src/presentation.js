// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#282c34',
    secondary: '#CECECE',
    tertiary: '#61dafb',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';
const photoURL = "https://avatars1.githubusercontent.com/u/4452113?s=400&u=a1a0e0584c93e33cfde2e0085a631c52894e7541&v=4";

export default function Presentation(props) {
  return (
    <Deck
      transition={['zoom', 'slide']}
      transitionDuration={500}
      theme={theme}
    >

      {/* Slide 1 */}
      <Slide transition={['zoom']} bgColor="primary">
        <img src={LOGO} alt="react" width={200} style={{marginBottom: 40}} />

        <Heading size={1} caps fit lineHeight={1} textColor="secondary">
          Evoluído o React para mobile
        </Heading>

        <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
          com PWA e React Native
        </Text>
      </Slide>

      {/* Summary */}
      <Slide transition={['fade']} bgColor="secondary">
        <Heading size={6} textColor="primary" caps>
          Summary
        </Heading>

        <List textColor="primary">
          <ListItem>Web development</ListItem>
          <ListItem>Mobile Development</ListItem>
          <ListItem>Progressive Web Apps</ListItem>
          <ListItem>Pontos fortes Pontos Fracos</ListItem>
          <ListItem>Case de sucesso</ListItem>
          <ListItem>Perguntas</ListItem>
        </List>
      </Slide>

      {/* Talker Presentation */}
      <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
          Quem é esse duende que vos fala?
        </Heading>

        <div style={{display: 'flex', marginTop: 60}}>
          <img
            src={photoURL}
            alt="Marco Antônio"
            style={{
              borderRadius: '50%',
              height: 300,
              width: 300,
              marginRight: 40,
            }}
          />

          <List>
            <ListItem>Full Stack Engineer</ListItem>
            <ListItem>DevOps Evangelist</ListItem>
            <ListItem>Cat lover</ListItem>
            <ListItem>Bravo de código</ListItem>
          </List>
        </div>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>Errado!</Quote>
          <Cite>Relâmpago Marquinhos</Cite>
        </BlockQuote>

        <Text size={6} textColor="secondary">
          Aqui é relâmpago Marquinhos?
        </Text>
      </Slide>
    </Deck>
  );
}
