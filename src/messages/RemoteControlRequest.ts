import { Buffer } from "buffer";

import { Message } from "./Message";
import { MessageType } from "./MessageType";
import { RemoteControlButtonAction } from "./RemoteControlButtonAction";
import { RemoteControlButtonType } from "./RemoteControlButtonType";

export interface RemoteControlRequestParams {
  /**
   * Custom code
   */
  customCode: number;
  /**
   * Button type
   */
  buttonType: RemoteControlButtonType;
  /**
   * Button action
   */
  buttonAction: RemoteControlButtonAction;
}

export class RemoteControlRequest extends Message {
  private static readonly bufferLength = 4;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== RemoteControlRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${RemoteControlRequest.bufferLength}.`
      );
    }

    const customCode = buffer.readUInt16BE(0);
    const buttonType = buffer.readUInt8(2);
    const buttonAction = buffer.readUInt8(3);
    return new RemoteControlRequest({
      customCode,
      buttonType,
      buttonAction,
    });
  }

  private customCode_!: number;
  private buttonType_!: RemoteControlButtonType;
  private buttonAction_!: RemoteControlButtonAction;

  /**
   * Custom code
   */
  get customCode() {
    return this.customCode_;
  }
  set customCode(value: number) {
    if (value < 0x0000 || 0xffff < value) {
      throw new Error(
        "RemoteControlRequest#customCode must be between 0x0000 and 0xffff."
      );
    }

    this.customCode_ = value;
  }

  /**
   * Button type
   */
  get buttonType() {
    return this.buttonType_;
  }
  set buttonType(value: RemoteControlButtonType) {
    this.buttonType_ = value;
  }

  /**
   * Button action
   */
  get buttonAction() {
    return this.buttonAction_;
  }
  set buttonAction(value: RemoteControlButtonAction) {
    this.buttonAction_ = value;
  }

  /**
   * Constructor
   * @param customCode Custom code
   * @param buttonType Button type
   * @param buttonAction Button action
   */
  constructor({
    customCode = 0xd12d,
    buttonType,
    buttonAction = RemoteControlButtonAction.PushDown,
  }: RemoteControlRequestParams) {
    super(MessageType.RemoteControlRequest);

    this.customCode = customCode;
    this.buttonType = buttonType;
    this.buttonAction = buttonAction;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(RemoteControlRequest.bufferLength);
    buffer.writeUInt16BE(this.customCode, 0);
    buffer.writeUInt8(this.buttonType, 2);
    buffer.writeUInt8(this.buttonAction, 3);
    return buffer;
  }
}
