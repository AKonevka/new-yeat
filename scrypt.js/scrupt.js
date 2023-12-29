let poems = [
    {
        poemText:
            `<p>
                Какая сказка за окном! <br>
                Кружат снежинки, будто в вальсе, <br>
                Весь мир пропитан волшебством, <br>
                И воздух переполнен счастьем. <br>
            </p>

            <p>
                Пусть в этот чудный Новый год <br>
                Удача в двери постучится, <br>
                И счастье вместе с ней войдет, <br>
                И все, что хочешь ты, случится! <br>
            </p>`,
        bg: `url(img/bg2.avif)`,
    },
    {
        poemText:
            `<p>
                Пусть счастье в руки упадет <br>
                И, как снежинка, не растает. <br>
                Пусть сбудется под Новый год <br>
                Всё то, о чём душа мечтает! <br>
            </p>
            <p>
                Здоровье будет пусть, любовь, <br>
                Всё остальное — достижимо. <br>
                А то, что портит людям кровь, <br>
                Пусть навсегда проходит мимо! <br>
            </p>`,
        bg: `url(img/bg3.jpg)`
    }
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.poem');

btn.addEventListener('click', function () {
    poem.innerHTML = '';
    poem.innerHTML = poems[0].poemText;
})















