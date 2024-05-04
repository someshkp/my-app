import Image from "next/image";
import facebookIcon from "/public/icons/facebook.png";
import instagramIcon from "/public/icons/instagram.png";
import twitchIcon from "/public/icons/twitch.png";
import twitterIcon from "/public/icons/twitter.png";
import youtubeIcon from "/public/icons/youtube.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="social-links">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className="icons"
          src={facebookIcon}
          alt="facebook-icon"
          width={30}
          height={30}
        />
        <Image
          src={instagramIcon.src}
          className="icons"
          alt="instagram-icon"
          width={30}
          height={30}
        />
        <Image
          src={twitchIcon.src}
          className="icons"
          alt="twitch-icon"
          width={30}
          height={30}
        />
        <Image
          src={twitterIcon.src}
          className="icons"
          alt="twitter-icon"
          width={30}
          height={30}
        />
        <Image
          src={youtubeIcon.src}
          className="icons"
          alt="youtube-icon"
          width={30}
          height={30}
        />
      </div>
      <div className="footer-otherLinks">
        <ul
          className="list-style"
          style={{
            color: "#fff",
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Cookie preferences</li>
          <li>Corporate Informationy</li>
        </ul>

        <ul
          className="list-style"
          style={{
            color: "#fff",
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Cookie preferences</li>
          <li>Corporate Informationy</li>
        </ul>
      </div>
    </div>
  );
}
