import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestSignupComponent } from './test-signup/test-signup.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { SignupComponent } from './Modules/auth/signup/signup.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TrimPipe } from './core/pipes/trim.pipe';
//import { provideHttpClient } from '@angular/common/http';
import { UtilsService } from './core/services/utils.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestHomeComponent,
    TestSignupComponent,
    TestHeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    TrimPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
