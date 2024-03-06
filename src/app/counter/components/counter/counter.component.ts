import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter</h1>
    <h3> {{ counter }}</h3>
    <button class="px-4 py-1 bg-blue-600 rounded-lg m-1 text-white hover:bg-blue-400" (click)="increaseBy(1)"> +</button>
    <button class="px-4 py-1 bg-blue-600 rounded-lg m-1 text-white hover:bg-blue-400" (click)="resetCounter()"> Reset </button>
    <button class="px-4 py-1 bg-blue-600 rounded-lg m-1 text-white hover:bg-blue-400" (click)="increaseBy(-1)"> - </button>
    `
})
export class CounterComponent {
    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter() {
        this.counter = 10;
    }
}