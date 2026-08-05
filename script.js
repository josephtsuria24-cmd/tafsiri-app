let currentLang = 'en-sw';

const dictionary = {
  'en-sw': {
    'hello': 'jambo', 'goodbye': 'kwaheri', 'thank you': 'asante',
    'please': 'tafadhali', 'yes': 'ndio', 'no': 'hapana', 'how are you': 'habari yako',
    'i am fine': 'nzima', 'water': 'maji', 'food': 'chakula', 'school': 'shule',
    'teacher': 'mwalimu', 'student': 'mwanafunzi', 'book': 'kitabu', 'pen': 'kalamu',
    'house': 'nyumba', 'money': 'pesa', 'friend': 'rafiki', 'love': 'upendo',
    'god': 'mungu', 'family': 'familia', 'today': 'leo', 'tomorrow': 'kesho',
    'good morning': 'habari za asubuhi', 'good evening': 'habari za jioni'
  },
  'sw-en': {
    'jambo': 'hello', 'kwaheri': 'goodbye', 'asante': 'thank you',
    'tafadhali': 'please', 'ndio': 'yes', 'hapana': 'no', 'habari yako': 'how are you',
    'nzima': 'i am fine', 'maji': 'water', 'chakula': 'food', 'shule': 'school',
    'mwalimu': 'teacher', 'mwanafunzi': 'student', 'kitabu': 'book', 'kalamu': 'pen',
    'nyumba': 'house', 'pesa': 'money', 'rafiki': 'friend', 'upendo': 'love',
    'mungu': 'god', 'familia': 'family', 'leo': 'today', 'kesho': 'tomorrow',
    'habari za asubuhi': 'good morning', 'habari za jioni': 'good evening'
  }
};

function setLang(lang){
  currentLang = lang;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('inputText').placeholder = lang === 'en-sw'? 'Type in English...' : 'Andika kwa Kiswahili...';
  document.getElementById('outputText').innerText = '';
}

function translate(){
  let text = document.getElementById('inputText').value.toLowerCase().trim();
  let result = dictionary[currentLang][text] || "Samahani, neno halipatikani / Sorry, word not found";
  document.getElementById('outputText').innerText = result;

  // NEW: Auto speak the result after 0.5s
  setTimeout(() => {
    speakText(result);
  }, 500);
}

function copyText(){
  navigator.clipboard.writeText(document.getElementById('outputText').innerText);
  alert('Copied!');
}

function speakText(text = null){
  let speakThis = text || document.getElementById('outputText').innerText;
  if(!speakThis || speakThis.includes('Sorry')) return;

  let speech = new SpeechSynthesisUtterance(speakThis);

  // Set language for better pronunciation
  if(currentLang === 'en-sw'){
    speech.lang = 'sw-KE'; // Swahili Kenya
  } else {
    speech.lang = 'en-US'; // English US
  }

  speech.rate = 0.9; // Slightly slower for clarity
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
function setLang(lang){
  currentLang = lang;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('inputText').placeholder = lang === 'en-sw'? 'Type in English...' : 'Andika kwa Kiswahili...';
}

function translate(){
  let text = document.getElementById('inputText').value.toLowerCase().trim();
  let result = dictionary[currentLang][text] || "Samahani, neno halipatikani / Sorry, word not found";
  document.getElementById('outputText').innerText = result;
}

function copyText(){
  navigator.clipboard.writeText(document.getElementById('outputText').innerText);
  alert('Copied!');
}

function speakText(){
  let text = document.getElementById('outputText').innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = currentLang === 'en-sw'? 'sw-KE' : 'en-US';
  window.speechSynthesis.speak(speech);
}