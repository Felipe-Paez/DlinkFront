export interface Portfolio {
    
        _id: string,
        name: string,
        description?: string,
        price?: number, 
        style?: string[],  
        createdAt: string,
        updatedAt: string,
        urlpfp?: string,
        urlbanner? :string,
        userId?: string,
        __v: number
}
