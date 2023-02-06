import { Buffer } from "buffer";

import { removeNullBytes } from "~/string/removeNullBytes";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export interface LoginDamTomoUserRequestParams {
  /**
   * Edy ID
   */
  edyId?: string;
  /**
   * NFC UID / CDM Card number
   */
  nfcUid?: string;
  /**
   * Password
   */
  password?: string;
  /**
   * Denmoku serial number
   */
  denmokuSerialNumber: string;
}

export class LoginDamTomoUserRequest extends Message {
  private static readonly bufferLength = 56;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== LoginDamTomoUserRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${LoginDamTomoUserRequest.bufferLength}.`
      );
    }

    const edyId = removeNullBytes(buffer.toString("utf8", 0, 16));
    const nfcUid = removeNullBytes(buffer.toString("utf8", 16, 32));
    const password = removeNullBytes(buffer.toString("utf8", 32, 48));
    const denmokuSerialNumber = removeNullBytes(
      buffer.toString("utf8", 48, 56)
    );
    return new LoginDamTomoUserRequest({
      edyId,
      nfcUid,
      password,
      denmokuSerialNumber,
    });
  }

  private edyId_?: string;
  private nfcUid_?: string;
  private password_?: string;
  private denmokuSerialNumber_!: string;

  /**
   * Edy ID
   */
  get edyId() {
    return this.edyId_;
  }
  set edyId(value: string | undefined) {
    if (value && 16 < value.length) {
      throw new Error(
        "LoginDamTomoUserRequest#edyId length must be less than 16."
      );
    }

    this.edyId_ = value;
  }

  /**
   * NFC UID / CDM Card number
   */
  get nfcUid() {
    return this.nfcUid_;
  }
  set nfcUid(value: string | undefined) {
    if (value && 16 < value.length) {
      throw new Error(
        "LoginDamTomoUserRequest#nfcUid length must be less than 16."
      );
    }

    this.nfcUid_ = value;
  }

  /**
   * Password
   */
  get password() {
    return this.password_;
  }
  set password(value: string | undefined) {
    if (value && 16 < value.length) {
      throw new Error(
        "LoginDamTomoUserRequest#password length must be less than 16."
      );
    }

    this.password_ = value;
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
        "LoginDamTomoUserRequest#denmokuSerialNumber length must be 8."
      );
    }

    this.denmokuSerialNumber_ = value;
  }

  /**
   * Constructor
   * @param edyId Edy ID
   * @param nfcUid NFC UID
   * @param password Password
   * @param denmokuSerialNumber Denmoku serial number
   */
  constructor({
    edyId,
    nfcUid,
    password,
    denmokuSerialNumber,
  }: LoginDamTomoUserRequestParams) {
    super(MessageType.LoginDamTomoUserRequest);

    this.edyId = edyId;
    this.nfcUid = nfcUid;
    this.password = password;
    this.denmokuSerialNumber = denmokuSerialNumber;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(LoginDamTomoUserRequest.bufferLength);
    this.edyId && buffer.write(this.edyId, 0);
    this.nfcUid && buffer.write(this.nfcUid, 16);
    this.password && buffer.write(this.password, 32);
    buffer.write(this.denmokuSerialNumber, 48);
    return buffer;
  }
}
