import axios from "axios";
import qs from 'qs'
export const FETCH_ARTICLES =  'FETCH_ARTICLES'


export const articleAction = (articles)=>{
    return{
        type:FETCH_ARTICLES,
        payload:articles
    }
}

export const fetch = () => async (dispatch) => {
    // dispatch(loading());
    try {
        const endpoint = `https://strapi.nilecapital.cc/api/articles`;
        const query = qs.stringify(
          { populate: "*" },
          { encodedValuesOnly: true }
        );
        const response = await axios.get(`${endpoint}?${query}`, {
          headers: {
            Accept: "application/json",
          },
        });
        
        const data = response.data.data;  
        // console.log(data)
         dispatch(articleAction(data))
    } catch (error) {
        console.log(error)
    }


  };