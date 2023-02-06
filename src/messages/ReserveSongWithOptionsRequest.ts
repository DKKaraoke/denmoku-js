import { Buffer } from "buffer";

import { int4ToNumber, numberToInt4 } from "~/int/Int4";
import { removeNullBytes } from "~/string/removeNullBytes";

import { Message } from "./Message";
import { MessageType } from "./MessageType";
import { ReserveSongContentType } from "./ReserveSongContentType";
import { ReserveSongOption } from "./ReserveSongOption";
import { ReserveSongOptionFlag } from "./ReserveSongOptionFlag";
import { ReserveSongMultiTelopType } from "./ReserveSongTelopType";

export interface ReserveSongWithOptionsRequestParams {
  /**
   * Denmoku serial number
   */
  denmokuSerialNumber: string;
  /**
   * Entry type
   */
  entryType: number;
  /**
   * Option flags
   */
  optionFlags: ReserveSongOptionFlag;
  /**
   * Correlation number
   */
  correlationNumber: number;
  /**
   * Logged in DAM Tomo user local number
   */
  loggedInDamTomoUserLocalNumber?: number;
  /**
   * Song tray number
   */
  songTrayNumber: number;
  /**
   * Song track number
   */
  songTrackNumber: number;
  /**
   * Tempo
   */
  tempo: number;
  /**
   * Key
   */
  key: number;
  /**
   * Multi telop type
   */
  multiTelopType: ReserveSongMultiTelopType;
  /**
   * Reserved 1
   */
  reserved1: number;
  /**
   * Content type
   */
  contentType: number;
  /**
   * Content file number
   */
  contentFileNumber: number;
  /**
   * Entry number
   */
  entryNumber?: string;
  /**
   * Reserved 2
   */
  reserved2: number;
  /**
   * Options
   */
  options: ReserveSongOption[];
}

export class ReserveSongWithOptionsRequest extends Message {
  private static readonly fixedBufferLength = 48;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length < ReserveSongWithOptionsRequest.fixedBufferLength) {
      throw new Error(
        `buffer length must be greater than or equal to ${ReserveSongWithOptionsRequest.fixedBufferLength}.`
      );
    }
    const optionCount = buffer.readUInt16BE(46);
    const optionsLength = 4 * optionCount;
    if (buffer.length !== 48 + optionsLength) {
      throw new Error("optionsCount is different from the actual value.");
    }

    const denmokuSerialNumber = removeNullBytes(buffer.toString("utf8", 0, 8));
    const entryType = buffer.readUInt8(8);
    const optionFlags = buffer.readUInt8(9);
    const correlationNumber = buffer.readUInt16BE(10);
    const loggedInDamTomoUserLocalNumber = buffer.readUInt32BE(12);
    const keyTempo = buffer.readUInt8(16);
    const key = int4ToNumber(keyTempo >> 4);
    const tempo = int4ToNumber(keyTempo & 0x0f);
    const songTrayNumber = buffer.readUInt16BE(17);
    const songTrackNumber = buffer.readUInt8(19);
    const multiTelopType = buffer.readUInt8(20);
    const reserved1 = buffer.readUInt8(21);
    const contentType = buffer.readUInt16BE(22);
    const contentFileNumber = buffer.readUInt32BE(24);
    const entryNumber = removeNullBytes(buffer.toString("utf8", 28, 45));
    const reserved2 = buffer.readUInt8(45);
    const options: ReserveSongOption[] = [];
    for (let i = 0; i < optionCount; i++) {
      const offset = ReserveSongWithOptionsRequest.fixedBufferLength + 4 * i;
      const type = buffer.readUInt16BE(offset);
      const value = buffer.readUInt16BE(offset + 2);
      options.push(new ReserveSongOption(type, value));
    }
    return new ReserveSongWithOptionsRequest({
      denmokuSerialNumber,
      entryType,
      optionFlags,
      correlationNumber,
      loggedInDamTomoUserLocalNumber:
        loggedInDamTomoUserLocalNumber === 0
          ? undefined
          : loggedInDamTomoUserLocalNumber,
      songTrayNumber,
      songTrackNumber,
      key,
      tempo,
      multiTelopType,
      reserved1,
      contentType,
      contentFileNumber,
      entryNumber: entryNumber.length ? entryNumber : undefined,
      reserved2,
      options,
    });
  }

  denmokuSerialNumber_!: string;
  entryType_!: number;
  optionFlags_!: ReserveSongOptionFlag;
  correlationNumber_!: number;
  loggedInDamTomoUserLocalNumber_?: number;
  songTrayNumber_!: number;
  songTrackNumber_!: number;
  tempo_!: number;
  key_!: number;
  multiTelopType_!: ReserveSongMultiTelopType;
  reserved1_!: number;
  contentType_!: number;
  contentFileNumber_!: number;
  entryNumber_?: string;
  reserved2_!: number;
  options_!: ReserveSongOption[];

  /**
   * Denmoku serial number
   */
  get denmokuSerialNumber() {
    return this.denmokuSerialNumber_;
  }
  set denmokuSerialNumber(value: string) {
    if (value.length !== 8) {
      throw new Error(
        "ReserveSongWithOptionsRequest#denmokuSerialNumber length must be 8."
      );
    }

    this.denmokuSerialNumber_ = value;
  }

  /**
   * Entry type
   */
  get entryType() {
    return this.entryType_;
  }
  set entryType(value: number) {
    if (value < 0x00 || 0xff < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#entryType must be between 0x00 and 0xff."
      );
    }

    this.entryType_ = value;
  }

  /**
   * Option flags
   */
  get optionFlags() {
    return this.optionFlags_;
  }
  set optionFlags(value: ReserveSongOptionFlag) {
    this.optionFlags_ = value;
  }

  /**
   * Correlation number
   */
  get correlationNumber() {
    return this.correlationNumber_;
  }
  set correlationNumber(value: number) {
    if (value < 0x00 || 0xff < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#,correlationNumber must be between 0x00 and 0xff."
      );
    }

    this.correlationNumber_ = value;
  }

  /**
   * Logged in DAM Tomo user local number
   */
  get loggedInDamTomoUserLocalNumber() {
    return this.loggedInDamTomoUserLocalNumber_;
  }
  set loggedInDamTomoUserLocalNumber(value: number | undefined) {
    if (value !== undefined && (value < 0x00000001 || 0xffffffff < value)) {
      throw new Error(
        "ReserveSongWithOptionsRequest#loggedInDamTomoUserLocalNumber must be between 0x00000001 and 0xffffffff."
      );
    }

    this.loggedInDamTomoUserLocalNumber_ = value;
  }

  /**
   * Song tray number
   */
  get songTrayNumber() {
    return this.songTrayNumber_;
  }
  set songTrayNumber(value: number) {
    if (value < 0 || 9999 < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#songTrayNumber must be between 0 and 9999."
      );
    }

    this.songTrayNumber_ = value;
  }

  /**
   * Song track number
   */
  get songTrackNumber() {
    return this.songTrackNumber_;
  }
  set songTrackNumber(value: number) {
    if (value < 0 || 99 < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#songTrackNumber must be between 0 and 99."
      );
    }

    this.songTrackNumber_ = value;
  }

  /**
   * Tempo
   */
  get tempo() {
    return this.tempo_;
  }
  set tempo(value: number) {
    if (value < -7 || 7 < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#tempo must be between -7 and 7"
      );
    }

    this.tempo_ = value;
  }

  /**
   * Key
   */
  get key() {
    return this.key_;
  }
  set key(value: number) {
    if (value < -7 || 7 < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#key must be between -7 and 7."
      );
    }

    this.key_ = value;
  }

  /**
   * Multi telop type
   */
  get multiTelopType() {
    return this.multiTelopType_;
  }
  set multiTelopType(value: ReserveSongMultiTelopType) {
    this.multiTelopType_ = value;
  }

  /**
   * Reserved 1
   */
  get reserved1() {
    return this.reserved1_;
  }
  set reserved1(value: number) {
    if (value < 0x00 || 0xff < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#reserved1 must be between 0x00 and 0xff."
      );
    }

    this.reserved1_ = value;
  }

  /**
   * Content type
   */
  get contentType() {
    return this.contentType_;
  }
  set contentType(value: ReserveSongContentType) {
    this.contentType_ = value;
  }

  /**
   * Content file number
   */
  get contentFileNumber() {
    return this.contentFileNumber_;
  }
  set contentFileNumber(value: number) {
    this.contentFileNumber_ = value;
  }

  /**
   * Entry number
   */
  get entryNumber() {
    return this.entryNumber_;
  }
  set entryNumber(value: string | undefined) {
    if (value && value.length !== 17) {
      throw new Error(
        "ReserveSongWithOptionsRequest#entryNumber length must be 17."
      );
    }
    this.entryNumber_ = value;
  }

  /**
   * Reserved 2
   */
  get reserved2() {
    return this.reserved2_;
  }
  set reserved2(value: number) {
    if (value < 0x00 || 0xff < value) {
      throw new Error(
        "ReserveSongWithOptionsRequest#reserved2 must be between 0x00 and 0xff."
      );
    }

    this.reserved2_ = value;
  }

  /**
   * Options
   */
  get options() {
    return this.options_;
  }
  set options(value: ReserveSongOption[]) {
    this.options_ = value;
  }

  /**
   * Constructor
   * @param denmokuSerialNumber Denmoku serial number
   * @param entryType Entry type
   * @param optionFlags Option flags
   * @param correlationNumber Correlation number
   * @param loggedInDamTomoUserLocalNumber Logged in DAM Tomo user local number
   * @param songTrayNumber Song tray number
   * @param songTrackNumber Song track number
   * @param tempo Tempo
   * @param key Key
   * @param multiTelopType Multi telop type
   * @param reserved1 Reserved 1
   * @param contentType Content type
   * @param contentFileNumber Content file number
   * @param entryNumber Entry number
   * @param reserved2 Reserved 2
   * @param options Options
   */
  constructor({
    denmokuSerialNumber,
    entryType = 0x00,
    optionFlags = 0x00,
    correlationNumber = 0x0000,
    loggedInDamTomoUserLocalNumber,
    songTrayNumber,
    songTrackNumber,
    tempo = 0,
    key = 0,
    multiTelopType = 0x00,
    reserved1 = 0x00,
    contentType = 0x0000,
    contentFileNumber = 0x00000000,
    entryNumber,
    reserved2 = 0x00,
    options = [],
  }: ReserveSongWithOptionsRequestParams) {
    super(MessageType.LogoutDamTomoUserRequest);

    this.denmokuSerialNumber = denmokuSerialNumber;
    this.entryType = entryType;
    this.optionFlags = optionFlags;
    this.correlationNumber = correlationNumber;
    this.loggedInDamTomoUserLocalNumber = loggedInDamTomoUserLocalNumber;
    this.songTrayNumber = songTrayNumber;
    this.songTrackNumber = songTrackNumber;
    this.tempo = tempo;
    this.key = key;
    this.multiTelopType = multiTelopType;
    this.reserved1 = reserved1;
    this.contentType = contentType;
    this.contentFileNumber = contentFileNumber;
    this.entryNumber = entryNumber;
    this.reserved2 = reserved2;
    this.options = options;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const optionsLength = 4 * this.options.length;
    const buffer = Buffer.alloc(
      ReserveSongWithOptionsRequest.fixedBufferLength + optionsLength
    );
    buffer.write(this.denmokuSerialNumber, 0);
    buffer.writeUInt8(this.entryType, 8);
    buffer.writeUInt8(this.optionFlags, 9);
    buffer.writeUInt16BE(this.correlationNumber, 10);
    buffer.writeUInt32BE(this.loggedInDamTomoUserLocalNumber ?? 0x00000000, 12);
    const keyTempo = (numberToInt4(this.key) << 4) | numberToInt4(this.tempo);
    buffer.writeUInt8(keyTempo, 16);
    buffer.writeUInt16BE(this.songTrayNumber, 17);
    buffer.writeUInt8(this.songTrackNumber, 19);
    buffer.writeUInt8(this.multiTelopType, 20);
    buffer.writeUInt8(this.reserved1, 21);
    buffer.writeUInt16BE(this.contentType, 22);
    buffer.writeUInt32BE(this.contentFileNumber, 24);
    this.entryNumber && buffer.write(this.entryNumber, 28);
    buffer.writeUInt8(this.reserved2, 45);
    buffer.writeUInt16BE(this.options.length, 46);
    if (this.options) {
      let offset = ReserveSongWithOptionsRequest.fixedBufferLength;
      for (const option of this.options) {
        buffer.writeUInt16BE(option.type, offset);
        buffer.writeUInt16BE(option.value, offset + 2);
        offset += 2;
      }
    }
    return buffer;
  }
}
