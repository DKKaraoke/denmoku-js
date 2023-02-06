import { Buffer } from "buffer";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class PowerControlRequest extends Message {
  private static readonly bufferLength = 0;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== PowerControlRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${PowerControlRequest.bufferLength}.`
      );
    }

    return new PowerControlRequest();
  }

  /**
   * Constructor
   */
  constructor() {
    super(MessageType.PowerControlRequest);
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(PowerControlRequest.bufferLength);
    return buffer;
  }
}
