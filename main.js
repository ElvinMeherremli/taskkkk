class Human {
    constructor (Name, Surname, Age = 0, gender,nationality) {
        this.Name = Name
        this.Surname = Surname
        this.Age = Age
        this.gender=gender
        this.nationality=nationality
    }
    getFullName() {
        return this.Name + ' ' + this.Surname
    }
    getBirthYear() {
        let currentYear = new Date().getFullYear()
        return currentYear - this.Age
    }
}

const hum1 = new Human('Elvin', 'Meherremli', 19, 'male', 'azer')
console.log(hum1.getBirthYear());

class User extends Human {
    constructor (Name, Surname, Age, gender,nationality, Username, Email, isAdmin, isLogged = false, password, bio){
        super(Name, Surname, Age, gender,nationality)
        this.Username = Username
        this.Email = Email
        this.isAdmin = isAdmin
        this.isLogged = isLogged
        if (password && password.length >= 5) {
            this.password = password;
        } else {
            console.error('Password should be at least 5.');
        }
        if (bio && bio.length >= 30) {
            this.bio = bio
        } else {
            console.error('Bio should be at least 30.');
        }
    }
    changePassword(currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (newPassword.length >= 5) {
                this.password = newPassword;
                console.log('changed');
            } else {
                console.error('New password should be at least 5.');
            }
        } else {
            console.error('Incorrect.');
        }
    }
    changeEmail(usersArray, newEmail) {
        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i] === newEmail) {
                this.Email = newEmail
            } else {
                alert('not uniq')
            }
        }
    }
}


const user1 = new User('elvin', 'mehe', 19, 'male', 'aze', 'a', 'e@m.com', true, false, 'elv292', 'qhiohqwoiruhqwoiruhqowiqwoieurhqo')
const user2 = new User('elvin', 'mehe', 3, 'male', 'aze', 'd', 'e@m.com', true, false, 'elv292', 'qhiohqwoiruhqwoiruhqowiqwoieurhqo')
const user3 = new User('elvin', 'mehe', 5, 'male', 'aze', 'f', 'e@m.com', true, false, 'elv292', 'qhiohqwoiruhqwoiruhqowiqwoieurhqo')
const user4 = new User('elvin', 'mehe', 14, 'male', 'aze', 'b', 'e@m.com', true, false, 'elv292', 'qhiohqwoiruhqwoiruhqowiqwoieurhqo')
console.log(user1);
let userArr = [user1, user2, user3, user4]

function sortUsersByUsername(array) {
    let c = array.sort((a,b) => a.Username - b.Username)
    return c
}

function filterByBirthYear(arr, year) {  
    let c =  arr.filter ((elem) => elem.Age > year)
    return c
}
console.log(filterByBirthYear(userArr, 4));

// function login(arr, userName, pass) {
//     if (arr.find((elem) => userName)) {
        
//     }
// }