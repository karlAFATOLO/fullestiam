import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tooldbar',
  templateUrl: './tooldbar.component.html',
  styleUrls: ['./tooldbar.component.css']
})
export class TooldbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAdmisssion() {
    this.router.navigateByUrl('admission')
  }

  goToProgramme() {
    this.router.navigateByUrl('programme')
  }

  goToAlternance() {
    this.router.navigateByUrl('alternance')
  }

  goToEntreprise() {
    this.router.navigateByUrl('entreprise')
  }

  goToCertifications() {
    this.router.navigateByUrl('certifications')
  }

  goToTarif() {
    this.router.navigateByUrl('tarifs')
  }

  goToContact() {
    this.router.navigateByUrl('contactez-nous')
  }

}
