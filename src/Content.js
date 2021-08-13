import React, { useEffect, useState } from 'react';
import axios from "axios";

function Content() {
    const [datas, setDatas] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        let fetchData = async () => {

            let main = await axios.get(`https://60f460de3cb0870017a8a216.mockapi.io/products`);

            let dom = main.data;

            setDatas([...dom]);

            setDate([dom]);
        }
        fetchData();
    }, [])
    
    console.log("Data 1",datas);

    console.log("Data 2",date);

    return (
        <div>
            <h2>hello</h2>
            {
                datas.map((el) => {
                    return <p>{el.id}</p>
                })
            }
        </div>
    )
}

export default Content;
