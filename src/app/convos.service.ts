import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConvoService {
    convos = [];

    constructor() {}

    addConvo() {
        let id = Math.max(this.convos.map((convo) => convo.id)) + 1;
        this.convos.push({
            'id': id,
            'messages': []
        });
        return this.convos;
    }

    deleteConvo(convoId) {
        this.convos = this.convos.filter((id) => convoId !== id);
    }

    addMessageToConvo(convoId, text) {
        let convo = this.convos.find((convo) => convo.id === convoId);
        convo.messages.push({
            'timestamp': new Date().toString(),
            'text': text
        });
        return this.convos;
    }
}
