// `innerHTML` გამოიყენება ელემენტის შიგთავსში HTML კოდის ჩასაწერად ან წასაკითხად.
// ის აღიქვამს HTML ტეგებს და მათ სწორად გამოაქვს ბრაუზერში.

// `innerText` გამოიყენება მხოლოდ ტექსტის ჩასაწერად ან წასაკითხად.
// ის არ აღიქვამს HTML ტეგებს და მათ ჩვეულებრივ ტექსტად აჩვენებს.

// `innerHTML`-ის გამოყენება საშუალებას გვაძლევს შევცვალოთ ელემენტის HTML სტრუქტურა,
// ხოლო `innerText` უბრალოდ ცვლის შიგთავსის ტექსტს.

// უსაფრთხოების მხრივ, `innerText` უფრო დაცულია, რადგან არ იძლევა 
// HTML კოდის ჩასმას, რაც თავიდან აგვაცილებს XSS შეტევებს.

document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementById("title");

    let paragraphs = document.getElementsByClassName("text");

    let divs = document.get
    document.getElementById("btn").addEventListener("click", function () {
        title.innerText = "Updated Title using getElementById";

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerText += " (Updated using getElementsByClassName)";
        }

        for (let i = 0; i < divs.length; i++) {
            divs[i].innerHTML = `<strong>Modified Div ${i + 1}</strong>`;
        }

        title.innerHTML = "<u>Title with underline</u>";

        title.innerText = "Final Title using innerText";

        title.style.color = "green";
        title.style.fontSize = "24px";

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.color = "red";
        }

        for (let i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = "lightgray";
        }
    });
});