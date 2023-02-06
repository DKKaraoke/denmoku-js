import { Buffer } from "buffer";

import { int4ToNumber } from "~/int/Int4";

export interface ReservedSongParams {
  /**
   * Time
   */
  time: number;
  /**
   * Tray number
   */
  trayNumber: number;
  /**
   * Track number
   */
  trackNumber: number;
  /**
   * Sequence number
   */
  sequenceNumber: number;
  /**
   * Tempo
   */
  tempo: number;
  /**
   * Key
   */
  key: number;
  /**
   * Mic effect
   */
  micEffect: number;
  /**
   * Telop song mask
   */
  telopSongMask: number;
  /**
   * Guide
   */
  guide: number;
  /**
   * Your story
   */
  yourStory: number;
  /**
   * Logged in DAM Tomo user local number
   */
  loggedInDamTomoUserLocalNumber: number;
  /**
   * Content type
   */
  contentType: number;
  /**
   * BGV
   */
  bgv: number;
  /**
   * DAM Tomo vocal
   */
  damTomoVocal: number;
  /**
   * Reserved 1
   */
  reserved1: Buffer;
}

export class ReservedSong {
  /**
   * Buffer length
   */
  static readonly bufferLength = 24;

  /**
   * From buffer
   * @param buffer Buffer
   * @param offset Offset
   * @returns Instance
   */
  static fromBuffer(buffer: Buffer, offset: number) {
    if (buffer.length - offset < ReservedSong.bufferLength) {
      throw new Error(
        `buffer left of length must be greater than or equal ${ReservedSong.bufferLength}.`
      );
    }

    const time = buffer.readUInt32BE(offset);
    const trayNumber = buffer.readUInt16BE(offset + 4);
    const trackNumber = buffer.readUInt8(offset + 6);
    const sequenceNumber = buffer.readUInt8(offset + 7);
    const keyTempo = buffer.readUInt8(offset + 8);
    const key = int4ToNumber(keyTempo >> 4);
    const tempo = int4ToNumber(keyTempo & 0x0f);
    const micEffect = buffer.readUInt8(offset + 9);
    const telopSongMask = buffer.readUInt8(offset + 10);
    const guide = buffer.readUInt8(offset + 11);
    const yourStory = buffer.readUInt8(offset + 12);
    const loggedInDamTomoUserLocalNumber = buffer.readUInt8(offset + 13);
    const contentType = buffer.readUInt16BE(offset + 14);
    const bgv = buffer.readUInt32BE(offset + 16);
    const damTomoVocal = buffer.readUInt8(offset + 20);
    const reserved1 = buffer.slice(offset + 21, offset + 24);
    return new ReservedSong({
      time,
      trayNumber,
      trackNumber,
      sequenceNumber,
      key,
      tempo,
      micEffect,
      telopSongMask,
      guide,
      yourStory,
      loggedInDamTomoUserLocalNumber,
      contentType,
      bgv,
      damTomoVocal,
      reserved1,
    });
  }

  time_!: number;
  trayNumber_!: number;
  trackNumber_!: number;
  sequenceNumber_!: number;
  tempo_!: number;
  key_!: number;
  micEffect_!: number;
  telopSongMask_!: number;
  guide_!: number;
  yourStory_!: number;
  loggedInDamTomoUserLocalNumber_!: number;
  contentType_!: number;
  bgv_!: number;
  damTomoVocal_!: number;
  reserved1_!: Buffer;

  /**
   * Time
   */
  get time() {
    return this.time_;
  }
  set time(value: number) {
    this.time_ = value;
  }

  /**
   * Tray number
   */
  get trayNumber() {
    return this.trayNumber_;
  }
  set trayNumber(value: number) {
    if (value < 0 || 9999 < value) {
      throw new Error("ReservedSong#trayNumber must be between 0 and 9999.");
    }

    this.trayNumber_ = value;
  }

  /**
   * Track number
   */
  get trackNumber() {
    return this.trackNumber_;
  }
  set trackNumber(value: number) {
    if (value < 0 || 99 < value) {
      throw new Error("ReservedSong#trackNumber must be between 0 and 99.");
    }

    this.trackNumber_ = value;
  }

  /**
   * Sequence number
   */
  get sequenceNumber() {
    return this.sequenceNumber_;
  }
  set sequenceNumber(value: number) {
    this.sequenceNumber_ = value;
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
   * Mic effect
   */
  get micEffect() {
    return this.micEffect_;
  }
  set micEffect(value: number) {
    this.micEffect_ = value;
  }

  /**
   * Telop song mask
   */
  get telopSongMask() {
    return this.telopSongMask_;
  }
  set telopSongMask(value: number) {
    this.telopSongMask_ = value;
  }

  /**
   * Guide
   */
  get guide() {
    return this.guide_;
  }
  set guide(value: number) {
    this.guide_ = value;
  }

  /**
   * Your story
   */
  get yourStory() {
    return this.yourStory_;
  }
  set yourStory(value: number) {
    this.yourStory_ = value;
  }

  /**
   * Logged in DAM Tomo user local number
   */
  get loggedInDamTomoUserLocalNumber() {
    return this.loggedInDamTomoUserLocalNumber_;
  }
  set loggedInDamTomoUserLocalNumber(value: number) {
    this.loggedInDamTomoUserLocalNumber_ = value;
  }

  /**
   * Content type
   */
  get contentType() {
    return this.contentType_;
  }
  set contentType(value: number) {
    this.contentType_ = value;
  }

  /**
   * BGV
   */
  get bgv() {
    return this.bgv_;
  }
  set bgv(value: number) {
    this.bgv_ = value;
  }

  /**
   * DAM Tomo vocal
   */
  get damTomoVocal() {
    return this.damTomoVocal_;
  }
  set damTomoVocal(value: number) {
    this.damTomoVocal_ = value;
  }

  /**
   * Reserved 1
   */
  get reserved1() {
    return this.reserved1_;
  }
  set reserved1(value: Buffer) {
    this.reserved1_ = value;
  }

  /**
   * Constructor
   * @param time Time
   * @param trayNumber Tray number
   * @param trackNumber Track number
   * @param sequenceNumber Sequence number
   * @param tempo Tempo
   * @param key Key
   * @param micEffect Mic effect
   * @param telopSongMask Telop song mask
   * @param guide Guide
   * @param yourStory Your story
   * @param loggedInDamTomoUserLocalNumber Logged in DAM Tomo user local number
   * @param contentType Content type
   * @param bgv BGV
   * @param damTomoVocal DAM Tomo vocal
   * @param reserved1 Reserved 1
   */
  constructor({
    time,
    trayNumber,
    trackNumber,
    sequenceNumber,
    tempo,
    key,
    micEffect,
    telopSongMask,
    guide,
    yourStory,
    loggedInDamTomoUserLocalNumber,
    contentType,
    bgv,
    damTomoVocal,
    reserved1,
  }: ReservedSongParams) {
    this.time = time;
    this.trayNumber = trayNumber;
    this.trackNumber = trackNumber;
    this.sequenceNumber = sequenceNumber;
    this.tempo = tempo;
    this.key = key;
    this.micEffect = micEffect;
    this.telopSongMask = telopSongMask;
    this.guide = guide;
    this.yourStory = yourStory;
    this.loggedInDamTomoUserLocalNumber = loggedInDamTomoUserLocalNumber;
    this.contentType = contentType;
    this.bgv = bgv;
    this.damTomoVocal = damTomoVocal;
    this.reserved1 = reserved1;
  }
}
