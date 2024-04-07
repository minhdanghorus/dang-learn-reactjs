import React from "react";
import "./App.css";

const Feature = () => {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia
        dolorem accusamus, officia explicabo illo quas cum! Vero iure aspernatur
        nisi corrupti, molestias doloribus, ullam quibusdam minima ipsa fugiat
        distinctio!
      </p>
    </div>
  );
};

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || 'This is example title'}</h3>
          <h4 className="youtube-author">{props.author || 'Default author'}</h4>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="youtube-list">
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem
        image="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        avatar="https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Nghề lập trình viên đang quá cạnh tranh"
        author="Nguyễn Trần Minh Đăng"
      />
    </div>
  );
};

export default App;
