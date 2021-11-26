import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './pages/admission/admission.component';
import { AlternanceComponent } from './pages/alternance/alternance.component';
import { CertificationComponent } from './pages/certification/certification.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';

const routes: Routes = [
  { path: 'contactez-nous', component: ContactComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'certifications', component: CertificationComponent },
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'alternance', component: AlternanceComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: '', component: AdmissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
