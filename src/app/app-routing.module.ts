import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  {
  path:'',
  component:ListComponent
  },
  {
    path:'add',
    component:AddItemComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
