import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Radio from  './Form/Radio.jsx';


function App() {

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  const [respostas, setRespostas] = React.useState({
    p1:'',
    p2:'',
    p3:'',
    p4:'',  
  })

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({target}){
    setRespostas({...respostas, [target.id]:target.value});
  }

  function resultadoFinal (){
    const corretas = perguntas.filter(({id, resposta})=> respostas[id] == resposta)
    setResultado(`Você acertou o total de ${corretas.length} respostas das ${perguntas.length} perguntas`)
  }

  function handleClick(){
    if(slide < perguntas.length -1){
      setSlide(slide + 1);
    }else{
      resultadoFinal();
      setSlide(slide + 1);
    }
  }

  return (
    <>
      <form id="container" onSubmit={(event)=> event.preventDefault()}>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        {perguntas.map((pergunta, index)=>(
          <Radio active={slide === index} value={respostas[pergunta.id]} onChange={handleChange} key={pergunta.id} {...pergunta}/>
        ))}
        
        {resultado ? <p>{resultado}</p> : <button onClick={handleClick} className="btn">Próxima</button>}
        
      </form>
    </>
  )
}

export default App
