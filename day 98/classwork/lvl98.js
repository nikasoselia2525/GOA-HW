function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  
    this.introduce = function() {
      return "ჩემის სახელია " + this.name + ", ჩემი გვარია " + this.lastName + ", ჩემი ტელეფონი არის " + this.phoneNumber + ", ჩემი ელ-ფოსტა არის " + this.email + ".";
    }
  }
  
  const user1 = new User("გიორგი", "გურაბანიძე", "599123456", "giorgi@gmail.com", "password", "password");
  const user2 = new User("მარიამ", "კასრაძე", "599654321", "mariam@gmail.com", "password1", "password1");
  const user3 = new User("ლაშა", "სარალიძე", "599987654", "lasha@gmail.com", "password2", "password2");
  
  console.log(user1.introduce());
  console.log(user2.introduce());
  console.log(user3.introduce());
  