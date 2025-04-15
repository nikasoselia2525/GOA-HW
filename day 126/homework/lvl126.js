const name = "nika";
const age = 16;

const user = {
  name,
  age
};

console.log(user);

// ====================================================================================

const user1 = {
    greet() {
      return "Hello!";
    }
  };
  
  console.log(user1.greet());
  
// ====================================================================================

const key = "score";

const result = {
  [key]: 95
};

console.log(result);

// ====================================================================================

const field = "email";
const value = "user2525@gmail.com";

const data = {
  [field]: value,
  status: "active"
};

console.log(data);

// ====================================================================================

const id = 101;
const productName = "Laptop";

const product = {
  id,
  productName,
  details: {
    price: 2200,
    available() {
      return true;
    }
  }
};

console.log(product.details.available());



