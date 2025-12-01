/* --- JAVASCRIPT GAME LOGIC --- */

// 1. DATA CONFIGURATION (100 WORDS POOL)
const FULL_VOCAB_LIST = [
  {
    word: "recycle",
    meaning: "to process used materials so they can be reused",
  },
  { word: "protect", meaning: "to keep something safe" },
  { word: "pollution", meaning: "harmful substances in the environment" },
  { word: "reduce", meaning: "to make something smaller or less" },
  { word: "energy", meaning: "power used to do work" },
  { word: "disaster", meaning: "a sudden event causing great damage" },
  { word: "ancient", meaning: "belonging to the very distant past" },
  { word: "benefit", meaning: "an advantage or profit gained from something" },
  {
    word: "celebrate",
    meaning: "to acknowledge a significant event with a social gathering",
  },
  {
    word: "develop",
    meaning: "to grow or cause to grow and become more mature",
  },
  {
    word: "environment",
    meaning: "the surroundings or conditions in which a person lives",
  },
  {
    word: "feature",
    meaning: "a distinctive attribute or aspect of something",
  },
  { word: "generate", meaning: "to cause something to arise or come about" },
  { word: "habit", meaning: "a settled or regular tendency or practice" },
  {
    word: "identify",
    meaning: "to establish or indicate who or what someone is",
  },
  { word: "journey", meaning: "an act of traveling from one place to another" },
  {
    word: "knowledge",
    meaning: "facts, information, and skills acquired through experience",
  },
  { word: "locate", meaning: "to discover the exact place or position of" },
  {
    word: "method",
    meaning: "a particular form of procedure for accomplishing something",
  },
  {
    word: "nature",
    meaning: "the physical world collectively, including plants and animals",
  },
  {
    word: "observe",
    meaning: "to notice or perceive something and register it as significant",
  },
  {
    word: "passenger",
    meaning: "a traveler on a public or private conveyance",
  },
  {
    word: "quality",
    meaning: "the standard of something as measured against other things",
  },
  {
    word: "recognize",
    meaning:
      "to identify someone or something from having encountered them before",
  },
  {
    word: "solution",
    meaning:
      "a means of solving a problem or dealing with a difficult situation",
  },
  {
    word: "technology",
    meaning: "the application of scientific knowledge for practical purposes",
  },
  {
    word: "unique",
    meaning: "being the only one of its kind; unlike anything else",
  },
  {
    word: "valuable",
    meaning: "worth a great deal of money or having great importance",
  },
  {
    word: "waste",
    meaning: "to use or expend carelessly, extravagantly, or to no purpose",
  },
  { word: "youth", meaning: "the period between childhood and adult age" },
  {
    word: "adventure",
    meaning:
      "an unusual and exciting, typically hazardous, experience or activity",
  },
  {
    word: "brave",
    meaning: "ready to face and endure danger or pain; showing courage",
  },
  {
    word: "calm",
    meaning: "not showing or feeling nervousness, anger, or other emotions",
  },
  { word: "dangerous", meaning: "able or likely to cause harm or injury" },
  { word: "eager", meaning: "wanting to do or have something very much" },
  { word: "famous", meaning: "known about by many people" },
  {
    word: "gentle",
    meaning: "having or showing a mild, kind, or tender temperament",
  },
  { word: "harvest", meaning: "the process or period of gathering in crops" },
  { word: "imagine", meaning: "to form a mental image or concept of" },
  { word: "justice", meaning: "just behavior or treatment" },
  { word: "keen", meaning: "having or showing eagerness or enthusiasm" },
  {
    word: "landscape",
    meaning: "all the visible features of an area of countryside",
  },
  {
    word: "machine",
    meaning: "an apparatus using or applying mechanical power",
  },
  {
    word: "native",
    meaning:
      "associated with the country, region, or circumstances of a person's birth",
  },
  { word: "ocean", meaning: "a very large expanse of sea" },
  {
    word: "palace",
    meaning: "the official residence of a sovereign or bishop",
  },
  {
    word: "queue",
    meaning: "a line or sequence of people or vehicles awaiting their turn",
  },
  { word: "rare", meaning: "not occurring very often" },
  {
    word: "safety",
    meaning:
      "the condition of being protected from or unlikely to cause danger",
  },
  { word: "talent", meaning: "natural aptitude or skill" },
  { word: "understand", meaning: "to perceive the intended meaning of words" },
  { word: "vacation", meaning: "an extended period of leisure and recreation" },
  {
    word: "wander",
    meaning: "to walk or move in a leisurely, casual, or aimless way",
  },
  {
    word: "xenophobia",
    meaning: "dislike of or prejudice against people from other countries",
  },
  {
    word: "yearn",
    meaning: "to have an intense feeling of longing for something",
  },
  {
    word: "zone",
    meaning: "an area or stretch of land having a particular characteristic",
  },
  { word: "abroad", meaning: "in or to a foreign country or countries" },
  {
    word: "barrier",
    meaning: "a fence or other obstacle that prevents movement or access",
  },
  { word: "camera", meaning: "a device for recording visual images" },
  {
    word: "damage",
    meaning:
      "physical harm caused to something in such a way as to impair its value",
  },
  {
    word: "economy",
    meaning: "the wealth and resources of a country or region",
  },
  {
    word: "fabric",
    meaning: "cloth or other material produced by weaving or knitting fibers",
  },
  {
    word: "gallery",
    meaning: "a room or building for the display or sale of works of art",
  },
  {
    word: "harbor",
    meaning: "a place on the coast where vessels may find shelter",
  },
  {
    word: "iceberg",
    meaning: "a large floating mass of ice detached from a glacier",
  },
  {
    word: "jungle",
    meaning:
      "an area of land overgrown with dense forest and tangled vegetation",
  },
  {
    word: "kangaroo",
    meaning: "a large plant-eating marsupial with a long powerful tail",
  },
  {
    word: "ladder",
    meaning:
      "a structure consisting of a series of bars or steps used for climbing",
  },
  {
    word: "magnet",
    meaning:
      "a piece of iron that has its component atoms so ordered that the material exhibits properties of magnetism",
  },
  { word: "narrow", meaning: "of small width in relation to length" },
  { word: "oasis", meaning: "a fertile spot in a desert where water is found" },
  {
    word: "package",
    meaning: "an object or group of objects wrapped in paper or plastic",
  },
  { word: "quake", meaning: "shake or tremble" },
  {
    word: "radar",
    meaning:
      "a system for detecting the presence, direction, distance, and speed of aircraft",
  },
  {
    word: "salary",
    meaning:
      "a fixed regular payment, typically paid on a monthly or biweekly basis",
  },
  {
    word: "target",
    meaning: "a person, object, or place selected as the aim of an attack",
  },
  {
    word: "ultimate",
    meaning: "being or happening at the end of a process; final",
  },
  {
    word: "vaccine",
    meaning: "a substance used to stimulate the production of antibodies",
  },
  {
    word: "wage",
    meaning:
      "a fixed regular payment, typically paid on a daily or weekly basis",
  },
  {
    word: "yacht",
    meaning: "a medium-sized sailing boat equipped for cruising or racing",
  },
  {
    word: "zoology",
    meaning:
      "the scientific study of the behavior, structure, physiology, classification, and distribution of animals",
  },
  { word: "accomplish", meaning: "achieve or complete successfully" },
  { word: "bizarre", meaning: "very strange or unusual" },
  {
    word: "candidate",
    meaning: "a person who applies for a job or is nominated for election",
  },
  { word: "debate", meaning: "a formal discussion on a particular topic" },
  {
    word: "effective",
    meaning: "successful in producing a desired or intended result",
  },
  {
    word: "facility",
    meaning:
      "a place, amenity, or piece of equipment provided for a particular purpose",
  },
  {
    word: "gauge",
    meaning: "estimate or determine the magnitude, amount, or volume of",
  },
  { word: "hollow", meaning: "having a hole or empty space inside" },
  { word: "illegal", meaning: "contrary to or forbidden by law" },
  {
    word: "jealous",
    meaning: "feeling or showing envy of someone or their achievements",
  },
  {
    word: "knack",
    meaning: "an acquired or natural skill at performing a task",
  },
  {
    word: "label",
    meaning:
      "a small piece of paper, fabric, plastic, or similar material attached to an object",
  },
  { word: "manage", meaning: "be in charge of; administer" },
  { word: "negotiate", meaning: "obtain or bring about by discussion" },
  {
    word: "obedient",
    meaning: "complying or willing to comply with orders or requests",
  },
  {
    word: "parade",
    meaning:
      "a public procession, especially one celebrating a special day or event",
  },
  {
    word: "qualify",
    meaning:
      "be entitled to a particular benefit or privilege by fulfilling a necessary condition",
  },
  {
    word: "radiant",
    meaning: "sending out light; shining or glowing brightly",
  },
];

// 2. ENGINE CONSTANTS
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 450;
const GRAVITY = 0.6;
const FRICTION = 0.8;
const PLAYER_SPEED = 5;
const JUMP_FORCE = 12;

// 3. GAME STATE
let canvas, ctx;
let gameState = "START";
let score = 0;
let lives = 3;
let currentQuizCoin = null;
let camera = { x: 0, y: 0 };

// Input state
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

// Entities
let player = {};
let platforms = [];
let coins = [];
let enemies = [];
let activeVocabList = []; // The specific words chosen for this round

// IMAGE ASSETS
const playerSprite = new Image();

// =========================================================
// ↓↓↓ CHANGE THIS LINE TO YOUR IMAGE FILENAME ↓↓↓
playerSprite.src = "";
// Example: playerSprite.src = "my-hero.png";
// =========================================================

// --- INITIALIZATION ---
window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  // Handle High DPI
  const dpr = window.devicePixelRatio || 1;
  canvas.width = CANVAS_WIDTH * dpr;
  canvas.height = CANVAS_HEIGHT * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = CANVAS_WIDTH + "px";
  canvas.style.height = CANVAS_HEIGHT + "px";

  setupInputs();
  gameLoop();
};

// --- PROCEDURAL LEVEL GENERATION ---
function resetGame() {
  score = 0;
  lives = 3;
  camera.x = 0;
  updateHUD();

  // 1. Pick 20 Random Words from the full list
  // Shuffle array algorithm (Fisher-Yates)
  const shuffled = [...FULL_VOCAB_LIST].sort(() => 0.5 - Math.random());
  activeVocabList = shuffled.slice(0, 20); // Play with 20 words

  // 2. Setup Player
  player = {
    x: 50,
    y: 300,
    width: 30,
    height: 40,
    vx: 0,
    vy: 0,
    grounded: false,
    invulnerable: 0,
    color: "#FF9800",
  };

  platforms = [];
  coins = [];
  enemies = [];

  // 3. Generate Map based on Active Words
  let currentX = 0;

  // Starting platform
  platforms.push({ x: 0, y: 350, w: 500, h: 50 });
  currentX += 500;

  // Loop through each word and create a section for it
  activeVocabList.forEach((wordObj, index) => {
    // Gap between platforms (jump distance)
    // Min 80, Max 180 (doable)
    const gap = 80 + Math.random() * 80;
    currentX += gap;

    // Platform Height (Y)
    // Keep it somewhat level but varying.
    // 200 is high, 350 is low.
    const platY = 220 + Math.random() * 130;
    const platW = 150 + Math.random() * 150; // Width

    platforms.push({ x: currentX, y: platY, w: platW, h: 20 });

    // Add Coin on this platform
    // Center it roughly
    coins.push({
      x: currentX + platW / 2 - 15,
      y: platY - 60, // Floating above
      w: 30,
      h: 30,
      wordData: wordObj,
      collected: false,
      floatOffset: Math.random() * Math.PI * 2,
    });

    // Add Enemy? (30% chance)
    if (Math.random() > 0.7 && platW > 100) {
      enemies.push({
        x: currentX + 30,
        y: platY - 30,
        w: 30,
        h: 30,
        minX: currentX,
        maxX: currentX + platW - 30,
        speed: 2,
        dir: 1,
      });
    }

    currentX += platW;
  });

  // Final Platform
  currentX += 100;
  platforms.push({ x: currentX, y: 350, w: 600, h: 50 });
}

function setupInputs() {
  window.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.code)) keys[e.code] = true;
    if (e.code === "ArrowUp" && gameState === "PLAYING" && player.grounded) {
      player.vy = -JUMP_FORCE;
      player.grounded = false;
    }
  });

  window.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.code)) keys[e.code] = false;
  });
}

window.simulateKey = function (code, isDown) {
  if (keys.hasOwnProperty(code)) keys[code] = isDown;
  if (
    code === "ArrowUp" &&
    isDown &&
    gameState === "PLAYING" &&
    player.grounded
  ) {
    player.vy = -JUMP_FORCE;
    player.grounded = false;
  }
};

function startGame() {
  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("end-screen").classList.remove("active");
  resetGame();
  gameState = "PLAYING";
}

function restartGame() {
  startGame();
}

// --- GAME LOOP ---
function gameLoop() {
  if (gameState === "PLAYING") {
    update();
  }
  draw();
  requestAnimationFrame(gameLoop);
}

// --- UPDATE LOGIC ---
function update() {
  // 1. Player X
  if (keys.ArrowRight) player.vx += 1;
  if (keys.ArrowLeft) player.vx -= 1;
  player.vx *= FRICTION;
  player.x += player.vx;

  // Wall collisions
  platforms.forEach((plat) => {
    if (colCheck(player, plat) === "l" || colCheck(player, plat) === "r") {
      player.vx = 0;
    }
  });

  // Level Bounds (Dynamic based on last platform)
  const levelEnd =
    platforms[platforms.length - 1].x + platforms[platforms.length - 1].w;
  if (player.x < 0) {
    player.x = 0;
    player.vx = 0;
  }
  if (player.x > levelEnd) {
    player.x = levelEnd;
    player.vx = 0;
  }

  // 2. Player Y
  player.vy += GRAVITY;
  player.y += player.vy;
  player.grounded = false;

  platforms.forEach((plat) => {
    const dir = colCheck(player, plat);
    if (dir === "b") {
      player.grounded = true;
      player.vy = 0;
    } else if (dir === "t") {
      player.vy *= -0.5;
    }
  });

  // 3. Camera (Clamp to world size)
  let targetCamX = player.x - CANVAS_WIDTH / 2;
  targetCamX = Math.max(0, Math.min(targetCamX, levelEnd - CANVAS_WIDTH));
  camera.x += (targetCamX - camera.x) * 0.1;

  // 4. Entities
  coins.forEach((coin) => {
    if (!coin.collected) {
      coin.floatOffset += 0.1;
      if (simpleCol(player, coin)) triggerQuiz(coin);
    }
  });

  enemies.forEach((enemy) => {
    enemy.x += enemy.speed * enemy.dir;
    if (enemy.x > enemy.maxX || enemy.x < enemy.minX) enemy.dir *= -1;
    if (player.invulnerable === 0 && simpleCol(player, enemy)) takeDamage();
  });

  if (player.invulnerable > 0) player.invulnerable--;

  // 5. Win/Loss
  const allCollected = coins.every((c) => c.collected);
  if (allCollected && coins.length > 0) endGame(true);

  if (player.y > CANVAS_HEIGHT + 200) takeDamage(true);
}

function takeDamage(respawn = false) {
  lives--;
  updateHUD();
  player.vy = -8;
  player.invulnerable = 60;

  if (respawn) {
    // Find nearest platform to respawn safely
    // Simple approach: go back to start for now, or last grounded x
    player.x = Math.max(0, player.x - 200);
    player.y = 200;
  }

  if (lives <= 0) endGame(false);
}

function simpleCol(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.height > rect2.y
  );
}

function colCheck(shapeA, shapeB) {
  let vX = shapeA.x + shapeA.width / 2 - (shapeB.x + shapeB.w / 2),
    vY = shapeA.y + shapeA.height / 2 - (shapeB.y + shapeB.h / 2),
    hWidths = shapeA.width / 2 + shapeB.w / 2,
    hHeights = shapeA.height / 2 + shapeB.h / 2,
    colDir = null;

  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    let oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
    if (oX >= oY) {
      if (vY > 0) {
        colDir = "t";
        shapeA.y += oY;
      } else {
        colDir = "b";
        shapeA.y -= oY;
      }
    } else {
      if (vX > 0) {
        colDir = "l";
        shapeA.x += oX;
      } else {
        colDir = "r";
        shapeA.x -= oX;
      }
    }
  }
  return colDir;
}

// --- QUIZ LOGIC ---
function triggerQuiz(coin) {
  gameState = "QUIZ";
  currentQuizCoin = coin;

  const modal = document.getElementById("quiz-modal");
  const wordEl = document.getElementById("quiz-word");
  const optionsContainer = document.getElementById("quiz-options");

  wordEl.innerText = coin.wordData.word.toUpperCase();
  optionsContainer.innerHTML = "";

  let answers = [];
  answers.push({ text: coin.wordData.meaning, correct: true });

  // Pick 2 random wrong answers from the FULL list (excluding current word)
  let otherWords = FULL_VOCAB_LIST.filter((w) => w.word !== coin.wordData.word);
  otherWords.sort(() => Math.random() - 0.5);
  answers.push({ text: otherWords[0].meaning, correct: false });
  answers.push({ text: otherWords[1].meaning, correct: false });

  answers.sort(() => Math.random() - 0.5);

  answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.innerText = ans.text;
    btn.onclick = () => handleQuizAnswer(ans.correct);
    optionsContainer.appendChild(btn);
  });

  modal.classList.add("active");
}

function handleQuizAnswer(isCorrect) {
  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("active");

  if (isCorrect) {
    score += 10;
    currentQuizCoin.collected = true;
  } else {
    lives--;
    updateHUD();
    player.x -= 30;
    player.vx = -5;
    if (lives <= 0) {
      endGame(false);
      return;
    }
  }
  updateHUD();
  gameState = "PLAYING";
}

// --- DRAWING ---
function draw() {
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.save();
  ctx.translate(-camera.x, -camera.y);

  platforms.forEach((plat) => {
    ctx.fillStyle = "#795548";
    ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(plat.x, plat.y, plat.w, 5);
  });

  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  coins.forEach((coin) => {
    if (!coin.collected) {
      const bounce = Math.sin(coin.floatOffset) * 5;
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(
        coin.x + coin.w / 2,
        coin.y + coin.h / 2 + bounce,
        15,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#DAA520";
      ctx.stroke();

      ctx.fillStyle = "#000";
      ctx.fillText("?", coin.x + coin.w / 2, coin.y + coin.h / 2 + 7 + bounce);
    }
  });

  enemies.forEach((en) => {
    ctx.fillStyle = "#f44336";
    ctx.beginPath();
    ctx.moveTo(en.x, en.y + en.h);
    ctx.lineTo(en.x + en.w / 2, en.y);
    ctx.lineTo(en.x + en.w, en.y + en.h);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillRect(en.x + 5, en.y + 10, 5, 5);
    ctx.fillRect(en.x + 20, en.y + 10, 5, 5);
  });

  if (player.invulnerable % 10 < 5) {
    if (playerSprite.complete && playerSprite.naturalHeight !== 0) {
      ctx.drawImage(
        playerSprite,
        player.x,
        player.y,
        player.width,
        player.height
      );
    } else {
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.fillStyle = "white";
      const eyeOffset = player.vx >= 0 ? 18 : 2;
      ctx.fillRect(player.x + eyeOffset, player.y + 8, 8, 8);
    }
  }

  ctx.restore();
}

function updateHUD() {
  document.getElementById("score-display").innerText = "Score: " + score;
  let hearts = "";
  for (let i = 0; i < lives; i++) hearts += "❤️";
  document.getElementById("lives-display").innerText = "Lives: " + hearts;
}

function endGame(win) {
  gameState = win ? "WIN" : "GAMEOVER";
  const endScreen = document.getElementById("end-screen");
  const title = document.getElementById("end-title");
  const msg = document.getElementById("end-message");

  endScreen.classList.add("active");
  if (win) {
    title.innerText = "YOU WIN!";
    title.style.color = "#4CAF50";
    msg.innerText = `You collected all words! Final Score: ${score}`;
  } else {
    title.innerText = "GAME OVER";
    title.style.color = "#f44336";
    msg.innerText = `Better luck next time! Final Score: ${score}`;
  }
}
