import './index.scss'
import { Link } from 'react-router-dom'


function Home(){
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1> Hi, <br/>
        I'm Ayodeji <br/>
        A Software Developer
        </h1>
        <h2>Full Stack Developer | Entrepreneur | Photographer </h2>
        <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
      </div>
    
    </div>
  )
}
export default Home