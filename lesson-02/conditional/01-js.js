let res = 'win'

// Case 1: if - else
if (res === "win") {
  console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
} else if (res === "draw") {
  console.log("Trận đấu hòa, thật đáng tiếc!");
} else if (res === "lose") {
  console.log("Thua rồi, nhưng đừng bỏ cuộc!");
}

// Case 2: switch - case
switch (res) {
  case "win":
    console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
    break;
  case "draw":
    console.log("Trận đấu hòa, thật đáng tiếc!");
    break;
  case "lose":
    console.log("Thua rồi, nhưng đừng bỏ cuộc!");
    break;
}