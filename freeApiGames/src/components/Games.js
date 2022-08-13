import React from 'react'
import "./GamesStyle.css"

export const Games = ({games=[]}) => {  //[] this is array, if you don't receive anything, it's empty
  

  return (
    <div className="container-fluid" id="contfluid">
      <div className="row">
          {games.map((item,index)=>(
              <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="card" id="propertyCard">
                      <img src={item.thumbnail} alt=""></img>
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <hr></hr>
                        <p className="card-text">{item.platform}</p>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}
