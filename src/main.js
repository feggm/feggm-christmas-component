import { defineCustomElement } from "vue";
import ChrismasFeggm from "./ChrismasFeggm.ce.vue";

const ChrismasFeggmCustomElement = defineCustomElement(ChrismasFeggm);

customElements.define("christmas-feggm", ChrismasFeggmCustomElement);
