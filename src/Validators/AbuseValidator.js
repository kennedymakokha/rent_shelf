import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';

export const validateAbuseInput = (data) => {
   
    let errors = {};
    data.claim = !isEmpty(data.claim) && data.claim !== undefined ? data.claim : '';
    if (Validator.isEmpty(data.claim)) {
        errors.claim = 'Kindly fill your claim';
    }
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
