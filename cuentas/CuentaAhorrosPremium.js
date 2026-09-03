import { CuentaAhorros } from './CuentaAhorros.js';

export class CuentaAhorrosPremium extends CuentaAhorros {
    #bonoFidelidad;

    constructor(numeroCuenta, saldo, tasaInteres = 0.035, bonoFidelidad = 10000) {
        super(numeroCuenta, saldo, tasaInteres);
        this.#bonoFidelidad = bonoFidelidad;
    }

    calcularInteres() {
        // Reutiliza el calculo del padre (CuentaAhorros) y le suma el bono
        return super.calcularInteres() + this.#bonoFidelidad;
    }
}
