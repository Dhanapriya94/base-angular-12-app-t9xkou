import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasicModule } from './basic.module';
import { BasicService } from './basic.service';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic.component';
import {BasicPipe} from './basic.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BasicPipe
  ],
  imports: [
    BrowserModule,
    BasicModule    
  ],
  providers: [BasicService],
  bootstrap: [AppComponent],
  exports: [BasicModule, BasicPipe]
})
export class AppModule { }


