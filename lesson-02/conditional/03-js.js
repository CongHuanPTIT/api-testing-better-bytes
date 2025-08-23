let plan = 'netflix'

// Case 1: if - else
if (plan === "netflix") {
  console.log("Bạn có thể xem 'Stranger Things'!");
} else if (plan === "disney+") {
  console.log("Thử ngay 'Loki' trên Disney+!");
} else if (plan === "hbo") {
  console.log("Xem 'Game of Thrones' ngay nào!");
} else if (plan === "prime") {
  console.log("Bạn có thể xem 'The Boys'!");
}

// Case 2: switch - case
switch (plan) {
  case "netflix":
    console.log("Bạn có thể xem 'Stranger Things'!");
    break;
  case "disney+":
    console.log("Thử ngay 'Loki' trên Disney+!");
    break;
  case "hbo":
    console.log("Xem 'Game of Thrones' ngay nào!");
    break;
  case "prime":
    console.log("Bạn có thể xem 'The Boys'!");
    break;
}