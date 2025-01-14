import React, { Component } from 'react';
import {Link} from "react-router";


export class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-dark" >
                <div className="container-fluid" >
                 <Link className="navbar-brand" to="/" style={{color:"white"}}>NewsMANIA</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                 </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{justifyContent:'space-between', alignItems:''}}>
                   <li className="nav-item" ><Link className="nav-a active" to="/" style={{textDecoration: 'none',color:"grey",padding:'10px'}}>Home   </Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/business" style={{textDecoration: 'none',color:"grey",padding:'10px'}}>Busines</Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/entertainment" style={{textDecoration: 'none',color:"grey" ,padding:'10px'}}>Entertainment</Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/general" style={{textDecoration: 'none',color:"grey" ,padding:'10px'}}>General</Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/health" style={{textDecoration: 'none',color:"grey" ,padding:'10px'}}>Health</Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/science" style={{textDecoration: 'none',color:"grey" ,padding:'10px'}}>Science</Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/sports" style={{textDecoration: 'none',color:"grey" ,padding:'10px'}}>Sports</Link></li>
                   <li className="nav-item"><Link className="nav-a" to="/technology" style={{textDecoration: 'none',color:"grey" ,padding:'10px'}}>Technology</Link></li>
                  

                
               
                </ul>
            
         </div>
         </div>
         </nav>
    </div>
    )
  }
}

export default Navbar
