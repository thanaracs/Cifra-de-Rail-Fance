function cifrador() {
    var linhasArray = [];
    var arrayDeLinhas = [];
    var chave = document.getElementById('chave').value;
    var palavra = document.getElementById('palavra').value;
    var linhaAtual = chave;
    var sinalAtual = '+';

    if (palavra.length < chave) {
        window.alert('Informe uma palavra maior');
    }

    //iniciar o array de linhas
    for (let i = 0; i < chave; i++) {
        linhasArray.push([]);

    }
    let contador = 0;
    for (let linha = 0; linha < palavra.length; linha++) {
        for (let coluna = 0; coluna < chave.length; coluna++) {
            linhasArray[contador][contador] = palavra[linha][coluna];
            contador = contador + 1
            linhaAtual = linhaAtual - 1;

            if (contador == chave) {
                if (linhaAtual != 0) {
                    linhaAtual = linhaAtual - 1;
                    linhasArray[linhaAtual][contador] = palavra
                }
            }

            if (contador == chave) {
                linhaAtual = linhaAtual - 1;
            }




            // if ((linhaAtual + 1) >= chave) {

            //     linhaAtual = linhaAtual - 1;
            // }
            console.log(linhasArray)
            console.log(linhaAtual)

            if ((linha + 1) > palavra.length) {
                console.log("Opa, final da palavra")
            }
        }
    }

}


/*
        for (let i = 0; i < palavra.length; i++) {
            linha = linha + ' ';
            console.log(linha);
            //i + 1 == palavra.length && (palavra.length % 2 != 0))
            //condição da ultima letra
            if ((i + 1) >= palavra.length) {
                console.log("Opa, final da palavra")
            }
        }


        railFance.push(linha);
        console.log(railFance);
        for (let i = 0; i < chave; i++) {


            console.log('opa,entrei')
            arrayDeLinhas.push(railFance);

            if ()
        }
        //array de lihas contem o tamanho da array + a palvra em cada uma das linhas
        console.log(arrayDeLinhas); *
        /
*/