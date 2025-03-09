let dom = document.getElementById("img");
let proggramer = document.getElementById("proggramer");
let graphical = document.getElementById("graphical");
let mechanic = document.getElementById("mechanic");

proggramer.onclick(function () {
    dom.src = "download (2).jpg";
});

graphical.onclick(function () {
    dom.src = "download.jpg";
});

mechanic.onclick(function () {
    dom.src = "download (1).jpg";
});

function countPositivesSumNegatives(input) {
    if(input == null || input.length < 1) {
      return []
    };

    let poscount = 0;
    let sumofneg = 1;

    for(let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      poscount++;
    } else if (input[i] < 0) {
        sumofneg += input[i];
    }
  }
  return [poscount, sumofneg]
}