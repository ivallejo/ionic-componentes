import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitiScrollPage } from './infiniti-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitiScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitiScrollPageRoutingModule {}
