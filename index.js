  // Função auxiliar para remover o resultado anterior
  function removerResultadoAnterior() {
    const resultadoAnterior = document.querySelector("#resultado");
    if (resultadoAnterior) {
      resultadoAnterior.remove();
    }
  }
  
  // Função auxiliar para exibir o resultado
  function exibirResultado(resultado) {
    removerResultadoAnterior(); // Remove o resultado anterior, se existir
  
    const resultadoElement = document.createElement("p");
    resultadoElement.textContent = resultado;
    resultadoElement.setAttribute("id", "resultado"); // Adiciona um ID ao elemento para identificá-lo
    document.body.appendChild(resultadoElement);
  }
  
    // Verificar se um número é primo
    function verificarPrimo() {
       const numero = parseInt(document.getElementById("numeroPrimo").value);
  
  
       if (numero <= 1) {
         exibirResultado("O número deve ser maior que 1.");
         return;
       }
  
  
       for (let i = 2; i < numero; i++) {
         if (numero % i === 0) {
           exibirResultado(`${numero} não é primo.`);
           return;
         }
       }
  
  
       exibirResultado(`${numero} é primo.`);
     }
  
     // Validar uma senha
     function validarSenha() {
        const senha = document.getElementById("senha").value;
      
        if (senha.length < 8 || !senha.match(/[a-z]/) || !senha.match(/[A-Z]/) || !senha.match(/\d/)) {
          exibirResultado("A senha não atende aos requisitos mínimos.");
          return;
        }
        
        exibirResultado("Senha válida.");
      }
  
     // Calcular o fatorial de um número
     function calcularFatorial() {
       const numero = parseInt(document.getElementById("fatorial").value);
  
       if (numero < 0) {
         exibirResultado("O número deve ser não negativo.");
         return;
       }

       if (numero < 1 || numero > 10) {
        exibirResultado("O número deve estar entre 1 e 10.");
        return;
      }
  
       let fatorial = 1;
       for (let i = 2; i <= 10; i++) {
         fatorial *= i;
         console.log(i)
       }

       exibirResultado(`Fatorial de ${numero}: ${fatorial}`); 
       
     }
    
     // Verificar se um número é um quadrado perfeito
     function verificarQuadradoPerfeito() {
       const numero = parseInt(document.getElementById("numeroQuadrado").value);
  
  
       if (numero < 0) {
         exibirResultado("O número deve ser não negativo.");
         return;
       }
  
  
       const raizQuadrada = Math.sqrt(numero);
  
  
       if (Math.floor(raizQuadrada) === raizQuadrada) {
         exibirResultado(`${numero} é um quadrado perfeito.`);
       } else {
         exibirResultado(`${numero} não é um quadrado perfeito.`);
       }
     }