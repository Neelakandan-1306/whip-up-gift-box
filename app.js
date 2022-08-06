const tabel = document.getElementById("grid");
const button = document.getElementById("generatebutton");

button.onclick =()=>{
    let input = document.getElementById("textBox").value;
    let i;
    for(i=1;i<=input;i++)
    {
        let giftu = document.createElement("img");
        giftu.src="./assets/gift.svg"
        tabel.append(giftu);
        giftu.style.height="10vh";
        giftu.style.width="5vw";
        giftu.style.fontSize="0em";
        giftu.style.margin="2px";

    }
    button.hidden=true;
}