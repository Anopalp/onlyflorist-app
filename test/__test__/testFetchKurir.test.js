import fetchDataKurir from "../component/testFetchKurir";

test("Test Fitur Fetch Kurir", async () => {

    const result = await fetchDataKurir();

    expect(result).toBe("Fetch Berhasil");
})
