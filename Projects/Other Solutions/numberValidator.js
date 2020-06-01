function hasLength(str) {
    if (str[0] == '-') {
        return false
    }
    let parsedStr = str.replace(/\W+/g, '')
    if (parsedStr.length == 11 && parsedStr[0] == 1) {
        return true
    } else if (parsedStr.length == 10) {
        return true
    }
    return false
}
function hasSpecialChar(str) {
    let pattern = /[`!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?~]/gi
    return pattern.test(str)
}
function bracketCheck(str) {
    let hasBrackets = false
    let brackets = 0
    if (str[0] === '(' && str[str.length - 1] === ')') {
        return false
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            brackets += 1
        } else if (str[i] == ')') {
            hasBrackets = false
            brackets -= 1
        }
    }
    return brackets == 0 ? true : false
}

function telephoneCheck(str) {
    let removeStr = str.replace(/[(|)|-]/gi, '').replace(/\s+/, '')
    if (hasLength(str) && !hasSpecialChar(removeStr) && bracketCheck(str)) {
        return true
    }
    return false
}

console.log(telephoneCheck('1 555-555-5555'))
