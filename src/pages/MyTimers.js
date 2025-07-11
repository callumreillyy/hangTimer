import Template from "../layouts/Template";

/**
 * The users created timers page. If they have no timers,
 * shows a button to create one.
 */
export default function MyTimers() {
    return (
        <Template title="My Timers">
            <div className="page-wrapper">
                <p>You have no timers yet.</p>
                
                <a href="/create-timer" className="button">
                    Create a Timer
                </a>
                
            </div>
        </Template>
    );
}