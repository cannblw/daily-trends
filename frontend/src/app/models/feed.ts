
/*
 * This initial value is assumed. Enums start at 0, but
 * it makes the code clearer for the integration with the
 * backend.
 */
enum Publisher {
  EL_MUNDO = 0,
  EL_PAIS = 1
}

export interface Feed {
  title: string;
  body: string;
  image: string;
  source: string;
  publisher: Publisher;
}
