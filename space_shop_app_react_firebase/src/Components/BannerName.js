import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        You have <span>{`${currency}${discount}`}</span>{" "}
        on your account
      </p>
      <a href={more}>Learn More</a>
    </div>
  );
}

export default BannerName;