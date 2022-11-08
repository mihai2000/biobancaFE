import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { Registru, User } from 'src/app/app-interfaces';
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { CheckboxRequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-registru-page',
  templateUrl: './registru-page.component.html',
  styleUrls: ['./registru-page.component.css']
})
export class RegistruPageComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'idnp','anNastere','tip', 'statut', 'telefon'];
  dataSource = [...ELEMENT_DATA];
  dots = faEllipsis;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Registru>;
  user: User = {
    type: 'Persoana Fizica',
    name: 'Nicolae Popescu',
    id: '09543',
    role: 'Operator',
    mail:'nicolae.popescu@gmail.com'
  };
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  active=false;
  activeFilter(){
    document.getElementById("test")?.classList.toggle('test');
    this.active =!this.active;
  }  
  ngAfterViewInit() {
     const myCheck = <HTMLInputElement> document.getElementById("myCheck");
    //  myCheck.checked= false;
     const nameCheck = document.getElementById("nameCheck");
     if (myCheck.checked = true) {
      if(nameCheck !=null){
        nameCheck.style.color = "#076AC9";
        }
      }
        // this.dataSource.paginator = this.paginator; 
  }
}
const ELEMENT_DATA: Registru[] = [
  {position: 1, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'xxxxxx', statut:'', telefon:0.123456789},
  {position: 2, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 3, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 4, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 5, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 6, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 7, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 8, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 9, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip: 'XXXXXX', statut:'', telefon:0.123456789},
  {position: 10, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip:'XXXXXX', statut:'', telefon:0.123456789},
  {position: 11, name: 'Dorian Sergiu', idnp: 1234567890123, anNastere:10222000, tip:'XXXXXX', statut:'', telefon:0.123456789},
];