import React from 'react'
import person from "../../assets/news.png"

function TahririyatJamoasi() {
  return (
    <div className="align-elements">
          <h1 className="text-2xl mb-5 font-semibold text-[#28c66f]">Tahririyat jamoasi</h1>
        <div className="row w-full flex gap-5">
              <div className="w-[50%] flex gap-5 rounded-lg p-3 bg-[#dcefe4]">
                  <div className="">
                    <img src={person} className='rounded-md'/>
                  </div>
                <div className="flex flex-col gap-4">
                    <p className="child">
                      <span className='text-xl font-medium'>Tahrir hayʼati raisi:</span>
                      <p className='text-base'>Boltabayev Mahmudjon Rustamovich</p>
                    </p>
                    <p className="child">
                      <span className='text-xl font-medium'>Lavozimi:</span>
                      <p className='text-base'>Oliy ta’limni rivojlantirish tadqiqotlari va ilgʻor texnologiyalarni tatbiq etish markazi direktori</p>
                    </p>
                </div>
              </div>
              <div className="w-[50%] flex gap-5 rounded-lg p-3 bg-[#dcefe4]">
                  <div className="">
                    <img src={person} className='rounded-md'/>
                  </div>
                <div className="flex flex-col gap-4">
                    <p className="child">
                      <span className='text-xl font-medium'>Tahrir hayʼati raisi:</span>
                      <p className='text-base'>Boltabayev Mahmudjon Rustamovich</p>
                    </p>
                    <p className="child">
                      <span className='text-xl font-medium'>Lavozimi:</span>
                      <p className='text-base'>Oliy ta’limni rivojlantirish tadqiqotlari va ilgʻor texnologiyalarni tatbiq etish markazi direktori</p>
                    </p>
                </div>
              </div>
        </div>
  </div>
  )
}

export default TahririyatJamoasi