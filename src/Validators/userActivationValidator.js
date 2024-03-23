import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';

export const validateActivationInput = (data) => {
    let errors = {};
    data.code = !isEmpty(data.code) && data.code !== undefined ? data.code : '';

    if (Validator.isEmpty(data.name)) {
        errors.code = 'Code  field is required';
    }
   
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
