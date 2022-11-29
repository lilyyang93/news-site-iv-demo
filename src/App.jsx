import './App.css'
import { useEffect, useState } from 'react'
import AppNav from './components/AppNav'
import ArticleList from './components/ArticleList'

//import newsData from "./data/news.json"

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'

import { ArticlesContext } from './pages/contexts'
import axios from 'axios'
//useContext -- allows a child component to receive information from any parent component that specifies context 
//createContext -- 

function App() {
//  const [allArticles, setAllArticles] = useState(newsData.map((article, index) => {
  //   return {
  //     id: index+1,
  //     title: article.title,
  //     created_date: article.created_at,
  //     url: article.url,
  //     author: article.author,
  //     object_id: article.objectID,
  //     tags: article._tags
  //   }
  // }))

  const [allArticles, setAllArticles] = useState([])

  async function callApi() {
    let response = await axios.get('http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50')

    //console.log(response.data.hits)

    let apiArticles = response.data.hits.map((article, index) => {
      return {
        id: index+1,
        title: article.title,
        created_date: article.created_at,
        url: article.url,
        author: article.author,
        object_id: article.objectID,
        tags: article._tags
      }
    })
    setAllArticles(apiArticles)
  }

  useEffect(()=>{callApi()} , [])

  function getOneArticle(index) {
    return allArticles[index]
  }
  
  return (
    <div className="App">
      <ArticlesContext.Provider value={allArticles}>
        <AppNav />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage articles={allArticles}/>} />
            <Route path="/article/:articleID" element={<ArticlePage getArticle={getOneArticle}/>} />
            <Route path="/sections/:section_tag" element={<SectionPage />} />
          </Routes>
        </Router>
      </ArticlesContext.Provider>
    </div>
  )
}

export default App
