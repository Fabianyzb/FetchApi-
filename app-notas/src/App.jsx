
const App = () => {


  const getNotas = () => {
    fetch("http://localhost:4000/notas")
      /* cuando el ejecuta la peticion o promesa de fetch despues viene el .then que manipulara la promesa
      luego del .then viene una funcion que se ejecutara al momento de recibir la respuesta (response) del servidor.
      Como estamos trabajando en formato json las respuestas seran en json  */
      .then((response) => {
        return response.json()
      })
      .then((data) => { })
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
