import "./about.css";

export function About() {
    return (
        <div className="About">

            <section className="aboutHero">
                <p className="eyebrow">AI Interview Studio</p>
                <h2>Practice like the room already expects excellence.</h2>
                <p>
                    Interviewer creates focused technical interview questions and answers
                    by technology, seniority level, and session length.
                </p>
            </section>

            <section className="aboutGrid">
                <div>
                    <span>01</span>
                    <h3>Focused prep</h3>
                    <p>Generate only the questions that match the stack and level you choose.</p>
                </div>

                <div>
                    <span>02</span>
                    <h3>Clear answers</h3>
                    <p>Each question arrives with a direct answer so practice stays efficient.</p>
                </div>

                <div>
                    <span>03</span>
                    <h3>Fast sessions</h3>
                    <p>Build a short drill before an interview or a deeper review session.</p>
                </div>
            </section>

        </div>
    );
}
