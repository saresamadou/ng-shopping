import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'shopping', loadChildren: () => import ('./shopping/shopping.module').then(m => m.ShoppingModule)},
  {path: 'demo', loadChildren: () => import ('./demo/demo.module').then(m => m.DemoModule)},
  {path: '**', redirectTo: 'shopping'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
