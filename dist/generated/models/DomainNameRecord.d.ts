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
/**
 * DNS Record required for verification of a domain. Record vary depending on domain type.
 * @export
 * @interface DomainNameRecord
 */
export interface DomainNameRecord {
    /**
     * Domain Name Server Record Label
     * @type {string}
     * @memberof DomainNameRecord
     */
    label: DomainNameRecordLabelEnum;
    /**
     *
     * @type {boolean}
     * @memberof DomainNameRecord
     */
    required: boolean;
    /**
     * Domain Name Server Record Types
     * @type {string}
     * @memberof DomainNameRecord
     */
    recordType: DomainNameRecordRecordTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DomainNameRecord
     */
    name: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainNameRecord
     */
    recordEntries: Array<string>;
    /**
     *
     * @type {number}
     * @memberof DomainNameRecord
     */
    ttl: number;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainNameRecord
     */
    alternativeRecordEntries?: Array<string> | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum DomainNameRecordLabelEnum {
    VERIFICATION = "VERIFICATION",
    MX = "MX",
    SPF = "SPF",
    DKIM = "DKIM",
    DMARC = "DMARC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum DomainNameRecordRecordTypeEnum {
    A = "A",
    NS = "NS",
    MD = "MD",
    MF = "MF",
    CNAME = "CNAME",
    SOA = "SOA",
    MB = "MB",
    MG = "MG",
    MR = "MR",
    NULL = "NULL",
    WKS = "WKS",
    PTR = "PTR",
    HINFO = "HINFO",
    MINFO = "MINFO",
    MX = "MX",
    TXT = "TXT",
    RP = "RP",
    AFSDB = "AFSDB",
    X25 = "X25",
    ISDN = "ISDN",
    RT = "RT",
    NSAP = "NSAP",
    NSAP_PTR = "NSAP_PTR",
    SIG = "SIG",
    KEY = "KEY",
    PX = "PX",
    GPOS = "GPOS",
    AAAA = "AAAA",
    LOC = "LOC",
    NXT = "NXT",
    EID = "EID",
    NIMLOC = "NIMLOC",
    SRV = "SRV",
    ATMA = "ATMA",
    NAPTR = "NAPTR",
    KX = "KX",
    CERT = "CERT",
    A6 = "A6",
    DNAME = "DNAME",
    SINK = "SINK",
    OPT = "OPT",
    APL = "APL",
    DS = "DS",
    SSHFP = "SSHFP",
    IPSECKEY = "IPSECKEY",
    RRSIG = "RRSIG",
    NSEC = "NSEC",
    DNSKEY = "DNSKEY",
    DHCID = "DHCID",
    NSEC3 = "NSEC3",
    NSEC3PARAM = "NSEC3PARAM",
    TLSA = "TLSA",
    SMIMEA = "SMIMEA",
    HIP = "HIP",
    NINFO = "NINFO",
    RKEY = "RKEY",
    TALINK = "TALINK",
    CDS = "CDS",
    CDNSKEY = "CDNSKEY",
    OPENPGPKEY = "OPENPGPKEY",
    CSYNC = "CSYNC",
    ZONEMD = "ZONEMD",
    SVCB = "SVCB",
    HTTPS = "HTTPS",
    SPF = "SPF",
    UINFO = "UINFO",
    UID = "UID",
    GID = "GID",
    UNSPEC = "UNSPEC",
    NID = "NID",
    L32 = "L32",
    L64 = "L64",
    LP = "LP",
    EUI48 = "EUI48",
    EUI64 = "EUI64",
    TKEY = "TKEY",
    TSIG = "TSIG",
    IXFR = "IXFR",
    AXFR = "AXFR",
    MAILB = "MAILB",
    MAILA = "MAILA",
    ANY = "ANY",
    URI = "URI",
    CAA = "CAA",
    AVC = "AVC",
    DOA = "DOA",
    AMTRELAY = "AMTRELAY",
    TA = "TA",
    DLV = "DLV"
}
export declare function DomainNameRecordFromJSON(json: any): DomainNameRecord;
export declare function DomainNameRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainNameRecord;
export declare function DomainNameRecordToJSON(value?: DomainNameRecord | null): any;
