async function cadastroUsuario(emailCadastro, senhaCadastro, nomeCadastro){
    var formdata = new FormData();
    formdata.append("usuario_email",emailCadastro);
    formdata.append("usuario_senha",senhaCadastro);
    formdata.append("usuario_nome", nomeCadastro);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      mode:'no-cors'
    };
    try{
      const conexao = await fetch("https://localhost:7256/Usuario", requestOptions) 
      const usuario = await Login(emailCadastro,senhaCadastro)
      if(!usuario.ok){
        return false
      }else{
        const usuarioConvertido = await usuario.json()
        return usuarioConvertido
      }
      
    }catch(error){
      return false
    }
}

async function Login(email,senha){
  try{
    const conexao = await fetch(`https://localhost:7256/Usuario?email=${email}&senha=${senha}` ,{
      mode:'no-cors'
    });
    if(conexao.ok)
    return conexao;
  }catch(error){
    return null
  }
}

export const conexaoApi = {
  cadastroUsuario,
}