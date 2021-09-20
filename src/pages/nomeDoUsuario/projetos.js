import { Container,Alert,Button, Card,CardBody,CardText,CardTitle,Badge,CardHeader,CardFooter, Popover, PopoverHeader, PopoverBody,UncontrolledPopover,CardSubtitle } from "reactstrap";
import React, { useState } from 'react';
import { parseCookies } from "nookies";


export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  const token = cookies.cookieToken;
  const res = await fetch('http://colabeduc.org/api/projeto', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token }
  });
  const r= await res.json();
   console.log(r)
  const gameData = [{name: r.nome,id: r.id,link: r.linkJogo,description: "teste",criador: "testeDono",materia:{materianame: "MatériaTeste",color: "yellow"},ano: "anoTeste",habilidades:"habilidadesTeste"}]

  return {
    props: { name:"temporario"}//gameData:r// 
  }
}


export default function Projetos () {
    const cookies = parseCookies();
     const token = cookies.cookieToken;
     const gameData = [
      {name: "Chuva de Números",id: 1,description:"game 1",criador:"João",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "História",color: "yellow"},ano: "9º fundamental",habilidades: "1hfh história - tomar decisões baseadas na história do brasil"},
      {name: "League of Legends",id: 2,description:"game 2",criador:"Leandro",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Matemática",color:"blue"},ano: "3º fundamental",habilidades: "1hfh história - tomar decisões baseadas na história do brasil"},
      {name: "Call of Duty",id: 3,description:"game 3",criador:"Astolfo",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Português",color:"red"},ano: "4º fundamental",habilidades: "1hfh história - tomar decisões baseadas na história do brasil"},
      {name: "BattleField",id:4,description:"game 4",criador:"Rodolfo",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Geografia",color:"green"},ano: "7º fundamental",habilidades: "1hfh história - tomar decisões baseadas na história do brasil"},
      {name: "GTA 5",id: 5,description:"game 5",criador:"Kevin",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Ed. Fisíca",color:"grey"},ano: "1º fundamental",habilidades: "1hfh história - tomar decisões baseadas na história do brasil"}
  ];

    return (
      <div>

      <Container>
        <h1 className="mb-5 mt-3">Projetos</h1>
       
      </Container>

      <Container>      
        <div className="orgOfCards">{gameData.map((gameData) => (
          <Card className="descriptionCard" key={gameData.id}>
            <iframe width="100%" height="150" src="https://www.youtube.com/embed/qyhbejYrLjQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <CardBody>
          <CardTitle tag="h5" className="separeTwoItems">
              {gameData.name}
              <Button id={"popOver"+`${gameData.id}`} className="handleInfo">i</Button> 
              <UncontrolledPopover trigger="focus" placement="bottom" target={"popOver"+`${gameData.id}`}>
                <PopoverHeader>{gameData.ano}</PopoverHeader>
                <PopoverBody>{gameData.habilidades}</PopoverBody>
              </UncontrolledPopover>
          </CardTitle>
          {/*<CardSubtitle tag="h6" className="mb-2 text-muted">{gameData.materia.materianame}</CardSubtitle>*/}
          <span>Resumo</span>
          <CardText>{gameData.description}</CardText>
          <CardSubtitle>{gameData.link}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
          </Card>
        ))}</div>
      </Container>
      </div>

    )
  }