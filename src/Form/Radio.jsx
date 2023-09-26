import React from 'react'

 const Radio = ({pergunta, options, id, onChange, value}) => {
  return (
    <fieldset style={{fontWeight:'bold', marginBottom:'1rem', border:'2px solid #ade8f4'}}>
      <legend>{pergunta}</legend>
      {options.map((option)=>(
        <label key={option}>
          <input type='radio' checked={value === option} value={option} onChange={onChange}/>{option}
        </label>))}
    </fieldset>
  )
}

export default Radio;