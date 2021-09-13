import Image from 'next/image';
import Link from 'next/link';
import natalnetLogo from '/public/logo-natalnet2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';





export default function Footer () {
 return (
     <div className="footerStyle pt-2">
         <div>
             <a href="https://www.instagram.com/colabeduc/"><FontAwesomeIcon size="2x" className="footerIcon" icon={faInstagram} />  </a>
             
         </div>
         <div className="footerText">
             
             <span>Copyright © Colabeduc 2020</span></div>
         <div className="footerImage">
             <Link href='http://www.natalnet.br/home/'>
                 <a href="">
                     <Image src={natalnetLogo} alt="Natalnet Labs" />
                 </a>
             </Link>
         </div>
         
     </div>
 );
}