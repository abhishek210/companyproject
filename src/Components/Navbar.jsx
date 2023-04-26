import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="main">
            <div className="logo">
                <h2 style={{marginTop:"40px"}}>Book-Search</h2>
            </div>
            <div className="navbar">
             <Link to='/' > <h3>HomePage</h3></Link> 
             <Link to='/searchRes' ><h3>SearchPage</h3></Link>  
             <Link to='/bookdetail' ><h3>BookDetailPage</h3></Link>
            </div>
            </div>
        </>
    )
}

export default Navbar