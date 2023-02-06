import { Buffer } from "buffer";

import { MessageType } from "./MessageType";

export class Message {
  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    throw new Error(
      "Message#fromPayloadBuffer must be overridden by subclass."
    );
  }

  /**
   * Constructor
   * @param type Type
   */
  constructor(public type: MessageType) {}

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  protected payloadToBuffer(): Buffer {
    throw new Error("Message#payloadToBuffer must be overridden by subclass.");
  }

  /**
   * To buffer
   * @returns Denmoku message as Buffer
   */
  toBuffer() {
    const payloadBuffer = this.payloadToBuffer();
    const buffer = Buffer.alloc(4 + payloadBuffer.length);
    buffer.writeInt16BE(this.type, 0);
    buffer.writeInt16BE(payloadBuffer.length, 2);
    payloadBuffer.copy(buffer, 4);
    return buffer;
  }
}
