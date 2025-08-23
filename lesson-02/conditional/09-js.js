let score = 80

// Case 1. if - else
if (score < 40) {
  console.log("Xếp hạng: Newbie");
} else if (score >= 40 && score < 70) {
  console.log("Xếp hạng: Intermediate");
} else if (score >= 70 && score < 90) {
  console.log("Xếp hạng: Pro");
} else {
  console.log("Xếp hạng: Legend");
}

// Case 2: switch - case
switch (true) {
  case (score < 40):
    console.log("Xếp hạng: Newbie");
    break;
  case (score >= 40 && score < 70):
    console.log("Xếp hạng: Intermediate");
    break;
  case (score >= 70 && score < 90):
    console.log("Xếp hạng: Pro");
    break;
  default:
    console.log("Xếp hạng: Legend");
}