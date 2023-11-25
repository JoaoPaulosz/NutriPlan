async function cadastroUsuario(emailCadastro, senhaCadastro, nomeCadastro){
    var formdata = new FormData();
    formdata.append("usuario_email",emailCadastro.value);
    formdata.append("usuario_senha",senhaCadastro.value);
    formdata.append("usuario_nome", nomeCadastro.value);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      mode:'no-cors'
    };
    
    const conexao = fetch("https://localhost:7256/Usuario", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    return conexao;
}

export const conexaoApi = {
  cadastroUsuario,
}