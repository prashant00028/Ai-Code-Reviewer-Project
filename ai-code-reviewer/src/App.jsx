import React, { useState } from 'react'
import Navbar from './components/Navbar'
import CodeInput from './components/CodeInput';
import ReviewResult from './components/ReviewResult';

const App = () => {

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Java");
  const [result, setResult] = useState("");
  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1>AI Code Reviewer</h1>
      <p>Paste your code and get instant AI feedback.</p>

      <CodeInput
      code={code}
      setcode={setCode}
      language={language}
      setLanguage={setLanguage}
      />
      
      <ReviewResult result={result}/>

    </div>
    </>
  )
}

export default App
