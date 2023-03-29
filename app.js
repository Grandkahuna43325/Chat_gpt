function replace(data) {
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




const express = require('express');
const app = express();


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



app.use(express.static("views"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.use(express.json());

app.post("/increment", (req, res) => {

  const response = (async () => {
    const message = req.body.message

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
      });

      const ress = completion.data.choices[0].message

      return ress

    } catch (err) {
      console.log(err);
    }
  })();

  response.then((response) => {
    res.json({ response: response });
  });
});






app.post("/manage_data", (req, res) => {

  console.log(req.body.message)
  

  res.json({ response: response });

  console.log(response)
});









app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

const data = '```python\narray = ["apple", "banana", "cherry", "d…\na\n\nc\nh\ne\nr\nr\ny\n\nd\na\nt\ne\n\ne\nl\nd\ne\nr\nb\ne\nr\nr\ny\n```';

function replace(data) {
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

console.log(replace(data));
