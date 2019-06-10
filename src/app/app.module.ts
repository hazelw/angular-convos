import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvoListComponent } from './convo-list/convo-list.component';
import { AddConvoComponent } from './add-convo/add-convo.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ConvoPanelComponent } from './right-panel/convo-panel/convo-panel.component';
import { MessageBoxComponent } from './right-panel/message-box/message-box.component';
import { ConvoService } from './convos.service';

@NgModule({
  declarations: [
    AppComponent,
    ConvoListComponent,
    AddConvoComponent,
    RightPanelComponent,
    ConvoPanelComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConvoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
