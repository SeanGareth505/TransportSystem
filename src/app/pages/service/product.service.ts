import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface InventoryStatus {
    label: string;
    value: string;
}

export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

@Injectable()
export class Trips {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Trip to Edenvale hospital',
                description: 'From Edenvale to Sandton',
                image: '',
                price: 200,
                category: '',
                quantity: 5,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Trip to Black Watch',
                description: 'From Location A to Black Watch',
                image: '',
                price: 72,
                category: '',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Trip to Blue Band',
                description: 'From Location B to Blue Band',
                image: '',
                price: 79,
                category: '',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Trip to Blue T-Shirt',
                description: 'From Location C to Blue T-Shirt',
                image: '',
                price: 29,
                category: '',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Trip to Bracelet',
                description: 'From Location D to Bracelet',
                image: '',
                price: 15,
                category: '',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Trip to Brown Purse',
                description: 'From Location E to Brown Purse',
                image: '',
                price: 120,
                category: '',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Trip to Chakra Bracelet',
                description: 'From Location F to Chakra Bracelet',
                image: '',
                price: 32,
                category: '',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Trip to Galaxy Earrings',
                description: 'From Location G to Galaxy Earrings',
                image: '',
                price: 34,
                category: '',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Trip to Game Controller',
                description: 'From Location H to Game Controller',
                image: '',
                price: 99,
                category: '',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Trip to Gaming Set',
                description: 'From Location I to Gaming Set',
                image: '',
                price: 299,
                category: '',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Trip to Gold Phone Case',
                description: 'From Location J to Gold Phone Case',
                image: '',
                price: 24,
                category: '',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Trip to Green Earbuds',
                description: 'From Location K to Green Earbuds',
                image: '',
                price: 89,
                category: '',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Trip to Green T-Shirt',
                description: 'From Location L to Green T-Shirt',
                image: '',
                price: 49,
                category: '',
                quantity: 74,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Trip to Grey T-Shirt',
                description: 'From Location M to Grey T-Shirt',
                image: '',
                price: 48,
                category: '',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 3
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Trip to Headphones',
                description: 'From Location N to Headphones',
                image: '',
                price: 175,
                category: '',
                quantity: 8,
                inventoryStatus: 'LOWSTOCK',
                rating: 5
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Trip to Light Green T-Shirt',
                description: 'From Location O to Light Green T-Shirt',
                image: '',
                price: 49,
                category: '',
                quantity: 34,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Trip to Lime Band',
                description: 'From Location P to Lime Band',
                image: '',
                price: 79,
                category: '',
                quantity: 12,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'Trip to Mini Speakers',
                description: 'From Location Q to Mini Speakers',
                image: '',
                price: 85,
                category: '',
                quantity: 42,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'Trip to Painted Phone Case',
                description: 'From Location R to Painted Phone Case',
                image: '',
                price: 56,
                category: '',
                quantity: 41,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Trip to Pink Band',
                description: 'From Location S to Pink Band',
                image: '',
                price: 79,
                category: '',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Trip to Pink Purse',
                description: 'From Location T to Pink Purse',
                image: '',
                price: 110,
                category: '',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Trip to Purple Band',
                description: 'From Location U to Purple Band',
                image: '',
                price: 79,
                category: '',
                quantity: 6,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Trip to Purple Gemstone Necklace',
                description: 'From Location V to Purple Gemstone Necklace',
                image: '',
                price: 45,
                category: '',
                quantity: 62,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Trip to Purple T-Shirt',
                description: 'From Location W to Purple T-Shirt',
                image: '',
                price: 49,
                category: '',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 5
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Trip to Shoes',
                description: 'From Location X to Shoes',
                image: '',
                price: 64,
                category: '',
                quantity: 0,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Trip to Sneakers',
                description: 'From Location Y to Sneakers',
                image: '',
                price: 78,
                category: '',
                quantity: 52,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Trip to Teal T-Shirt',
                description: 'From Location Z to Teal T-Shirt',
                image: '',
                price: 49,
                category: '',
                quantity: 3,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Trip to Yellow Earbuds',
                description: 'From Location AA to Yellow Earbuds',
                image: '',
                price: 89,
                category: '',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Trip to Yoga Mat',
                description: 'From Location AB to Yoga Mat',
                image: '',
                price: 20,
                category: '',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Trip to Yoga Set',
                description: 'From Location AC to Yoga Set',
                image: '',
                price: 20,
                category: '',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 8
            }
        ];
    }

    constructor(private http: HttpClient) { }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    generateId() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}
