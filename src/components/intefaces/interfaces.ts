export interface IPlayer {
  id: number;
  name: string;
  inGame: boolean;
  currentScores: number[];
  currentTotalScore: number;
  winCount: number;
  drawCount: number;
  loseCount: number;
}
