namespace TestMotion {
    const IICADRRESS = 0x10;

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

    //% block="Für 1000 ms fahren"
    //% group="Fahren"
    export function driveTime() {
        
        control.inBackground(function () {
            writeData([0x00, 0, 200]);
            writeData([0x02, 0, 200]);
            basic.pause(1000)
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
