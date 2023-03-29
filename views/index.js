const answers = document.querySelector('.answers')
const ul = answers.querySelector('ul')


// const data = '```python\narray = ["apple", "banana", "cherry", "d…\na\n\nc\nh\ne\nr\nr\ny\n\nd\na\nt\ne\n\ne\nl\nd\ne\nr\nb\ne\nr\nr\ny\n```';



function sortData (data) {
  let newData = data;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === '`') {
      count++;
      if (count % 2 === 0) {
        newData = newData.replace('```', '</span>');
      } else {
        newData = newData.replace('```', '<span>');
      }
    }
  }
  return newData;
}




function createOl(data){
  const question = document.createElement('ol');
  const answer = document.createElement('ol');
  let message = document.getElementById('input').value
  let sorted_data = sortData(data.response.content)

  console.log("message")
  console.log(message)

  question.textContent = message
  question.classList.add("question")

  ul.appendChild(question);

  answer.innerHTML = sorted_data
  answer.classList.add("answer")

  console.log("data.response")
  console.log(data.response)
  console.log("sorted_data")
  console.log(sorted_data)

  ul.appendChild(answer);
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

