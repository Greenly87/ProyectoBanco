import { CuentaBancaria } from './CuentaBancaria.js';

export class CuentaCorriente extends CuentaBancaria {
    #sobregiroPermitido;

    constructor(numeroCuenta, saldo, sobregiroPermitido = 500000) {
        super(numeroCuenta, saldo);
        this.#sobregiroPermitido = sobregiroPermitido;
    }

    calcularInteres() {
        // Las cuentas corrientes no generan interes a favor,
        // en cambio tienen un pequeno cargo por manejo (interes negativo)
        return -(this.getSaldo() * 0.001);
    }

    getSobregiroPermitido() {
        return this.#sobregiroPermitido;
    }
}
