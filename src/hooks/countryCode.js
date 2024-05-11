import React, { useEffect, useState } from "react";

export default function useCountryCode(currency){
    const [code,setCode] = useState(null);
    useEffect(()=>{
        const countryList = {
            AED: "AE",
            AFN: "AF",
            XCD: "AG",
            ALL: "AL",
            AMD: "AM",
            ANG: "AN",
            AOA: "AO",
            AQD: "AQ",
            ARS: "AR",
            AUD: "AU",
            AZN: "AZ",
            BAM: "BA",
            BBD: "BB",
            BDT: "BD",
            BEF: "BE",
            BGN: "BG",
            BHD: "BH",
            BIF: "BI",
            BMD: "BM",
            BND: "BN",
            BOB: "BO",
            BRL: "BR",
            BSD: "BS",
            NOK: "NO",
            BWP: "BW",
            BYR: "BY",
            BZD: "BZ",
            CAD: "CA",
            CDF: "CD",
            XAF: "CF",
            CHF: "CH",
            CLP: "CL",
            CNY: "CN",
            COP: "CO",
            CRC: "CR",
            CUP: "CU",
            CVE: "CV",
            CYP: "CY",
            CZK: "CZ",
            DJF: "DJ",
            DKK: "DK",
            DOP: "DO",
            DZD: "DZ",
            ECS: "EC",
            EEK: "EE",
            EGP: "EG",
            ETB: "ET",
            EUR: "FR",
            FJD: "FJ",
            FKP: "FK",
            GBP: "GB",
            GEL: "GE",
            GGP: "GG",
            GHS: "GH",
            GIP: "GI",
            GMD: "GM",
            GNF: "GN",
            GTQ: "GT",
            GYD: "GY",
            HKD: "HK",
            HNL: "HN",
            HRK: "HR",
            HTG: "HT",
            HUF: "HU",
            IDR: "ID",
            ILS: "IL",
            INR: "IN",
            IQD: "IQ",
            IRR: "IR",
            ISK: "IS",
            JMD: "JM",
            JOD: "JO",
            JPY: "JP",
            KES: "KE",
            KGS: "KG",
            KHR: "KH",
            KMF: "KM",
            KPW: "KP",
            KRW: "KR",
            KWD: "KW",
            KYD: "KY",
            KZT: "KZ",
            LAK: "LA",
            LBP: "LB",
            LKR: "LK",
            LRD: "LR",
            LSL: "LS",
            LTL: "LT",
            LVL: "LV",
            LYD: "LY",
            MGA: "MG",
            MKD: "MK",
            MMK: "MM",
            MNT: "MN",
            MUR: "MU",
            MVR: "MV",
            MXN: "MX",
            MYR: "MY",
            MZN: "MZ",
            NAD: "NA",
            NGN: "NG",
            NIO: "NI",
            NPR: "NP",
            NZD: "NZ",
            OMR: "OM",
            PAB: "PA",
            PEN: "PE",
            PHP: "PH",
            PKR: "PK",
            PLN: "PL",
            PYG: "PY",
            QAR: "QA",
            RON: "RO",
            RSD: "RS",
            RUB: "RU",
            RWF: "RW",
            SAR: "SA",
            SBD: "SB",
            SCR: "SC",
            SDG: "SD",
            SEK: "SE",
            SGD: "SG",
            SKK: "SK",
            SOS: "SO",
            SRD: "SR",
            SVC: "SV",
            SYP: "SY",
            THB: "TH",
            TJS: "TJ",
            TND: "TN",
            TRY: "TR",
            TTD: "TT",
            TWD: "TW",
            UAH: "UA",
            UGX: "UG",
            USD: "US",
            UYU: "UY",
            UZS: "UZ",
            VEF: "VE",
            VND: "VN",
            YER: "YE",
            ZAR: "ZA",
            ZWD: "ZW",
          };
          setCode(countryList[currency]);

    },[currency])
    return code;
}