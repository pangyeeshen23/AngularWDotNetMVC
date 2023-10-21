import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FruitvegpageComponent } from './components/fruitvegpage/fruitvegpage.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'fruits-vegs',
    component: FruitvegpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
