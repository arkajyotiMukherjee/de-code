import React from "react";
import { IconLists } from "../../../resources/fonts/maya-icons/list.js";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: "icons",
      version: "v1.55",
      iconFiles: "https://github.com/mayadata-io/de-code/tree/master/resources/fonts/maya-icons",
    };
  }
  download() {
    console.log('download', this.state.iconFiles);
    window.open(this.state.iconFiles);
  }
  render() {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div className="flex-fill">
            <h3>{IconLists.length} Icons</h3>
          </div>
          <div className="mr-2 ">
            <span>{this.state.version}</span>
          </div>
          <div>
          <button className="btn btn-link" onClick={this.download.bind(this)}><span className="fa fa-download mr-1"></span>Download</button>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {IconLists.map(icon => (
            <div className="icon-box-content">
              <span className={`mi mi-1x mr-3 ${icon.name}`} key={icon.name} />
              <span>{icon.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Icons;