const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");

let html = "";
let option = "";
let idForm = "";

const inputTitle = document.getElementById("inputTitle");
const inputContent = document.getElementById("inputContent");
const inputImageUrl = document.getElementById("inputImageUrl");

btnCrear.addEventListener("click", () => {
    option = "new";
    btnSave.textContent = "new";
    inputTitle.value = "";
    inputContent.value = "";
    inputImageUrl.value = "";
myModal.show
();
});


document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        const article = event.target.closest('.col-6')
        const idArticle = article.dataset.id
    fetch(`https://postsepica.onrender.com/posts/${idArticle}`, {
        method: 'DELETE'
    }).then(res => {
        if (res.ok) {
            article.remove()
        }
    }).catch(err => {
        console.error(err)
    })
    }
})

document.addEventListener("click", (event) => {
    if (event.target.matches("#btn-edit")) {
        const article = event.target.closest(".col-6");
        const idArticle = article.dataset.id;
    const urlImageUrlEdit = article.children[0].children[0].src;
    const titleEdit = article.children[0].children[1].children[0].textContent;
    const contentEdit = article.children[0].children[1].children[1].textContent;
    idForm = idArticle;
    inputTitle.value = titleEdit;
    inputContent.value = contentEdit;
    inputImageUrl.value = urlImageUrlEdit;
    option = "edit";
    btnSave.textContent = "Edit";
    myModal.show();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  // console.log("submit");

    if (option === "new") {
        const newPost = {
            title: inputTitle.value,
            content: inputContent.value,
            imageUrl: inputImageUrl.value,
        };
        fetch('https://postsepica.onrender.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(newPost)
    }).then(res => {
        console.log(res)
        if (res.ok) {
        alert("Post created successfully");
        myModal.hide();
        location.reload();
    }})
        .catch((err) => {
        console.error(err);
        });
    }
    if (option === "edit") {
        const newPost = {
            title: inputTitle.value,
            content: inputContent.value,
            imageUrl: inputImageUrl.value,
        };
    fetch(`https://postsepica.onrender.com/posts/${idForm}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
        }).then(res => {
            if (res.ok) {
                alert('Post edited successfully')
                myModal.hide();
                location.reload();
            }
        })
    }
}); 