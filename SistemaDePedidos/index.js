import { criarPedido, buscarPedidoPorID, removerPedido, listarPorStatus, listarProdutos, calcularValorTotal } from "./pedidos.js";
import * as readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
        === LISTA DE PEDIDOS ===

        1 - Criar pedido
        2 - Buscar pedido por ID
        3 - Remover pedido
        4 - Listar pedido por status
        5 - Listar produtos
        6 - Calcular valor total dos pedidos
        0 - Sair
    `);
}

const iniciarMenu = async () => {
    mostrarMenu();

    const opcao = await rl.question("Escolha uma opcao: ");

    if (opcao === "1") {

        const produto = await rl.question("Digite o nome do produto: ");
        const preco = Number(await rl.question("Digite o preco do produto: "));
        criarPedido(produto, preco);

        console.log("\nPedido criado com sucesso!\n");

        iniciarMenu();
    }
}

iniciarMenu();