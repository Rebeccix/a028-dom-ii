const container = document.getElementById("container")

const button = document.getElementById("botao")

const adicionaItem = () => {
    
    const newArticle = document.createElement("article")

    const content = document.createTextNode("")

    newArticle.appendChild(content)

    newArticle.classList.add("item")

    newArticle.addEventListener('click', removeItem)

    container.insertAdjacentElement('beforeend', newArticle)

}

const removeItem = (event) => {
    event.target.remove()
}