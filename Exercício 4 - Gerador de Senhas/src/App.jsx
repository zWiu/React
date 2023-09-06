import Style from "./App.module.css"
import {useState} from "react"
import Input from "./components/Input"

function App() {
  const [pass, setPass] = useState("Senha")
  const [copiarButton, setCopiarButton] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passSize = showInput ? customSize: 12 
  
  function passGenerator(ev){
    const characters = "123456789-=!@#$%¨&*()_qwertyuiop[asdfghjklç~]xcvbnm,.;/QWERTTYUIOP`{ASDFGHJKLÇ^}|ZXCVBNM<>:?"
    let newPassword = ""
  for( let i=0; i < passSize; i++){
    const position = Math.floor(Math.random() * characters.length)
    newPassword += characters[position]
  }
  setPass(newPassword)
  }
  function copiar(ev){
    setCopiarButton("Copiado!")
    navigator.clipboard.writeText(pass)
  }

  return (
    <div className={Style.body}>
      <div className={Style.titulo}>
        <h1>Gerador de senhas</h1>  
      </div>
     <div className={Style.tamanho}>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input type="checkbox" 
         id="showInput"
         value={showInput} 
         onChange={()=> setShowInput(currentState => !currentState)}
         />
      </div>
      { showInput && (
      <div className={Style.tamanho}>
        <label htmlFor="tamanhoPass">Tamanho:</label>
        <Input
          passSize={customSize}
          setPassSize={setCustomSize}
        />   
      </div> 
      )}
      <div className={Style.butao}>
        <button onClick={()=>passGenerator()}>Gerar uma senha de {passSize} caracteres</button>
        <button onClick={()=>copiar()}>{copiarButton}</button>
      </div>     
      <div className={Style.pass}>
        <p>{pass}</p>
      </div>
    </div>  
  )
}
 

export default App
