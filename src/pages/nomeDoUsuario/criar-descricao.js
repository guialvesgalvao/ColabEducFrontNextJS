import { Container, Form } from "reactstrap";

export const getStaticProps = async () => {

    const res = await fetch('http://www.colabeduc.org/api/descricao');
    const data = await res.json();
    
  
    return {
        props: { dados: data }
    }
  }


export default function createDescription ({dados}) {
    console.log(dados)
    return(
        <Container>
            <Form>aa</Form>
        </Container>
    )
    
}