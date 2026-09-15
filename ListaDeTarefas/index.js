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