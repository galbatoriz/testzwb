namespace EasyMotionKit {
    const IICADRRESS = 0x10;
    const id = "245rtzf000601-1512";
    let velocity = 0.26; //unit: mm/ms
    let angularVelocity = 360/700; //unit: degree/ms
    let tuningSpeed = 150;
    export enum Dir {
        //% block="vorwärts"
        CW = 0,
        //% block="rückwärts"
        CCW = 1
    }

    function writeData(buf: number[]): void {
        pins.i2cWriteBuffer(IICADRRESS, pins.createBufferFromArray(buf));
    }

    //% blockId=id+"turnLeft90"
    //% group="Drehen"
    //% block="90 Grad nach Links drehen"
    export function turnLeft90() {
        let wait = 90 / angularVelocity;
        writeData([0x00, 1, tuningSpeed]);
        writeData([0x02, 0, tuningSpeed]);
        basic.pause(wait);
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"turnRight90"
    //% group="Drehen"
    //% block="90 Grad nach Rechts drehen"
    export function turnRight90() {
        let wait2 = 90 / angularVelocity;
        writeData([0x00, 0, tuningSpeed]);
        writeData([0x02, 1, tuningSpeed]);
        basic.pause(wait2);
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"turnDegrees"
    //% group="Drehen"
    //% block="um $degrees Grad drehen"
    export function turnDegrees(degrees: number) {
        let wait3 = degrees/angularVelocity;
        writeData([0x00, 1, tuningSpeed]);
        writeData([0x02, 0, tuningSpeed]);
        basic.pause(wait3);
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"stopMotor"
    //% block="Robotor anhalten"
    //% group="Fahren"
    export function stopMotor() {
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }


    //% blockId=id+"driveTimeNonBlocking"
    //% block="Für $time ms|%direction|fahren, dabei das Programm weiter laufen lassen"
    //% group="Erweiterte Steuerung"
    //% time.defl=1000
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=3
    export function driveTimeNonBlocking(time: number, direction: Dir) {
        control.inBackground(function () {
            writeData([0x00, direction, 200]);
            writeData([0x02, direction, 200]);
            basic.pause(time);
            writeData([0x00, 0, 0]);
            writeData([0x02, 0, 0]);
        })
    }


    //% blockId=id+"driveNonBlockingForeverLeftSpeed"
    //% block="Für immer |%direction|mit $speed Links fahren"
    //% group="Erweiterte Steuerung"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=3
    export function driveNonBlockingForeverLeftSpeed(direction: Dir, speed: number) {
        writeData([0x00, direction, speed]);
    }

    //% blockId=id+"driveNonBlockingForeverRightSpeed"
    //% block="Für immer |%direction|mit $speed Rechts fahren"
    //% group="Erweiterte Steuerung"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=3
    export function driveNonBlockingForeverRightSpeed(direction: Dir, speed: number) {
        writeData([0x02, direction, speed]);

    }

    //% blockId=id+"driveNonBlockingForever"
    //% block="Für immer |%direction|mit $speed fahren"
    //% group="Erweiterte Steuerung"
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=3
    export function driveNonBlockingForever(direction: Dir, speed: number) {
        writeData([0x00, direction, speed]);
        writeData([0x02, direction, speed]);

    }

    //% blockId=id+"driveTime"
    //% block="Für $time ms|%direction|fahren"
    //% group="Fahren"
    //% time.defl=1000
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=3
    export function driveTime(time: number, direction: Dir) {
        writeData([0x00, direction, 200]);
        writeData([0x02, direction, 200]);
        basic.pause(time);
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"driveDistance"
    //% block="Für $distance cm fahren"
    //% group="Fahren"
    //% distance.defl=10
    export function driveDistance(distance: number) {
        let direction = 0;
        if(distance < 0) {
            direction = 1;
            distance = distance*(-1);
        }
        let wait4 = (distance/velocity)*10;
        writeData([0x00, direction, 200]);
        writeData([0x02, direction, 200]);
        basic.pause(wait4)
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"setVelocity"
    //% block="1s sind $distance cm"
    //% group="Konfiguration"
    export function setVelocity(distance: number) {
        velocity = distance/100; // unit: mm/ms
    }

    //% blockId=id+"setAngularVelocity"
    //% block="500ms sind $degrees Grad"
    //% group="Konfiguration"
    export function setAngularVelocity(degrees: number) {
        angularVelocity = degrees / 500; //unit: degree/ms
    }

    //% blockId=id+"driveFor1000Ms"
    //% block="für 1s fahren"
    //% group="Konfiguration"
    export function driveFor1000Ms() {
        writeData([0x00, 0, 200]);
        writeData([0x02, 0, 200]);
        basic.pause(1000);
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"turnFor500ms"
    //% block="für 500ms fahren"
    //% group="Konfiguration"
    export function turnFor500ms() {
        writeData([0x00, 0, tuningSpeed]);
        writeData([0x02, 1, tuningSpeed]);
        basic.pause(500);
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }
}
