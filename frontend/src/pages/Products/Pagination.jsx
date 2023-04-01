function Pagination({current,onChange}) {
    const prev = <button data-testid="prev-page" disabled={current===1} 
    onClick={()=>onChange(current-1)}>PREV</button>;
    const currentPage = <button data-testid="current-page">{current}</button>;
    const next = <button data-testid="next-page" onClick={()=>onChange(current+1)}>NEXT</button>;
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
  