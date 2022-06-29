
const styles = {
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center', 
  height:'20vh'
}

const LoadingMore = () => {

  return (
    <div className="loading-more" style={styles}>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  )
}

export default LoadingMore;