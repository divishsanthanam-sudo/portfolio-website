let responses =
JSON.parse(localStorage.getItem("responses")) || [];

let output = "";

responses.forEach(data => {

output += `
<div class="card">
<h3>${data.name}</h3>
<p>Email: ${data.email}</p>
<p>${data.message}</p>
<p>${data.date}</p>
</div>
`;

});

document.getElementById("responses").innerHTML = output;