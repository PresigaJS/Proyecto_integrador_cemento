function agregarMaterial() {
    const materialInput = document.getElementById("materialInput");
    const nuevoMaterial = materialInput.value.trim();

    const datalist = document.getElementById("materials");

    if (nuevoMaterial && !materialExistente(nuevoMaterial)) {
        const option = document.createElement("option");
        option.value = nuevoMaterial;

        datalist.appendChild(option);

        materialInput.value = '';
    } else if (!nuevoMaterial) {
        alert("Por favor ingresa un nombre válido para el material.");
    } else {
        alert("El material ya existe en la lista.");
    }
}

function materialExistente(material) {
    const datalist = document.getElementById("materials");
    const options = datalist.getElementsByTagName("option");

    for (let i = 0; i < options.length; i++) {
        if (options[i].value.toLowerCase() === material.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function editarMaterial() {
    const materialInput = document.getElementById("materialInput");
    const materialEditar = materialInput.value.trim();

    if (materialEditar && materialExistente(materialEditar)) {
        const nuevoNombre = prompt("Ingresa el nuevo nombre para el material:", materialEditar);
        if (nuevoNombre && !materialExistente(nuevoNombre)) {
            const datalist = document.getElementById("materials");
            const options = datalist.getElementsByTagName("option");

            for (let i = 0; i < options.length; i++) {
                if (options[i].value === materialEditar) {
                    options[i].value = nuevoNombre;
                    break;
                }
            }
            materialInput.value = '';
        } else if (!nuevoNombre) {
            alert("Por favor ingresa un nombre válido.");
        } else {
            alert("El nuevo nombre ya existe en la lista.");
        }
    } else {
        alert("El material seleccionado no existe.");
    }
}

function eliminarMaterial() {
    const materialInput = document.getElementById("materialInput");
    const materialEliminar = materialInput.value.trim();

    if (materialEliminar && materialExistente(materialEliminar)) {
        const datalist = document.getElementById("materials");
        const options = datalist.getElementsByTagName("option");

        for (let i = 0; i < options.length; i++) {
            if (options[i].value === materialEliminar) {
                datalist.removeChild(options[i]);
                break;
            }
        }
        materialInput.value = '';
    } else {
        alert("El material seleccionado no existe.");
    }
}
