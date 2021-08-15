import React from 'react';
import { Jumbotron, Container, Button, Col,UncontrolledCarousel } from 'reactstrap';
import { useRouter } from 'next/router';
import { parseCookies} from 'nookies';


 
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
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Primeiro Jogo: Math Star',
      caption: '👍 55 likes',
      header: 'Math Star',
      key: '1'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Segundo Jogo: Space Odyssey',
      caption: '👍 23 likes',
      header: 'Space Odyssey',
      key: '2'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      <Carousel/>
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


