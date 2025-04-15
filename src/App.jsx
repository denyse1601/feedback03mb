import iconStar from "./assets/icon-star.svg"
import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvaliacao(nota){
    setNotaAvaliacao(nota)
  }

  return(
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} setSubmited={setSubmited} notaAvaliacao={notaAvaliacao}/>
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao} />
   )
  ) 
}