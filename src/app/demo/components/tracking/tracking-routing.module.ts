import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrackingComponent } from './tracking.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TrackingComponent }
    ])],
    exports: [RouterModule]
})
export class TrackingRoutingModule { }
