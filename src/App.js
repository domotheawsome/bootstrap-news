import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import './App.css';
import Article from './components/Article';
import MainScreen from './components/MainScreen';
import Nav from './components/Nav';
import Topics from './components/Topics';
import useNewsSearch from './hooks/useNewsSearch';
import languages from './selections/languages.json';


// const searchButton = styled.Link`

// `

function App() {
  const [languageParam, setLanguageParam] = useState("en")
  const [domainParam, setDomainParam] = useState("")
  const [queryParam, setQueryParam] = useState("")

  const [language, setLanguage] = useState("en")
  const [domain, setDomain] = useState("")
  const [query, setQuery] = useState("")

  const [articles, loading, error] = useNewsSearch(queryParam, domainParam, languageParam)

  let navigate = useNavigate()

  return (
    <>
      <Nav />
      <div >
        <form id="form" className="form--container " onSubmit={e => {
          e.preventDefault()
          //set search params
          console.log("language in app: ", language)
          setLanguageParam(language)
          setDomainParam(domain)
          setQueryParam(query)

          //reset search params
          setDomain("")
          setQuery("")

          //reset input fields
          document.getElementById("queryInput").value = ""
          document.getElementById("domainInput").value = ""

        }}>
          <div className="input-group mb-3">
            <div className="input-group-prepend ">
              <input className='form-control form--gap' id="queryInput" type='text' placeholder='Search' onChange={e => {
                setQuery(e.target.value)
              }}></input>
              <input className='form-control form--gap' id="domainInput" type='text' placeholder='Sources' onChange={e => {
                setDomain(e.target.value)
              }}></input>
              <div className="dropdown">
                <select className="form--gap btn btn-secondary dropdown-toggle" onChange={
                  e => setLanguage(e.target.value)
                }>

                  <option className=" dropdown-menu" value="en" selected>EN</option>
                  {languages.map((code, idx) => (
                    <option key={idx} value={code.code}>{(code.code).toUpperCase()}</option>
                  ))}

                </select>
              </div>
              {/* <select onChange={
            e => setCountry(e.target.value)
          }>
            <option value="us" selected>US</option>
            {countries.map((code, idx) => (
              <option key={idx} value={code.code}>{(code.code).toUpperCase()}</option>
            ))}
          </select> */}
              <button type='submit' className="btn btn-primary" onClick={() => {
                navigate('/')
              }}>Search</button>
            </div>
          </div>
        </form>
      </div>

      {/* Areas of interest */}
      <Topics setQueryParam={setQueryParam} setQuery={setQuery} />

      <Routes>
        <Route index element={<MainScreen articles={articles} loading={loading} error={error} />} />
        <Route path="/article/:title" element={<Article />} />
      </Routes>

    </>
  );
}

export default App;