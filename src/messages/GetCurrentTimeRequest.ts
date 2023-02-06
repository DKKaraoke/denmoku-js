import { Buffer } from "buffer";

import { removeNullBytes } from "~/string/removeNullBytes";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export interface GetCurrentTimeRequestParams {
  /**
   * Denmoku serial number
   */
  denmokuSerialNumber: string;
}

export class GetCurrentTimeRequest extends Message {
  private static readonly bufferLength = 8;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== GetCurrentTimeRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${GetCurrentTimeRequest.bufferLength}.`
      );
    }

    const denmokuSerialNumber = removeNullBytes(buffer.toString("utf8", 0, 8));
    return new GetCurrentTimeRequest({ denmokuSerialNumber });
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
        "GetCurrentTimeRequest#denmokuSerialNumber length must be 8."
      );
    }

    this.denmokuSerialNumber_ = value;
  }

  /**
   * Constructor
   * @param denmokuSerialNumber Denmoku serial number
   */
  constructor({ denmokuSerialNumber }: GetCurrentTimeRequestParams) {
    super(MessageType.GetCurrentTimeRequest);

    this.denmokuSerialNumber = denmokuSerialNumber;
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(GetCurrentTimeRequest.bufferLength);
    buffer.write(this.denmokuSerialNumber);
    return buffer;
  }
}
