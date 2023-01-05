export const userColumns = [
    {
        field: 'id', headerName: 'ID', width: 70
    },
    {
        field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
            return (
                <div className="cellWidthImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email', headerName: 'Email', width: 230,
    },
    {
        field: 'age', headerName: 'Age', width: 100,
    },
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWidthStatus ${params.row.status}`}>{params.row.status}</div>

            )
        }
    },
]




export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '1snow@gmail.com',
        status: 'active',
        age: 36,
    },
    {
        id: 2,
        username: 'Jane Doe',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '2snow@gmail.com',
        status: 'passive',
        age: 42,
    },
    {
        id: 3,
        username: 'Jamie Lannister',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '3snow@gmail.com',
        status: 'pending',
        age: 45,
    },
    {
        id: 4,
        username: 'Snow',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '1snow@gmail.com',
        status: 'active',
        age: 36,
    },
    {
        id: 5,
        username: 'Jane Doe',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '2snow@gmail.com',
        status: 'passive',
        age: 42,
    },
    {
        id: 6,
        username: 'Jamie Lannister',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '3snow@gmail.com',
        status: 'pending',
        age: 45,
    },
    {
        id: 7,
        username: 'Snow',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '1snow@gmail.com',
        status: 'active',
        age: 36,
    },
    {
        id: 8,
        username: 'Jane Doe',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '2snow@gmail.com',
        status: 'passive',
        age: 42,
    },
    {
        id: 9,
        username: 'Jamie Lannister',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '3snow@gmail.com',
        status: 'pending',
        age: 45,
    },
    {
        id: 10,
        username: 'Jamie Lannister',
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
        email: '3snow@gmail.com',
        status: 'pending',
        age: 45,
    },
]