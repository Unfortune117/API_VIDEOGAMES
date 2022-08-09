import React from 'react'
import "./PaginationStyle.css"

export const Pagination = (props) => {
    
  return (
    <nav>
        <ul className="pagination justify-content-center" id="pagcont">
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
