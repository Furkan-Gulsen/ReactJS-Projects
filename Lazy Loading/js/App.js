import React from 'react';
import data from "./data";
import LazyLoad from 'react-lazyload';

const Loading = () => (
<div className="alert alert-dark" role="alert">
  Loading .... 
</div>
)

const Post = ({id,title,body}) => (
  <div className="post" style={{width: "540px",margin:"0 auto"}}>

  <div className="card mb-3" style={{width: "540px"}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={`https://picsum.photos/id/${id}/200/200`} className="card-img" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
)



const App = () => (
  <div className="App">
    <h2 className="text-center mb-5 mt-5">LazyLoad Demo</h2>
    <div className="post-container">
      {data.map(post => (
        <LazyLoad 
          key={post.id} 
          height={100}
          offset= {[-100,100]}
          placeholder={<Loading />}>
            <Post key={post.id} {...post}/>
          </LazyLoad>
      ))}
    </div>
  </div>
)



export default App;
