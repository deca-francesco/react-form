import { useState } from 'react'

import articlesArray from "./data/articles.js"

import './App.css'

function App() {

  const [articles, setArticles] = useState(articlesArray)
  const [newArticle, setNewArticle] = useState("")



  function addArticle(e) {

    e.preventDefault()

    const newArticles = [...articles, newArticle]

    setArticles(newArticles)

    setNewArticle("")

    console.log(newArticles);


  }


  function handleCancelClick(e) {
    // console.log(e.target);

    const dataIndex = Number(e.target.getAttribute("data-index"))
    console.log(dataIndex);

    const newArticles = articles.filter((article, index) => index !== dataIndex)

    setArticles(newArticles)

    console.log(newArticles);


  }



  return (
    <>
      <div className="container">
        <h1 className='my-4'>Articoli del blog</h1>

        <form onSubmit={addArticle} className='mt-4 mb-5'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo del nuovo articolo</label>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Nuovo titolo"
                aria-label="Nuovo titolo"
                aria-describedby="button-addon2"
                value={newArticle}
                onChange={e => setNewArticle(e.target.value)}
              />
              <button className="btn btn-secondary" type="submit" id="button-addon2">Inserisci</button>
            </div>
            <small id="titleHelperId" className="form-text text-muted">Inserisci un nuovo titolo</small>

          </div>
        </form>

        <ul className="list-group">
          {articles.map((article, index) => <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
            {article}
            <div className="buttonsDiv">
              <button onClick={handleCancelClick} data-index={index} className='ms-5 btn btn-outline-danger'>Cancella</button>
            </div>
          </li>)}
        </ul>


      </div>
    </>
  )
}

export default App
