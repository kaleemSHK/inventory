import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-territory',
    templateUrl: './territory.component.html',
    styleUrls: ['./territory.component.scss']
})
export class TerritoryComponent implements OnInit {
    public banks: any;

    public banksAdvicetemplate: any;
    public Country: any;
    public City: any;

    constructor() { }

    ngOnInit() {
        this.banks = [
            {
                id: "115",
                Name: "territory 4",
                value: "2500",
                bankAdviceTemplate: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                Country: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                City: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
            }
        ]
        this.banksAdvicetemplate = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
        this.City = [{ value: "gulberg", display: "Gulberg" }, { value: "Nipa", display: "Nipa" }, { value: "North Nazimabad", display: "North Nazimabad" }];
        this.Country = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "karachi", display: "karachi" }];
        console.log(this.banks);
    }

}