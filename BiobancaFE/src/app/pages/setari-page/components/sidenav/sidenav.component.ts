import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/app-interfaces';
import { Router } from '@angular/router';
import { faGears, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  bars = faBars;
  phone= faPhone;
  gears=faGears;
  user: User = {
    type:'',
    name: 'Nicolae Popescu',
    id: '09543',
    role: 'Operator',
    mail:'nicolae.popescu@gmail.com'
  };
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
