document.addEventListener("DOMContentLoaded", function () {

        var deletes = document.getElementsByClassName("btn-delete");

        for (var i = 0; i < deletes.length; i++) {
            var element = deletes[i];

            element.addEventListener("click", function () {

                this.parentNode.parentNode.classList.add("hide");

            }, false);
        }

    });
