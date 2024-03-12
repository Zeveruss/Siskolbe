const Homes = () => {
    return (
        <div className="flex flex-row">
      <aside className="flex flex-col h-[620px] mt-2 px-4 py-8 overflow-y-auto rounded-3xl bg-sky-700">
        <a href="#" className="mx-auto">
        </a>
        <div className="flex flex-col items-center mt-6 mx-2">
          <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">Student</p>
        </div>
        <div className="flex flex-row justify-center flex-1 mt-6">
          <nav>
            <a className="flex flex-col items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-100 dark:bg-opacity-50 dark:text-gray-200" href="#">
            <svg className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"></path></svg>
              <span className="font-medium font-inter">Home</span>
            </a>

            <a className="flex flex-col items-center px-4 py-2 mt-5 text-gray-100 duration-300 transform rounded-lg dark:text-gray-100 hover:bg-gray-300 hover:bg-opacity-50 dark:hover:text-gray-100 hover:text-gray-100" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mx-4 font-medium font-inter">Profile</span>
            </a>

            <a className="flex flex-col items-center px-4 py-2 mt-5 text-gray-100 duration-300 transform rounded-lg dark:text-gray-100 hover:bg-gray-300 hover:bg-opacity-50 dark:hover:text-gray-100 hover:text-gray-100" href="#">
            <svg className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 993q60 41 107 93t81 114t50 131t18 141q0 119-45 224t-124 183t-183 123t-224 46q-91 0-176-27t-156-78t-126-122t-85-157H128V128h256V0h128v128h896V0h128v128h256zM256 256v256h1408V256h-128v128h-128V256H512v128H384V256zm643 1280q-3-31-3-64q0-119 45-224t124-183t183-123t224-46q100 0 192 33V640H256v896zm573 384q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36m64-512h192v128h-320v-384h128z"></path></svg>
    <span className="mx-4 font-medium text-center font-inter">Izin</span>
</a>
          </nav>
        </div>
      </aside>
      <div className="flex flex-col w-screen rounded-3xl bg-[#D9D9D9] mx-6 mt-2">
        <div className="flex flex-row bg-white mt-12 w-[850px] mx-[120px] h-48 rounded-3xl">
          <div className="flex flex-col">
          <span className="font-semibold font-inter text-lg mt-8 mx-6">Wellcome Username</span>
          <span className="font-semibold font-inter text-[20px] mt-6 mx-6 w-[500px]">semangatmu adalah kunci untuk meraih impianmu!
dengan absensi ini adalah bukti kedisiplinanmu</span>
          </div>
          <img className ="w-64" src="https://i.pinimg.com/564x/f2/3d/95/f23d95272024a786778cf50db8fcc64b.jpg" alt="" />
        </div>
        <div className="flex flex-row bg-sky-700 mt-4 w-[850px] mx-[120px] h-16 rounded-3xl items-center px-4 py-2 mt-5">
        <svg className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="white" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></path></svg>
        <span className="font-semibold font-inter text-lg text-white mx-2">SMKN 1 Depok, Gang Bhakti Suci No.100, Cimpaeun, Tapos, Kota Depok, Jawa Barat, 16459</span>
        </div>
        <span className="text-xl mt-8 font-medium font-inter text-black mx-32">Absensi Senin 11 Maret 2024</span>
        <div className="flex flex-row bg-white mt-2 w-[850px] mx-[120px] h-20 rounded-3xl"> 
          <div className="flex flex-col items-center justify-center bg-[#05FF00] bg-opacity-60 mx-6 px-6 rounded-2xl py-1 h-14 mt-3">
            <span className="font-inter font-semibold text-[16px] text-slate-950">1</span>
            <span className="font-inter font-semibold text-[16px] text-slate-950">Senin</span>
          </div>
          <button className="flex flex-col items-center justify-center mt-3 bg-slate-400 bg-opacity-50 rounded-xl px-6 h-14 py-1 border-solid border-lime-500 border-2 ml-[420px] hover:underline" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1600 896q40 0 75 15t61 41t41 61t15 75v384q0 119-45 224t-124 183t-183 123t-224 46q-144 0-268-55t-226-156l-472-472q-28-28-43-65t-15-76q0-42 16-78t43-64t63-42t78-16q82 0 141 59l107 106V853q-59-28-106-70t-80-95t-52-114t-18-126q0-93 35-174t96-143t142-96T832 0q93 0 174 35t143 96t96 142t35 175q0 93-37 178t-105 149q35 9 63 30t49 52q45-25 94-25q50 0 93 23t69 66q45-25 94-25M512 448q0 75 34 143t94 113V448q0-40 15-75t41-61t61-41t75-15q40 0 75 15t61 41t41 61t15 75v256q60-45 94-113t34-143q0-66-25-124t-69-101t-102-69t-124-26q-66 0-124 25t-102 69t-69 102t-25 124m1152 640q0-26-19-45t-45-19q-34 0-47 19t-16 47t-1 62t0 61t-16 48t-48 19q-37 0-50-23t-16-60t2-77t2-77t-15-59t-51-24q-34 0-47 19t-16 47t-1 62t0 61t-16 48t-48 19q-37 0-50-23t-16-60t2-77t2-77t-15-59t-51-24q-34 0-47 19t-16 47t-1 62t0 61t-16 48t-48 19q-26 0-45-19t-19-45V448q0-26-19-45t-45-19q-26 0-45 19t-19 45v787q0 23-8 42t-23 35t-35 23t-42 9q-22 0-42-8t-37-24l-139-139q-21-21-50-21t-50 21t-22 51q0 29 21 50l472 473q84 84 184 128t219 45q93 0 174-35t142-96t96-142t36-175z"></path></svg>
            <span className="font-inter font-medium text-lg text-[#269400]">masuk</span>
          </button>
          <span className="text-5xl font-thin mt-2 mx-4">|</span>
          <div className="flex flex-col items-center justify-center ">
            <span className="font-inter font-bold text-lg text-[#FF0000]">Keluar</span>
            <span className="font-inter font-bold text-lg text-[#FF0000]">-- --</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Homes