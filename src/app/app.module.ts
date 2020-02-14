import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { contactComponent } from './contact.component';
import { aboutComponent } from './about.component';
import {footerComponent} from './footer.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: contactComponent },
  { path: 'about', component: aboutComponent },
  
];
@NgModule({
 imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)                           /*path location strategy */
    /*RouterModule.forRoot(appRoutes, { useHash: true }) */   /*Hashlocationstrategy */
  ],
  declarations: [ AppComponent,HeaderComponent,HomeComponent,contactComponent,aboutComponent,footerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
