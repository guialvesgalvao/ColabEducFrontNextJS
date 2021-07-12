import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import React, { useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';


export default function Header(props)  {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);    
    
   

    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid list-unstyled">
      
    <Link passHref href="/" >
    <Image src={logo} alt="ColabEduc" />
    </Link>
    
    
    <Button className="navButton"  size="sm">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="textNavButton" nav caret>
                    Hello, Usuário
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
                    
                    <DropdownItem href="/auth">
                      
                      Login
                    
                    </DropdownItem>
                    
                  </DropdownMenu>
                </UncontrolledDropdown>
    </Button>
  </div>
</nav>
    </>
    );
    
  }
  

 

