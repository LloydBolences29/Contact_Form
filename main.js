function validation(){
    var fname = document.getElementById("fname").value;
    var Lname = document.getElementById("Lname").value;
    var email = document.getElementById("email").value;
    var cpNumber = document.getElementById("cpNumber").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding ="10px";
    if(fname.length <5) {
        text = "PLease Enter Valid Name"
        error_message.innerHTML = text;
        return false;
    }

    return false;

}
