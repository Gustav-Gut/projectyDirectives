import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

/*Imports Material*/
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { DogCardComponent } from './components/dog-card/dog-card.component';

import { TrimPipe } from './pipes/trim.pipe';
import { MouseDirective } from './directives/handlerEvent/mouse.directive';
import { DogsComponent } from './components/dogs/dogs.component';
import { NewPipePipe } from './pipes/new-pipe.pipe';
import { ClickDirective } from './directives/handlerEvent/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    TrimPipe,
    MouseDirective,
    DogsComponent,
    NewPipePipe,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
