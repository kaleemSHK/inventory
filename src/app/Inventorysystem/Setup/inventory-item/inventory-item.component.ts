import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';



@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.css']
})

export class InventoryItemComponent implements OnInit {
    public banks: any;

    public banksAdvicetemplate: any;
    public Chequetemplate: any;

    constructor() { }

    ngOnInit() {
        this.banks = [
            {
                id: "115",
                Name: "Imtiaz Store",
                AccountCode:"0021",
                bankTitle: "Meezan",
                bankBranchCode: "001",
                branch: "Tariq Road",
                companyBank: "Abc",
                bankAdviceTemplate: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
                chequeTemplate: ["--Select--", "Bank Al Habib", "UBL"],
                active: "yes"
            }


        ]

        this.banksAdvicetemplate = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
        this.Chequetemplate = [{ value: "", display: "--Select--" }, { value: "Bank-Al-Habib", display: "Bank Al Habib" }, { value: "UBL", display: "UBL" }];

        console.log(this.banks);


    }

}
