import fetchDataPengiriman from "../component/testFetchPengiriman";

test("Test Fitur Fetch Pengiriman", async () => {

    const result = await fetchDataPengiriman();

    expect(result).toBe("Fetch Berhasil");
})