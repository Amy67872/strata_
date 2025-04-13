const StrataName = () => {
    return <span>{process.env.NEXT_PUBLIC_STRATA || "Default Strata"}</span>;
  };
  
  export default StrataName;
  