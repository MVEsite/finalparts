function sendMail() {
    var params = {
      
      email: document.getElementById("email").value,
      
    };
  
    const serviceID = "service_a71cuqc";
    const templateID = "template_v8mftd5";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          
          document.getElementById("email").value = "";
          
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }