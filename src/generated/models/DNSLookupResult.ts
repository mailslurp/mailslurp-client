/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
 * DNS lookup result. Includes record type, time to live, raw response, and name value for the name server response.
 * @export
 * @interface DNSLookupResult
 */
export interface DNSLookupResult {
  /**
   * Domain Name Server Record Types
   * @type {string}
   * @memberof DNSLookupResult
   */
  recordType: DNSLookupResultRecordTypeEnum;
  /**
   *
   * @type {number}
   * @memberof DNSLookupResult
   */
  ttl: number;
  /**
   *
   * @type {Array<string>}
   * @memberof DNSLookupResult
   */
  recordEntries: Array<string>;
  /**
   *
   * @type {string}
   * @memberof DNSLookupResult
   */
  name: string;
}

/**
 * @export
 * @enum {string}
 */
export enum DNSLookupResultRecordTypeEnum {
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

export function DNSLookupResultFromJSON(json: any): DNSLookupResult {
  return DNSLookupResultFromJSONTyped(json, false);
}

export function DNSLookupResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DNSLookupResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    recordType: json['recordType'],
    ttl: json['ttl'],
    recordEntries: json['recordEntries'],
    name: json['name'],
  };
}

export function DNSLookupResultToJSON(value?: DNSLookupResult | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    recordType: value.recordType,
    ttl: value.ttl,
    recordEntries: value.recordEntries,
    name: value.name,
  };
}
