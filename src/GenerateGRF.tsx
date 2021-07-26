import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { compile } from 'truegrf';

function GenerateGRF(props: any) {
    function Generate() {
        let raw_return = compile(props.radioValue === "enabled" ? 1 : 0);
        let ret = JSON.parse(raw_return);

        let game: any = document?.getElementById("game");
        game.contentWindow.openttd_insert_grf(ret.output);
    }

    return (
        <Col className="text-end">
            <Button variant="success" onClick={() => Generate()}>Reload GRF file in-game</Button>
        </Col>
    );
}

export default GenerateGRF;
