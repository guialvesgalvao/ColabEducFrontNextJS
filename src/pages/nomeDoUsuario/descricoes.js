import { parseCookies } from "nookies";
import { Container,Alert } from "reactstrap";

export const getStaticProps = async () => {
   const cookies = parseCookies();
   const token = cookies.cookieToken;  

    const res = await fetch('http://colabeduc.org/api/descricao', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Token': [token] }
      });
    const rJson = res.json();
    const la = {
         ta: rJson
    }

    
  
    return {
      props: { descricao: "a" }
    }
  }

  export default function descricoes ({ descricao }) {
    const cookies = parseCookies();
     const token = cookies.cookieToken;
     console.log(token);
    
    console.log(res)
    
    return (
      <div><h1>Olá</h1></div>
    )
  }
  /*export default function minhasDescrições ({ existDescription }) {
     //
     if(!existDescription[0]){
        return (<div className="h-100vh"><Container><Alert color="danger">
        <h2 className="alert-heading">Você não tem nenhuma descrição!</h2>
        <p>
          Uma descrição boa é essencial para a criação do seu game educativo, durante a criação não esqueça de ser direto e enfático na descrição do seu jogo, é fundamental para chamar a atenção dos players.
        </p>
        <hr />
        <p className="mb-0">
        Não perca tempo, e <a href="#" className="alert-link">crie uma descrição</a>. 
        </p>
      </Alert></Container></div>)
     }else {
        return(<div><h1>Listar descrições pessoais</h1>{console.log(parseCookies)}</div>)
     }
    

   function findDescricoes () {
        fetch('http://www.colabeduc.org/public/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
          }).then(r => r.json())
            .then(json => {
                const meuNome = json.find( data => data.username == nomeDoUsuario);
                const descricoes = meuNome.descricoes;
                const teste = descricoes[0];
                if(!teste){
                    console.log("funcionou")
                }else{
                console.log("eita funcionou")
                }
                return teste;
            })
            
    }

}*/