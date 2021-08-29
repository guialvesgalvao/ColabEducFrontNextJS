import  Header  from "../components/Header";
import  Footer  from "../components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/defaultPagesStyle.css';
import '../styles/personalPagesStyle.css';
import { AuthProvider } from '../contexts/AuthContext'



function MyApp({ Component, pageProps }) {
  return (

    <AuthProvider>
      <div className="bg-light">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default MyApp
