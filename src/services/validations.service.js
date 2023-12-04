const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidMobile = mobile => {
    let regex = /([0-9]){10}$/;
    return regex.test(mobile)
}
const isValidPassword = password => {
    console.log('password', password)
    let regex =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return regex.test(password)
}
const isUserName = username => {
        const regex = /^[A-Za-z][A-Za-z0-9]{3,9}$/;
        return regex.test(username)  
}
const alphabateOnly = event => {
    let regex = /(?=.*[a-z])(?=.*[A-Z])$/;
    return regex.test(event)
}
const numberAndCharchter = event => {
    const regex = /^[a-zA-Z0-9_.-]*$/;
    return regex.test(event)  
}
export {
    isValidMobile,
    isValidEmail,
    isValidPassword,
    isUserName,
    alphabateOnly,
    numberAndCharchter
}