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

    if (opcao === "2") {

        let pedido;
        while(pedido === undefined) {
            const id = await rl.question("Digite o ID do pedido: ");
            pedido = buscarPedidoPorID(id);

            if (pedido === undefined) {
                console.log("\nID INVÁLIDO! TENTE NOVAMENTE.\n");
            }
        }
        console.log("\nPedido encontrado: ");
        console.log(`
            ID: ${pedido.id}
            Produto: ${pedido.produto}
            Preco: ${pedido.preco}
            Status: ${pedido.status}
        `);
        iniciarMenu();
    }

    if (opcao === "3") {

        let pedido;
        while(pedido === undefined) {
            const id = await rl.question("Digite o ID do pedido que deseja remover: ");
            pedido = removerPedido(id);

            if (pedido === undefined) {
                console.log("\nID INVÁLIDO! TENTE NOVAMENTE.\n");
            }
        }
        console.log("\nPedido removido com sucesso!\n");

        iniciarMenu();
    }

    if (opcao === "4") {

        const statusEscolhido = await rl.question("Digite o status que deseja listar: ");

        const pedidos = listarPorStatus(statusEscolhido);

        if (pedidos.length === 0) {
            console.log("\nNenhum pedido encontrado.\n");
        }
        else {
            console.log("\nEsses sao seus pedidos de acordo com o status escolhido:\n");

            for (let i = 0; i < pedidos.length; i++) {
                console.log(`
                    ID: ${pedidos[i].id}
                    Produto: ${pedidos[i].produto}
                    Preco: ${pedidos[i].preco}
                    Status: ${pedidos[i].status}
                `);
            }
        }
        iniciarMenu();
    }
}

iniciarMenu();