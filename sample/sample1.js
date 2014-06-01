var DogechatClient = require('dogechat-client');

client = new DogechatClient({
  username: 'foo',
  password: 'bar'
});

// Register a simple message handler
client.register(function(msg) {
  console.log(msg);
});

// Connect to server and join botgames
client.connect(function() {
  console.log('Connected to server');
});

// When Ctrl+C is pressed, exit gracefully
process.on('SIGINT', function() {
  console.log("Quitting...")
  client.disconnect();
  process.exit();
})
