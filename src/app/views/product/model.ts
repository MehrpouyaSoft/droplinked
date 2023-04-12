import { singleService } from "app/lib/services/collection"


class ProductModel {
    static loader = async (data: any) => {
        const { params } = data

        let res = {
            product: [],
            error: null
        }
        try {
            if (!params.productId) throw Error("What !?")

            const product = await singleService({
                id: params.productId || ''
            })

            if (product.data.statusCode !== 200) throw Error("Somthing wrong")

            res.product = product.data.data
        } catch (error: any) {
            res.error = typeof error === "object" ? "Somthing wrong" : error
        }
        return res
    }
}

export default ProductModel