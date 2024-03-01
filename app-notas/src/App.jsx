import React, { useEffect, useState } from "react"


const App = () => {
  /* definir variable con null xq no sabemos si va a devolver un objeto o array */
  const [notas, setNotas] = useState(null)

  /* Aqui se ejecuta la funcion de getNotas */
  useEffect(() => {
    getNotas()
  }, [])


  const getNotas = () => {
    fetch("http://localhost:4000/notas")
      /* cuando el ejecuta la peticion o promesa de fetch despues viene el .then que manipulara la promesa
      luego del .then viene una funcion que se ejecutara al momento de recibir la respuesta (response) del servidor.
      Como estamos trabajando en formato json las respuestas seran en json. Al prosesar la promesa esta pasa a otro .then
      en donde los datos de esta son manipulados */
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data) 
      })
  }


  return (
    <>
      <p>
        HOLA
      </p>
    </>
  )
}

export default App
