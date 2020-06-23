import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import WOW from 'wowjs';

class About extends Component {
    componentDidMount(){
        const wow = new 
        WOW.WOW();
        wow.init();
   }
    render() {
        return (
            <div>
                <div className="pastorgallery aboutpage" >
                    <div className="container bannertext"> About us</div>
                </div>

                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12 aboutpagecontent">
                            <div className="wow backInUp"data-wow-iteration="10"style={{padding:'0px 5px 0px 5px'}}>
                                <div className=" page-header" >Who <span className="homeheader-span">we are</span> </div>
                                <p>We, the <span className="">Kindom of christ church</span> under the divine leadership of our Lord and Saviour, Jesus Christ and direction
                                of the Holy Spirit being fully determineed to reach the unreached with the gospel of our Lord Jesus Christ, and to practically live out his Holy life in accordance with the holyscripture do 
                                hereby by our representatives seated in his assemblygive to ourselves the instruction.</p>
                                <p>The General Overseer,in person of Prophet Emmanuel Godfrey is a man of God. God has called him and put the vision of the church in his hands</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 video-column" style={{paddingTop: '30px'}}>
                            <div className="video-gallery wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationduration: '1500ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                                <div className="overlay-gallery">
                                    <div className="icon-holder">
                                        <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'zoomIn'}}>
                                            <ReactPlayer controls width='480px' height='280px' url='https://www.youtube.com/watch?v=ZILtoYyCOC4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wow fadeInUp" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s" style={{padding: '50px 0px 50px 0px'}}>
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="" src="https://res.cloudinary.com/aitechma/image/upload/v1592914682/churchweb/about1_ihtlqv.png"alt="not seen" width="100%" />
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="page-header wow flipInY"data-wow-duration="10s" data-wow-iteration="infinite" >Aims and<span className="homeheader-span"> Objectives</span> </div>
                           <p>To spread the gospel of Jesus Christ</p>
                           <p>To promote love and unity among the members</p>
                           <p>To arrang and conduct lectures and seminars from time to time</p>
                           <p>To raise the moral standard of member and to encourage them to live a pure and holy life</p>
                        </div>
                    </div></div>
                </div>

                <div className="statementoffaith container-fluid wow fadeInUp "data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s"  style={{background:'rgb(224, 222, 222)'}}>
                    <div className="container" style={{paddingBottom:'40px'}}>
                        <div className="page-header text-center" >Statement of<span className="homeheader-span"> faith</span> </div>
                        <p>The Bible is God’s unique revelation to people. It is the inspired, infallible Word of God, and the 
                            supreme and final authority on all matters upon which it teaches. No other writings are vested with 
                            such divine authority.There is only one God, creator of heaven and earth, who exists eternally
                            three person – Father, Son, and Holy Spirit, each fully God yet each personally distinct from the
                            other.
                        </p>

                        <p>  All people are created in God’s image and matter deeply to Him. Central to the message of the Bible is that God loves people, 
                            and invites them to live in communion with Himself and the community with each other.
                            Apart from Jesus Christ, all people are spiritually lost and, because of sin, deserve the judgement of God.
                            However, God gives salvation and eternal life to anyone who trusts in Jesus Christ and in His sacrifice on his or 
                            her behalf. Salvation cannot be earned through personal goodness or human effort. It is a gift that must be received by humble
                            repentance and faith in Christ and His finished work on the cross.
                        </p>

                        <p>
                            Jesus Christ, second Person of the Trinity, was born of the Virgin Mary, lived a sinless human life, willingly took upon Himself all of our sins, died and rose again bodily, and is at the right hand of the Father
                            as our advocate and mediator. Some day, He will return to consummate history and to fulfill the eternal plan of God.
                        </p>

                        <p>
                            The Holy Spirit, third Person of the Trinity, convicts the world of sin and draws people to 
                            Christ. He also indwells all believers. He is available to empower them to lead Christ-like 
                            lives, and gives them spiritual gifts with which to serve the church and reach out to a lost and needy world.
                        </p>

                        <p>
                            Death seals the eternal destiny of each person. At the final judgement, unbelievers will be separated 
                            from God into condemnation. Believers will be received into God’s loving presence and rewarded for their
                            faithfulness to Him in this life
                        </p>
                    </div>
                </div>

                <div className="history container-fluid">
                    <div className="container">
                        <div className="page-header text-center" >History<span className="homeheader-span"> </span> </div>
                        <p>
                            Through God revelation in the year 2005, I saw a pillar of light from the mouth of a dove shinning directly from the sky upon me and I heard a voice from heaven saying “I am your father” before given a divine Name, “Kingdom of Christ Church” 15th December, 2007. As confirmed by the Holy Spirit.
                            The name kingdom of Christ which means CHRIST JESUS THE LIGHT OF THE WORLD, Genesis 1:3, Act 26:17-18, John 1:4-5, 
                            John 8:12, 1Peter 2:9, Matthew 5:14-16, Ephesians 5:8, John 12:35-36, Romans 13:12, is reigning and ruling with his 
                            chosen ones here on earth. Luke 22:29, 1 John 1:5-7. The church was divinely launched into the world by the Almighty 
                            God Himself who is great in LOVE AND RICH IN MERCY through the abundant of HIS GRACE on the life of his anointed son Prophet Immanuel Godfrey Akhigbe now the General Overseer of this Christ Great Kingdom on earth. Through a wonderful and great vision of my time with the name KINGDOM OF CHRIST MINISTRY boldly and clearly inscribed on the ceiling of my Hotel Room in Abuja during my routine business trip to the Federal Capital City. Nevertheless, when I suddenly woke up and being terribly frightened by this crucial experience, I poured out my heart earnestly in prayer to God Almighty who is faithful for further confirmation with signs 
                            and wonders following the vision and immediately the Holy Spirit descended mightly like a mighty house falling on top of me and I started screaming, confessing KINGDOM OF CHRIST repeatedly before the Holy Spirit finally departed from me. This divine revelation actually ushered me in the registration of KINGDOM OF CHRIST CHURCH with appropriate government bodies both in Nigerian and Republique Du Benin, subsequently in Singapore. Kingdom of Christ Church exists to bring the kingdom of Jesus Christ to our hearts, our Church, and the world around us. Galatians 4:5-6, 2Corinthians 4:6, Matt. 16:28, Hebrew 1:8, Revelation 11:15,
                                Revelation 12:10, Colossians 1:13-14, 2Peter 1:11. The one who acquires “citizenship” in the kingdom of Christ is one who has repentance. This is why the entire message regarding the coming of the kingdom says “Repent, for the kingdom of heaven is at hand”. Matthew 4:17, 2Peter 3:9. One changes his way of life, he adjusts his life according to the will of the Lord 1 John 1: 5-7. He places everything – including his life – at the disposal of Christ the King. JESUS IS LORD! QUE DIEU TOUT PUISSANT VOUS BENISSE
                        </p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default About
