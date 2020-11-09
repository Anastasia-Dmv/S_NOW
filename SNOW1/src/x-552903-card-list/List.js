import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-template-card";
const ListItem = ({ updateState }) => {
  return (
    <li className="listItem">
      <div className="wrapper">
        <div className="container">
          <div className="tagLine">
            <p className="process">Incident</p>
            <button className="action">...</button>
          </div>
          <div className="headerLabel">
            Submit attachment to malware sandbox and review the result
          </div>
          <div>
            <ul className="contentSlot">
              <li>
                <p className="label">Number</p>
                <p className="value">INC000000038</p>
              </li>
              <li>
                <p className="label">State</p>
                <p className="value">Closed</p>
              </li>
              <li>
                <p className="label">Assigment Group</p>
                <p className="value">Service Desk</p>
              </li>
              <li>
                <p className="label">Assigned to</p>
                <p className="value">Luke Wilson</p>
              </li>
            </ul>
          </div>
          <div className="footer">Updated {new Date().toUTCString()}</div>
        </div>
      </div>
    </li>
  );
};
export default ListItem;
