/**
 * Create @types for csvjson-csv2json module
 */
declare module "csvjson-csv2json" {
  export interface CSVJSONOptions {
    separator?: string;
    parseNumbers?: Boolean;
    parseJSON?: Boolean;
    transpose?: Boolean;
    hash?: Boolean;
  }

  export default function csv2json(
    csv: string,
    options?: CSVJSONOptions
  ): Array<object>;
}
