/* eslint-disable no-unused-vars */
import updatePengiriman from "../component/testUpdatePengiriman";

test("Test Fitur Update Pengiriman", async () => {
    
    const result = await updatePengiriman(1000, 'Delivered');

    expect(result).toBe("Update Berhasil");
})