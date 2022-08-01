let myArr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  divOfBlocks = "",
  mySection = document.querySelector("section"),
  myBtn = document.createElement("button"),
  myTable = document.createElement("table");

for (let i = 0; i < myArr.length; i++) {
  divOfBlocks += `
     <tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     </tr>`;
}

myBtn.innerHTML = "START";

myTable.innerHTML = divOfBlocks;
mySection.appendChild(myTable);
mySection.appendChild(myBtn);
const myArrCount = myArr.reduce(
  (currentCount, row) => currentCount + row.length,
  0
);

let myBlocks = document.getElementsByTagName("td");

function randomNumGen() {
  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * myArrCount);
    if (randomNum < 5) {
      myArr[0][randomNum] = 1;
    } else if (randomNum >= 5 && randomNum < 10) {
      randomNum -= 5;
      myArr[1][randomNum] = 1;
    } else if (randomNum >= 10 && randomNum < 15) {
      randomNum -= 10;
      myArr[2][randomNum] = 1;
    } else if (randomNum >= 15 && randomNum < 20) {
      randomNum -= 15;
      myArr[3][randomNum] = 1;
    } else {
      randomNum -= 20;
      myArr[4][randomNum] = 1;
    }
  }
  yellowBlocks();
  console.log("event happened");
  myBtn.removeEventListener("click", randomNumGen);
}

myBtn.addEventListener("click", randomNumGen);

function yellowBlocks() {
  let myNum = 0;
  for (let i = 0; i < myArr.length; i++) {
    for (let a = 0; a < myArr[i].length; a++) {
      if (myArr[i][a] === 1) {
        myBlocks[myNum].style.backgroundColor = "yellow";
      }
      myNum++;
    }
  }
  myNum = 0;
  setTimeout(() => {
    for (let i = 0; i < myArr.length; i++) {
      for (let a = 0; a < myArr[i].length; a++) {
        if (myArr[i][a] === 1) {
          myBlocks[myNum].style.backgroundColor = "white";
        }
        myNum++;
      }
    }
  }, "1000");
}
