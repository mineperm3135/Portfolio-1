document.addEventListener('DOMContentLoaded', () => {
    
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const closeBtn = document.querySelector('.close-btn');

    function toggleChat() {
        if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
            chatWindow.style.display = 'flex';
        } else {
            chatWindow.style.display = 'none';
        }
    }

        function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText !== '') {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message-sent'); 
            newMessage.textContent = messageText;

            chatMessages.appendChild(newMessage);
           
            chatInput.value = '';

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    
    chatToggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    chatSendBtn.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});