let customer = {
    firstName: "John",
    lastName: "porck",
    email: "john.porck@example.com",
    
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
  
    updateEmail: function(newEmail) {
      this.email = newEmail;
    }
  };
  
  console.log(customer.fullName());
  customer.updateEmail("email@example.com");
  console.log(customer.email);
  