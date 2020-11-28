import axios from 'axios';



export const createCelebrity = (data) => {

    return  axios.post("http://localhost:3000/celebrities/create",data)
}

export const getCelebrity = () => {

    return  axios.get("http://localhost:3000/celebrities")
}