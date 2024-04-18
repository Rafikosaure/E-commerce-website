export interface Article {
    name: string,
    category: string,
    brand: string,
    price: number,
    content: string,
    stock: number,
    online: boolean,
    picture: Picture[]
}

interface Picture {
    img: string,
    img1?: string,
    img2?: string,
    img3?: string,
    img4?: string
}

export type initialArticle = {
    items: Article[]
}