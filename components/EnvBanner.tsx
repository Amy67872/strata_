const EnvBanner = () => {
    const name = process.env.NEXT_PUBLIC_STRATA ?? "Default Strata";
    return <h2>Welcome to the {name}</h2>;
  };
  
  export default EnvBanner;  