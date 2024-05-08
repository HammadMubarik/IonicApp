import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnachtPage } from './connacht.page';

const routes: Routes = [
  {
    path: '',
    component: ConnachtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnachtPageRoutingModule {}
