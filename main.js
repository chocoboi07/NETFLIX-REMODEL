function myfunction(){
    window.location.replace("https://www.netflix.com/in/");
}
console.log("GOKUL")


function validation(){
    var form = document.getElementById("form");
    var Email = document.getElementById("subscrib").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (Email.match(pattern)){
        form.classlist.add("valid");
        form.classlist.remove("invalid");
        text.innerHTML = "Your Email id is valid";
        text.style.color = "#00ff00";
    }
    else{
        form.classlist.remove("valid");
        form.classlist.add("invalid");
        text.innerHTML = "please enter correct Email"
        text.style.color = "#00ff00"
    }


}