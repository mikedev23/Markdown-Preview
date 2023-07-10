import './App.css'
import React, { useState } from 'react'
import { marked } from 'marked'

function App () {
  const [text, setText] = useState(`
# My Main Heading
## My Subheading

[Link](https://example.com)

\`Inline Code\`

\`\`\`javascript
// Code Block
function markdown(name) {
  console.log('My, ' + name + '!');
}
\`\`\`

- List Item 1
- List Item 2

> Blockquote

![Image](https://geekflare.com/wp-content/uploads/2023/03/CA88CCD5-A122-450F-AB90-FCAC513101CD-1500x428.jpeg)

**Bold Text**
`)

  marked.setOptions({ breaks: true })

  return (
    <div className='App'>
      <textarea
        id='editor'
        onChange={event => setText(event.target.value)}
        value={text}
      ></textarea>
      <div
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  )
}

export default App
