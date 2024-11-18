import { useState } from 'react'

import './App.css'

function App() {




  return (
    <>
      <div className="container">
        <h1 className='my-4'>Articoli del blog</h1>
        <form className='mt-4 mb-5'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo del nuovo articolo</label>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Nuovo titolo"
                aria-label="Nuovo titolo"
                aria-describedby="button-addon2"


              />
              <button className="btn btn-outline-light" type="submit" id="button-addon2">Inserisci</button>
            </div>
            <small id="titleHelperId" className="form-text text-muted">Inserisci un nuovo titolo</small>

          </div>
        </form>
      </div>
    </>
  )
}

export default App
