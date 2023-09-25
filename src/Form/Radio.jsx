import React from 'react'

 const Radio = ({pergunta, options, id}) => {
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option)=>(
        <label key={option}>
          <input type='radio' value={option}/>{option}
        </label>))}
    </fieldset>
  )
}

export default Radio;