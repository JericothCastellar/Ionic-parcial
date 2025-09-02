import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos propios
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';

// Plugins / Providers
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    InAppBrowser, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
