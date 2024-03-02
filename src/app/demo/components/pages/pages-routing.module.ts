import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
        { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
        { path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
