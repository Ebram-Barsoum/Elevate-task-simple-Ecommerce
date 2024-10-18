export interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface NavigationLink {
    name: string,
    path: string,
}