document.addEventListener("DOMContentLoaded", function() {
    function handleClick() {
      console.log("Você clicou no botão!");
      publishedCompanyName = document.getElementById("CompanyName").value;
      console.log(publishedCompanyName);
      colocarNoSite(gerarTituloPromocional());
    }
  
    var botao = document.getElementById("phraseGenerator");
    botao.onclick = handleClick;
  });

// variaveis uteis 
let publishedCompanyName;
let tituloPromocional;
// let textToCopy;

// Array de palavras-chave para os títulos promocionais
const palavrasChave = ["delicioso", "saboroso", "irresistível", "incrível", "especial", "promocional", "imperdível", "refrescante", "tentador", "exclusivo"];

// Array de itens do menu da lanchonete
const menu = ["Hambúrguer", "Pizza", "Batata Frita", "Milkshake", "Sanduíche", "Salada", "Sorvete", "Cachorro-quente", "Suco", "Torta"];

//Array com o prefixo inicial
const prefixo = ["Não perca", "Desfrute", "Saboreie", "Experimente", "Aproveite"];

//Array com preposições
const preposições = ["na", "da", "no", "de", "em", "do"];

// Função para gerar um título promocional aleatório
function gerarTituloPromocional() {
  const palavraChave = palavrasChave[Math.floor(Math.random() * palavrasChave.length)];
  const itemMenu = menu[Math.floor(Math.random() * menu.length)];
  const prefixoInicial = prefixo[Math.floor(Math.random() * prefixo.length)]; 
  const preposicão = preposições[Math.floor(Math.random() * preposições.length)]

  if (publishedCompanyName == ""){
    tituloPromocional = `${prefixoInicial} ${itemMenu} ${palavraChave}`;
  } else {
    tituloPromocional = `${prefixoInicial} ${itemMenu} ${palavraChave} ${preposicão} ${publishedCompanyName}!`;
  }

  return tituloPromocional;
}

// funçao que coloca a frase gerada no site 

// function colocarNoSite(){
//   //criando o elemento
//   const newPhrase = document.createElement('p');
//   newPhrase.className = 'generatedPhrases';
//   newPhrase.textContent = tituloPromocional;

//   // adicionar o elemento há um elemento pai
//   const FatherElement = document.querySelector('#resultado');
//   FatherElement.appendChild(newPhrase);

//   const newCopy = document.createElement("button");
//   newCopy.className = 'botaoesDaPagina';
//   newCopy.id = 'copyButton';
//   newCopy.textContent = "Copiar";
//   textToCopy = tituloPromocional;
//   console.log(textToCopy); 

//   //adicionar o evento onclick 
//   newCopy.onclick = foiClicado(tituloPromocional);

//   // adicionar o elemento há um elemento pai
//   FatherElement.appendChild(newCopy);
// }

//tenho que criar o botao de copy e de deletar 
  

///////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//nova versão do código

function colocarNoSite() {
  // Criando o elemento <p>
  const newPhrase = document.createElement('p');
  newPhrase.className = 'generatedPhrases';
  newPhrase.textContent = tituloPromocional;

  // Adicionando o elemento <p> a um elemento pai
  const FatherElement = document.querySelector('#resultado');
  FatherElement.appendChild(newPhrase);

  // Criando o botão
  const newCopy = document.createElement('button');
  newCopy.className = 'botaoesDaPagina';
  newCopy.textContent = 'Copiar';
  const textToCopy = tituloPromocional;

  // Adicionando o evento onclick com o manipulador correto
  newCopy.onclick = function() {
    foiClicado(textToCopy);
  };

  // Adicionando o botão a um elemento pai
  FatherElement.appendChild(newCopy);
}

// Função que será chamada quando o botão for clicado
function foiClicado(texto) {
  // Lógica para copiar o texto (você pode usar document.execCommand('copy') ou o Clipboard API aqui)
  console.log('Texto copiado:', texto);
  navigator.clipboard.writeText(texto)
}
