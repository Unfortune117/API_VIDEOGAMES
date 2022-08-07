import React from 'react'

export const Pagination = (props) => {
    
  return (
    <nav>
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <button className="page-link" onClick={props.prevHandler} >Previous</button>
            </li>
            <li>
                <button className="page-link" onClick={props.nextHandler}>Next</button>
            </li>
        </ul>
    </nav>
  )
}
