// 选定所有translate class 对象
const translate = document.querySelectorAll(".translate");//返回集合 return a NodeList containing all of the matching Element
const big_title = document.querySelector(".big-title");//返回第一个搜索到的对象 return the first matching Element node within the node’s subtrees
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow")
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border")
//offsetHeight = height + border + padding + horizontal scrollbar  
let header_height = header.offsetHeight;
//offsetWidth = width + border + padding + vertical scrollbar  
let section_height = section.offsetHeight
console.log(section_height);
window.addEventListener('scroll', ()=>{
    // get the number of pixels by which we scrolled upward everytime we scroll the page,
    // and we'll place it in a variable called "scroll"
    let scroll = window.pageYOffset;
    console.log(scroll);
    // as we scroll the page, we need to get the top position of the section relative to the viewport
    let sectionY = section.getBoundingClientRect();
    // console.log(sectionY.top);
    // for each element, we need to get the value of the attribute "data-speed"
    translate.forEach(element =>{
        let speed = element.dataset.speed;
        // move each element based on the result of multplying scroll value by speed value
        element.style.transform = `translateY(${scroll * speed}px)`;  
    });
    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    // set opacity value base on the scroll value and header_height
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
    //set the value of translateY between 0 and -50 based on the value of scroll
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
    // extend border width based on the value of scroll
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})