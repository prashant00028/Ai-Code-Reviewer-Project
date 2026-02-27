import React from 'react'

const ReviewResult = ({result}) => {
  return (
    <div className='result-section'>
      {result && <pre>{result}</pre>}
    </div>
  );
}

export default ReviewResult
