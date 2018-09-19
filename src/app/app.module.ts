import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BasicGridComponent } from './component/basic-grid/basic-grid.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BasicGridComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
