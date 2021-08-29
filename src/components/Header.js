import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import React from 'react';
import ButtonHeader from './buttonHeader';


export default function Header()  {

    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid list-unstyled">
        
      <Link href="/" >
      <a>
        <Image src={logo} alt="ColabEduc" />
      </a>
      </Link>
      
      
      {ButtonHeader()}
      </div>
    </nav>
    <hr style={{color: 'black',margin: '-4px' }}/>
    </>
    );
    
  }
  

 

