function mainPs(loc) {
  fetch('/res/' + loc + '.json')
    .then(response => response.json())
    .then(data => {
    document.getElementById("apdata").innerHTML = data.name + '<br />';
    document.getElementById("apdata").innerHTML += data.description + '<br />';
    document.getElementById("apdata").innerHTML += data.url;
  })
  .catch(err => console.error('whoopsy daisy i pood myself'))
}