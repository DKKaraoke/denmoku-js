import { Buffer } from "buffer";

import { removeNullBytes } from "~/string/removeNullBytes";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export interface GetTerminalTypeRequestParams {
  /**
   * Denmoku serial number
   */
  denmokuSerialNumber: string;
}

export class GetTerminalTypeRequest extends Message {
  private static readonly bufferLength = 8;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== GetTerminalTypeRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${GetTerminalTypeRequest.bufferLength}.`
      );
    }

    const denmokuSerialNumber = removeNullBytes(buffer.toString("utf8", 0, 8));
    return new GetTerminalTypeRequest({ denmokuSerialNumber });
  }

  private denmokuSerialNumber_!: string;

  /**
   * Denmoku serial number
   */
  get denmokuSerialNumber() {
    return this.denmokuSerialNumber_;
  }
  set denmokuSerialNumber(value: string) {
    if (value.length !== 8) {
      throw new Error(
        "GetTerminalTypeRequest#denmokuSerialNumber length must be 8."
      );
    }

    this.denmokuSerialNumber_ = value;
  }

  /**
   * Constructor
   * @param denmokuSerialNumber Denmoku serial number
   */
  constructor({ denmokuSerialNumber }: GetTerminalTypeRequestParams) {
    super(MessageType.GetTerminalTypeRequest);

    this.denmokuSerialNumber = denmokuSerialNumber;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(GetTerminalTypeRequest.bufferLength);
    buffer.write(this.denmokuSerialNumber);
    return buffer;
  }
}
