function cifrador() {
    var linhasArray = [];
    var chave = document.getElementById('chave').value;
    var palavra = document.getElementById('palavra').value;
    var linhaAtual = chave;
    var sinalAtual = '+';
    var resultadoFinal = '';

    if (palavra.length < chave) {
        window.alert('Informe uma palavra maior');
    }
    //iniciar o array de linhas
    for (let i = 0; i < chave; i++) {
        linhasArray.push([]);
    }

    let contador = 0;

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
                console.log('entrei, teste')
            }

            if ((contador - 1) < 0) {
                sinalAtual = '+'
            }

            if ((linha + 1) > palavra.length) {
                console.log("Opa, final da palavra")
            }
        }
    }
    console.log(linhasArray)
    for (let i = 0; i < linhasArray.length; i++) {
        console.log(linhasArray[i])
        for (let j = 0; j < linhasArray[i].length; j++) {
            if (linhasArray[i][j] != undefined) {
                resultadoFinal = resultadoFinal + linhasArray[i][j];
            }
        }
    }
    console.log(resultadoFinal)
    document.getElementById('respostaCifrada').value = resultadoFinal;
}
/*
t     r
 h   a a
  a n
   i
*/

//DESCRIPTOGRAFAR
function descifrador() {
    var chave = document.getElementById('chave').value;
    var palavra = document.getElementById('palavra').value;
}