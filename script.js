document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

let responses =
JSON.parse(localStorage.getItem("responses")) || [];

responses.push({
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value,
date: new Date().toLocaleString()
});

localStorage.setItem(
"responses",
JSON.stringify(responses)
);

alert("Message Saved");

this.reset();

});