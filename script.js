function contarCeros() {
    // Definir el arreglo de números
    const arreglo = [
        [0, 2, 5, 7, 6],
        [0, 0, 0, 3, 8],
        [2, 9, 6, 3, 4],
        [1, 5, 6, 1, 4],
        [0, 9, 2, 5, 0]
    ];

    // Arreglo para almacenar la cantidad de ceros en cada renglón
    let cerosPorRenglon = [];

    // Mostrar la matriz en el HTML
    let matrizHTML = '<h2>Matriz:</h2><table border="1" cellpadding="5">';
    for (let i = 0; i < arreglo.length; i++) {
        matrizHTML += '<tr>';
        for (let j = 0; j < arreglo[i].length; j++) {
            matrizHTML += `<td>${arreglo[i][j]}</td>`;
        }
        matrizHTML += '</tr>';
    }
    matrizHTML += '</table>';

    // Contar los ceros en cada renglón
    for (let i = 0; i < arreglo.length; i++) {
        let contador = 0;
        for (let j = 0; j < arreglo[i].length; j++) {
            if (arreglo[i][j] === 0) {
                contador++;
            }
        }
        cerosPorRenglon.push(contador);
    }

    // Mostrar los resultados
    let resultado = '<h2>Resultados:</h2>';
    for (let i = 0; i < cerosPorRenglon.length; i++) {
        resultado += `<p>Renglón ${i + 1}: ${cerosPorRenglon[i]} ceros</p>`;
    }

    document.getElementById('resultado').innerHTML = matrizHTML + resultado;
}
