import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/app-interfaces';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bars =faBars;
  arrow=faCircleChevronRight;
  user: User = {
    type:'Persoana fizica',
    name: 'Nicolae Popescu',
    id: '09543',
    role: 'Super Admin',
    mail:'nicolae.popescu@gmail.com'
  };
   @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
