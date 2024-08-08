API_KEY=""

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

const requestData = {
  contents: [
    {
      role: "user",
      parts: [
        {
          text: "who is the president of india????"
        }
      ]
    }
  ],
  generationConfig: {
    temperature: 1,
    topK: 64,
    topP: 0.95,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain"
  }
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  const responseText = data.candidates[0].content.parts[0].text;
  console.log(responseText);
})
.catch(error => {
  console.error('Error:', error);
});