// === DRUM KEY PLAYBACK ===
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  if (!'ASDFGHJK'.includes(key)) return;

  playSound(key);
  if (isRecording) {
    recordedNotes.push({
      key: key,
      time: Date.now() - startTime
    });
  }
});

document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    playSound(key);
    if (isRecording) {
      recordedNotes.push({
        key: key,
        time: Date.now() - startTime
      });
    }
  });
});

function playSound(key) {
  const audio = new Audio(`sounds/${key}.wav`);
  const button = document.querySelector(`.drum[data-key="${key}"]`);
  if (audio && button) {
    audio.play();
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 100);
  }
}

// === DARK MODE TOGGLE ===
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// === RECORDING FUNCTIONALITY ===
let isRecording = false;
let recordedNotes = [];
let startTime = 0;
let timerInterval = null;

const recordBtn = document.getElementById('record');
const stopBtn = document.getElementById('stop');
const playBtn = document.getElementById('play');
const timerDisplay = document.getElementById('timer');

recordBtn.addEventListener('click', () => {
  recordedNotes = [];
  isRecording = true;
  startTime = Date.now();
  updateTimerDisplay(0);

  timerInterval = setInterval(() => {
    updateTimerDisplay(Date.now() - startTime);
  }, 100);

  recordBtn.disabled = true;
  stopBtn.disabled = false;
  playBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  isRecording = false;
  clearInterval(timerInterval);
  timerInterval = null;

  recordBtn.disabled = false;
  stopBtn.disabled = true;
  playBtn.disabled = recordedNotes.length === 0;
});

playBtn.addEventListener('click', () => {
  if (recordedNotes.length === 0) return;

  for (let note of recordedNotes) {
    setTimeout(() => {
      playSound(note.key);
    }, note.time);
  }
});

// === TIMER DISPLAY ===
function updateTimerDisplay(ms) {
  const seconds = Math.floor(ms / 1000);
  const milliseconds = Math.floor((ms % 1000) / 100);
  timerDisplay.textContent = `⏱️ ${seconds}.${milliseconds}s`;
}
