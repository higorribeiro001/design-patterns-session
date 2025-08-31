interface Observable {
    subscribe(...observers: Observer[]):void;
    unSubscribe(observer: Observer):void;
    notify(): void;
}

interface Observer {
    update(...args: unknown[]): void;
}

// Concrete observable
class InputObservable implements Observable {
    private observers: Observer[] = [];

    constructor(public element: HTMLInputElement) {}

    subscribe(...observers: Observer[]): void {
        observers.forEach((observer) => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
        });
    }

    unSubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    notify(): void {
        this.observers.forEach((observer) => observer.update(this));
    }
}

// Concrete observer
class ParagraphObserver implements Observer {
    constructor(public element: HTMLParagraphElement) {}

    update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

// client code
function makeInput(): HTMLInputElement {
    const input = document.createElement('input');

    document.body.appendChild(input);

    return input;
}

function makeParagraph(): HTMLParagraphElement {
    const p = document.createElement('p');

    document.body.appendChild(p);
    p.innerText = 'Texto inicial (Hardcoded)';

    return p;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
input.subscribe(p1, p2);

input.element.addEventListener('keyup', function () {
    input.notify();
});
