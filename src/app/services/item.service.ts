import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [];

  constructor() { }
  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
