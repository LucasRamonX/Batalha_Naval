import readline from "readline";

export function jogada_maquina() {
  const tiro = Math.floor(Math.random() * 10) + 1;
  return tiro;
}

export async function jogada_usuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const perguntar = (pergunta) => {
    return new Promise((resolve) => rl.question(pergunta, resolve));
  };

  const resposta = await perguntar("Player 1 - Escolha o numéro da jogada");
  rl.close();

  return parseInt(resposta);
}

export async function player_2() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const perguntar = (pergunta) => {
    return new Promise((resolve) => rl.question(pergunta, resolve));
  };

  const resposta = await perguntar("Player 2 - Escolha o numéro da jogada");
  rl.close();

  return parseInt(resposta);
}
