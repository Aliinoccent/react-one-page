import person1 from './../../img/person1.png'
import person2 from '../../img/person2.png'
import './about.css'
import Btn from '../button/button'
const About=()=>{
    return(
        <div className="container mt-5 bg-warning rounded " style={{position:'relative',padding:'20px',marginBottom:'20px'}}>
            <h1 className="display-3" style={{fontWeight:'bold'}}>About-Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
            <div className='d-flex '>
            <div className="flex-1 d-flex  mt-5" style={{flex:1}}>
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

            <div className=" mt-5" style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
            <h4 className='text-start'>Little About Us</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod temp orincididunt ut labore et dolore magna aliqua.
            </p>
            
            </div>
            
            </div>
        </div>

    )
}
export default About