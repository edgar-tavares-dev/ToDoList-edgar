const button = document.querySelector('.Add_tarefas');
const input = document.querySelector('.digitar_tarefas');
const listaCompleta = document.querySelector('.lista_Add')

let minhaListaDeItens = []

function adcionarNovaTarefa() {

  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false

  });

  input.value = ''

  mostrarTarefa()

}

function mostrarTarefa() {

  let novaLi = ''

  minhaListaDeItens.forEach((item, posicao) => {

    novaLi = novaLi + `
    
    <li class="add ${item.concluida && "feito"}" >

                      <img src="img/checked.png" alt="Checar-tarefas" onclick="concluirTarefa(${posicao})" >
                      <p>${item.tarefa}</p>
                      <img src="img/trash.png" alt="Tarefa-para-lixo" onclick ="deletarItem(${posicao})">
                  
    </li>

  
    `
 })

 listaCompleta.innerHTML = novaLi

localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))
 
}

function concluirTarefa(posicao){

  minhaListaDeItens [posicao].concluida = !minhaListaDeItens [posicao].concluida

  mostrarTarefa()

}

function deletarItem(posicao) {

  minhaListaDeItens.splice(posicao, 1)
 
  mostrarTarefa()


}

function recarregarTarefa(){
  
  const tarefaDolocalStoge = localStorage.getItem('lista')

  if (tarefaDolocalStoge){

  minhaListaDeItens = JSON.parse(tarefaDolocalStoge)

}
  
  mostrarTarefa()

}

recarregarTarefa()

button.addEventListener('click', adcionarNovaTarefa);
