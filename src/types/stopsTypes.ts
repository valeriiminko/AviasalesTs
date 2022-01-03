export interface StopsState{
    stops: any[],
    currentstop: string
}

export interface StopsAction{
    type: string,
    stops: any[],
    currentstop: string
}

export enum StopsTypes{
    ALL = "Все",
    WO = "Без остановок",
    FIRST ="1 остановка",
    SECOND ="2 остановки",
    THREE = "3 остановки"
}


export interface IAllStopAction{
    type: StopsTypes.ALL,
    stops: any[],
    currentstop: string
}

export interface IWOStopAction{
    type: StopsTypes.WO,
    stops: any[],
    currentstop: string
}

export interface IFirstStopAction{
    type: StopsTypes.FIRST,
    stops: any[],
    currentstop: string
}

export interface ISecondStopAction{
    type: StopsTypes.SECOND,
    stops: any[],
    currentstop: string
}

export interface IThirdStopAction{
    type: StopsTypes.THREE,
    stops: any[],
    currentstop: string
}

export interface IStopsArr{
    stop: string,
    checked: boolean,
    quantity: number
}
