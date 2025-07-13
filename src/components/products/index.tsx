import ProductsJson from './products.json'
import {Product} from './product.tsx'

export const Products = () => {

    return <>{ProductsJson.map((prd) => (<>
    <Product
        key={prd.title}
        image={prd.image_src}
        title={prd.title}
        description={prd.description}
        />
    </>))
        }</>
}