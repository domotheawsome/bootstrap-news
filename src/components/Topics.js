import styled from '@emotion/styled/macro'
import React from 'react'
import { Link } from 'react-router-dom'
import TopicItem from './TopicItem'

const InterestAreas = styled.ul`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    padding-top: 20px;
    margin: 20px;
    align-items: center;
    
    border-bottom: 4px double;
    border-top: 2px solid gray;
    height: 50px;
    
`

const Topic = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
color: black;
li {
  text-decoration: none !important;
  color: inherit !important;

  &:hover {
    cursor: pointer;
    text-decoration: none !important;
    color: inherit !important;
  }

  img {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}
`



function Topics(props) {
    return (
        <>
            <span>
                <InterestAreas>
                <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("business")
                            props.setQueryParam("business")
                        }}> <p>Business</p></Topic>
                    </Link>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("entertainment")
                            props.setQueryParam("entertainment")
                        }}> <p>Entertainment</p></Topic>
                    </Link>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("general")
                            props.setQueryParam("general")
                        }}> <p>General</p></Topic>
                    </Link>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("health")
                            props.setQueryParam("health")
                        }}> <p>Health</p></Topic>
                    </Link>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("science")
                            props.setQueryParam("science")
                        }}> <p>Science</p></Topic>
                    </Link>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("sports")
                            props.setQueryParam("sports")
                        }}> <p>Sports</p></Topic>
                    </Link>
                    <Link to="/">
                        <Topic onClick={e => {
                            props.setQuery("crypto")
                            props.setQueryParam("crypto")
                        }}> <p>Crypto</p></Topic>
                    </Link>
                </InterestAreas>
            </span>
            {/* {props.articles.map((article, idx) => (
                <div key={idx}>{article.title}</div>
            ))} */}
        </>
    )
}

export default Topics