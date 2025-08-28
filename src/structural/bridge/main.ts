import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";

export function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.tooglePower(); // true

    // Type Guard
    if (!('volumeUp' in abstraction)) return; //verifica se este método existe

    abstraction.volumeUp(); // 20
    abstraction.volumeUp(); // 30
    abstraction.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();

// const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControl(tv);
clientCode(tvRemoteControl);
