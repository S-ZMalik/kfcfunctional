import React, { useEffect, useRef, useState } from "react";

function ExploreHeader() {
  const [activeId, setActiveId] = useState("");

  const navbarRef = useRef(null);

 useEffect(() => {
  const handleScroll = () => {
    if(navbarRef.current) {
      navbarRef.current.scrollLeft = window.scrollY - 11500;
    }
  }

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
 }, [])

 
  useEffect(() => {
    function handleScrollFunc() {
      const sectionsAllId = document.querySelectorAll("div[id]");
      let currentSection = "";

      sectionsAllId.forEach((id) => {
        const sectionTop = id.offsetTop;
        const sectionHeight = id.clientHeight + 550;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = id.getAttribute("id");
        }
      });

      setActiveId(currentSection);
    }

    window.addEventListener("scroll", handleScrollFunc);

    return () => {
      window.removeEventListener("scroll", handleScrollFunc);
    };
  }, []);

  return (
    <div className="explore-header container" ref={navbarRef}>
      <nav className="explore-navbar">
        <ul className="explore-ul">
          <li className="explore-li">
            <a
              href="#section1"
              className={activeId === "section1" ? "active-link" : " "}
            >
              Everyday Value
            </a>
          </li>
          <li className="explore-li">
            <a
              href="#section2"
              className={activeId === "section2" ? "active-link" : " "}
            >
              Ala-Cate-&-Combos
            </a>
          </li>
          <li className="explore-li">
            <a
              href="#section3"
              className={activeId === "section3" ? "active-link" : " "}
            >
              Promotion
            </a>
          </li>
          <li className="explore-li">
            <a
              href="#section4"
              className={activeId === "section4" ? "active-link" : " "}
            >
              Signature-Boxes
            </a>
          </li>
          <li className="explore-li">
            <a
              href="#section5"
              className={activeId === "section5" ? "active-link" : " "}
            >
              Sharing
            </a>
          </li>
          <li className="explore-li">
            <a
              href="#section6"
              className={activeId === "section6" ? "active-link" : " "}
            >
              Snacks-&-Beverages
            </a>
          </li>
          <li className="explore-li">
            <a
              href="#section7"
              className={activeId === "section7" ? "active-link" : " "}
            >
              Midnight (Start at 12 am)
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ExploreHeader;
