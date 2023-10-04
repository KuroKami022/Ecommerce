import { XMarkIcon } from "@heroicons/react/24/solid"
import "./ProductDetail.css"

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Detail</h2>
                <div><XMarkIcon className="h-6 w-6 text-b"></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail