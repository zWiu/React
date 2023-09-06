import Image from "./components/Image"
import Title from "./components/Title"

import urlImage from "./assets/react.svg"
import Style from "./App.module.css"
import Button from "./components/Button"
import SubTitle from "./components/SubTitles"
import Paragraph from "./components/Paragraph"
import List from "./components/List"

export default function App(){
return(
<div className={Style.body}>
  <div className={Style.container}>
    <div className={Style.title}>
    <Image
      urlImage={urlImage}
    />
    <Title
      title="React"
    />
    </div>
    <Paragraph
      contentText="A biblioteca para interfaces de usuário web e nativas"
    />
    <div className={Style.buttons}>
      <Button
        contentButton="Aprenda React"
      />
      <Button
        contentButton="Referência da API"
      />
    </div>
    <SubTitle
      contentText="Crie interfaces de usuário de componentes:"
    />
    <Paragraph
      contentText="React permite que você construa interfaces de usuário
      a partir de pedaços individuais chamados compoentes."
    />
    <SubTitle
      contentText="Escreva componentes com código e marcação:"
    />
    <Paragraph
      contentText="Componentes React são funções JavaScript. A sintaxe de
      marcação é chamada de JSX. É uma extensão de sintaxe JavaScript
      popularizado pelo React"
    />
    <SubTitle
      contentText="Próximos passos:"
    />
    <List/>
  </div>
 </div>
)
}