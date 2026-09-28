import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AddComponent } from './components/addTask/add.component';
import { ListTask } from './components/list-task/list-task';

@NgModule({
  declarations: [
    App, 
    AddComponent ,
    ListTask
  ],
  imports: [BrowserModule, AppRoutingModule ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
