import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useShoppingCart } from '../../hooks/useShoppingCart'

export interface CardProps {
  data: {
    id: number
    title: string
    price: number
    images: string[]
    category: {
      name: string
    }
    description: string
  }
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { id, title, price, images, category } = data
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openSideMenu,
  } = useShoppingCart()
  const showProduct = (productDetail: CardProps['data']) => {
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductsToCart = (
    event: React.MouseEvent,
    productData: CardProps['data']
  ): void => {
    event.stopPropagation()
    setCartProducts([...cartProducts, productData])
    setCount(count + 1)
    openSideMenu()
    closeProductDetail()
  }

  const renderIcon = (id: number) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1  bg-lime-600">
          <CheckIcon className="w-6 h-6 text-white " />
        </div>
      )
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="w-6 h-6 text-black" />
        </div>
      )
    }
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[0]}
          alt={title}
        />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export default Card
