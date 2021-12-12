import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { compile } from 'truegrf';
import { saveAs } from 'file-saver';

function GenerateGRF(props: any) {
    function Generate(newgame_seed: number) {
        let newgrf_data = compile({generic: props.generic, cargoes: props.cargoes, industries: props.industries});

        props.openGame();

        let game: any = document?.getElementById("game");
        game.contentWindow.openttd_inject_truegrf(newgrf_data, newgame_seed);
    }
    function Download() {
        let newgrf_data = compile({generic: props.generic, cargoes: props.cargoes, industries: props.industries});

        saveAs(new Blob([newgrf_data]), "truegrf.grf");
    }

    return (
        <Col className="text-end">
            <Button variant="warning" onClick={() => Download()}>Download</Button>
            <Button variant="success" onClick={() => Generate(0)} style={{marginLeft: 10}}>Reload GRF file in-game</Button>
            <Button variant="success" onClick={() => Generate(1)} style={{marginLeft: 10}}>Reload GRF file in-game &amp; start new game</Button>
        </Col>
    );
}

export default GenerateGRF;
