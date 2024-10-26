import React, { useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useApp } from '../Context/AppContext';
import { PreviousJob, School } from '../Context/AppContextTypes';

const PDFGenerator: React.FC = () => {
  const pdfContentRef = useRef<HTMLDivElement | null>(null);
    const {name,pickedStyle,jobTitle,setPickedStyle,email,country,phoneNumber,city,introduce,previousJobs,schools}=useApp()
    
  const generatePDF = async () => {
    if (!pdfContentRef.current) return; 

    // Készítsünk egy nagyobb felbontású képet a content-ről
    const canvas = await html2canvas(pdfContentRef.current, {
      scale: 2, // Felbontás növelése
      useCORS: true, // CORS engedélyezése, ha szükséges
      logging: true,
      scrollX: -window.scrollX, // Görgetés kezelés
      scrollY: -window.scrollY
    });
    const imgData = canvas.toDataURL('image/png', 1.0); // Magasabb minőségű PNG

    const doc = new jsPDF({
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    });
    
    const imgWidth = 190; // A kép szélessége mm-ben
    const pageHeight = doc.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Magasság skálázása
    let heightLeft = imgHeight;
    let position = 0;

    // Több oldalas PDF generálása
    while (heightLeft > 0) {
      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight, undefined, 'FAST'); // 'FAST' minőség
      heightLeft -= pageHeight;
      position -= pageHeight;

      if (heightLeft > 0) doc.addPage(); // Új oldal hozzáadása, ha még van tartalom
    }

    doc.save('generated.pdf');
  };

  useEffect(() => {
    const savedStyle = localStorage.getItem('pickedStyle');
    if (savedStyle) {
      setPickedStyle(JSON.parse(savedStyle));
    }
  }, []);
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-5 w-full h-full">
    <button onClick={generatePDF} className="mt-4 p-2 bg-blue-500 text-white rounded">Generate PDF</button>
      <div ref={pdfContentRef}>  
        <div style={pickedStyle?.styles.page}>
            
            <div style={pickedStyle?.styles.profileContainer}>
                <div className='w-[180px] h-full border'>
                </div>
                <div className='flex flex-col gap-10 py-1'>
                    <div>
                        <p style={pickedStyle?.styles.nameTag}>{name ? name : "Sample Name"}</p>
                        <p style={pickedStyle?.styles.jobTitle}>{jobTitle}</p>
                    </div>

                    <div style={pickedStyle?.styles.PersonalInfo} className='text-[#666666]'>
                        <p >
                          <span>{city},</span>
                          <span>{country}</span>
                        </p>
                        <p>
                          <span>{email}</span>
                          <span className='ml-1'>{phoneNumber}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex  mt-14'>
              <div className='w-[40%]'></div>
              <div className='w-[60%] flex flex-col gap-5'>
                  <div>
                      <p className='font-semibold text-[20px] font-default-app-font'>Profil</p>
                      <p className='text-[12px] font-title-font text-[#666666] leading-[18px]'>{introduce}</p>
                  </div>

                  <div>
                      <p className='font-semibold text-[20px] font-default-app-font'>Szakmai Tapasztalat</p>
                      <div className='mt-2'>
                       {previousJobs?.map((item : PreviousJob)=>
                        <div className='text-[13px] text-[#666666] font-title-font flex flex-col gap-2'>
                          <p className='font-semibold text-black '>{item.jobTitle}</p>
                          <p className='flex gap-2'>
                            <span>{item.beginDate.toLocaleDateString()}</span>
                            -
                            <span>{item.endDate.toLocaleDateString()}</span>
                          </p>
                          <p className='text-[12px]'>
                            {item.description}
                          </p>
                        </div>
                      )}
                      </div>
                  </div>
                    
                  <div>
                      <p className='font-semibold text-[20px] font-default-app-font'>Végzettség</p>
                      <div className='mt-2'>
                        {schools?.map((item : School)=>
                          <div className='text-[13px] text-[#666666] font-title-font flex flex-col gap-2'>
                            <p className='font-semibold text-black '>
                              {item.degree},{item.schoolName}
                            </p>
                            <p className='flex gap-2'>
                            <span>{item.beginDate.toLocaleDateString()}</span>
                            -
                            <span>{item.endDate.toLocaleDateString()}</span>
                          </p>
                          </div>
                        )}
                      </div>
                  </div>
                  
              </div>
            </div>
        </div>
      </div>
     
    </div>
  );
};

export default PDFGenerator;
