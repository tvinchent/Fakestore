import { ProductComponent } from './ProductComponent';

export function ProductsContainerComponent () {

    (function() {

        // recupere les produits du fake store
        fetch('https://fakestoreapi.com/products')
        .then(function(response) {
            return response.json();
        })

        .then(function(data){
            console.log(data);
            return data;
        })

    })();

    return (
        <>
            <section id="products" className="grisclair">
                <h2>Products managements</h2>
                <table>
                    <thead>
                        <tr className="bleu">
                            <th>Product name</th>
                            <th className="notOnMobile">Category</th>
                            <th>Price</th>
                            <th>Price (including VAT)</th>
                        </tr>
                    </thead>
                    <tbody id="contentToFeed">
                        <ProductComponent></ProductComponent>
                    </tbody>
                </table>
            </section>
        </>
    )
}