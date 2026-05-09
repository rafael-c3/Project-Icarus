import { header } from "./header.js";
import { home } from "./home.js";
import { footer } from "./footer.js";

const app = document.getElementById("app");

app.innerHTML = `
    ${header()}
    ${home()}
    ${footer()}
`;