import axios from "axios";
async function getInformation(){
    console.log('Downloading..............');
    const data = await axios.get('https://api.github.com/users/arthur-Farous');
    console.log(data);
}

getInformation();