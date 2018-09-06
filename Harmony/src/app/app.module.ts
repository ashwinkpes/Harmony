//Always arrange in ascending order everything

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';

// fake backend
import { fakeBackendProvider } from './_helpers';

//Components
import { AlertComponent } from './_directives';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Router
import { routing } from './app.routing';

//Authgurads
import { AuthGuard } from './_guards/auth.guard';

//Interceptors
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

//Services
import { AlertService, AuthenticationService, UserService } from './_services';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ 
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
