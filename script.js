const errorNome = document.getElementById("errorNome")
const errorEmail = document.getElementById("errorEmail")
const errorTel = document.getElementById("errorTel")
const errorCpf = document.getElementById("errorCpf")
const errorSenha = document.getElementById("errorSenha")
const errorButton = document.getElementById("errorButton")

function validateForm() {
    let nome = document.forms["myForm"]["nomeComp"].value;
    let email = document.forms["myForm"]["email"].value;
    let tel = document.forms["myForm"]["telefone"].value;
    let cpf = document.forms["myForm"]["cpf"].value;
    let senha = document.forms["myForm"]["senha"].value;
    var valid = true

    if ( nome == ""  ) {
        errorNome.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Campos obrigatórios não registrados.`;
        valid = false;
    } else {errorNome.innerHTML = ``}

    if ( email == "" ) {
        errorEmail.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Campos obrigatórios não registrados.`;
        valid = false;
    } else {errorEmail.innerHTML = ``}

    if ( tel == "" ) {
        errorTel.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Campos obrigatórios não registrados.`;
        valid = false;
    } else {errorTel.innerHTML = ``}

    if ( cpf == "" ) {
        errorCpf.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Campos obrigatórios não registrados.`;
        valid = false;
    } else {errorCpf.innerHTML = ``}

    if ( senha == "" ) {
        errorSenha.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Campos obrigatórios não registrados.`;
        valid = false;
    } else {errorSenha.innerHTML = ``}

    if ( nome !== "" && email !== "" && tel !== "" && cpf !== "" && senha !== "")
    errorButton.innerHTML = `<span style='color:#0F7B0F'> Sucesso! </span>`;
    valid = true;
}
