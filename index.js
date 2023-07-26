async function fact() {
    let data = await fetch('https://catfact.ninja/fact');
    let info = await data.json();
    document.getElementById("fact").innerHTML =  info.fact;
  }
  