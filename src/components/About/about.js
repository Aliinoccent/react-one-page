import person1 from './../../img/person1.png'
import person2 from '../../img/person2.png'
import './about.css'
const About=()=>{
    return(
        <div className="container mt-5" style={{position:'relative'}}>
            <h1 className="display-3" style={{fontWeight:'bold'}}>About-Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
            <div className="flex-1 d-flex gap-5 mt-5">
                <div className='imageBox'>
                    <img src={person1} alt='not'/>
                </div>
                <div className='content'style={{position:'absolute',zIndex:3,color:'red'}}>
                    <h3>abdul rehman</h3>
                    <p>react js</p>
                </div>
                
                <div className='imageBox'>
                    <img src={person2} alt='not'/>
                </div>
                <div className='content'>
                    <h3>abdul rehman</h3>
                    <p>react js</p>
                </div>
            </div>

            <div className="flex-1 bg-primary">

            </div>
        </div>
    )
}
export default About