// algoritmo para utilizar en cualquier proyecto 💥
const btns = document.querySelectorAll(".btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        alert(btns[i].textContent + " 👍 ");
    });
}

/*  ejemplo extra
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        alert(this.textContent + " 👍 "); // en este caso, el this SOLO trabaja con la función normal
    });
}
*/
