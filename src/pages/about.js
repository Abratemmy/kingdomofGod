import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isShow: false
        }
    }
    showToggle = () =>{
        this.setState({
            isShow: true
        })
    }
    render() {
        return (
            <div>
                <div className="pastorgallery aboutpage" >
                    <div className="container bannertext"> About us</div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 aboutpagecontent">
                            <div className=""style={{padding:'0px 5px 0px 5px'}}>
                                <div className=" page-header" >Who <span className="homeheader-span">we are</span> </div>
                                <p>We, the <span className="">Kindom of christ church</span> under the divine leadership of our Lord and Saviour, Jesus Christ and direction
                                of the Holy Spirit being fully determineed to reach the unreached with the gospel of our Lord Jesus Christ, and to practically live out his Holy life in accordance with the holyscripture do 
                                hereby by our representatives seated in his assemblygive to ourselves the instruction.</p>
                                <p>The General Overseer,in person of Prophet Emmanuel Godfrey is a man of God. God has called him and put the vision of the church in his hands</p>
                            </div>

                            <div className="page-header" >Aims and<span className="homeheader-span"> Objectives</span> </div>
                            <ul className="ul">
                                <li className="li">To spread the gospel of Jesus Christ</li>
                                <li className="li">To promote love and unityamong the members</li>
                                <li className="li">To arrang and conduct lectures and seminars from time to time</li>
                                <li className="li">To raise the moral standard of member and to encourage them to live a pure and holy life</li>

                            </ul>
                        </div>

                        <div className="col-md-6">
                            <div className="page-header"><span className="homeheader-span"> What </span>we believe</div>
                            <div className=""style={{padding:'0px 5px 0px 5px'}}>
                            <div>God and the Bible</div>
                            <p>We believe in the inspiration of the Old and New Testament Scriptures that we find in the Bible 
                            There is nothing that anyone can know about God's nature unless He reveals it to humankind. Without divine revelation humanity will be in darkness. Fortunately, the Bible has told us about God's nature. 
                            From the Scripture we can discover four basic description of God's character. 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About
