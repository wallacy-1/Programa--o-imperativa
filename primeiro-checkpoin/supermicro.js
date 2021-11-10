/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva
conforme solicitado. Veja abaixo os requisitos do projeto:
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos
tempos pré-definidos.
 1 - Pipoca – 10 segundos (padrão);
 2 - Macarrão – 8 segundos (padrão);
 3 - Carne – 15 segundos (padrão);
 4 - Feijão – 12 segundos (padrão);
 5 - Brigadeiro – 8 segundos (padrão);
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for
maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabum”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

function microondas(opcaoesc, Tcomida) {
    if (opcaoesc < 1 || opcaoesc > 5) {
        return "Prato inexistente :(";
    }
    switch (true) {
        case (opcaoesc == 1):  //pipoca 10s
            switch (true) {
                case Tcomida >= 30:
                    return "KABUM !!!";
                case Tcomida < 10:
                    return "tempo insuficiente";
                case Tcomida >= 20:
                    return "Comida queimou :(";
                case (Tcomida >= 10 && Tcomida < 20):
                    return "Prato pronto, bom apetite!!!";
            }
        case (opcaoesc == 2 || opcaoesc == 5):   //Macarrão 8s e brigadeiro 8s
            switch (true) {
                case Tcomida >= 24:
                    return "KABUM !!!";
                case Tcomida < 8:
                    return "tempo insuficiente";
                case Tcomida >= 16:
                    return "Comida queimou :(";
                case (Tcomida >= 8 && Tcomida < 16):
                    return "Prato pronto, bom apetite!!!";
            }
        case (opcaoesc == 3):   //Carne 15s
            switch (true) {
                case Tcomida >= 45:
                    return "KABUM !!!";
                case Tcomida < 15:
                    return "tempo insuficiente";
                case Tcomida >= 30:
                    return "Comida queimou :(";
                case (Tcomida >= 15 && Tcomida < 30):
                    return "Prato pronto, bom apetite!!!";
            }
        case (opcaoesc == 4):   //Feijão 12s
            switch (true) {
                case Tcomida >= 36:
                    return "KABUM !!!";
                case Tcomida < 12:
                    return "tempo insuficiente";
                case Tcomida >= 24:
                    return "Comida queimou :(";
                case (Tcomida >= 12 && Tcomida < 24):
                    return "Prato pronto, bom apetite!!!";
            }
        default:
            return "Prato inexistente :(";
    }
}

let teste = microondas(5, 8);
console.log(teste);