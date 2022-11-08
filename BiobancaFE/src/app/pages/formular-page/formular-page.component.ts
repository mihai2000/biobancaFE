import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular-page',
  templateUrl: './formular-page.component.html',
  styleUrls: ['./formular-page.component.css']
})
export class FormularPageComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }
}