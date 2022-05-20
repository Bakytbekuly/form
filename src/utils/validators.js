export function required(message) {
    return message || "Обязательное поле";
}

export function validatePassword(value) {
    if (value.length < 8) return "Minimum 8 symbols";
}

export function validateCPassword(password) {
    return function (value) {
        if (value !== password) {
            return "Passwords are not same";
        }
    };
}


export function validateEmail(email) {
    let validEmail = JSON.parse(localStorage.getItem('users_list'))
    if (validEmail) {
        return function (email) {
            for (let i = 0; i < validEmail.length; i++) {
                if (validEmail[i].email == email) {
                    return "Пользователь с таким email уже существует"
                }
            }
        }
    }
}


export function authValid(values) {

    let valid = JSON.parse(localStorage.getItem('users_list'))
    if (valid) {
        {
            for (let i = 0; i < valid.length; i++) {
                if (valid[i].email == values.email) {
                    console.log(1);
                    if (valid[i].lastName == values.lastName && valid[i].password == values.password) {
                        return true
                    }

                }

            }
        }
    }
}

