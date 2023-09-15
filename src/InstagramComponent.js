import React from "react";

const InstagramLink = () => {
  const instagramUsername = "thehair_reaper"; // Your Instagram username

  // Construct the Instagram URL
  const instagramURL = `https://www.instagram.com/${instagramUsername}`;

  return (
    <div className="mb-4 mt-4">
      <h3 style={{ fontFamily: "Arial, sans-serif" }}>
        Follow Me On{" "}
        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </h3>
      <h3>
        Text Me! <a href="tel:3476755013">(347) 675-5013</a>
      </h3>
    </div>
  );
};

export default InstagramLink;
