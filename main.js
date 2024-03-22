const fetchData = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const slip = data.slip;

  document.querySelector("#title").innerHTML = `Advice #${data.slip.id}`;
  document.querySelector("#text").innerHTML = `"${data.slip.advice}"`;
};

document.querySelector("button").addEventListener("click", fetchData);
fetchData();
