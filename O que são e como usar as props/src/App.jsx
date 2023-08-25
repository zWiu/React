import Footer from "./components/Footer";
import Item from "./components/Item";
import Header from "./components/Titulo";
import Style from "./App.module.css"
export default function App(){
  return(
    <>
    <Header/>
    <div className={Style.item}>
    <Item content="Item1"/>
    <Item content="Item2"/>
    <Item content="Item3"/>
    <Item content="Item4"/>
    <Item content="Item5"/>
    <Item content="Item6"/>
    </div>
    <Footer/>
    </>
  ) 
}