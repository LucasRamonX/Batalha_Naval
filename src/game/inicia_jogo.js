import { jogada_maquina, jogada_usuario } from "./player.js";
import { tabuleiro, verifica_se_acertou_barco } from "./tabuleiro.js";
import readline from "readline";

export async function inicioJogo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const perguntar = (pergunta) => {
    return new Promise((resolve) => rl.question(pergunta, resolve));
  };

  const resposta = await perguntar(
    "Escolha 0 Para jogar contra máquina ou escolha 1 para jogar com outra pessoa: ",
  );

  rl.close();

  let pontos_oponente = 0;
  let pontos_jogador = 0;

  const posicao_do_barco_oponente = Math.floor(Math.random() * 10) + 1;
  const posicao_do_barco_user = Math.floor(Math.random() * 10) + 1;

  const modo_de_jogo = Number(resposta);
  let mapa = tabuleiro();

  console.log(mapa);

  while (true) {
    let jogada_oponente = NaN;

    if (modo_de_jogo === 1) {
      jogada_oponente = jogada_maquina();
      console.log("Jogada do robô:", jogada_oponente);

      let mapa_novo = verifica_se_acertou_barco(
        jogada_oponente,
        mapa,
        posicao_do_barco_user,
      );
      console.log(mapa);

      mapa = mapa_novo;
    } else {
      console.log("Modo jogador vs máquina ainda não implementado");
    }

    if (jogada_oponente === posicao_do_barco_user) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        "VOCÊ PERDEU O ROBO ACERTOU O SEU BARCO!!! ",
      );
    }

    let jogada_user = await jogada_usuario();

    let mapa_novo = verifica_se_acertou_barco(
      jogada_user,
      mapa,
      posicao_do_barco_oponente,
    );

    mapa = mapa_novo;

    console.log(mapa);

    if (jogada_user === posicao_do_barco_oponente) {
      console.log("PASSA O PIX PRA RECEBER O PREMIO DE 300 CONTO!! ");
      break;
    }
  }
}
