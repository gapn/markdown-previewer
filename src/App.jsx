import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const defaultText = 
  `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
  const [text, setText] = useState(defaultText);
  
  function handleTextChange(event) {
    setText(event.target.value)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <textarea id='editor' className='form-control' style={{ height: '80vh' }} value={text} onChange={handleTextChange} />
        </div>
        <div className='col'>
          <div id='preview'>test</div>
        </div>
      </div>
    </div>
  )
}

export default App
