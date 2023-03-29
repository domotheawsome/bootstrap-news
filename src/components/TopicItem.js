import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'
const Topic = styled.li`

color: black;
    &:hover{
        cursor: pointer;
    }
    
    img {
        overflow: hidden;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`
export default function TopicItem({setQuery, setQueryParam, interest}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      // https://bobbyhadz.com/blog/react-capitalize-first-letter
    return(
        <Link to="/">
        <Topic onClick={e => {
            setQuery({interest})
            setQueryParam({interest})
        }}> <p>{capitalizeFirst(interest)}</p></Topic>
        </Link>
    )
}