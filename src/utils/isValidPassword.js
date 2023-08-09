/**
 * Test if given `password` is valid
 *
 * @param {string} - password from user
 * @return {boolean} - validity of `password`
 */

function isValidPassword(password) {
    if (typeof password !== 'string') {
        return false;
    }

    if (password.length < 8 || password.length > 50) {
        return false;
    }

    const checkContainsUpperCase = /[A-Z]/.test(password);
    const checkContainsLowerCase = /[a-z]/.test(password);
    const checkContainsDigit = /\d/.test(password);
    const checkContainsSpecialChar = /[~!@#$%^&*_\-+=`|(){}[\]:;"'<>,.?/]/.test(
        password
    );

    if (
        !(
            checkContainsUpperCase &&
            checkContainsLowerCase &&
            checkContainsDigit &&
            checkContainsSpecialChar
        )
    ) {
        return false;
    }

    const threeOrMoreRepeat = /(.)\1{2,}/.test(password);

    const whiteSpace = /[\s]/.test(password);

    if (threeOrMoreRepeat || whiteSpace) {
        return false;
    }

    return true;
}

module.exports = { isValidPassword };
