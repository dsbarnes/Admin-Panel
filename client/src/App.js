import React, { useState, useEffect } from 'react';

function App() {

  const [jsonData, setJsonData] = useState(null)
  const [id, setId] = useState(null)
  const [featured, setFeatured] = useState(false)
  const [category, setCategory] = useState(null)
  const [title, setTitle] = useState(null)
  const [date, setDate] = useState(null)
  const [video, setVideo] = useState(null)
  const [short, setShort] = useState(null)
  const [content, setContent] = useState([])

  useEffect(() => {
    const url = 'http://localhost:4000/'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setJsonData(data)
        setId(data.length)
      })
  }, [])


  function handleContentInput(e) {
    const isText = e.target.classList[0]
    const position = e.target.dataset.position

    isText === 'text' ?
      content[position] = { 'text': e.target.value } :
      content[position] = { 'code': e.target.value }

    setContent([...content])
  }

  const blockHelper = (type) => {
    const count = document.querySelectorAll('.content').length
    const form = document.getElementById('addElements')
    const text = document.createElement('span')
    const block = document.createElement('textarea')
    const lineBreak = document.createElement('br')

    text.innerHTML = type
    block.classList.add(type, 'content')
    block.dataset.position = count
    block.addEventListener('keypress', (e) => handleContentInput(e))

    form.appendChild(text)
    form.appendChild(block)
    form.appendChild(lineBreak)
  }

  const handleAddTextBlock = () => blockHelper('text')
  const handleAddCodeBlock = () => blockHelper('code')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContent = {
      id: id,
      featured: featured,
      category: category,
      title: title,
      date: date,
      video: video,
      short: short,
      content: content
    }

    setJsonData([...jsonData, newContent])

    const url = 'http://localhost:4000/'
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData)
    })
  }

  return (
    <React.Fragment>
      <h1> dsbarnes -- blog admin </h1>
      <hr />

      <p>ID: {id}</p>

      <p>Featured?
        <input
          type="radio"
          name="featured"
          onClick={() => setFeatured(true)}
          checked={featured}
        /><label>True</label>

        <input
          type="radio"
          name="featured"
          onClick={() => setFeatured(false)}
          checked={!featured}
        /><label>False</label>
      </p>

      <p>Category:
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Katas</option>
          <option>env</option>
        </select>
      </p>

      <p>Title: <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      /></p>

      <p>IN THIS FORMAT: 10-10-1010</p>
      <p>date: <input
        type='text'
        onChange={(e) => setDate(e.target.value)}
      ></input></p>

      <p>MUST BE A LINK</p>
      <p>video: <input
        type='text'
        onChange={(e) => setVideo(e.target.value)}
      ></input></p>

      <p>short: <textarea onChange={(e) => setShort(e.target.value)} /></p>

      <button onClick={handleAddTextBlock}>Add Text Block</button>
      <button onClick={handleAddCodeBlock}>Add Code Block</button>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="addElements"></div>

        <button>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default App;
