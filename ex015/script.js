function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        let fsex = document.getElementsByName('sexo');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >=10 && idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
                if (idade >=0 && idade <10) {
                    //criançã
                    img.setAttribute('src', 'bebe-f.jpg')
                } else if (idade >=10 && idade < 21 ) {
                    //jovem
                    img.setAttribute('src', 'jovem-f.jpg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto-f.jpg')
                } else {
                    //Idoso
                    img.setAttribute('src', 'idoso-f.jpg')
                }
            }
           
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }

}