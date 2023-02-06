import { Buffer } from "buffer";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class DisconnectRequest extends Message {
  private static readonly bufferLength = 0;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== DisconnectRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${DisconnectRequest.bufferLength}.`
      );
    }

    return new DisconnectRequest();
  }

  /**
   * Constructor
   */
  constructor() {
    super(MessageType.DisconnectRequest);
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer() {
    const buffer = Buffer.alloc(DisconnectRequest.bufferLength);
    return buffer;
  }
}
