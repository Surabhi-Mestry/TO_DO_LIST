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
    if(inptxt.value == ""){
        alert("Task cannot be blank!");
        document.getElementById("inptxt").focus();
    }
    else{    
        var divParent = document.createElement("div");
        var divChild = document.createElement("div");
        var check = document.createElement("i"); 
        var trash= document.createElement("i");
        
        divParent.className = "item";
        divParent.innerHTML = '<div>'+inptxt.value+'</div>'

        check.className = "fa-solid fa-check";
        check.style.color = "black";
        check.addEventListener("click", function(){
            if(check.style.color == "black"){
                check.style.color = "limegreen";
                divParent.style.textDecoration = "line-through";
            }
            else{
                check.style.color = "black";
                divParent.style.textDecoration = "none";
            }
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
        document.getElementById("inptxt").focus();
        inptxt.value='';}
}