import { GetReservationListResponse } from "../src/messages/GetReservationListResponse";

describe('Request', () => {
    it('ReservationList', () => {
        const responseBuffer = Buffer.from(
            "000000046380862a11b91900000000000000000000000000000000000000000000000000000000000000000000000000000000006380862f1169380000000000000000000000000000000000638086370eb53100000000000000000000000000000000006380863f1db2340000000000000000000000000000000000638086460c4a070000000000000000000000000000000000",
            "hex"
        );
        const response = GetReservationListResponse.fromPayloadBuffer(responseBuffer);
        console.log(response);
        expect(1 + 2).toBe(3)
    })
})
