import Item from "./Item.jsx"

const ItemList = ({ products, searchInput }) =>{
    return (
        <div className="flex flex-wrap justify-center gap-4 p-2 ">
            {products.length === 0 ? (
                <div className="text-center text-xl font-semibold">
                    <h3>¡ LO SENTIMOS !</h3>
                    <h4>No pudimos encontrar nada para: "{searchInput}"</h4>
                </div>
            ) : (
                products.map((product) => {
                    return <Item key={product.id} product={product} />;
                })
            )}
        </div>
    );
}


export default ItemList