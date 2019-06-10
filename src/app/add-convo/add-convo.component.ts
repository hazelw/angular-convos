import { Component } from '@angular/core';

import { ConvoService } from '../convos.service';

@Component({
    selector: 'app-add-convo',
    templateUrl: './add-convo.component.html',
    styleUrls: ['./add-convo.component.css']
})
export class AddConvoComponent {
    constructor(
        private convoService: ConvoService
    ) {}

    addConvo() {
        this.convoService.addConvo();
    }
};
