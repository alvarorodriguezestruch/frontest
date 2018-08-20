export interface IBook {
    id?: number;
    name?: string;
    authorId?: number;
    categoryId?: number;
}

export class Book implements IBook {
    constructor(public id?: number, public name?: string, public authorId?: number, public categoryId?: number) {}
}
