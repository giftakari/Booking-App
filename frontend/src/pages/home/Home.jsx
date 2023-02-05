
import {Link} from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'

function Home() {
    return (
        <div>
        <NavBar />
        <Link to='about'>About Us</Link>
      </div>
    )
}

export default Home
