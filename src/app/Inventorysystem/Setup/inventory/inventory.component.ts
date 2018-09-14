import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    private InventoryItem: any;
    private Inventory: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.InventoryItem = await this.InventoryService.GetInventoryItems();
        this.Inventory = await this.InventoryService.GetInventories();
    }

    async AddInventory(value) {
        return await this.InventoryService.AddInventory(value);
    }

    async UpdateInventory(value) {
        return await this.InventoryService.UpdateInventory(value.Key);
    }

    async DeleteInventory(value) {
        return await this.InventoryService.DeleteInventory(value.Key.InventoryId);
    }
}
