export class User {

    constructor(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    get id() {
        return this.id;
    }

    get username() {
        return this.username;
    }

    get password() {
        return this.password;
    }

    get email() {
        return this.email;
    }
    
}