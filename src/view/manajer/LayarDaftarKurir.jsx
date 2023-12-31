/* eslint-disable */
import React, { useEffect, useState } from "react";
import Table from "./Table";
import AddAccount from "./AddAccount";
import supabase from "../../config/supabaseClient";
import NavbarManajer from "../NavbarManajer";

function LayarDaftarKurir() {
    const [fetchError, setFetchError] = useState(null);
    const [dataKurir, setDataKurir] = useState(null);

    useEffect(() => {
        const fetchDataKurir = async () => {
          const { data, error } = await supabase
            .from('dataKurir')
            .select()
    
            if (error) {
              setFetchError('Could not fetch dataKurir');
              setDataKurir(null);
              console.log(error);
            }
            if (data) {
              setDataKurir(data);
              setFetchError(null);
            }

            console.log(data);
        }
    
        fetchDataKurir();
    
    }, []);

    return (
        <div className="page home">
            {fetchError && (<p>{fetchError}</p>)}
            {dataKurir && (
                <div className="dataKurir">
                    <NavbarManajer/>
                    <Table dataKurir={dataKurir}/>
                </div>
            )}
        </div>
    );
}

export default LayarDaftarKurir;