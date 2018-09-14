import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-comission',
    templateUrl: './comission.component.html',
    styleUrls: ['./comission.component.scss']
})
export class ComissionComponent implements OnInit {
    public banks: any;

    public banksAdvicetemplate: any;
    public Country: any;
    public City: any;

    constructor() { }

    ngOnInit() {
        this.banks = [
            {
                id: "115",
                Name: "Imraan Ahmed Khan",
                Percentage: "20%",
                bankAdviceTemplate: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                Country: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                City: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
            }
        ]
        this.banksAdvicetemplate = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
        this.Country = [{ value: "USA", display: "USA" }, { value: "Dubai", display: "Dubai" }, { value: "Pakistan", display: "Paskistan" }];
        this.City = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "karachi", display: "karachi" }];
        console.log(this.banks);
    }

}