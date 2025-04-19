document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    alert("Message sent successfully!");
    this.reset();
    
  });
  