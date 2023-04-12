import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../layout/app";
import Home from "app/views/home";
import SingleProduct from "app/views/product";
import ProductModel from "app/views/product/model";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ":productId",
                id: "singleProduct",
                loader: ProductModel.loader,
                element: <SingleProduct />
            },

        ]
    }
]);

export default router