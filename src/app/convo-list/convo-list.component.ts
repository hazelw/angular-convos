import { Component } from '@angular/core';

import { ConvoService } from '../convos.service';

@Component({
    selector: 'app-convo-list',
    templateUrl: './convo-list.component.html',
    styleUrls: ['./convo-list.component.css']
})
export class ConvoListComponent {
    constructor(
        private convoService: ConvoService
    ) {}
}

