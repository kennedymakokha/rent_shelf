import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';

export const validateRoleInput = (data) => {
    let errors = {};
    data.name = !isEmpty(data.name) && data.name !== undefined ? data.name : '';
    data.display_name = !isEmpty(data.display_name) && data.display_name !== undefined ? data.display_name : '';
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name  field is required';
    }
    if (Validator.isEmpty(data.display_name)) {
        errors.display_name = 'Display name is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
