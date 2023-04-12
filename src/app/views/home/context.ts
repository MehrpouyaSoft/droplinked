import { createContext } from "react";

export interface IhomeStateContext {
    search_keyword: string
}

export interface IhomeContext {
    state: IhomeStateContext
    searchHandle(keyword: string): void
}

const homeContext = createContext<IhomeContext>({
    state: {
        search_keyword: ''
    },
    searchHandle: () => { }
})

export default homeContext