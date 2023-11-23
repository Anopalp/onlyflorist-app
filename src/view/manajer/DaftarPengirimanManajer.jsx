import { useEffect, useState } from 'react'
import TambahPengiriman from './TambahPengiriman'
import Read from './Read'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import supabase from '../../config/supabaseClient'

const DaftarPengirimanManajer = () => {
    const [data, setData] = useState([])
    const [isTambah, setIsTambah] = useState(false)
    const [isDetail, setIsDetail] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('dataPengiriman').select()

            if (error) {
                console.log(error)
            }

            if (data) {
                setData(data)
            }
        }

        fetchData()
    }, [])

    const handleTambahPengiriman = () => {
        setIsTambah(true)
    }

    const handleDetailPengiriman = (id) => {
        setIsDetail(true)
        setSelectedId(id)
    }

    const closePopUpTambahPengiriman = () => {
        setIsTambah(false)
    }

    const closePopUpDetailPengiriman = () => {
        setIsDetail(false)
    }

    return (
        <div>
            <div className='d-flex flex-column justify-content-left align-items-center bg-light vh-100'>
                <h3 className='my-3' style={{ fontSize: 30, fontWeight: 'bold' }}>
                    Daftar Pengiriman
                </h3>
                <div className='z-0 w-75 h-75 rounded-4 bg-light border shadow px-2 table-responsive'>
                    <div className='d-flex my-2'>
                        <button
                            className='btn btn-primary ms-auto px-4'
                            onClick={handleTambahPengiriman}
                        >
                            Add +
                        </button>
                    </div>
                    {isTambah ? (
                        <TambahPengiriman
                            close={closePopUpTambahPengiriman}
                            setData={setData}
                        />
                    ) : null}
                    {isDetail ? (
                        <Read close={closePopUpDetailPengiriman} id={selectedId} />
                    ) : null}

                    <Form>
                        <InputGroup className='my-3'>
                            <FormControl
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search pengiriman'
                            />
                        </InputGroup>
                    </Form>

                    <table className='table table-hover table-striped'>
                        <thead className='bg-light sticky-top align-middle'>
                            <tr className='table-primary'>
                                <th>ID</th>
                                <th>Alamat Pengiriman</th>
                                <th>Bunga</th>
                                <th>Telp</th>
                                <th>Kurir</th>
                                <th>Status Pengiriman</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data
                                .filter((data) => {
                                    return search.toLowerCase() === ''
                                        ? data
                                        : data.status_pengiriman
                                              .toLowerCase()
                                              .includes(search.toLowerCase()) ||
                                              data.kurir
                                                  .toLowerCase()
                                                  .includes(search.toLowerCase()) ||
                                              data.jenis_bunga
                                                  .toLowerCase()
                                                  .includes(search.toLowerCase())
                                })
                                .map((data) => (
                                    <tr
                                        key={data.id}
                                        onClick={() => handleDetailPengiriman(data.id)}
                                    >
                                        <td>{data.id}</td>
                                        <td>{data.alamat_pengiriman}</td>
                                        <td>{data.jenis_bunga}</td>
                                        <td>{data.nomor_telp_pelanggan}</td>
                                        <td>{data.kurir}</td>
                                        <td>{data.status_pengiriman}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DaftarPengirimanManajer
