import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';

export const validateCategoryInput = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) && data.name !== undefined ? data.name : '';
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name  field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export const validateSubCategoryInput = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) && data.name !== undefined ? data.name : '';
    data.category_id = !isEmpty(data.category_id) && data.category_id !== undefined ? data.category_id : '';
    if (Validator.isEmpty(data.category_id)) {
        errors.category_id = 'Select a category ';
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name  field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
