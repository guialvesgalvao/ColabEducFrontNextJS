import Document, { Html, Head , Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                 {/* link para importar fontes e lembrar de colocar "/" no final da tag*/} 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    
                </body>
            </Html>
        );
    }
}