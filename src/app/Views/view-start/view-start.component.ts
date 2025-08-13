import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-view-start',
  imports: [
    RouterLink,
    BrowserModule,
  ],
  templateUrl: './view-start.component.html',
  styleUrl: './view-start.component.css'
})
export class ViewStartComponent {

}
