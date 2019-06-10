import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConvoService {
    convos = [
        {'id': 0, 'messages': [
            {'id': 0, 'timestamp': new Date().toString(), 'text': 'oldest text'},
            {'id': 1, 'timestamp': new Date().toString(), 'text': 'newest text'}
        ]},
        {'id': 1, 'messages': [
            {'id': 0, 'timestamp': new Date().toString(), 'text': 'older text'},
            {'id': 1, 'timestamp': new Date().toString(), 'text': 'newer text'}
        ]}
    ];

    constructor() {}

    getConvos() {
        return this.convos;
    }
    
    addConvo() {
        let id = (
            this.convos.length ? this.convos.reduce((next, current) => next.id > current.id ? next : current).id + 1 : 0
        );
        this.convos.push({
            'id': id,
            'messages': [{'id': 0, 'timestamp': new Date().toString(), 'text': 'new convo'}]
        });
    }

    deleteConvo(convoId) {
        this.convos = this.convos.filter((convo) => convoId !== convo.id);
        return this.convos;
    }

    addMessageToConvo(convoId, text) {
        let convo = this.convos.find((convo) => convo.id === convoId);
        let id = Math.max(convo.messages.map((message) => message.id)) + 1;
        convo.messages.push({
            'id': id,
            'timestamp': new Date().toString(),
            'text': text
        });
        return this.convos;
    }
}
