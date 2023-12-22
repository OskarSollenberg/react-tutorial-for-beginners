// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const [alertVisable, setAlertVisable] = useState(false);

    return (
        <div>
            {alertVisable && (
                <Alert onClose={() => setAlertVisable(false)}>My alert</Alert>
            )}
            <Button color="primary" onClick={() => setAlertVisable(true)}>
                Button
            </Button>
        </div>
    );
}

export default App;
