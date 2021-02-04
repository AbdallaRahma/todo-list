const task = document.getElementById("task");

const inter = document.getElementById("inter");

const list = document.getElementById("list");

inter.addEventListener("click",() => {
    if(task.value !== ""){
        let mission = document.createElement("li");

        mission.classList.add("input");
 
        let tas = document.createTextNode(task.value);

        mission.appendChild(tas);

        list.appendChild(mission);

        task.value = "";

        task.placeholder = "inter your task";
    }
})