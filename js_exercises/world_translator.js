// Ex. 4.2.3 (**) - The world translater ca. 30 min
// Write a function named helloWorld that:
// • Takes 1 argument, a language code (e.g. "es", "de", "en")
// • Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning
// English.
// Call the function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
    let message;

    if (langCode === 'es') {
        message = 'Hola, Mundo';
    } else if (langCode === 'de') {
        message = 'Hallo, Welt';
    } else if (langCode === 'en') {
        message = 'Hello, World'
    } else {
        message = 'Wello, World'
    }

    return message
}

console.log(helloWorld("en")); 
console.log(helloWorld("es")); 
console.log(helloWorld("de")); 
console.log(helloWorld("fr"));
