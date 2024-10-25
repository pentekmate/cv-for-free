// PDFComponent.tsx
import { Document, Page, Text, StyleSheet,Font, View  } from '@react-pdf/renderer';


export interface PDFDetails {
  name: string | null;
//   endDate:string,
//   startDate:string,
//   income:number
}

Font.register({
  family: 'Open Sans',
  fonts: [
  { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
  { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
  ]
  });;
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Open Sans',
    display:"flex",
    flexDirection:'column',
    gap:20,
    alignContent:'center',
    width:'100%'
  },
  title: { 
    color:"#1E293B",
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 900,
    fontFamily: 'Open Sans',
  },
  text: {
    fontFamily: 'Open Sans',
  },
  container:{
    gap:5,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
   
  },
  h2:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    width:'100%',
    textAlign:'center',
    fontWeight:800,
    fontSize:14,
    marginTop:20
  },
  informationText:{
    fontSize:10,
  },
  contentConatiner:{
    display:'flex',
    flexDirection:'column',
    gap:10
  },
  table:{
    display:'flex',
    flexDirection:'column',
  },
  HeaderRow:{
    backgroundColor:'#36343433',
    paddingHorizontal:10,
    display:'flex',
    flexDirection:"row",
    borderBottom:'1px solid #0F172A',
    height:25,
    alignItems:'center',
    justifyContent:'center'
  },
  row:{
    paddingHorizontal:10,
    display:'flex',
    flexDirection:"row",
    borderBottom:'0.5px solid #0F172A',
    height:25,
    alignItems:'center',
    justifyContent:'center'
  },
  headerRowTitleRight:{
    fontSize:12,
    fontWeight:800,
    flex:1
  },
  headerRowTitleLeft:{
    fontSize:12,
    fontWeight:800,
    flex:2
  },
  rowTitleRight:{
    fontSize:10,
    flex:1
  },
  rowTitleLeft:{
    fontSize:10,
    flex:2
  }
});

function PDFComponent({name}:PDFDetails){
  
  return (
    <Document>
      <Page  size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFComponent;