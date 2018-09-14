import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { InventorysystemModule } from '../Inventorysystem/Inventorysystem.module';



const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/subheader--type-search\/index\/index.module#IndexModule"
            },
            {
                "path": "inner",
                "loadChildren": ".\/pages\/default\/inner\/inner.module#InnerModule"
            },
            {
                "path": "profile",
                "loadChildren": ".\/pages\/default\/profile\/profile.module#ProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        InventorysystemModule,
    ],
    exports: [
        RouterModule,
       

    ]
})
export class ThemeRoutingModule { }