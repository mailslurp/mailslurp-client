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

[src/generated/api.ts:1663](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1663)

___

### A6

• **A6**

#### Defined in

[src/generated/api.ts:1700](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1700)

___

### AAAA

• **AAAA**

#### Defined in

[src/generated/api.ts:1690](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1690)

___

### AFSDB

• **AFSDB**

#### Defined in

[src/generated/api.ts:1680](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1680)

___

### AMTRELAY

• **AMTRELAY**

#### Defined in

[src/generated/api.ts:1749](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1749)

___

### ANY

• **ANY**

#### Defined in

[src/generated/api.ts:1744](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1744)

___

### APL

• **APL**

#### Defined in

[src/generated/api.ts:1704](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1704)

___

### ATMA

• **ATMA**

#### Defined in

[src/generated/api.ts:1696](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1696)

___

### AVC

• **AVC**

#### Defined in

[src/generated/api.ts:1747](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1747)

___

### AXFR

• **AXFR**

#### Defined in

[src/generated/api.ts:1741](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1741)

___

### CAA

• **CAA**

#### Defined in

[src/generated/api.ts:1746](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1746)

___

### CDNSKEY

• **CDNSKEY**

#### Defined in

[src/generated/api.ts:1721](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1721)

___

### CDS

• **CDS**

#### Defined in

[src/generated/api.ts:1720](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1720)

___

### CERT

• **CERT**

#### Defined in

[src/generated/api.ts:1699](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1699)

___

### CNAME

• **CNAME**

#### Defined in

[src/generated/api.ts:1667](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1667)

___

### CSYNC

• **CSYNC**

#### Defined in

[src/generated/api.ts:1723](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1723)

___

### DHCID

• **DHCID**

#### Defined in

[src/generated/api.ts:1711](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1711)

___

### DLV

• **DLV**

#### Defined in

[src/generated/api.ts:1751](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1751)

___

### DNAME

• **DNAME**

#### Defined in

[src/generated/api.ts:1701](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1701)

___

### DNSKEY

• **DNSKEY**

#### Defined in

[src/generated/api.ts:1710](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1710)

___

### DOA

• **DOA**

#### Defined in

[src/generated/api.ts:1748](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1748)

___

### DS

• **DS**

#### Defined in

[src/generated/api.ts:1705](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1705)

___

### EID

• **EID**

#### Defined in

[src/generated/api.ts:1693](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1693)

___

### EUI48

• **EUI48**

#### Defined in

[src/generated/api.ts:1736](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1736)

___

### EUI64

• **EUI64**

#### Defined in

[src/generated/api.ts:1737](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1737)

___

### GID

• **GID**

#### Defined in

[src/generated/api.ts:1730](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1730)

___

### GPOS

• **GPOS**

#### Defined in

[src/generated/api.ts:1689](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1689)

___

### HINFO

• **HINFO**

#### Defined in

[src/generated/api.ts:1675](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1675)

___

### HIP

• **HIP**

#### Defined in

[src/generated/api.ts:1716](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1716)

___

### HTTPS

• **HTTPS**

#### Defined in

[src/generated/api.ts:1726](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1726)

___

### IPSECKEY

• **IPSECKEY**

#### Defined in

[src/generated/api.ts:1707](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1707)

___

### ISDN

• **ISDN**

#### Defined in

[src/generated/api.ts:1682](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1682)

___

### IXFR

• **IXFR**

#### Defined in

[src/generated/api.ts:1740](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1740)

___

### KEY

• **KEY**

#### Defined in

[src/generated/api.ts:1687](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1687)

___

### KX

• **KX**

#### Defined in

[src/generated/api.ts:1698](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1698)

___

### L32

• **L32**

#### Defined in

[src/generated/api.ts:1733](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1733)

___

### L64

• **L64**

#### Defined in

[src/generated/api.ts:1734](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1734)

___

### LOC

• **LOC**

#### Defined in

[src/generated/api.ts:1691](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1691)

___

### LP

• **LP**

#### Defined in

[src/generated/api.ts:1735](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1735)

___

### MAILA

• **MAILA**

#### Defined in

[src/generated/api.ts:1743](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1743)

___

### MAILB

• **MAILB**

#### Defined in

[src/generated/api.ts:1742](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1742)

___

### MB

• **MB**

#### Defined in

[src/generated/api.ts:1669](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1669)

___

### MD

• **MD**

#### Defined in

[src/generated/api.ts:1665](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1665)

___

### MF

• **MF**

#### Defined in

[src/generated/api.ts:1666](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1666)

___

### MG

• **MG**

#### Defined in

[src/generated/api.ts:1670](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1670)

___

### MINFO

• **MINFO**

#### Defined in

[src/generated/api.ts:1676](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1676)

___

### MR

• **MR**

#### Defined in

[src/generated/api.ts:1671](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1671)

___

### MX

• **MX**

#### Defined in

[src/generated/api.ts:1677](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1677)

___

### NAPTR

• **NAPTR**

#### Defined in

[src/generated/api.ts:1697](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1697)

___

### NID

• **NID**

#### Defined in

[src/generated/api.ts:1732](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1732)

___

### NIMLOC

• **NIMLOC**

#### Defined in

[src/generated/api.ts:1694](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1694)

___

### NINFO

• **NINFO**

#### Defined in

[src/generated/api.ts:1717](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1717)

___

### NS

• **NS**

#### Defined in

[src/generated/api.ts:1664](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1664)

___

### NSAP

• **NSAP**

#### Defined in

[src/generated/api.ts:1684](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1684)

___

### NSAPPTR

• **NSAPPTR**

#### Defined in

[src/generated/api.ts:1685](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1685)

___

### NSEC

• **NSEC**

#### Defined in

[src/generated/api.ts:1709](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1709)

___

### NSEC3

• **NSEC3**

#### Defined in

[src/generated/api.ts:1712](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1712)

___

### NSEC3PARAM

• **NSEC3PARAM**

#### Defined in

[src/generated/api.ts:1713](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1713)

___

### NULL

• **NULL**

#### Defined in

[src/generated/api.ts:1672](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1672)

___

### NXT

• **NXT**

#### Defined in

[src/generated/api.ts:1692](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1692)

___

### OPENPGPKEY

• **OPENPGPKEY**

#### Defined in

[src/generated/api.ts:1722](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1722)

___

### OPT

• **OPT**

#### Defined in

[src/generated/api.ts:1703](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1703)

___

### PTR

• **PTR**

#### Defined in

[src/generated/api.ts:1674](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1674)

___

### PX

• **PX**

#### Defined in

[src/generated/api.ts:1688](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1688)

___

### RKEY

• **RKEY**

#### Defined in

[src/generated/api.ts:1718](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1718)

___

### RP

• **RP**

#### Defined in

[src/generated/api.ts:1679](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1679)

___

### RRSIG

• **RRSIG**

#### Defined in

[src/generated/api.ts:1708](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1708)

___

### RT

• **RT**

#### Defined in

[src/generated/api.ts:1683](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1683)

___

### SIG

• **SIG**

#### Defined in

[src/generated/api.ts:1686](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1686)

___

### SINK

• **SINK**

#### Defined in

[src/generated/api.ts:1702](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1702)

___

### SMIMEA

• **SMIMEA**

#### Defined in

[src/generated/api.ts:1715](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1715)

___

### SOA

• **SOA**

#### Defined in

[src/generated/api.ts:1668](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1668)

___

### SPF

• **SPF**

#### Defined in

[src/generated/api.ts:1727](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1727)

___

### SRV

• **SRV**

#### Defined in

[src/generated/api.ts:1695](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1695)

___

### SSHFP

• **SSHFP**

#### Defined in

[src/generated/api.ts:1706](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1706)

___

### SVCB

• **SVCB**

#### Defined in

[src/generated/api.ts:1725](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1725)

___

### TA

• **TA**

#### Defined in

[src/generated/api.ts:1750](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1750)

___

### TALINK

• **TALINK**

#### Defined in

[src/generated/api.ts:1719](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1719)

___

### TKEY

• **TKEY**

#### Defined in

[src/generated/api.ts:1738](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1738)

___

### TLSA

• **TLSA**

#### Defined in

[src/generated/api.ts:1714](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1714)

___

### TSIG

• **TSIG**

#### Defined in

[src/generated/api.ts:1739](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1739)

___

### TXT

• **TXT**

#### Defined in

[src/generated/api.ts:1678](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1678)

___

### UID

• **UID**

#### Defined in

[src/generated/api.ts:1729](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1729)

___

### UINFO

• **UINFO**

#### Defined in

[src/generated/api.ts:1728](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1728)

___

### UNSPEC

• **UNSPEC**

#### Defined in

[src/generated/api.ts:1731](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1731)

___

### URI

• **URI**

#### Defined in

[src/generated/api.ts:1745](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1745)

___

### WKS

• **WKS**

#### Defined in

[src/generated/api.ts:1673](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1673)

___

### X25

• **X25**

#### Defined in

[src/generated/api.ts:1681](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1681)

___

### ZONEMD

• **ZONEMD**

#### Defined in

[src/generated/api.ts:1724](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L1724)
