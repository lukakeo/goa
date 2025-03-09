let p = document.createElement("p");
p.textContent = "This is a paragraph.";
document.body.appendChild(p);

let h2 = document.createElement("h2");
h2.textContent = "Subheading";
document.body.appendChild(h2);
h2.textContent = "Updated Subheading";

let div = document.createElement("div");
div.textContent = "This is a div.";
document.body.appendChild(div);
document.body.removeChild(div);

let ul = document.createElement("ul");
let items = ["Item 1", "Item 2", "Item 3"];
for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

let h3 = document.createElement("h3");
h3.textContent = "Inserted Heading";
document.body.insertBefore(h3, document.body.firstChild);

let span = document.createElement("span");
span.textContent = "This is a span.";
let container = document.getElementById("container");
if (container) {
    container.appendChild(span);
    console.log(span.parentElement);
}