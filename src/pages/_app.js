import  Header  from "../components/Header";
import  Footer  from "../components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/untilStyles.css';



function MyApp({ Component, pageProps }) {
  return (

    

    <div className="bg-light">
      
      <Header />
      <Component {...pageProps} />
      <Footer />
      
      
      
    
    </div>
  )
}

export default MyApp
