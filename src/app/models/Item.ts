export class Item{
    static currentID = 0;
    id?: number = 0;
    name: string = "";
    price: number = 0;
    quantity:number = 0;
    completed:boolean = false;

    constructor(){
        this.id = Item.currentID;
        Item.currentID++;
    }
}