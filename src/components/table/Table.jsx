import React from 'react'
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';


import './table.scss';

const List = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://www.ucc-bd.com/pub/media/catalog/product/cache/d132d771c6288bfabc7596bc2f4009f6/a/c/acer-nitro-5_an515-55_gallery_01_1_1.png",
            customer: "Khalid Saifullah",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2235235,
            product: "asus vivobook s15 s533fa",
            img: "https://classyprice.com.bd/images/asus-laptop-15-x509jb-10th-.jpg",
            customer: "Rashadul Islam",
            date: "1 March",
            amount: 8924,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 2342353,
            product: "Macbook Pro",
            img: "https://www.cnet.com/a/img/resize/59c87a0339012ed820ded4201c237c9a5204aa7b/hub/2021/12/06/537f8843-0daf-4de7-a7fa-36ce916c8e70/20211122-2021-16-inch-apple-macbook-pro-01.jpg?auto=webp&fit=crop&height=675&width=1200",
            customer: "Md Rafi",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2357741,
            product: "Macbook Air",
            img: "https://bgr.com/wp-content/uploads/2021/12/16-macbook-pro-8.jpg?quality=82&strip=all",
            customer: "Mahedi Hasan",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Pending",
        },
        {
            id: 2342354,
            product: "Asus Rog Strix",
            img: "https://m.media-amazon.com/images/I/71n0k0TSRwS._AC_SL1500_.jpg",
            customer: "Morsidul islam",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Approved",
        },
        {
            id: 2342354,
            product: "Asus Rog Strix",
            img: "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large.jpg",
            customer: "Nayon islam",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tabelCell' >Tracking ID</TableCell>
                        <TableCell className='tabelCell' >Product</TableCell>
                        <TableCell className='tabelCell' >Customer</TableCell>
                        <TableCell className='tabelCell' >Date</TableCell>
                        <TableCell className='tabelCell' >Amount</TableCell>
                        <TableCell className='tabelCell' >Pament Method</TableCell>
                        <TableCell className='tabelCell' >Status</TableCell>
                    </TableRow>
                </TableHead>



                <TableBody>
                    {rows.map((row) => {
                        return (
                            <TableRow Key={row.id}>
                                <TableCell className='tabelCell'>
                                    {row.id}
                                </TableCell>
                                <TableCell className='tabelCell' >
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="" className="image" />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className='tabelCell' >{row.customer}</TableCell>
                                <TableCell className='tabelCell' >{row.date}</TableCell>
                                <TableCell className='tabelCell' >{row.amount}</TableCell>
                                <TableCell className='tabelCell' >{row.method}</TableCell>
                                <TableCell className='tabelCell' >
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default List