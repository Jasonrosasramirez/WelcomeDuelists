import React, { useState, useEffect } from 'react';

// importing CSS
import './BanListPage.css';

//import DB Files
import BanListNames_Array from '../DBGenerationFiles/BanListNames_Array';
import { nameFetchFunction } from '../DBGenerationFiles/DBSearching'; // this is the search engine function 


function TierListPage () {
    return (
        <div>
            <h1>BanList Page</h1>            
            <p>GOAT Format uses the official April 2005 banlist for the TCG. </p>
            
            <br></br>

        
            <div className='banListGallery'>
                {/*Forbidden*/}
                <div className='banListCategory'>
                    <div className='banListCategory_Header'> 
                        <div className='banListCategory_Descr'>
                            <p>image of no Sign</p>
                            <h2>Forbiden Cards</h2>
                        </div>
                        
                        <p>These cards are not allowed in your deck</p>
                    </div>

                    {BanListNames_Array[0]}
                </div>
            
                {/*Limited*/}
                <div className='banListCategory'>
                    <div className='banListCategory_Header'> 
                        <div className='banListCategory_Descr'>
                            <p>image of limited Sign</p>
                            <h2>Limited Cards</h2>
                        </div>
                            
                        <p>Only 1 copy of each card is allowed in your deck</p>                        
                    </div>

                    {BanListNames_Array[1]}
                </div>


                {/*Semi-Limited*/}
                <div className='banListCategory'>
                    <div className='banListCategory_Header'> 
                        <div className='banListCategory_Descr'>
                            <p>image of semi-limited Sign</p>
                            <h2>Semi-Limited Cards</h2>
                        </div>

                        <p>Only 2 copy of each card is allowed in your deck</p>
                    </div>
                        
                    {BanListNames_Array[2]}
                </div>
                

                {/*Practice Section*/}

                <div className='banListCategory'>
                    <div className='banListCategory_Header'> 
                        <div className='banListCategory_Descr'>
                            <p>Test Image</p>
                            <h2>Test Section</h2>
                        </div>

                        <p>A for loop function will populate the page</p>
                    </div>
                        
                    
                    <div className='displayArrayWindow'>
                        <p> The names will be printed below </p>

                        {BanListNames_Array[2]}
                    </div>

                </div>
                

                {/*Delete Practice section when Done*/}
                
        

            </div> {/*end of the banListGallery div*/}
                
        </div> // end of the display div

    )

}

// testing if this can populate the page
nameFetchFunction(BanListNames_Array); 

export default TierListPage; // exports to App.js