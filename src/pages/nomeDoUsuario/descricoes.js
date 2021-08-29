import { Container,Alert,Button, Card,CardBody,CardText,CardTitle,Badge,CardHeader,CardFooter } from "reactstrap";
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
      {name: "Chuva de Números",id: 1,description:"game 1",criador:"João",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "História",color: "yellow"},ano: "9º fundamental"},
      {name: "League of Legends",id: 2,description:"game 2",criador:"Leandro",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Matemática",color:"blue"},ano: "3º fundamental"},
      {name: "Call of Duty",id: 3,description:"game 3",criador:"Astolfo",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Português",color:"red"},ano: "4º fundamental"},
      {name: "BattleField",id:4,description:"game 4",criador:"Rodolfo",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Geografia",color:"green"},ano: "7º fundamental"},
      {name: "GTA 5",id: 5,description:"game 5",criador:"Kevin",link:"https://www.instagram.com/guialvesgalvao/",materia:{materianame: "Ed. Fisíca",color:"grey"},ano: "1º fundamental"}
  ];
console.log (gameData);

    return (
      <div>

      <Container>
        <h1 className="mb-5">Descrições</h1>
      </Container>

      <Container>
        <div className="orgOfCards">{gameData.map((gameData) => (
          <Card className="descriptionCard" key={gameData.id}>
            <CardHeader className="separeTwoItems">
                <CardTitle className="separeTwoItemsExtra">{gameData.name} </CardTitle>
                <Badge  style={{boxSizing: 'content-box',color: 'white',backgroundColor: `${gameData.materia.color}` }}>{gameData.materia.materianame} {gameData.ano}</Badge>
             
            </CardHeader>
            <CardBody>
              <span>Resumo</span>
              <CardText>{gameData.description}</CardText>
            </CardBody>
            <CardFooter className="separeTwoItems"><Button size="sm" >Usar Descrição</Button>
            <span>Criador: {gameData.criador}</span>
            </CardFooter>
          </Card>
        ))}</div>
      </Container>
      </div>

    )
  }