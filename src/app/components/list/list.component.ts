import { Component,OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  items:Item[] = [];
  total:number = 0;

  constructor(private itemService:ItemService){}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  onDelete(item: Item){
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
  }

  addQuantity(item:Item){
    this.items.filter(x => x.id == item.id).map(x => x.quantity++);
    this.getTotal();
  }
  restQuantity(item:Item){
    this.items.filter(x => x.id == item.id).map(x => x.quantity--);
    this.getTotal();
  }

  getTotal(){
    this.total = 0;
    this.items.filter(x => x.completed).map(x => this.total += (x.price * x.quantity));
  }
}

