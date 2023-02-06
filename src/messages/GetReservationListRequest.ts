import { Buffer } from "buffer";

import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class GetReservationListRequest extends Message {
  private static readonly bufferLength = 0;

  /**
   * From payload buffer
   * @param buffer Payload buffer
   * @returns Message instance
   */
  static fromPayloadBuffer(buffer: Buffer) {
    if (buffer.length !== GetReservationListRequest.bufferLength) {
      throw new Error(
        `buffer length must be ${GetReservationListRequest.bufferLength}.`
      );
    }

    return new GetReservationListRequest();
  }

  /**
   * Constructor
   */
  constructor() {
    super(MessageType.GetReservationListRequest);
  }

  /**
   * Payload to Buffer
   * @returns Payload as Buffer
   */
  override payloadToBuffer() {
    const buffer = Buffer.alloc(GetReservationListRequest.bufferLength);
    return buffer;
  }
}
