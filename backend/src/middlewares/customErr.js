export const CustomError = (validator, body, res) => {
    const { errors, isValid } = validator(body);
    if (!isValid) {
        let error = Object.values(errors)[0];
        res.status(400).json({ message: error });
        return
    } else {
        return
    }
}