import { Buffer } from "buffer";

import { GetReservationListResponse } from "~/messages/GetReservationListResponse";
import { ReserveSongOptionType } from "~/messages/ReserveSongOption";
import { ReserveSongWithOptionsRequest } from "~/messages/ReserveSongWithOptionsRequest";

// const request = new ReserveSongWithOptionsRequest({
//   denmokuSerialNumber: "SPDENMOK",
//   entryType: 0,

// });

// const requestBuffer = Buffer.from(
//   "414b32323734343300000000000000008812831d0000011e00000000000000000000000000000000000000000000000800010001000505050005050400050503000600020007000e00080001000b0002",
//   // "414b32323734343300000000000000358811b91900000094000000003035333432303232313132303030333439000000",
//   "hex"
// );
// const request = ReserveSongWithOptionsRequest.fromPayloadBuffer(requestBuffer);
// console.log(request);
// if (request.options) {
//   for (const option of request.options) {
//     console.log(ReserveSongOptionType[option.type], option.value);
//   }
// }

const responseBuffer = Buffer.from(
  "000000046380862a11b91900000000000000000000000000000000000000000000000000000000000000000000000000000000006380862f1169380000000000000000000000000000000000638086370eb53100000000000000000000000000000000006380863f1db2340000000000000000000000000000000000638086460c4a070000000000000000000000000000000000",
  "hex"
);
const response = GetReservationListResponse.fromPayloadBuffer(responseBuffer);
console.log(response);
