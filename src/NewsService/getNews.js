import axios from "axios";
import React from "react";

function getNews (category='General'){
    const API_Key='da382266e77243e3b969ab8afebac481';
    const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`
    
    return(axios.get(`${API_Endpoint}&apiKey=${API_Key}`))
         
}

export default getNews;