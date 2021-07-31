import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { compile } from 'truegrf';

function GenerateGRF(props: any) {
    function Generate(newgame_seed: number) {
        let newgrf_data = compile({generic: props.generic, industries: props.industries});

        props.openGame();

        let game: any = document?.getElementById("game");
        game.contentWindow.openttd_inject_truegrf(newgrf_data, newgame_seed);
    }

    return (
        <Col className="text-end">
            <Button variant="success" onClick={() => Generate(0)}>Reload GRF file in-game</Button>
            <Button variant="success" onClick={() => Generate(1)} style={{marginLeft: 10}}>Reload GRF file in-game &amp; start new game</Button>
        </Col>
    );
}

export default GenerateGRF;
