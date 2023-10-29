// Importeert readline-sync
const rl = require('readline-sync');

// introduceert de speler aan het spel & start het spel erna
console.log("Welkom speler. Je gaat 1 dag van mij beleven en zo ervoor te zorgen dat je zonder al te veel tegenslagen de dag doorkomt Het doel van het spel is om 1. Meer te weten te komen over mij, en 2. Je gaat mijn loopbaan begeleiden. Lees nu verder vanaf [stuk 1].")
startVerhaal()

// Maakt de variablen aan
var Stuk1 = ''
var Stuk2 = ''
var Stuk6 = ''
var Stuk9 = ''
var Stuk11 = ''
var Stuk15 = ''
var Stuk17 = ''
var Stuk19 = ''



// Start verhaal
function startVerhaal(){
    Stuk1 = KeuzenVraag1()
    if(Stuk1 === 'Uit je bed te gaan'){
        console.log("Lees nu verder bij stuk 2 van het verhaal")
        Stuk2 = KeuzenVraag2()
        if(Stuk2 === 'Rennen'){
            console.log("Lees nu verder bij stuk 4 van het verhaal")
            Stuk6 = KeuzenVraag6()
            if(Stuk6 === 'Gamen'){
                console.log("Lees nu verder bij stuk 7 van het verhaal")
                Stuk9 = KeuzenVraag9()
                if(Stuk9 === 'Die gene opbellen met de vraag waar hij/zij is'){
                    console.log("Lees nu verder bij stuk 10 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 === 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 === 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }
                }else if(Stuk9 == 'Laat het gaan en regelt het met de ploeg die je hebt'){
                    console.log("Lees nu verder bij stuk 11 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }
                }
            }else if(Stuk6 === 'Laatste school dingen afmaken'){
                console.log("Lees nu verder bij stuk 8 van het verhaal")
                Stuk9 = KeuzenVraag9()
                if(Stuk9 == 'Die gene opbellen met de vraag waar hij/zij is'){
                    console.log("Lees nu verder bij stuk 10 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }
                }else if(Stuk9 == 'Laat het gaan en regelt het met de ploeg die je hebt'){
                    console.log("Lees nu verder bij stuk 11 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal") 
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }   
                    }
                }
            }
        }else if(Stuk2 === 'Gewoon lopen'){
            console.log("Lees nu verder bij stuk 5 van het verhaal")
            Stuk6 = KeuzenVraag6()
            if(Stuk6 === 'Gamen'){
                console.log("Lees nu verder bij stuk 7 van het verhaal")
                Stuk9 = KeuzenVraag9()
                if(Stuk9 == 'Die gene opbellen met de vraag waar hij/zij is'){
                    console.log("Lees nu verder bij stuk 10 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }
                }else if(Stuk9 == 'Laat het gaan en regelt het met de ploeg die je hebt'){
                    console.log("Lees nu verder bij stuk 11 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }
                }
            }else if(Stuk6 === 'Laatste school dingen afmaken'){
                console.log("Lees nu verder bij stuk 8 van het verhaal")
                Stuk9 = KeuzenVraag9()
                if(Stuk9 == 'Die gene opbellen met de vraag waar hij/zij is'){
                    console.log("Lees nu verder bij stuk 10 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }
                }else if(Stuk9 == 'Laat het gaan en regelt het met de ploeg die je hebt'){
                    console.log("Lees nu verder bij stuk 11 van het verhaal")
                    Stuk11 = KeuzenVraag11()
                    if(Stuk11 == 'Opruimen (kleine taak)'){
                        console.log("Lees nu verder bij stuk 12 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                    }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                        console.log("Lees nu verder bij stuk 13 van het verhaal")
                        Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }  
                    }
                }
            }
        }
    }else if(Stuk1 === 'Nog 20 minuten verder te scrollen op tiktok'){
        console.log("Lees nu verder bij stuk 3 van het verhaal")
        Stuk6 = KeuzenVraag6()
        if(Stuk6 === 'Gamen'){
            console.log("Lees nu verder bij stuk 7 van het verhaal")
            Stuk9 = KeuzenVraag9()
            if(Stuk9 == 'Die gene opbellen met de vraag waar hij/zij is'){
                console.log("Lees nu verder bij stuk 10 van het verhaal")
                Stuk11 = KeuzenVraag11()
                if(Stuk11 == 'Opruimen (kleine taak)'){
                    console.log("Lees nu verder bij stuk 12 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                    console.log("Lees nu verder bij stuk 13 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                }
            }else if(Stuk9 == 'Laat het gaan en regelt het met de ploeg die je hebt'){
                console.log("Lees nu verder bij stuk 11 van het verhaal")
                Stuk11 = KeuzenVraag11()
                if(Stuk11 == 'Opruimen (kleine taak)'){
                    console.log("Lees nu verder bij stuk 12 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                    console.log("Lees nu verder bij stuk 13 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                }
            }
        }else if(Stuk6 === 'Laatste school dingen afmaken'){
            console.log("Lees nu verder bij stuk 8 van het verhaal")
            Stuk9 = KeuzenVraag9()
            if(Stuk9 == 'Die gene opbellen met de vraag waar hij/zij is'){
                console.log("Lees nu verder bij stuk 10 van het verhaal")
                Stuk11 = KeuzenVraag11()
                if(Stuk11 == 'Opruimen (kleine taak)'){
                    console.log("Lees nu verder bij stuk 12 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }   
                }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                    console.log("Lees nu verder bij stuk 13 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                }
            }else if(Stuk9 == 'Laat het gaan en regelt het met de ploeg die je hebt'){
                console.log("Lees nu verder bij stuk 11 van het verhaal")
                Stuk11 = KeuzenVraag11()
                if(Stuk11 == 'Opruimen (kleine taak)'){
                    console.log("Lees nu verder bij stuk 12 van het verhaal") 
                    Stuk15 = KeuzenVraag15()
                        if(Stuk15 == 'Ga je hem helpen'){
                            console.log("Lees nu verder bij stuk 16 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }else if(Stuk15 = 'Ga je door met schoonmaken'){
                            console.log("Lees nu verder bij stuk 17 van het verhaal")
                            Stuk17 = KeuzenVraag17()
                            if(Stuk17 == 'Ga je wat halen'){
                                console.log("Lees nu verder bij stuk 18 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }else if(Stuk17 == 'Je haalt niks'){
                                console.log("Lees nu verder bij stuk 19 van het verhaal")
                                Stuk19 = KeuzenVraag19()
                                if(Stuk19 == 'Nog even tiktok kijken'){
                                    console.log("Lees nu verder bij stuk 20 van het verhaal")
                                }else if(Stuk19 == 'Gaan slapen'){
                                    console.log("Lees nu verder bij stuk 21 van het verhaal")
                                }
                            }
                        }
                }else if(Stuk11 == 'Actiekoppen anders indelen (middel grote taak)'){
                    console.log("Lees nu verder bij stuk 13 van het verhaal")
                    Stuk15 = KeuzenVraag15()
                    if(Stuk15 == 'Ga je hem helpen'){
                        console.log("Lees nu verder bij stuk 16 van het verhaal")
                        Stuk17 = KeuzenVraag17()
                        if(Stuk17 == 'Ga je wat halen'){
                            console.log("Lees nu verder bij stuk 18 van het verhaal")
                            Stuk19 = KeuzenVraag19()
                            if(Stuk19 == 'Nog even tiktok kijken'){
                                console.log("Lees nu verder bij stuk 20 van het verhaal")
                            }else if(Stuk19 == 'Gaan slapen'){
                                console.log("Lees nu verder bij stuk 21 van het verhaal")
                            }
                        }else if(Stuk17 == 'Je haalt niks'){
                            console.log("Lees nu verder bij stuk 19 van het verhaal")
                            Stuk19 = KeuzenVraag19()
                            if(Stuk19 == 'Nog even tiktok kijken'){
                                console.log("Lees nu verder bij stuk 20 van het verhaal")
                            }else if(Stuk19 == 'Gaan slapen'){
                                console.log("Lees nu verder bij stuk 21 van het verhaal")
                            }
                        }
                    }else if(Stuk15 = 'Ga je door met schoonmaken'){
                        console.log("Lees nu verder bij stuk 17 van het verhaal")
                        Stuk17 = KeuzenVraag17()
                        if(Stuk17 == 'Ga je wat halen'){
                            console.log("Lees nu verder bij stuk 18 van het verhaal")
                            Stuk19 = KeuzenVraag19()
                            if(Stuk19 == 'Nog even tiktok kijken'){
                                console.log("Lees nu verder bij stuk 20 van het verhaal")
                            }else if(Stuk19 == 'Gaan slapen'){
                                console.log("Lees nu verder bij stuk 21 van het verhaal")
                            }
                        }else if(Stuk17 == 'Je haalt niks'){
                            console.log("Lees nu verder bij stuk 19 van het verhaal")
                            Stuk19 = KeuzenVraag19()
                            if(Stuk19 == 'Nog even tiktok kijken'){
                                console.log("Lees nu verder bij stuk 20 van het verhaal")
                            }else if(Stuk19 == 'Gaan slapen'){
                                console.log("Lees nu verder bij stuk 21 van het verhaal")
                            }
                        }
                    }
                }
            }
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

// Functie keuzenvraag 9
function KeuzenVraag9() {
    KeuzenVraag9 = ['Die gene opbellen met de vraag waar hij/zij is', 'Laat het gaan en regelt het met de ploeg die je hebt'],
    index = rl.keyInSelect(KeuzenVraag9, 'Welke optie kies je?');
    return KeuzenVraag9[index];
}

// Functie keuzenvraag 11
function KeuzenVraag11() {
    KeuzenVraag11 = ['Opruimen (kleine taak)', 'Actiekoppen anders indelen (middel grote taak)'],
    index = rl.keyInSelect(KeuzenVraag11, 'Welke optie kies je?');
    return KeuzenVraag11[index];
}

// Functie keuzenvraag 15
function KeuzenVraag15() {
    KeuzenVraag15 = ['Ga je hem helpen', 'Ga je door met schoonmaken'],
    index = rl.keyInSelect(KeuzenVraag15, 'Welke optie kies je?');
    return KeuzenVraag15[index];
}

// Functie keuzenvraag 17
function KeuzenVraag17() {
    KeuzenVraag17 = ['Ga je wat halen', 'Je haalt niks'],
    index = rl.keyInSelect(KeuzenVraag17, 'Welke optie kies je?');
    return KeuzenVraag17[index];
}

// Functie keuzenvraag 19
function KeuzenVraag19() {
    KeuzenVraag19 = ['Nog even tiktok kijken', 'Gaan slapen'],
    index = rl.keyInSelect(KeuzenVraag19, 'Welke optie kies je?');
    return KeuzenVraag19[index];
}