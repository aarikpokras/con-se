function mainPs(loc) {
  fetch('/res/' + loc.toLowerCase().replace(/\ba\b/gi, '').replace(/\ban\b/gi, '').replace(/\s/g, '').replace(/who+is/gi, '').replace(/what+is/gi, '').replace(/the/gi, '').replace(/\./g, '').replace(/\?/g, '').replace(/definition/gi, '') + '.json')
    .then(response => response.json())
    .then(data => {
    document.getElementById("apdata-title").innerHTML = "<a href = '" + data.url + "'>" + data.name + "</a>";
    document.getElementById("apdata-des").innerHTML = data.url;
    document.getElementById("apdata-url").innerHTML = data.description;
  })
  .catch(err => {
    console.error('Error ' + err + " (No results error)");
    document.getElementById('apdata-title').innerHTML = "No results found for \"" + document.getElementById('main-inp').value + "\".";
    document.getElementById('apdata-des').innerHTML = "But remember, this search engine is still in development.";
    document.getElementById('apdata-url').innerHTML = "Try searching without punctuation or complex phrases.";
  })
}

var searchVal = document.getElementById('value');
document.addEventListener('keydown', function(evkey) {
  if (evkey.key === 'Enter') {
    searchVal.innerHTML = document.getElementById('main-inp').value;
    mainPs(document.getElementById('main-inp').value);
    console.log('Client Search querySelector input#main-inp: ' + document.getElementById('main-inp').value)
  }
})

if (localStorage.getItem('visits')) {
  console.warn('LS GI Aborted (Not a bad thing)')
} else {
  localStorage.setItem('visits', 'not-null')
  console.warn('LS GI for visits set: ' + localStorage.getItem('visits'))
  alert("Hi, I'm Concise Search Engine, the no-nonsense search engine.")
}

// Find url parameter "q"
const params = new URLSearchParams(window.location.search)
if (params.get('q')) {
  document.getElementById('main-inp').value = params.get('q');
}