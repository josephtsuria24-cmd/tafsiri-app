let currentLang = 'en-sw';
const dictionary = {'en-sw':{'hello':'jambo','thank you':'asante'},'sw-en':{'jambo':'hello','asante':'thank you'}};

function setLang(lang){
  currentLang = lang;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('inputText').placeholder = lang === 'en-sw'? 'Type in English...' : 'Andika kwa Kiswahili...';
}

function translate(){
  let text = document.getElementById('inputText').value.toLowerCase().trim();
  let result = dictionary[currentLang][text];
  document.getElementById('outputText').innerText = result? result : "Neno halipatikani / Word not found";
}

function copyText(){ navigator.clipboard.writeText(document.getElementById('outputText').innerText); }
function speakText(){
  let speech = new SpeechSynthesisUtterance(document.getElementById('outputText').innerText);
  speech.lang = currentLang === 'en-sw'? 'sw-KE' : 'en-US';
  window.speechSynthesis.speak(speech);
}