import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import PrimeNG ButtonModule
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-view-start',
  imports: [
    RouterLink,
    BrowserModule,
    BrowserAnimationsModule, // wymagane przez PrimeNG
    ButtonModule
  ],
  templateUrl: './view-start.component.html',
  styleUrl: './view-start.component.css'
})
export class ViewStartComponent {

}
