let pack = 'free'

// Case 1. if - else
if (pack === "free") {
  console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
} else if (pack === "premium") {
  console.log("Không quảng cáo, nghe nhạc offline!");
} else if (pack === "family") {
  console.log("Gói dùng cho nhiều thành viên!");
} else if (pack === "student") {
  console.log("Ưu đãi dành riêng cho sinh viên!");
}

// Case 2. switch - case
switch (pack) {
  case "free":
    console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
    break;
  case "premium":
    console.log("Không quảng cáo, nghe nhạc offline!");
    break;
  case "family":
    console.log("Gói dùng cho nhiều thành viên!");
    break;
  case "student":
    console.log("Ưu đãi dành riêng cho sinh viên!");
    break;
}