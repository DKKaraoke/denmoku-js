export enum ReserveSongContentType {
  /**
   * Unknown
   */
  RecordingTest = 0x0001,
  /**
   * Unknown
   */
  SyncTelop = 0x001a,
  /**
   * Unknown
   */
  RankingOpt = 0x0020,
  /**
   * Unknown
   */
  CdDirect = 0x004b,
  /**
   * Unknown
   */
  RankingShop = 0x0050,
  /**
   * Unknown
   */
  MySongDl = 0x0056,
  /**
   * 完唱!歌いきりまショー!!
   */
  FullLengthNormal = 0x006d,
  /**
   * Unknown
   */
  CdPressNow = 0x0070,
  /**
   * Unknown
   */
  CdPressOne = 0x0071,
  /**
   * Unknown
   */
  CdPressTwo = 0x0072,
  /**
   * Unknown
   */
  CdPressThree = 0x0073,
  /**
   * Unknown
   */
  RankingChallenge = 0x007f,
  /**
   * ランキングバトル
   */
  RankingBattle = 0x0082,
  /**
   * Unknown
   */
  KaraokeGp = 0x0084,
  /**
   * Unknown
   */
  AuditionA = 0x0088,
  /**
   * Unknown
   */
  AuditionB = 0x0089,
  /**
   * Unknown
   */
  DamRec = 0x0094,
  /**
   * Unknown
   */
  CdPressRec = 0x00bb,
  /**
   * Unknown
   */
  CdPressAudition = 0x00bc,
  /**
   * Unknown
   */
  CdPressBurn = 0x00bd,
  /**
   * 精密採点
   */
  PreciseScoring = 0x00c2,
  /**
   * YOUR STORY
   */
  YourStory = 0x00c3,
  /**
   * DAMボイストレーニング
   */
  VoiceTraining = 0x00c4,
  /**
   * 完唱!歌いきりまショー!! 激辛
   */
  FullLengthHard = 0x00c5,
  /**
   * Unknown
   */
  DamRecMulti = 0x00c6,
  /**
   * Unknown
   */
  DamVideo = 0x00c7,
  /**
   * Unknown
   */
  AuditionC = 0x00c8,
  /**
   * Unknown
   */
  AuditionD = 0x00c9,
  /**
   * Unknown
   */
  AuditionE = 0x00ca,
  /**
   * Unknown
   */
  AuditionF = 0x00cb,
  /**
   * Unknown
   */
  DamVocal = 0x00cf,
  /**
   * Unknown
   */
  DamVocalPay = 0x00d0,
  /**
   * EXILE精密採点DX
   */
  PresiceScoringExile = 0x011a,
  /**
   * 精密採点DX-G
   */
  PreciseScoringDxG = 0x011b,
  /**
   * 精密採点DXデュエット
   */
  PreciseScoringDxDuet = 0x011c,
  /**
   * 精密採点DX Lite
   */
  PreciseScoringDxLite = 0x011d,
  /**
   * 精密採点Ai
   */
  PreciseScoringAi = 0x011e,
  /**
   * ノンストップカラオケ
   */
  NonStopKaraoke = 0x01ab,
  /**
   * Unknown
   */
  CdPress = 0x01f4,
  /**
   * Unknown
   */
  DamVideoMulti = 0x01fa,
  /**
   * Unknown
   */
  DamRecTrial = 0x01ff,
  /**
   * Unknown
   */
  DamVideoTrial = 0x0200,
  /**
   * Unknown
   */
  DamRanking = 0x0207,
  /**
   * Unknown
   */
  DamRecDx = 0x0208,
  /**
   * Unknown
   */
  DamListenTrans = 0x020f,
  /**
   * Unknown
   */
  DamVideoDxG = 0x0210,
  /**
   * Unknown
   */
  DamRecUpload = 0x021a,
  /**
   * Unknown
   */
  DamRecUploadPay = 0x021b,
  /**
   * Unknown
   */
  DamVideoUpload = 0x021c,
  /**
   * Unknown
   */
  DamVideoUploadPay = 0x021d,
  /**
   * Unknown
   */
  DamVocalUpload = 0x021e,
  /**
   * Unknown
   */
  DamVocalUploadPay = 0x021f,
  /**
   * カラオケ紅白歌合戦
   */
  KouhakuSingingContest = 0x0324,
  /**
   * シンプル採点
   */
  SimpleScoring = 0x0331,
  /**
   * 美川憲一のアンタ、歌えんの?
   */
  MikawaKenichi = 0x0333,
  /**
   * 採点おわり
   */
  End = 0x0334,
  /**
   * グラカラ
   */
  Grakara = 0x0335,
  /**
   * フリツケ超マスター
   */
  ChoreographySuperMaster = 0x0336,
  /**
   * BINGO
   */
  Bingo = 0x0337,
  /**
   * DAMスロット
   */
  DamSlot = 0x0338,
  /**
   * 一曲入魂!ピタリ当てまショー!!
   */
  HitOnTheMark = 0x0339,
  /**
   * スイートエンジェル
   */
  SweetAngel = 0x033a,
  /**
   * 激写!ときめき採点
   */
  TokimekiScoring = 0x033f,
  /**
   * 名探偵コナンなぞときカラオケ
   */
  DetectiveConanScoring = 0x0342,
  /**
   * バーチャルカラオケ
   */
  VirtualKaraoke = 0x0343,
  /**
   * Unknown
   */
  ShutterChance = 0x0344,
  /**
   * Unknown
   */
  MotherClose = 0x0346,
  /**
   * ONE PIESE採点
   */
  OnePieceScoring = 0x0347,
  /**
   * 精密採点ミリオン
   */
  PreciseScoringMillion = 0x0359,
  /**
   * みんなで紅白歌合戦
   */
  AllTogetherSingingContest = 0x035a,
  /**
   * プレミアムデュエット
   */
  PremiumDuet = 0x035c,
  /**
   * シンプル採点3D
   */
  SimpleScoring3d = 0x035d,
  /**
   * モテカラ
   */
  Motekara = 0x0364,
}
