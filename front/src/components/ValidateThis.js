import React, {useRef as ref} from 'react';
import Fetch from "../plugins/Fetch";

function Upload({set}) {
    const title = ref()
    const price = ref()
    const quantity = ref()

    const post = () => {
        const data = {
            title: title.current.value,
            price: price.current.value,
            quantity: quantity.current.value
        }
        Fetch.post('/upload', data).then(res => {
            set(res.products)
        })
    }

    return (
        <div>
            <input ref={title} type="text" placeholder="title"/>
            <input ref={price} type="number" placeholder="price"/>
            <input ref={quantity} type="number" placeholder="quantity"/>
            <button onClick={post}>Add Product</button>
        </div>
    );
}

export default Upload;

// function ValidateThis() {
//     const email = ref()
//     const string = ref()
//
//     const get = () => {
//         fetch ('http://localhost:3001/getget')
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }
//
//
//     const post = async () => {
//         const data = {
//             email: email.current.value,
//             string: string.current.value
//         }
//
//         const options = {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }
//         fetch('http://localhost:3001/validateThis', options)
//             .then(res => res.json())
//             .then(data => console.log(data))
//
//     }
//     return (
//         <div className='flex-col m-20'>
//             <input ref={email} className='m-20' type="text" placeholder='email'/>
//             <input ref={string} type="text" className='m-20' placeholder='string, 3 upperCase, 1 num'/>
//             <button onClick={post} className='m-20'>Validate</button>
//
//             <button onClick={get}>NIGGA GIT!</button>
//         </div>
//     );
// }

// export default ValidateThis;