// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textarea = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const talkButton = document.querySelector('button');


  function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;


  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterance);
  });
}