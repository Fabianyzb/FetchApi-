import React, { useEffect, useState } from "react"


const App = () => {
  /* useState para manipular el estado de get notas  */
  /* definir variable con null xq no sabemos si va a devolver un objeto o array */
  const [notas, setNotas] = useState(null)

  const [nota, setNota] = useState({
    description: "Hacer pagina para catering y servicios de cocina",
    author: "Fabian",
    active: true,
    completed: false
  })

  /* Aqui se ejecuta la funcion de getNotas de abajo */
  useEffect(() => {
    getNotas()
  }, [])

  /* METODO GET */
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
      .catch((error) => {
        console.log(error)
      })
  }

  /* METODO POST */
  const addNota = (nota) => {
    fetch("http://localhost:4000/notas", {
      method: 'POST',
      body: JSON.stringify(nota),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /* Simular el addNotes en un formulario. La funcion handleSubmit recibe un evento */
  const handleSubmit = (e) => {
    e.preventDefault()

    addNota(nota) //nota viene del useState de la linea 9
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>
          Anadir nota
        </button>
      </form>

      <ul>
        {notas && notas.length > 0 ? (
          notas.map((nota) => {
            return (
              <li key={nota.id}>"{nota.description}" - <b>{nota.author}</b></li>
            );
          })
        ) : (
          <li>Lista vacía</li>
        )}
      </ul>

    </>
  )
}

export default App
