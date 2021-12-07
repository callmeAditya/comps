import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TablesComponent } from './tables/tables.component';
import { SharedModule } from '../shared/shared.module';
import { BioComponent } from './bio/bio.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TablesComponent,
    BioComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports:[
    CollectionsHomeComponent
  ]
})
export  class CollectionsModule { }
