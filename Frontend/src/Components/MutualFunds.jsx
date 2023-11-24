// import React, { useState } from 'react';
// import "./MutualFundPage.css"

// const MutualFundPortfolio = () => {
//   const portfolioData = [
//     { id: 1, fUNDNAME: 'Axis Long Term Equity', CATEGORY: 'Tax saving', SIPAMOUNT: 5000, SHARPERATIO: 0.068 },
//     { id: 2, fUNDNAME: 'DSPBR Opportunities', CATEGORY: 'Debt', SIPAMOUNT: 7000, SHARPERATIO: 0.046 },
//     { id: 3, fUNDNAME: 'Mirae Assest Emerging Bluechip', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.048 },
//     { id: 4, fUNDNAME: 'ICICI Pru Short Term Plan', CATEGORY: 'Multi Cap', SIPAMOUNT: 2000, SHARPERATIO: 0.043 },
//     { id:  5, fUNDNAME: 'Principal Emerging Bluechip', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.044 },
//     { id:  6, fUNDNAME: 'JM Short Term', CATEGORY: 'Mid Cap', SIPAMOUNT: 8000, SHARPERATIO: 0.013 },
//     { id:  7, fUNDNAME: 'Tata Dividend Yield', CATEGORY: 'Small Cap', SIPAMOUNT: 6000, SHARPERATIO: 0.043 },
//     { id:  8, fUNDNAME: 'DSP Small Cap', CATEGORY: 'Large Cap', SIPAMOUNT: 3000, SHARPERATIO: 0.023 },
//     { id:  9, fUNDNAME: 'Kotak BlueChip', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
//     { id:  10, fUNDNAME: 'Franklin India Prima', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
//     { id:  11, fUNDNAME: 'HDFC Capital Bulider Value', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
//     { id:  12, fUNDNAME: 'SBI Long Term Equity', CATEGORY: 'Small-cap', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
//     { id:  13, fUNDNAME: 'Reliance Small Cap ', CATEGORY: 'Value', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
//   ];

//   return (
//     <div className="container">
//       <center>
//         <h2  className="text-center"  style={{ color: '#2C3539' }}>Mutual Fund Portfolio:</h2>
//         <table className="table table-hover table-bordered">
        
//           <thead className="table-primary" style={{ width: '80%', margin: 'auto' }}>
//             <tr >
//               <th>ID</th>
//               <th>fUNDNAME</th>
//               <th>CATEGORY</th>
//               <th>SIPAMOUNT</th>
//               <th>SHARPERATIO</th>
//             </tr>
//           </thead>
//           <tbody>
//             {portfolioData.map((fund) => (
//               <tr key={fund.id}   className={fund.id % 2 === 0 ? 'table-secondary' : 'table-info'}>
//                 <td>{fund.id}</td>
//                 <td>{fund.fUNDNAME}</td>
//                 <td>{fund.CATEGORY}</td>
//                 <td>{fund.SIPAMOUNT}</td>
//                 <td>{fund.SHARPERATIO}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </center>
//     </div>
//   );
// };

// const MutualFunds = () => {
//   const [investorName, setInvestorName] = useState('');
//   const [investmentAmount, setInvestmentAmount] = useState('');
//   const [duration, setDuration] = useState('');
//   const [riskTolerance, setRiskTolerance] = useState('');
//   const [investmentGoal, setInvestmentGoal] = useState('');
//   const [result, setResult] = useState(null);

//    const calculateReturns = () => {
//      const returns = investmentAmount * 0.05 * duration;
//      setResult(returns);
//    };

//    const handleSubmit = (e) => {
//      e.preventDefault();
//      calculateReturns();
//    };

//   return (
//     <div className="background-container">
//       <header>
//         {/* <img
//           src="images/infi.jpg"  // Replace "logo.png" with the actual filename of your logo
//           alt="Infinity Wallet Pay"
//           style={{ width: '50px', height: '50px', display: 'block', margin: 'auto' }}
//         /> */}
//         <h2>
//   <marquee behavior="scroll" direction="left">
//     INFINITY WALLET PAY MUTUAL FUNDS  
//   </marquee>
// </h2>
//         <p>
//           Mutual funds are a type of investment vehicle consisting of a
//           portfolio of stocks, bonds, or other securities. They offer a way
//           for investors to pool their money together, providing
//           diversification and professional management. Use this calculator to
//           estimate potential returns based on your investment details.
//           Most mutual funds fall into one of four main categories – money market funds,
//           bond funds, stock funds, and target date funds.
//           Each type has different features, risks, and rewards.
//           A mutual fund is an investment fund that pools money from many investors to purchase securities.
//           The term is typically used in the United States, Canada, and India, while similar structures across the globe include the SICAV in Europe, and the open-ended investment company in the UK.
//         </p>
//       </header>
//       {/* Image */}
//       <div  className="background-container" style={{ alignItems: 'center' }}>
//         <img
//           src="https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/investing-in-MF_Featured.jpg"
//           alt="Graph"
//           style={{ backgroundColor: '#87CEFA' , width: "1000px", marginLeft:"150px" }}
//         />
//         {/* <img
//           src="images/grap.png"
//           alt="Graph"
//           style={{ backgroundColor: '#87CEFA',float:'right', width: "50%", height: '50%' }}
//         /> */}
//       </div>
//       <p>
//         To understand how mutual funds work, let us first understand the concept of NAV (Net Asset Value).
//         NAV per unit is the price at which investors can buy or redeem their mutual fund investments. Investors in mutual funds are allotted units proportional to their investments and this is calculated on the basis of the NAV. For example, if you invest Rs 500 in a mutual fund with an NAV of Rs 10, you will get (500/10), 50 units of the mutual fund.

//         Now, the NAV of the mutual fund changes every day on the basis of the performance of the assets in the mutual fund is invested in.
//         If a mutual fund invests in a particular stock whose price goes up tomorrow, the same will reflect in the NAV of the mutual fund and vice versa.
//         So, in the above example, if the NAV of the mutual fund goes up to Rs 20, then your 50 units that amounted to Rs 500 earlier will now amount to Rs 1000 (500 units x Rs 20). Hence, the mutual fund’s performance is driven by its underlying assets, which generate its returns to investors.
//       </p>

//       {/* Mutual Fund Portfolio Component */}
//       <MutualFundPortfolio />

      
//       {/* <form className="background-container"
//         onSubmit={handleSubmit}
//         style={{ backgroundColor: '#87CEEB', padding: '10px' }}
//       > */}
//        {/* <h2>Fund calculator:</h2>
//         <div>
//           <label>
//             <b> Investor Name:</b>
//             <input
//               type="text"
//               value={investorName}
//               onChange={(e) => setInvestorName(e.target.value)}
//             />
//           </label>
//         </div>
//         <div>
//         <label>
//              <b>Investment Amount ($):</b>
//            <input
//               type="number"
//               value={investmentAmount}
//               onChange={(e) => setInvestmentAmount(e.target.value)} 
//             />
//            </label>
//          </div>
//          <div>
//           <label>
//             <b> Investment Duration (years):</b>
//              <input
//                type="number"
//                value={duration}
//                onChange={(e) => setDuration(e.target.value)}
//             />
//           </label>
//          </div>
//         <div>
//            <label>
//              <b> Risk Tolerance:</b>
//              <select
//                value={riskTolerance}
//                onChange={(e) => setRiskTolerance(e.target.value)}
//              >
//                <option value="low">Low</option>
//                <option value="medium">Medium</option>
//                <option value="high">High</option>
//              </select>
//            </label>
//          </div>
//          <div>
//            <label>
//              <b>Investment Goal:</b>
//              <textarea
//                value={investmentGoal}
//                onChange={(e) => setInvestmentGoal(e.target.value)}
//             />
//           </label>
// </div>
//         <div>
//           <button type="submit"> Calculate Returns </button>
//         </div>
//         {result !== null && (
//           <div>
//             <h2>Projected Returns:</h2>
//             <p>${result}</p>
//           </div>
//         )}
//       </form> */}
//     </div> 
//   );
// };

// export default MutualFunds;
//import "./App.css";
import React from "react";
function MutualFundPage(){
    return(
<section class="pt-2 bg-skyblue">
            <div class="px-12 mx-auto max-w-7xl">
                <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span></span><br /> <span class="block w-full py-22 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-blue-400 lg:inline">Mutual Funds</span> <span></span>
                    </h1>
                    <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                    Mutual funds with superior performance records often falter
                    </p>
 
                </div>
               
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/mutual.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>What is Mutual Funds?</b></h2><p>A mutual fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt. The combined holdings of the mutual fund are known as its portfolio. Investors buy shares in mutual funds.</p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center>
                            <h2><b>Why do people buy mutual funds? </b></h2>
                            <br></br>
                            <br></br><p>Mutual funds are a popular choice among investors because they generally offer the following features:

Professional Management. The fund managers do the research for you. They select the securities and monitor the performance.
Diversification or “Don’t put all your eggs in one basket.” Mutual funds typically invest in a range of companies and industries. This helps to lower your risk if one company fails.</p></center>
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/mutual1.webp" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                    </div>
 
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/mutual2.png" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>What is the ideal amount to start investing in a Mutual Fund?</b></h2><p>A Mutual Fund is not an investment avenue, but a vehicle to access various investment avenues.

Think of it this way. When you go to a restaurant, you have a choice to order a la carte or buffet/thali or a full meal.
Compare the full thali or the meal with a Mutual Fund, whereas individual items you order are the stocks, bonds, etc. A thali makes the choice easy, saves time and also some money.</p></center>
                    </div>
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center>
                            <h2><b>SIP</b></h2>
                            <br></br>
                            <p><b>Benefits of investing in mutual funds via SIP</b></p>
                            <br></br><p>SIP helps you invest in equity funds without having to time the stock market. You invest a fixed amount regularly across stock market levels when you invest in equity funds through the SIP. It helps you buy more equity fund units when the stock markets are crashing and lesser units when markets rise.</p></center>
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/mutual3.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
 
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, }}>
                        {/* Your text content goes here */}
                        <img src="Images/mutual4.jpg" alt="Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
 
 
                    </div>
                    <div style={{ flex: 1, }}>
                        {/* Your image goes here */}
                        <center><h2><b>Power of Compounding</b></h2><p>Power of Compounding helps you magnify your returns over time. It is basically a return on your returns from equity mutual funds. For example, suppose you invest Rs 100 in an equity fund which fetches you returns of 10% per annum. You do not take out your profit from equity funds which is effectively reinvested in the mutual fund and your total corpus is Rs 110. The returns you now earn from the equity fund are on Rs 110 and not Rs 100 which is return on your returns.</p></center>
                    </div>
                </div><br></br>
            </div>
        </section>
    )
}
export default MutualFundPage