import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { marked } from 'marked';

marked.use({
  renderer: {
    image({ href, text }) {
      return `<img src="${href}" alt="${text}" class="img-fluid" />`;
    }
  }
});

function App() {
  const defaultText = 
  `
  # This is heading
  ## This is a sub-heading
  ### And so on...

  ---
  You can draw a line with 3 or more dashes, asterisks or underscores.
  ***

  You put code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code (start and end with 3 backticks):

  const hello = 'Hello World!';
  const  greet = (message) => {
    alert(message)
  };
  greet(hello);
  \`\`\`

  ___

  You can also make text **bold**.
  Or you can make text _italic_.
  Or you can even make it **_both_**.
  You can also ~~cross stuff out~~.

  ---

  There are also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  ---

  You can make lists:
  - some are bullets,
    - some are empty bullets,
      - and so on...

  ---

  Tables | Are | Created
  - | - | -
  like this. | You | split
  columns | with | pipe

  ---

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
  const [text, setText] = useState(defaultText);
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  function handleTextChange(event) {
    setText(event.target.value)
  }
 
  function copyMarkdownToClipboard() {
    navigator.clipboard.writeText(text).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 3000);
    });
  }

  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenButton, setFullScreenButton] = useState('Fullscreen');

  function fullScreenOnOff() {
    setFullScreen(!fullScreen);
  }

  return (
    <div className='container'>
      <h1 
        className='text-center' 
        style={{ fontSize: fullScreen === false ? '5rem' : '2rem' }}
      >
      React Markdown Previewer
      </h1>
      <div className='row'>
        <div className={`${fullScreen === true ? 'col-12' : 'col'}`}>
          <h2 id='editor-title'>
            Editor
            <span>
              <button 
                className={`btn btn-secondary btn-sm ms-2 ${copyButtonText === 'Copy' ? 'btn-copy-editor' : 'btn-copied-editor'}`} 
                onClick={copyMarkdownToClipboard}
              >
              {copyButtonText}
              </button>
            </span>
            <span>
              <button
                className='btn btn-secondary btn-sm ms-2 min-full-btn'
                onClick={fullScreenOnOff}
              >
                {fullScreen ? 'Splitscreen' : 'Fullscreen'}
              </button>
            </span>
          </h2>
          <textarea 
            id='editor' 
            className='form-control' 
            style={{ height: fullScreen === false ? '70vh' : '90vh' }} 
            value={text} 
            onChange={handleTextChange} 
          />
        </div>
        <div className='col'>
          <h2 id='preview-title'>Preview</h2>
          <div 
            id='preview'
            dangerouslySetInnerHTML={{ __html: marked(text)}}
            style={{ height: fullScreen === false ? '70vh' : '90vh' , marginBottom: fullScreen === false ? 0 : '5vh' }}
          />
        </div>
      </div>
    </div>
  )
}
export default App
