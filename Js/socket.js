// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", () => {
  // Everytime a client connects to the server How are you? will be sent to the server
  socket.send("How are you?");
});

// listen for data from the server to deliver it to end user
socket.addEventListener("message", (e) => {
  // How are you? is sent to browser console
  console.log( e.data);

  // displaying How are you? on the page
  const text = document.createTextNode(e.data);
  const para = document.createElement("p");
  const container = document.getElementById("container");

  para.appendChild(text);
  container.appendChild(para);
});
