//================= Initial Counts  =================//

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//================= Navbar Element  =================//

const heartCounter = document.getElementById("heartCount");
const coinCounter = document.getElementById("coinCount");
const copyCounter = document.getElementById("copyCount");

//=================  Call History   =================//

const callHistory = document.getElementById("callHistory");

//=================  Function  =================//

// Heart Count
function increaseHeartCount() {
  heartCount++;
  heartCounter.innerText = heartCount;
}

// Copy Hotline number
function copyNumber(e) {
  const card = e.currentTarget.closest(".bg-base-100");
  const number = card.querySelector(".call-number").innerText;

  navigator.clipboard.writeText(number);

  copyCount++;
  copyCounter.innerText = copyCount;

  alert(` Hotline number Copied: ${number}`);
}

//Call Service
function callService(e) {
  const card = e.currentTarget.closest(".bg-base-100");
  const serviceName = card.querySelector("h2").innerText;
  const serviceNumber = card.querySelector(".call-number").innerText;

  if (coinCount < 20) {
    alert("Not enough coins to make  call");
    return;
  }

  coinCount -= 20;
  coinCounter.innerText = coinCount;

  const time = new Date().toLocaleTimeString();

  alert(`Calling ${serviceName}\nnumber: ${serviceNumber}`);

  const div = document.createElement("div");
  div.className = "bg-base-100 p-3 rounded-lg text-sm ";

  div.innerHTML = `
         <P class="font-semibold">${serviceName}</p>
         <P>${serviceNumber}</p>
         <P class="text-xs text-gray-500">⏰ ${time}</p>

         `;
  callHistory.prepend(div);
}

// clear call history
function clearHistory() {
  callHistory.innerHTML = "";
}

//================= Event Listener  =================//

// Heart Buttons

document.querySelectorAll(".favorite-btn").forEach((btn) => {
  console.log(increaseHeartCount);
  btn.addEventListener("click", increaseHeartCount);
});

// Copy Buttons

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", copyNumber);
});

// Call Buttons

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", callService);
});

// Clear History
document
  .getElementById("clearHistory")

  .addEventListener("click", clearHistory);
