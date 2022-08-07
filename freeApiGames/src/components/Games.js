import React from 'react'

export const Games = ({games=[]}) => {  //[] this is array, if you don't receive anything, it's empty
  
  
  
  return (
    <div className="row">
        {games.map((item,index)=>(
            <div key={index} className="col">
                <div className="card">
                    <img src={item.thumbnail} alt=""></img>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <hr></hr>
                      <p></p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
