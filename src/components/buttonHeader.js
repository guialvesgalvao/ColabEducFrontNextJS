import { parseCookies,destroyCookie } from "nookies";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
  } from 'reactstrap';
import { useRouter } from 'next/router'

export default function ButtonHeader () {
    const router = useRouter();
    const cookies = parseCookies();


    function logOut () {
        destroyCookie(null, 'cookieName');
        router.push('/')
        
    }

    if(!cookies.cookieName){
        return (
            <Button className="navButton textNavButton"  size="md" href="/auth">Login            
    </Button>
        )
    }
    else{
        return(
            <Button className="navButton"  size="sm">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="textNavButton" nav caret>
                    Hello, {cookies.cookieName}
                  </DropdownToggle>
                  <DropdownMenu className="textNavButton" right>
                    <DropdownItem >
                      Meus Projetos
                    </DropdownItem>
                    <DropdownItem>
                      Projetos
                    </DropdownItem>
                    <DropdownItem>
                      Minhas Descrições
                    </DropdownItem>
                    <DropdownItem>
                      Listar Descrições
                    </DropdownItem>
                    <DropdownItem>
                      Criar Descrição
                    </DropdownItem> 
                    <DropdownItem onClick={logOut}>
                      Sair
                    </DropdownItem>               
                    
                  </DropdownMenu>
                </UncontrolledDropdown>
    </Button>
        )
    }

}