import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'connacht', loadChildren: () => import('./connacht/connacht.module').then(m => m.ConnachtPageModule) },
    { path: 'leinster', loadChildren: () => import('./leinster/leinster.module').then(m => m.LeinsterPageModule) },
    { path: 'munster', loadChildren: () => import('./munster/munster.module').then(m => m.MunsterPageModule) },
    { path: 'ulster', loadChildren: () => import('./ulster/ulster.module').then(m => m.UlsterPageModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
