import { axiosInstance } from "../helpers/axiosConfig"

export const collectionService = async () => {
    const response = await axiosInstance.get("collection/public/testunstoppable")
    return response.data
}

interface IsingleService {
    id: string
}
export const singleService = async ({ id }: IsingleService) => {
    return axiosInstance.get(`product/public/${id}`)
}