import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'


export interface IaddCartOption {
    name: string
    value: string
}

export interface IaddCartDispatch {
    title: string
    sku: string
    price: number
    image: string
    inventory: number
    option?: IaddCartOption[]
}

export interface IaddCart {
    detail: IaddCartDispatch
    quantity: number
}

interface cartState {
    list: IaddCart[]
    count: number
}

const initialState: cartState = {
    list: [],
    count: 0,
}

export interface IremoveCart {
    sku: string
}

const checkExistProduct = (cart: IaddCart[], sku: string) => cart.filter(el => el.detail.sku === sku && el)[0]
const countProduct = (cart: IaddCart[], index?: number) => {
    let count = typeof index === "number" ? index : 1
    cart.forEach(element => {
        count += element.quantity
    });
    return count
}

export const cartReducer = createSlice(({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<IaddCartDispatch>) => {
            const cart = current(state.list)
            const product = checkExistProduct(cart, action.payload.sku)
            const quantity = product ? product.quantity : 0
            const inventory = Math.abs(action.payload.inventory)
            if (inventory < quantity + 1) {
                toast.error(`Cant add cart Max quantity ${inventory}`)
                return state
            }

            if (!quantity) {
                state.list.push({
                    detail: action.payload,
                    quantity: 1
                })
            } else {
                state.list = state.list.map((el: IaddCart): IaddCart => {
                    const check = el.detail.sku === action.payload.sku

                    return {
                        detail: {
                            ...el.detail,
                            price: check ? el.detail.price * el.quantity : el.detail.price
                        },
                        quantity: check ? quantity + 1 : el.quantity
                    }
                })
            }



            state.count = countProduct(cart)
            toast.success(`${action.payload.title} add cart`)
        },
        removeCart: (state, action: PayloadAction<IremoveCart>) => {
            const cart = current(state.list)
            const product = checkExistProduct(cart, action.payload.sku)
            if (!product) return state

            const makeNew = cart.filter((el: IaddCart) => el.detail.sku !== action.payload.sku && el)

            state.list = makeNew
            state.count = countProduct(makeNew, 0)
            toast.info(`Remove this product`)
        }
    },
}))

export const { addCart, removeCart } = cartReducer.actions

export default cartReducer