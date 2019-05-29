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
import Presenter from './Presenter'
import choppTime from './chopp-time.jpeg'
import QRCode from 'react-qr-code';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#282c34',
    white: '#fefefe',
    secondary: '#CECECE',
    tertiary: '#05d7fe',
    quaternary: '#CECECE',
    success: '#009688',
    danger: '#ef5350',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const DEMO_URL = 'https://bit.ly/2Kc9Qhc';
const LOGO = 'https://cdn.svgporn.com/logos/react.svg';
const photoURL = "https://avatars1.githubusercontent.com/u/4452113?s=460&v=4";
const RN = 'https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png';

export default function Presentation(props) {
  return (
    <Deck
      transition={['zoom', 'slide']}
      transitionDuration={500}
      theme={theme}
    >

      {/* Slide 1 */}
      <Slide transition={['zoom']} bgColor="primary">
        <img src={LOGO} alt="react" width={150} style={{
          marginBottom: 40,
          animation: 'spin 3s linear infinite',
        }} />

        <Heading size={1} caps fit lineHeight={1} textColor="secondary">
          Evoluindo o React para mobile
        </Heading>

        <Text margin="10px 0 0" textColor="tertiary" size={10} bold>
          com PWA e React Native
        </Text>

        <Text margin="80px 0 0" textColor="secondary" textSize={20}>
          por Marco Antônio
        </Text>
      </Slide>

      {/* Summary */}
      <Slide transition={['fade']} bgColor="secondary">
        <Heading size={6} textColor="primary" caps>
          Tópicos
        </Heading>


        <List textColor="primary">
          <ListItem>Web development</ListItem>
          <ListItem>Mobile Development</ListItem>
          <ListItem>Demo</ListItem>
          <ListItem>Case de sucesso</ListItem>
          <ListItem>Perguntas</ListItem>
        </List>
      </Slide>

      {/* Talker Presentation */}
      <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
          Quem é esse duende que vos fala?
        </Heading>

        <Presenter
          photoURL={photoURL}
          name="Marco Antônio"
          github="marco-souza"
          linkedin="masouzajunior"
          hightlights={[
            'Full Stack Engineer',
            'DevOps Evangelist',
            'Cat lover',
            'Bravo de código na @GovPredict',
          ]}
        />
      </Slide>

      {/* Web Development */}
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>Web development</Quote>
          <Cite>A long time ago...</Cite>
        </BlockQuote>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={6} textColor="secondary" fit caps>
          jQuery e jQuery Mobile
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="secondary" caps>
          Responsividade e Mobile First
        </Heading>
      </Slide>

      {/* Mobile Development */}
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>Mobile Development</Quote>
        </BlockQuote>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="tertiary">
          Por quê ter um app mobile?
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
      <Heading size={3} textColor="tertiary">
          Principais motivos
        </Heading>

        <List textColor="secondary">
          <ListItem>Engajamento e Presença</ListItem>
          <ListItem>Funciona Offline</ListItem>
          <ListItem>Sensação de ser mais rápido</ListItem>
          <ListItem>Acesso a sensores nativos</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={5} textColor="tertiary">
          Distribuição do tempo gasto no celular (iOS e Android)
        </Heading>

        <img src="https://static.wingify.com/vwo/uploads/sites/3/2015/10/flurry_march2014_apptime.jpg" alt="almost 8x"/>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={3} textColor="tertiary">
          Tipos de aplicações mobile
        </Heading>

        <List textColor="secondary">
          <ListItem>Native Apps</ListItem>
          <ListItem>Hybrid Apps</ListItem>
          <ListItem>Progressive Web Apps</ListItem>
        </List>
      </Slide>

      {/* Types of Apps - Native Apps */}
      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="tertiary">
          Native Apps
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="primary">
        <List textColor="success">
          <ListItem>Melhor performance possível</ListItem>
          <ListItem>Funciona Offline</ListItem>
          <ListItem>Acesso a sensores nativos</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="primary">
        <List textColor="danger">
          <ListItem>Desenvolvimento mais caro</ListItem>
          <ListItem>Relativamente poucos desenvolvedores</ListItem>
          <ListItem>Maior curva de aprendizado para novatos</ListItem>
          <ListItem>Requer instalação</ListItem>
        </List>
      </Slide>

      {/* Types of Apps - Hybrid Apps */}
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>Hybrid Apps</Quote>
        </BlockQuote>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary">
        <List textColor="success">
          <ListItem>Oferece acesso ao sistema via APIs</ListItem>
          <ListItem>Utiliza de frameworks web para fazer interfaces</ListItem>
          <ListItem>Baixa curva de aprendizado - HTML, CSS, e JavaScript</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="primary">
        <List textColor="danger">
          <ListItem>Aplicativos lentos</ListItem>
          <ListItem>Aplicativos ocupam mais espaço</ListItem>
          <ListItem>Problemas com binds de navegação nativa</ListItem>
          <ListItem>Requer instalação</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="tertiary">
          E onde entra o
        </Heading>

        <img src={RN} alt="React Native" width={200} style={{ margin: '60px 0' }} />

        <Heading size={3} textColor="tertiary">
          ?
        </Heading>
      </Slide>

      {/* Types of Apps - Progressive Web App */}
      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="tertiary">
        Progressive Web App
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary">
        <List textColor="success">
          <ListItem>Aplicativos muito leves</ListItem>
          <ListItem>Não requer instalação</ListItem>
          <ListItem>Funciona offline</ListItem>
          <ListItem>Baixa curva de aprendizado - HTML, CSS, e JavaScript</ListItem>
          <ListItem>Integração com APIs do navegador (push, cache, password manager, etc)</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="primary">
        <List textColor="danger">
          <ListItem>Curva de aprendizado um pouco maior</ListItem>
          <ListItem>Pode gerar problemas de cache</ListItem>
          <ListItem>Depende de suporte do navegador</ListItem>
        </List>
      </Slide>

      {/* Types of Apps - Demo */}
      <Slide transition={['fade']} bgColor="white" textColor="primary" >
        <BlockQuote>
          <Quote>Demo</Quote>

          <img src="https://media.giphy.com/media/nGMnDqebzDcfm/giphy.gif" alt="code" width={400} style={{ margin: '100px 0 0' }} />
        </BlockQuote>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={6} textColor="tertiary">
          Requisitos
        </Heading>

        <List>
          <ListItem>manifest.json</ListItem>
          <ListItem>Service Work</ListItem>
          <ListItem>https</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={2} textColor="tertiary">
          Demo View
        </Heading>

        <div style={{ border: '15px solid white', display: 'inline-block', margin: '60px' }}>
          <QRCode value={DEMO_URL} />
        </div>
        <Text textSize="2em" >
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
            href={DEMO_URL}
          >
              {DEMO_URL}
          </a>
        </Text>
      </Slide>

      {/* Types of Apps - Progressive Web App */}
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>PWA na SmarttBot</Quote>
        </BlockQuote>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary">
        <Heading size={3} textColor="primary">
          Trusted Web Applications
        </Heading>
      </Slide>

      {/* Conclusões finais */}
      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="tertiary">
          Considerações finais
        </Heading>
      </Slide>

      {/* Dúvidas */}
      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={3} textColor="tertiary">
          Perguntas?
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <img src="https://media3.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif" alt="Thanks" width={800} />
      </Slide>

      {/* Referências */}
      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <List textColor="secondary">
          Referências:
          <ListItem textSize={18}>https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app</ListItem>
          <ListItem textSize={18}>https://en.wikipedia.org/wiki/Progressive_web_applications</ListItem>
          <ListItem textSize={18}>https://vwo.com/blog/10-reasons-mobile-apps-are-better/</ListItem>
          <ListItem textSize={18}>https://developers.google.com/web/fundamentals/</ListItem>
          <ListItem textSize={18}>https://facebook.github.io/react-native/</ListItem>
          <ListItem textSize={18}>https://reactjs.org/</ListItem>
        </List>
      </Slide>

      {/* Chopp Time */}
      <Slide transition={['fade']} bgColor="primary" textColor="secondary">
        <Heading size={4} textColor="secondary" style={{ marginBottom: 40 }}>
          It's Chopp Time!
        </Heading>

        <img src={choppTime} alt="Chopp Time" width={600} />
      </Slide>
    </Deck>
  );
}
