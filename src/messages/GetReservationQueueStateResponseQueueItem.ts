import { Buffer } from "buffer";

import { int4ToNumber } from "~/int/Int4";

export interface GetReservationQueueStateResponseQueueItemParams {
  /**
   * Tempo
   */
  tempo: number;
  /**
   * Key
   */
  key: number;
  /**
   * Song tray number
   */
  songTrayNumber: number;
  /**
   * Song track number
   */
  songTrackNumber: number;
  /**
   * idRemoconNo (Unknown value)
   */
  idRemoconNo: number;
  /**
   * Correlation number
   */
  correlationNumber: number;
  /**
   * Reserved 1
   */
  reserved1: number;
}

export class GetReservationQueueStateResponseQueueItem {
  private static readonly bufferLength = 0;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer, offset: number) {
    if (
      buffer.length !== GetReservationQueueStateResponseQueueItem.bufferLength
    ) {
      throw new Error(
        `buffer length must be ${GetReservationQueueStateResponseQueueItem.bufferLength}.`
      );
    }

    const keyTempo = buffer.readUInt8(offset);
    const key = int4ToNumber(keyTempo >> 4);
    const tempo = int4ToNumber(keyTempo & 0x0f);
    const songTrayNumber = buffer.readUInt16BE(offset + 1);
    const songTrackNumber = buffer.readUInt8(offset + 3);
    const idRemoconNo = buffer.readUInt32BE(offset + 4);
    const correlationNumber = buffer.readUInt16BE(offset + 8);
    const reserved1 = buffer.readUInt8(10);
    return new GetReservationQueueStateResponseQueueItem({
      tempo,
      key,
      songTrayNumber,
      songTrackNumber,
      idRemoconNo,
      correlationNumber,
      reserved1,
    });
  }

  tempo_!: number;
  key_!: number;
  songTrayNumber_!: number;
  songTrackNumber_!: number;
  idRemoconNo_!: number;
  correlationNumber_!: number;
  reserved1_!: number;

  /**
   * Tempo
   */
  get tempo() {
    return this.tempo_;
  }
  set tempo(value: number) {
    if (value < -7 || 7 < value) {
      throw new Error(
        "GetReservationQueueStateResponseQueueItem#tempo must be between -7 and 7"
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
        "GetReservationQueueStateResponseQueueItem#key must be between -7 and 7."
      );
    }

    this.key_ = value;
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
        "GetReservationQueueStateResponseQueueItem#songTrayNumber must be between 0 and 9999."
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
        "GetReservationQueueStateResponseQueueItem#songTrackNumber must be between 0 and 99."
      );
    }

    this.songTrackNumber_ = value;
  }

  /**
   * idRemoconNo (Unknown value)
   */
  get idRemoconNo() {
    return this.idRemoconNo_;
  }
  set idRemoconNo(value: number) {
    if (value < 0x00000000 || 0xffffffff < value) {
      throw new Error(
        "GetReservationQueueStateResponseQueueItem#idRemoconNo must be between 0x00000000 and 0xffffffff."
      );
    }

    this.idRemoconNo_ = value;
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
        "GetReservationQueueStateResponseQueueItem#,correlationNumber must be between 0x00 and 0xff."
      );
    }

    this.correlationNumber_ = value;
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
        "GetReservationQueueStateResponseQueueItem#reserved1 must be between 0x00 and 0xff."
      );
    }

    this.reserved1_ = value;
  }

  /**
   * Constructor
   * @param key Key
   * @param tempo Tempo
   * @param songTrayNumber Song tray number
   * @param songTrackNumber Song track number
   * @param idRemoconNo idRemoconNo (Unknown value)
   * @param correlationNumber Correlation number
   * @param reserved1 Reserved 1
   */
  constructor({
    key,
    tempo,
    songTrayNumber,
    songTrackNumber,
    idRemoconNo,
    correlationNumber,
    reserved1,
  }: GetReservationQueueStateResponseQueueItemParams) {
    this.key = key;
    this.tempo = tempo;
    this.songTrayNumber = songTrayNumber;
    this.songTrackNumber = songTrackNumber;
    this.idRemoconNo = idRemoconNo;
    this.correlationNumber = correlationNumber;
    this.reserved1 = reserved1;
  }
}
