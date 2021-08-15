[MailSlurp JS](../README.md) / [DomainNameRecord](../modules/DomainNameRecord.md) / RecordTypeEnum

# Enumeration: RecordTypeEnum

[DomainNameRecord](../modules/DomainNameRecord.md).RecordTypeEnum

**`export`**

## Table of contents

### Enumeration members

- [A](DomainNameRecord.RecordTypeEnum.md#a)
- [A6](DomainNameRecord.RecordTypeEnum.md#a6)
- [AAAA](DomainNameRecord.RecordTypeEnum.md#aaaa)
- [AFSDB](DomainNameRecord.RecordTypeEnum.md#afsdb)
- [AMTRELAY](DomainNameRecord.RecordTypeEnum.md#amtrelay)
- [ANY](DomainNameRecord.RecordTypeEnum.md#any)
- [APL](DomainNameRecord.RecordTypeEnum.md#apl)
- [ATMA](DomainNameRecord.RecordTypeEnum.md#atma)
- [AVC](DomainNameRecord.RecordTypeEnum.md#avc)
- [AXFR](DomainNameRecord.RecordTypeEnum.md#axfr)
- [CAA](DomainNameRecord.RecordTypeEnum.md#caa)
- [CDNSKEY](DomainNameRecord.RecordTypeEnum.md#cdnskey)
- [CDS](DomainNameRecord.RecordTypeEnum.md#cds)
- [CERT](DomainNameRecord.RecordTypeEnum.md#cert)
- [CNAME](DomainNameRecord.RecordTypeEnum.md#cname)
- [CSYNC](DomainNameRecord.RecordTypeEnum.md#csync)
- [DHCID](DomainNameRecord.RecordTypeEnum.md#dhcid)
- [DLV](DomainNameRecord.RecordTypeEnum.md#dlv)
- [DNAME](DomainNameRecord.RecordTypeEnum.md#dname)
- [DNSKEY](DomainNameRecord.RecordTypeEnum.md#dnskey)
- [DOA](DomainNameRecord.RecordTypeEnum.md#doa)
- [DS](DomainNameRecord.RecordTypeEnum.md#ds)
- [EID](DomainNameRecord.RecordTypeEnum.md#eid)
- [EUI48](DomainNameRecord.RecordTypeEnum.md#eui48)
- [EUI64](DomainNameRecord.RecordTypeEnum.md#eui64)
- [GID](DomainNameRecord.RecordTypeEnum.md#gid)
- [GPOS](DomainNameRecord.RecordTypeEnum.md#gpos)
- [HINFO](DomainNameRecord.RecordTypeEnum.md#hinfo)
- [HIP](DomainNameRecord.RecordTypeEnum.md#hip)
- [HTTPS](DomainNameRecord.RecordTypeEnum.md#https)
- [IPSECKEY](DomainNameRecord.RecordTypeEnum.md#ipseckey)
- [ISDN](DomainNameRecord.RecordTypeEnum.md#isdn)
- [IXFR](DomainNameRecord.RecordTypeEnum.md#ixfr)
- [KEY](DomainNameRecord.RecordTypeEnum.md#key)
- [KX](DomainNameRecord.RecordTypeEnum.md#kx)
- [L32](DomainNameRecord.RecordTypeEnum.md#l32)
- [L64](DomainNameRecord.RecordTypeEnum.md#l64)
- [LOC](DomainNameRecord.RecordTypeEnum.md#loc)
- [LP](DomainNameRecord.RecordTypeEnum.md#lp)
- [MAILA](DomainNameRecord.RecordTypeEnum.md#maila)
- [MAILB](DomainNameRecord.RecordTypeEnum.md#mailb)
- [MB](DomainNameRecord.RecordTypeEnum.md#mb)
- [MD](DomainNameRecord.RecordTypeEnum.md#md)
- [MF](DomainNameRecord.RecordTypeEnum.md#mf)
- [MG](DomainNameRecord.RecordTypeEnum.md#mg)
- [MINFO](DomainNameRecord.RecordTypeEnum.md#minfo)
- [MR](DomainNameRecord.RecordTypeEnum.md#mr)
- [MX](DomainNameRecord.RecordTypeEnum.md#mx)
- [NAPTR](DomainNameRecord.RecordTypeEnum.md#naptr)
- [NID](DomainNameRecord.RecordTypeEnum.md#nid)
- [NIMLOC](DomainNameRecord.RecordTypeEnum.md#nimloc)
- [NINFO](DomainNameRecord.RecordTypeEnum.md#ninfo)
- [NS](DomainNameRecord.RecordTypeEnum.md#ns)
- [NSAP](DomainNameRecord.RecordTypeEnum.md#nsap)
- [NSAPPTR](DomainNameRecord.RecordTypeEnum.md#nsapptr)
- [NSEC](DomainNameRecord.RecordTypeEnum.md#nsec)
- [NSEC3](DomainNameRecord.RecordTypeEnum.md#nsec3)
- [NSEC3PARAM](DomainNameRecord.RecordTypeEnum.md#nsec3param)
- [NULL](DomainNameRecord.RecordTypeEnum.md#null)
- [NXT](DomainNameRecord.RecordTypeEnum.md#nxt)
- [OPENPGPKEY](DomainNameRecord.RecordTypeEnum.md#openpgpkey)
- [OPT](DomainNameRecord.RecordTypeEnum.md#opt)
- [PTR](DomainNameRecord.RecordTypeEnum.md#ptr)
- [PX](DomainNameRecord.RecordTypeEnum.md#px)
- [RKEY](DomainNameRecord.RecordTypeEnum.md#rkey)
- [RP](DomainNameRecord.RecordTypeEnum.md#rp)
- [RRSIG](DomainNameRecord.RecordTypeEnum.md#rrsig)
- [RT](DomainNameRecord.RecordTypeEnum.md#rt)
- [SIG](DomainNameRecord.RecordTypeEnum.md#sig)
- [SINK](DomainNameRecord.RecordTypeEnum.md#sink)
- [SMIMEA](DomainNameRecord.RecordTypeEnum.md#smimea)
- [SOA](DomainNameRecord.RecordTypeEnum.md#soa)
- [SPF](DomainNameRecord.RecordTypeEnum.md#spf)
- [SRV](DomainNameRecord.RecordTypeEnum.md#srv)
- [SSHFP](DomainNameRecord.RecordTypeEnum.md#sshfp)
- [SVCB](DomainNameRecord.RecordTypeEnum.md#svcb)
- [TA](DomainNameRecord.RecordTypeEnum.md#ta)
- [TALINK](DomainNameRecord.RecordTypeEnum.md#talink)
- [TKEY](DomainNameRecord.RecordTypeEnum.md#tkey)
- [TLSA](DomainNameRecord.RecordTypeEnum.md#tlsa)
- [TSIG](DomainNameRecord.RecordTypeEnum.md#tsig)
- [TXT](DomainNameRecord.RecordTypeEnum.md#txt)
- [UID](DomainNameRecord.RecordTypeEnum.md#uid)
- [UINFO](DomainNameRecord.RecordTypeEnum.md#uinfo)
- [UNSPEC](DomainNameRecord.RecordTypeEnum.md#unspec)
- [URI](DomainNameRecord.RecordTypeEnum.md#uri)
- [WKS](DomainNameRecord.RecordTypeEnum.md#wks)
- [X25](DomainNameRecord.RecordTypeEnum.md#x25)
- [ZONEMD](DomainNameRecord.RecordTypeEnum.md#zonemd)

## Enumeration members

### A

• **A**

#### Defined in

[src/generated/api.ts:1719](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1719)

___

### A6

• **A6**

#### Defined in

[src/generated/api.ts:1756](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1756)

___

### AAAA

• **AAAA**

#### Defined in

[src/generated/api.ts:1746](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1746)

___

### AFSDB

• **AFSDB**

#### Defined in

[src/generated/api.ts:1736](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1736)

___

### AMTRELAY

• **AMTRELAY**

#### Defined in

[src/generated/api.ts:1805](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1805)

___

### ANY

• **ANY**

#### Defined in

[src/generated/api.ts:1800](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1800)

___

### APL

• **APL**

#### Defined in

[src/generated/api.ts:1760](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1760)

___

### ATMA

• **ATMA**

#### Defined in

[src/generated/api.ts:1752](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1752)

___

### AVC

• **AVC**

#### Defined in

[src/generated/api.ts:1803](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1803)

___

### AXFR

• **AXFR**

#### Defined in

[src/generated/api.ts:1797](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1797)

___

### CAA

• **CAA**

#### Defined in

[src/generated/api.ts:1802](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1802)

___

### CDNSKEY

• **CDNSKEY**

#### Defined in

[src/generated/api.ts:1777](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1777)

___

### CDS

• **CDS**

#### Defined in

[src/generated/api.ts:1776](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1776)

___

### CERT

• **CERT**

#### Defined in

[src/generated/api.ts:1755](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1755)

___

### CNAME

• **CNAME**

#### Defined in

[src/generated/api.ts:1723](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1723)

___

### CSYNC

• **CSYNC**

#### Defined in

[src/generated/api.ts:1779](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1779)

___

### DHCID

• **DHCID**

#### Defined in

[src/generated/api.ts:1767](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1767)

___

### DLV

• **DLV**

#### Defined in

[src/generated/api.ts:1807](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1807)

___

### DNAME

• **DNAME**

#### Defined in

[src/generated/api.ts:1757](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1757)

___

### DNSKEY

• **DNSKEY**

#### Defined in

[src/generated/api.ts:1766](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1766)

___

### DOA

• **DOA**

#### Defined in

[src/generated/api.ts:1804](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1804)

___

### DS

• **DS**

#### Defined in

[src/generated/api.ts:1761](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1761)

___

### EID

• **EID**

#### Defined in

[src/generated/api.ts:1749](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1749)

___

### EUI48

• **EUI48**

#### Defined in

[src/generated/api.ts:1792](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1792)

___

### EUI64

• **EUI64**

#### Defined in

[src/generated/api.ts:1793](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1793)

___

### GID

• **GID**

#### Defined in

[src/generated/api.ts:1786](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1786)

___

### GPOS

• **GPOS**

#### Defined in

[src/generated/api.ts:1745](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1745)

___

### HINFO

• **HINFO**

#### Defined in

[src/generated/api.ts:1731](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1731)

___

### HIP

• **HIP**

#### Defined in

[src/generated/api.ts:1772](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1772)

___

### HTTPS

• **HTTPS**

#### Defined in

[src/generated/api.ts:1782](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1782)

___

### IPSECKEY

• **IPSECKEY**

#### Defined in

[src/generated/api.ts:1763](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1763)

___

### ISDN

• **ISDN**

#### Defined in

[src/generated/api.ts:1738](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1738)

___

### IXFR

• **IXFR**

#### Defined in

[src/generated/api.ts:1796](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1796)

___

### KEY

• **KEY**

#### Defined in

[src/generated/api.ts:1743](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1743)

___

### KX

• **KX**

#### Defined in

[src/generated/api.ts:1754](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1754)

___

### L32

• **L32**

#### Defined in

[src/generated/api.ts:1789](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1789)

___

### L64

• **L64**

#### Defined in

[src/generated/api.ts:1790](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1790)

___

### LOC

• **LOC**

#### Defined in

[src/generated/api.ts:1747](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1747)

___

### LP

• **LP**

#### Defined in

[src/generated/api.ts:1791](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1791)

___

### MAILA

• **MAILA**

#### Defined in

[src/generated/api.ts:1799](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1799)

___

### MAILB

• **MAILB**

#### Defined in

[src/generated/api.ts:1798](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1798)

___

### MB

• **MB**

#### Defined in

[src/generated/api.ts:1725](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1725)

___

### MD

• **MD**

#### Defined in

[src/generated/api.ts:1721](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1721)

___

### MF

• **MF**

#### Defined in

[src/generated/api.ts:1722](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1722)

___

### MG

• **MG**

#### Defined in

[src/generated/api.ts:1726](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1726)

___

### MINFO

• **MINFO**

#### Defined in

[src/generated/api.ts:1732](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1732)

___

### MR

• **MR**

#### Defined in

[src/generated/api.ts:1727](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1727)

___

### MX

• **MX**

#### Defined in

[src/generated/api.ts:1733](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1733)

___

### NAPTR

• **NAPTR**

#### Defined in

[src/generated/api.ts:1753](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1753)

___

### NID

• **NID**

#### Defined in

[src/generated/api.ts:1788](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1788)

___

### NIMLOC

• **NIMLOC**

#### Defined in

[src/generated/api.ts:1750](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1750)

___

### NINFO

• **NINFO**

#### Defined in

[src/generated/api.ts:1773](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1773)

___

### NS

• **NS**

#### Defined in

[src/generated/api.ts:1720](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1720)

___

### NSAP

• **NSAP**

#### Defined in

[src/generated/api.ts:1740](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1740)

___

### NSAPPTR

• **NSAPPTR**

#### Defined in

[src/generated/api.ts:1741](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1741)

___

### NSEC

• **NSEC**

#### Defined in

[src/generated/api.ts:1765](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1765)

___

### NSEC3

• **NSEC3**

#### Defined in

[src/generated/api.ts:1768](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1768)

___

### NSEC3PARAM

• **NSEC3PARAM**

#### Defined in

[src/generated/api.ts:1769](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1769)

___

### NULL

• **NULL**

#### Defined in

[src/generated/api.ts:1728](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1728)

___

### NXT

• **NXT**

#### Defined in

[src/generated/api.ts:1748](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1748)

___

### OPENPGPKEY

• **OPENPGPKEY**

#### Defined in

[src/generated/api.ts:1778](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1778)

___

### OPT

• **OPT**

#### Defined in

[src/generated/api.ts:1759](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1759)

___

### PTR

• **PTR**

#### Defined in

[src/generated/api.ts:1730](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1730)

___

### PX

• **PX**

#### Defined in

[src/generated/api.ts:1744](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1744)

___

### RKEY

• **RKEY**

#### Defined in

[src/generated/api.ts:1774](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1774)

___

### RP

• **RP**

#### Defined in

[src/generated/api.ts:1735](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1735)

___

### RRSIG

• **RRSIG**

#### Defined in

[src/generated/api.ts:1764](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1764)

___

### RT

• **RT**

#### Defined in

[src/generated/api.ts:1739](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1739)

___

### SIG

• **SIG**

#### Defined in

[src/generated/api.ts:1742](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1742)

___

### SINK

• **SINK**

#### Defined in

[src/generated/api.ts:1758](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1758)

___

### SMIMEA

• **SMIMEA**

#### Defined in

[src/generated/api.ts:1771](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1771)

___

### SOA

• **SOA**

#### Defined in

[src/generated/api.ts:1724](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1724)

___

### SPF

• **SPF**

#### Defined in

[src/generated/api.ts:1783](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1783)

___

### SRV

• **SRV**

#### Defined in

[src/generated/api.ts:1751](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1751)

___

### SSHFP

• **SSHFP**

#### Defined in

[src/generated/api.ts:1762](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1762)

___

### SVCB

• **SVCB**

#### Defined in

[src/generated/api.ts:1781](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1781)

___

### TA

• **TA**

#### Defined in

[src/generated/api.ts:1806](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1806)

___

### TALINK

• **TALINK**

#### Defined in

[src/generated/api.ts:1775](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1775)

___

### TKEY

• **TKEY**

#### Defined in

[src/generated/api.ts:1794](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1794)

___

### TLSA

• **TLSA**

#### Defined in

[src/generated/api.ts:1770](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1770)

___

### TSIG

• **TSIG**

#### Defined in

[src/generated/api.ts:1795](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1795)

___

### TXT

• **TXT**

#### Defined in

[src/generated/api.ts:1734](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1734)

___

### UID

• **UID**

#### Defined in

[src/generated/api.ts:1785](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1785)

___

### UINFO

• **UINFO**

#### Defined in

[src/generated/api.ts:1784](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1784)

___

### UNSPEC

• **UNSPEC**

#### Defined in

[src/generated/api.ts:1787](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1787)

___

### URI

• **URI**

#### Defined in

[src/generated/api.ts:1801](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1801)

___

### WKS

• **WKS**

#### Defined in

[src/generated/api.ts:1729](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1729)

___

### X25

• **X25**

#### Defined in

[src/generated/api.ts:1737](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1737)

___

### ZONEMD

• **ZONEMD**

#### Defined in

[src/generated/api.ts:1780](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L1780)
