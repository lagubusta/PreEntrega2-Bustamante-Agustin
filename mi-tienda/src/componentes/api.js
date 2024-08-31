import axios from "axios";

const searchImagenes = async (term)=>{
    const response = await  axios.get("https://api.unsplash.com/search/photos", {
        headers:{
            Authorization: "Client-ID iWe33-MjV100ARLjQ1_uEiaVgCwKpH9VNFE9TUOYwLw"
        },
        params: {
            query: term
        }
    });
    return response.data.results
};

export default searchImagenes;


/*
KEY:
iWe33-MjV100ARLjQ1_uEiaVgCwKpH9VNFE9TUOYwLw

200 - OK	Everything worked as expected
400 - Bad Request	The request was unacceptable, often due to missing a required parameter
401 - Unauthorized	Invalid Access Token
403 - Forbidden	Missing permissions to perform request
404 - Not Found	The requested resource doesn’t exist
500, 503	Something went wrong on our end

*/