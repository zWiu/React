import image from "./assets/mimikyu.png"
import Profile from "./components/Profile"

function App(){
  return(
    <>
      <Profile 
        image={image} description1="Fantasma/Fada" 
        description2="Ilha Ula's Ula's" description3="Alola"
        name="Mimikyu" button1="Pokemon company" button2="Pokedex" button3="Saiba Mais"
      />

    </>

  )
}

export default App