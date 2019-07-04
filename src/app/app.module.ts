import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './trangchu/header/header.component';
import { ContentComponent } from './trangchu/content/content.component';
import { FooterComponent } from './trangchu/footer/footer.component';
import { IndexComponent } from './trangchu/index/index.component';
import { SliderComponent } from './trangchu/index/slider/slider.component';
import { IndexContentComponent } from './trangchu/index/index-content/index-content.component';
import { ItemComponent } from './trangchu/index/index-content/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    IndexComponent,
    SliderComponent,
    IndexContentComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
