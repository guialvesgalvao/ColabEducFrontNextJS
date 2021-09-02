import Link from "next/link";
import { useState } from "react";

export default function MeusProjetos () {
    const [projetos, setProjetos] = useState(null); 

    function Projetos () {
        if(projetos){
            return (<><h1>teste</h1></>)
        }else{
            return(
                <div className="emptyProjects">
               <h1 className="h5 textEmptyProjectsOne">Você não desenvolveu um projeto ainda :(</h1>
               <a className="textEmptyProjectsOne"><Link href="/criar-descricao">crie um agora!</Link></a>
               </div>
            )
        }
    }

    return (
        <>
        {Projetos()}
        </>
    )
}