const botao = document.getElementById("botaoHtml")

function Hex(){
    botao.setAttribute("onclick","geraCor()")
    document.body.style.backgroundColor = "white";
    corHtml.innerText = "#ffffff";
}

function Simples(){
    botao.setAttribute("onclick","selecionaCor()")
    document.body.style.backgroundColor = "white";
    corHtml.innerText = "#ffffff";
}

function geraCor() {
    const letrasENumeros = '0123456789ABCDEF';
    let cor = '#';
    
    for (let i = 0; i < 6; i++) {
      cor += letrasENumeros[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = cor;
    corHtml.innerText = cor;
  }

  function selecionaCor() {
   const cores = [
    'Red',
    'Rgb(255,233,4)' , 
    '#Fb5550', 
    'Green', 
    '#cd853f', 
    'Rgb(25,23,25)',
    'Blue',
    '#CAF7bE', 
    'Rgba(245,23,53, 0.5)'
   ]
    let cor = cores[Math.floor(Math.random()*9)]
    document.body.style.backgroundColor = cor;
    corHtml.innerText = cor;
  }
