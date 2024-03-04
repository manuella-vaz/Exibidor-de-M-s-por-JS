function exibir() {
    var valor = document.getElementById("txtvalor").value;
    var resultado = document.getElementById("txtresultado");

    switch (valor) {
        case "1":
            {
                resultado.value = "Janeiro";
                break;
            }
        case "2":
            {
                resultado.value = "Fevereiro";
                break;
            }

        case "3":
            {
                resultado.value = "Março";
                break;
            }

        case "4":
            {
                resultado.value = "Abril";
                break;
            }

        case "5":
            {
                resultado.value = "Maio";
                break;
            }

        case "6":
            {
                resultado.value = "Junho";
                break;
            }

        case "7":
            {
                resultado.value = "Julho";
                break;
            }

        case "8":
            {
                resultado.value = "Agosto";
                break;
            }

        case "9":
            {
                resultado.value = "Setembro";
                break;
            }

        case "10":
            {
                resultado.value = "Outubro"
                break;
            }

        case "11":
            {
                resultado.value = "Novembro"
                break;
            }

        case "12":
            {
                resultado.value = "Dezembro"
                break;
            }

        default:
            resultado.value = "Digite um valor valido!";

    }

}
