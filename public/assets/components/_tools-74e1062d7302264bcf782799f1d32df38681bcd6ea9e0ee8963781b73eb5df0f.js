var Tools=React.createClass({displayName:"Tools",render:function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("h1",{className:"heading",id:"about_heading"},"Tools")),React.createElement("div",{className:"container-fluid"},this.props.tools.logos.map(function(e,t){return React.createElement(ToolsContent,{key:t,image:e})})),React.createElement("hr",null))}});