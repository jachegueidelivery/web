import React from 'react';

function LazyLoad(){
  return (<div className="lazy-loading"><style jsx>{`
     .lazy-loading{
  width:100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.08);
  animation: animacao 1.5s ease-in-out infinite;
  border:10px solid rgba(0, 0, 0, 0.08);
}
    @-webkit-keyframes animacao {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}`}</style></div>);
}

export default LazyLoad;