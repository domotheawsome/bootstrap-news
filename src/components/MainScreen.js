import styled from '@emotion/styled/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import LandingPage from './LandingPage'
import Spinner from './Spinner'

const ArticleList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    gap:20px;
`
const SpinnerDiv = styled.div`
    display: flex;
    justify-content: center;
`

const ArticleLink = styled(Link)`
    &:hover{
        text-decoration: none;
    }
`

function MainScreen(props) {
    console.log("These are the articles: ", props.articles)
    return (
        <>
            {props.articles.length === 0 ? <LandingPage /> : props.loading ? <SpinnerDiv> <Spinner id="spinner" /> </SpinnerDiv> : <ArticleList>
                {props.articles.map((article, idx) => (
                    <ArticleLink key={idx} to={`/article/${article.title}`} state={article}>
                        <div className="card w card--container">
                            {article.urlToImage ? (
                                <img className="img--size card-img-top" src={article.urlToImage} alt="poster" />
                            ) : <img className="img--size card-img-top" src={"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} alt="na" />}

                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className='card-text fon'>{article.description}</p>
                            </div>
                        </div>
                    </ArticleLink>

                ))}
            </ArticleList>}
            {/* <h1>This is the Main Screen!</h1> */}
        </>
    )
}

//{{ pathname: `/article/${article.title}`, param: article }}

export default MainScreen