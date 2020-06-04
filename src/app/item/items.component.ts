import { Component, OnInit, NgZone } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private ngZone: NgZone, private itemService: ItemService, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        firebase.addOnMessageReceivedCallback((message) => {
            console.log('[Firebase] onMessageReceivedCallback:', { message });
            this.navigateToNotification(message)
        }
        );

    }

    navigateToNotification(data) {
        this.ngZone.run(() => this.routerExtensions.navigate(['/notification', data],{clearHistory:false}))

    }
}
