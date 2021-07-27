import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { compile } from 'truegrf';

function GenerateGRF(props: any) {
    function Generate() {
        let newgrf_data = compile({generic: props.generic, industries: props.industries});

        props.openGame();

        let game: any = document?.getElementById("game");
        game.contentWindow.openttd_insert_grf(newgrf_data);
    }

    return (
        <Col className="text-end">
            <Button variant="success" onClick={() => Generate()}>Reload GRF file in-game</Button>
        </Col>
    );
}

export default GenerateGRF;
