import Description from "./components/Description";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import Styles from "./App.module.css";
export default function App(){
  return(
    <div className={Styles.app}>
      <Titulo />
      <Subtitulo />
      <Description />
    </div>
  )
}