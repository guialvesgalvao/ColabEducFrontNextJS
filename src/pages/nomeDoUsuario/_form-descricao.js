import { Alert,Button,DropdownMenu,DropdownItem,ButtonDropdown,DropdownToggle} from "reactstrap"
import React, { useState } from 'react';

export default function FormCreateDescricao () {
    const [matematica, setMatematica] = useState(false)
    const openMatematica = () => {setMatematica(true);
    setPortugues(false);setHistoria(false);setCiencia(false);setGeografia(false);setEdfisica(false);}

    const [portugues, setPortugues] = useState(false)
    const openPortugues = () => {setPortugues(true);setMatematica(false);setHistoria(false);setGeografia(false);setCiencia(false);setEdfisica(false);}

    const [historia, setHistoria] = useState(false)
    const openHistoria = () => {setHistoria(true);setGeografia(false);setPortugues(false);setMatematica(false);setCiencia(false);setEdfisica(false);}

    const [geografia, setGeografia] = useState(false)
    const openGeografia = () => {setGeografia(true);setPortugues(false);setMatematica(false);setHistoria(false);setCiencia(false);setEdfisica(false);}

    const [ciencia, setCiencia] = useState(false)
    const openCiencia = () => {setCiencia(true);setPortugues(false);setMatematica(false);setHistoria(false);setGeografia(false);setEdfisica(false);}

    const [edfisica, setEdfisica] = useState(false)
    const openEdfisica = () => {setEdfisica(true);setCiencia(false);setPortugues(false);setMatematica(false);setHistoria(false);setGeografia(false);}



    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);


  
    return (
      <div>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Escolha a matéria
      </DropdownToggle>
      <DropdownMenu>
        
        <Button onClick={openMatematica}>Matematica</Button>
        <Button onClick={openPortugues}>Portugues</Button>
        <Button onClick={openGeografia}>Geografia</Button>
        <Button onClick={openHistoria}>História</Button>
        <Button onClick={openCiencia}>Ciências</Button>
        <Button onClick={openEdfisica}>Educação Física</Button>

      </DropdownMenu>
    </ButtonDropdown>



        <Alert isOpen={matematica}>1 ano fundamental
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
        </Alert>

        <Alert isOpen={ciencia}>1 ano fundamental
          <Alert>Matemática
            <Alert>
            (EF01MA01) Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação
            </Alert>
            <Alert>
            (EF01MA02) Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos 
            </Alert>
            <Alert>
            (EF01MA03) Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”
            </Alert>
            <Alert>
            (EF01MA04) Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros 
            </Alert>
          </Alert>
          <Alert>Português
            <Alert>
            (EF01LP01) Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo da página 
            </Alert>
            <Alert>
            (EF01LP02) Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas 
            </Alert>
            <Alert>
            (EF01LP03) Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças 
            </Alert>
            <Alert>
            (EF01LP04) Distinguir as letras do alfabeto de outros sinais gráficos 
            </Alert>
          </Alert>
          <Alert>Ciências
            <Alert>
            (EF01CI01) Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente 
            </Alert>
            <Alert>
            (EF01CI02) Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções 
            </Alert>
            <Alert>
            (EF01CI03) Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde              
            </Alert>
            <Alert>
            (EF01CI04) Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças 
            </Alert>
          </Alert>
          <Alert>História
            <Alert>
            (EF01HI01) Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade
            </Alert>
            <Alert>
            (EF01HI02) Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade
            </Alert>
            <Alert>
            (EF01HI03) Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade
            </Alert>
            <Alert>
            (EF01HI04) Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem 
            </Alert>
          </Alert>
        </Alert>
        <Alert isOpen={portugues}>1 ano fundamental
          <Alert>Matemática
            <Alert>
            (EF01MA01) Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação
            </Alert>
            <Alert>
            (EF01MA02) Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos 
            </Alert>
            <Alert>
            (EF01MA03) Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”
            </Alert>
            <Alert>
            (EF01MA04) Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros 
            </Alert>
          </Alert>
          <Alert>Português
            <Alert>
            (EF01LP01) Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo da página 
            </Alert>
            <Alert>
            (EF01LP02) Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas 
            </Alert>
            <Alert>
            (EF01LP03) Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças 
            </Alert>
            <Alert>
            (EF01LP04) Distinguir as letras do alfabeto de outros sinais gráficos 
            </Alert>
          </Alert>
          <Alert>Ciências
            <Alert>
            (EF01CI01) Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente 
            </Alert>
            <Alert>
            (EF01CI02) Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções 
            </Alert>
            <Alert>
            (EF01CI03) Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde              
            </Alert>
            <Alert>
            (EF01CI04) Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças 
            </Alert>
          </Alert>
          <Alert>História
            <Alert>
            (EF01HI01) Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade
            </Alert>
            <Alert>
            (EF01HI02) Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade
            </Alert>
            <Alert>
            (EF01HI03) Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade
            </Alert>
            <Alert>
            (EF01HI04) Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem 
            </Alert>
          </Alert>
        </Alert>
        <Alert isOpen={historia}>1 ano fundamental
          <Alert>Matemática
            <Alert>
            (EF01MA01) Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação
            </Alert>
            <Alert>
            (EF01MA02) Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos 
            </Alert>
            <Alert>
            (EF01MA03) Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”
            </Alert>
            <Alert>
            (EF01MA04) Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros 
            </Alert>
          </Alert>
          <Alert>Português
            <Alert>
            (EF01LP01) Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo da página 
            </Alert>
            <Alert>
            (EF01LP02) Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas 
            </Alert>
            <Alert>
            (EF01LP03) Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças 
            </Alert>
            <Alert>
            (EF01LP04) Distinguir as letras do alfabeto de outros sinais gráficos 
            </Alert>
          </Alert>
          <Alert>Ciências
            <Alert>
            (EF01CI01) Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente 
            </Alert>
            <Alert>
            (EF01CI02) Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções 
            </Alert>
            <Alert>
            (EF01CI03) Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde              
            </Alert>
            <Alert>
            (EF01CI04) Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças 
            </Alert>
          </Alert>
          <Alert>História
            <Alert>
            (EF01HI01) Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade
            </Alert>
            <Alert>
            (EF01HI02) Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade
            </Alert>
            <Alert>
            (EF01HI03) Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade
            </Alert>
            <Alert>
            (EF01HI04) Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem 
            </Alert>
          </Alert>
        </Alert>
        <Alert isOpen={edfisica}>1 ano fundamental
          <Alert>Matemática
            <Alert>
            (EF01MA01) Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação
            </Alert>
            <Alert>
            (EF01MA02) Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos 
            </Alert>
            <Alert>
            (EF01MA03) Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”
            </Alert>
            <Alert>
            (EF01MA04) Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros 
            </Alert>
          </Alert>
          <Alert>Português
            <Alert>
            (EF01LP01) Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo da página 
            </Alert>
            <Alert>
            (EF01LP02) Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas 
            </Alert>
            <Alert>
            (EF01LP03) Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças 
            </Alert>
            <Alert>
            (EF01LP04) Distinguir as letras do alfabeto de outros sinais gráficos 
            </Alert>
          </Alert>
          <Alert>Ciências
            <Alert>
            (EF01CI01) Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente 
            </Alert>
            <Alert>
            (EF01CI02) Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções 
            </Alert>
            <Alert>
            (EF01CI03) Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde              
            </Alert>
            <Alert>
            (EF01CI04) Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças 
            </Alert>
          </Alert>
          <Alert>História
            <Alert>
            (EF01HI01) Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade
            </Alert>
            <Alert>
            (EF01HI02) Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade
            </Alert>
            <Alert>
            (EF01HI03) Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade
            </Alert>
            <Alert>
            (EF01HI04) Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem 
            </Alert>
          </Alert>
        </Alert>
        <Alert isOpen={geografia}>1 ano fundamental
          <Alert>Matemática
            <Alert>
            (EF01MA01) Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação
            </Alert>
            <Alert>
            (EF01MA02) Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos 
            </Alert>
            <Alert>
            (EF01MA03) Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”
            </Alert>
            <Alert>
            (EF01MA04) Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros 
            </Alert>
          </Alert>
          <Alert>Português
            <Alert>
            (EF01LP01) Reconhecer que textos são lidos e escritos da esquerda para a direita e de cima para baixo da página 
            </Alert>
            <Alert>
            (EF01LP02) Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas 
            </Alert>
            <Alert>
            (EF01LP03) Observar escritas convencionais, comparando-as às suas produções escritas, percebendo semelhanças e diferenças 
            </Alert>
            <Alert>
            (EF01LP04) Distinguir as letras do alfabeto de outros sinais gráficos 
            </Alert>
          </Alert>
          <Alert>Ciências
            <Alert>
            (EF01CI01) Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente 
            </Alert>
            <Alert>
            (EF01CI02) Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções 
            </Alert>
            <Alert>
            (EF01CI03) Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde              
            </Alert>
            <Alert>
            (EF01CI04) Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças 
            </Alert>
          </Alert>
          <Alert>História
            <Alert>
            (EF01HI01) Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade
            </Alert>
            <Alert>
            (EF01HI02) Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade
            </Alert>
            <Alert>
            (EF01HI03) Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade
            </Alert>
            <Alert>
            (EF01HI04) Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem 
            </Alert>
          </Alert>
        </Alert>
      </div>
    )
}