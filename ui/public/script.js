// JavaScript code for handling UI interactions and communicating with the Rasa chatbot

const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the chat window
function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);

  const textElement = document.createElement('p');
  textElement.innerText = message;

  messageElement.appendChild(textElement);
  messagesContainer.appendChild(messageElement);
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value;
  addMessage(userMessage, 'user');
  userInput.value = '';

  // Send the user message to the Rasa chatbot backend
  // Replace '206.189.246.142' with the correct IP address if needed
  fetch('http://206.189.246.142/webhooks/rest/webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: userMessage,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the Rasa chatbot backend
      if (data && data.length > 0) {
        data.forEach((message) => {
          addMessage(message.text, 'bot');
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Event listener for the send button
sendBtn.addEventListener('click', handleUserInput);

// Event listener for the Enter key
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
