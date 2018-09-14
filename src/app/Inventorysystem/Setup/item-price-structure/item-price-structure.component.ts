import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-item-price-structure',
    templateUrl: './item-price-structure.component.html',
    styleUrls: ['./item-price-structure.component.scss']
})
export class ItemPriceStructureComponent implements OnInit {
    private ItemPriceStructure: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.ItemPriceStructure = await this.InventoryService.GetItemPriceStructures();
    }

    async AddItemPriceStructure(value) {
        return await this.InventoryService.AddItemPriceStructure(value);
    }

    async UpdateItemPriceStructure(value) {
        return await this.InventoryService.UpdateItemPriceStructure(value.Key);
    }

    async DeleteItemPriceStructure(value) {
        return await this.InventoryService.DeleteItemPriceStructure(value.Key.ItemPriceStructureId);
    }
}
