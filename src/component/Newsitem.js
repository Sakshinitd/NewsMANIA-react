import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newurl,author,date}=this.props;
    return (
      <div>

        <div className="card" >
        <img src={!imgurl? "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2025/01/Tenways-CGO600-Pro-8-speed-chain-drive-e-bike-new-LS-FI.png?resize=1200%2C628&quality=82&strip=all&ssl=1":imgurl} className="card-img-top" alt="..."/>
          
          <div className="card-body">
             <h5 className="card-title">{title==="[Removed]"?"NOT FOUND":title}</h5>
             <p className="card-text">{description}</p>
             <p className="card-text"><small className="text-body-secondary">Published On {date} By {author?author:"Unknown"}</small></p>
            <a rel="noreferrer" href={newurl} target="_blank" className="btn btn-dark btn-sm">SEE details</a>
          </div>
        </div>
        
    </div>
    )
  }
}

export default Newsitem
