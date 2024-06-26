import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { GiTrumpetFlag } from "react-icons/gi";
import Swal from 'sweetalert2';
import CustomWidth from "../../CustomWidth";
import { useNavigate } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import _debounce from "lodash/debounce";
import api from "../../api";
import { MdKeyboardArrowLeft } from "react-icons/md";

const AdminJurusan = () => {
  const navTo = useNavigate();
  const [jurusan, setJurusan] = useState([]);
  const DekstopLow = CustomWidth() <= 1366;

  const handleKeyword = async (e) => {
    try{

      await api.get(`/getJurusan_Admin/Search?keyword=${e.target.value}`).then((res) => {
        setJurusan(res.data);
      });
    }catch(err){
      setJurusan([]);
    }
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Yakin ingin menghapus Jurusan?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try{
          const resp = await api.post(`/deleteJurusan/${id}`);
          if(resp.status === 200){
            Swal.fire(
              'Deleted!',
              'Jurusan telah dihapus.',
              'success'
            ).then(() => {
              window.location.reload();
            });
          }else{
            Swal.fire(
              'Failed!',
              'Jurusan gagal dihapus.',
              'error'
            );
          }
        }catch(err){
          Swal.fire(
            'Failed!',
            'Murid gagal dihapus.',
            'error'
          );
        }
      }
    });
  };

  const getJurusan = _debounce(async () => {
    try{
      const resp = await api.get("/getJurusan_Admin");
      resp.status === 200 && setJurusan(resp.data);
    }catch(err){
      setJurusan([]);
    }
  }, 50);

  useEffect(() => {
    getJurusan();
  }, [])

  const shortJurusan = (jurusan) => {
    if(jurusan === "Pengembangan Perangkat Lunak dan Gim"){
      return "PPLG"
    }else if(jurusan === "Akutansi Keuangan Lembaga"){
      return "AKL"
    }else if(jurusan === "Teknik Otomotif"){
      return "TO"
    }else if(jurusan === "Perhotelan"){
      return "PH"
    }else if(jurusan === "Desain Komunikasi Visual"){
      return "DKV"
    }
  }
  
  const Wmobile = CustomWidth() <= 767;
  return (
    <>
      {!Wmobile ? (
      <div className="flex flex-col w-full font-inter h-full">
      <div className={`flex flex-col h-full bg-[#D9D9D9] mx-4 rounded-3xl py-8`}>
        <div className="flex space-x-2 mx-6 lg:px-6 sm:px-7 bg-blue-500 py-4 text-white"
        style={{borderRadius: '10px 10px 0 0'}}>
          <GiTrumpetFlag className="w-12 h-12 bg-white rounded-full px-2 text-blue-500" />
          <span className="font-semibold text-2xl font-inter mt-2">Jurusan</span>
        </div>
        <div className="flex justify-between mx-6 sm:px-8 lg:px-7 bg-white py-4">
          <div class="max-w-md flex">
            <div class="relative flex w-full h-12 rounded-lg focus-within:shadow-lg  bg-white overflow-hidden border-2 border-solid border-black">
              <div class="grid place-items-center h-full w-12 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                class="peer h-full w-full outline-none text-lg text-gray-700 pr-2"
                type="text"
                id="search"
                onChange={handleKeyword}
                placeholder="Mencari Data Jurusan" />
            </div>
          </div>
          <button onClick={() => navTo('/Siskoolbe/Admin/TambahJurusan')} className="flex bg-[#1E6CB1] w-40 h-10 items-center justify-center rounded-[10px]">
            <FaPlus className="" style={{ color: '#FFFF' }} />
            <span className="text-white border-0  mx-2 font-inter text-sm">Tambah Jurusan</span>
          </button>
        </div>
        <div className="flex flex-col bg-white mx-6 h-full"
          style={{borderRadius: '0 0 10px 10px'}}>
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-8 lg:px-6">
              <div className={`overflow-y-auto slim-scroll ${DekstopLow ? 'h-[355px]' : ''}`}>
                <table className="min-w-full">
                  <thead className="bg-blue-500 border border-1 border-gray-400"
                    style={{borderRadius: '10px 10px 0 0'}}>
                    <tr className="px-3 text-white">
                      <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                        No
                      </th>
                      <th scope="col" className="text-sm font-medium px-1 py-2 text-center ">
                        Jurusan
                      </th>
                      <th scope="col" className="text-sm font-medium px-0 py-3 text-center ">
                        Urutan Jurusan
                      </th>
                      <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                        Opsi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white border-1 border rounded-full">
                  {jurusan && jurusan.length > 0 ? (
                      jurusan.map((jurusan, index) => (
                    <tr className="cursor-pointer" style={{ borderRadius: '24px', border: '1px solid #D9D9D9' }}>
                      <td className="px-2 py-2 text-sm font-medium text-gray-900 text-center"
                      onClick={() => navTo(`/Siskoolbe/Admin/Admin_DetailJurusan/${jurusan.id}`)}>{index + 1}</td>
                      <td className="text-sm text-gray-900 font-light px-[-15px] py-2"
                      onClick={() => navTo(`/Siskoolbe/Admin/Admin_DetailJurusan/${jurusan.id}`)}>
                        <div className="flex space-x-1 items-center justify-center px-0 mx-auto">
                          <div style={{position: 'relative', display: 'inline-block'}}>
                            <img className="w-10 h-10 mr-4 object-cover" src={`data:image/png;base64,${jurusan.image}`} 
                            alt="" />
                          </div>
                          <span className="items-center font-inter font-medium text-sm">{jurusan.namajurusan}</span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-medium px-0 py-2 text-center"
                      onClick={() => navTo(`/Siskoolbe/Admin/Admin_DetailJurusan/${jurusan.id}`)}>
                        {jurusan.sub_jurusan}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-4 py-2 space-x-0">
                        <div className="flex justify-center">
                          <RiPencilFill className="w-7 h-7 bg-gray-400 bg-opacity-50 rounded-lg px-1" color="#1E6CB1" 
                          onClick={() => navTo(`/Siskoolbe/Admin/Edit_jurusan/${jurusan.id}`)}
                          onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/150'}/>
                          <BsFillTrash3Fill className="w-7 h-7 bg-gray-400 bg-opacity-50 rounded-lg px-1 ml-2" color="#FF0000" 
                          onClick={() => handleDelete(jurusan.id)}/>
                        </div>
                      </td>
                    </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={'6'} className="px-4 py-2 text-center">Data Kosong</td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      ) : (
        <div className="flex rounded-xl w-full h-[90%] bg-[#D9D9D9] border border-1 font-inter">
          <div className="flex flex-col w-full">
            <div className="bg-blue-500 p-4 w-full flex justify-between items-center"
            style={{borderRadius: '10px 10px 0 0'}}>
              <div className="flex space-x-2 items-center">
                <GiTrumpetFlag className='text-white text-[24px] rounded-full' />
                <span className="text-white font-semibold text-xl">Admin Jurusan</span>
              </div>
            </div>
            <div className="flex flex-col sm:px-8 lg:px-7 bg-white p-4 space-y-2 w-full">
              <div className="max-w-md flex">
                <div className="relative flex w-full h-12 rounded-lg focus-within:shadow-lg  bg-white overflow-hidden border-2 border-solid border-black">
                  <div className="grid place-items-center h-full w-12 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-lg text-gray-700 pr-2"
                    type="text"
                    id="search"
                    onChange={handleKeyword}
                    placeholder="Mencari Data Jurusan" />
                </div>
              </div>
              <button onClick={() => navTo('/Siskoolbe/Admin/TambahJurusan')} className="flex bg-[#1E6CB1] w-full h-8 items-center justify-center rounded-[8px]">
                <FaPlus className="" style={{ color: '#FFFF' }} />
                <span className="text-white border-0 mx-2 font-inter text-sm">Tambah Jurusan</span>
              </button>
            </div>
            <div className="w-full flex flex-col bg-white h-full p-1 border border-1 overflow-y-auto"
            style={{borderRadius: '0 0 10px 10px'}}>
              <div className="overflow-y-auto hide-scroll">
              <table className="min-w-full border border-1">
                <thead className="bg-blue-500"
                  style={{borderRadius: '10px 10px 0 0'}}>
                  <tr className="text-white px-3">
                    <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                      No
                    </th>
                    <th scope="col" className="text-sm font-medium px-1 py-2 text-center ">
                      Jurusan
                    </th>
                    <th scope="col" className="text-sm font-medium px-2 py-2 text-center">
                      Opsi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jurusan && jurusan.length > 0 ? (
                    jurusan.map((data, index) => (
                      <tr key={data.id} className="border border-1" style={{ borderRadius: '24px' }}>
                        <td className="px-2 py-2 text-sm font-medium text-gray-900 text-center"
                        onClick={() => navTo(`/Siskoolbe/Admin/Admin_DetailJurusan/${data.id}`)}>{index + 1}</td>
                        <td className="px-1 py-2 text-sm font-medium text-gray-900 text-center"
                        onClick={() => navTo(`/Siskoolbe/Admin/Admin_DetailJurusan/${data.id}`)}>{shortJurusan(data.namajurusan) + " " + data.sub_jurusan}</td>
                        <td className="text-sm text-gray-900 font-medium px-4 py-2 space-x-0">
                            <div className="flex justify-center">
                              <RiPencilFill className="w-7 h-7 bg-gray-400 bg-opacity-50 rounded-lg px-1" color="#1E6CB1" 
                              onClick={() => navTo(`/Siskoolbe/Admin/Edit_Jurusan/${data.id}`)} />
                              <BsFillTrash3Fill className="w-7 h-7 bg-gray-400 bg-opacity-50 rounded-lg px-1 ml-2" color="#FF0000" 
                              onClick={() => handleDelete(data.id)} />
                            </div>
                          </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center py-2 px-4">
                        Data Kosong
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AdminJurusan;
