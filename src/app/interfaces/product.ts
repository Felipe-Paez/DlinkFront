export interface Product {
    
        _id: string,
        name: string,
        description?: string,
        price?: number,
        quantity: number,
        category: string,
        createdAt: string,
        updatedAt: string,
        urlImage?: string,
        __v: number
}
