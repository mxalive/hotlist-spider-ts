//htmlHandle接口
interface ResOptions {
  url: string,
  method?: string,
  headers?: any
}
//vihu数据模板接口
interface VihuDb{
  index:string,
  indexLabel:string,
  link:any,
  title:string,
  description?:string,
  hotIndex:string,
  nameId:string
}
interface WzboDb{
  index:string
  title:string
  link:string
  hotIndex:string
  expression?:string
  indexLabel:string
  nameId:string
}

export {ResOptions,VihuDb,WzboDb}