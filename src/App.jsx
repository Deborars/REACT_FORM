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

  function handleChange(event){
    console.log(event)
  }

  return (
    <>
      <form id="container">
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        {perguntas.map((pergunta)=>(
          <Radio value={respostas[pergunta.id]} onChange={handleChange} key={pergunta.id} {...pergunta}/>
        ))}
        
        <button className="btn">Próxima</button>
      </form>
    </>
  )
}

export default App
