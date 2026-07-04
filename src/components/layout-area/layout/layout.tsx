import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Routing } from "../routing/routing";
import { ChatWidget } from "../../shared-area/chat-widget/chat-widget";
import "./layout.css";

export function Layout() {
    return (
        <div className="Layout">

            <nav>
                <Menu />
            </nav>

            <header>
                <Header />
            </header>

            <main>
                <Routing />
            </main>

            <ChatWidget />

        </div>
    );
}
