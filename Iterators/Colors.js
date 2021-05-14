const Colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i < Colors.length) {
    console.log(Colors[i]);
    i++;
}
for (let i = 0; i < Colors.length; i++) {
    console.log(Colors[i]);
}
Colors.forEach(element => console.log(element));

/*
1. Mijn while loop neemt 4 regels in beslag.
   Mijn for loop neemt 2 regels in beslag.
2. Mijn forEach neemt 1 regel in beslag.
3. Voordelen van een Array Method is
   - Je de i niet meer hoeft te gebruiken om bij te houden waar je bent.
   - Het is veel een veel kortere code.
   - ForEach zegt al wat het gaat doen.
4. Nee, Array methods kun je niet gebruiken op een object.
*/

