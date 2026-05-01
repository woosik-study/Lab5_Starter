// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  const synth = window.speechSynthesis;

  // loadVoices
  function loadVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);

  // Press to Talk
  button.addEventListener('click', () => {
    const text = textarea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    // select voice
    const selectedVoiceName = voiceSelect.value;
    const voices = synth.getVoices();
    const selectedVoice = voices.find(v => v.name === selectedVoiceName);
    if (selectedVoice) utterance.voice = selectedVoice;

    // change image when speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face open';
    };

    // change image when done speaking
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}