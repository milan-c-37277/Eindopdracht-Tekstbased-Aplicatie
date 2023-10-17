// Importeert readline-sync
const rl = require('readline-sync');

// introduceert de speler aan het spel & start het spel erna
console.log("Welkom speler. Je gaat 1 dag van mij beleven en zo ervoor te zorgen dat je zonder al te veel tegenslagen de dag doorkomt Het doel van het spel is om 1. Meer te weten te komen over mij, en 2. Je gaat mijn loopbaan begeleiden. Lees nu verder vanaf [stuk 1].")
startVerhaal()

// Maakt de variablen aan
var Stuk1 = ''
var Stuk2 = ''
var Stuk6 = ''
var Stuk8 = ''
var Stuk7 = ''

// Start verhaal
function startVerhaal() {
    Stuk1 = KeuzenVraag1()
        if(Stuk1 == 'Uit je bed te gaan') {
            console.log("Lees nu verder bij stuk 2 van het verhaal")
            Stuk2 = KeuzenVraag2()
                if(Stuk2 == 'Rennen') {
                    console.log("Lees nu verder bij stuk 4 van het verhaal")
                    Stuk6 = KeuzenVraag6()
                    if(stuk6 == 'Gamen') {
                        console.log("Lees nu verder bij stuk 7 van het verhaal")
                        Stuk7 = KeuzenVraag7()
                    } else if(stuk6 == 'Laatste school dingen afmaken') {
                        console.log("Lees nu verder bij stuk 8 van het verhaal")
                    }
                } else if (Stuk2 == 'Gewoon lopen') {
                    console.log("Lees nu verder bij stuk 5 van het verhaal")
                }
        } else if (Stuk1 == 'Nog 20 minuten verder te scrollen op tiktok') {
            console.log('Lees nu verder bij stuk 3 van het verhaal')
            Stuk6 = KeuzenVraag6()
                if(stuk6 == 'Gamen') {
                    console.log("Lees nu verder bij stuk 7 van het verhaal")
                    Stuk7 = KeuzenVraag7()
                } else if(stuk6 == 'Laatste school dingen afmaken') {
                    console.log("Lees nu verder bij stuk 8 van het verhaal")
                }
        }
}

// Functie keuzenvraag 1
function KeuzenVraag1() {
    KeuzenVraag1 = ['Uit je bed te gaan', 'Nog 20 minuten verder te scrollen op tiktok'],
    index = rl.keyInSelect(KeuzenVraag1, 'Welke optie kies je?');
    return KeuzenVraag1[index];
}

// Functie keuzenvraag 2
function KeuzenVraag2() {
    KeuzenVraag2 = ['Rennen', 'Gewoon lopen'],
    index = rl.keyInSelect(KeuzenVraag2, 'Welke optie kies je?');
    return KeuzenVraag2[index];
}

// Functie keuzenvraag 6
function KeuzenVraag6() {
    KeuzenVraag6 = ['Gamen', 'Laatste school dingen afmaken'],
    index = rl.keyInSelect(KeuzenVraag6, 'Welke optie kies je?');
    return KeuzenVraag6[index];
}

// Functie keuzenvraag 7
function KeuzenVraag7() {
    KeuzenVraag7 = ['Gamen', 'Laatste school dingen afmaken'],
    index = rl.keyInSelect(KeuzenVraag7, 'Welke optie kies je?');
    return KeuzenVraag7[index];
}