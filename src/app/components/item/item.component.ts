import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
   
  
  @Input() item:Item = new Item();
  @Output() deleteItem:EventEmitter<Item> = new EventEmitter();
  @Output() addQuantity:EventEmitter<Item> = new EventEmitter();
  @Output() restQuantity:EventEmitter<Item> = new EventEmitter();
  
  onDelete(item:Item) {
    this.deleteItem.emit(item);
  }

  onToggle(item:Item){
    item.completed = !item.completed;
  }

  onQuantityChange(n:number){
    if(n===1) this.addQuantity.emit(this.item);
    else this.restQuantity.emit(this.item);
  }

  

  ngOnInit(): void { }
}
