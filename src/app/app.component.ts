import { Component, OnInit } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor(private routerExtensions: RouterExtensions) { }
    
    ngOnInit(): void {
        firebase.init({
            showNotifications: true,
            showNotificationsWhenInForeground: true,

            onPushTokenReceivedCallback: (token) => {
                console.log('[Firebase] onPushTokenReceivedCallback:', { token });
            },

            // onMessageReceivedCallback: (message: firebase.Message) => {
            //     console.log('[Firebase] onMessageReceivedCallback:', { message });
            //     this.routerExtensions.navigate(['/notification'])
            // }
        })
            .then(() => {
                console.log('[Firebase] Initialized');
                firebase.subscribeToTopic("news").then(() => console.log("Subscribed to topic"));
            })
            .catch(error => {
                console.log('[Firebase] Initialize', { error });
            });
    }
}
