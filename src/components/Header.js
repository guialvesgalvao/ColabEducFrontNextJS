import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import ButtonHeader from './buttonHeader';
import React,{useContext} from "react";
import { AuthContext } from '../contexts/AuthContext';


export default function Header()  {
  /*const {user} = useContext(AuthContext);
  console.log(user);*/

  function teste (){
        return (logo)
  }


    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid list-unstyled">
        
      <Link href="/" >
      <a>
        <Image src={teste()} alt="ColabEduc" />
      </a>
      </Link>
      
      
      {ButtonHeader()}
      </div>
    </nav>
    <hr style={{color: 'black',margin: '-4px' }}/>
    </>
    );
    
  }
  

 

