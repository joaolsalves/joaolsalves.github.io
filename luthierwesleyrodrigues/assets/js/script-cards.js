
// imagem: "./assets/img/1.1.jpg",
// texto: "Este é o primeiro card com uma descrição simples e objetiva.",
// altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
document.addEventListener("DOMContentLoaded", () => {

    const cards = [
        {
            imagem: "./assets/img/1.1.jpg",
            texto: "Violinos violas e cellos",
            altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        },
        {
            imagem: "./assets/img/2.1.jpg",
            texto: "Violino Guarneri del Gesu ll Cânone",
            altdesc: "Imagem do produto à venda"
        },
        {
            imagem: "./assets/img/3.1.jpg",
            texto: "Viola",
            altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        },
        
        {
            imagem: "./assets/img/4.1.jpg",
            texto: "Violino Guarneri del Gesu ll Cânone",
            altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        },

        {
            imagem: "./assets/img/5.1.jpg",
            texto: "Viola 42 verniz goma laca antiguizado",
            altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        },

        {
            imagem: "./assets/img/6.1.jpg",
            texto: "Violino Guarneri del gesu cânone 1742",
            altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        }
        // {
        //     imagem: "./assets/img/7.1.jpg",
        //     texto: "Este é o primeiro card com uma descrição simples e objetiva.",
        //     altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        // },
        // {
        //     imagem: "./assets/img/8.1.jpg",
        //     texto: "Este é o primeiro card com uma descrição simples e objetiva.",
        //     altdesc: "Imagem do produto à venda, um violão clássico de madeira clara."
        // }
    ];

    const container = document.getElementById("container-cards");

    if (!container) return;

    const fragment = document.createDocumentFragment();

    cards.forEach(({ imagem, texto, altdesc }) => {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = imagem;
        img.alt = altdesc;

        const content = document.createElement("div");
        content.className = "content";

        const p = document.createElement("p");
        p.textContent = texto;

        const link = document.createElement("a");
        link.href = "https://wa.me/5517988418895";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "btn-consulte";
        link.textContent = "Consulte";

        content.appendChild(p);
        content.appendChild(link);

        card.appendChild(img);
        card.appendChild(content);

        fragment.appendChild(card);

    });

    container.appendChild(fragment);

});