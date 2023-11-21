import React from "react";
import dataKurir from "/data_kurir.json";
// import Header from "./Header";
import Table from "./Table";
import AddAccount from "./AddAccount";

function LayarDaftarKurir() {
    return (
        <div>
            {/* <Header/> */}
            <AddAccount/>
            <Table dataKurir={dataKurir}></Table>
        </div>
    );
}

export default LayarDaftarKurir;