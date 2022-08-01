const btn = document.querySelector('.btn')
const passwordContent = document.querySelector('.password')

const pattern = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/', '*', 1, 2, 3, 4, 5, 6, 7, 8, 9, ',', '.', '=', '(', ')', '%', '&', '$', '#', '!', '¡', '¿', '?'];

function generateRandomPattern() {

    let lengthPatter = 100;
    return Math.floor(Math.random(pattern) * pattern.length)
}

btn.addEventListener('click', () => {
    // alert('holaa')

    let h1 = document.createElement('h1')
    h1.classList.add('password__text')
    passwordContent.appendChild(h1)

    for (let index = 0; index < 10; index++) {
        let str = 'clave: ';
     
        h1.textContent = str += pattern[generateRandomPattern()];
        // console.log()
    }
})