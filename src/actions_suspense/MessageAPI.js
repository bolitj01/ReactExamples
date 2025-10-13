const messages = [{ id: 1, text: "Hello!" }];

// ---- Simulated API ---- //
function postMessage(message) {
  messages.push({ id: messages.length + 1, text: message });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), text: message });
    }, 1200); // simulate 1.2s network delay
  });
}

// Simulated "fetch all messages" API using a Promise
function fetchMessages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(messages);
    }, 1200);
  });
}

export { postMessage, fetchMessages };
