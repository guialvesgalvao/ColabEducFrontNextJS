import { Container,Alert,Button, Card,CardBody,CardText,CardTitle,Badge,CardHeader,CardFooter, Popover, PopoverHeader, PopoverBody,UncontrolledPopover } from "reactstrap";
import React, { useState } from 'react';
import { parseCookies } from "nookies";



{/*export async function getStaticProps() {
  const cookies = parseCookies();
  const token = cookies.cookieToken;
  let epa;
      const res = fetch('http://colabeduc.org/api/projeto', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token }
      }).then((response) => response.json()) //2
      .then((user) => {
        console.log(user[1]);
      });


           async function testar (){
      const res = await fetch('http://colabeduc.org/api/projeto', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token }
      }).then((response) => response.json()) //2
      .then((user) => {
        console.log(user); //3
      });
  //https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
    }

    return {
      props: { name:"abobora" }
    }
  }*/}

  export default function Descricoes () {
    const cookies = parseCookies();
     const token = cookies.cookieToken;
     const gameData = [
      {name: "Chuva de Números",id: 1,description:"TRAVESSIA é um jogo educacional que tem por objetivos abordar assuntos de ciências do 8º ano do ensino fundamental, discutindo especificamente aspectos de gênero cromossômico e sistemas reprodutores feminino e masculino, trazendo também aspectos transdisciplinares sobre Educação em Sexualidade. O personagem principal “Min” é caracterizado como um ser andrógino e é quem vai direcionar o jogo para abordar os aspectos ditos anteriormente. O Min conta com a ajuda do “Super Biscoito” para conseguir atingir os objetivos do jogo e combater o “Senhor Preconceito”, que é o vilão do jogo.",criador:"João",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "História",color: "yellow"},ano: "9º fundamental",habilidades: "1hfh história - tomar decisões baseadas na história do brasil"},
      {name: "League of Legends",id: 2,description:"O Bingo Educativo é uma forma do usuário/jogador aprender de uma forma lúdica e divertida vários temas relacionados a Informática Educativa, fazendo com que o aprendizado se torne prático e prazeroso entre os jogadores, habilitando estes a terem mais sociabilidade, conhecimentos, autonomia e divertimento.",criador:"Leandro",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Matemática",color:"blue"},ano: "3º fundamental",habilidades: "1hfh Matemática - tomar decisões baseadas na história do brasil"},
      {name: "Call of Duty",id: 3,description:"game 3",criador:"Astolfo",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Português",color:"red"},ano: "4º fundamental",habilidades: "1hfh Português - tomar decisões baseadas na história do brasil"},
      {name: "BattleField",id:4,description:"O jogo Corrida do Munícipio de Natal/RN intenciona oportunizar aos alunos do 4º ano do Ensino Fundamental apropriar-se de conhecimentos referentes à história do município de Natal/RN, estabelecendo assim relações entre fatos acontecimentos do passado e sua relação com o presente e entender o que permaneceu e o que mudou no contexto histórico cultural de sua cidade. Objetiva-se despertar a conscientização sobre a história da cidade em que vive e a importância de seu papel enquanto cidadão para a preservação dessa história.",criador:"Rodolfo",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Geografia",color:"green"},ano: "7º fundamental",habilidades: "1hfh Geografia - tomar decisões baseadas na história do brasil"},
      {name: "GTA 5",id: 5,description:"game 5",criador:"Kevin",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Ed. Fisíca",color:"purple"},ano: "1º fundamental",habilidades: "1hfh Ed. Fisíca - tomar decisões baseadas na história do brasil"}
  ];

  async function testar (){
    const res = await fetch('http://colabeduc.org/api/projeto', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token }
    }).then((response) => response.json()) //2
    .then((user) => {
      console.log(user); //3
    });
  }
    
console.log (gameData);

    return (
      <div>

      <Container>
        <h1 className="mb-5 mt-3">Descrições</h1>
        <Button onClick={testar}>ee</Button>
       
      </Container>

      <Container>      
        <div className="orgOfCards">{gameData.map((gameData) => (
          <Card className="descriptionCard" key={gameData.id}>
            <CardHeader className="separeTwoItems">
                <CardTitle tag="h5" className="separeTwoItemsExtra">{gameData.name} </CardTitle>
                <Button id={"popOver"+`${gameData.id}`} size="sm" className="subjectButton" style={{color: 'white',backgroundColor: `${gameData.materia.color}` }}>{gameData.materia.materianame}</Button>
                <UncontrolledPopover trigger="focus" placement="bottom" target={"popOver"+`${gameData.id}`}>
                <PopoverHeader>{gameData.ano}</PopoverHeader>
                <PopoverBody>{gameData.habilidades}</PopoverBody>
                </UncontrolledPopover>
             
            </CardHeader>
            <CardBody>
              <span>Resumo</span>
              <CardText>{gameData.description}</CardText>
            </CardBody>
            <CardFooter className="separeTwoItems">
              <Button size="sm" >Usar Descrição</Button>
              <span>Criador: {gameData.criador}</span>
            </CardFooter>
          </Card>
        ))}</div>
      </Container>
      </div>

    )
  }