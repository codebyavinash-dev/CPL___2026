let auctionStarted= false;
const auctionDate = new Date().getTime() + 9000;

function showTeams() {

    if(auctionStarted) return; // prevent double run
    auctionStarted= true;

  const container = document.getElementById("teamsContainer");

  container.innerHTML = "";

  for (let team in teams) {

    let playersHTML = "";

    teams[team].forEach(player => {
      playersHTML += `
        <div class="player">
          ${player.name} - 💰 ${player.price} pts
        </div>
      `;
    });

    let div = document.createElement("div");
    div.className = "team-card";

    div.innerHTML = `
      <h3>${team}</h3>
      ${playersHTML}
    `;

    container.appendChild(div);
  }

  container.style.display = "flex";
  document.getElementById("auctionStatus").innerText = "🏏 Auction Completed!";
}

const x = setInterval(() => {

    const now = new Date().getTime();
    const distance = auctionDate - now;

    if (distance <= 0) {

        clearInterval(x);

        if (!auctionStarted) {
            auctionStarted = true;
            showTeams();
        }

        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        return;
    }

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);



/*
🔥 8 players per team + price (points)
*/
const teams = {
  "Team 1": [
    { name: "Aman", price: 120 },
    { name: "Ravi", price: 150 },
    { name: "Suresh", price: 90 },
    { name: "Karan", price: 110 },
    { name: "Vikas", price: 80 },
    { name: "Arjun", price: 130 },
    { name: "Rahul", price: 140 },
    { name: "Amit", price: 100 }
  ],

  "Team 2": [
    { name: "Suraj", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ],

   "Team 3": [
    { name: "John", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ],

   "Team 4": [
    { name: "John", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ],

   "Team 5": [
    { name: "John", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ],

   "Team 6": [
    { name: "John", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ],

   "Team 7": [
    { name: "John", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ],

   "Team 8": [
    { name: "John", price: 200 },
    { name: "Shivam", price: 160 },
    { name: "Pankaj", price: 120 },
    { name: "Rohit", price: 180 },
    { name: "Vishal", price: 140 },
    { name: "Nikhil", price: 110 },
    { name: "Sahil", price: 90 },
    { name: "Deepak", price: 150 }
  ]
};

function showTeams() {
  const container = document.getElementById("teamsContainer");

  container.innerHTML = ""; // safety reset

  let index = 0;

  for (let team in teams) {

    let playersHTML = "";

    teams[team].forEach(player => {
      playersHTML += `
        <div class="player">
          ${player.name} - 💰 ${player.price} pts
        </div>
      `;
    });

    let div = document.createElement("div");
    div.className = "team-card";

    // 🔥 animation delay for stagger effect
    div.style.animationDelay = (index * 0.2) + "s";
    index++;

    div.innerHTML = `
      <h3>${team}</h3>
      ${playersHTML}
    `;

    container.appendChild(div);
  }

  container.style.display = "flex";

  document.getElementById("auctionStatus").innerText =
    "🏏 Auction Completed!";
}
