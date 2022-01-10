# color_contrast_picker
Pornim un web server, pentru a putea vizualiza ce face proiectul.
 ```python3
 python3 -m http.server
 ```
1. Tema acestiu proiect este alegerea contrastului potrivit(alb/negru) a unui text(**"Guess Text"**) pentru o anumita culoare random rgb(random, random, random).
2. Pentru a realiza acest proiect m-am folosit de retele neuronale, si a folosit libraria brain.js
3. Pana acum am invatat programul sa aleaga atunci cand culoarea este aproximativ verde, (**"Guess Text"**) sa fie rosu.
4. Programul prin alegerile mele repetate, invata ce culoare este potrivita pentru textul **"Guess Text"** aceste date sunt preluate de aici https://github.com/ProtiucOvidiu/color_contrast_picker/blob/master/script.js#L3
5. Daca apasam butonul **"Print"** putem sa vedem in consola(F12) cu ajutorul lui JavaScript, ce am ales pana acum, si din acele date, programul calculeaza alegerile viitoare. https://github.com/ProtiucOvidiu/color_contrast_picker/blob/master/script.js#L34
