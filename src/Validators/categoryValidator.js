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
