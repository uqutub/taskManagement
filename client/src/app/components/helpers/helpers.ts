
//callBack from server Api
export type customServerResponseObject =  { 'success': boolean, 'data': any, 'error': any };

export type customServerResponseFunction = (d: customServerResponseObject) => void;