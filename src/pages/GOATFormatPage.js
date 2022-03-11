import React, { useState, useEffect } from 'react';

import '../App.css';

// import booster art Images 
import LOB from '../BoosterSets/00_LOB/Legend of Blue Eyes White Dragon (LOB).png';
import TriHornedDragon from '../BoosterSets/00_LOB/Monsters/TriHornedDragon.png';
import BlueEyesWhiteDragon from '../BoosterSets/00_LOB/Monsters/BlueEyesWhiteDragon.png';


function GOATFormatPage () {

    return(
        <div>
            <div className = 'introductionGOAT'>
                <h1> Do you like sheep? </h1>
                <p> Do you want to get Nostaligic? </p>
            </div>


            <div className = 'forbiddenGOAT'>
                <h2> Forbidden/Banned </h2>


            </div>


            <div className = 'legalGOAT'>
                <h2> Legal Sets </h2>

                <h3> Proof of Concept </h3>

                <section className='boosterPack' id='LOB'>
                    
                    <div className='boosterInfo'>
                        <h1> Legend of Blue Eyes White Dragon (LOB) </h1>
                        <h1> came out March 8, 2002 </h1>
                        <img src={LOB}></img>
                    </div>
                    
                    <div className='monster'>
                        <img src={TriHornedDragon}></img>
                        <div>
                            Dark   
                            Normal
                            Dragon
                            Level 8 
                            2850 / 2350
                            "An unworthy dragon with three sharp horns sprouting from its head."
                        </div>

                    </div>


                    <div className='monster'>
                        <img src={BlueEyesWhiteDragon}></img>
                        <div>
                            Light   
                            Normal
                            Dragon
                            Level 8 
                            3000 / 2500
                            "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
                        </div>

                    </div>



                </section>


            </div>

        </div>

    );
}


export default GOATFormatPage; // I will export to App.js


/*Legal Sets: 

Legend of Blue Eyes White Dragon (LOB), 
Yugi and Kaiba Starter Decks (SDY/SDK), 
Metal Raiders (MRD), Magic/Spell Ruler (MRL/SRL), 
Pharaoh's Servant (PSV), 
Joey and Pegasus Starter Decks (SDJ/SDP), 
Labyrinth of Nightmare (LON), 
Legacy of Darkness (LOD), 
Pharaonic Guardian (PGD), 
Magician's Force (MFC), 
Dark Crisis (DCR), 
Yugi and Kaiba Evolution Decks (SYE/SKE), 
Invasion of Chaos (IOC), 
Ancient Sanctuary (AST), 
Soul of the Duelist (SOD), 
Dark Beginning 1 (DB1), 
Rise of Destiny (RDS), 
Flaming Eternity (FET), 
Dark Revelation 1 (DR1), 
The Lost Millennium (TLM), 
Dragon’s Roar (SD1), 
Zombie Madness (SD2), 
Blaze of Destruction (SD3), 
Fury from the Deep (SD4), 
Dark Beginning 2 (DB2). 

*/
