let elementosAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < elementosAcordeon.length; i++) {
    elementosAcordeon[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display == "flex") {
            panel.style.display = "none";
        }
        else { panel.style.display = "flex"; }
    })
}

let icon = document.getElementById("profileph")

        function profDisp() {

            if (icon.style.display == "flex") {
                icon.style.display = "none";
            }
            else {
                icon.style.display = "flex";
            }


        }

        