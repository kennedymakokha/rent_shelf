import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';

export const validateAreaInput = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) && data.name !== undefined ? data.name : '';
    data.town_id = !isEmpty(data.town_id) && data.town_id !== undefined ? data.town_id : '';
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name  field is required';
    }
    if (Validator.isEmpty(data.town_id)) {
        errors.town_id = 'Select A Town  for it is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
