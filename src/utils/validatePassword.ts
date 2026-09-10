const validatePassword = (password: string) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const minLength = password.length >= 6;

    if (!minLength) return "Password must be at least 6 characters long.";
    if (!hasLetter || !hasNumber) {
        return "Password must contain at least one letter and one number.";
    }
    return "";
}

export default validatePassword;