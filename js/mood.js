const moodBtn = document.getElementById("mood");

const icon = document.getElementById("icon");

const header = document.getElementById("header");

const input = document.getElementsByClassName("input");

moodBtn.addEventListener("click",() => {
    if(icon.getAttribute("src") == "/images/icon-moon.svg"){
        icon.setAttribute("src","/images/icon-sun.svg");
        header.setAttribute('style', 'background-image: url("/images/bg-desktop-dark.jpg");');
        document.body.setAttribute('style', 'background-color: rgb(10, 12, 20);');
        for(let i = 0;i < input.length;i++){
        input[i].setAttribute('style', 'background-color: rgb(143, 98, 198);');
        }
    }
    else{
        icon.setAttribute("src","/images/icon-moon.svg");
        header.setAttribute('style', 'background-image: url("/images/bg-desktop-light.jpg");');
        document.body.setAttribute('style', 'background-color: rgb(219, 220, 223);');
        for(let i = 0;i < input.length;i++){
            input[i].setAttribute('style', 'background-color: #fff;');
        }

    }

})