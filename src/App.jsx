import { BrowserRouter, Routes, Route } from "react-router-dom";

import Anhat from "./pages/anhat/anhat.jsx";
import Mermasin from "./pages/mermasin/mermasin.jsx";
import Akntartayinvcharum from "./pages/akntartayinvcharum/akntartayinvcharum.jsx";
import Biznes from "./pages/biznes/biznes.jsx";
import Norutyunner from "./pages/norutyunner/norutyunner.jsx";
import Blog from "./pages/blog/blog.jsx";
import Kariera from "./pages/kariera/kariera.jsx";
import Varker from "./pages/anhat/varker.jsx";
import Qarter from "./pages/anhat/qarter.jsx";
import Avandner from "./pages/anhat/avandner.jsx";
import Hashivner from "./pages/anhat/hashivner.jsx";
import Poxancumner from "./pages/anhat/poxancumner.jsx";
import Arjetxter from "./pages/anhat/arjetxter.jsx";
import EvocaSALARY from "./pages/anhat/EvocaSALARY.jsx";
import EvocaTOUCH from "./pages/anhat/EvocaTOUCH.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Anhat />} />
                <Route path="/mermasin" element={<Mermasin />} />
                <Route path="/biznes" element={<Biznes />} />
                <Route path="/akntartayinvcharum" element={<Akntartayinvcharum />} />
                <Route path="/norutyunner" element={<Norutyunner />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/kariera" element={<Kariera />} />
                <Route path="/varker" element={<Varker />} />
                <Route path="/qarter" element={<Qarter />} />
                <Route path="/avandner" element={<Avandner />} />
                <Route path="/hashivner" element={<Hashivner />} />
                <Route path="/poxancumner" element={<Poxancumner />} />
                <Route path="/arjetxter" element={<Arjetxter />} />
                <Route path="/EvocaSALARY" element={<EvocaSALARY />} />
                <Route path="/EvocaTOUCH" element={<EvocaTOUCH />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;