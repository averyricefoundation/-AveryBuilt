import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(
            <div className="container mt-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?cs=srgb&dl=ancient-architect-architecture-2104882.jpg&fm=jpg'} className="d-block w-100" alt="..."/>
                    </div> 
                    <div className="carousel-item">
                      <img src={"https://images.pexels.com/photos/1130847/pexels-photo-1130847.jpeg?cs=srgb&dl=clouds-cold-daylight-1130847.jpg&fm=jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={"https://images.pexels.com/photos/1101246/pexels-photo-1101246.jpeg?cs=srgb&dl=clouds-cloudy-cold-1101246.jpg&fm=jpg"} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="container">
                <h3 className="mt-3">About us</h3>
                <p>A little happy sunlight shining through there. There we go. If you do too much it's going to lose its effectiveness. We spend so much of our life looking - but never seeing. All you have to do is let your imagination go wild. 
                  Clouds are free they come and go as they please.
                  If you don't think every day is a good day - try missing a few. You'll see. 
                  I guess I'm a little weird. I like to talk to trees and animals. 
                  That's okay though; I have more fun than most people. 
                  Just think about these things in your mind - then bring them into your world.

                  I'll go over the colors one more time that we use:
                  Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. 
                  By now you should be quite happy about what's happening here. 
                  The only prerequisite is that it makes you happy. 
                  If it makes you happy then it's good. Isn't it fantastic that you can change your mind and create all these happy things? 
                  You have to make almighty decisions when you're the creator. 
                  You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush.</p>
                
                


                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src={'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?cs=srgb&dl=ancient-architect-architecture-2104882.jpg&fm=jpg'} className="d-block w-100" alt="..."/>
                    </div> 
                    <div className="carousel-item">
                      <img src={"https://images.pexels.com/photos/1130847/pexels-photo-1130847.jpeg?cs=srgb&dl=clouds-cold-daylight-1130847.jpg&fm=jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={"https://images.pexels.com/photos/1101246/pexels-photo-1101246.jpeg?cs=srgb&dl=clouds-cloudy-cold-1101246.jpg&fm=jpg"} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <h3 className="mt-3">Our Vision</h3>
                <p>A little happy sunlight shining through there. There we go. If you do too much it's going to lose its effectiveness. We spend so much of our life looking - but never seeing. All you have to do is let your imagination go wild. 
                  Clouds are free they come and go as they please.
                  If you don't think every day is a good day - try missing a few. You'll see. 
                  I guess I'm a little weird. I like to talk to trees and animals. 
                  That's okay though; I have more fun than most people. 
                  Just think about these things in your mind - then bring them into your world.

                  I'll go over the colors one more time that we use:
                  Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. 
                  By now you should be quite happy about what's happening here. 
                  The only prerequisite is that it makes you happy. 
                  If it makes you happy then it's good. Isn't it fantastic that you can change your mind and create all these happy things? 
                  You have to make almighty decisions when you're the creator. 
                  You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush.</p>
                </div>
            </div>
        )
    }
}