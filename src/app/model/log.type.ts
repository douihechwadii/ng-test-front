export type Log = {
    date: string;
    time: string;
    logid: number;
    type: string;
    subtype: string;
    level: string;
    vd: string;
    eventtime: number;
    srcip: string;
    dstip: string;
    srcport: number;
    dstport: number;
    srcintf: string;
    dstintf: string;
    proto: number;
    action: string;
    service: string;
    sentbyte: number;
    rcvdbyte: number;
    duration: number;
    policyid: number;
    policymode: number;
    srccountry: string;
    dstcountry: string;
}