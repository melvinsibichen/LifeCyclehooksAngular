import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { CustomComponent } from './components/custom/custom.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './components/product-dashboard/product-widget/product-widget.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    CustomComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
    NavbarComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
