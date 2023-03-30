const answers = document.querySelector('.answers')
  function key(e) {
    if (e.keyCode == 13) {
    console.log("enter_clicked")
    button()
    }
  }




function createOl(data){
  const answer = document.createElement('md-block');
  let message = document.getElementById('input').value

  console.log("message")
  console.log(message)


  answer.innerHTML = data.response.content
  
  answer.classList.add("answer")

  console.log("data.response")
  console.log(data.response)

  answers.appendChild(answer);

}


function button() {
  console.log("clicked")
  let message = document.getElementById('input').value

    const question = document.createElement('h4');


    question.textContent = message
    question.classList.add("question")

    answers.appendChild(question);

    document.getElementById('input').value = ""

  const data = { message: message}

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

