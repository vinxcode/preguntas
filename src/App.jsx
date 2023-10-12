function App() {

  const preguntasBiblia = [
    {
      pregunta: "¿Cuál es el primer libro del Antiguo Testamento de la Biblia?",
      opciones: ["Génesis", "Salmos", "Lucas"],
      respuestaCorrecta: 0,
    },
    {
      pregunta: "¿Quién fue el arca de la alianza mencionada en la Biblia?",
      opciones: ["Noé", "Moisés", "David"],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "¿Quién escribió la mayoría de los Salmos en la Biblia?",
      opciones: ["Abraham", "Moisés", "David"],
      respuestaCorrecta: 2,
    },
  ];

  return (
    <>
    <h1 className='text-center text-2xl font-bold mt-10'>Bienvenidos a la preguntas</h1>
    {
      preguntasBiblia.map((preg, index) => (
        <div key={index} className='container bg-gray-100'>
          {preg.pregunta}
        </div>
      )
      )
    }
    </>
  )
}

export default App
