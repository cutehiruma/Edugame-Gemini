/**
 * 100 WORD DATABASE (Split into 5 Difficulty Tiers)
 * Each Tier has 20 words.
 */
const VOCAB_DATABASE = [
  // LEVEL 1: Basic / Beginners
  [
    { word: "apple", meaning: "a red or green round fruit" },
    { word: "book", meaning: "pages bound together to read" },
    { word: "cat", meaning: "a small domesticated feline animal" },
    { word: "dog", meaning: "a domesticated carnivorous mammal" },
    { word: "happy", meaning: "feeling or showing pleasure" },
    { word: "jump", meaning: "push oneself off a surface into the air" },
    { word: "run", meaning: "move at a speed faster than a walk" },
    { word: "school", meaning: "an institution for educating children" },
    {
      word: "teacher",
      meaning: "a person who teaches, especially in a school",
    },
    {
      word: "water",
      meaning: "a colorless, transparent, odorless liquid",
    },
    { word: "sun", meaning: "the star around which the earth orbits" },
    { word: "moon", meaning: "the natural satellite of the earth" },
    { word: "tree", meaning: "a woody perennial plant" },
    {
      word: "friend",
      meaning: "a person whom one knows and has a bond with",
    },
    { word: "house", meaning: "a building for human habitation" },
    { word: "red", meaning: "the color of blood or fire" },
    {
      word: "big",
      meaning: "of considerable size, extent, or intensity",
    },
    { word: "small", meaning: "of a size that is less than normal" },
    { word: "eat", meaning: "put food into the mouth and swallow it" },
    {
      word: "sleep",
      meaning: "a condition of body and mind giving rest",
    },
  ],
  // LEVEL 2: Daily Life / Pre-Intermediate
  [
    {
      word: "market",
      meaning: "a place where people buy and sell goods",
    },
    {
      word: "travel",
      meaning: "make a journey, typically of some length",
    },
    {
      word: "kitchen",
      meaning: "a room where food is prepared and cooked",
    },
    {
      word: "garden",
      meaning: "a piece of ground for growing flowers or fruit",
    },
    { word: "doctor", meaning: "a qualified practitioner of medicine" },
    {
      word: "animal",
      meaning: "a living organism that feeds on organic matter",
    },
    { word: "driver", meaning: "a person who drives a vehicle" },
    { word: "finish", meaning: "bring a task or activity to an end" },
    {
      word: "start",
      meaning: "begin or be reckoned from a particular point",
    },
    {
      word: "money",
      meaning: "a current medium of exchange in the form of coins",
    },
    { word: "clothes", meaning: "items worn to cover the body" },
    { word: "music", meaning: "vocal or instrumental sounds combined" },
    { word: "party", meaning: "a social gathering of invited guests" },
    { word: "phone", meaning: "a device used for voice communication" },
    { word: "watch", meaning: "look at or observe attentively" },
    { word: "clean", meaning: "free from dirt, marks, or stains" },
    {
      word: "dirty",
      meaning: "covered or marked with an unclean substance",
    },
    { word: "heavy", meaning: "of great weight; difficult to lift" },
    { word: "light", meaning: "the natural agent that stimulates sight" },
    {
      word: "break",
      meaning: "separate or cause to separate into pieces",
    },
  ],
  // LEVEL 3: Nature & Feelings / Intermediate
  [
    { word: "brave", meaning: "ready to face and endure danger or pain" },
    { word: "nervous", meaning: "easily agitated or alarmed" },
    { word: "protect", meaning: "keep safe from harm or injury" },
    { word: "nature", meaning: "the physical world collectively" },
    {
      word: "forest",
      meaning: "a large area covered chiefly with trees",
    },
    { word: "island", meaning: "a piece of land surrounded by water" },
    { word: "ocean", meaning: "a very large expanse of sea" },
    { word: "planet", meaning: "a celestial body orbiting a star" },
    { word: "recycle", meaning: "convert waste into reusable material" },
    { word: "waste", meaning: "use or expend carelessly" },
    {
      word: "habit",
      meaning: "a settled or regular tendency or practice",
    },
    {
      word: "culture",
      meaning: "the ideas, customs, and social behavior",
    },
    { word: "honest", meaning: "free of deceit and untruthfulness" },
    {
      word: "polite",
      meaning: "having or showing behavior that is respectful",
    },
    { word: "danger", meaning: "the possibility of suffering harm" },
    {
      word: "safety",
      meaning: "the condition of being protected from danger",
    },
    {
      word: "energy",
      meaning: "power derived from physical or chemical resources",
    },
    { word: "reduce", meaning: "make smaller or less in amount" },
    { word: "clever", meaning: "quick to understand, learn, and devise" },
    {
      word: "angry",
      meaning: "having a strong feeling of or showing annoyance",
    },
  ],
  // LEVEL 4: Academic / Science / Upper-Intermediate
  [
    { word: "ancient", meaning: "belonging to the very distant past" },
    {
      word: "pollution",
      meaning: "the presence of harmful substances in environment",
    },
    { word: "disaster", meaning: "a sudden event causing great damage" },
    { word: "observe", meaning: "notice or perceive and register it" },
    { word: "method", meaning: "a particular form of procedure" },
    { word: "system", meaning: "a set of things working together" },
    { word: "theory", meaning: "a supposition or a system of ideas" },
    {
      word: "virus",
      meaning: "an infective agent that typically consists of nucleic acid",
    },
    {
      word: "benefit",
      meaning: "an advantage or profit gained from something",
    },
    {
      word: "citizen",
      meaning: "a legally recognized subject of a state",
    },
    {
      word: "climate",
      meaning: "the weather conditions prevailing in an area",
    },
    { word: "damage", meaning: "physical harm caused to something" },
    {
      word: "effect",
      meaning: "a change that is a result or consequence",
    },
    { word: "global", meaning: "relating to the whole world" },
    { word: "liquid", meaning: "a substance that flows freely" },
    {
      word: "native",
      meaning: "associated with the place of one's birth",
    },
    {
      word: "origin",
      meaning: "the point or place where something begins",
    },
    { word: "public", meaning: "of or concerning the people as a whole" },
    {
      word: "region",
      meaning: "an area or division, especially of a country",
    },
    { word: "unique", meaning: "being the only one of its kind" },
  ],
  // LEVEL 5: Advanced / Challenge
  [
    { word: "bizarre", meaning: "very strange or unusual" },
    { word: "chaos", meaning: "complete disorder and confusion" },
    {
      word: "debate",
      meaning: "a formal discussion on a particular topic",
    },
    { word: "economy", meaning: "the wealth and resources of a country" },
    { word: "genre", meaning: "a category of artistic composition" },
    { word: "hazard", meaning: "a danger or risk" },
    { word: "ignite", meaning: "catch fire or cause to catch fire" },
    {
      word: "journey",
      meaning: "an act of traveling from one place to another",
    },
    {
      word: "knack",
      meaning: "an acquired or natural skill at doing something",
    },
    {
      word: "legacy",
      meaning: "amount of money or property left to someone",
    },
    {
      word: "myth",
      meaning: "a traditional story explaining natural or social phenomenon",
    },
    {
      word: "novel",
      meaning: "a fictitious prose narrative of book length",
    },
    {
      word: "oasis",
      meaning: "a fertile spot in a desert where water is found",
    },
    { word: "plague", meaning: "a contagious bacterial disease" },
    { word: "quest", meaning: "a long or arduous search for something" },
    { word: "ritual", meaning: "a religious or solemn ceremony" },
    { word: "scheme", meaning: "a large-scale systematic plan" },
    {
      word: "tactic",
      meaning: "an action or strategy carefully planned",
    },
    {
      word: "urban",
      meaning: "in, relating to, or characteristic of a town or city",
    },
    {
      word: "yield",
      meaning:
        "produce or provide a natural, agricultural, or industrial product",
    },
  ],
];

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 450;

// Physics Constants
const GRAVITY = 0.6;
const FRICTION = 0.8;
const JUMP_FORCE = 13.5; // Increased slightly from 12 to make recovery easier

/**
 * GAME STATE
 */
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameState = "START"; // START, PLAYING, QUIZ, LEVEL_COMPLETE, GAMEOVER, WIN
let score = 0;
let lives = 3;
let currentLevel = 1;
let keys = { ArrowRight: false, ArrowLeft: false, ArrowUp: false };

// Camera
let camera = { x: 0, y: 0 };

// Entities
let player = {};
let platforms = [];
let coins = [];
let enemies = [];
let currentQuizCoin = null;

/**
 * INITIALIZATION
 */
function init() {
  // Keyboard Controls
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

  // Touch Controls
  setupTouchControls();

  requestAnimationFrame(gameLoop);
}

function setupTouchControls() {
  const attachTouch = (id, key) => {
    const btn = document.getElementById(id);
    const press = (e) => {
      e.preventDefault();
      keys[key] = true;
    };
    const release = (e) => {
      e.preventDefault();
      keys[key] = false;
    };

    btn.addEventListener("touchstart", press, { passive: false });
    btn.addEventListener("touchend", release, { passive: false });
    btn.addEventListener("mousedown", press);
    btn.addEventListener("mouseup", release);
    btn.addEventListener("mouseleave", release);
  };

  attachTouch("btn-left", "ArrowLeft");
  attachTouch("btn-right", "ArrowRight");

  // Jump button needs special logic to trigger velocity
  const jumpBtn = document.getElementById("btn-jump");
  const jumpPress = (e) => {
    e.preventDefault();
    keys["ArrowUp"] = true;
    if (gameState === "PLAYING" && player.grounded) {
      player.vy = -JUMP_FORCE;
      player.grounded = false;
    }
  };
  const jumpRelease = (e) => {
    e.preventDefault();
    keys["ArrowUp"] = false;
  };

  jumpBtn.addEventListener("touchstart", jumpPress, { passive: false });
  jumpBtn.addEventListener("touchend", jumpRelease, { passive: false });
  jumpBtn.addEventListener("mousedown", jumpPress);
  jumpBtn.addEventListener("mouseup", jumpRelease);
  jumpBtn.addEventListener("mouseleave", jumpRelease);
}

function startGame(level) {
  if (level === 1) {
    score = 0;
    lives = 3;
  }
  currentLevel = level;
  gameState = "PLAYING";
  updateHUD();

  // Hide Screens
  document
    .querySelectorAll(".screen")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("quiz-modal").classList.remove("active");

  // Show Touch Controls
  document.getElementById("touch-controls").style.display = "flex";

  // Build Level Procedurally
  buildLevel(currentLevel);
}

function nextLevel() {
  if (currentLevel < 5) {
    startGame(currentLevel + 1);
  } else {
    endGame(true); // Game totally finished
  }
}

// --- PROCEDURAL LEVEL GENERATOR ---
function buildLevel(level) {
  camera.x = 0;

  // Player Setup
  player = {
    x: 50,
    y: 300,
    w: 30,
    h: 40,
    vx: 0,
    vy: 0,
    color: "#FF9800",
    grounded: false,
    invulnerable: 0,
  };

  platforms = [];
  coins = [];
  enemies = [];

  // 1. Ground Floor (spans the whole estimated length)
  // Length = roughly 20 words * 300px spacing = 6000px
  platforms.push({ x: -100, y: 400, w: 10000, h: 100 });

  // 2. Initial Platform
  let currentX = 0;
  platforms.push({ x: 0, y: 350, w: 400, h: 20 });
  currentX = 400;

  // 3. Get Words for this level
  const levelWords = VOCAB_DATABASE[level - 1]; // Array of 20 words

  // 4. Generate Platforms & Coins for each word
  levelWords.forEach((wordObj, i) => {
    // Randomize Gap (Difficulty increases slightly by level)
    const gap = 80 + Math.random() * (50 + level * 10);
    currentX += gap;

    // Platform Height
    // Adjusted logic to keep platforms reachable from ground if needed
    // Platforms clamped between Y=250 and Y=370 (Screen bottom is 450, ground at 400)
    const heightVar = level * 30 + 50;
    const yPos = 280 + (Math.random() * heightVar - heightVar / 2);
    // Clamp Y to stay reachable from ground
    const safeY = Math.max(250, Math.min(yPos, 370));

    const pWidth = 120 + Math.random() * 100;

    platforms.push({ x: currentX, y: safeY, w: pWidth, h: 20 });

    // Place Coin in center of platform
    // LOWERED COIN: Now floats at safeY - 30 instead of -50
    coins.push({
      x: currentX + pWidth / 2 - 12,
      y: safeY - 30,
      w: 25,
      h: 25,
      wordData: wordObj,
      collected: false,
    });

    // Place Enemy?
    // Chance increases with level (Level 1: 30%, Level 5: 70%)
    const enemyChance = 0.2 + level * 0.1;
    if (Math.random() < enemyChance) {
      // Determine if enemy is on ground or platform
      const onGround = Math.random() > 0.5;
      if (onGround) {
        enemies.push({
          x: currentX,
          y: 370,
          w: 30,
          h: 30,
          minX: currentX,
          maxX: currentX + pWidth,
          vx: 2 + level * 0.2, // Faster in later levels
          color: "#f44336",
        });
      } else {
        enemies.push({
          x: currentX + 20,
          y: safeY - 30,
          w: 30,
          h: 30,
          minX: currentX,
          maxX: currentX + pWidth,
          vx: 2,
          color: "#f44336",
        });
      }
    }

    currentX += pWidth;
  });

  // End Platform
  currentX += 100;
  platforms.push({ x: currentX, y: 350, w: 500, h: 20 });
}

/**
 * GAME LOOP
 */
function gameLoop() {
  if (gameState === "PLAYING") {
    update();
    draw();
  }
  requestAnimationFrame(gameLoop);
}

function update() {
  // Movement
  if (keys.ArrowRight) player.vx += 1;
  if (keys.ArrowLeft) player.vx -= 1;
  player.vx *= FRICTION;
  player.vy += GRAVITY;
  player.x += player.vx;

  // H-Collision
  platforms.forEach((plat) => {
    const dir = colCheck(player, plat);
    if (dir === "l" || dir === "r") player.vx = 0;
  });

  player.y += player.vy;
  player.grounded = false;

  // V-Collision
  platforms.forEach((plat) => {
    const dir = colCheck(player, plat);
    if (dir === "b") {
      player.grounded = true;
      player.vy = 0;
    } else if (dir === "t") {
      player.vy *= -1;
    }
  });

  // Pit Death
  if (player.y > CANVAS_HEIGHT + 100) takeDamage(true);

  // Camera
  camera.x = player.x - CANVAS_WIDTH / 2;
  if (camera.x < 0) camera.x = 0;

  // Interactions
  coins.forEach((coin) => {
    if (!coin.collected && checkCollision(player, coin)) {
      startQuiz(coin);
    }
  });

  enemies.forEach((enemy) => {
    enemy.x += enemy.vx;
    if (enemy.x > enemy.maxX || enemy.x < enemy.minX) enemy.vx *= -1;
    if (player.invulnerable <= 0 && checkCollision(player, enemy)) {
      takeDamage();
    }
  });

  if (player.invulnerable > 0) player.invulnerable--;

  // Level Completion Check
  const remaining = coins.filter((c) => !c.collected).length;
  if (remaining === 0) {
    if (currentLevel === 5) {
      endGame(true);
    } else {
      levelComplete();
    }
  }
}

function draw() {
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.save();
  ctx.translate(-camera.x, 0);

  // Platforms
  ctx.fillStyle = "#795548";
  platforms.forEach((p) => {
    ctx.fillRect(p.x, p.y, p.w, p.h);
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(p.x, p.y, p.w, 5);
    ctx.fillStyle = "#795548";
  });

  // Coins
  ctx.fillStyle = "#FFD700";
  ctx.strokeStyle = "#DAA520";
  ctx.lineWidth = 2;
  coins.forEach((c) => {
    if (!c.collected) {
      ctx.beginPath();
      ctx.arc(c.x + c.w / 2, c.y + c.h / 2, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#000";
      ctx.font = "bold 16px Arial";
      ctx.fillText("?", c.x + 9, c.y + 18);
      ctx.fillStyle = "#FFD700";
    }
  });

  // Enemies
  enemies.forEach((e) => {
    ctx.fillStyle = e.color;
    ctx.beginPath();
    ctx.moveTo(e.x, e.y + e.h);
    ctx.lineTo(e.x + e.w / 2, e.y);
    ctx.lineTo(e.x + e.w, e.y + e.h);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillRect(e.x + 5, e.y + 10, 5, 5);
    ctx.fillRect(e.x + 20, e.y + 10, 5, 5);
  });

  // Player
  if (player.invulnerable % 10 < 5) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "#fff";
    let eyeX = player.vx >= 0 ? 18 : 4;
    ctx.fillRect(player.x + eyeX, player.y + 8, 5, 5);
  }

  ctx.restore();
}

/**
 * QUIZ & UI LOGIC
 */
function startQuiz(coin) {
  gameState = "QUIZ";
  currentQuizCoin = coin;

  const modal = document.getElementById("quiz-modal");
  const wordText = document.getElementById("quiz-word-text");
  const optionsDiv = document.getElementById("quiz-options");

  wordText.innerText = coin.wordData.word;
  optionsDiv.innerHTML = "";

  // 1. Correct Answer
  let answers = [{ text: coin.wordData.meaning, correct: true }];

  // 2. Wrong Answers (Pull randomly from entire DB, excluding current)
  // Flatten DB for distractor selection
  const allWords = VOCAB_DATABASE.flat();
  let otherWords = allWords.filter((w) => w.word !== coin.wordData.word);
  otherWords.sort(() => Math.random() - 0.5);

  otherWords.slice(0, 3).forEach((w) => {
    answers.push({ text: w.meaning, correct: false });
  });

  answers.sort(() => Math.random() - 0.5);

  answers.forEach((ans) => {
    const btn = document.createElement("div");
    btn.className = "option-btn";
    btn.innerText = ans.text;
    btn.onclick = () => handleAnswer(ans.correct);
    optionsDiv.appendChild(btn);
  });

  modal.classList.add("active");
  draw();
}

function handleAnswer(isCorrect) {
  document.getElementById("quiz-modal").classList.remove("active");

  if (isCorrect) {
    score += 10;
    currentQuizCoin.collected = true;
    updateHUD();
  } else {
    lives--;
    updateHUD();
    player.vx = -10;
    player.vy = -5;
    player.invulnerable = 60;
    if (lives <= 0) {
      endGame(false);
      return;
    }
  }
  gameState = "PLAYING";
}

function levelComplete() {
  gameState = "LEVEL_COMPLETE";
  document.getElementById("level-complete-screen").classList.add("active");
}

function updateHUD() {
  document.getElementById("score-display").innerText = `Score: ${score}`;
  document.getElementById("level-display").innerText = `Level ${currentLevel}`;
  let hearts = "❤️".repeat(Math.max(0, lives));
  document.getElementById("lives-display").innerText = `Lives: ${hearts}`;
}

function takeDamage(resetPos = false) {
  lives--;
  updateHUD();
  player.invulnerable = 60;
  player.vy = -5;

  if (resetPos) {
    player.x -= 100;
    player.y = 300;
    player.vx = 0;
    if (player.x < 0) player.x = 50;
  }

  if (lives <= 0) endGame(false);
}

function endGame(win) {
  gameState = win ? "WIN" : "GAMEOVER";
  if (win) {
    document.getElementById("win-screen").classList.add("active");
    document.getElementById(
      "final-score-win"
    ).innerText = `Final Score: ${score}`;
  } else {
    document.getElementById("game-over-screen").classList.add("active");
    document.getElementById(
      "final-score-lose"
    ).innerText = `Final Score: ${score}`;
  }
}

// Collision Utils
function checkCollision(r1, r2) {
  return (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.y + r1.h > r2.y
  );
}

function colCheck(shapeA, shapeB) {
  let vX = shapeA.x + shapeA.w / 2 - (shapeB.x + shapeB.w / 2),
    vY = shapeA.y + shapeA.h / 2 - (shapeB.y + shapeB.h / 2),
    hWidths = shapeA.w / 2 + shapeB.w / 2,
    hHeights = shapeA.h / 2 + shapeB.h / 2,
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

init();
