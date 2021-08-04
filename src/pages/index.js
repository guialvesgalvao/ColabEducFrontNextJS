import React from 'react';
import { Jumbotron, Container, Button, Col } from 'reactstrap';
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


