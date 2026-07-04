import { NavLink } from "react-router-dom";
import "./page-not-found.css";

export function PageNotFound() {
    return (
        <div className="PageNotFound">

            <section className="notFoundPanel">
                <div className="statusLine">
                    <span></span>
                    Route signal lost
                </div>

                <h2>404</h2>
                <h3>This interview path does not exist.</h3>
                <p>
                    The page you tried to reach is outside the current session.
                    Return to the studio and generate a fresh set of questions.
                </p>

                <NavLink to="/home">Back to Home</NavLink>

                <div className="scanGrid">
                    <div>
                        <strong>Stack</strong>
                        <span>Unknown</span>
                    </div>
                    <div>
                        <strong>Route</strong>
                        <span>Not indexed</span>
                    </div>
                    <div>
                        <strong>Status</strong>
                        <span>Recoverable</span>
                    </div>
                </div>
            </section>

        </div>
    );
}
