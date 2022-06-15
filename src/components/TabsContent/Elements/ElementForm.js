import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Elements from "./data";
import { validate } from "uuid";

const ElementForm = () => {
  const { id } = useParams();

  const [element, setElement] = useState({});

  useEffect(() => {
    const invalid = { id: "Invalid ID" };

    if (!validate(id)) {
      setElement(invalid);
      return;
    }

    let info = Elements.find((el) => el.id === id);

    setElement(info ?? invalid);
  }, [id]);

  return (
    <>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            defaultValue={element.id}
            disabled
            readOnly
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={solid("hashtag")} />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Element name"
            defaultValue=""
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={solid("pencil")} />
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea has-fixed-size"
            placeholder="Element text"
            defaultValue=""
          ></textarea>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-fifth">
          <input type="color" className="input" defaultValue="#1c1d26" />
        </div>
        <div className="column is-one-fifth">
          <div className="field">
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="FFFFFF" />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={solid("hashtag")} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementForm;
