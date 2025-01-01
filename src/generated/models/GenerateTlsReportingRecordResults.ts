/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface GenerateTlsReportingRecordResults
 */
export interface GenerateTlsReportingRecordResults {
  /**
   *
   * @type {string}
   * @memberof GenerateTlsReportingRecordResults
   */
  name: string;
  /**
   * Domain Name Server Record Types
   * @type {string}
   * @memberof GenerateTlsReportingRecordResults
   */
  type: GenerateTlsReportingRecordResultsTypeEnum;
  /**
   *
   * @type {number}
   * @memberof GenerateTlsReportingRecordResults
   */
  ttl: number;
  /**
   *
   * @type {string}
   * @memberof GenerateTlsReportingRecordResults
   */
  value: string;
}

/**
 * @export
 * @enum {string}
 */
export enum GenerateTlsReportingRecordResultsTypeEnum {
  A = 'A',
  NS = 'NS',
  MD = 'MD',
  MF = 'MF',
  CNAME = 'CNAME',
  SOA = 'SOA',
  MB = 'MB',
  MG = 'MG',
  MR = 'MR',
  NULL = 'NULL',
  WKS = 'WKS',
  PTR = 'PTR',
  HINFO = 'HINFO',
  MINFO = 'MINFO',
  MX = 'MX',
  TXT = 'TXT',
  RP = 'RP',
  AFSDB = 'AFSDB',
  X25 = 'X25',
  ISDN = 'ISDN',
  RT = 'RT',
  NSAP = 'NSAP',
  NSAP_PTR = 'NSAP_PTR',
  SIG = 'SIG',
  KEY = 'KEY',
  PX = 'PX',
  GPOS = 'GPOS',
  AAAA = 'AAAA',
  LOC = 'LOC',
  NXT = 'NXT',
  EID = 'EID',
  NIMLOC = 'NIMLOC',
  SRV = 'SRV',
  ATMA = 'ATMA',
  NAPTR = 'NAPTR',
  KX = 'KX',
  CERT = 'CERT',
  A6 = 'A6',
  DNAME = 'DNAME',
  SINK = 'SINK',
  OPT = 'OPT',
  APL = 'APL',
  DS = 'DS',
  SSHFP = 'SSHFP',
  IPSECKEY = 'IPSECKEY',
  RRSIG = 'RRSIG',
  NSEC = 'NSEC',
  DNSKEY = 'DNSKEY',
  DHCID = 'DHCID',
  NSEC3 = 'NSEC3',
  NSEC3PARAM = 'NSEC3PARAM',
  TLSA = 'TLSA',
  SMIMEA = 'SMIMEA',
  HIP = 'HIP',
  NINFO = 'NINFO',
  RKEY = 'RKEY',
  TALINK = 'TALINK',
  CDS = 'CDS',
  CDNSKEY = 'CDNSKEY',
  OPENPGPKEY = 'OPENPGPKEY',
  CSYNC = 'CSYNC',
  ZONEMD = 'ZONEMD',
  SVCB = 'SVCB',
  HTTPS = 'HTTPS',
  SPF = 'SPF',
  UINFO = 'UINFO',
  UID = 'UID',
  GID = 'GID',
  UNSPEC = 'UNSPEC',
  NID = 'NID',
  L32 = 'L32',
  L64 = 'L64',
  LP = 'LP',
  EUI48 = 'EUI48',
  EUI64 = 'EUI64',
  TKEY = 'TKEY',
  TSIG = 'TSIG',
  IXFR = 'IXFR',
  AXFR = 'AXFR',
  MAILB = 'MAILB',
  MAILA = 'MAILA',
  ANY = 'ANY',
  URI = 'URI',
  CAA = 'CAA',
  AVC = 'AVC',
  DOA = 'DOA',
  AMTRELAY = 'AMTRELAY',
  TA = 'TA',
  DLV = 'DLV',
}

export function GenerateTlsReportingRecordResultsFromJSON(
  json: any
): GenerateTlsReportingRecordResults {
  return GenerateTlsReportingRecordResultsFromJSONTyped(json, false);
}

export function GenerateTlsReportingRecordResultsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GenerateTlsReportingRecordResults {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    type: json['type'],
    ttl: json['ttl'],
    value: json['value'],
  };
}

export function GenerateTlsReportingRecordResultsToJSON(
  value?: GenerateTlsReportingRecordResults | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    type: value.type,
    ttl: value.ttl,
    value: value.value,
  };
}
