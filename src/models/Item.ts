export interface Recipe {
    recipe: {
        label: string;
        url: string;
        calories?: number;
        image?: string;
        heathLabels?: string[];
        dishType?: string[];
        dietLabels?: string[];
        yield?: number;
    } 
}

