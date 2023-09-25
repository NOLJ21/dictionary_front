import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDictionaryComponent } from './components/list-dictionary/list-dictionary.component';
import { CreateWordComponent } from './components/create-word/create-word.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'list-dictionary',
    component: ListDictionaryComponent,
  },
  {
    path: 'create',
    component: CreateWordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
