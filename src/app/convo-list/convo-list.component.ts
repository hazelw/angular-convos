import { Component } from '@angular/core';

import { ConvoService } from '../convos.service';

@Component({
    selector: 'app-convo-list',
    templateUrl: './convo-list.component.html',
    styleUrls: ['./convo-list.component.css']
})
export class ConvoListComponent {
    convos = [];

    constructor(
        private convoService: ConvoService
    ) {
        this.convos = convoService.getConvos();
    }

    ngOnChanges(changes) {
        console.log(changes);
    }

    deleteConvo(id) {
        this.convos = this.convoService.deleteConvo(id);
    }
}

