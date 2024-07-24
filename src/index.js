import messages_pt_br from "./translations/es.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "es", messages: messages_es }],
}

export const LanguagePtBrModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
