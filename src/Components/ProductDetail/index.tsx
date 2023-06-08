import { XMarkIcon } from '@heroicons/react/20/solid'
import './styles.css'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { CardProps } from '../../utils/types'

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useShoppingCart()

  const data = productToShow as CardProps['data'] | null

  const { images = [], price = 0, title = '', description = '' } = data || {}

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
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={images[0]} alt={title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
