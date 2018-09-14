import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { InventorysystemService } from '../../service/Inventorysystem.service';


@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    public Supplier: any;

    constructor(private InventoryService: InventorysystemService) {
        // this.SupplierForm = this.formBuilder.group({
        //     'Code': ['', Validators.required],
        //     'Status': ['', Validators.required],
        //     'Name': ['', Validators.required],
        //     'Address': ['', Validators.required],
        //     'City': ['', Validators.required],
        //     'Country': ['', Validators.required],
        //     'LandlineNumber': ['', Validators.required],
        //     'MobilerNumber': ['', Validators.required],
        //     'FaxNumber': ['', Validators.required],
        //     'Email': ['', Validators.required],
        //     'Nature': ['', Validators.required],
        //     'ContactName': ['', Validators.required],
        //     'ContactNumber': ['', Validators.required],
        //     'GlAccount': ['', Validators.required],
        // });
    }

    async  ngOnInit() {
        this.Supplier = await this.InventoryService.GetSuppliers();
    }

    async AddSupplier(value) {
        return await this.InventoryService.AddSupplier(value);
    }

    async UpdateSupplier(value) {
        return await this.InventoryService.UpdateSupplier(value.Key);
    }

    async DeleteSupplier(value) {
        return await this.InventoryService.DeleteSupplier(value.Key.SupplierId);
    }





}
