import React from "react";

function DebitCard() {
  return (
    <div className="cardGroup">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/space-shop-6f73c.appspot.com/o/Images%2FVisa.png?alt=media&token=ee5c265a-171c-4c7a-a1f5-354c165db34d"
        alt=""
        className="cardLogo"
      />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/space-shop-6f73c.appspot.com/o/Images%2Fchip.png?alt=media&token=eeefed68-e984-47b3-ae9c-e0b29acb871d"
        alt=""
        className="cardChip"
      />

      <div className="card_number">1234 567 8920 3200</div>
      <div className="card_name">Killian GR</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;