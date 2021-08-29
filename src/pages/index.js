import React from 'react';
import { Jumbotron, Container, Button, Col,UncontrolledCarousel } from 'reactstrap';
import { useRouter } from 'next/router';
import loginImage from '../../public/login-image.png';
import { parseCookies} from 'nookies';
import Image from 'next/image';


 
export const getStaticProps = async () => {

  const res = await fetch('http://www.colabeduc.org/public/numbers');
  const data = await res.json();
  

  return {
      props: { dados: data }
  }
}

export default function Home ({ dados }){

  const Carousel = () => <UncontrolledCarousel items={items} />;

  const items = [
    {
      src: 'https://wallpapercave.com/wp/wp6400060.jpg',
      altText: 'Primeiro Jogo: Math Star',
      caption: '👍 55 likes',
      header: 'Math Star',
      key: '1'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/181/559/747/aesthetic-neon-wallpaper-preview.jpg',
      altText: 'Segundo Jogo: Space Odyssey',
      caption: '👍 23 likes',
      header: 'Space Odyssey',
      key: '2'
    },
    {
      src: 'data:image/jpeg;base64,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',
      altText: 'Terceiro Jogo: Jogar e Aprender',
      caption: '👍 12 likes',
      header: 'Jogar e Aprender',
      key: '3'
    }
  ];

  
  const cookies = parseCookies();
  const router = useRouter();
  
  function startButtonDestination(){
    if(!cookies.cookieName){
      router.push('/auth')
    }else{
      router.push('/')
    }
  }

  return (
    <div className="bg-light">
      <Jumbotron fluid >
        <Container className="pt-2">
          <Container className="pt-5 pb-5 bg-neutral" fluid>
            <h1 className="display-5">BEM VINDOS AO COLABEDUC</h1>
            <p className="lead">O ColabEduc é um sistema de desenvolvimento colaborativo de objetos de aprendizagem, sejam eles virtuais ou reais. O ColabEduc cria um ambiente onde profissionais de diferentes áreas possam colaborar, construir e compartilhar seus objetos de aprendizagem.</p>
            <Button color="primary" onClick={startButtonDestination} size="md">Comece a criar</Button>            
          </Container>
        </Container>
      </Jumbotron>
      
      <div className="pb-4 divShowGames">
      <Container className="pb-5">
      <h1 className="titleShowGames">Conheça nossos jogos</h1>
      </Container>
        <Carousel autoPlay="false" />
      </div>


      <Container className="pb-5 ">
      <div className="row pb-4">
      <h1 className="display-6 ">Acompanhe nosso crescimento...</h1>
      </div>
      <div className="row">
        <Col style={{ maxWidth: '25rem'}}>
        <div className="card counter ">
                  <div className="card-body text-center pb-5 pt-5">
                      <h2 className="card-title timer count-title count-number"> {dados.usuarios}</h2>
                      <p className="card-text">DESENVOLVEDORES DE GAMES</p>
                  </div>
                </div>
          </Col>
          <Col style={{ maxWidth: '25rem'}}>
          <div className="card counter">
                  <div className="card-body text-center pb-5 pt-5">
                      <h2 className="card-title timer count-title count-number">{dados.descricoes}</h2>
                      <p className="card-text">DESCRIÇÕES DE GAMES</p>
                  </div>
                </div>
          </Col>
        
      
        <Col style={{ maxWidth: '25rem'}}>
        <div className="card counter">
                  <div className="card-body text-center pb-5 pt-5">
                      <h2 className="card-title timer count-title count-number">{dados.projetos}</h2>
                      <p className="card-text">PROJETOS DE GAMES</p>
                  </div>
                </div>
          </Col>
          <Col style={{ maxWidth: '25rem'}}>
          <div className="card counter">
                  <div className="card-body text-center pb-5 pt-5">
                      <h2 className="card-title timer count-title count-number">{dados.habilidades}</h2>
                      <p className="card-text">HABILIDADES BNCC</p>
                  </div>
                </div>
          </Col>
      </div>
      
      </Container>

      

  </div> 
  );
};


