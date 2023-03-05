function abrirModal(viewModal){
    let modal = document.getElementById(viewModal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function fecharModal(viewModal){
    let modal = document.getElementById(viewModal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}