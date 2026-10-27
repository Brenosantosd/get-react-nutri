import React , {useState , useEffect} from "react"
import "./App.css"

////https://sujeitoprogramador.com/rn-api/?api=posts

function App(){

const [nutri , SetNutri] = useState([])

useEffect(()=> {
 
  function loadApi(){
    
   let url = 'https://sujeitoprogramador.com/rn-api/?api=posts' 

   fetch(url)
   .then((r)=> r.json())
   .then((json)=> {
    
     console.log(json)
     SetNutri(json)

   })
  }

  loadApi();

}, [])

  return(
   <div className = "container">
    <header>
        <strong>React Nutri</strong>
    </header>

    <nav className = "navegacao">
      <a className = "nav">Home</a>
      <a className = "nav">Fale conosco</a>
      <a className = "nav"> Saiba mais</a>
      
    </nav>

    {nutri.map((item)=>{

  return(

    
     <article key = {item.id} className = "post">

      <h1>{item.categoria}</h1>
      <h2 className = "titulo">{item.titulo}</h2>
       

      <img src = {item.capa} alt = "imagem" className="capa"/>

      <p className = "subtitulo">{item.subtitulo}</p>

      <a className = "link">Saiba Mais</a>

    

     </article>

     
  ) 
    })}


  </div>


  )
}

export default App