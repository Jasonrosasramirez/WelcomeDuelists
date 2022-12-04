import React from 'react';


function HomePage () {
    return (      
        <div id = 'HomePage_CSS_Div'>
            <div id = 'HomePage_Hero' class='hero-image'> 
                <div class='hero-text'>
                    <h1> Welcome to Andover Gaming </h1>
                    <p> This is not a real venue, but I wish it was :D </p>
                </div>
            </div>
            
            
            {/*Second Half of the Page*/}
            <div class='HomePage_Remaining'>
                <h1> This is where everything else will go </h1>

                <div class='Home_MidCards'>
                    <div class='Home_card'>
                        <h1>Meet the owner</h1>
                        <img src='../scapegoat.jpg' alt="Owner Image"/>
                        <p>
                            Desc about the owner. 
                        </p>
                    </div>


                    <div class='Home_card'>
                        <h1>Who we are</h1>
                    </div>


                    <div class='Home_card'>
                        <h1>Join Our Team</h1>
                    </div>
                </div>

            </div>
            
        </div>

    );

}

export default HomePage; // I will export to App.js
