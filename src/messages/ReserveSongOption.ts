export enum ReserveSongOptionType {
  GuideMelody = 0x01,
  GuideVocal = 0x02,
  VisibleGuideMelody = 0x03,
  SelectableBgv = 0x05,
  TelopSize = 0x06,
  MicEffect = 0x07,
  HideSongName = 0x08,
  Game = 0x0a,
  FadeOut = 0x0b,
  DamTomoVocal = 0x10,
}

export class ReserveSongOption {
  private type_!: ReserveSongOptionType;
  private value_!: number;

  /**
   * Type
   */
  get type() {
    return this.type_;
  }
  set type(value: ReserveSongOptionType) {
    this.type_ = value;
  }

  /**
   * Value
   */
  get value() {
    return this.value_;
  }
  set value(value: number) {
    if (value < 0x0000 || 0xffff < value) {
      throw new Error(
        "ReserveSongOption#value must be between 0x0000 and 0xffff."
      );
    }

    this.value_ = value;
  }

  /**
   * Constructor
   * @param type Type
   * @param value Value
   */
  constructor(type: ReserveSongOptionType, value: number) {
    this.type = type;
    this.value = value;
  }
}
