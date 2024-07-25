import messages_es from "./translations/es.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "es", messages: messages_es_es }],
}

export const LanguagePtBrModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
