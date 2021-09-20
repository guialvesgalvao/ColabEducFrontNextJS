import React,{useContext} from 'react';
import { Jumbotron, Container, Button, Col, Card,CardBody,CardTitle} from 'reactstrap';
import { useRouter } from 'next/router';
import game1 from '../../public/mathstar.png';
import game2 from '../../public/space.png';
import game3 from '../../public/memory.png';
import { parseCookies} from 'nookies';
import Image from 'next/image';
import Link from 'next/link';
import { AuthContext } from '../contexts/AuthContext';



 
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

  const {user, isAuthenticated} = useContext(AuthContext);
  
  function startButtonDestination(){
    if(!cookies.cookieName){
      router.push('/auth')
    }else{
      router.push('/')
    }
  }

  /*function startButtonDestination1(){
    if(user){
      console.log(user)
    }    
    if(!user){
      console.log(user)
    }
  }*/

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
      
      <div className="divShowGames">
      <Container className="pb-3">
      <h1 className="titleShowGames mb-4">Conheça nossos jogos</h1>
      <div className="organizeGames">

          <Card className="cardGame">
            <Image src={game1} width="400" height="300" layout="responsive" alt="Math-Star logo"/>
            <CardBody>
              <CardTitle tag="h5">Math Star</CardTitle>
            </CardBody>
          </Card>
      <Card className="cardGame">
      <Image src={game2} width="400" height="300" layout="responsive" alt="Math-Star logo"/>
        <CardBody>
          <CardTitle tag="h5">Space Odyssey</CardTitle>
        </CardBody>
      </Card>
      <Card className="cardGame">
      <Image src={game3} width="400" height="300" layout="responsive" alt="Math-Star logo"/>
        <CardBody>
          <CardTitle tag="h5">Memory Square</CardTitle>
        </CardBody>
      </Card>
      </div>
      <Link href="/">
      <a>
      <h5 className="mt-4 seeAll">+ ver todos</h5>
      </a>
      </Link>
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


