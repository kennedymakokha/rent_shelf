const Format_phone_number = (phone_number) => {
    try {

        let Refined
        if (phone_number.charAt(0) === "0") {

            let newPhone = phone_number.slice(1);
            Refined = "+254".concat(newPhone)
            console.log("RED",phone_number)
            return Refined
        }
        else if (phone_number.substring(0, 4) === "+254") {
            return phone_number
        }
    } catch (error) {
        console.log(error)
    }

}
const Inv_Format_phone_number = (phone_number) => {
    let Refined
    phone_number.substring(0, 3) === "254"
    let newPhone = phone_number.slice(0, 4);
    Refined = "0".concat(newPhone)
    return Refined


}
export default Format_phone_number