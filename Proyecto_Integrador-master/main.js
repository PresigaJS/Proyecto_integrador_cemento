function agregar() {
    let nuevoIntegrante = prompt("Ingresa el nombre del nuevo integrante:");
  
    if (nuevoIntegrante) {
      let nuevoElemento = document.createElement("p");
      nuevoElemento.textContent = nuevoIntegrante;
  
      document.querySelector(".nombres").appendChild(nuevoElemento);
    } else {
      alert("Por favor, ingresa un nombre válido.");
    }
}

function retirar() {
    const encargadoInput = document.getElementById("encargadoInput");
    const encargadoNombre = encargadoInput.value.trim();
    
    const personasAutorizadas = [
        "Sebastian Presiga Patiño",
        "Juan Camilo Martinez Agudelo",
        "Daniel Felipe Muñoz Gómez",
        "Compañero Nuevo"
    ];
    
    if (!personasAutorizadas.includes(encargadoNombre)) {
        alert("No autorizado para retirar materiales.");
        return;
    }
    
    const inputElement = document.querySelector('.form__field');
    const inputValue = inputElement.value.trim();
    
    if (inputValue) {
        alert(encargadoNombre + " ha retirado " + inputValue + " materiales.");
        
        encargadoInput.value = '';
        inputElement.value = '';
    } else {
        alert("Por favor ingresa una cantidad.");
    }
}

function eliminar() {
    let integrantes = document.querySelectorAll(".nombres p");
  
    if (integrantes.length > 0) {
      let mensaje = "Selecciona el integrante que deseas eliminar (Ingresa el número):\n";
      integrantes.forEach((integrante, index) => {
        mensaje += `${index + 1}. ${integrante.textContent}\n`;
      });
  
      let indice = prompt(mensaje);
  
      indice = parseInt(indice) - 1;
  
      if (indice >= 0 && indice < integrantes.length) {
        integrantes[indice].remove();
      } else {
        alert("Índice inválido. Intenta de nuevo.");
      }
    } else {
      alert("No hay integrantes para eliminar.");
    }
}

function editar() {
    let integrantes = document.querySelectorAll(".nombres p");
  
    if (integrantes.length > 0) {
      let mensaje = "Selecciona el integrante que deseas editar (Ingresa el número):\n";
      integrantes.forEach((integrante, index) => {
        mensaje += `${index + 1}. ${integrante.textContent}\n`;
      });
  
      let indice = prompt(mensaje);
  
      indice = parseInt(indice) - 1;
  
      if (indice >= 0 && indice < integrantes.length) {
        let nuevoNombre = prompt("Ingresa el nuevo nombre del integrante:");
  
        if (nuevoNombre) {
          integrantes[indice].textContent = nuevoNombre;
        } else {
          alert("Por favor, ingresa un nombre válido.");
        }
      } else {
        alert("Índice inválido. Intenta de nuevo.");
      }
    } else {
      alert("No hay integrantes para editar.");
    }
}
