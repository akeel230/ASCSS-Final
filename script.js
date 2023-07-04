function SendMail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        BName : document.getElementById("BName").value,
        email_id : document.getElementById("email_id").value,
        contact : document.getElementById("contact").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_5c6drj8", "template_tkbwb6k", params).then(function (res) {
        alert("We have received your message, and will reach back to you soon! " + res.status)
    })
}

function SendJob() {
    var params = {
        from_name : document.getElementById("fullname").value,
        address : document.getElementById("Address").value,
        contact : document.getElementById("contact").value,
        email_id : document.getElementById("email_id").value,
        visa : document.getElementById("Visa").value,
        Jobtype : document.getElementById("Jobtype").value,
        message : document.getElementById("message").value,
        injury : document.getElementById("injury").value
    }
    emailjs.send("service_5c6drj8", "template_tkbwb6k", params).then(function (res) {
        alert("We have received your Job Application, and will reach back to you soon! " + res.status)
    })
}