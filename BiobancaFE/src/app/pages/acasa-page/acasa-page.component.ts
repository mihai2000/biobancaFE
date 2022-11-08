import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { User } from '../../app-interfaces'

@Component({
  selector: 'app-acasa-page',
  templateUrl: './acasa-page.component.html',
  styleUrls: ['./acasa-page.component.css'],
  host: { class: 'd-block' },
})
export class AcasaPageComponent implements OnInit {
  // @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  // toggleSidebar() {
  //   this.toggleSidebarForMe.emit();
  // }
  arrow=faCircleChevronRight;
  bars= faBars;
  user: User = {
    type:'',
    name: 'Nicolae Popescu',
    id: '09543',
    role: 'Operator',
    mail:'nicolae.popescu@gmail.com'
  };
constructor() {}

  ngOnInit(): void {}
}
