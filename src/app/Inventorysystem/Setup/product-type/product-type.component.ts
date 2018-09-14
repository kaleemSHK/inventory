import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
    private ProductType: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.ProductType = await this.InventoryService.GetProductTypes();
    }

    async AddProductType(value) {
        return await this.InventoryService.AddProductType(value);
    }

    async UpdateProductType(value) {
        return await this.InventoryService.UpdateProductType(value.Key);
    }

    async DeleteProductType(value) {
        return await this.InventoryService.DeleteProductType(value.Key.ProductTypeId);
    }

}
