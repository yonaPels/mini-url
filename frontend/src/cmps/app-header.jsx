import { Link } from "react-router-dom";

export function AppHeader(){
    return( 
    <header className="App-header">
        <Link to='/' className="logo">miniURL</Link>
        <Link to="/preview" className="preview-btn">Display All URLs</Link>
    </header>)
} 