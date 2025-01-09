import './Header.css'

import logo from './assets/hari.jpg'

export const Header = () => {
     return (<>

        <div className='Main'>
              <div className='picture-container'>
                  <img className='image rounded' src={logo} alt="this is a picture" width="150px"/></div>

            <div className='content-container'>
    <h2><pre>Name : harihareshwar     Phone : +91 9952597230  
        <br />  
        </pre></h2>
             
                  <h3><pre><a href='https://www.linkedin.com/in/harihareshwar-d-p-a92369293' target='blank'>linkedin</a>    <a href="https://github.com/Harihareshwar1" target="blank">github</a>    <a href="mailto:harihareshwar08@gmail.com">email</a></pre></h3>
                
            </div>
                   
              
        </div>
     </>)
}