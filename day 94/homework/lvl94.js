function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return "Yes, these numbers form a triangle.";
    } else {
        return "No, these numbers do not form a triangle.";
    }
}

console.log(isTriangle(3, 4, 5)); 
console.log(isTriangle(1, 2, 3)); 
