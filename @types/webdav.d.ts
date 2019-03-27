/**
 * Create @types for webdav module
 */
declare module "webdav" {
  import http from "http";
  import https from "https";
  import { Readable, Writable } from "stream";

  export interface ClientInterface {
    copyFile(
      remotePath: string,
      targetRemotePath: string,
      options?: UserOptions
    ): Promise<any>;
    createDirectory(dirPath: string, options?: UserOptions): Promise<any>;
    createReadStream(remoteFilename: string, options?: UserOptions): Readable;
    createWriteStream(remoteFilename: string, options?: UserOptions): Writable;
    deleteFile(remotePath: string, options?: UserOptions): Promise<any>;
    getDirectoryContents(
      remotePath: string,
      options?: GetDirectoryContentsOptions
    ): Promise<Array<Stat>>;
    getFileContents(
      remoteFilename: string,
      options?: OptionsWithFormat
    ): Promise<Buffer | string>;
    getFileDownloadLink(remoteFilename: string, options?: UserOptions): string;
    getFileUploadLink(remoteFilename: string, options?: PutOptions): string;
    getQuota(options?: OptionsForAdvancedResponses): Promise<null | Object>;
    moveFile(
      remotePath: string,
      targetRemotePath: string,
      options: UserOptions
    ): Promise<any>;
    putFileContents(
      remoteFilename: string,
      data: string | Buffer,
      options?: PutOptions
    ): Promise<any>;
    stat(
      remotePath: string,
      options?: OptionsForAdvancedResponses
    ): Promise<Stat>;
  }

  export interface OptionsForAdvancedResponses extends UserOptions {
    details?: Boolean;
  }

  export interface PutOptions extends UserOptions {
    overwrite?: Boolean;
  }

  export interface OptionsWithFormat extends UserOptions {
    format: string;
    details?: Boolean;
  }

  export interface GetDirectoryContentsOptions
    extends OptionsForAdvancedResponses {
    deep?: Boolean;
    glob?: string;
  }

  export interface Stat {
    filename: string;
    basename: string;
    lastmod: string;
    size: Number;
    type: string;
    mime?: string;
    etag: string | null;
    props?: Object;
  }

  export interface RequestOptions {
    url: string;
    method: string;
    headers?: Object;
    httpAgent?: Object;
    httpsAgent?: Object;
    body?: Object | string | any;
  }

  export interface UserOptions {
    httpAgent?: Object;
    httpsAgent?: Object;
    headers?: Object;
    withCredentials?: Object;
  }

  export interface AuthToken {
    token_type: string;
    access_token: string;
  }

  export interface CreateClientOptions {
    username?: string;
    password?: string;
    httpAgent?: http.Agent;
    httpsAgent?: https.Agent;
    token?: AuthToken;
  }

  export function createClient(
    remoteURL: string,
    options?: CreateClientOptions
  ): ClientInterface;
}
