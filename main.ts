//% color="#ff0000" icon="\uf0a4"
//% groups="['Drehen', 'Fahren', 'Konfiguration', 'Steuerung']"
namespace TestMotion {
    const IICADRRESS = 0x10;
    const id = "zwb00010";
    export enum Dir {
        //% block="vorwärts"
        CW = 0,
        //% block="rückwärts"
        CCW = 1
    }

    function writeData(buf: number[]): void {
        pins.i2cWriteBuffer(IICADRRESS, pins.createBufferFromArray(buf));
    }


    //% group="Drehen"
    //% block="90 Grad nach Links drehen"
    export function turnLeft90() {

    }


    //% group="Drehen"
    //% block="90 Grad nach Rechts drehen"
    export function turnRight90() {

    }


    //% group="Drehen"
    //% block="um $degrees Grad drehen"
    export function turnDegrees(degrees: number) {

    }

    //% block="Für $distance cm fahren"
    //% group="Fahren"
    export function driveDistance(distance: number) {

    }
    //% block="Robotor anhalten"
    //% group="Fahren"
    export function stopMotor() {

    }

    //% blockId=id+"driveTime"
    //% block="Für $time ms|%direction|fahren"
    //% group="Fahren"
    //% time.defl=1000
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=3
    export function driveTime(time: number, direction: Dir) {

        control.inBackground(function () {
            writeData([0x00, direction, 200]);
            writeData([0x02, direction, 200]);
            basic.pause(time)
            writeData([0x00, 0, 0]);
            writeData([0x02, 0, 0]);
        })
        // Motor starten
        //writeData([0x00, direction, speed]);

    }



    //% block
    //% group="Konfiguration"
    export function setDistance() {

    }


}
