
import FormToCreateCV from '../Components/FormToCreateCV';
import CVPreview from '../Components/CVPreview';


export default function PDFPreviewPage (){
 
  return(
  <div className='w-screen h-screen flex'>
    <div className='w-2/4 overflow-y-auto'>
        <FormToCreateCV></FormToCreateCV>
    </div>
    <div className='h-screen w-2/4 bg-white'>
      <CVPreview></CVPreview>
    </div>
  </div>
  )
}