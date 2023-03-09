import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlCListComponent } from './control-c-list/control-c-list.component';
import { ControlTListComponent } from './control-t-list/control-t-list.component';
import { AplicacionPListComponent } from './aplicacion-p-list/aplicacion-p-list.component';
import { ResultadoAListComponent } from './resultado-a-list/resultado-a-list.component';
import { ConsultaPListComponent } from './consulta-p-list/consulta-p-list.component';
import { ConfListComponent } from './conf-list/conf-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlCListComponent,
    ControlTListComponent,
    AplicacionPListComponent,
    ResultadoAListComponent,
    ConsultaPListComponent,
    ConfListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'control-c-list', component: ControlCListComponent},
      {path: 'control-t-list', component: ControlTListComponent},
      {path: 'aplicacion-p-list', component: AplicacionPListComponent},
      {path: 'resultado-a-list', component: ResultadoAListComponent},
      {path: 'consulta-p-list', component: ConsultaPListComponent},
      {path: 'conf-list', component: ConfListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
