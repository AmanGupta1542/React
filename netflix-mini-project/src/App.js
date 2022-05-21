import './App.css';
import Card from './components/Card';
import Sdata from './data/Sdata';

// if else practce
const fevSeries = 4;

const FavS = () => {
  
  if(fevSeries == 0){
    return (
      <Card
        key = {Sdata[0].id}
        imgSrc= {Sdata[0].imgSrc}
        title= {Sdata[0].title}
        seriesName= {Sdata[0].seriesName}
        seriesLink= {Sdata[0].seriesLink}
      />
    );
  }else if(fevSeries == 1){
    return (
      <Card
        key = {Sdata[1].id}
        imgSrc= {Sdata[1].imgSrc}
        title= {Sdata[1].title}
        seriesName= {Sdata[1].seriesName}
        seriesLink= {Sdata[1].seriesLink}
      />
    );
  }
  else{
    // nothing match then fetch all

    // this solution is not working in else block
    // Sdata.map((value) => {
    //   return(
    //     // "Warning: Each child in a list should have a unique "key" prop.". error ke hatane ke liye key={value.id} attribute pass karna padega
    //     <Card
    //         key = {value.id}
    //         imgSrc= {value.imgSrc}
    //         title= {value.title}
    //         seriesName= {value.seriesName}
    //         seriesLink= {value.seriesLink}
    //       />
    //   );
    // }); 

    // but this solution is working
    // return Sdata.map(netflixCard);

    return (
      <Card
        key = {Sdata[2].id}
        imgSrc= {Sdata[2].imgSrc}
        title= {Sdata[2].title}
        seriesName= {Sdata[2].seriesName}
        seriesLink= {Sdata[2].seriesLink}
      />
    );
  
  }
}








// map method hame 3 parametes deti hai CurrentValue, IndexNumber, Array jisko use kar rahe hai.
// function netflixCard(value, index, arr){
//   // console.log(value);
//   // console.log(index);
//   // console.log(arr);
//   return(
//     <Card
//         key = {value.id}
//         imgSrc= {value.imgSrc}
//         title= {value.title}
//         seriesName= {value.seriesName}
//         seriesLink= {value.seriesLink}
//       />
//   );
// }

function App() {
  return (
    // sending data dynamically to the Card component using custom attributes called props.
    <>
      <h1 className='heading_style'>List of Top 5 Netflix Series</h1>
      {/* <Card
        imgSrc= {Sdata[0].imgSrc}
        title= {Sdata[0].title}
        seriesName= {Sdata[0].seriesName}
        seriesLink= {Sdata[0].seriesLink}
      /> */}
      {/* Going to use map method to ittrate Sdata objects */}

      {/* {Sdata.map(netflixCard)}; */}
      {/* or using anonimous function */}

      {/* {Sdata.map((value) => {
        return(
          // "Warning: Each child in a list should have a unique "key" prop.". error ke hatane ke liye key={value.id} attribute pass karna padega
          <Card
              key = {value.id}
              imgSrc= {value.imgSrc}
              title= {value.title}
              seriesName= {value.seriesName}
              seriesLink= {value.seriesLink}
            />
        );
      })};       */}

      {/* Conditional series rendring */}

      <FavS />
      
    </>
  );
}

export default App;
