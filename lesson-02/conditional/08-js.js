let vehicle = 'car'

// Case 1: if - else
if (vehicle === "bike") {
  console.log("Mất khoảng 15 phút");
} else if (vehicle === "car") {
  console.log("Mất khoảng 10 phút");
} else if (vehicle === "bus") {
  console.log("Mất khoảng 30 phút");
} else if (vehicle === "train") {
  console.log("Mất khoảng 45 phút");
}

// Case 2: switch - case
switch (vehicle) {
  case "bike":
    console.log("Mất khoảng 15 phút");
    break;
  case "car":
    console.log("Mất khoảng 10 phút");
    break;
  case "bus":
    console.log("Mất khoảng 30 phút");
    break;
  case "train":
    console.log("Mất khoảng 45 phút");
    break;
}