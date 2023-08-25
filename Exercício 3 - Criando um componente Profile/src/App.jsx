import Photo from "./components/Photo"
import ImageMimikyu from "./assets/mimikyu.png"
import Style from "./App.module.css"
import Name from "./components/Name"
import Description from "./components/Description"
import Button from "./components/Button"
function App(){
  return(
    <div className={Style.profile}>
      <Photo imageSrc={ImageMimikyu}/>
      <Name name="Mimikyu"/>
      <Description description="Fantasma / Fada"/>
      <Description description="Ilha Ula'Ula"/>
      <Description description="Thrifty Megamart"/>
      <Button button="Pokedex"/>
      <Button button="Buldapedia"/>
      <Button button="Nitendo"/>
    </div>

  )
}

export default App