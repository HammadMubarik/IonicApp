import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent], // Declare the root component
    imports: [
        BrowserModule, // Browser support
        IonicModule.forRoot(), // Initialize Ionic
        AppRoutingModule, // Application routing configuration
        HttpClientModule, // HTTP client for making API calls
        // Add other modules you may need (e.g., FormsModule, ReactiveFormsModule)
    ],
    providers: [
        // Use IonicRouteStrategy to customize route reuse behavior
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        // Add other providers as needed
    ],
    bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
