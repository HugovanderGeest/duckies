const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');
const likeButton = document.getElementsByClassName('like');

document.getElementsByClassName('info')[0].style.height = 
document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener('click', dubbel);
        plaatjes[i].addEventListener('dblclick', Click);
        likeButton[i].addEventListener('click', twee);

}

function dubbel() {
        var div = document.createElement("DIV");
            var divbol = document.createElement("DIV");
            divbol.setAttribute("class", "bolletje");
            divbol.style.backgroundColor = this.dataset.kleur;
            div.appendChild(divbol);
            document.getElementById("bolletjes").appendChild(div);
            this.style.border = 'solid 15px ' + this.dataset.kleur;
            document.getElementById('titel').innerHTML = this.title;
            document.getElementById('titel').style.color = this.dataset.kleur;
            document.getElementById('informatie').innerHTML = this.dataset.info;
            document.getElementById('info').style.border = 'solid 15px ' + this.dataset.kleur;

}

function twee() {
        this.previousSibling.dataset.clicks++
            this.innerHTML = this.previousSibling.dataset.clicks;
}

function Click() {
    this.dataset.clicks++
        this.nextSibling.innerHTML = this.dataset.clicks;
}

function vulKopAan() {
        document.getElementById('duck').innerText = ": "+this.title;
            document.getElementById('kop').style.color  = this.dataset.kleur;
}

function resetKop() {
        document.getElementById('duck').innerText = "";
            document.getElementById('kop').style.color  = 'red';

}

