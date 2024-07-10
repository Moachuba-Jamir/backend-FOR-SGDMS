const ws = new WebSocket("");

ws.addEventListener("open", () => {
  console.log("I have connected to the backend!");
});

ws.addEventListener("message", ({ data }) => {
  console.log(data);
});
