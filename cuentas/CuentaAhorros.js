import { CuentaBancaria } from './CuentaBancaria.js';

export class CuentaAhorros extends CuentaBancaria {
    #tasaInteres;

    constructor(numeroCuenta, saldo, tasaInteres = 0.02) {
        super(numeroCuenta, saldo);
        this.#tasaInteres = tasaInteres;
    }

    calcularInteres() {
        // Se usa getSaldo(), nunca se accede a #saldo directamente
        return this.getSaldo() * this.#tasaInteres;
    }
}
