function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login== 'admin' && senha=='admin'){
        alert('Bem Vindo');
        location.href = "../cadastro/cadastro-clientes.html";
    }else{
        alert('Usuario Incorreto')
    }
}