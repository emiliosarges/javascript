function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
   
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        document.body.style.background = '#e2cd9f';

    } else if (hora >= 12 && hora < 19) {
        img.src = 'tarde.jpg';
        document.body.style.background = '#b9846f';
    } else {
        img.src = 'noite.jpg';
        document.body.style.background = '#515154';
    }  
}



