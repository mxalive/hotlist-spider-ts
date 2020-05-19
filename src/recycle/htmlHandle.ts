import https from "https"
import {ResOptions} from "../interface/options"

class DataRes {
  options: ResOptions;
  constructor(options: ResOptions) {
    this.options = options
  }
  getHtml() {
    return new Promise((resolve, reject) => {
      const req = https.request(this.options.url, {
        headers: this.options.headers,
        method: this.options.method
      }, (res: any) => {
        let chunks: any[] = []
        let size: number = 0
        res.on('data', (chunk: any) => {
          chunks.push(chunk)
          size += chunk.length
        });
        res.on("end", () => {
          let html = Buffer.concat(chunks, size).toString("utf-8")
          resolve(html)
        })
      });
      req.on('error', (e: any) => {
        console.log(e);
      });
      req.end();
    })
  }

}
export { DataRes }