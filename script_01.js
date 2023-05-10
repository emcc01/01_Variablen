"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/
// Zeilenkommentar

// zum Speichern: Strg + S
// Kommentar ein/aus: Strg + #
// Text in "" wird ausgegeben
//ohne "" = Variable, deklarieren!
// um Ausdruck zu markieren: Doppelklick
// um ganze Zeile zu markieren: auf Zeilennr.
// Variablen immer mit kleinem Buchstabe
// weitere Worte ohne Leerzeichen Gross

// Konsolen-Ausgaben
// console.log("Hi"); -> funktioniert in Konsole
// console.log(firstName); -> Fehler, weil:


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; //Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName;
// familyName = "Mütze";
// console.log(familyName);

// 03 Deklaration + Wertzuweisung II

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben");
// familyName = prompt("Bitte Nachnamen eingeben");
// console.log(firstName + " " + familyName);
// console.log(typeof firstName);

// man kann mehrere Variablen mit , zusammen deklarieren
// zur Ausgabe " " oder Komma für ein Leerzeichen
// mit prompt - Funktion öffnet sich Abfragefeld in Browser
// Text in "" = string

// let test;
// test = "Max";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

// Variablen können strings sein, Zahlen, Boolean
// Variablen können überschrieben werden
// JS ist eine untypisierte Sprache | untyped


// 03a Konstanten

// let test = "Max";  //Deklaration + Wertzuweisung
// test = "Maxine";
// console.log("Inhalt: " + test);   

const test = "Max";  //diesmal konstant
// test = "Maxine"; // funktioniert nicht, Fehlermeldung 
console.log("Inhalt: " + test);


// 04 Beispiel- Berechnng

// // Deklaration 
// const birthYearJohn = 2000;
// const birthYearMarc = 1990;
// let ageJohn, ageMarc;

// ageJohn = 2023 - birthYearJohn;
// ageMarc = 2023 - birthYearMarc;

// //Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMarc: " + ageMarc);


// Deklaration 
const birthYearJohn = 2000;
const birthYearMarc = 1990;
let ageJohn, ageMarc;

let date = new Date();
let year = date.getFullYear();
console.log(year);

ageJohn = year - birthYearJohn;
ageMarc = year - birthYearMarc;

//Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMarc: " + ageMarc);