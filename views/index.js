const answers = document.querySelector('.answers')
const li = answers.querySelector('li')


function createOl(data){
  const question = document.createElement('ol');
  const answer = document.createElement('ol');
  let message = document.getElementById('input').value

  console.log("message")
  console.log(message)

  question.textContent = message
  question.classList.add("question")

  li.appendChild(question);

  answer.textContent = data.response.content
  answer.classList.add("answer")

  console.log("data.response")
  console.log(data.response)

  li.appendChild(answer);
}


function button() {
  // Get the data you want to send
  let message = document.getElementById('input').value
  const data = { message: message}

  // Send an AJAX request to the server
  fetch("/increment", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      createOl(data)
    });
}

