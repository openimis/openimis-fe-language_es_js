import messages_es_es from "./translations/es.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "es", messages: messages_es_es }],
}

export const LanguageEsModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
