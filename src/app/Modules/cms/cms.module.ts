import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { BlogEventsComponent } from './blog-events/blog-events.component';
import { UtilsService } from '../../core/services/utils.service';
//import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BlogEventsComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
