import React, { useEffect } from 'react';
import $ from "jquery";

export default function Header() {
    useEffect(() => {
        const interval = setInterval(animatePhoto, 7000);

        // Adds a little animation
        function animatePhoto() {
            console.log($("#priyanka")[0]);
            // Shakes the photo vertically
            $("#priyanka").animate({}, 1000).effect("bounce", { times: 3 }, "slow");
        }
    }, [])

    // const interval = setInterval(animatePhoto, 7000);

    //     // Adds a little animation
    //     function animatePhoto() {
    //         console.log($("#priyanka")[0]);
    //         // Shakes the photo vertically
    //         $("#priyanka")[0].animate("bounce", { times: 3 }, "slow");
    //     }

    return (
        <section id="about" class="section">
            <h2>About me</h2>
            <div>
                <figure>
                    <img id="priyanka" src="images/Priyanka.jpg" alt="Priyanka Mary Christine"></img>
                </figure>
                <p>
                    A full stack web developer based in Seattle. Passionate about building software that is meaningful and can improve our lives.
                    Have a degree in Electronics and Communication Engineering and 5 years of previous experience as C# .net developer.
                    Focused on writing neat, organized and quality code thereby optimizing efficiency.  Recognized for conducting technical interviews to add valuable members
                    to our team. Recently earned a certificate in full stack web development from the University of Washington, from which I gained knowledge and
                    critical skills needed to build dynamic web applications and deploy them. Have worked on technologies like HTML5, CSS3, JavaScript,
                    Node.js, MySQL, MongoDB, Heroku, Express.js, React.js. I am eager to utilize my technical skills and my strengths like problem solving,
                    perseverance, planning and organization, and the ability to work well in a diverse team environment on every project I work on.
                </p>
            </div>
        </section>
    );
}