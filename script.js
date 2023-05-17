console.log("hello world")
let buttons = document.querySelectorAll("button")
let head= document.querySelector("h3")
let words = document.querySelector('#word')
//console.log(Array.from(buttons[0].classList))

let data = [
    {
        id:1,
        topic:"History",
        paragraph:`
            My name is Hadaro Adams.I will 20 next week Monday 
            and i am not very happy withmy achievement at this age.I was born at
            Sunyani in the Brong Ahafo region of Ghana.
            I stayed there till i was 10 and moved to Greater Accra Region of Ghana
            to stay with my father. My mother joined us later in the year
            and we started to leave permanentely as a family. when i say us i mean my 
            parent with my two siblings.Three years after my mother game birth to my little sister Farida
            She Joined the family a lil late lol.....            `
    },
    {
        id:2,
        topic:"Vision",
        paragraph:`
            I have this Vision of having s remote Job outside the country.
            I want to be software developer and earn something to support mySelf.
            I don't really like asking and at this stage of my life,i feel
            I am supposed to be able to provide for myself. So That being said i want 
            to get be able to work to help my family with financial problems.  
        `
    },
    {
        id:3,
        topic:"Goals",
        paragraph:`
            I am a religious person a muslim to be precise so my Ultimate goal is for Allah
            to grant me Paradise. World wise i want to be a Developer.I want to work remotedly
            .....
        `
    }
]
window.addEventListener('DOMContentLoaded',()=>{
    display(data[0])
})

buttons.forEach((item)=>{
    item.onclick=()=>{
        buttons[0].classList.remove('active')
        if(Array.from(item.classList).includes("history")){
            display(data[0])
        }else if(Array.from(item.classList).includes("vision")){
            display(data[1])
        }else{
            display(data[2])
        }
    }
    
})

function display(id){
    head.innerText=id.topic
    words.innerText=id.paragraph
}