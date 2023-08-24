"use client";

import { useState } from "react";

export default function AddTomato() {

    const [modalVisible,setModalVisible] = useState(false);

    function closeModal(){
        setModalVisible(false)
    }

    return (
      <div>
        {!modalVisible && 
            <button onClick={()=>{setModalVisible(true)}} className="fixed bottom-8 right-8 bg-[#EB0000] rounded-full text-white px-4 py-2">+ Add Tomato</button>
        }
        {modalVisible &&
            <div onClick={closeModal} className="fixed top-0 z-[99] overflow-hidden w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div onClick={(e)=>{e.stopPropagation()}} className="bg-white z-[100] rounded-3xl w-full max-w-xl">
                    <div className="flex p-8 items-center justify-between">
                        <p>Create a ToMaTo</p>
                        <img onClick={closeModal} className="cursor-pointer" height={18} width={18} src="img/close.png" alt="" />
                    </div>
                    
                </div>
            </div>
        }
      </div>
    )
  }