document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();  // travo o envio do formulario

    
    var formData = new FormData(this); // pego as informações  do meu formulário

   
    var dadosDoFormulario = {};
    formData.forEach(function(valor, chave) {
        dadosDoFormulario[chave] = valor;        // transformo  a informação em um objeto
    });
    debugger

    
    fetch("https://65ee480a08706c584d9b376d.mockapi.io/Estudante", {         // manda para API
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosDoFormulario)
        
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Erro ao enviar os dados para a API.");       // verifico o envio
        }
       
        window.location.href = "registerFamily.html";
    })
    .catch(function(error) {
        console.error("Erro:", error);
      
    });
});
