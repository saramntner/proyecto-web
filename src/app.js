//Que los elementos se desvelen al hacer scroll 

const bloques = document.querySelectorAll(".aparecer");

const revelarBloque = (entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        } else {
            entrada.target.classList.remove("visible");
        }
    });
}

const observador = new IntersectionObserver(revelarBloque, {
    root: null,
    rootMargin: "0px",
    threshold: 0
});

bloques.forEach((bloque) => observador.observe(bloque));

//Importar dependencia
import Swal from 'sweetalert2';

//Código de sweetalert2 

document.addEventListener("DOMContentLoaded", () => {
    const subscribe = document.getElementById("suscribirse");
    subscribe.addEventListener("click", async () => {
        const { value: email } = await Swal.fire({
            title: "Suscríbete a la Newsletter",
            input: "email",
            inputPlaceholder: "Introduce tu email",
            confirmButtonText: "Suscribirme",
            customClass: {
                popup: 'swalpopup',
                title: 'swaltitle',
                input: 'swalinput',
                validationMessage: 'swalvalidationMessage',
                confirmButton: 'swalconfirmButton',
            }
        });
        if (email) {
            Swal.fire({
                title: "¡Gracias por suscribirte!",
                customClass: {
                    popup: 'swalpopup2',
                    title: 'swaltitle2',
                    confirmButton: 'swalconfirmButton',
                }
            });
        }
    })()
});

