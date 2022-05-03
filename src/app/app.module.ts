import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { StructuraldirComponent } from './structuraldir/structuraldir.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributedirComponent,
    StructuraldirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
