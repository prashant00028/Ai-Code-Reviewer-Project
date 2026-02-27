import React from 'react'

const CodeInput = ({code, setCode, language, setLanguage}) => {
  return (
    <div className='input-section'>
      <select
      value={language}
      onChange={(e)=> setLanguage(e.target.value)}
      >
        <option value="Java">Java</option>
        <option value="Javascript">JavaScript</option>
        <option value="Python">Python</option>
      </select>

      <textarea 
      placeholder='Paste your code'
      value={code}
      onChange={(e)=> setCode(e.target.value)}
      />
        <button>Review my code</button>
    </div>
  )
}

export default CodeInput
