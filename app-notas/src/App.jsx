import React, { useEffect, useState } from "react"


const App = () => {
  /* useState para manipular el estado de get notas  */
  /* definir variable con null xq no sabemos si va a devolver un objeto o array */
  const [notas, setNotas] = useState(null)

  /* Aqui se ejecuta la funcion de getNotas de abajo */
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
        //console.log(data)
        setNotas(data)

      })
  }


  return (
    <>
      <p>
        HOLA
      </p>
      <ul>
        {
          !!notas &&
            notas.length > 0 ?
            notas.map((nota) => {
              return (
                <li>"{nota.description}" - <b>{nota.author}</b></li>
              )
            }) :
            (
              <li>Lista vacia</li>
            )
        }
      </ul>
    </>
  )
}

export default App
