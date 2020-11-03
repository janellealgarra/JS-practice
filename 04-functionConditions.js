function ageIndicator(age){
  if (age >= 1 && age <= 12){
    return "your age, " + age + ", means you're a kid!";
  } else if (age > 12 && age <= 19){
    return "your age, " + age + ", means you're a teen!";
  } else if (age > 19 && age <= 39) {
    return "your age, " + age + ", means you're an adult.";
  } else if (age >= 40 && age <= 99) {
    return age + "... age is just a number but in your case, a BIG one.";
  } else {
    return age + "...you might die really soon but it's cool that you're still alive though congrats!"
  }
}

console.log(ageIndicator(10));
console.log(ageIndicator(19));
console.log(ageIndicator(25));
console.log(ageIndicator(40));
console.log(ageIndicator(110));
