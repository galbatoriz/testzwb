//% color="#ff0000" icon="\uf0a4"
//% groups="['Drehen', 'Fahren', 'Konfiguration', 'Erweiterte Steuerung']"
namespace TestMotion {
    const IICADRRESS = 0x10;
    const id = "245rtzf0006011359";
    let timeIntoDistanceFactor = 200; //1000ms = x cm
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
        writeData([0x00, 0, 200]);
        writeData([0x02, 1, 200]);
        basic.pause(500)
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"turnRight90"
    //% group="Drehen"
    //% block="90 Grad nach Rechts drehen"
    export function turnRight90() {
        writeData([0x00, 1, 200]);
        writeData([0x02, 0, 200]);
        basic.pause(500)
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"turnDegrees"
    //% group="Drehen"
    //% block="um $degrees Grad drehen"
    export function turnDegrees(degrees: number) {

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
            basic.pause(time)
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
        basic.pause(time)
        writeData([0x00, 0, 0]);
        writeData([0x02, 0, 0]);
    }

    //% blockId=id+"driveDistance"
    //% block="Für $distance cm fahren"
    //% group="Fahren"
    //% distance.defl=10
    export function driveDistance(distance: number) {

    }

    //% blockId=id+"setDistance"
    //% block
    //% group="Konfiguration"
    export function setDistance() {

    }
}