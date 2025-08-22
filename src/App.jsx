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
  
  function handleTextChange(event) {
    setText(event.target.value)
  }

  return (
    <div className='container'>
      <h1 class='text-center'>React Markdown Previewer</h1>
      <div className='row'>
        <div className='col'>
          <textarea id='editor' className='form-control' style={{ height: '80vh'}} value={text} onChange={handleTextChange} />
        </div>
        <div className='col'>
          <div 
            id='preview'
            dangerouslySetInnerHTML={{ __html: marked(text)}}
          />
        </div>
      </div>
    </div>
  )
}

export default App
