document.addEventListener("DOMContentLoaded", function() {
  var submitbtn = document.getElementById("submit1");
  var submitbtn02 = document.getElementById("submit02");
  var cancelbtn = document.getElementById("cancel1");
  var blurdivId = document.getElementById("blurdiv");
  var container01 = document.getElementById("container");
  var Email01 = document.getElementById("email02").value;
  var h3element = document.getElementById("details01");
  var drop = document.getElementById("dropdown01");
  
  submitbtn.addEventListener("click", blurout);
  cancelbtn.addEventListener("click", cancel);
  submitbtn02.addEventListener("click", sendEmail);
  function blurout() {
      var name = document.getElementById("name");
      var name1 = name.value.split(" ");
      var capital = capitalize(name1[0]);
      if (name.value ===""){
        alert("Please enter a name");
      }else{
          blurdivId.style.opacity = "1";
          container01.style.display = "none";
        
          // if (drop.value === "Miss") {
          //     h3element.innerHTML = drop.value + " " + capital + ", " + "How may we be of service?";
          // } else {
          //     h3element.innerHTML = drop.value +  capital + ", " + "How may we be of service?";
          // }
      }
      
  }
  function cancel(){
    window.history.back();
  }
  function sendEmail() {
    let name = document.getElementById("name").value;
    let contactnum = document.getElementById("phnno").value;
    let address1 = document.getElementById("address1").value;
    let address2 = document.getElementById("address2").value;
    let address3 = document.getElementById("address03").value;
    let address4 = document.getElementById("address04").value;
    let message = document.getElementById("details").value;
    // Address : ${address1}, ${address2}, ${address3}, ${address4}  <br>   Message : ${message}
    let finalmessage = `Name : ${name} <br> Contact number : ${contactnum} <br>  Email : ${Email01} <br>` ;
    Email.send({
        Host : "",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "A message from a customer",
        Body : finalmessage
    }).then(
      message => alert("Your response has been sent. Thank you for writing to us.")
    );
}

  function capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  // Call the capitalize function to capitalize the name when the page loads
  capitalize();
});
