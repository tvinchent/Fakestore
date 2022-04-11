// recuperation des var passées en URL
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace( 
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;	
    }
    return vars;
}
var route = $_GET('page') ? $_GET('page') : 'index';
var prodNumber = $_GET('prodNumber');

// recupere les produits du fake store
fetch('https://fakestoreapi.com/products/'+prodNumber)
.then(function(response) {
    return response.json();
})

// les injecte dans le html
.then(function(data){
    var myData = data;
        var content = document.createElement('div');
        content.classList = 'productSingle';
        content.innerHTML = `
            <div class="imageContainer"><img src="${myData.image}"></div>
            <div class="title"><a href="produit.html?prodNumber=${myData.id}">${myData.title}</a></div><br>
            <form name="product${myData.id}" action="" method="get">
                <input type="text" name="product${myData.id}price" id="product${myData.id}price" value="${myData.price}" onChange="priceChange(${myData.id},${myData.price})">
                <input type="submit" id="product${myData.id}priceAction" value="Modifier" disabled>
            </form><br>
            <div class="description">${myData.description}</div>
            `;
        document.getElementById('products').appendChild(content);

        // disable envoie du formulaire au clic sur "entrer" dans le champ prix
        document.getElementById('product'+myData.id+'price').addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
})
// Bouton on ou off selon que priceCurrent != priceOrigin
function priceChange(prodNumber,priceOrigin){
    priceCurrent = document.forms['product'+prodNumber]['product'+prodNumber+'price'].value;
    if(priceCurrent != priceOrigin){
        document.getElementById('product'+prodNumber+'priceAction').removeAttribute("disabled");
    }
    else{
        document.getElementById('product'+prodNumber+'priceAction').setAttribute("disabled", true);
    }
}

//toggleMenu
function toggleMenu(){
    document.getElementById('menuPrincipal').classList.toggle('desactivated');
}