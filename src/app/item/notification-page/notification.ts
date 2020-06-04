import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "ns-notification",
    templateUrl: "./notification.html"
})
export class NotificationComponent implements OnInit {

    private _data: any;
    message = {}
    constructor(private _activatedRoute: ActivatedRoute){}
    
    ngOnInit(): void {
        let messBody = {}
        this._data = this._activatedRoute.params.subscribe(params => messBody = params)
        console.log('data',messBody)
        this.message = messBody
    }
}
