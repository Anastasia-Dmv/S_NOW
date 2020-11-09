import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import nowTemplateCard from "@servicenow/now-template-card";

import { createHttpEffect } from "@servicenow/ui-effect-http";

const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";

// const fetchUserEffect = createHttpEffect('api/users/:id', {
//      method: 'POST'
//      headers: {},
//      pathParams: ['id']
//      dataParam: 'data',
//      successActionType: USER_FETCH_SUCCESS
// });

// // Register with component action handlers:
// {
//     actionHandlers: {
//         'USER_FETCHED': fetchUserEffect,
//         [USER_FETCH_SUCCESS]: ({action, updateState}) => {...}
//     }
// }

//=========
// import {createHttpEffect} from '@servicenow/ui-effect-http';

// // Get 10 users from the sys_user table
// const fetchUsers = createHttpEffect('/api/now/table/sys_user?sysparm_limit=10', {
//     method: 'GET',
//     successActionType: USER_FETCH_SUCCEEDED
// });

// actionHandlers: {
//     [USER_FETCH_REQUESTED] : fetchUsers,
//     [USER_FETCH_SUCCEEDED]: {
//         effect: (coeffects) => {
//             const {
//                 action: {
//                     payload
//                 }
//             } = coeffects;

//             // Logging the result
//             console.log(payload.result);
//         }
//     }
// }

// //Dispatch the action to fetch users
// dispatch(USER_FETCH_REQUESTED);
//=========
var requestBody = "";

var client = new XMLHttpRequest();
client.open(
  "get",
  "https://dev96594.service-now.com/api/now/table/incident?sysparm_display_value=true&sysparm_limit=10"
);

client.setRequestHeader("Accept", "application/json");
client.setRequestHeader("Content-Type", "application/json");

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader(
  "Authorization",
  "Basic " + btoa("admin" + ":" + "admin")
);

client.onreadystatechange = function () {
  if (this.readyState == this.DONE) {
    document.getElementById("response").innerHTML = this.status + this.response;
  }
};
client.send(requestBody);
//============
const view = (state, { updateState }) => {
  return (
    <div>
      <nowTemplateCard />
    </div>
  );
};

createCustomElement("x-552903-incident-list", {
  renderer: { type: snabbdom },
  view,
  styles,
});
