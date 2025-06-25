const input = document.getElementById("cliInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    if (cmd === "clear") {
      output.innerHTML = "junctxon CLI. Type a command below:<br>";
    } else {
      output.innerHTML += `<br>$: ${cmd}<br>`;

      // 🔁 Send to Cloudflare Worker (API proxy)
      fetch(`https://api.junctxon.io/?cmd=${encodeURIComponent(cmd)}`)
        .then(res => {
          if (!res.ok) throw new Error("API call failed");
          return res.json();
        })
        .then(data => {
          output.innerHTML += `${data.response}<br>`;
        })
        .catch(() => {
          output.innerHTML += `Unable to process that command.<br>`;
        });
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

// Auto-focus input when clicking anywhere
document.addEventListener("click", () => {
  input.focus();
});

// Animated placeholder effect
const message = "You know what to write here....";
let index = 0;
let typingDone = false;

function typeEffect() {
  if (index < message.length) {
    input.placeholder = "$: " + message.substring(0, index + 1);
    index++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(deleteEffect, 1000);
  }
}

function deleteEffect() {
  if (index > 0) {
    index--;
    input.placeholder = "$: " + message.substring(0, index);
    setTimeout(deleteEffect, 40);
  } else {
    input.placeholder = "$: ";
    typingDone = true;
  }
}

window.onload = () => {
  input.focus();
  typeEffect();
};

input.addEventListener("input", () => {
  if (!typingDone) {
    index = 0;
    typingDone = true;
    input.placeholder = "$: ";
  }
});