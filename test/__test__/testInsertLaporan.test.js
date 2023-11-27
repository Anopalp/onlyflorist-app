/* eslint-disable no-unused-vars */
import insertLaporan from "../component/testInsertLaporan";

test("Test Fitur Insert Pengiriman", async () => {
    const result = await insertLaporan("Bunga Galak!", 1000);
    
    expect(result).toBe("Berhasil Insert Laporan");
})



