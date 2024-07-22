import { Button } from '@mui/material'
import './welcome.css'
import { Link } from 'react-router-dom'
export const Welcome=()=>{
    return <div className="welcome">
    <h1>welcome </h1>
    <Link to="pro/login">
        <Button className="button">Login</Button>
      </Link>
      <Link to="pro/register">
        <Button className="button">Register</Button>
      </Link>
    
    
    </div>
}