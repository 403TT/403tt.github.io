const input = document.getElementById("cliInput");
const output = document.getElementById("output");

const commands = {
  "get -user about": "Name: 403TT\nWebsite: junctxon.io\nDiscord: @403TT\nGitHub: github.com/403TT",
  "help": "Available commands:\nget -user about\nhelp\nclear",
  "clear": ""
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    if (cmd === "clear") {
      output.textContent = "junctxon CLI. Type a command below:\n";
    } else {
      output.textContent += `\n$: ${cmd}\n`;
      if (cmd in commands) {
        output.textContent += `${commands[cmd]}\n`;
      } else {
        output.textContent += `Command not found. Type 'help' for a list of commands.\n`;
      }
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

// Focus input when clicking anywhere on the page
document.addEventListener("click", () => {
  input.focus();
});