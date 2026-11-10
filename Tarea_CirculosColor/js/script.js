let varios = function(){
    let nuevoCirculo = document.createElement('div');
    nuevoCirculo.className = 'circulo';
    nuevoCirculo.style.backgroundColor = document.getElementById('capa4').value;
    
    // Evento al dar clic sobre el círculo para cambiar su color al actual seleccionado
    nuevoCirculo.addEventListener('click', function(){
        nuevoCirculo.style.backgroundColor = document.getElementById('capa4').value;
    });

    document.getElementById('lienzo').appendChild(nuevoCirculo);
}

document.getElementById('btnPintar').addEventListener('click', function(){varios()});