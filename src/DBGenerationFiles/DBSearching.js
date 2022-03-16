//This uses the BanListNames_Array Information to search in the API

import './BanListNames_Array.js';


function nameFetchFunction (arrayInput) {
    console.log('The length of your array');
    console.log(arrayInput.length); 
    console.log('Hello from the other JS file');

}

export {nameFetchFunction} // it is not imported by the other pages yet