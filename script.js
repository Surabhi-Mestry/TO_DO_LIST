const tasks = document.getElementsByClassName("tasks")[0];
const inptxt = document.getElementById("inptxt");
const trash = document.getElementById("trash");

inptxt.addEventListener("keydown",function(event){
    if(event.key === 'Enter')
    {
        addtask();
    }
})
function addtask(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var check = document.createElement("i");
    var trash= document.createElement("i");
    
    divParent.className = "item";
    divParent.innerHTML = '<div id="strike">'+inptxt.value+'</div>'

    check.className = "fa-solid fa-check";
    check.style.color = "black";
    check.addEventListener("click", function(){
        check.style.color = "limegreen";
        let text = document.getElementById("strike").innerHTML;
        
        document.getElementById("strike").innerHTML = "<strike>"+text+"</strike>";
    })

    divChild.appendChild(check);

    trash.className = "fa-solid fa-trash";
    trash.style.color = "black";
    trash.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trash);

    divParent.appendChild(divChild);

    tasks.appendChild(divParent);

    inptxt.value='';
}