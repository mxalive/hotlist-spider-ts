import cheerio = require("cheerio")
import { VihuDb } from "../interface/options"
/*
定义函数事件
*/
class VihuData {
  options: VihuDb
  constructor(options: VihuDb) {
    this.options = options
  }
  returnData() {
    return this.options
  }
}
//处理数据
function handleData(html: any) {
  const $ = cheerio.load(html)
  let result: VihuDb[] = []
  $('div.HotList-list').find('section.HotItem').each((i, elem) => {
    const index: string = $('section.HotItem').eq(i).find('.HotItem-index .HotItem-rank').text()
    const indexLabel: string = $('section.HotItem').eq(i).find('.HotItem-index .HotItem-label').text()
    const link: string | undefined = $('section.HotItem').eq(i).find('.HotItem-content a').attr('href')
    const title: string = $('section.HotItem').eq(i).find('.HotItem-title').text()
    const description: string = $('section.HotItem').eq(i).find('.HotItem-content a p').text()
    const hotIndex: string = $('section.HotItem').eq(i).find('.HotItem-content .HotItem-metrics').text()
    const vihuL: VihuDb = {
      index,
      indexLabel,
      link,
      title,
      description,
      hotIndex,
      nameId: "vihu"
    }
    const vihuList: VihuData = new VihuData(vihuL)
    const vihuLs = vihuList.returnData()
    result.push(vihuLs)
  })
  return result
}

export { handleData }
