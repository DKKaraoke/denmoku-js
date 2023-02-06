import { Buffer } from "buffer";

import { removeNullBytes } from "~/string/removeNullBytes";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export interface LogoutDamTomoUserRequestParams {
  /**
   * Logged in DAM Tomo user local number
   */
  loggedInDamTomoUserLocalNumber: number;
  /**
   * Reserved 1
   */
  reserved1: number;
  /**
   * Denmoku serial number
   */
  denmokuSerialNumber: string;
}

export class LogoutDamTomoUserRequest extends Message {
  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== 13) {
      throw new Error("buffer length must be 13.");
    }

    const loggedInDamTomoUserLocalNumber = buffer.readUInt32BE(0);
    const reserved1 = buffer.readUInt8(4);
    const denmokuSerialNumber = removeNullBytes(buffer.toString("utf8", 5, 13));
    return new LogoutDamTomoUserRequest({
      loggedInDamTomoUserLocalNumber,
      reserved1,
      denmokuSerialNumber,
    });
  }

  private loggedInDamTomoUserLocalNumber_!: number;
  private reserved1_!: number;
  private denmokuSerialNumber_!: string;

  /**
   * Logged in DAM Tomo user local number
   */
  get loggedInDamTomoUserLocalNumber() {
    return this.loggedInDamTomoUserLocalNumber_;
  }
  set loggedInDamTomoUserLocalNumber(value: number) {
    if (value < 0x01 || 0xff < value) {
      throw new Error(
        "LogoutDamTomoUserRequest#loggedInDamTomoUserLocalNumber must be between 0x01 and 0xff."
      );
    }

    this.loggedInDamTomoUserLocalNumber_ = value;
  }

  get reserved1() {
    return this.reserved1_;
  }
  set reserved1(value: number) {
    if (value < 0x00 || 0xff < value) {
      throw new Error(
        "LogoutDamTomoUserRequest#reserved1 must be between 0x00 and 0xff."
      );
    }

    this.reserved1_ = value;
  }

  /**
   * Denmoku serial number
   */
  get denmokuSerialNumber() {
    return this.denmokuSerialNumber_;
  }
  set denmokuSerialNumber(value: string) {
    if (value.length !== 8) {
      throw new Error(
        "LogoutDamTomoUserRequest#denmokuSerialNumber length must be 8."
      );
    }

    this.denmokuSerialNumber_ = value;
  }

  /**
   * Constructor
   * @param loggedInDamTomoUserLocalNumber Logged in DAM Tomo user local number
   * @param reserved1 Reserved 1
   * @param denmokuSerialNumber Denmoku serial number
   */
  constructor({
    loggedInDamTomoUserLocalNumber,
    reserved1 = 0x00,
    denmokuSerialNumber,
  }: LogoutDamTomoUserRequestParams) {
    super(MessageType.LogoutDamTomoUserRequest);

    this.loggedInDamTomoUserLocalNumber = loggedInDamTomoUserLocalNumber;
    this.reserved1 = reserved1;
    this.denmokuSerialNumber = denmokuSerialNumber;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(13);
    buffer.writeUInt32BE(this.loggedInDamTomoUserLocalNumber, 0);
    buffer.writeUInt8(this.reserved1, 4);
    buffer.write(this.denmokuSerialNumber, 5);
    return buffer;
  }
}
