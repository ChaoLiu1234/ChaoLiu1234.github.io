function education(evt, diploma) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("card text-white bg-info mb-3");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btn btn-light");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(diploma).style.display = "block";
    evt.currentTarget.className += " active";
};

function validateSubmit(fram){
  
    if (fram.Name.value.trim().length == 0) {
        alert("Please enter all information as required !\n");
        fram.Name.value = "";
        fram.Name.focus();
        return false;
    }
    if (fram.address.value.trim().length == 0) {
        alert("Please enter all information as required !\n");
        fram.address.value = "";
        fram.address.focus();
        return false;
    }
    if (fram.city.value.trim().length == 0) {
        alert("Please enter all information as required !\n");
        fram.city.value = "";
        fram.city.focus();
        return false;
    }
       
    return true;
};
function createTextArea(){
    var postion = document.getElementById("Actions");
    postion.innerHTML="";
    var label = document.createElement("label");
    label.for = "message";
    label.className = "form-label mt-4";
    label.appendChild(document.createTextNode("Tell me something:"));
    var textarea = document.createElement("textarea");
    textarea.name = "Message";
    textarea.id = "message";
    textarea.rows = "3";
    textarea.className = "form-control";
    textarea.required = true;
    postion.appendChild(label);
    postion.appendChild(textarea);
}

function createNumArea(){
    var postion = document.getElementById("Actions");
    postion.innerHTML="";
    var label = document.createElement("label");
    label.for = "salary";
    label.className = "form-label mt-4";
    label.appendChild(document.createTextNode("Hourly Rate:"));
    var textarea = document.createElement("input");
    textarea.type = "number";
    textarea.id = "salary";
    textarea.min = "15";
    textarea.className = "form-control";
    textarea.required = true;
    postion.appendChild(label);
    postion.appendChild(textarea);
}

window.onload = function(){
    document.getElementById("comment").onclick = function(){
        createTextArea();
    }
    document.getElementById("question").onclick = function(){
        createTextArea();
    }
    document.getElementById("hiring").onclick = function(){
        createNumArea();
    }
};