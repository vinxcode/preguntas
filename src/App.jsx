import { useState } from 'react'

function App() {

  const [numeroPregunta, setNumeroPregunta] = useState(0)

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
    <div className="flex flex-col gap-3 items-center">

      <h1 className='text-center text-2xl font-bold mt-10'>Bienvenidos a la preguntas</h1>
      
      <div className='container bg-gray-100 p-6 rounded-3xl w-[400px] flex
      flex-col gap-2'>
        <h3 className="font-semibold ">{preguntasBiblia[numeroPregunta].pregunta}</h3>
        <p>{preguntasBiblia[numeroPregunta].opciones[0]}</p>
        <p>{preguntasBiblia[numeroPregunta].opciones[1]}</p>
        <p>{preguntasBiblia[numeroPregunta].opciones[2]}</p>
        <button className='mt-2 bg-indigo-600 text-white h-10 w-full rounded-3xl
        hover:bg-indigo-300' onClick={() => setNumeroPregunta(numeroPregunta+1)}>Siguiente pregunta</button>
      </div>

    </div>
  )
}

export default App
