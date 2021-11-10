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

let teste = microondas(5, 8); // (opção prato , tempo usuario)
console.log(teste);