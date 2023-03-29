import styled from '@emotion/styled/macro'
import React from 'react'

const Error = styled.div`
    text-align: center;
    padding: 10px;
    color: black;
    max-width:auto;
    font-weight: bold;
    display: block;
    margin-top: 5%;
`

function ErrorContainer({ children }) {
    return <Error className="error-container">
        <h2>
            {children}
        </h2>
    </Error>
}

export default ErrorContainer
