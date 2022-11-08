import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-setari-page',
  templateUrl: './setari-page.component.html',
  styleUrls: ['./setari-page.component.css']
})
export class SetariPageComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
