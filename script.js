//Função responsável por adicionar um evento de observação no corpo do site inteiro para detectar qual tecla o usuário digitou.
//Basicamente este comando irá ficar monitorando qual tecla o usuário clicou e irá executar alguma coisa que pedirmos dentro dele, uma vez que estamos criando uma arrow function dentro dele
//O som será executado assim que o usuário apertar a tecla. Isso porque utilizamos o 'keydown'
//Este eventListener recebe uma função que transforma a tecla que o usuário clicou e transforma em letra minúscula e já chama a função responsável por fazer executar o som respectivo
document.body.addEventListener('keydown', (event) => {
    playSound(event.code.toLocaleLowerCase()); //O "toLowerCase" foi somente para transformar o resultado das teclas que clicamos, em minúsculo, para que possamos chamar o som respectivo conforme nomeamos dentro da pasta sound.
});

//Função para tocar som
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); //variável responsável por pegar o arquivo de áudio correto dentro da pasta sounds, referente exatamente à tecla que o usuário clicou no teclado
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //Se ele encontrou no código HTML, o elemento que o usuário clicou no teclado, então significa que este elemento existe e tem um som para ele. Então é executado o código abaixo
    //Se o usuário digitar uma tecla que não possui som, então não será tocado nenhum som, pois essa condição abaixo não irá encontrar nenhum som para a respectiva tecla apertada no teclado
    if(audioElement) {
        audioElement.currentTime = 0; //Logo que essa primeira verificação for chamada, teremos que o áudio referente à tecla que foi clicada será resetado e voltará para o início para que seja possível tocar essa tecla quantas vezes ela for clicada, independente se a execução desta tecla foi completada ou não. A cada vez que a tecla for clicada, ele eecutará o som da tecla e cortará o som dela assim que ela for clicada
        audioElement.play(); //Função responsável por tocar o som referente à letra que o usuário apertou no teclado
    }

    //Condicional para poder executar o efeito de apertar o botão e mostrar qual tecla foi apertada
    if(keyElement){
        keyElement.classList.add('active'); //Ativa a class de seleção do CSS para esta tecla em específico na tela

        setTimeout(() => {
            keyElement.classList.remove('active'); //Remove a class de seleção do CSS para esta tecla, para o botão não ficar marcado com a seleção mesmo depois da tecla já ter sido executada e o som já ter sido executado
        }, 300);
    }
}

