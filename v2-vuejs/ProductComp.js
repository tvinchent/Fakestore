export default {
    props: {
        product: Object
    },
    template: `
    <a href="index.html" class="lienRetour"><i class="fas fa-arrow-left"></i></a>
    <h2 class="productTitle">{{ product.title }}</h2>
    <div class="product3col">
        <div class="imageContainer"><img :src="product.image"></div>
        <div class="descAndPrice">
            <h3>Description</h3>
            <div class="description">{{ product.description }}</div><br>
            <h3>Price</h3>
            <form :name="'product'+product.id" action="" method="get">
                <input type="text" class="inputPrice" :name="'product'+product.id+'price'" :id="'product'+product.id+'price'" :value="product.price" @input="actualPrice" @change="enableButton(product.id)"><br><br>
                <input type="submit" :id="'product'+product.id+'priceAction'" value="Update product" disabled>
            </form>
            <div class="vat"><strong>Price</strong> (including VAT): <span id="priceTVA">{{ Math.round( product.price * 1.20 ) }}</span></div>
        </div>
        <div>
            <h3>Category</h3>
            <span class="category {{ product.category }}">{{ product.category }}</span>
        </div>
    </div>
    
    <br>
    `,
    methods: {
        actualPrice(e) {
            this.product.price = e.target.value;
        },
        enableButton(id) {
            document.getElementById('product'+id+'priceAction').removeAttribute("disabled");
        }
    }
    
  }