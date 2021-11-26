import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { AlternanceComponent } from './pages/alternance/alternance.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { CertificationComponent } from './pages/certification/certification.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    ProgrammeComponent,
    AlternanceComponent,
    EntrepriseComponent,
    CertificationComponent,
    TarifsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
