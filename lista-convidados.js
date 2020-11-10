class ListaConvidados{
 constructor(){
     this.contador=0
     this.id=0
 }
    adicionar(){

        if( document.getElementById("inputConvidado").value==""){
alert("Necessário informar o nome")
        }else{

      
        this.contador=this.contador+1
let nome = document.getElementById("inputConvidado").value




let div = document.createElement("div")
div.classList.add("item-lista")
div.id="conv"+this.id
 
let span = document.createElement("span")
span.innerText = nome
let imgDelete = document.createElement("img")
imgDelete.src="img/delete.svg"
imgDelete.setAttribute("onclick","lista.excluir('"+div.id+"')")


let imgEdit= document.createElement("img")
imgEdit.src="img/edit.svg"
imgEdit.setAttribute("onclick", "lista.editar('"+ div.id+"')")


div.appendChild(span)
div.appendChild(imgEdit)
div.appendChild(imgDelete)


let lista = document.getElementById("lista")
lista.appendChild(div)


this.id=this.id+1
this.atualizarQuantidade()
document.getElementById("inputConvidado").value=""

}
    }

    atualizarQuantidade(){
        let contador = document.getElementById("contador")
        contador.innerText = this.contador
    }
    limpar(){
        //por enquanto não estou utilizando
        document.getElementById("inputConvidado").value=""
    }
    excluir(id){
 let conv = document.getElementById(id)
 let lista = document.getElementById("lista")
 lista.removeChild(conv)

 this.contador = this.contador-1
 this.atualizarQuantidade()
}
editar(id){
    
let nome= document.getElementById(id).childNodes[0].innerText

 document.getElementById("inputConvidado").value=nome
 this.excluir(id)

 


}
    
}

var lista = new ListaConvidados()