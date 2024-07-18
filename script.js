
const overlay = document.getElementById('overlay')
            myButton.addEventListener(
                "click",
                function () {
                    myPopup.classList.add("show");
                }
            );
            closePopup.addEventListener(
                "click",
                function () {
                    myPopup.classList.remove(
                        "show"
                    );
                }
            );
            window.addEventListener(
                "click",
                function (event) {
                    if (event.target == myPopup) {
                        myPopup.classList.remove(
                            "show"
                        );
                    }
                }
            );
  
            myButton.addEventListener(
                "click",
                function () {
                    myPopup.classList.add("show");
                }
            );
            closePopup.addEventListener(
                "click",
                function () {
                    myPopup.classList.remove(
                        "show"
                    );
                }
            );
            window.addEventListener(
                "click",
                function (event) {
                    if (event.target == myPopup) {
                        myPopup.classList.remove(
                            "show"
                        );
                    }
                }
            );

     


