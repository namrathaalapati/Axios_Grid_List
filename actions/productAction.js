import axios from 'axios';
import {APP_CONSTANTS} from '../constants/appConstants';

export function GetProductDetails(){
  const getProductDetails = axios({
        method: 'get',
        url: APP_CONSTANTS.API_URL,
        responseType: 'json'
    });
      return(dispatch) => {
          return getProductDetails.then(({ data }) => {
              dispatch({type: APP_CONSTANTS.GET_DETAILS, payload: data});
          }).catch(error => {
              dispatch({type: APP_CONSTANTS.ERROR , errorMessage: error});
          });
      }
  }
