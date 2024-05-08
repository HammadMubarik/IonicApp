import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeinsterPage } from './leinster.page';

const routes: Routes = [
    {
        path: '',
        component: LeinsterPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LeinsterPageRoutingModule {}
