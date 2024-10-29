import React, { useRef, useState } from 'react'
import demo from '../assets/demo.jpeg'

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const generateImage = async() => {
        if (inputRef.current.value===""){
            return 0;
        }
        const response = await fetch()
    }

    return (
        <div>
            <div className=" flex items-center justify-center flex-col bg-zinc-800 p-11">
                <div className=" text-6xl text-white font-bold p-2"> AI Image <span className=' text-pink-600'>Generator </span></div>
                <p className='text-xl text-white font-bold p-3'>Convert your text to image using AI Image Generator. This App will Generate a Image based on your input</p>
                <div className=' flex'>
                    <input className='w-[500px] rounded-full p-3' type="text" ref={inputRef} placeholder='enter prompt here' />
                    <button className='ml-3 bg-pink-600 text-white w-[80px] rounded-xl'>Generate</button>
                </div>
            </div>
            <div className=' flex items-center justify-center p-8 flex-col'>
                <p className='text-4xl mb-5'>Here is your Image</p>
                <img className='w-[600px] rounded-3xl' src={image_url==="/"?demo:image_url} alt="" />
            </div>
        </div>

    )
}

export default ImageGenerator
