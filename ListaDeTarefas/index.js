import { criarTarefa, buscarTarefaPorID, concluirTarefa, removerTarefa, listarPorPrioridade, listarConcluidas, listarPendentes, listarTitulos, resumoDasTarefas } from "./tarefas.js";
import * as readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
    === LISTA DE TAREFAS ===

    1 - Criar tarefa
    2 - Buscar tarefa por ID
    3 - Concluir tarefa
    4 - Remover tarefa
    5 - Listar por prioridade
    6 - Listar tarefas concluídas
    7 - Listar tarefas pendentes
    8 - Listar títulos
    9 - Exibir resumo das tarefas
    0 - Sair
    `);
};

const iniciarMenu = async () => {
    mostrarMenu();

    const opcao = await rl.question("Escolha uma opcao: ");

    if (opcao === "1") {

        const titulo = await rl.question("Digite o título da tarefa: ");
        const prioridade = await rl.question("Digite a prioridade da tarefa: ");
        criarTarefa(titulo, prioridade);
        console.log("\nTarefa criada com sucesso!\n");

        iniciarMenu();
    }
};

iniciarMenu();