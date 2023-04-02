import { Button } from "@chakra-ui/react";

function Pagination({current,onChange}) {
    const prev = <Button disabled={current===1} 
    onClick={()=>onChange(current-1)}>PREV</Button>;
    const currentPage = <Button >{current}</Button>;
    const next = <Button  onClick={()=>onChange(current+1)}>NEXT</Button>;
    return (
      <div style={{display:'flex',marginTop:'20px',gap:'10px',justifyContent:'center',alignItems:'center'}}>
        {prev}
        {currentPage}
        {next}
        {/* {totalPagesElem} */}
      </div>
    );
  }
  
  export default Pagination;
  