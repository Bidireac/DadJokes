document.getElementById('button').addEventListener('click', displayJokes);
document.querySelector('input[type="number"]').addEventListener('keypress', displayMoreJokes);

let inputNumber = document.getElementById('number');

function displayJokes() {
    $(document).ready(function () {
        let number = inputNumber.value;
        let iterator = 0;

        while (iterator < number) {

            $.ajax({
                headers: {
                    Accept: 'application/json'
                },
                url: 'https://icanhazdadjoke.com/',
                status: 200,
                success: function (data) {
                    let jokes = data.joke;
                    $('.jokes').append(`
                <div class="container text-dark text-center bg-white m-2 p-1">
                <div class="shadow p-3 m-3 bg-white rounded border border-warning h3 font-weight-lighter">${jokes}</div>
                </div>
                `);
                }
            });
            iterator++;
        }
    });
    inputNumber.value = '';
    inputNumber.focus();
}

function displayMoreJokes(e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        displayJokes();
    }
}

$("#toShowcase a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});