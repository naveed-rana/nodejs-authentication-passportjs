import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../style/style.css';
import firstimg from '../images/w28.jpg';
import secondimg from '../images/w72.jpg';
import thirdimg from '../images/w73.jpg';
class Content extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-7 cont'>
                        <h1>Wellcome To Our Website!</h1><hr/>
                        <blockquote>
                            <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>

                        </blockquote>
                        <p>
                            Lorem ipsum doler sit amet.Consectetur adipiscing elit. I am a learning web development because i feel it very entertaining and hardworking I am a learning web development Lorem ipsum doler sit amet.Consectetur adipiscing elit. I am a learning web development because i feel it very entertaining and hardworking I am a learning web development
                        </p>
                        <ul>
                            <li>Lorem ipsum doler sit amet.Consectetur adipiscing elit.
					I am a learning web development because i feel it very entertaining and hardworking I am a learning web development		</li>
                            <li>Lorem ipsum doler sit amet.Consectetur adipiscing elit.
					I am a learning web development because i feel it very entertaining and hardworking I am a learning web development</li>
                        </ul>
                    </div>
                    <div className='col-sm-4 latesnews'>
                        <div className='panel panel-info'>
                            <div className='panel panel-heading'><b>Latest News</b></div>
                            <div className='panel panel-body'>
                                <div className='list-group'>
                                    <a href='#' className='list-group-item'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={firstimg} alt='First Image' className='firstimage thumbnail' />
                                            </div>
                                            <div className='col-md-8'>
                                                <h4 className='list-group-item-heading'>This is Heading</h4>
                                                <p className='list-group-item-text'>Lorem ipsum doler sit amet.Consectetur adipiscing elit.I am a learning web development because i feel it very entertaining and hardworking
                                        </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='list-group'>
                                    <a href='#' className='list-group-item active'>
                                        <div className='row'>
                                            <div className='col-md-4 '>
                                                <img src={secondimg} alt='First Image' className='secondimg thumbnail' />
                                            </div>
                                            <div className='col-md-8'>
                                                <h4 className='list-group-item-heading'>This is Heading</h4>
                                                <p className='list-group-item-text'>Lorem ipsum doler sit amet.Consectetur adipiscing elit.I am a learning web development because i feel it very entertaining and hardworking
                                        </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='list-group'>
                                    <a href='#' className='list-group-item'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <img src={thirdimg} alt='First Image' className='thirdimg thumbnail' />
                                            </div>
                                            <div className='col-md-8'>
                                                <h4 className='list-group-item-heading'>This is Heading</h4>
                                                <p className='list-group-item-text'>Lorem ipsum doler sit amet.Consectetur adipiscing elit.I am a learning web development because i feel it very entertaining and hardworking
                                        </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>

            </div>
        )
    }
}
export default Content;
