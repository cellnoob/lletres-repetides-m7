// Empty JS for your own code to be here

//LIMPIEZA DISPLAY 01
function miFuncionClean(){
    var x = "";
    document.getElementById("mostrarDatosN1").innerHTML =  x;
}

//LIMPIEZA DISPLAY 02
function miFuncionClean2(){
    var y = "";
    document.getElementById("mostrarDatosN2").innerHTML =  y;
}
// EJERCICIO 1 MOSTRAR POR PANTALLA
function miFuncionN1Ex1(){

    miFuncionClean();

    var nom = ["M", "A", "R", "C", "O", "S"];
    var i = 0;

    for(i = 0; i < nom.length; i++){
        console.log(nom[i]);
        document.getElementById("mostrarDatosN1").innerHTML += "<tab style=margin-left:.2em>" + nom[i] + "</tab>";
        window.alert(nom[i]);
    }

}
//EJERCICIO 2 MOSTRAR POR PANTALLA
function miFuncionN1Ex2(){
    //limpia panel
    miFuncionClean();
            //VARIABLES
            var nom_array = ["M", "A", "R","4","C", "O", "S"];

            //funcion check number
            var isNum = function isNumberic(num){
                return !isNaN(num);
            };
            //funcion check vocal
            var isVow = function isVowel(vow){
                return (/^[aeiou]$/i).test(vow);
            }
           //funcion check consonante
           var isCon = function isConsonant(con){
                return (/^[bcdfghjklmnpqrstvwxys]$/i).test(con);
           }
    
    
           console.log(nom_array);
           
           for(i = 0; i < nom_array.length; i++){
               if (isNum(nom_array[i])){
                console.log("Els noms de persones no contenen el numero " + nom_array[i]);
                document.getElementById("mostrarDatosN1").innerHTML += "Els noms de persones no contenen el numero " + nom_array[i];

           }else if(isVow(nom_array[i])){
            console.log("Les VOCALS que apareixen son " + nom_array[i]);
            document.getElementById("mostrarDatosN1").innerHTML += "He trobat la VOCAL " + nom_array[i];
           }else if(isCon(nom_array[i])){
            console.log("Les CONSONANTS que apareixen son " + nom_array[i]);
            document.getElementById("mostrarDatosN1").innerHTML += "He trobat la CONSONANT " + nom_array[i];
        }
    }
        
/*
      //VARIABLES
      var nom_array = ["M", "A", "R","4","C", "O", "S"];
      var nom_str = "MARCOS";
      var vocales = ["A", "E", "I", "O", "U"];
      var consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z"];
      var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var i = 0;
      var e = 0;
      var x = 0;
      var y = 0;
      //BASE
      console.log("Partim del nom " + nom_str);
      document.getElementById("mostrarDatosN1").innerHTML = "Partim del nom " + nom_str;
      //ITERACION VOCAL/CONSONANTES 

      for (i = 0; i < nom_array.length; i++) {
          for (e = 0; e < vocales.length; e++) {
              for (x = 0; x < consonantes.length; x++) {
                  for (y = 0; y < numeros.length; y++) {
                      if (nom_array[i] == consonantes[x]) {
                          console.log("He trobat la CONSONANT " + consonantes[x]);
                          document.getElementById("mostrarDatosN1").innerHTML += "He trobat la CONSONANT " + consonantes[x];
                      } else if (nom_array[i] == vocales[e]) {
                          console.log("He trobat la VOCAL " + vocales[e]);
                          document.getElementById("mostrarDatosN1").innerHTML += "He trobat la VOCAL " + vocales[e];
                      } else if (nom_array[i] == numeros[y]) {
                          console.log("Els noms de persones no contenen el numero " + numeros[y]);
                          document.getElementById("mostrarDatosN1").innerHTML += "Els noms de persones no contenen el numero " + numeros[y];
                      }
                  }
              }
          }
      }
*/

}

function miFuncionN1Ex3(){
    miFuncionClean();

    //const fullName = "MARCOS LOSSIUS";
    var fullName = ["M", "A", "R","C", "O","S", " ", "L","O","S","S","I","U","S"];
    const myMap = new Map();
    let times = 0;
    var i = 0;
    var e = 0;



    for (i = 0; i < fullName.length; i++) {

        for (e = 0; e < fullName.length; e++) {
            if (fullName[i].match(fullName[e])) {
                times = times + 1;
            }
            myMap.set(fullName[i], times);
        }
        times = 0;

    }

    console.log(myMap);
    document.getElementById("mostrarDatosN1").innerHTML += myMap;


}

function miFuncionN1Ex4(){
    miFuncionClean();

    var name = ["M", "A", "R", "C", "O", "S"," "];
        var surname = ["L", "O", "S", "S", "I", "U", "S"];
        var fullName = name + surname;
        var fullName_array = name.concat(surname);
      


        const myMap = new Map();
        myMap.set(fullName);

        for (let i = 0; i < fullName.length; i++) {
                console.log(`lenght: ${fullName.length}`);
                document.getElementById("mostrarDatosN1").innerHTML += `lenght: ${fullName.length}`;

        }

        console.log(myMap);
        document.getElementById("mostrarDatosN1").innerHTML += myMap;



}

function miFuncionN2Ex1(){
    miFuncionClean();

    //STRING TEXTO
    const myText = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    //FUNCION EXTRAE TODOS LOS MAILS DEL TEXTO
            function getMail(text) {
                return text.match(/([\w\u00C0-\u024F.-]+@[\w\u00C0-\u024F.-]+\.[a-z0-9_-]+)/gi);
            }
    
            //console.log(getMail(myText))
            var all = getMail(myText);

    //ELIMINA LOS MAILS REPETIDOS
            function remove_duplicates(all) {
                var obj = {};
                var ret_arr = [];
                for (var i = 0; i < all.length; i++) {
                    obj[all[i]] = true;
                }
                for (var key in obj) {
                    ret_arr.push(key);
                }
                return console.log(ret_arr);
            }
  

    //MUESTRA EL RESULTADO
            console.log(remove_duplicates(all));
            document.getElementById("mostrarDatosN2").innerHTML = remove_duplicates(all);

    
}