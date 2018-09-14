import { Component, OnInit } from '@angular/core';
import { InventorysystemModule } from '../../Inventorysystem.module';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-customer-price-pick-level',
    templateUrl: './customer-price-pick-level.component.html',
    styleUrls: ['./customer-price-pick-level.component.scss']
})
export class CustomerPricePickLevelComponent implements OnInit {
    public banks: any;

    public banksAdvicetemplate: any;
    public Chequetemplate: any;

    constructor() { }

    ngOnInit() {
        this.banks = [
            {
                id: "115",
                Name: "Pakistani",
                value: "2500",
                bankAdviceTemplate: [{ display: "xyz", value: "xyz" }, { display: "xyz", value: "xyz" }],
            }


        ]

        this.banksAdvicetemplate = [{ value: "General", display: "General" }, { value: "General-With-NIC", display: "General With NIC" }, { value: "UBL", display: "UBL" }];
      
        console.log(this.banks);


    }

}