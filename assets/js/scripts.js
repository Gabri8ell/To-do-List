var tarefa = document.querySelector('#nomeTarefa');
var checkbox = document.querySelector('.checkboxs')


function inserirTarefa(){
    var inputEl = document.createElement("input");
    var label = document.createElement("label");
    var quebra = document.createElement('br');

    label.innerHTML = tarefa.value

    inputEl.setAttribute("type", "checkbox");

    checkbox.appendChild(inputEl);//cria o input checbox
    checkbox.appendChild(label);//cria o label
    checkbox.appendChild(quebra);

}

