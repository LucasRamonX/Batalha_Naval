export function tabuleiro() {
  let tabuleiro = [];

  for (let i = 0; i < 10; i++) {
    tabuleiro.push(i);
  }

  return tabuleiro;
}

export function verifica_se_acertou_barco(
  jogada,
  tabuleiro,
  posicao_dos_barcos,
) {
  if (jogada === posicao_dos_barcos) {
    tabuleiro[jogada] = "X";
  }

  return tabuleiro;
}
