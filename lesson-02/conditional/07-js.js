let game = 'bronze'

// Case 1: if - else
if (game === "bronze") {
  console.log("Bạn đang ở cấp bậc thấp nhất!");
} else if (game === "silver") {
  console.log("Bạn đã có một số lợi ích!");
} else if (game === "gold") {
  console.log("Bạn nhận được nhiều phần thưởng hơn!");
} else if (game === "diamond") {
  console.log("Bạn thuộc top người chơi xuất sắc!");
}

// Case 2: switch - case
switch (game) {
  case "bronze":
    console.log("Bạn đang ở cấp bậc thấp nhất!");
    break;
  case "silver":
    console.log("Bạn đã có một số lợi ích!");
    break;
  case "gold":
    console.log("Bạn nhận được nhiều phần thưởng hơn!");
    break;
  case "diamond":
    console.log("Bạn thuộc top người chơi xuất sắc!");
    break;
}