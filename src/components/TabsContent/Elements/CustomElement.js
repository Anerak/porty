import React, { Component } from "react";

/*
{
  "label": {
      "id": "45645-54645-v-sfas-45",
      "content": {
          "text": "This is a text for the label."
      },
      "name": "Labely",
      "style": {
          "color": "#1c1d26",
          "fontSize": "2.5rem"
      },
      "type" : "label"
  },
  "experience": {
      "id": "_",
      "content": {
          "company": "Google",
          "description": "I worked here using my knowledge.",
          "from": "2005-06-15",
          "to": null
      },
      "type": "experience"
  }
}
 */

export default class CustomElement extends Component {
  constructor(uuid, name, type) {
    this.id = uuid;
  }
  render() {
    return <div>CustomElement</div>;
  }
}
