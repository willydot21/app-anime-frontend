
const LoadingItems = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height:'90vh', gap:'20px'}}>
      <strong>Loading...</strong>
      <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
  );
}

export default LoadingItems;