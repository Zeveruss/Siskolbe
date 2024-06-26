import React, { useState, useRef } from 'react';
import "../Styling.css"
import CustomWidth from '../../CustomWidth';
import { FaBackspace } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";
import { GiTrumpetFlag } from "react-icons/gi";
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormJurusan = () => {
    const [formData, setFormData] = useState({

        previewImage: null,
        bukti: null,
        imageName: ''
    });
    const Wmobile = CustomWidth() <= 767;
    const DekstopLow = CustomWidth() <= 1366;
    const [showIcon, setShowIcon] = useState(true);
    const [showImageUP, setImageUp] = useState(true);
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const navTo = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleFileChange = (e) => {
        setShowIcon(false);
        setImageUp(false);
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImage(event.target.result);
                    setFormData((prevData) => ({
                        ...prevData,
                        bukti: file,
                        previewImage: event.target.result,
                        imageName: file.name
                    }));
                };
                reader.readAsDataURL(file);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    bukti: file,
                    previewImage: null,
                    imageName: file.name
                }));
                alert('Please choose an image file.');
            }
        } else {
            alert('No file selected.');
        }
    };
    

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setImageUp(false);
        setShowIcon(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImage(event.target.result);
                    setFormData((prevData) => ({
                        ...prevData,
                        bukti: file,
                        previewImage: event.target.result,
                        imageName: file.name
                    }));
                };
                reader.readAsDataURL(file);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    bukti: file,
                    previewImage: null,
                    imageName: file.name
                }));
            }
        } else {
            alert('No file dropped.');
        }
    };
    

    const handleDelete = () => {
        setImage(null);
        setImageUp(true);
        setShowIcon(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data ini Akan ditambahkan!",
            icon: 'warning',
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Tambah Data!',
            cancelButtonText: 'Batal'
        }).then(async (result) => {
            if(result.isConfirmed){
                const formData2 = new FormData();
                formData2.append('bukti', formData.bukti);
                const data =  {
                    namaJurusan: formData.namaJurusan,
                    urutanJurusan: formData.urutanJurusan
                }
                const encoded = JSON.stringify(data);

                try{
                    const resp = await api.post('/tambahjurusan', formData2, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'data': encoded
                        }
                    });
                    if(resp.status === 200){
                        Swal.fire(
                            'Berhasilt!',
                            'Data Jurusan Berhasilt ditambahkan.',
                            'success'
                        ).then((result) => {
                            navTo('/Siskoolbe/Admin/Admin_Jurusan', {replace: true});
                        })
                    }else{
                        Swal.fire(
                            'Gagal!',
                            'Data Jurusan Gagal ditambahkan.',
                            'error'
                        )
                    }
                }catch(err){
                   Swal.fire(
                       'Gagal!',
                       'Data Jurusan Gagal ditambahkan.',
                       'error'
                   )
                }
            }
        })
    };
    
    return (
        <>
            {!Wmobile ? (
                <div className=''>
                    <form onSubmit={handleSubmit} className="font-inter">
                        <div className={`overflow-y-auto mt-[12px] px-8 slim-scroll ${DekstopLow ? 'h-[550px]' : 'h-[850px]'}`}>
                            <div className="flex flex-col w-full">
                                <div className='flex w-full'>
                                    <div className='flex w-full mt-4'>
                                        <div className='w-full space-y-2'>
                                            <label>Foto Jurusan</label>
                                            {showImageUP && (
                                                <div
                                                    onClick={() => fileInputRef.current.click()} 
                                                    onDrop={handleDrop}
                                                    onDragOver={handleDragOver}
                                                    className="border-[1px] w-full justify-center flex border-black rounded-md bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    required
                                                >
                                                    <input
                                                        type="file"
                                                        name="gambar"
                                                        id="gambar"
                                                        accept="image/*"
                                                        ref={fileInputRef}
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                    {showIcon && (
                                                        <div className="image-icon flex flex-col items-center pt-[50px] pb-[50px]">
                                                            <BiImageAlt className="w-[50px] h-[50px] text-[#00000099]" />
                                                            <div>
                                                                <h1 className="text-[20px] text-[#00000099] font-bold">Drag And Drop Here</h1>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}


                                            {image && (
                                                <div className='border-[1px] w-full justify-center flex flex-col items-center border-black rounded-md bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ' >
                                                    <IoMdClose onClick={handleDelete} className="text-[red] text-[30px] mr-auto ml-2" />
                                                    <div>
                                                        <img src={image} alt="Uploaded" className="w-[500px] z-0  " />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                <div className="flex space-x-2 mt-4">
                                    <div className="w-full space-y-2">
                                        <label htmlFor="kelas">Nama Jurusan</label>
                                        <input type="text" id="namaJurusan"
                                            name="namaJurusan"
                                            className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-full px-4 py-2 placeholder:text-[14px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={formData.namaJurusan}
                                            onChange={handleInputChange} 
                                            placeholder='Masukan Nama Jurusan'/>
                                    </div>
                                    <div className='w-full space-y-2'>
                                        <label htmlFor="noHp">Urutan Jurusan</label>
                                        <input type="text" id="urutanJurusan"
                                            name="urutanJurusan"
                                            className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-full px-4 py-2 placeholder:text-[14px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={formData.urutanJurusan}
                                            onChange={handleInputChange} 
                                            placeholder='Masukan Urutan Jurusan'
                                            />
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded'>Tambah Jurusan</button>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>




            ) : (
                <>
                    <div className="flex w-full justify-center">
                        <form onSubmit={handleSubmit} className="font-inter">
                        <div className={`overflow-y-auto mt-[12px] px-4 slim-scroll`}>
                            <div className="flex flex-col w-full">
                                <div className='flex w-full'>
                                    <div className='flex w-full mt-4'>
                                        <div className='w-full space-y-2'>
                                            <label>Foto Jurusan</label>
                                            {showImageUP && (
                                                <div
                                                    onClick={() => fileInputRef.current.click()} 
                                                    onDrop={handleDrop}
                                                    onDragOver={handleDragOver}
                                                    className="border-[1px] w-full justify-center flex border-black rounded-md bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    required
                                                >
                                                    <input
                                                        type="file"
                                                        name="gambar"
                                                        id="gambar"
                                                        accept="image/*"
                                                        ref={fileInputRef}
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                    {showIcon && (
                                                        <div className="image-icon flex flex-col items-center pt-[50px] pb-[50px]">
                                                            <BiImageAlt className="w-[50px] h-[50px] text-[#00000099]" />
                                                            <div>
                                                                <h1 className="text-[20px] text-[#00000099] font-bold">Drag And Drop Here</h1>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}


                                            {image && (
                                                <div className='border-[1px] w-full justify-center flex flex-col items-center border-black rounded-md bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ' >
                                                    <IoMdClose onClick={handleDelete} className="text-[red] text-[30px] mr-auto ml-2" />
                                                    <div>
                                                        <img src={image} alt="Uploaded" className="w-[500px] z-0  " />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2 mt-4">
                                    <div className="w-full space-y-2">
                                        <label htmlFor="kelas">Nama Jurusan</label>
                                        <input type="text" id="namaJurusan"
                                            name="namaJurusan"
                                            className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-full px-4 py-2 placeholder:text-[14px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={formData.namaJurusan}
                                            onChange={handleInputChange} 
                                            placeholder='Masukan Nama Jurusan'/>
                                    </div>
                                    <div className='w-full space-y-2'>
                                        <label htmlFor="noHp">Urutan Jurusan</label>
                                        <input type="text" id="urutanJurusan"
                                            name="urutanJurusan"
                                            className="block flex-1 bg-white border-[1px]  border-black rounded-md bg-transparent w-full px-4 py-2 placeholder:text-[14px]  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={formData.urutanJurusan}
                                            onChange={handleInputChange} 
                                            placeholder='Masukan Urutan Jurusan'
                                            />
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded mb-4'>Tambah Jurusan</button>
                                </div>

                            </div>

                        </div>
                        </form>
                    </div>
                </>
            )}
        </>
    );
};
export default FormJurusan;
