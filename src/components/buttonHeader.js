import { parseCookies,destroyCookie } from "nookies";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
  } from 'reactstrap';
import { useRouter } from 'next/router';
import Link from "next/dist/client/link";
import Image from 'next/image';
import loginImage from '../../public/login-image.png';
import undefinedProfilePic from '../../public/undefinedProfilePic.jpg';
import React,{useContext} from "react";
import { AuthContext } from '../contexts/AuthContext';



export default function ButtonHeader ( ) {
    const router = useRouter();
    const cookies = parseCookies();
    const {user,setUser} = useContext(AuthContext);


    function logOut () {
        destroyCookie(null, 'cookieName');
        destroyCookie(null, 'cookieToken');
        setUser(null);
        router.push('/');  
    }


    if(user != null){
      return(
        <div className="positionButtonImage">
          
          <Link href="/nomeDoUsuario/perfil">
            <a>
              <Image 
              src={loginImage}
              layout="intrinsic" 
              alt="Foto de perfil do Usuário" 
              width="32" height="32" className="border-radius-image"/>
            </a>
          </Link>
          <span className="arrumardps">aa</span>
          
            <Button className="navButton"  size="sm">
                <UncontrolledDropdown  nav inNavbar>
                  <DropdownToggle className="textNavButton" nav caret>
                    Hello, {user.nome}
                  </DropdownToggle>
                  <DropdownMenu className="textNavButton" right>
                    <DropdownItem >
                      Meus Projetos
                    </DropdownItem>
                    <DropdownItem href="/nomeDoUsuario/projetos">
                      Projetos
                    </DropdownItem>
                    <DropdownItem >
                      Minhas Descrições
                    </DropdownItem>
                    <DropdownItem href="/nomeDoUsuario/descricoes">
                      Descrições
                    </DropdownItem>
                    <DropdownItem href="/nomeDoUsuario/criar-descricao">
                      Criar Descrição
                    </DropdownItem>
                    <DropdownItem onClick={logOut}>
                      Sair
                    </DropdownItem>
          
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Button>
        </div>
      )
      
    }
    else{
         return (
            <Button className="navButton textNavButton"  size="md" href="/auth">Login            
    </Button>    
        )
    }

}