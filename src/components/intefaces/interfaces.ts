export interface IPlayer {
  id: number;
  name: string;
  inGame: boolean;
  currentTotalScore: number;
  currentTotalP: number;
  currentTotalA: number;
  winCount: number;
  drawCount: number;
  loseCount: number;
}
