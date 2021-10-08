"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNSLookupOptionsToJSON = exports.DNSLookupOptionsFromJSONTyped = exports.DNSLookupOptionsFromJSON = exports.DNSLookupOptionsRecordTypesEnum = void 0;
var runtime_1 = require("../runtime");
/**
 * @export
 * @enum {string}
 */
var DNSLookupOptionsRecordTypesEnum;
(function (DNSLookupOptionsRecordTypesEnum) {
    DNSLookupOptionsRecordTypesEnum["A"] = "A";
    DNSLookupOptionsRecordTypesEnum["NS"] = "NS";
    DNSLookupOptionsRecordTypesEnum["MD"] = "MD";
    DNSLookupOptionsRecordTypesEnum["MF"] = "MF";
    DNSLookupOptionsRecordTypesEnum["CNAME"] = "CNAME";
    DNSLookupOptionsRecordTypesEnum["SOA"] = "SOA";
    DNSLookupOptionsRecordTypesEnum["MB"] = "MB";
    DNSLookupOptionsRecordTypesEnum["MG"] = "MG";
    DNSLookupOptionsRecordTypesEnum["MR"] = "MR";
    DNSLookupOptionsRecordTypesEnum["NULL"] = "NULL";
    DNSLookupOptionsRecordTypesEnum["WKS"] = "WKS";
    DNSLookupOptionsRecordTypesEnum["PTR"] = "PTR";
    DNSLookupOptionsRecordTypesEnum["HINFO"] = "HINFO";
    DNSLookupOptionsRecordTypesEnum["MINFO"] = "MINFO";
    DNSLookupOptionsRecordTypesEnum["MX"] = "MX";
    DNSLookupOptionsRecordTypesEnum["TXT"] = "TXT";
    DNSLookupOptionsRecordTypesEnum["RP"] = "RP";
    DNSLookupOptionsRecordTypesEnum["AFSDB"] = "AFSDB";
    DNSLookupOptionsRecordTypesEnum["X25"] = "X25";
    DNSLookupOptionsRecordTypesEnum["ISDN"] = "ISDN";
    DNSLookupOptionsRecordTypesEnum["RT"] = "RT";
    DNSLookupOptionsRecordTypesEnum["NSAP"] = "NSAP";
    DNSLookupOptionsRecordTypesEnum["NSAP_PTR"] = "NSAP_PTR";
    DNSLookupOptionsRecordTypesEnum["SIG"] = "SIG";
    DNSLookupOptionsRecordTypesEnum["KEY"] = "KEY";
    DNSLookupOptionsRecordTypesEnum["PX"] = "PX";
    DNSLookupOptionsRecordTypesEnum["GPOS"] = "GPOS";
    DNSLookupOptionsRecordTypesEnum["AAAA"] = "AAAA";
    DNSLookupOptionsRecordTypesEnum["LOC"] = "LOC";
    DNSLookupOptionsRecordTypesEnum["NXT"] = "NXT";
    DNSLookupOptionsRecordTypesEnum["EID"] = "EID";
    DNSLookupOptionsRecordTypesEnum["NIMLOC"] = "NIMLOC";
    DNSLookupOptionsRecordTypesEnum["SRV"] = "SRV";
    DNSLookupOptionsRecordTypesEnum["ATMA"] = "ATMA";
    DNSLookupOptionsRecordTypesEnum["NAPTR"] = "NAPTR";
    DNSLookupOptionsRecordTypesEnum["KX"] = "KX";
    DNSLookupOptionsRecordTypesEnum["CERT"] = "CERT";
    DNSLookupOptionsRecordTypesEnum["A6"] = "A6";
    DNSLookupOptionsRecordTypesEnum["DNAME"] = "DNAME";
    DNSLookupOptionsRecordTypesEnum["SINK"] = "SINK";
    DNSLookupOptionsRecordTypesEnum["OPT"] = "OPT";
    DNSLookupOptionsRecordTypesEnum["APL"] = "APL";
    DNSLookupOptionsRecordTypesEnum["DS"] = "DS";
    DNSLookupOptionsRecordTypesEnum["SSHFP"] = "SSHFP";
    DNSLookupOptionsRecordTypesEnum["IPSECKEY"] = "IPSECKEY";
    DNSLookupOptionsRecordTypesEnum["RRSIG"] = "RRSIG";
    DNSLookupOptionsRecordTypesEnum["NSEC"] = "NSEC";
    DNSLookupOptionsRecordTypesEnum["DNSKEY"] = "DNSKEY";
    DNSLookupOptionsRecordTypesEnum["DHCID"] = "DHCID";
    DNSLookupOptionsRecordTypesEnum["NSEC3"] = "NSEC3";
    DNSLookupOptionsRecordTypesEnum["NSEC3PARAM"] = "NSEC3PARAM";
    DNSLookupOptionsRecordTypesEnum["TLSA"] = "TLSA";
    DNSLookupOptionsRecordTypesEnum["SMIMEA"] = "SMIMEA";
    DNSLookupOptionsRecordTypesEnum["HIP"] = "HIP";
    DNSLookupOptionsRecordTypesEnum["NINFO"] = "NINFO";
    DNSLookupOptionsRecordTypesEnum["RKEY"] = "RKEY";
    DNSLookupOptionsRecordTypesEnum["TALINK"] = "TALINK";
    DNSLookupOptionsRecordTypesEnum["CDS"] = "CDS";
    DNSLookupOptionsRecordTypesEnum["CDNSKEY"] = "CDNSKEY";
    DNSLookupOptionsRecordTypesEnum["OPENPGPKEY"] = "OPENPGPKEY";
    DNSLookupOptionsRecordTypesEnum["CSYNC"] = "CSYNC";
    DNSLookupOptionsRecordTypesEnum["ZONEMD"] = "ZONEMD";
    DNSLookupOptionsRecordTypesEnum["SVCB"] = "SVCB";
    DNSLookupOptionsRecordTypesEnum["HTTPS"] = "HTTPS";
    DNSLookupOptionsRecordTypesEnum["SPF"] = "SPF";
    DNSLookupOptionsRecordTypesEnum["UINFO"] = "UINFO";
    DNSLookupOptionsRecordTypesEnum["UID"] = "UID";
    DNSLookupOptionsRecordTypesEnum["GID"] = "GID";
    DNSLookupOptionsRecordTypesEnum["UNSPEC"] = "UNSPEC";
    DNSLookupOptionsRecordTypesEnum["NID"] = "NID";
    DNSLookupOptionsRecordTypesEnum["L32"] = "L32";
    DNSLookupOptionsRecordTypesEnum["L64"] = "L64";
    DNSLookupOptionsRecordTypesEnum["LP"] = "LP";
    DNSLookupOptionsRecordTypesEnum["EUI48"] = "EUI48";
    DNSLookupOptionsRecordTypesEnum["EUI64"] = "EUI64";
    DNSLookupOptionsRecordTypesEnum["TKEY"] = "TKEY";
    DNSLookupOptionsRecordTypesEnum["TSIG"] = "TSIG";
    DNSLookupOptionsRecordTypesEnum["IXFR"] = "IXFR";
    DNSLookupOptionsRecordTypesEnum["AXFR"] = "AXFR";
    DNSLookupOptionsRecordTypesEnum["MAILB"] = "MAILB";
    DNSLookupOptionsRecordTypesEnum["MAILA"] = "MAILA";
    DNSLookupOptionsRecordTypesEnum["ANY"] = "ANY";
    DNSLookupOptionsRecordTypesEnum["URI"] = "URI";
    DNSLookupOptionsRecordTypesEnum["CAA"] = "CAA";
    DNSLookupOptionsRecordTypesEnum["AVC"] = "AVC";
    DNSLookupOptionsRecordTypesEnum["DOA"] = "DOA";
    DNSLookupOptionsRecordTypesEnum["AMTRELAY"] = "AMTRELAY";
    DNSLookupOptionsRecordTypesEnum["TA"] = "TA";
    DNSLookupOptionsRecordTypesEnum["DLV"] = "DLV";
})(DNSLookupOptionsRecordTypesEnum = exports.DNSLookupOptionsRecordTypesEnum || (exports.DNSLookupOptionsRecordTypesEnum = {}));
function DNSLookupOptionsFromJSON(json) {
    return DNSLookupOptionsFromJSONTyped(json, false);
}
exports.DNSLookupOptionsFromJSON = DNSLookupOptionsFromJSON;
function DNSLookupOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        hostname: !(0, runtime_1.exists)(json, 'hostname') ? undefined : json['hostname'],
        omitFinalDNSDot: !(0, runtime_1.exists)(json, 'omitFinalDNSDot')
            ? undefined
            : json['omitFinalDNSDot'],
        recordTypes: !(0, runtime_1.exists)(json, 'recordTypes') ? undefined : json['recordTypes'],
    };
}
exports.DNSLookupOptionsFromJSONTyped = DNSLookupOptionsFromJSONTyped;
function DNSLookupOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        hostname: value.hostname,
        omitFinalDNSDot: value.omitFinalDNSDot,
        recordTypes: value.recordTypes,
    };
}
exports.DNSLookupOptionsToJSON = DNSLookupOptionsToJSON;