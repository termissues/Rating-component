'use strict';
function selectedRating() {
    const buttons = document.querySelectorAll('.rating__button');
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            for (let x = 4; x >= 0; x--) {
                if (x >= i) {
                    buttons[x].classList.add("selected");
                } else {
                    buttons[x].classList.remove("selected");
                }
            }
            const received = `
                        <div class="rating__gotten">
                            <img src="images/illustration-thank-you.svg" alt="Received rating icon">
                        </div>
                            <div class="rating__received">
                                <p>You selected ${button.textContent} out of 5</p>
                            </div>
                        <div class="rating__message">
                            <h2>Thank you!</h2>
                            <p>We appreciate you taking the time to give a rating. If you ever need more support,
                            don’t hesitate to get in touch!</p>
                        </div>
                        </div>`;

                document.querySelector('.rating__submit').addEventListener('click', () => {
                document.getElementById('rating__refresh').innerHTML = received;
            });
        });
    });
};

selectedRating();