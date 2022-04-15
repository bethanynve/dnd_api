
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('#alignment').value
  const url = `https://www.dnd5eapi.co/api/alignments/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = data.desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
