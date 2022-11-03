const originalData = [
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-11-19T13:44:26+07:00",
    reference: "",
    amount: 4200000,
    transaction_id: "RY7SF5XTXUFW",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-11-18T12:13:14+07:00",
    reference: "",
    amount: 5500000,
    transaction_id: "BGVXK4DM6AHE",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-10-18T11:40:09+07:00",
    reference: "",
    amount: 5200000,
    transaction_id: "6CKNDWE3QCYR",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-10-18T11:37:26+07:00",
    reference: "",
    amount: 6390000,
    transaction_id: "KZFQYWGGW4DP",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-09-18T11:17:58+07:00",
    reference: "",
    amount: 100000,
    transaction_id: "C49GZVXNZC64",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-09-18T10:43:48+07:00",
    reference: "",
    amount: 3550000,
    transaction_id: "BSFRH5JXAV5L",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-10-18T09:45:28+07:00",
    reference: "",
    amount: 3650000,
    transaction_id: "9YWUJK35MQKC",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-08-18T09:24:25+07:00",
    reference: "",
    amount: 5950000,
    transaction_id: "JGSVHFNUGQ9P",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-10-18T09:22:41+07:00",
    reference: "",
    amount: 100000,
    transaction_id: "BV72ZXHRPUVH",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "Testing Aspire Debit",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-10-17T11:08:12+07:00",
    reference: "",
    amount: 14400000,
    transaction_id: "XLTSRCVZMRVB",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "Testing Aspire Debit",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-10-17T10:53:26+07:00",
    reference: "",
    amount: 100000,
    transaction_id: "LCSXZYGP5WWE",
    merchant: "Gojek",
    category: "Travel",
  },
  {
    school_id: "6bf8539b-2468-44bf-a06c-eb92484a5695",
    card_id: "5829ada0-cdc0-40d0-888e-4c7c503bfa7e",
    idn_code: "106425",
    card_holder_id: "e459bd21-bbb7-4b9a-acc3-09686af37a70",
    transaction_date: "2022-12-17T10:51:18+07:00",
    reference: "",
    amount: 100000,
    transaction_id: "UDEYVB2FCW95",
    merchant: "Gojek",
    category: "Travel",
  },
];

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// Helper function, given a JS Date, it will return the name.
// Example: "November"
function getMonthName(date) {
  return monthNames[date.getMonth()];
}

// Helper function, given a datestring, eg., '2022-10-17T21:07:05+07:00',
// it will return month and year with format: ["November", "2022"]
function getMonthAndYear(datestring) {
  const date = new Date(datestring);
  const currYear = date.getFullYear();
  const currMonth = getMonthName(date);
  return [currMonth, currYear];
}

// Helper function to transform Logistic Card transaction.
// Given array of transactions, it will return a monthly-grouped transactions.
// Return with shape of :
// const sample = {
//   "2022": [
//      {
//       "month": "Januari",
//       "total_amount": 750000,
//       "transactions": [Trx1, Trx2, Trx3, ...]
//     },
//     {
//       "month": "Februari",
//       "total_amount": 840000,
//       "transactions": [Trx1, Trx2, Trx3, ...]
//     }
//   ]
// }
const transformCardTransactions = (input) => {
  if (!Array.isArray(input)) return {};
  return input
    .sort(
      (a, b) =>
        new Date(a.transaction_date).getTime() -
        new Date(b.transaction_date).getTime()
    )
    .reduce((finalObj, cur) => {
      const [currMonth, currYear] = getMonthAndYear(cur.transaction_date);

      // 3. if year and month already exist:
      if (finalObj[currYear] != null) {
        if (finalObj[currYear].findIndex((el) => el.month === currMonth) > -1) {
          const index = finalObj[currYear].findIndex(
            (el) => el.month === currMonth
          );

          finalObj[currYear][index].total_amount += cur.amount;
          finalObj[currYear][index].transactions.push(cur);
          return finalObj;
        }

        // 2. if year exist, but new month:
        finalObj[currYear].push({
          month: currMonth,
          total_amount: cur.amount,
          transactions: [cur],
        });
        return finalObj;
      }

      // 1. if new year and new month:
      finalObj[currYear] = [
        {
          month: currMonth,
          total_amount: cur.amount,
          transactions: [cur],
        },
      ];
      return finalObj;
    }, {});
};

const groupedData = transformCardTransactions(originalData);

console.log(JSON.stringify(groupedData, null, 2));
