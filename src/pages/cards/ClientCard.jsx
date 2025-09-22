




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ClientCard2 from "./ClientCard2";



// const cardData = [
//   {
//     id: 1,
//     status: "Active",
//     type: "CREDIT CARD",
//     bank: "NeoBank",
//     title: "Neo Platinum Rewards",
//     number: "4111 1111 1111 1111",
//     validThru: "12/28",
//     availableLimit: "₹50,000.00",
//     annualFee: "₹99.99",
//     interestRate: "18.99% p.a.",
//     features:
//       "5x points on dining and travel, 2x points on all other purchases, complimentary airport lounge access, fraud protection.",
//     bgColor: "linear-gradient(135deg,#9b2eff,#6a00f4)"
//   },
//   {
//     id: 2,
//     status: "Active",
//     type: "DEBIT CARD",
//     bank: "NeoBank",
//     title: "Everyday Savings Debit",
//     number: "4000 0566 5566 5556",
//     validThru: "12/28",
//     availableLimit: "₹50,000.00",
//     annualFee: "Zero",
//     interestRate: "",
//     features:
//       "Zero annual fee, free ATM withdrawals at partner banks, instant transaction alerts, contactless payment.",
//     bgColor: "linear-gradient(135deg,#007bff,#004aad)"
//   },
//   {
//     id: 3,
//     status: "Active",
//     type: "CREDIT CARD",
//     bank: "NeoBank",
//     title: "Global Explorer Credit",
//     number: "5555 4444 3333 1111",
//     validThru: "12/28",
//     availableLimit: "₹50,000.00",
//     annualFee: "₹149.00",
//     interestRate: "16.5% p.a.",
//     features:
//       "No foreign transaction fees, travel insurance coverage, complimentary hotel upgrades, car rental insurance.",
//     bgColor: "linear-gradient(135deg,#9b2eff,#6a00f4)"
//   },
//     {
//     id: 4,
//     status: "Active",
//     type: "CREDIT CARD",
//     bank: "NeoBank",
//     title: "Global Explorer Credit",
//     number: "5555 4444 3333 1111",
//     validThru: "12/28",
//     availableLimit: "₹50,000.00",
//     annualFee: "₹149.00",
//     interestRate: "16.5% p.a.",
//     features:
//       "No foreign transaction fees, travel insurance coverage, complimentary hotel upgrades, car rental insurance.",
//     bgColor: "linear-gradient(135deg,#9b2eff,#6a00f4)"
//   }
// ];

// export default function ClientCard() {
//   const navigate=useNavigate();

//   const [showNumbers, setShowNumbers] = useState(false);
//   const [openSettingsFor, setOpenSettingsFor] = useState(null);

//   const toggleSettings = (index) =>
//     setOpenSettingsFor(openSettingsFor === index ? null : index);

//   const handleSettingsAction = (card, action) => {
  
//     alert(`${action} — ${card.title}`);
//     setOpenSettingsFor(null);
//   };

//   const getMaskedNumber = (num) => {
 
//     const plain = num.replace(/\s+/g, "");
//     const last4 = plain.slice(-4);
//     return `•••• •••• •••• ${last4}`;
//   };

//   const getFormattedFull = (num) => {
//     const plain = num.replace(/\s+/g, "");
 
//     return plain.match(/.{1,4}/g)?.join(" ") ?? num;
//   };

//   return (
//     <div className="container-fluid my-4 px-md-5">
      
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h3 className="fw-bold">My Cards</h3>
//           <p className="text-muted mb-0 fw-bold">Manage your debit and credit cards</p>
//         </div>

//         <div className="d-flex align-items-center gap-2">
//           <button
//             className="btn btn-outline-secondary d-flex align-items-center gap-2"
//             onClick={() => setShowNumbers(!showNumbers)}
//             aria-pressed={showNumbers}
//             title={showNumbers ? "Hide numbers" : "Show numbers"}
//           >
         
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//             >
//               <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z" />
//               <path d="M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" fill="#fff" />
//             </svg>
//             <span>{showNumbers ? "Hide Numbers" : "Show Numbers"}</span>
//           </button>

//           <button
//             className="btn text-white fw-bold"
//             style={{ backgroundColor: "#950606" }}
//             onClick={()=>navigate('/applynewcard')}
//           >
//             + Apply for New Card
//           </button>
//         </div>

//       </div>


//       <div className="row">
//         {cardData.map((card, index) => (
//           <div key={card.id} className="col-md-4 mb-4 d-flex">
          
//             <div className="card shadow-sm border-0 rounded-4 flex-fill d-flex flex-column client-card  ">
//               <div className="card-body d-flex flex-column border px-4 py-3  rounded-4 ">
              
//                 <div className="d-flex justify-content-between align-items-start mb-2">
//                   <span className="badge bg-light text-success px-3 py-2 fw-bold">
//                     {card.status}
//                   </span>
//                   <small className="text-muted fw-bold">{card.type}</small>
//                 </div>

              
//                 <div
//                   className="card-preview text-white mb-3 position-relative p-3 rounded-3"
//                   style={{
//                     background: card.bgColor,
//                     minHeight: 150,
//                     overflow: "hidden"
//                   }}
//                 >
//                   <div>
//                     <h6 className="mb-1">{card.bank}</h6>
//                     <h5 className="fw-bold mb-2">{card.title}</h5>
//                   </div>

              
//                   <p className="mt-3 mb-2 fs-5 fw-semibold">
//                     {showNumbers ? getFormattedFull(card.number) : getMaskedNumber(card.number)}
//                   </p>

//                   <div className="d-flex justify-content-between small">
//                     <div>
//                       <div className="text-start small fw-bold">Valid Thru</div>
//                       <div className="small fw-bold">{card.validThru}</div>
//                     </div>
//                     <div className="text-end">
//                       <div className="small fw-bold">CVV</div>
//                       <div className="small fw-bold">•••</div>
//                     </div>
//                   </div>

               
//                   <div
//                     className="card-icon position-absolute"
//                     style={{ top: 14, right: 14 }}
//                     aria-hidden
//                   >
                 
//                     <svg
//                       width="42"
//                       height="28"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect x="1" y="4" width="22" height="16" rx="2" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
//                       <rect x="3" y="8" width="6" height="2" rx="0.6" fill="rgba(255,255,255,0.9)" />
//                     </svg>
//                   </div>
//                 </div>

        
//                 <p className="mb-1 text-muted small">Available Limit</p>
//                 <h6 className="fw-bold mb-2" style={{ color: "#950606" }}>
//                   {card.availableLimit}
//                 </h6>

//                 {card.annualFee && card.annualFee !== "Zero" && (
//                   <p className="mb-1 d-flex justify-content-between">
//                     <span className="text-muted small">Annual Fee</span>
//                     <span className="ms-2">{card.annualFee}</span>
//                   </p>
//                 )}

//                 {card.interestRate && (
//                   <p className="mb-1 d-flex justify-content-between">
//                     <span className="text-muted small">Interest Rate</span>
//                     <span className="ms-2">{card.interestRate}</span>
//                   </p>
//                 )}

//                 <div className="mb-2">
//                   <div className="text-muted small mb-1">Key Features</div>
//                   <div className="small">{card.features}</div>
//                 </div>

//                 <div className="mt-auto">
//                   <div className="d-flex gap-2 align-items-center">
//                     <button
//                       className="btn text-white flex-fill fw-bold"
//                       style={{ backgroundColor: "#950606" }}
//                     >
//                       Manage
//                     </button>

//                     <div className="position-relative">
//                       <button
//                         className="btn btn-outline-secondary rounded-circle p-2"
//                         onClick={() => toggleSettings(index)}
//                         aria-label="Card settings"
//                         title="Card settings"
//                         style={{ width: 40, height: 40 }}
//                       >
                   
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.4" />
//                           <path d="M19.4 15a1 1 0 0 0 .2 1.1l.6.6a1 1 0 0 1-1.4 1.4l-.6-.6a1 1 0 0 0-1.1-.2 6.8 6.8 0 0 1-1.5.9 1 1 0 0 0-.6 1.1v.8a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-.8a1 1 0 0 0-.6-1.1 6.8 6.8 0 0 1-1.5-.9 1 1 0 0 0-1.1.2l-.6.6a1 1 0 1 1-1.4-1.4l.6-.6a1 1 0 0 0 .2-1.1 6.8 6.8 0 0 1-.9-1.5 1 1 0 0 0-1.1-.6h-.8a1 1 0 0 1-1-1V9.4a1 1 0 0 1 1-1h.8a1 1 0 0 0 1.1-.6 6.8 6.8 0 0 1 .9-1.5 1 1 0 0 0-.2-1.1L4.1 3.6A1 1 0 1 1 5.5 2.2l.6.6a1 1 0 0 0 1.1.2c.5-.2 1-.4 1.5-.6a1 1 0 0 0 .6-1.1V.8a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v.8a1 1 0 0 0 .6 1.1c.5.2 1 .4 1.5.6a1 1 0 0 0 1.1-.2l.6-.6A1 1 0 1 1 18.4 2.3l-.6.6a1 1 0 0 0-.2 1.1c.2.5.4 1 .6 1.5a1 1 0 0 0 1.1.6h.8a1 1 0 0 1 1 1v1.2a1 1 0 0 1-1 1h-.8a1 1 0 0 0-1.1.6c-.2.5-.4 1-.6 1.5a1 1 0 0 0 .2 1.1l.6.6a1 1 0 0 1-1.4 1.4l-.6-.6a1 1 0 0 0-1.1-.2c-.5.2-1 .4-1.5.6a1 1 0 0 0-.6 1.1v.8a1 1 0 0 1-1 1H9.8a1 1 0 0 1-1-1v-.8a1 1 0 0 0-.6-1.1c-.5-.2-1-.4-1.5-.6a1 1 0 0 0-1.1.2l-.6.6A1 1 0 0 1 2.2 18.4l.6-.6a1 1 0 0 0 1.1-.2c.2-.5.4-1 .6-1.5a1 1 0 0 0-.2-1.1l-.6-.6A1 1 0 0 1 3.9 10l.6.6c.2.5.4 1 .6 1.5a1 1 0 0 0 1.1.6h.8a1 1 0 0 1 1 1v1.2a1 1 0 0 1-1 1H7.6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
//                         </svg>
//                       </button>

//                       {openSettingsFor === index && (
//                         <div
//                           className="card position-absolute"
//                           style={{
//                             right: 0,
//                             bottom: 48,
//                             width: 210,
//                             zIndex: 60,
//                             boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)"
//                           }}
//                         >
//                           <div className="list-group list-group-flush">
//                             <button
//                               className="list-group-item list-group-item-action"
//                               onClick={() => handleSettingsAction(card, "Block Card")}
//                             >
//                               Block / Unblock Card
//                             </button>
//                             <button
//                               className="list-group-item list-group-item-action"
//                               onClick={() => handleSettingsAction(card, "Set Limit")}
//                             >
//                               Set Spending Limit
//                             </button>
//                             <button
//                               className="list-group-item list-group-item-action"
//                               onClick={() => handleSettingsAction(card, "Change PIN")}
//                             >
//                               Change PIN
//                             </button>
//                             <button
//                               className="list-group-item list-group-item-action"
//                               onClick={() => handleSettingsAction(card, "Report Lost")}
//                             >
//                               Report Lost / Request Replacement
//                             </button>
//                             <button
//                               className="list-group-item list-group-item-action"
//                               onClick={() => handleSettingsAction(card, "View Statements")}
//                             >
//                               View e-Statements
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     <ClientCard2/>

      

//       <style jsx>{`
//         .client-card { min-height: 520px; }
//         .card-preview { border-radius: 12px; }
//         .card-preview h5 { font-size: 1.05rem; }
//         .card-preview p { letter-spacing: 1px; }
//         /* small responsive tweak */
//         @media (max-width: 767px) {
//           .client-card { min-height: auto; }
//           .card-preview { min-height: 140px; }
//         }
//       `}</style>

      
//     </div>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientCard2 from "./ClientCard2";
import CardImage from "../../assets/card1.png"; // <-- your uploaded image here
import CardImage2 from "../../assets/card2.png";

export default function ClientCard() {
  const navigate = useNavigate();

  // Cards stored in state instead of hardcoding
  const [cards, setCards] = useState([
    {
      id: 1,
      status: "Active",
      type: "CREDIT CARD",
      bank: "NeoBank",
      // title: "Neo Platinum Rewards",
      // number: "4111111111111111",
      // validThru: "12/28",
      availableLimit: "₹50,000.00",
      annualFee: "₹99.99",
      interestRate: "18.99% p.a.",
      features:
        "5x points on dining and travel, 2x points on all other purchases, complimentary airport lounge access, fraud protection.",
      showNumber: false,
      image: CardImage, 
    },
    {
      id: 2,
      status: "Active",
      type: "CREDIT CARD",
      bank: "NeoBank",
      // title: "Neo Platinum Rewasrds",
      // number: "4111111111111111",
      // validThru: "12/28",
      availableLimit: "₹50,000.00",
      annualFee: "₹99.99",
      interestRate: "18.99% p.a.",
      features:
        "5x points on dining and travel, 2x points on all other purchases, complimentary airport lounge access, fraud protection.",
      showNumber: false, // per-card visibility
      image: CardImage2, // use image instead of bgColor
    },
   
   {
      id: 3,
      status: "Active",
      type: "CREDIT CARD",
      bank: "NeoBank",
      // title: "Neo Platinum Rewasrds",
      // number: "4111111111111111",
      // validThru: "12/28",
      availableLimit: "₹50,000.00",
      annualFee: "₹99.99",
      interestRate: "18.99% p.a.",
      features:
        "5x points on dining and travel, 2x points on all other purchases, complimentary airport lounge access, fraud protection.",
      showNumber: false, // per-card visibility
      image: CardImage, // use image instead of bgColor
    },
  ]);

  // Toggle card number visibility
  const toggleCardNumber = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, showNumber: !card.showNumber } : card
      )
    );
  };

  // Masked / formatted numbers
  const getMaskedNumber = (num) => {
    const plain = num.replace(/\s+/g, "");
    const last4 = plain.slice(-4);
    return `•••• •••• •••• ${last4}`;
  };
  const getFormattedFull = (num) => {
    const plain = num.replace(/\s+/g, "");
    return plain.match(/.{1,4}/g)?.join(" ") ?? num;
  };

  // Settings menu
  const [openSettingsFor, setOpenSettingsFor] = useState(null);
  const toggleSettings = (index) =>
    setOpenSettingsFor(openSettingsFor === index ? null : index);

  const handleSettingsAction = (card, action) => {
    alert(`${action} — ${card.title}`);
    setOpenSettingsFor(null);
  };

  // Add card page
  const handleAddCard = () => {
    navigate("/applynewcard");
  };

  return (
    <div className="container-fluid my-4 px-md-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold">My Cards</h3>
          <p className="text-muted mb-0 fw-bold">
            Manage your debit and credit cards
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn text-white fw-bold"
            style={{ backgroundColor: "#950606" }}
            onClick={handleAddCard}
          >
            + Apply for New Card
          </button>
        </div>
      </div>

      <div className="row">
        {cards.map((card, index) => (
          <div key={card.id} className="col-md-4 mb-4 d-flex">
            <div className="card shadow-sm border-0 rounded-4 flex-fill d-flex flex-column client-card">
              <div className="card-body d-flex flex-column border px-4 py-3 rounded-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge bg-light text-success px-3 py-2 fw-bold">
                    {card.status}
                  </span>
                  <small className="text-muted fw-bold">{card.type}</small>
                </div>

                {/* Card Preview using Image */}
                <div
                  className="card-preview mb-3 position-relative rounded-3 overflow-hidden"
                  style={{ minHeight: 180 }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 p-3 text-white d-flex flex-column justify-content-end"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    {/* <h6 className="mb-1">{card.bank}</h6> */}
                    {/* <h5 className="fw-bold mb-2">{card.title}</h5> */}

                    {/* <p className="mt-2 mb-2 fs-5 fw-semibold">
                      {card.showNumber
                        ? getFormattedFull(card.number)
                        : getMaskedNumber(card.number)}
                    </p> */}

                    {/* <div className="d-flex justify-content-between small"> */}
                      {/* <div>
                        <div className="text-start small fw-bold">Valid Thru</div>
                        <div className="small fw-bold">{card.validThru}</div>
                      </div> */}
                      {/* <div className="text-end">
                        <div className="small fw-bold">CVV</div>
                        <div className="small fw-bold">•••</div>
                      </div> */}
                    {/* </div> */}
                  </div>

                  {/* Eye Icon Toggle */}
                  <div
                    className="position-absolute"
                    style={{ top: 14, right: 14, cursor: "pointer" }}
                    onClick={() => toggleCardNumber(card.id)}
                    title={
                      card.showNumber ? "Hide card number" : "Show card number"
                    }
                  >
                    {card.showNumber ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z" />
                        <path
                          d="M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"
                          fill="#950606"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C14.351 10.221 15 9 15 9s-3-5.5-8-5.5c-1.48 0-2.76.348-3.82.93l.92.92A6.5 6.5 0 0 1 8 3.5C12.985 3.5 16 9 16 9s-.65 1.221-1.641 2.238l-.999-1zM2.646 2.646l-.708.708 11.708 11.708.708-.708L2.646 2.646z" />
                      </svg>
                    )}
                  </div>
                </div>

                <p className="mb-1 text-muted small">Available Limit</p>
                <h6 className="fw-bold mb-2" style={{ color: "#950606" }}>
                  {card.availableLimit}
                </h6>

                {card.annualFee && card.annualFee !== "Zero" && (
                  <p className="mb-1 d-flex justify-content-between">
                    <span className="text-muted small">Annual Fee</span>
                    <span className="ms-2">{card.annualFee}</span>
                  </p>
                )}

                {card.interestRate && (
                  <p className="mb-1 d-flex justify-content-between">
                    <span className="text-muted small">Interest Rate</span>
                    <span className="ms-2">{card.interestRate}</span>
                  </p>
                )}

                <div className="mb-2">
                  <div className="text-muted small mb-1">Key Features</div>
                  <div className="small">{card.features}</div>
                </div>

                <div className="mt-auto">
                  <div className="d-flex gap-2 align-items-center">
                    <button
                      className="btn text-white flex-fill fw-bold"
                      style={{ backgroundColor: "#950606" }}
                    >
                      Manage
                    </button>

                    {/* Settings */}
                    <div className="position-relative">
                      <button
                        className="btn btn-outline-secondary rounded-circle p-2"
                        onClick={() => toggleSettings(index)}
                        aria-label="Card settings"
                        title="Card settings"
                        style={{ width: 40, height: 40 }}
                      >
                        ⚙️
                      </button>

                      {openSettingsFor === index && (
                        <div
                          className="card position-absolute"
                          style={{
                            right: 0,
                            bottom: 48,
                            width: 210,
                            zIndex: 60,
                            boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                          }}
                        >
                          <div className="list-group list-group-flush">
                            <button
                              className="list-group-item list-group-item-action"
                              onClick={() =>
                                handleSettingsAction(card, "Block Card")
                              }
                            >
                              Block / Unblock Card
                            </button>
                            <button
                              className="list-group-item list-group-item-action"
                              onClick={() =>
                                handleSettingsAction(card, "Set Limit")
                              }
                            >
                              Set Spending Limit
                            </button>
                            <button
                              className="list-group-item list-group-item-action"
                              onClick={() =>
                                handleSettingsAction(card, "Change PIN")
                              }
                            >
                              Change PIN
                            </button>
                            <button
                              className="list-group-item list-group-item-action"
                              onClick={() =>
                                handleSettingsAction(card, "Report Lost")
                              }
                            >
                              Report Lost / Request Replacement
                            </button>
                            <button
                              className="list-group-item list-group-item-action"
                              onClick={() =>
                                handleSettingsAction(card, "View Statements")
                              }
                            >
                              View e-Statements
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ClientCard2 />

      <style jsx>{`
        .client-card {
          min-height: 520px;
        }
        .card-preview {
          border-radius: 12px;
        }
        .card-preview h5 {
          font-size: 1.05rem;
        }
        .card-preview p {
          letter-spacing: 1px;
        }
        @media (max-width: 767px) {
          .client-card {
            min-height: auto;
          }
          .card-preview {
            min-height: 140px;
          }
        }
      `}</style>
    </div>
  );
}
