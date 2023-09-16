interface Amount {
  amount: number;
}

// const FormattedPrice = ({ amount }: Amount) => {
//   const formattedAmount = new Number(amount).toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//     maximumFractionDigits: 2,
//   });
//   return <span>{formattedAmount}</span>;
// };

const FormattedPrice = ({ amount }: Amount) => {
  const formattedAmount = new Number(amount).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};


export default FormattedPrice;
