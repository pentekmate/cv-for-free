
import FormToCreateCV from './FormToCreateCV';
import CVPreview from './CVPreview';


export default function PDFPreviewPage (){
 
  return(
  <div className='w-screen bg-red-900 h-screen flex'>
    <div className='w-2/4'>
        <FormToCreateCV></FormToCreateCV>
    </div>
    <div className='h-screen w-2/4 bg-white'>
      <CVPreview></CVPreview>
    </div>
  </div>
  )
}