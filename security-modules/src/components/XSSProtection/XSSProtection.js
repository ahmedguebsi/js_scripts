import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import './XSSProtection.css';

const XSSProtection = () => {
  const [userInput, setUserInput] = useState('');
  const [sanitizedOutput, setSanitizedOutput] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.value;
    setUserInput(input);

    const sanitized = DOMPurify.sanitize(input);
    console.log('Sanitized Output:', sanitized); // Log sanitized output
    setSanitizedOutput(sanitized);
  };

  return (
    <div className="xss-container">
      <h2>XSS Protection Demo</h2>
      <div className="input-group">
        <label>Enter text (try &lt;script&gt;alert("XSS")&lt;/script&gt;):</label>
        <textarea
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type something here..."
          rows="4"
        />
      </div>
      <div className="output-group">
        <label>Sanitized Output:</label>
        <div
          className="sanitized-output"
          dangerouslySetInnerHTML={{ __html: sanitizedOutput }}
        ></div>
      </div>
    </div>
  );
};

export default XSSProtection;
