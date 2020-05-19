import cheerio = require("cheerio")
import { WzboDb } from "../interface/options"
/**
 * 定义函数事件
 */
//处理数据
class WzboData{
  options:WzboDb
  constructor(options:WzboDb){
    this.options=options
  }
  returnData(){
    return this.options
  }
}
function handleData(html:any) {
  const $ = cheerio.load(html)
  let result:WzboDb[]=[]
  $("tbody").find("tr").each((i, elem) => {
    const index:string = $('tr').eq(i + 1).find("td.td-01").text()
    const title:string = $('tr').eq(i + 1).find("td.td-02 a").text()
    const link:string = "https://s.weibo.com/"+$('tr').eq(i + 1).find("td.td-02 a").attr('href')
    const hotIndex:string = $('tr').eq(i + 1).find("td.td-02 span").text()
    const expression:string|undefined = $('tr').eq(i + 1).find("td.td-02 img").attr('src')
    const indexLabel:string = $('tr').eq(i + 1).find("td.td-03").text()
    const wzboL:WzboDb={index, title, link, hotIndex, expression, indexLabel,nameId:'wzbo'}
    const wzboList:WzboData = new WzboData(wzboL)
    const wzboLs=wzboList.returnData()
    result.push(wzboLs)
  })
  return result
  }
export {handleData}