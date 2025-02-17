const num = [
    25,
    "hello",
    2,5,
    true,
    {
      name: "nika",
      surname: "soselia",
      age: 15,
      country: "georgia",
      city: "ristavi"
    }
  ];
  
  const person = num[4];
  const sentence = "my name is " + person.name + ", my surname is " + person.surname + ", im " + person.age + " years old, i live in " + person.country + ",in city " + person.city;
  
  console.log(sentence);
  