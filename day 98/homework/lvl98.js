function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
        console.log("Password changed successfully!");
    };

    this.getDetails = function() {
        return "Username: " + this.username + ", Email: " + this.email;
    };
}

let user1 = new User("john_porck", "john@example.com", "passord");
let user2 = new User("Jenny_jandjafili", "jenny@example.com", "password1");

console.log(user1.getDetails());
user1.changePassword("newpassword");

console.log(user2.getDetails());
user2.changePassword("newPassword1");
