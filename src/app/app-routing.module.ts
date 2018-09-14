import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventorysystemModule } from '../app/Inventorysystem/Inventorysystem.module';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }