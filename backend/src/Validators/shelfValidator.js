import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';

export const validateShelfInput = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) && data.name !== undefined ? data.name : '';
    data.area_id = !isEmpty(data.area_id) && data.area_id !== undefined ? data.area_id : '';
    data.town_id = !isEmpty(data.town_id) && data.town_id !== undefined ? data.town_id : '';
    data.type_id = !isEmpty(data.type_id) && data.type_id !== undefined ? data.type_id : '';
    data.price = !isEmpty(data.price) && data.price !== undefined ? data.price : '';


    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name  field is required';
    }
    if (Validator.isEmpty(data.price)) {
        errors.price = 'Price  field is required';
    }
    if (Validator.isEmpty(data.town_id)) {
        errors.town_id = 'Select A Town  for it is required';
    }
    if (Validator.isEmpty(data.type_id)) {
        errors.type_id = 'Select At least one type  for it is required';
    }
    if (Validator.isEmpty(data.area_id)) {
        errors.area_id = 'Select A Town  for it is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
