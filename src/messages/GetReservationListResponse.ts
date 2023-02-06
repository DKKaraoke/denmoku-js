import { Buffer } from "buffer";

import { Message } from "./Message";
import { MessageType } from "./MessageType";
import { ReservedSong } from "./ReservedSong";

export interface GetReservationListResponseParams {
  /**
   * Result
   */
  result: number;
  /**
   * Queued song count
   */
  queuedSongCount: number;
  /**
   * Current song
   */
  currentSong?: ReservedSong;
  /**
   * Interrupted song
   */
  interruptedSong?: ReservedSong;
  /**
   * Queued songs
   */
  queuedSongs: ReservedSong[];
}

export class GetReservationListResponse extends Message {
  private static readonly fixedBufferLength = 0;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length < GetReservationListResponse.fixedBufferLength) {
      throw new Error(
        `buffer length must be greater than or equal to ${GetReservationListResponse.fixedBufferLength}.`
      );
    }

    const result = buffer.readUInt16BE(0);
    const queuedSongCount = buffer.readUInt16BE(2);
    const currentSong = ReservedSong.fromBuffer(buffer, 4);
    const interruptedSong = ReservedSong.fromBuffer(buffer, 28);
    const queuedSongs: ReservedSong[] = [];
    for (let i = 0; i < queuedSongCount; i++) {
      queuedSongs.push(
        ReservedSong.fromBuffer(buffer, 52 + ReservedSong.bufferLength * i)
      );
    }
    return new GetReservationListResponse({
      result,
      queuedSongCount,
      currentSong,
      interruptedSong,
      queuedSongs,
    });
  }

  result_!: number;
  queuedSongCount_!: number;
  currentSong_?: ReservedSong;
  interruptedSong_?: ReservedSong;
  queuedSongs_!: ReservedSong[];

  /**
   * Result
   */
  get result() {
    return this.result_;
  }
  set result(value: number) {
    this.result_ = value;
  }

  /**
   * Queued song count
   */
  get queuedSongCount() {
    return this.queuedSongCount_;
  }
  set queuedSongCount(value: number) {
    this.queuedSongCount_ = value;
  }

  /**
   * Current song
   */
  get currentSong() {
    return this.currentSong_;
  }
  set currentSong(value: ReservedSong | undefined) {
    this.currentSong_ = value;
  }

  /**
   * Interrupted song
   */
  get interruptedSong() {
    return this.interruptedSong_;
  }
  set interruptedSong(value: ReservedSong | undefined) {
    this.interruptedSong_ = value;
  }

  /**
   * Queued songs
   */
  get queuedSongs() {
    return this.queuedSongs_;
  }
  set queuedSongs(value: ReservedSong[]) {
    this.queuedSongs_ = value;
  }

  /**
   * Constructor
   */
  constructor({
    result,
    queuedSongCount,
    currentSong,
    interruptedSong,
    queuedSongs,
  }: GetReservationListResponseParams) {
    super(MessageType.GetReservationListResponse);

    this.result = result;
    this.queuedSongCount = queuedSongCount;
    this.currentSong = currentSong;
    this.interruptedSong = interruptedSong;
    this.queuedSongs = queuedSongs;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(0);
    return buffer;
  }
}
