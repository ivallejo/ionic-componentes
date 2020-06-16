import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitiScrollPageRoutingModule } from './infiniti-scroll-routing.module';

import { InfinitiScrollPage } from './infiniti-scroll.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitiScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitiScrollPage]
})
export class InfinitiScrollPageModule {}
