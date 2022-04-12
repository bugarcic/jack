import tutu from '../landing/index.js'
//var test = require('../landing/index.html')
// import '../landing/css/webflow.css'
// import '../landing/css/normalize.css'
// import '../landing/css/testing-e28d15.webflow.css'


const Home = () => {
    return (
        <div dangerouslySetInnerHTML={ {__html: tutu} } />
    )
}

export default Home