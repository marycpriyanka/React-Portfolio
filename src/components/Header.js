import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";

export default function Header() {
    useEffect(() => {
        const nameElement = document.getElementsByTagName("h1")[0];
        const hamburgerLinks = document.getElementById("myLinks");
        const navigationLinks = $("header nav ul li a");
        const hamburger = document.getElementById("hamburger");

        showName("Priyanka Mary Christine", 0);

        // Displays the name letter by letter with a small delay.
        function showName(myName, index) {
            if (index < myName.length) {
                nameElement.append(myName[index++]);
                setTimeout(function () { showName(myName, index); }, 400);
            }
        }

        /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
        function showOrHideNavigationLinks() {
            if (hamburgerLinks.style.display === "block") {
                hamburgerLinks.style.display = "none";
            }
            else {
                hamburgerLinks.style.display = "block";
            }
        }

        // Hide the hamburger navigation links if displayed on larger screens
        function hideNavigationLinks() {
            if (window.innerWidth > 425) {
                if (hamburgerLinks.style.display === "block") {
                    hamburgerLinks.style.display = "none";
                }
            }
        }

        // This helps to display the sections below the sticky header without hiding when we click on navigation links in hamburger menu.
        function addPaddingToSectionMobile(event) {
            const element = event.target;
            if (element.matches("a")) {
                const link = element.getAttribute("href");
                $(".section").css("padding", "2%");
                if (link === "#about" || link === "#work")
                    $(`${link}`).css("padding-top", "60%");
            }
        }

        // This helps to display the sections below the sticky header without hiding when we click on navigation links.
        function addPaddingToSection(event) {
            const element = event.target;
            const link = element.getAttribute("href");

            $(".section").css("padding", "2%");
            if (link === "#about" || link === "#work")
                $(`${link}`).css("padding-top", "6%");
        }

        // Event listeners
        window.addEventListener("resize", hideNavigationLinks);
        hamburgerLinks.addEventListener("click", addPaddingToSectionMobile);
        navigationLinks.on("click", addPaddingToSection);
        hamburger.addEventListener("click", showOrHideNavigationLinks);
    }, [])

    return (
        <header>
            <h1></h1>
            <nav>
                <ul>
                    <li><Link to="/">ABOUT ME</Link></li>
                    <li><Link to="/work">PORTFOLIO</Link></li>
                    <li><Link to="/contact">CONTACT ME</Link></li>
                    <li><Link to="/resume">RESUME</Link></li>
                </ul>
                {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
                <a id="hamburger" href="javascript:void(0);" class="icon">
                    <i class="fa fa-bars"></i>
                </a>
            </nav>
            {/* Navigation links (hidden by default) */}
            <div id="myLinks">
                <ul>
                    <li><Link to="/">ABOUT ME</Link></li>
                    <li><Link to="/work">PORTFOLIO</Link></li>
                    <li><Link to="/contact">CONTACT ME</Link></li>
                    <li><Link to="/resume">RESUME</Link></li>
                </ul>
            </div>
        </header>
    );
}




