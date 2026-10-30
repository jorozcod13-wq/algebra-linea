/*Script de Diana: aplicacion.html*/
function draw(id, values) {
    const el = document.getElementById(id);

    el.innerHTML = '';

    values.forEach(v => {
        const cell = document.createElement('div');

        cell.className = 'pixel';
        cell.style.backgroundColor = `rgb(${v}, ${v}, ${v})`;
        cell.style.color = v > 135 ? '#111' : '#fff';
        cell.textContent = v;

        el.appendChild(cell);
    });
}


/*Script de Javier: operaciones.html*/
function obtenerValores() {
            return {
                a11: parseFloat(document.getElementById('a11').value) || 0,
                a12: parseFloat(document.getElementById('a12').value) || 0,
                a21: parseFloat(document.getElementById('a21').value) || 0,
                a22: parseFloat(document.getElementById('a22').value) || 0,
                b11: parseFloat(document.getElementById('b11').value) || 0,
                b12: parseFloat(document.getElementById('b12').value) || 0,
                b21: parseFloat(document.getElementById('b21').value) || 0,
                b22: parseFloat(document.getElementById('b22').value) || 0,
            };
        }

        function mostrarResultado(titulo, pasosHtml) {
            const container = document.getElementById('resultado-container');
            document.getElementById('res-titulo').innerText = titulo;
            document.getElementById('res-pasos').innerHTML = pasosHtml;
            container.classList.remove('hidden');
            if (window.MathJax) {
                MathJax.typesetPromise();
            }
        }

        function calcularSuma() {
            const v = obtenerValores();
            const c11 = v.a11 + v.b11;
            const c12 = v.a12 + v.b12;
            const c21 = v.a21 + v.b21;
            const c22 = v.a22 + v.b22;

            const html = `
                <p><strong>Paso 1:</strong> Sumar elementos en la misma posición.</p>
                <p>\\[ c_{11} = ${v.a11} + (${v.b11}) = ${c11} \\]</p>
                <p>\\[ c_{12} = ${v.a12} + (${v.b12}) = ${c12} \\]</p>
                <p>\\[ c_{21} = ${v.a21} + (${v.b21}) = ${c21} \\]</p>
                <p>\\[ c_{22} = ${v.a22} + (${v.b22}) = ${c22} \\]</p>
                <p class="text-celadon font-bold pt-2">Matriz Resultante C = A + B:</p>
                <p>\\[ C = \\begin{pmatrix} ${c11} & ${c12} \\\\ ${c21} & ${c22} \\end{pmatrix} \\]</p>
            `;
            mostrarResultado("Procedimiento: Suma A + B", html);
        }

        function calcularResta() {
            const v = obtenerValores();
            const c11 = v.a11 - v.b11;
            const c12 = v.a12 - v.b12;
            const c21 = v.a21 - v.b21;
            const c22 = v.a22 - v.b22;

            const html = `
                <p><strong>Paso 1:</strong> Restar elementos en la misma posición.</p>
                <p>\\[ c_{11} = ${v.a11} - (${v.b11}) = ${c11} \\]</p>
                <p>\\[ c_{12} = ${v.a12} - (${v.b12}) = ${c12} \\]</p>
                <p>\\[ c_{21} = ${v.a21} - (${v.b21}) = ${c21} \\]</p>
                <p>\\[ c_{22} = ${v.a22} - (${v.b22}) = ${c22} \\]</p>
                <p class="text-celadon font-bold pt-2">Matriz Resultante C = A - B:</p>
                <p>\\[ C = \\begin{pmatrix} ${c11} & ${c12} \\\\ ${c21} & ${c22} \\end{pmatrix} \\]</p>
            `;
            mostrarResultado("Procedimiento: Resta A - B", html);
        }

        function calcularProducto() {
            const v = obtenerValores();
            const c11 = (v.a11 * v.b11) + (v.a12 * v.b21);
            const c12 = (v.a11 * v.b12) + (v.a12 * v.b22);
            const c21 = (v.a21 * v.b11) + (v.a22 * v.b21);
            const c22 = (v.a21 * v.b12) + (v.a22 * v.b22);

            const html = `
                <p><strong>Paso 1 (Fila 1 x Columna 1):</strong> \\( (${v.a11})(${v.b11}) + (${v.a12})(${v.b21}) = ${c11} \\)</p>
                <p><strong>Paso 2 (Fila 1 x Columna 2):</strong> \\( (${v.a11})(${v.b12}) + (${v.a12})(${v.b22}) = ${c12} \\)</p>
                <p><strong>Paso 3 (Fila 2 x Columna 1):</strong> \\( (${v.a21})(${v.b11}) + (${v.a22})(${v.b21}) = ${c21} \\)</p>
                <p><strong>Paso 4 (Fila 2 x Columna 2):</strong> \\( (${v.a21})(${v.b12}) + (${v.a22})(${v.b22}) = ${c22} \\)</p>
                <p class="text-celadon font-bold pt-2">Matriz Resultante C = A · B:</p>
                <p>\\[ C = \\begin{pmatrix} ${c11} & ${c12} \\\\ ${c21} & ${c22} \\end{pmatrix} \\]</p>
            `;
            mostrarResultado("Procedimiento: Producto A · B", html);
        }