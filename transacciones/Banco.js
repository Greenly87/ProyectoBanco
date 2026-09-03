import { CuentaAhorros } from '../cuentas/CuentaAhorros.js';
import { CuentaCorriente } from '../cuentas/CuentaCorriente.js';
import { CuentaAhorrosPremium } from '../cuentas/CuentaAhorrosPremium.js';

const cuentas = [
    new CuentaAhorros("AH-001", 1000000),
    new CuentaCorriente("CC-001", 2000000),
    new CuentaAhorrosPremium("AHP-001", 5000000)
];

console.log("=== Aplicacion de intereses del banco ===\n");

cuentas.forEach(cuenta => {
    console.log(`Antes:   ${cuenta.toString()}`);

    // instanceof se valida del tipo mas especifico al mas general,
    // porque CuentaAhorrosPremium tambien es instanceof CuentaAhorros
    let tipoDetectado;
    if (cuenta instanceof CuentaAhorrosPremium) {
        tipoDetectado = "Cuenta de Ahorros Premium";
    } else if (cuenta instanceof CuentaAhorros) {
        tipoDetectado = "Cuenta de Ahorros";
    } else if (cuenta instanceof CuentaCorriente) {
        tipoDetectado = "Cuenta Corriente";
    } else {
        tipoDetectado = "Tipo de cuenta desconocido";
    }

    const interesAplicado = cuenta.aplicarInteres();
    console.log(`Tipo:    ${tipoDetectado}`);
    console.log(`Interes aplicado: $${interesAplicado.toFixed(2)}`);
    console.log(`Despues: ${cuenta.toString()}\n`);
});
