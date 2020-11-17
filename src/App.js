import "./css/stes.css"
import Helmet from 'react-helmet'
import {motion} from 'framer-motion'
import "./imagens/logo192.png"

const Teste = {
  animate: {rotate: 360} ,
  transition: {
    duration: 10,
    yoyo: Infinity
  }

}

function App() {
  return (
    <div>
          <Helmet>
            <title>Projeto React</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,900&display=swap" rel="stylesheet"></link>
          </Helmet>
          
        <div className="containerInteiro">
        <motion.div className="text-center"
          initial={{ scale: 0}}
          animate={{scale: [0, 1.5, 1] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}>

          <h1 className="h1Topo">Bem vindo ao React!</h1>
          <p className="pTopo">veja mais sobre o react abaixo</p>

          </motion.div>
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
          <path fill="#0099ff" fill-opacity="1" d="M0,32L48,26.7C96,21,192,11,288,48C384,85,480,171,576,186.7C672,203,768,149,864,160C960,171,1056,245,1152,234.7C1248,224,1344,128,1392,80L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <div className="container">

        <h1 className="introducaoh1 text-center"> Pagina feita com React </h1>
        <p className="introducaop"> Buscando facilitar para que diversos desenvolvedores consigam atingir o máximo de eficiência possível no desenvolvimento de sistemas e aplicativos, algumas tecnologias nascem dentro de grandes empresas para solucionar algumas dores específicas.
        </p>

        <p className="introducaop">Assim surgiu o React, que é uma biblioteca JavaScript, utilizado para elaborar todo o Front-End das aplicações, e que contribui para definir soluções de problemas, com eficiência e flexibilidade para a criação de interfaces de usuário (UI).
        </p>
        </div>
        
  
    <footer className=" flex">
      <div className="container flex text-center">
        <motion.div className="teste"
        animate={{rotate:360}}
        transition={{yoyo: Infinity,
          type: "linear",
          duration:15,
      }}
        >

        </motion.div>
        </div>
    </footer>
    </div>


  );
}

export default App;
