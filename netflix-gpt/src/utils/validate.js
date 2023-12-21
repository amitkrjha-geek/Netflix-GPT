export const checkValidData = (email,password) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if (!isEmailValid && !isPasswordValid) return "email and password are not valid";
    else if (!isEmailValid) return "email is not valid";
    else if (!isPasswordValid) return "password is not valid";
    return null;
   
}
