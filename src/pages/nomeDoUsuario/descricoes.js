import { parseCookies } from "nookies";
import { Container } from "reactstrap";

export default function minhasDescrições () {
    const cookies = parseCookies();
    const nomeDoUsuario = cookies.cookieName;

    console.log(nomeDoUsuario)

    async function findDescricoes () {
        fetch('http://www.colabeduc.org/public/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
          }).then(r => r.json())
            .then(json => {
                const meuNome = json.find( data => data.username == nomeDoUsuario);console.log(meuNome.descricoes)
                 
            })
            //.catch(ex => console.error('Problemas ao logar', ex));
    }

    return (
        <div>
            <Container><button onClick={findDescricoes}>clique me </button></Container>
            
        </div>
    )
}