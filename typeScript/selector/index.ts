const tag: HTMLElement = document.getElementById("highlight");
const tags: HTMLCollectionOf<Element> = document.getElementsByClassName("bolded");
const tagName: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("li");
const tagCss: Element = document.querySelector("#highlight");
const tagFirst: Element = document.querySelector(".bolded");
const h1First: HTMLHeadingElement = document.querySelector("h1");
const li: Element = document.querySelector("li a.special");
const all: NodeListOf<HTMLHeadingElement> = document.querySelectorAll("h1");
const all2: NodeListOf<Element> = document.querySelectorAll(".bolded");

console.log(tag);
console.dir(tag);
console.log(tags);
console.dir(tags);
console.log(tagName);
console.dir(tagName);
console.log(tagCss);
console.dir(tagCss);
console.log(tagFirst);
console.dir(tagFirst);
console.log(h1First);
console.dir(h1First);
console.log(li);
console.dir(li);
console.log(all);
console.dir(all);
console.log(all2);
console.dir(all2);
