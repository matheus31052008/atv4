// Adiciona um ouvinte de evento ao botão const cores = ['red', 'blue', 'green', 'orange', 'purple']; let indice = 0; const botao = document.getElementById('botao'); const texto = document.getElementById('texto'); botao.addEventListener('click', function () { texto.style.color = 'cores[indice]'; }); // Exibe o código JS na página como exemplo const codigoVisivel = `const botao = document.getElementById('botao'); const texto = document.getElementById('texto'); const cores = ['red', 'blue', 'green', 'orange', 'purple']; let indice = 0; botao.addEventListener('click', function () { texto.style.color = 'cores[indice]'; });`;const cores = ['red', 'blue', 'green', 'orange', 'purple'];
let indice = 0;

const botao = document.getElementById('botao');
const texto = document.getElementById('texto');
const botaoReset = document.getElementById('botao-reset');
const botaoTexto = document.getElementById('botao-texto');

botao.addEventListener('click', function () {
  texto.style.color = cores[indice];
  indice = (indice + 1) % cores.length;
});

botaoReset.addEventListener('click', function () {
  texto.style.color = ''; // Volta para a cor padrão
});

botaoTexto.addEventListener('click', function () {
  texto.textContent = 'O texto foi alterado com sucesso!';
});
 
