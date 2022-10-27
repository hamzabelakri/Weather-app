import axios from 'axios'
import {GET_DATA} from './Types'

export const getData = (location) => async (dispatch) =>{
    
 try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
  console.log(response.data)   
    dispatch({type:GET_DATA ,payload: response.data})

} catch (error) {
    console.log("no data available")
}


}

