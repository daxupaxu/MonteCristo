import React from 'react';
import Head from 'next/head';

//styles
import '../styles/main.scss';

 const Main = ({props}) => {
    return (
        <div className="main">
            <Head>
                <title>MonteCristo</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
                
            </Head>
            <div className="firstSection">
                <div className="left">
                <img src='http://localhost:1337/uploads/760f6e17bdd641d6ac0c1d3f98c9bfcb.jpg' alt="perfume"/>
                </div>
                <div className="right">
                    <h1>{props[0].Header}</h1>
                    <p className="first-section-paragraph">{props[0].Description}</p>
                    <button className="btn-learn">LEARN MORE</button>
                </div>
            </div>
            <div className="background-1"></div>
            <div className="background-2"></div>
            <div className="secondSection">
                <div className="left">
                    <p>{props[1].Header}</p>
                    <article>{props[1].Description}</article>
                </div>
                <div className="right">
                    <img src="http://localhost:1337/uploads/5fa9ba59fec145e7b8e7a11b799eb0b5.png" alt="perfume2"/>
                </div>
            </div>
            <div className="thirdSection">
                <div className="top-holder">
                    <h3>{props[2].Header}</h3>
                    <p>{props[2].Description}</p>
                </div>
                <div className="bottom-holder">
                    <div className="holder-3">
                        <img src="http://localhost:1337/uploads/39b974bea6224a3981323bf3101a0648.jpg" alt="perfumex"/>
                    </div>
                    <div className="holder-3">
                        <img src="http://localhost:1337/uploads/aed2de88508d4942af365a605f338ab2.jpg" alt="perfumey"/>
                    </div>
                    <div className="holder-3">
                        <img src="http://localhost:1337/uploads/4093b60809324a5c9529917409133291.jpg" alt="perfumez"/>
                    </div>
                </div>
                <button className="btn-more">MORE</button>
            </div>
            <div className="forthSection">
                <div className="left">
                    <h4>{props[3].Header}</h4>
                    <p>{props[3].Description}</p>
                    <button className="btn-shop">SHOP NOW</button>
                </div>
                <div className="right">
                    <img src="http://localhost:1337/uploads/7cef529754534f8584709df3194f77c2.jpg" alt="another"/>
                </div>
            </div>
            <div className="background-3"></div>
            <div className="background-4"></div>
            <div className="fifthSection">
                <div className="left">
                    <img src="http://localhost:1337/uploads/77e2e8a164cd44a89e9a0697839c8d84.jpg" alt="another"/>
                </div>
                <div className="right">
                    <h5>{props[4].Header}</h5>
                    <div className="description-holder">
                        <p>{props[4].Description}</p>
                    </div>
                </div>
            </div>
            <div className="contactForm">
            <h6>{props[5].Header}</h6>
                <div className="form-holder">
                    <div className="lemail-holder">
                            <input className="lemail" type="text" name="email" label="Email" placeholder="Your E-mail" />
                    </div>
                    <div className="lname-holder">
                            <input className="lname" type="text" name="Name" label="Name" placeholder="Your Name" />
                    </div>
                </div>
                <div className="btn-holder">
                    <button className="btn-send">SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Main