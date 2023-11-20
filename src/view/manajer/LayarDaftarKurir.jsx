import React from "react";
import dataKurir from "../data/data_kurir.json";
import Header from "./Header";
import Table from "./Table";
import AddAccount from "./AddAccount";


function LayarDaftarKurir() {
    return (
        <div>
            <Header/>
            <AddAccount/>
            <Table dataKurir={dataKurir}/>
        </div>
    );
}

export default LayarDaftarKurir;