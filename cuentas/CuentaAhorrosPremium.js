import { CuentaAhorros } from './CuentaAhorros.js';

export class CuentaAhorrosPremium extends CuentaAhorros {
    #bonoFidelidad;

    constructor(numeroCuenta, saldo, tasaInteres = 0.035, bonoFidelidad = 10000) {
        super(numeroCuenta, saldo, tasaInteres);
        this.#bonoFidelidad = bonoFidelidad;
    }

    calcularInteres() {
        
        return super.calcularInteres() + this.#bonoFidelidad;
    }
}
