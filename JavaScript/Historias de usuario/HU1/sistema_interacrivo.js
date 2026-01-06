//primero nombramos las variales que se van a utilizar

const userName = prompt('Hello, Enter your name, please: ')
const userAgeInput = prompt('Please, enter your age: ')

//convertimos la edad a numero
const userAge = Number(userAgeInput)

// Colocamos las condiciones para las validaciones de las edades. 
if (isNaN(userAge)) {
    console.error('Error, please enter a age valid in number')
} 

else {
    //condicional y mensaje dinámico

    if (userAge <=0 ) {
        alert('Your age entered is invalid. ');
    }
    else if (userAge < 18) {
        alert(`Hello ${userName} you are minor, Keep learning and enjoying coding!`
        )
    }
    else {
        alert(`Hellos ${userName} You are of legal age. Get ready for great opportunities in the world of programming!`)
    }
}
