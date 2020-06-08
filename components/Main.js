import React from 'react';
import Head from 'next/head';

//styles
import '../styles/main.scss';

 const Main = ({props}) => {
    return (
        <div className="main">
            <Head>
                <title>MonteCristo</title>              
            </Head>
            <div className="firstSection">
                <div className="left">
                <img src='http://localhost:1337/uploads/small_black_background_fcd92b5362.jpeg?784173.3550000027' alt="perfume"/>
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
                    <img src="http://localhost:1337/uploads/small_e92dacf9e83cb8de14d3d726b45bf318_f08b499ae6.png?885142.5450000025" alt="perfume2"/>
                </div>
            </div>
            <div className="thirdSection">
                <div className="top-holder">
                    <h3>{props[2].Header}</h3>
                    <p>{props[2].Description}</p>
                </div>
                <div className="bottom-holder">
                    <div className="holder-3">
                        <img src="http://localhost:1337/uploads/unnamed_d1fdadb80c.jpeg?909589.5100000016" alt="perfumex"/>
                    </div>
                    <div className="holder-3">
                        <img src="http://localhost:1337/uploads/Black_Background_Product_Photography_18_624x468_520d9ce10d.jpeg?932766.7000000002" alt="perfumey"/>
                    </div>
                    <div className="holder-3">
                        <img src="http://localhost:1337/uploads/9b608261f00cabc120dbd9764ead3535_90eb913dfa.jpeg?942506.4200000016" alt="perfumez"/>
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
                    <img src="http://localhost:1337/uploads/small_mille_centum_parfums_montecristo_fragrances_01_555bd3a3ea.jpeg?955802.5799999996" alt="another"/>
                </div>
            </div>
            <div className="background-3"></div>
            <div className="background-4"></div>
            <div className="fifthSection">
                <div className="left">
                    <img src="http://localhost:1337/uploads/small_parfymfotografering_mot_mork_bakgrund_2_9d0b5901d8.jpeg?972335.69" alt="another"/>
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