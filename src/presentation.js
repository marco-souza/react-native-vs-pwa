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

const LOGO = 'https://cdn.svgporn.com/logos/react.svg';
const photoURL = "https://avatars1.githubusercontent.com/u/4452113?s=460&v=4";

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
            <Text margin="10px 0 0" textColor="secondary" size={10} bold>
              Marco Antônio
            </Text>

            <ListItem textSize="1em">Full Stack Engineer</ListItem>
            <ListItem textSize="1em">DevOps Evangelist</ListItem>
            <ListItem textSize="1em">Cat lover</ListItem>
            <ListItem textSize="1em">Bravo de código na @GovPredict</ListItem>

            <div style={{display: 'inline-block', padding: 10, marginTop: 60, fontSize: 20 }}>
              <a style={{ textDecoration: 'none', color: '#CECECE', margin: 10 }} href="https://github.com/marco-souza">
                <img style={{ filter: 'invert(90%)', verticalAlign: 'middle', marginRight: 10, width: 36, height: 36 }} src="https://cdn.svgporn.com/logos/github-icon.svg" alt="github"/>
                @marco-souza
              </a>
            </div>

            <div style={{display: 'inline-block', padding: 10, marginTop: 60, fontSize: 20 }}>
              <a style={{ textDecoration: 'none', color: '#CECECE', margin: 10 }} href="https://www.linkedin.com/in/masouzajunior/">
                <img style={{ verticalAlign: 'middle', marginRight: 10, width: 36, height: 36 }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAe7X///8AcLAAc7EAd7Ps9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbLa6fKMuNaawNpHk8F+sNHg6/PR4++ixt5qpctbnceHs9JQmMTC2egRfrcsibyKuNUAaKw4jr+dw9wu2IZbAAAE4UlEQVR4nO2d7ZaaMBRFSQgaUIMOalXUlnn/h6y6nLZTRY4BItd19vyGyV655PMmRhEhhBBCCCGEEEIIISQozpn89GdeXY6ecLmNqs1usZsUhzh2ry5O5xh9/JyrL5JxqfO3knTx5q/eVXLh8lcXqzviaqVuSZf61QXrCvvjjt+ZdfQWjY5x/wfoP9VYvUGkukNSK3iilK/oHgoqVUgPVFsfolcOsnsN+9kkqOb21YVsg6kaBZXaSf4Um2P0jOAwdVtEUH3KrUS9hgzTSGotugwSVGoitRLzD9BwLbU5xdqZM0INnUMFVSlzYOMq2HAn09BMYMNx/OrCepHvYMORTEOzgA2nMpuaJwyFdhdPROlepqHZwIZjmYMad4QNFzJ7C+dS1FBojx9ZbGqhxI7a8JH3VGZ3eAKdPW2EBik+AzZSZ8CRKyHDD7FBCs4QU8n7bFCXKHYN4wKwIix0xPaHxjidiW1HvzCPd2bSTLzh49219Che8Dw8rQ/URH4NXqjd5R5J7ie+ERf3InW21e8ieD/b5Gf+HhH6xW3GkNzBaB3fsr7erP7+cM3ce7vKI4QQQgjpFWdOOCc2I6me0+jQap1nVbHdlkWV5VrbNzrn4WKbTT6nq287X6v1eFFm1na+comER6chZGK9HdeuDCX7ZaQ7rUqXAdQlCQOP3vjpYlS7KHRlvshsd5Jx4/9Ttck0uiFB/Mz3AxtG36wk3GdfdLZ+ghne/zaeNTR6AjxxZV525BjQ0FZwnuCFfdbJjlcwQwdskPxPJ4eSQhnm2b2DVU1MO+ghAxlaLJ/8hiRr3T2GMbRLP8ETRVvFIIYaz5+7pe3RshCGGs1puc+xXa8RwDD2D9ELabtK7N8w92xk/tIu87N3Q3eAc+dq+dmmFns31M8NZO7T5lPs2/AXnqT7gDZx2nsdtra70CKvrmfDdNze7kziP0Ltuw67YuJdiVIMV95fohRD/zRsMYYj30oUY6h8V/zkGC49BzZyDH1PXskxVJ4JaIIMPcc1ggw9j14JMlz5jdwEGaqDFMM0SVbzVTJ7+sHSq6kJbDgbbzIX2zP5ofzx3AsWXh9iUMN9aePzlvYVF+vtMysAe699jICG06O9CTOj8QPznk1NOMPl/d2yPMPfMmzD2qVrE8GvudlRHpJhVT8gga+QUVufxjSQ4eZRI5Gj36LX9CKM4fjxF4SuqX4M1jBpmBaYAnuP1+UcQQwbF8rAw7peU8QQhs2LneDlDl5X44UwbL69xxlo+yYZqiFSjD3yotlAWxrkkG0O7aJ6XRsXwBDpxcA7SHxmiAEMoWJhe1Q+w7b+DbHmAbs5zmentH9D7Kw7VA5VDdIQG2pht6wUgzTEljmxxtTnSuP+DbHIwi5S9dli698Qa+GxCw59Joj9G2LzAaxD9FnY790QzTGAJvo+u/m9G4LzAXcQa7gGozRCZheDNARnrdj8aZCG6PU9gg3BtZVcriFYh3IN0dUji+y2iTbUNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGwzDMRyptovZ3ZpBjLuhF1TZpLEfqe5uwa6LuQbOZNLMFC+Way+F7bXnzi+sVETosx/v9dBkhhBBCCCGEEEIIIYR0zm/4A4Y01dVmZQAAAABJRU5ErkJggg==" alt="github"/>
                @masouzajunior
              </a>
            </div>
          </List>

        </div>

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
          <ListItem>Problemas com binds de navegação nativa</ListItem>
          <ListItem>Aplicativos ocupam mais espaço</ListItem>
          <ListItem>Requer instalação</ListItem>
        </List>
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
    </Deck>
  );
}
