const chatBox = document.getElementById('chat-box');
const input = document.getElementById('prompt-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(role, text) {
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendPrompt() {
  const message = input.value.trim();
  if (!message) return;

  addMessage('user', message);
  input.value = '';

  try {
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    addMessage('assistant', data.reply || 'No response');
  } catch (error) {
    addMessage('assistant', 'Could not reach backend. Start the FastAPI server first.');
  }
}

sendBtn.addEventListener('click', sendPrompt);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') sendPrompt();
});

addMessage('assistant', 'Hello! I am Jarvis. Ask me to start a task, open a repo, or automate something.');
