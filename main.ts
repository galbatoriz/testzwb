/**
 * Extension for MotionKitV2
 */
export enum MotorSelection {
    //% block="links"
    M1 = 0,
    //% block="rechts"
    M2 = 1,
    //% block="beide"
    All = 2
}

export enum Dir {
    //% block="vorwärts"
    CW = 0,
    //% block="rückwärts"
    CCW = 1
}


//% color="#AA278D"
//% groups="['Drehen', 'Fahren', 'Konfiguration', 'Steuerung']"
namespace TestMotion {




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
    //% block"Robotor anhalten"
    //% group="Fahren"
    export function stopMotor() {

    }

    //% block"Für $time ms fahren"
    //% group="Fahren"
    export function driveTime() {

    }

    //% block="Mit Motor|%motor|Richtung|%direction|Tempo|%speed fahren"
    //% motor.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    //% speed.min=0 speed.max=255 speed.defl=200
    //% group="Steuerung"
    export function motorRun(motor: MotorSelection, direction: Dir, speed: number) {

    }

    //% block
    //% group="Konfiguration"
    export function setDistance() {

    }


}
