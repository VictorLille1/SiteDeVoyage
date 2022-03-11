function afficher(){
    let x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password"
    }
}


// étape 1 : Je créé une variable x, et lui associe l'élément input du mot de passe, pour améliorer la lisibilité de la fonction ensuite. 
// etape 2: Je crée une première condition: si le type de mon input est égal à password, alors je lui attribue le type text pour que le mot de passe soit visible.
// Sinon, le type de l'input est password
// Dans le html, j'appelle cette fonction avec un élément onclick au niveau de mon élément checkbox.