import React,{Component} from 'react';
import '../css/bootstrap.min.css';
import '../style/style.css';
import logo from '../images/img.jpg'

class Slid extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row slie">
                    <div className="col-sm-4">
                        <img src={logo} alt='logo' className='img-thumbnail cimg'/>
                    </div>
                    <div className="col-sm-8">
                        {/* <div className='container'>
                            <div className='row'> */}
                                {/* <div className='col-sm-2'></div> */}
                                <div className='col-sm-8 heding'>
                                    <h1>Lorem ipsum dolor sit amet, consecteteur adipiscing elit.</h1>
                                    <br/> 
                            <p>Lorem ipsum doler sit amet.Consectetur adipiscing elit.
            I am a learning web development because i feel it very entertaining and hardworking I am a learning web development
            Lorem ipsum doler sit amet.Consectetur adipiscing elit.
					I am a learning web development because i feel it very entertaining and hardworking I am a learning web development</p>
                    <br/>
                           <button className='btnn' type='submit'>Read More</button>
                                </div>
                                {/* <div className='col-sm-2'></div> */}
                            {/* </div>
                        </div> */}
                        
                    </div>

                </div>

            </div>
        )
    }
}
export default Slid;
