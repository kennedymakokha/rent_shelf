import Validator from 'validator';
import isEmpty from './utils/isEmpty.js';
import { NumericalExists, isSpecial } from './utils/passwordValid.js';

export const validateUserInput = (data) => {

    let errors = {};
    data.name = !isEmpty(data.name) && data.name !== undefined ? data.name : '';
    data.phone = !isEmpty(data.phone) && data.phone !== undefined ? data.phone : '';
    data.ID_no = !isEmpty(data.ID_no) && data.ID_no !== undefined ? data.ID_no : '';
    data.role = !isEmpty(data.role) && data.role !== undefined ? data.role : '';
    data.password = !isEmpty(data.password) && data.password !== undefined ? data.password : '';
    data.confirm_password = !isEmpty(data.confirm_password) && data.confirm_password !== undefined ? data.confirm_password : '';
    if (Validator.isEmpty(data.name)) {

        errors.name = 'Name  field is required';
    }
    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone Number is required';
    }
    // if (Validator.isEmpty(data.ID_no)) {
    //     errors.ID_no = 'ID Number is required';
    // }
    // if (Validator.isEmpty(data.ID_no)) {
    //     errors.ID_no = 'ID Number is required';
    // }
    // if (Validator.isEmpty(data.role)) {
    //     errors.role = 'Role is required';
    // }
    // if (Validator.isEmpty(data.role)) {
    //     errors.role = 'Role is required';
    // }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    // if (!Validator.isLength(data.ID_no, { min: 8, })) {
    //     errors.ID_no = 'Identification No must be at least 6 characters';
    // }
    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = 'Password must be more than 8 characters long';
    }
    if (!NumericalExists(data.password)) {
        errors.password = 'Password Must have at least one Numerical value';
    }
    if (!isSpecial(data.password)) {
        errors.password = 'Password Must contain at least one special characters  ';
    }

    if (!Validator.isLength(data.phone, { min: 10, max: 14 })) {
        errors.phone = 'phone Number  must have at least  10 characters ';
    }
    if (data.password !== data.confirm_password) {
        errors.new_password = 'Password Mismatch    ';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
export const validatepassInput = (data) => {

    let errors = {};
    data.code = !isEmpty(data.code) && data.code !== undefined ? data.code : '';
    data.password = !isEmpty(data.password) && data.password !== undefined ? data.password : '';
    data.confirm_password = !isEmpty(data.confirm_password) && data.confirm_password !== undefined ? data.confirm_password : '';

    if (Validator.isEmpty(data.code)) {
        errors.code = 'code is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
  
    if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = 'Password must be more than 8 characters long';
    }
    if (!NumericalExists(data.password)) {
        errors.password = 'Password Must have at least one Numerical value';
    }
    if (!isSpecial(data.password)) {
        errors.password = 'Password Must contain at least one special characters  ';
    }

    
    if (data.password !== data.confirm_password) {
        errors.new_password = 'Password Mismatch    ';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
