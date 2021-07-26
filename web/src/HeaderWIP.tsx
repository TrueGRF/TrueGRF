import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function HeaderWIP() {
    const [show, setShow] = useState(true);

    return (
        <Alert show={show} variant="danger">
            <Alert.Heading>This is a Work In Progress</Alert.Heading>
            <p>Please report any bugs to TrueBrain, and be patient when it comes to missing features.</p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-danger">
                    Dismiss
                </Button>
            </div>
        </Alert>
    );
}

export default HeaderWIP;
