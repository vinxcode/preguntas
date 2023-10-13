import { useState } from 'react'
import { Toaster, toast } from 'sonner'


function App() {

  const [numeroPregunta, setNumeroPregunta] = useState(0)
  const [comenzarIntento, setComenzarIntento] = useState(false)
  const [terminarIntento, setTerminarIntento] = useState(false)
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("")
  const [puntaje, setPuntaje] = useState(0)

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

  const handleOptionChange = (e) => {
    setOpcionSeleccionada(e.target.value)
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (numeroPregunta === (preguntasBiblia.length - 1)) {
      setTerminarIntento(true);
    } else {
      if (opcionSeleccionada) {
        if(parseInt(opcionSeleccionada) === (preguntasBiblia[numeroPregunta].respuestaCorrecta +1)){
          setPuntaje(puntaje +1)
          alert(puntaje)
        }
        setNumeroPregunta(numeroPregunta + 1);
      } else {
        toast.error('Debes marcar una opcion')
      }
    }

  }

  return (
    <div className="flex flex-col gap-3 items-center">

      <h1 className='text-center text-2xl font-bold mt-10'>Bienvenidos a la preguntas</h1>
      {
        comenzarIntento ? (
          terminarIntento ? (
            <p>Intento terminado</p>

          ) : (
            <form className='flex flex-col items-start w-[400px]'>

              <fieldset>
                <legend className='text-lg font-semibold'>{preguntasBiblia[numeroPregunta].pregunta}</legend>
                <div className="flex gap-2">
                  <input type="radio" name='opcion' value="1" id='op1'
                    checked={opcionSeleccionada === '1'}
                    onChange={handleOptionChange} />
                  <label htmlFor="op1">{preguntasBiblia[numeroPregunta].opciones[0]}</label>
                </div>

                <div className="flex gap-2">
                  <input type="radio" name='opcion' value="2" id='op2'
                    checked={opcionSeleccionada === '2'}
                    onChange={handleOptionChange} />
                  <label htmlFor="op2">{preguntasBiblia[numeroPregunta].opciones[1]}</label>
                </div>

                <div className="flex gap-2">
                  <input type="radio" name='opcion' value="3" id='op3'
                    checked={opcionSeleccionada === '3'}
                    onChange={handleOptionChange} />
                  <label htmlFor="op3">{preguntasBiblia[numeroPregunta].opciones[2]}</label>
                </div>

                <input type="submit" value="Siguiente pregunta" className='mt-2 bg-indigo-600
               text-white h-10 w-full rounded-3xl hover:bg-indigo-300' onClick={handleNext} />

                <Toaster position='top-center' richColors/>
              </fieldset>
            </form>
          )) :
          <div>
            <button className='mt-2 bg-indigo-600 text-white h-10 w-[400px] rounded-3xl
           hover:bg-indigo-300' onClick={() => setComenzarIntento(true)}>COMENZAR</button>
          </div>

      }

    </div>
  )
}

export default App
