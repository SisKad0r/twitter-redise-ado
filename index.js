const listaRecomendacionesHTML = document.querySelector(".listaDeRecomendaciones")

const usuariosRecomendados = [
    {
        nombre: "Nahuel",
        apellido: "Poclava",
        nombreUusario: "Nahuuep_",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53lke3mnKvLSDf2aw4fy0NhQr8Slk_OP7xvWQTaZbRNTdxiwbaBB4KDPmUTV8ap8-O_c&usqp=CAU",
    },
    {
        nombre: "Juan",
        apellido: "Dalto",
        nombreUusario: "Juan_da",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6yfTrfpuwixJytXo4_Wkyvk_m-6QXJeja7uRO3moYV8D0BDRde6E0ZKirT4OUCsKTew&usqp=CAU",
    },
    {
        nombre: "Valeria",
        apellido: "Ramires",
        nombreUusario: "VaaleeRamirees",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5psK2ZiCCpkcLB2Vd5-vR5_vJSDOWSIqxg&usqp=CAU",
    },
]

usuariosRecomendados.forEach((usuarios) => {
    listaRecomendacionesHTML.innerHTML = listaRecomendacionesHTML.innerHTML + `
                <div class="recomendacionesCard">
                    <div class="imgRecomendaciones">
                        <img src=${usuarios.img} alt="User Imagenes">
                    </div>
                    <div class="recomendacionesInfo">
                        <h3>${usuarios.nombre} ${usuarios.apellido}</h3>
                        <span>@${usuarios.nombreUusario}</span>
                    </div>
                    <button class="btn">Seguir Usuario</button>
                </div>`
})







