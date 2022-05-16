// TODO autor: Thainara Carvalho
function cifrador() {
    var linhasArray = [];
    var chave = document.getElementById('chave').value;
    var palavra = document.getElementById('palavra').value;
    var linhaAtual = chave;
    var sinalAtual = '+';
    var resultadoFinal = '';
    let contador = 0;

    if (palavra.length < chave) {
        window.alert('Informe uma palavra maior');
    }
    //iniciar o array de linhas
    for (let i = 0; i < chave; i++) {
        linhasArray.push([]);
    }
    // [t, x, x, x, n, x, x, x]
    // [x, h, x, i, x, x, x, x]
    // [x, x, a, x, x, x, x, x]
    // [x, h, x, i, x, x, x, x]
    // thainara             coluna 4  contador -0  => 0 - 1 = +0
    // MONTANDO O ARRAY COM A PALAVRA
    for (let coluna = 0; coluna < palavra.length; coluna++) {
        for (let linha = 0; linha < chave.length; linha++) {
            console.log(palavra, palavra[coluna])
            console.log(linhasArray, coluna, contador)
            linhasArray[contador][coluna] = palavra[coluna];

            if (sinalAtual == '+') {
                contador = contador + 1;
            }
            if (sinalAtual == '-') {
                contador = contador - 1;
            }
            if ((contador + 1) >= chave) {
                sinalAtual = '-'
            }
            if ((contador - 1) < 0) {
                sinalAtual = '+'
            }
            console.log(linhasArray)
        }
    }
    console.log(linhasArray)
        // PEGANDO TODAS AS COLUNAS DE CADA LINHA E JUNTANDO, FORMANDO A PALAVRA CRIPTOGRAFADA
    for (let i = 0; i < linhasArray.length; i++) {
        for (let j = 0; j < linhasArray[i].length; j++) {
            if (linhasArray[i][j] != undefined) {
                resultadoFinal = resultadoFinal + linhasArray[i][j];
            }
        }
    }
    console.log('palavra formada: ' + resultadoFinal)
    document.getElementById('respostaCifrada').value = resultadoFinal;
}

//DESCRIPTOGRAFAR
function descifrador() {
    var linhasArray = [];
    var chave = document.getElementById('chave').value;
    var palavra = document.getElementById('palavra').value;
    var linhaAtual = chave;
    var sinalAtual = '+';
    var resultadoFinal = '';
    let contador = 0;
    var substituicao;
    var palavraX = [];

    for (let i = 0; i < chave; i++) {
        linhasArray.push([]);
    }

    for (let i = 0; i < palavra.length; i++) {
        palavraX.push('-');
    }

    //PEGANDO A PALAVRA CRIPTOGRAFADA E SUBSTITUINDO A POSICAO POR `-`
    for (let coluna = 0; coluna < palavra.length; coluna++) {
        for (let linha = 0; linha < chave.length; linha++) {
            linhasArray[contador][coluna] = palavraX[coluna];
            if (sinalAtual == '+') {
                contador = contador + 1;
            }
            if (sinalAtual == '-') {
                contador = contador - 1;
            }
            if ((contador + 1) >= chave) {
                sinalAtual = '-'
            }
            if ((contador - 1) < 0) {
                sinalAtual = '+'
            }
        }
    }
    console.log(linhasArray)
        // REFAZENDO O ARRAY DE POSICOES COM AS LETRAS NO LUGAR CERTO
        // 0 1 2 / 0 1 2 3 4 5 6 7 8
    for (let j = 0; j < linhasArray.length; j++) {
        for (let i = 0; i < palavra.length; i++) {
            if (linhasArray[j][i] != undefined) {
                linhasArray[j][i] = linhasArray[j][i].replace('-', palavra[contador]);
                contador = contador + 1;
            }
            if ((i + 1) >= palavra) {
                i = 0
            }
            // console.log('letra: ' + linhasArray)
        }
    }
    // PEGANDO A MESMA COLUNA DE CADA LINHA E JUNTEI, FORMANDO A PALAVRA
    for (let coluna = 0; coluna < palavra.length; coluna++) {
        console.log("cheguei aqui")
        for (let linha = 0; linha < chave; linha++) {
            console.log("entrei aqui")
            if (linhasArray[linha][coluna] != undefined) {
                resultadoFinal = resultadoFinal + linhasArray[linha][coluna];
                console.log("palavra final: " + resultadoFinal);
            }
        }
    }
}