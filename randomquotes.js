

const data = [{
    image: 'baruch_spinoza.jpg',
    name: 'Baruch Spinoza',
    year: '(1632-1677)',
    quotes: 'I can control my passions and emotions if I can understand their nature'
}, 
{
    image: 'john_locke.jpg',
    name: 'John Locke',
    year: '(1632-1704)',
    quotes: 'The mind is furnished with ideas by experience alone'
}, 
{
    image: 'immanuel_kant.jpg',
    name: 'Immanuel Kant',
    year: '(1724-1804)',
    quotes: 'Happiness is not an ideal of reason but of imagination'
},
{
    image: 'socrates.jpg',
    name: 'Socrates',
    year: '(c.470 BCE-399 BCE)',
    quotes: 'There is only one good, knowledge, and one evil, ignorance'
}]

const profile = document.getElementById('profile');
const name = document.getElementById('name');
const year = document.getElementById('year');
const quotes = document.getElementById('quotes');

const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

let file = 0;

window.addEventListener('DOMContentLoaded', () => {
    nextPrev(file);
});

const nextPrev = () => {
    const item = data[file];

    profile.src = item.image;
    name.textContent = item.name;
    year.textContent = item.year;
    quotes.textContent = item.quotes;
};

nextButton.addEventListener('click', () => {
    file++;
    if (file > data.length - 1) {
        file = 0;
    }
    nextPrev(file);
});

prevButton.addEventListener('click', () => {
    file--;
    if (file < 0) {
        file = data.length - 1;
    }
    nextPrev(file);
});







