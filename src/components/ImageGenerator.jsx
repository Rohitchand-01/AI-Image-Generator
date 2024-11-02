import React, { useRef, useState } from 'react'
import axios from 'axios';
import demo from '../assets/demo.jpeg'

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    const [key, setKey] = useState("");
    let inputRef = useRef(null);

    const ImageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
        const response = await axios.post(
            "https://api.openai.com/v1/images/generations",
            {
                prompt: `${inputRef.current.value}`,
                n: 1,
                size: "512x512"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${key}`
                }
            }
        );

        let data = response.data;
        let data_array = data.data;
        setImage_url(data_array[0].url);
    }

    return (
        <>
            <div className=" flex items-center justify-center flex-col bg-zinc-800 p-11">
                <div className=" text-6xl text-white font-bold p-2"> AI Image <span className=' text-pink-600'>Generator </span></div>
                <p className='text-xl text-white font-bold p-3'>Convert your text to image using AI Image Generator. This App will Generate a Image based on your input once you add your API key</p>
                <div className=' flex gap-2' >
                    <input className='w-[500px] rounded-full p-3' type="text" ref={inputRef} placeholder='Enter prompt here' />
                    <input className=' rounded-full p-3' type="text" placeholder='Enter your API Key' value={key} onChange={
                        (e) => {
                            setKey(e.target.value);
                        }
                    } />
                    <button className='ml-3 bg-pink-600 text-white w-[80px] rounded-xl' onClick={() => { ImageGenerator() }}>Generate</button>
                </div>
            </div>

            <div className=' flex items-center justify-center p-8 flex-col'>
                <p className='text-5xl font-bold text-gray-800 mb-5'>Here is your Image</p>
                <img className='w-[600px] rounded-3xl' src={image_url === "/" ? demo : image_url} alt="" />
            </div>
        </>

    )
}

export default ImageGenerator
