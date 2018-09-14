import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-package-type',
    templateUrl: './package-type.component.html',
    styleUrls: ['./package-type.component.scss']
})
export class PackageTypeComponent implements OnInit {
    public banks: any;

    public banksAdvicetemplate: any;
    public Country: any;
    public City: any;

    constructor() { }

    ngOnInit() {
        this.banks = [
            {
                id: "115",
                Name: "Oil",
                value: "2500",
                bankAdviceTemplate: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                Country: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                City: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
            }
        ]
        this.banksAdvicetemplate = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
        this.Country = [{ value: "USA", display: "USA" }, { value: "Dubai", display: "Dubai" }, { value: "Pakistan", display: "Paskistan" }];
        this.Country = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "karachi", display: "karachi" }];
        console.log(this.banks);
    }

}