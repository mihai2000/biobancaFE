import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaPageComponent } from './pages/acasa-page/acasa-page.component';
import { FormularPageComponent } from './pages/formular-page/formular-page.component';
import { PersonInfoComponent } from './pages/registru-page/person-info/person-info.component';
import { RegistruPageComponent } from './pages/registru-page/registru-page.component';
import { SetariPageComponent } from './pages/setari-page/setari-page.component';

const routes: Routes = [
  {path:'', component:AcasaPageComponent},
  {path:'registru', component:RegistruPageComponent},
  {path:'formular', component:FormularPageComponent},
  {path:'setari', component:SetariPageComponent},
  {path:'personInfo', component:PersonInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
