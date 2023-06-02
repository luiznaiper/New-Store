import { XMarkIcon } from '@heroicons/react/20/solid'
import './styles.css'
import { useShoppingCart } from '../../hooks/useShoppingCart'

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail } = useShoppingCart()
  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white
    `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
