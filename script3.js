
async function bibleverse() {
    let verse = document.getElementById("bible").value;
    let res = await fetch("https://bible-api.com/"+verse);
    let result = await res.json();
    let div = document.createElement('div');
    div.innerHTML = result.text;
    div.style.textAlign="center";
    document.body.append(div);
    console.log(result.text);
}
