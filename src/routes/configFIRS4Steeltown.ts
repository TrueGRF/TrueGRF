export const config = {
    general: {
        grfid: "TRU1",
        name: "TrueGRF",
        description: "Your first NewGRF based on FIRS4",
    },
    industries: [
        {
            id: 0,
            available: true,
            name: "Assembly Plant",
            colour: 141,
            fundCostMultiplier: 145,
            probabilityMapGen: 5,
            probabilityInGame: 1,
            prospectChance: 0,
            layout: [
                [
                    [0, 0, 0, 5, 4],
                    [1, 1, 1, 5, 6],
                    [1, 1, 1, 5, 6],
                    [3, 2, 3, 6, 9],
                    [7, 8, 7, 8, 9],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "VPTS",
                    },
                    {
                        cargoLabel: "VBOD",
                    },
                    {
                        cargoLabel: "VENG",
                    },
                    {
                        cargoLabel: "TYRE",
                    },
                ],
                production: [
                    {
                        cargoLabel: "VEHI",
                        multiplier: [6, 6, 6, 6],
                    },
                    {
                        cargoLabel: "ENSP",
                        multiplier: [1, 1, 1, 1],
                    },
                    {
                        cargoLabel: "FMSP",
                        multiplier: [1, 1, 1, 1],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAFxElEQVR4nO1ZK3PjSBjs3TIQMBAQEBAQCDAIEAhYsOCAwcIDAQcCDAICDAMCAgwCFggcCFhgEHDggH9AgIFBQMCCgIAAAwMDAYMBBgap8gHpU0ajGWlG8iNVN121tZY0r26N+mspgIWFhYWFhYWFhYWFhYWFhYWFhYWFhYXF/wVfDj1hFEVbAHBdFwAwm80OvgYee5n8x6+3LQCwxRIA8Pyz/4WIh2GYt2OM5b+PJcROJyXizuMNGGP5XU56QwCA/3ZfOA8gPyYxDi3ETiYj4pt/r3IyMpK8EHQeQKHPoYVoNQl/x3WgEkLVFti/EI0G/3Yz3QJFAvwdFHeBuCMIsh0h6wvsT4hGgzr+X1sAiAaXAKrvJA9dIWRt9yVEo8GCfrzdMIb1cg5ALkTdDpCdO8ajYTxIFEXblXeBDWNwXBd1QhB4w6vDIXeEdmc+wCRBSnSdJI2EEJ9vOvY8D6vVKm8rE0Js01aI2k5VAUZXCOf5TloWRYjkCJsfP9NxKqpNUyGUjVXEZTW7qRCAmjTwQfwp/hsA0D9NCuLJ+poKUWokI65CUyFUJkeEROJueIKu76O3nlSuA/gQ7fGqZyZAFXFVshOP2wqhIr5OklwAVXUR+67nv8wEEMONLKaKZFWObiqEGwaVxN3AB782HiJxx/UAAKvfd2YC1IWbOsKy51JXiE7XrSTuPN+l17n5VcSdrM1yem0mQPfkagsA7+t00XXPq264ofOAWgjHdXdGnMbRFaBDP2igTXb88jAGAEQDeTqTEeXP8TshP79Mx0yCy3yhPIKzKF1LA+Kd+T3eT4Yqnkp0+AOHnzD7v04IFYi8jhBt7vj4+hSMMdxkEcENysJWoSM72V39A3gX6QKyczpC0CPAk16tViWPyJEJgWW2+AbEJ5MXzJ6memwlKAjQ9X1ssud1NPDheR6G8Wu6oKxNlRBEQAwnPDH+muwxMiX+x/c+Aj/EYpEaKlvq331AsQMAYPwww3rNMBr+aSwEoK4M4jWCjrltnm4xmVwViIdhoEySOigIUDIlP2wshOqui9d0XV1cFxHv9QIsso+vMg51UO4AWihbs5IQcRwbe4R4102Ju4GPBCgR73Y36PdDPC6G0n5GAtDzDwBuNzWzxXJREgIw9whVZK0rZ6Kri8Qvs/mJeKsqkCc07wLn5ynB+XxeEgIw9wgx7pqWMzK3OuKtTJCqgOO6GD0kABKMBlFJCIKJR1DcNS1nIqE64q08gDrXCcEyTzPxiLblbJ0kwMmwlripB3zlD8gD+MFo0aOHBMP4FefnUUo+8wgSAkDBI6if43rZPzfP/J35PSaTF9yOxnm/MAykuUBcC6VGkXhnrpdQKwWgu1MnROoREfr9UCqECCIugife6wWFlKhLfHx9ivgyyPtRO10oo/A6+/IrLsbEI/hkyS/QpJyptvpBo7CpEEwIZvTC06Sc1REXvaOVADxk7q4rRBxPC+14mJazwlwaUXhn7wKAuszVCpFVAIJMCBPiJlHYFAUTFCcS3f12NMZo4Kevy6g2S/66OMd7Vs4AtbmJpkntRNOknUTp0TQHfFVdqCtzo4GP++vTAtEqIZqWM9HVReKX8Suuxx87IDiL8i9LOpC+CzSNwlWPhq651X3ZEb2DJw4A8+lMm3xBAK/XAwCs3t4AoFUUlgnRtpxRPx3ijiKPVAqwfH5KB/z2vVYInSgsyxFVxFXljHd1/i1RRVz3a3BJAMf1sGErLSHieFr7ukwL2jBWMMOm5YyE2xXxkgD0lxTv7HZbK4SGR/DgPYCHTjnbF3FCKQcYCbHHKLxv4gRlEGojRJsoTNg3cUJlEgSaCUFRuArHJk4wHpSEIIhC8CAT9Ho9uIGP5e+X3ATFP2Mdmjih8eA6Qqj++Mk/CsciTmg9ia4Qn404YWeT1QlB6eyzECfsfFKVEPRS81mIE/Y2uSgEfRVOfx+fOGHviyAh6MvwZyFuYWFhYQHgPxp42j0RHymrAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAFfUlEQVR4nO2bIXTbOBjHf90rMAgQMDAICCgIKDAoGDhYMHDgQMGBgYIDA4UDAwMBAwMBBwYGCgYGBg4eGCgoKCgoOFBQEFAQEBBgEBBw72XA/lxFkW3JcdJ7O/3e62tsy5L+f0mfPjstBAKBQCAQCAQCgUAgEAgEAoFAIBD4v3Cw7wbTNF0BKKUAuL6+3nsfdHbS+KvPDyuA7HEKwO3H0wMRPhgM1spmWQY8nxGdNirCo+/vyLKsHOXZ8AKA5OFTeV6/Ds9nRCeNifDltzeV4pRSa0aY1/Rj2J8RWzWij7gPNiMA4jhmPp8D+zOiVeUv312twD6Stikun3WBUG2Ezq6NaFVplPy+AkjP/wDqBdRRtzRgPzOiVWX90/FqmWUsphPAboS5tnXMmSA8x4zwriRN09U8fs0yy4iUoskIHZspNjP2GSydb9YTmFk/F7qYzVoZ4YrNCNOwbY1ovMmWwEijvkboo2iub1uQFJavPgL1u01bIyoLVwk3Iz34G6FTJRqehN+M/wTg9HhWaaLeR3A3YqNQVcpqo0sj4EmQKVwNjuglCcPFX7X9gCfTvr8Z+hlQJ7wqszOPtzWiSvhiNisNsOUXtnsXk89+BpjJjYipSmrqtjlfI9SgXytc9RP0vumYwiMVAzC/++BnQFNy0yTYNiquRhz2VK3w6PZDfl1rv0p4VJSZXr31M6B39GYF8O8i73SbPb2KJiMipToTLvW4GnAoH6SiZXH8z5dLANJze3amd8oWjfVzZdnpZWmEdFSnf5LmfdlCuC+H+kGkN1j8bjICsG5jcs7FiC5GXFB9PyMObSd7868Qv847UJxzMcKW0Mzn8429u6QwgmnR+T0KF9YM6CUJy2K9js4T4jjmYnyfd6goU2eECDBnhC6s7hpsLzyb+plgnQEAl1+uWSwyRhe/eRsB1Wmvfq3LEfcVLqwZsBGUkkFrI1xHvWvhvsugcgZIR7NFtmHEeDz2jhHmtrkr4b67wZoBsv4BVC8PZo/Txw0jwD9GVKWsXQvfahcoM7T4NWdnucDJZLJhBPjHCDPd3ZXwrYKg7AKRUoy+zIAZo/N0wwjBJ0ZIutulcID5wwORUmW5rWKAXnmdEVkR03xiRNfCo/txoeDXjes+JrzQDyQGbDRWGHExvufsLM07XMQIMQJYixFyX6Ti4keVOb+OZIEuwntJQnQ/Jrofb2yjZr2urBkgo9NkRB4jUk5PB1YjTHYh/OjoyNqWWW8TL2wne/OvgPuMMI0o67GMyjbCgc6EC06psM0Ilxih19t2jevC7+7ungQ7Poo34ZUKuxoxHl+tldNpI3wymZTlm4R39iwA1dtcoxHFDiDYjKgTnmVZo3DzuO2zwFoMMDtqRvf3o0tG54lTjNCv29poCm7SdpPwqvpdsQZBaN7mRucJn94eA25GmNcAp6he9sdReP8kLd8suWB9FmibCtctDVuuLsJ9prqQGbNLRE+urp3FrxkQD4dAnloCW6XCNiOacvW2wuPhENVP1oRHHjtEacD09iYX9fIXoN4Il1R4UXyDDOvrsirOVB0LpnDh8epvev18+URKOb8NFsoYILn69PaG6e0N8XBYzgqgdSoM1TFAx1W4HOvnI6WY33048BUP2gyQb1Lik/erZTavnxEOMUJHjwEmvsIFiRvL2beD6eybg1Q7G3mAlxENMULPLIWmFxauwrv6C5HKRGgbI1xSYZN9CxdqM0FoZ4Skwi48l3Ch0QDBN0aA27NAeX7PwgVnAwRXI3R8pv6+hAveBgguRtQ9C6h+Un4lBvsXLnTWmBghmDNCcgI9ZT3u3ZTlf4q/FodqI+SNjZ6yHvdufs7/F4BNIyTTzD/7p6y7YuedECPkzfB/RXggEAgEgB/LrBoKAs76YQAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAEBklEQVR4nO2ZL3TiShTGP95ZgUCMGIFAjKioWDECUfEEInJFBaJixRMIBBJRURlRUbECgYhYsaIiogJREYGoqIiIQCAqIhAREVcgKvaceYJONrAFwp+GPWfvz8CcIWHud7+ZewMAwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw3wYWmujtTanXsdJ0FobIYQRQpjBYFCqCJUyvyyPzXYURRWllHEcB0IIeJ6HVquFOI5h50+1xg+j1WplGe/3+ybvgE6nY5RSpTniJOquZlwIAaUUzs7O4Ps+hBBYdUQURQCAOI6PuuaTCKC1Ntbi7XYbYRhmltdag4iQnw+CAEQEAFBKHXVbnMwBmzK+zRFE9GcKkD/Ytn1uU8Y3OWL04xr6/BwAEMczfHZ6B8VwNAHyQbmui15v/cLec8C28Y9BNws8mk4X33kEIQ4SYN9StskB742FEPhysbj2/PPijQ1++O0bpKwDANI0QX8w3immvQVQShl7MLmuC8/z1h5cq45QSpm31+ya1Yzn5+M4rni3lyZNkyxYmtFS4AD2EuLTLkGv7vF2uw0hBG5ubiCEgNZ6KYj8/OXlpcmXMiGEISI4joMwDBFFEaIoyjI+Ho+tE5YCsSJQkoKSFKIufwt+Fwo7oNVqZQF0Oh0EQVD44NpWylYd8V6t7181DADIRgNS1hGHL0jTFFIuBLBCUJICAFx/clwHxHGcZdSWqnUZLzKfx3Ec+L7/bsYtd/ezykIImHQ2QxUCAJZEoCRdGhehsAN2bV62zXued9ABfNWsGQAQtRqklBB1mQkAAMNxUuj+hRexT/OyaUxElbee/6DOzgrRvGjiZTItHLhlLwfsmnF7sEVRhHzAvb5rRv5iOxwqxL4UPgOI6Lc9vW1ss77uYLP3/drp4ynwjxfVDhQWwGbQlioi2jjeVMosdr8CyCpE2ezkgHxGARTKuC2d6xBCZELc9i/M9d1zqdtglzK4sXnJHW5rM/6zB/O9+cvq9/5Dlnnb/d32L4yUdXSuH0oR4qBW+O114x7P494NzXfPx/V1F/+FbVgx7v0HpLMJelcKADCNwqzufzQ7tcJ58o7YFrxSytjP1GoCo4dnJP8O4Q/uoRoKwGKLTaNw3+XszT+HXExElSKlK47jinVM1elmnZpqKEgp8fP51wNQ2RwkQFEazp0BgOHjHDRLMJFNAICUEko18KJdEBGC6UKYsuwPlCRAOgkxl18BAPMkAc0SDB/nUOcCo3kd89CF43RBRKUGD5QkQPX1EVUh8EqEdBLi9ekG6STEKD0DzRaPr0EwPPovvkXY+xDclVciVIVALX2G43QRBEPUJp8wfRqBiCqnaoRK5+2h6u/8D5BhGOZP439PTPf6QyAhwQAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAC3klEQVR4nO3YIVDjWhTG8T8zCATiiIoKxBURiBUREZUVERXIiAokAhGJWIF8ArGyAoF4MqLiCURFRcWKiIiIFYgVVyBWVFyBQDBzn4Bkttlll4a0j7ec3wwzdCa9t99J7teZglJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSiml1iEi3hjj/+vP8Ss7m1hURLyIICIAOOeqv43s9xqdfqDvgz8zgDc3iN0uFnkueK/Xa16Hc46yLLvYthOvHsA8Sb30BLd0FEXOpbO/vPvGmNdu2anWj+KFiXwUDZCeACAHj3fbll+5nl+zMFLfcWstw+GQOI4JgoDRaLSyb/UEWWu3fjRabThPUn/65YaTe0c8GtXh3e1yZRAnxTVhGBLHMc45RGRlAG+hLFsfgQ+HIdmt5WqR/zCIs+KW876QJEkdLoqi+r0vKEu/rUG0HkC6e8/kwADUg5gdH5H88/nxgv4hxhiCIADg8vKSxWKBiGCMeTNl2WoA0hPmsxnpUwf8hQEej4A5MJz39wCw1hIEAePxmGl8zPk4fXNl2eoRm33s+zI7IIoGABRFXv9ffSMA3AwPufv0N12V5Sa02qD6BqgCAnxzS47Hx8xnM765JX3pEUUDuijL38nz3AMMBoO186z1hslk4gHSNN0BODs78yN7z0MwZfdrQlHkzMw+zjmG1nEUHzF52MPeWu7u3DNluUe2f18fh6ozgN8O4DXBK63e2BzEhYk8wMzsEx+NuZpcYK3dmSepB5g8PHXC0yC+L8ur6JD8Q3+lLAFOT0+fHUAXwSutSrAK3hyEOPFPZ/nxdYuyDMOwbv9m0C6DVzpZqDmIyjplCTCdTleeoGqdTQSvdLrgz47GS8pymQwpioKyLDHGUJblxu5400YWXrcsy9CwWCy2csebNrrBS8uyun6bwbcqyzKfZVn905iI+DAM69d5nvsq/B+tGfTdBG/S4O+NBn9vNLhSSin1v/AveRwhuUfgj2YAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAEhElEQVR4nO2YIXTiShiFv55TUbEiIiIiIgKBQCAiEBUVEQgEogKBWFFRgaioQKx4AoGoWIGoQFRUICIQFYiIioqIiAgEAjEiIiJiBALBOXkimzxSuu8s7bblvZ3PhJBM5r93Zi5DQKFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqF4n/G0Vsf0LsepACGoRPHCUmSMLn7/ubnfhTHb2m8LR6gXqsCoOt6ulgs8B7uD96IVxfYbl+nIhJUaya1WhVDz0yIk6T4HM4XjG6+HbQJr54B+g+Ri7kg8OfYjVrJiIepj31a+T1VviOvNuBE22BXK/CUna8luBMPu24ThAEANhU0TUstyyIMw4OcCa82wDB0tJMNrXaDOEkQCwmAZZkkSVKMvmVZaJpGo++lAJplIkWEjGIW991PN2XHgNlslhWqaUgpWS6X9Hq9nULt5C+8TRfLAu0EVpsYs6ITS4F9WiGOEwCEEFQvXSATD1CzK2BX0EwvjYKQyLv+NCNKHW+L3z4KIbi9vWU6nRb3964HadXSEEIA2UjL9e6ECp6WiEiwrraxTm1M/QSAKFkXn+fBEn/ofIoJRad5ql98PcO27UK8lLJkRLPZPALofL1KTf0Yy7KKa+Ei5uzslPl8QZIk6LrOl2ODJEkQkWC1khzbX0tGJPcj1s0LZpfVTzGgGLI81cd3j3wfTbnqtUtG9Ptj+v3zouHk7vuR0+qm+bllWTjH99zNdWIRIqUEaohaC802sWbj7MZViBhPMbfC0oA3haXv+ylAo9HYu21hwPl5HU3TGA6z9ep5gvHdYynVeVZottHJTIiSDU90iEWI0+owHg0Jw/ujZutb2tp4hN1eNu2D6Q/DsrBcNy9+nGdhuY8RbxG+Y4CmaQRBwHB4gZSS8fixVGg++nmhL4XldOYThtnoCyGOAK7EGd6mS50H6sBobaJVbR5WoDUvkCICKLLEaI3QojGapqVSyheF/Q7hOcUDZn0jzVLdKi5WKpXCnGxKQ6fTYTKZFN9vH18Ky0bfS7vmohSWD8fOTiHiKcCIsmWSz6C8n1zo7xSe848Bs1m6XC5Lhdq2vdNgOHTZJyyr3fu0ZYSlsJyEBrXzFuIpYBXHfDEMjGiM0+pwM+jzfAm8h/AdA0ajUSqEKBW6XC7p9/sEQYDneTiOQxiuSqn+s7DcLtZ0btJOPQYyYyvRgKvoBiMaI6Uk0busgsGHCt8xAKDdbqf5tM8LXZrfcF0XKSWWZXF5eVkKSwARiVJY3o6uaTabJUGmc5MCfDEMgGLEx6NhkRcfKTxnp4N2u50COE62Tl3XLRXq+34aBAGO4xRhmSQJtl0nCMIiLHOjwjB80YjPGvHn/LSj3IjHx8dSofuEJcBgMMB13fzX4d1TfV/27vBXwzIIAlw3WyYfmer7sve/wVz8dlh6nrcTlvnSuRn0i31Bo9EADkN4zqsK+JWwfL504LCE57zhldi/h+X2vYcoPOfVL0S2dnspsLMFhsMW/q74vp/m4v8o/ljhCoVCofiP8jcD78Lxc+fWMAAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 80,
                        left: -31,
                        top: -49,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAADz0lEQVR4nO3YL1DrWBTH8W9nKiKeuCKi4oqICkRFRETFiogKBGLFE4gKREUlAoFYUYGoQCAQCCQCgUAgKioqEBUREYiKioiIiIgrnohgJivSZukCLf3Ddmf3fAxMp8k95/Q29wcghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBD/IZVd3/CkUc3nv3dvn2k2m+UayUDltjZQ75Xvr1q9ndewjp0tPm/cqVXR2iKOM6LkFYD+5Q8WGp/2/jVD2Hrht40DZfPzn90zCwDbP33XONMe3as+aZry+Hi5lyFUt71BWG2glILkefZKBlAOIY0V7RuPwcUVoLDrvGn8DEixbXvbMja29dSVUsUOcByUUjhpMYjfvB/EcUbTU9xM2gBEcYTneqRpCoBt21z87GNrQ7Wx++fRV2y9A4wxFaVUrpQiDEOMM9sRQTEInWR0D+54SE8BSNPiEz9t3gAwMjf4dAGzbSkb+fIAxuNxDiw81eeUUjS8FmEY8vdBHNcmuH5GS5+TxopwZOH6GSNTDCAIAhoHivF48On9v9Pai302CNd1c2MMRz87vARDwjDEdV2u2xG2NqSxwtYGWxseXu4JggAAz/PwfZ9arVZZdv/vsvEiywYRRRHGmIrv+znAdTsCwNaGcGQxfG3jeR5Q7ICTgwcanagC/3yO2PjiZYU2z4e5cjTatsr3T69Pit1wNGY0GpU7oFW947CfVPaVI9a+cFmhk6MBbxuP0+zDIQDE0+K4vH8qToR95YgvPwSXBR7IGHhPxeu2VTa+MIjgEaU84ukEgMN+UoHiK7PPHPHlAawKPCZOsCaPvNCdDaJeNm6lKSnFuT9vfC6KIoC/js9kMUfE0wxHO3RvOrMcYS00Ps8Rt7ffPIBVhf4i4UA7MBkQxRGk3kLjL7ZH5mi4PV+4775zxJcHsKpQk00JnDqHzutCoc+Zhgx6bspV+PG995kj1kqCSilwAwir7wpV1Trac4kdjYli4iBEH7j03LQs1CTuh8dnFEWV5+FDPh8EUOYIXS+eMZOxg60NrXbyLkfY/hmNDXPE2k/OeeBxfk8h9MpCE91B6RomTlC6hnI0JypcO/BsmyPWtfH5+VGhie4AoHSNOAg5dpOFQp8Sl8lde2HNVZ+Y7/v5/XnIcd9dmiM27WNncdP3/Txr/oE1viDRHUaXrYVC78Ma8fDs0/VW/K2RtztnvATDdzlim+Zhx/8SU0rl7skrhF65G34lCcDS5t9a9dW47xbZYtvGv80s2OS6dZnr1mW++oqPjcfjfD6M/zUZhBBCfKM/ASm5ivAsco2/AAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 1,
            available: true,
            name: "Basic Oxygen Furnace",
            colour: 49,
            fundCostMultiplier: 160,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [3, 3, 3, 0],
                    [3, 3, 3, 6],
                    [4, 4, 4, 5],
                    [2, 1, 1, -1],
                    [9, 8, -1, 8],
                    [9, 7, 7, 8],
                ],
                [
                    [4, 4, 4, 5, 9],
                    [4, 4, 4, 5, 9],
                    [3, 3, 3, -1, 0],
                    [2, 1, 1, 6, -1],
                    [9, 7, 8, -1, 7],
                ],
                [
                    [7, 7, 7, 8, 7],
                    [4, 3, 3, -1, 9],
                    [4, 3, 3, 6, 9],
                    [4, 4, 4, 5, 8],
                    [2, 1, 1, -1, 0],
                ],
                [
                    [4, 4, 4, 4, 5, 8],
                    [4, 4, 4, 4, 5, 6],
                    [3, 3, 3, -1, -1, 7],
                    [1, 1, 2, 0, 9, 9],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "IRON",
                    },
                    {
                        cargoLabel: "MNO2",
                    },
                    {
                        cargoLabel: "QLME",
                    },
                    {
                        cargoLabel: "O2__",
                    },
                ],
                production: [
                    {
                        cargoLabel: "STCB",
                        multiplier: [4, 4, 4, 4],
                    },
                    {
                        cargoLabel: "STAL",
                        multiplier: [2, 2, 2, 2],
                    },
                    {
                        cargoLabel: "SLAG",
                        multiplier: [2, 2, 2, 2],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAACj0lEQVR4nO3YMXLbMBCF4eeMyhQ4gAseQAWOwKPrCC58ABQ5AAqXnmEKZ5nlCkpsCqCSmf+rTNIiuYvFApIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/8PTIx+ec15SSpKky+XykHd5yEMt8FqrJKnWqmmaHpKEwx+Yc14kyUbelFIekoTTUQ+a53mpta6jLX2MvCVimqa1Io707agHWbDTNKmUsp4rpazHKaW1Qo5yWLn5wFJKa8lLH4mw0bdzR02FQypgnudF0hpkKUW+CfppYNVgnxlteAJyzpu57+e5VYKvBp+EaZqGJ2FoAnzH96Nsx1YJds0FvknKSEMSkHNebK33pS5p0wAlba6H0VetdfhU6J4AP+q+u5s4DXxfiOxzI1eGrgmwF40dPQZn5y3AuCky1h9SSsMqoVsCrNnZWu9HNs5lP/djEvw0iMcjknB3AvL5tOTzabO9jTs8Czg2ORP7hN3DJ86u907C7gT4wOvb81Unj39L2gTkN0F23Jo6caX4dX199r12JWDz8NN5HUEbtbjTM3EF8H/7qimlrPf603eEHkn48nbTP7S+PUtSM1B78VjKLX5JjInz08bfu5Si9P2HJOnl9X33trlLAuwF49bWJ8C/uP2/sTK3z5hWb4gsCdK+ROzKXJz7PnA/V/1o3trZxWZoNolwQd6ytwp2l06sBEuEVULs+v5cq5zN34K9p9xbuiRA2k4H6brLS+1l8rPB9w7cdLnprb4gbRPR+hlM+j3XWwkYFbjpshN8eX1/she1IHw/8Eud16qSo3XP7q1lsvVlR7qeFr4SRo++NPAnsdYmxRJyq9tL9y9rX3XoT9Cf3bkdEfg/o9eeHgCww09LhsyhRbjZ3QAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAChElEQVR4nO3WLVDjQBjG8T8zFRURKypWVCBOIBCIigokAoGoQFQiTyAjTkScQCAqKxAIxImKyhMRFQhEBSIiohKBqEBEVFQwkxM3aUPb0A+SFPH8XDM72X3efXdTEBEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREclw/9CPfd+P970OgIMyJ7t/6Md16wAwxZk9b52flrqOtEoZk2QFD8OwjOk/VWgBut1uHAQBQThiFEacnrWAefCw5y6NB7i+vi6tIwqZKAlSdezs2fDJxxiDsT9mwXvPk4Os8TVrSzkauXZAEgTmYWrWMhg8cnjUIOy5vLIcfNV4+/Y2e+/5USUGGI7/Hx/XdTHG0O/3CYKAKIp2LlQuFc7awcVWX7fji+OjyRTIDp5+tuuxyaUDksVcXF4BMBg8Qjji7fEWmAffdPxnwRuVMUEwXlmMXeRSgEnQA+AvUDWHmcHXjd9kx89cl5vWx2dNO8GPdlt7rpdMu+HEkB08LTkGTw+/1u74/fPyjjftZPYuf/S+3ztgG1nn/6p9sVFwYBb+K8ETpRXg0xvf1jDV95WXm+d5ALnt+KLCC7DNjT8cO4W1epZCC+BdHsdj0wQWbnz4cPGF9VscazF1S3V4U0irZynsxbWGF1eN4TT6DYBz0l668aOWT/Q65nX4xPH0jmnthJeXl8J3Pa2Ql58fVeLkRncaHo61nIx+Ass7zp+zpeBFh07LbaLk7yp8/Jx1Oh0A7EUXU7d73/FFuUy27r96wml41Efutwie+PKk6Xbf9jsO+wueKKQDYHUXNO1k74EX5bqYVYWAcj5nuyrsK5D+/R2Di4iIiPwDhwGrqYTqJfMAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEE0lEQVR4nO3YIXDiShzH8W/fIBCIFRERESsiIhARCEQFAvEE4kTFE4gKxAnEiQpEREXFiYoTiApEBeIE4gTiBKKi4gQiAoFARERERKxAIJjJE2lSer17085B6cz7f1Qn0M3uL/vf3QBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIcT/m9Y6O3YfXqpyiEaVUmitM6UUxhiiKDo5xH324SABAOWgfd//7WwYDocZQL/fP1pABwvgV7zuOAP43NWkSVJeP2YQB7mh7/uZMQalFACb+sWTz7v+miRJabdbZRCb9WMgbxnEQUugWAeUYwNg4gTl2Cy+fgBgYVsA1Ot10sfxP5sRzcEsU9phGntUrvb70A5aAmuri9pOAVDaKa9H7W/5Hw9BJK0BAO12C4Dp5DuwM/CZR0cv6ThLepNqNjrTewvhYAForbNi8KvZHQBuu4XSDiaKgTwIEyf4dx8BmAEbE7EOvwJw2Z4yGJ3S6S0BuNVNgslgr/18kxJwyiDyz3aDUI5N5DwNIvRuHlq5QNUUyShg/HFOMBmgd2bSPvy119Z+UmyFvV4PYwzOdoqznbKa3TEfjYHH0lCOTdT+RujdoBy7XDcGzSmqpgDQ2uGDHey1j3urpWK/t5w6abzg8vOQNEkYfrmi/ykoV/nr6+tyd4grHeB5aRR6yRmOXQXAcavl9XpvfwerP25oe0bmznU5qIIxhs5Zj/vZhP6n/KntbnWvDaJ5qvDOz9F/14hnF8cNQCmVGWNOIF/sKlWX7WbFqhvRmPoARFFE47RDGi+o1GyCIHhy+Pl5RmituY/rwPMg4nkIQGU1LNo+/gwoQtBaZ8pqAGDSOcpqoB1NGE6K72GMQWtNFEV8uclrfzq5BWA0GpWLpee32JioDKKqFNH3Na6bf/cQ7xR72QVMOsf3zwjTOdrRWFZ+wHHrp6TxAoD1Nq/h25trLMtiNpuV/78zsMwYQ7ulWYZ3mJXBdQ8z8MKrG/a64yyaTbHqjSfXi+lZ1HVqdanZNsm0j1KqnOZhGAL/PajiKP0Wb5EvvoHXHWfF1lQcbLarIb7vs2nmi5zSDotJvufXbJuuFzEajVBKlbtDGIbv6tX4xSWwuQ9YGoPdGeI+HFmTdMymGZR7uYliaraNX5lTdzdPVnrLskjj3zR+RC9+GlrrzBhDxe1TVYqanR9WlHa4u7wEwD/vYeLHlX53Bry3J1949SJYVYqNMaSLOQB29QeerVgmXvm2p5MpddciCIJ3OehdLw4giqITpVS2MYaqUqzjfPBFfXssSJMGy3H35Mche7xnr5oBxpgT5lcAVO1/yp+6ivre5wntrfxRh4sDDPBua1wIIYQQQgghfuVfYUK9FOtL1cEAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEwElEQVR4nO2aLXDjRhiGH3cOGBgsEBAIWGAQUCAgUHDAwCCgwEDg4AGDAsPAgwcCAgUKBA4GBAQUHDAwCCgwEBAQMBAoOCAgEBCQmS1w1ie5ln8US5nOfA/xxN5Iet99d79vnYAgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgNEJrbbTWpuv7fuj6htuURXueR5Zlnd7/3QwoCx+Px2itWS6XnT9H5wZsC8/znDzPUUp1/SgA/NLVjcprPAgCPM8jiqLecDjsPPZlWk/Arqh/+fKlBzAajUxRFAAURUEcx20/zn9ozYBjoq6UIs9zrAnvwdmXwClRdxyHh4eHHqzN8Dzv3I9zkLMl4JSo2/dsGpRS/98l0DTqSilWq1Xl5/foAxovgbdEvfzeaDQy4/EY4F2qwckJOEfUR6ORAZhOpwZgPp8DEMdx7+vXrwbYXLNtjjbgnFG34+yMW+FBEBiAi5eEMAxNf+Ay/RyczQittcmyrHK9g0ugrahnWUYcx70gCLidrRNhzXnRAWlW8CPPCcPQhGH4pkPSvoNWbQLajnoYhiaOYwPw7I5RStEfuMRJiut+4FIr4IXn9B7lz4i+3RvHdZlcfTw6ETUa9hvQdtRfZ9P0By6/fbwC4O/H7/SVBoqNcID+wKXvz3Bcl/l8gZvnjYTvO29UloB2OVvUi6KoRH06nRKGoXlO7+kP3PXvuOsZ15c+l1rxXGSkWbEWPnBxXJcfeU6SJOSLG5K764PCTz1vVBPQ10yn07NHndcZBzYzmiQJP/Ic79dLLtzB+rPXMZtEJCn54gaAu+VTbfRPXa71BmwNekvU7ee2u/s9+MzanAUkaUX4M+tXxx0wny/Ql/5mtk8R3uS8UTFge404jkMURT2ttSlHPYqi3mg0Mr7vA1SER9/uzYU7MFdXVz2Ap/gOgL+AvtI7hQMkSQJAvrghP0F4EASsViuiKOpdX1+b+XzOcDjcq6HWAGgedSvcCnv4/miAza79iTvzBKT8QZrAx/GkIrzJjDepTHsNaBL1beEWK8xihX3iTwPwCCh32GrUd2nYa0B50KGo2zoeJylpUtTOqMU2M7PZbGPEPycIbxL1XRr2GnDqrl6u44/zh50zul36jmlo2mzC9hpgL1DXwDyn9wao1PHyrl2e0XL7qvxZZXxdQ9N2E3bQAHvRus6tXxJi6/j2rm2FW5PqxtcJt1GHdYSXy2WjqB8SvtOALMt6t7e3lQF1dbyuQTll/KGoLxaLnud5Znu27euh5bpP+E4DdrFdxw91ZseMPzbqk8nElL8mm0wmpmnU6zhowM/yta7j+3btY8aXzxvn2NWbCrcc/YXIIeFHj389byil0FpTFMWbzxunPNc27/K3waIocC8ugfPv6qfSmQG2OkRRtHnPcV0cx6GvNHEcH92EnfO5Wjeg3A/Y0lgUBXGSknwL8X2ffxY3KDVsNep1tG7Adlm0Uc8XN6iLMavVioflU8/zMG1GvY7WDdgui7Be09HyqTf1HNNV1Ovo5CYAn/z1iTF9GeL7PqvVqlL27D9HdCXc0tkmaMvie0W9js7L4K7zRtfPIAg/+RcwspCfj/te6gAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAADhElEQVR4nO3aoXfaQBwH8G/2JhAVEYiIiROIyQjEREUEAjGBQExOIJHI/gETSGREJaICMVERgaiYQEREICIiJiYiIhB1N9F3LAlJS8Jx6d77fkxfeWmT36/fO+6OAkRERERERERERERERERERERERERERERERERERERERERERERERERERERErQghpBBCmr7vR9M3LMsX7boukiQxev/OGpAvfDQaQQiB3W5n/DmMN6BceJqmSNMUtm2bfhQAwAdTN8qP8el0Ctd14fu+NRgMjMc+7+oJqIr63d2dBQCe58ksywAAWZYhDMNrP86JqzXgnKjbto00TaGa0AXtQ6BJ1Pv9PjabjQW8NMN1Xd2P8yZtCWgSdfWaSoNt2//vEGgbddu2Ecdx4fsu1gGth8AlUc+/5nmeHI1GANDJu0HjBOiIuud5EgBms5kEgCAIAABhGFqtK2np7AbojLq6Tv3FVeH+/YP85NxgPB5fpRFCCJkkSeF3v9mAfOHT6RRxHMP3fWuxWMggCDAYDI7X9vt9+L5vCSFkPuq+71ue58nhcAgAtYUDwDNusHl8kgAwGd9qacRrm6zaBpiIerlwJYqihiU2qqFwzUkDTER9tVrJMAwRRnvsowy3owmAf4VH60Xros+tQSk0QDg4zuqXRj3LssrCAaB34+DL7RgA8OvpEU/BBrYzOBa+3h1aRb/JcK1sAHoCs9lMe9RXq5V83j9AFQ8AfcdBEGwhPg8RrRf4ranwc4ZrfQNKF+mIuiq6N5wfC4+iCH/SFOn2B1KNhbfZbxQaUB4jbWd1RS1tv06/AwCCYAtEe6TbHwDMRL2qhrzaBOhYwBzCNQDgJ4CeLbQW3vadqazQgEujPp/PC4WpQr9hLQ8wH/WqGspOEtAk6mpyUxObf/8g+45zsoDpKupVNbzagCaz+vFncpNbEGzhpGmbWmsL170IK6tMwDmzulI1q7dlYhFWVjkHvIdZHXiJ8G6307LfqFNoQJIk1nK5rL3Y9Ky+3W4t13Vl+a+tvurYWjc6DzA9q08mE5k/JptMJrJt1Ou0OhFa7w5W6+Jz+w1dp0hJkiAMQ6vNgYr5j8Yq9hvL5bIQdZOnSJ18Nlge0+WoXzKrN2W8Abr3G5fqNAHv4cDUeAN0LWB06SQBXUS9jvFzeNd15XA4RBzHhRWe+ucI058NdJYA01Gv09kc0HXhRC/+AuZDw5gQlb7TAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 2,
            available: true,
            name: "Blast Furnace",
            colour: 10,
            fundCostMultiplier: 190,
            probabilityMapGen: 3,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [6, 9, -1, 9],
                    [7, 8, 7, 8],
                    [3, 1, 1, 4],
                    [1, 2, 2, -1],
                    [2, 5, 3, 0],
                    [-1, -1, -1, -1],
                ],
                [
                    [-1, 1, -1, 9, -1, 1, 1, 1, -1, 9],
                    [-1, 2, 7, 8, -1, 2, 2, 2, 7, 8],
                    [-1, 6, 3, 4, -1, 6, 3, 0, 3, 4],
                    [-1, 5, 3, 0, -1, 5, -1, -1, 3, 0],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "IORE",
                    },
                    {
                        cargoLabel: "COKE",
                    },
                    {
                        cargoLabel: "LIME",
                    },
                ],
                production: [
                    {
                        cargoLabel: "IRON",
                        multiplier: [4, 4, 4],
                    },
                    {
                        cargoLabel: "CSTI",
                        multiplier: [2, 2, 2],
                    },
                    {
                        cargoLabel: "SLAG",
                        multiplier: [2, 2, 2],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 144,
                        left: -31,
                        top: -114,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAACw0lEQVR4nO3XIXDjVhDG8b87BgYGCwwEBB4QMDAQMDAICDAoCCgwCDAoCCgoDCgIDDQ8EGBQIHAgIOBgQEBAgYGAgYGBgIGAwYIAgZtRgc9uPb2buYl9cTrz/aDek7S73vf0DCIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/A41TB/A90jStQwgAPDw8HDXmd1mAeDipATrrDIB+v89yucTdOXYh3l0BBn881qtZTnP5geFwyF06hRKIvkyYw6j8BThOEZqHPuAQaZpufum4x3o1p+pds03ezLhr/jf5LXc/Sgwn6YDPI+pkFjCzvevuzufkd9pRRGs+AWA2yDmzx834qgSg+3KPu/P09HRw/D8d+oDXSGaBZivB3Zld5Lvr7k63lVM931D1rql613vJX0SbuYv2iDK+OkosJykAQLttWKdPkgVoJoQwxMxYzp8piqJRPd9g8ab3fVXSfbnfu3+RjRvdcVZ3x1l9SBwnK4CvZ4Q4ABDiQKfTASDpnQEQXU4BsBATraYkScJyudyMraZ0x1ltcUQ46x8Ux5vvAbe3t/XdUwuA5vIDwG4vWHfGtKNob371fIOZEULA3SnjKyyOWNyNCCFQFAXu/uo83rwDPr0M6Kwz2lFEdDklupzudvTe6IJw1t+1/ktZUhRFw91xd6rBzV7ynbi3Oxe81pt/Bn1VkqbnLPIJq3LMb+cV2dktFeDFCgsx+Z+b9q/Kj414OKmjfroZ//IV2HbM+eBn7u/nX3/Rd3rzJRAPJ3VnndFNz3mct2mZ7dq+ePxE1PoLM2NRdkl/3ez028QX2bgBYGa1mWFm5Hl+UA4nOQeYWR1C2K35bcuXH68ws72DEfyT+I9wkpOguzfyPAfy3bn/30K0KcCPTHzrXf0XCCHU2/V9aGuLiIiIiIiIfNvfhEr8sX/DySAAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAMIklEQVR4nO1cLXPjShY92RIQaNCggYGBgIFBgIDBgACDgAEDAgYMWLAg4IEBC+YHPLBgwYL9AYEPDHjA4IEHAgwCAgIEDAwEGggINLhAQEBVXiDdVqslxx9x3kzV6lSlRrIltc7pc+/tbskDjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBhxEPf397tv377tfvR9HIOrS15suVzupJQAgNlsBgAgIjw8PFy0nUvib5e6kEteKQUiAgBIKXF/f//TuuHNPbNcLndATRSoybvgz4kIxhisVqufyg1vcsDd3V2HvAspJaSU1glAHRY/mxvO6g3udQCW5JADfGH4uJ/JDSc7wI3118gzXAe4xyulrIN+JM4KgSRJOmSYpDHGHjP0vSvWy8vLm278UjjLglEU7QAgjuOD9nerAe+naQoAWK/XFw+BX5aT3Rbzo68fnNuQlNI6QWuNOI5hjIFSqhcaUkqkadoT49JYLpe7P7UGoEFEWC6Xu0MinC0A0BKJoghaawB1DzN51/68z8e8B7TWiKKos38IZwvgk4yiyBLjmxgKDzdPXBqTSoOobi+uNtCYHjzn7HGAa2O/p32r++TfKwTyoO0ErW6OOucsAUzwcdDGafAJL8UN8uk9tuIzgG5i5G0iQhp8Oqfpg2Bx59gedfzZDijU3+12GnyyhMRkgiLPAQBb8bljed7Op/fnNvsqXPdtMT/KaWcJoKo/AQBZQ7x03FDkOcRkYvfz+VcYY7BRX5DPv2IrPqPIc8yqP85p+lVorU9Otmc7YNoQKIkQOkq7DgAAynLk8692GwAW4uncZl8FO4D/jsGbqsBU/gEpJTZ00xPB3tR0Aspy3IRrIKzDwK0Ol4aUEjOjYWYxZLaFPnD8yQ7gUaBrMybvEmdQluPTJOndJBEhjuOLzwWICKmKAABa9O/Hx0kCRFG0c2s8Q5nfAKBjfcZNuO7ZkfcXi8XFRbCDM3NcmJ3sAB5d+eMAN6mxEPPi914VeM8JkVsFtLo5KsxOzgHusJcbZSzEEyhrCBb1Z/vGAUSExWJxURF4KPzuVYCHvf5U1/9MKTXoACZ/afylVQDoTjZc8jxTjOPYiqC1ftfsz/AXaw7hJAG01ldEtFsulwDa9QAWwp99JUnS2b+9vQXQxv7j4yO01hdbE4iKHBo1+Tm20AgPnnOWA9brdae34zi2Pc4YcoCLx8fHc5p+FVpMrAPqRRH92uEAzsgBMiQAwwnG/4zJu88J9p17Cbi2vzbpUeF2sv2klDsiupJS7gCAiK7u7u52SZJ0iLmN397eWrtz3fdFuEQoSCl3bhXQWh+87tkC8DYAyIJAQrYLJHkChFGnZE4qjVLFAPqLKa4YbxFiaJR66HpnlUEp5Y7JA7DkuVEqpT2WbyAPWjFc8m7WjuOYR5tnjw55LiClxKTSB48/KQlKKXfc2wwOh6Ynr+I43hFR03jUuwblCaiUdsDCU1h/HDHUm8Bhh/BcQKIW/VAiPNkBLnmn0aumV3d8o3XjrS39G6c8seSb43qOYEJuyBxyiJQS01IfzedNA6GmwR0AzEqNF3QHH8744MredNl+T0RAqUGltCV0SBQ3Tzjf9YS1VUDWDjimCpzugCYB+tsvZXvTDN6OomjX9B4QRnUpDdvjAEBv1x3ybknzx/f7HOGuCEXm6fIjQRkSCG3cuyK4N2FJNdssBE9WiOTeNXsmyI5wSRzjCP48Ca4BtOfuw0klZ6gE+uDSZ3vcI+HD9mhYVw//X76G64ih8uknS76PQ0nzaAfYmr+HuD/54Crg2tq/eRapFQFA2STCJldorZvRZ9w5f2Z0p/0UstPOMU+FgAskQcak0oCM7H44W/YGPH4v+mIAAFF9jRkAd6XADScmL0V9+1RUzbndazcYrEKMo0MgCrDz6z9vNwMj/GMSYlWGnfrO2+6jM3IepQ1Zm4+xwjSVQkqJRUWWfGoKqLCe8fE64CEkSdLhfLQDSMhO8uN/b0X9/SMRkqqAnN10CLkDHSbmO2Jo23WID1OWAELMlAAVFUxZ9kJirwDe/tkhwMRfKrK9Q1HcS0Iu2aFBDu+7YrngqgFHiJkSSE0BNPN9dgHQhsWxOFkA2+MFEAclIoRAUEIDPdszeb8acE+zSK5YADqi9eI6TUBFZUlLEYCKqkN8Kvuv6rToPp0+KgdwjC8qauxXI6lCxEHZOZbX4v2eZLhu8B3itdmr9Zz9mTTQ73Emr3hK3OQMUQAZGTxszWk54PNU7h6Lerlp6Mm+phIkpHUGinpJXDtE/DDg9UF//O+T71aHtvT5Pf4a8VU2xRIJomiGjPoM9grw9Xq6A4BNbgCESKr++loclEiEbFzQfq/CsCOES5YJMimf5L4XLfzSt484r0Ktsimu5zGE0HaJfgg9AZh4TkXH7nFQDlqeP791yTv/WiF0e47b4z7h12w/RLxonKfQfQYhhGyX4l4RoDcZ2uQGGeW4nk6wnEW9E5Kq7wZXlIms70hMQohJCBXWf1GRI2rEcEubXzIPkZ9KhalUKERNfpVNQZnpPINQSkE2Yxa+ltkzHB8MgQACSVa/yraczbAEsE51hyyL4DtikxuoMITWhEzd4Gayqb/gx4ZejgD6awFD5H2r/6bFoMXdN9WiqH1HSEl5fA6oUKCo6izrC/Hfbd4hzUL4IQDUNkxwg6IgfJTNKyvkCSEmgy82MPl9Mb7P4hwGSinM51N8rB6RLj7sfTlrrwNE0F6VysAK8c95/TuA9fO2Nys0ZekNSiSoIAghgUYzMWm+H3AEu8Al7xPnbdmsP0gpgbztecYv0y2eH1aomvNOCoGaiIApS8iwggwrBBCgiqwQv36Y7wDg10YIE4S9WaKUtQDSEeBQaKiKOuS5nMH030TtWNz5zhhjxdo2b6WeFAJAHQYqFHa/FqM9PMlSFFWF+7mqFyKagYkLpRR01ozwnLb90Mip6IzsbJKryNZxRNKSU0q9anGllCVeCCAK5D6aw0tiMqxAZWCFAOrYDiBsbrDCFARTUO8aH5cxZrSyNwQASoiGpLRCAHXl4L+pVJjPZlhlU6Tikz3GjW2gtni1+g/StO5tXZH926Zpp0oAdRUYGiIPOoDKACoMO6HAPSSCAAHqm80oR1FVqKoQKuzmgGybAQC+zAFQhgyAKWox/dBQQsAUBZQQmDe/NfKTnB/jz891UuUQoax1QBTNulUCBZSUg3mg5wB58xG4/mAHQXUotImNygAVCmxNhgACVRUiaKoCiwbUA6mcCmTbDNk2Q05tUmUitkY35BnGmF4dd+H2OGUGlBl8rz7je9W+nMkC8nWOToL8K467u7v6YcfmGZzBeFBToYAIApskqQztlVyxWAigHSB9XMYArfCCaS1E2nWA+zqtm+SYOABLHIAlHUqF0klyHQHLOgkmOj0swD4hZPrkDI0DBEEJGdaOkGGdF/wyyJhIgZyKOmz2hAY7wH2iPJTkDBGITId4KKV9WXMq6/OlnCOKprgtn2BKNwd0K8HB2aArBBohOO6pAoKgRFEBMoCTN0JEX+6hvz90RABaR6ARAug6gPHLdIt09YRnhzjje/W5R9zHF7GFeXrCtvl+qAQeJcCQEJUnhHsldoD+/gAzi7FYLKC/P1gBrqcTmKLohIZLnnufkxwT5ySWkYGMZnuJM7gMMnEzb94e367OE2CfEMF2bUVwQ2AiBZAm0GkCM4sxMWknEfYcAXREYOLz2ezk3xiwUEBLfN8v1M5eE/RzBNKkbrARoZP80gSQotP7LMCQEEBLXKoAUk2QbvsvYQ7hWOKMNz8X8HOEShObLK8nqkOWxwFufnCFUEJAyaZ8NcTvNzf49/T4N8uPJc642IORISE2ubEiAC3ZffnBkjAGVRDiX9U92slCjX0LntfiCeuX9dWqX+lexcUEYPhCbDbPUGFoe9gUxWB+8MvgEIZGc9fiCevH9VU2eMZhXFwAhiuEIYLZPEOF9TLb9US1vd7kB78M+jBuORNvJ854NwEYvhDYPA8mQca+3neTW7b69mbijHcXgNEToqkaLMBrvQ+cntyOxV8mAGNf+QSGRViIJ/xO8t1+af7Df77OQqhGCF4Efa8e9/HDBWDYSVcz/f0Z/m+BEf8P+B9dc6kouzYgHgAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAGJ0lEQVR4nO2bIXMbOxDH/35TGCBwMEDAsEDAHyDAsCAfNeDBAIMHAwQKDwgEGggUdsYPxHvZU6S7lc5ypzP7m8lUtnWydrXa/1p3BRRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURpwzl3W2vdm1/sLnHMX7/1OaiT19d53n1t3nHMX+qPX/LO0ba29WGsvzrmLtfYuUfFPr4H5KkpXM4Sw4+17OKFLmFlrL2QMW13Rtd57GGPgvd9Zay/U7jFPAPjWY1BjDADg+fl5toIxxumzUts5B+DDid77HtOb0WULxBhB4RtjnN7f7/erbSKEAGMMDodDjylO9MkB7wHOOXjvEUJACAHDMAAAhmHItkMI07/Uttbi9fW1q3xW7S2e2EptALDfcHE/nqfV5wZdowMxxlmb+tAWCCHAWju9v0arfK52btXx+NMDj3aKBIkxzjkMw4C3t7fpPcoPS46n7WaMIWeKnbC4Bbh+c0krtfnex6Mlh3xJcM65bBvAzHgpW+SzqAJ85Wt0nCc/nuVjjDNDc1Ck0DXXeQAAuFG5dqoY0nlnO9xCxymLU1iW4ONSTkiRyGduDhIHZLcA13Fr7ZdVWWo752CtxdPT05fxaCxjDPi41CfGOK3kveQz64AeOp6uNEXHjBvLp4R8DngPcD+ep9XghtAXp+2cbNFEuKFkPJfBFHovhIDX19dF+aSo4fJZQz4H/AEdp75b5PN8Pk99pXJYdACAm+o4T1zA55631s4ijW85uu6a0Cbn5tq0IDy6JA4o1gHxwUxf0EPH+bbg16fJVRJB3KmUYHPqkEP0a/AWOk7wiS1JK48GihCu9fRZauwwDBjHcXGenOIWiA+ZLJ3r21HH0zFz/dPX5IBrcmzfAvwL/qSOi+TzClclKeIDkdJKz6q8jvJJ45WcQGPWhD/QeCK0NBGgn46XtgxxPp+rbWk6EFmq7f2/L1MYA0zfr4ambeBTPgl6f22/E2nol3JRDpEDpBMB2uVzHMeZ46RzAeYrv9/vqwqwogPMrwi8lweRKMRWHef1Pe+Xg/Y+KYCUYg4gGYw/PeL1cCOb+AS06jjPJeQcHiW86pMWPimrSdB8d9PgaxOZXdeo4xzqn8pten06nxrElaBkIjlE8nklTWY1BrVGQFMSbIVHSiqhOR2v3WotiBxwq4msjdOi47mxa+bb7eYo0EfHJVunhmYHlLzcIp9LOl5KrmvjSgshcSmcZvDSRFrlcxxHGGOqa/mU/X4/Oxlao+gA8ysCvyIi5IcLs+sr5LOk4zxhLnE+n6cxbl4I4T0gwoom8mWMjTqeOpCPSZ+TsYfDoSmJrm+BR1s1kZwBEkoRwCvFXHLcKtFiGaSVpC+kNndC7rot0E/mW4/LETngHhPJ6fiWGl9KVQTcglodlzq5tYgS1wGtq71Vx4tym4zbWgyJHSCdCBVCrQ5bK4SkdC+Eiv0a5LNFx0tjSgshuu2/WgiZ765pIrXymdNxaSEEzCvJJQeS4TSm6ESIHndpKYS26HjOgXSoSuPySnIYhqLxqeEUIaITISKdCE2gVAiRfKZG1qpKWm9476cx6K/WcLpxWnVfYKnwKRVCEkPTw88lStsi5wDn3KVkONH8qKw4Ka70k4yzlhSHYZhuwqQLVDKcqI6AWpbkkyJq7ZngkqTRbTUynEfomuFEl4elOZIV5k94UFLjd5SW4D+16TUw5YrVu8NiB0hXf6t81h5opIbz+5CSp803lcK5ScYHAzzajxOh62pK4Hd2SsZTRPB9TgnUsHMHYwxeXl5ED3dmIyD8xs4AF55x16Tsy5l+hXxyHT+dTtkjNJ4zaBwAOB6PAD4deDqdqh6WLhdCMe4AwBgzcwTBE9PaD5E1+aSVTJ8JCCHsSjrODa81mlP9uDx/zZ/GHMcR4b/TVEEu1Qm5/e+9x/F4/FLK1mb1Wm46GH+2aMng9PUwDNOTnbU6vpXuMiiBHq1LkxvQz3CiuwMk8sn78KR4j/882fXWGCCTTzJ6f/54n0tab27qgPD7I6dw/ZfIJ70eBztdI9Xxrdx8C7TIJ4+SEMJOWgXegrt4eU0+gekn8d//H6YV5e/ifyxPxk9tUPQ/AAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAADQklEQVR4nO2bIXPbMBSAv+wCAgIEDAIKBAIKAgYCCgICBgoKB/cD9sMGBwMGBgoCBgoKAgICBAoCDAQKDHLnAU+um1vXdn2W5eZ9qEl6z3qfn/QkXwKKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoijK+2PQ9QBewtflpNxyDsD19XUvxizGcrksrbWltbY0xpTL5bKUjD+UDNYGzjmstY9eS5K8gMnB4b0B4ONhg+NMNP4H0WgtsB9avPcAuGwhHj95AQDGGADO2YrHTl6AMaaugC3ntQwpkhfgnMMYUyceZEiR/CLYrIA2SL4CoJIwzatKsPd70di9EOC9Z5dZANx4Ihq7FwLC/Lf5Wjx28gKaa4DLFtoFtAsIk3wFwMMaIF3+0AMB9n5fV8BJboXdeFLf+fBQRJLkBTTXgFm+O+0usMmm2gWkSb4C4PFZYHJworF7IaB5FtgPrWjsXggwxnBWuFZi92cNMBaD/GYo+QpodgGbr0+7C9wOZ4AXjZ98BQDMDx440bMAwM3QANVOUJpeCAh3fpNNxWMnL+B4J6hdQLgLJC8gVEC2u/3TBWRJWoC1tpwcqgrYZbaVLpDkPsBaW0J19ws+1u+3cSpMSkAz8VgkIeA1iUvL6VTA/9zxdyHgLaXe68NQSDzs7cn9q2OEByNSRBUwP3iKsad4Q4yT2wgdMxs50Xi9EyCNCuh6AF2jAroeQNeogK4H0DVJHIY2ha3/lu7zz5FcBTRlxCC6gNG9efZ/NoWNJiLqFPh+5wcAn89MCVCMPQDTWfU7gN1mzWxUvbcpTJQxdbIGBBGfrr6UAN7nTPJfzEbV57GSh44EHCcevv1bTK8AyHxOfif/jbC/EVXAc4l7n8ccDhBJwEsTv1n/GMDDg5MYtCrgNXc8JA/gnBsAzI8WyzZo5VeYx4kHnkv8Kay1ZXiaBLDayo1bVIB04jEQmwLzxWU9b0PyKSceEF0DQqKTo9eQXuKBVqYAwGi3qt/fZxcYkwHwc/UtKRGig2lOg5Bw6iJaGUSfRLR68T6IiHLRlEVEvdhLRcSU0EnZ/UvEPruI2jI7XYCeErHa+tMQEDgW0XVn6Iz54rJsylAURWmb31gFfSbRGQw7AAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 3,
            available: true,
            name: "Body Plant",
            colour: 194,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [2, 2, 2],
                    [2, 2, 0],
                    [2, 2, 1],
                    [2, 2, 0],
                    [5, 5, 1],
                    [3, 4, 5],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "STSH",
                    },
                    {
                        cargoLabel: "COAT",
                    },
                    {
                        cargoLabel: "GLAS",
                    },
                ],
                production: [
                    {
                        cargoLabel: "VBOD",
                        multiplier: [8, 8, 8],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 70,
                        left: -31,
                        top: -35,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAEcElEQVR4nO2ar3erSBiGn+ypQIwYEYFAIK6oiIioQFRUXBFZURFZWbGy4ooV9w+IrKhcWbFixYqISgQiIiKioiICgYhAjEDsOVlBhgL5sYFApt3lOSeHQJhkvjfffPMyAB0dHR0dHR0dHR0dHR0dHf83em3/gPN9sha2jYoikjhGhe9cCFk4R70/t96PfVy0+eXl4C0pseQVSRwDkMSrNn/+KH5p64ud75O1czUsBA8gbBtLSvqXl1iyjyX7bXXhKFoRQAcfzuZbwasoyrapCLKNLhxN4wIcG3x+aJikUQHywcfL973B7xoapmhMgHLw0v2WfVYOvpwdJmlEgEPBAweDF7bdRBdqc7IAVYPfNTRMcpIA/xY8sBX8rqFhktoCHBM8sDd4+MIZ0GTwztWwThcao7IATQQPxaFhkkrXAt6P1zVwcvDlc0xSSQD9bzlXw73/Xp3sUAY1qCbA62PPssdrva/Hb16YJrLjnFS+HL4Qknj5zt8qzo7lhfhKwUPN9QBL9klgpxCnDA0T1BRAksSrg0JAtaFhiloCCNvOLO2xQnzG4OHEJbEqQhwcGq+n9OI0aglQtq91MkLvfykjVEYLobdaCM2xQ8Mkta4FdKc/VnfjrXPubx1ca5bt6+lztZgRzuaEsznO1ZDB3V2dLjRG5QwYJS8ATK3x1rK2zoTxjUUQ+Nnx+1uH3/8M92aESSoLYEsBwCjeFqKcCW+Ry/2tQxD4XNoQWd8O1ggTVB4CfZEKIGwLYVuMkpcsKw7d6Fi8y2zxQ68IWbK/dZfo3NReEFkuY3w12CmEZt9Nj7IQJqklgGVvskBI5lzjqwG2FNhSFEQoF8Fd06dpKguwUookUgDITfqKzTaKVVYjANxlUGira4TpZbA8lQWIYpW9l5sUlkLSFwJ7/JjVCKAgBnyOm6FlKgsg3AQlV4xuhngX6VQnc2P5rwsXAM+7LrTL1wjtIz5DJlSeBtXSAuCNOQBjFyAkVGlm6MCDwMfbtPG8a4gXANyPHKKXCVNrbNwFwgk+IFqm+1oIQZ/oZZKeM35Mz4kVNhsxRg9pg+lzWixzPsIkJ/sAtdy85ArhJoVz3ctclZ8+p6/RA1GsCtOnSRrzAVqIvAjio17SFyItoNPnrfYmadwH6BqRx/OuWW1qRH4W0e1N0qoPWIRplQ8Cv/CZ3krDNhga9gEDx97rA/T0mT8mv6IVzq4Gd/gAneaw7QPyxbLsI0xSeRp8WoQ9gJ9CrJUo+YDRA9rr7fMB5elz7ML845Lh7NReEvsZvPUAfh046/zxIPCzfz/vA9xY4V7a6ImxLIQpTn5QUmdEWQhIfYCeFG0pSCKV1RA9/aklQFJuejYae0jqaRH2nia/FR553eUDdA350j7gEDN/uiXEf8oHHMvMn/Z0nQgCH0YP2TXCZ/IBrT4sDaCzwYsX60AO8MaPmR2WUhIbXhRtXQBNWixDvHixjmLF6GYI+CxxztWFnRh7Tv/OkeuBY2M5kh9/BMb6YZxd02dHR0fHufgHSSoS7ge20lQAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 70,
                        left: -31,
                        top: -35,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -20,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -23,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -20,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABzUlEQVR4nO2WLXDCQBCFXzoViArEiogIZAQCcQJRWYFAIBCICkREBaKiAlFRgUBUVFQiEIjKiAhERQUCcSKiIqIiIiJixUlcKiCZ6RTa6SThZ3rfzIkkM3tvN/tuD9BoNJoSWHjjxJ0MkkPr+A2j6ICj0SiRUmbP/baFjvNc+D5FUZiwhTdOOI7gLVeo1WrZeynlURfhPG+ANPHgfQm73kS7GWHqSSilUK1WoZQCM9ATF0nvpg8yLXAcHU1BcouYjDsJc4y5rKAlViAyQWRh6kVZEYQQANbdkHIsXXGWNwCRhbmsQCmFl9cViCwwr5O/va7jzmmibsYIwxBCiGxNvQjHcEjmtkCabEoQSNi2wOiuiVOwRqEWEOYH7IbIvp2CNQrZyJ0MkiCQIDLBHGP4uDTcySB5mr1n3fEwuARzhNl8bY30jx96auS2AICtYvNaY18UUoBd9K4qmTWIBJijzdpYg10Qmei3LUw9ZEUgssqU9YXcU2AXztA1bFugJVawGwLMMZyha/w0NcxaA2EYgjkqS9Y3Su2Av1hDqRDKf0O324UzvN/bIVhqAXaxzRq+7xsA4Pv+XrUc5Ca2bWocQodGo9FoNBqNRqP5v3wC9xsxaKDyCKAAAAAASUVORK5CYII=",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 4,
            available: true,
            name: "Builders Yard",
            colour: 169,
            fundCostMultiplier: 16,
            probabilityMapGen: 9,
            probabilityInGame: 6,
            prospectChance: 75,
            layout: [
                [
                    [2, 1],
                    [3, 0],
                ],
                [
                    [1, 3],
                    [2, 0],
                ],
                [
                    [2, 0],
                    [1, 3],
                ],
                [
                    [1, 2],
                    [0, 3],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [
                {
                    cargoLabel: "CMNT",
                },
                {
                    cargoLabel: "PIPE",
                },
                {
                    cargoLabel: "STSE",
                },
                {
                    cargoLabel: "STWR",
                },
                {
                    cargoLabel: "SAND",
                },
                {
                    cargoLabel: "LIME",
                },
                {
                    cargoLabel: "GLAS",
                },
            ],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 56,
                        left: -31,
                        top: -26,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAADvklEQVR4nO2Yr3frNgCFP+88EBAgYFAQYBAQUGAQUDBgMPDAAwEBgwP+AwYGCgoNBvcHFBQOBAQUDBQEFggIFAQYGBQYCAgUFLxzNJBKz0nTxMnyo+dMH2naY0u6V9dXTiEQCAQCgUAgEAgEAoFAIBAIBAL/H6JTT5jnuU2SBICbm5uTz7/KyRbQFH45zAB4krOzm3D0yfM8t2maAtDrL37eT+7QWgMwHA79tecw42gTbhIexzEAnyERR5msKAorhPDCn+QMKaUX/pkScfAJ8jy3UkovRGvtPwshgM+ViC+HHCzPc1uWJaZWSLm8m81ENIXHcbwxEcfmYO7meW611tRyyvfkK99fam/AvonQWjOdTj9/ArIss1JKhBB0+hnGLMSXZQmwUyJgIdwYgzHmEMvbyEEMMMZgagWkXnhZlgghqOWUuL9IBEAcx0wmE4bDIUqpjcLdNcfkIAZ0tPIi3bPrRLRJxDrh38a/AZAkiT1mEbY24M/xlU17FwCo55rryaNf1GucwkuNEIKqqgB2SoSUElgWfqoi3OrsqnCAdUakaWoBlFLRVQ/rijBJEr+7Qgj6/b4vxU3CT1WEWxOgjeHBGOK3xl41w6GUapUI+HHej8djf+afqwhbPQK6sQjV+JszZRWlVJSmqTXG+EQ0O8IYQ1VVlGVJVVUbhTeNPQatO6ApWLfYlV0SAe2Eb+qhfdk6wLeBsABxt0MsBLEQaGO8CXeybrWIdR3Rizt+510ftBEO63toH7YmIL3sLSZ6eka/1MRvwi+vBosLZP3BncusJmL89WeklL7px+Oxu+7dvW17aB/adYDW3ghxsdgxUy8Wvk8skyTx3w5dIVZVRZIkFEWx9tzftYfa0r4DGkVlak2X7rudSHsX/PP7yK4aMRqNrLv39vY2ckei1tq/Hzi2mbBLD7VhqwHlW2mJbvfdYtrEsigK24x6URQW4OHhYTHu2/3uZJBSMkgzsiyzs9ksApi/jRl3O+/W8F+NaF0evw67FmB4NaR8mtP9IpZ2pLkzsRBcTx6j0Wi0KNA1UYdlE9TjFHGRAjBIM/6+++vd2pqFDO0LeBN7D/DHLwPr3G+eDu7368ljlGWZbe6w+9w05KnUvJrKH4+OY5//jr2/DLWJZfMt7qOoz9UMwL8yXyTp2t0/Fj/te+P93ET3cxPpl1fmzzXzqkIbw52so2Y0zYoZ1Xy2NI7b6aqqTi4eTvBvcfcCNEizs0b9I04yuTMBzhf1j9j7EdgFpVTkOsBFva7UKaYOBAKBQGAD/wKXM+TJ++Zc6wAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 56,
                        left: -31,
                        top: -26,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -34,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAG9ElEQVR4nO2bH3zr3h/G372vQiEQCAQCgUChECgUBoPC4AuBwmAwKFwoDAKDC4XCoHDhwmAwKAwKhQuFwmBQCAQGgUAgEAgECoG+XvlBdrJ2f+9tt3R3vz2yvE5OkvN58nyez0nPGXzhC1/4wg6wXC6z5XKZ7Xoc38p82GAwyDzPy6Ioynzfx/d9dk1CtYyHDAaDrNPpIMsySZKQJAlBEOD7PgCe52WGYVCtVitljGcV766AwWCQdbtdgCLwIAgYj8cAzGYzgJ2p4V0Zj6IoS5IEgCAIABiPx5imCUC73S76GoaB4zi0Wq1SVfAuD3sucF3X6XQ6a31F4AAnkwXzs3apBLyJBzyX45AH7nohXqQDIYbhFtfJskwQBPSvq8i6BizeYjh/ha0IEIEDRfCrgdu2zfn5Oa39/4pr7IuwOJbUZX6tpm4zjK2wsQmK4Ptn50WbMDff97FtG8jNbX79u+iT3qXGR8HGCnAch1s/Zq9pMJvNuHF89poGpmk+aW4vIZf/brAxAYZhEMZLgiAgSRL6p/aj847j4DgOJ5P13E6ThJosP7rnT0uidbbpiDbD1iboehGKouC6btH2lLl9tyQur2vUZPlRGvTNpLiubGxMgO/71GSduSfx397r5qbrOsf7Ac2mBqxLXpblwkTLxlYpkCQJrXqKVF0+K2uBIAjQdb0IVAS9a2w1FV4sJeaexGIpPXl+1dx0Xb9v/wCBC2z9LdCq3xvccyXupyUV84NdyPwlbG2CZl0ljJevmptQwGoKPMQ/5QECogoMuy+bm/AA0S4ggn6OlPfGmyngNXMTwa++ZXG86g9lY2sPcL2oOH7pDQoPEH1EWuzaEDcmQPyaY9ZV4jh+NX+fqwJCMbsiYmMCDMMgjuPCA16ayKx+JT7VZ5eVYSsPUBQFTakSxnczvxfM7VNXAXjd3P5vq4Bo/6oCn7kKwOv5+ymrANwr4F+tAlungFAAPDY3EfhqFVg9/xC7IGIrAsQ8AO4DFkE/NEShANH3oeTF+dbprNTVoa3nAXEcA+v1/al0EAqI4xhFUQqyxDnxu2ESRpSJrU1wFS+ZW/8yon+ZBxfHMXEcc3h4WPnpKlxcXOT3nF1vOpyN8WYe8FpO94/zfoKIUVgv5G6aJv7smtFgr/RFkjedB8DLRPSPVfRavkbQiK8IHZcjzSsqylOqem9sRIDS/FEY1WoVeMncRmGds0nK4McJALfKIadWjbNJSnd4S/9YpdfrVcr2gI1N8CZsYCkRrpcCf2Zup1Zt7S0bhsGp5fNrLtPrHVWg/HXCRwqwbTuzbfvZUnR4fJIB1GSZxVLCjXQURQFeN7ezScrl1f06oe/7nE1SvNFRRWsPd7JVplCACNpxHFzXpdvtZrIsMxwOK5AHPp1cAqDXHPbNBmEMphoASuHwRnt/zdwml7m59a+rLKJ7eSdhxOXNbyT9CIBwZu+EhCpAt9vNHMdZMzBR3wUR4psfIEibQMpNqHFqGdw4PnrNIUibNOIrpkGdU6t2Z27RnezrhDO7QnuY6cxYUGehH+GNjooNEeHMroSzUuIu8A0gmY4xDINmswnkuSs2McVxjO/7SNU8l33fKy5W0xlnk5yIvzG3IG0ia+qaInaFKoAqSzCfEiULmgf5hgehAJHfYol7v9Xgeu4wHE4rAFq7nf2NuYUzu1I/GmVJGOWK2DEKE1QkiYamUptPSaZjFEVBURQcx6GdRnTVGkmSVIbDYSVPAdDawyyc2ZW/NTdvdFRZlf4usVYFRolWEJFMx9TmU04bGoPo9tGFIviH7UkYcXn1G0m9f+O7cvg/QQWg19AygJtai710znRZ56DqsWeaDKJbZEWmV9U4HP1+9q1p7WGmpjMWd67+Ud7wa/gGufwBdE1HkSQkSd7oZh/J3P4UazNBzb8CSULXdPDnhRECa8dPYVNz09rDTFJVOukZsqogqRrff4xKU8/ag3oNLVMkiXixQJEk6oZRpIB5G/PrNnyzgR2ce1lw4yBrKunUpqUvUaoUJAClEPHkAwQRgoDbWfCmAzGbnSytW+h7eTVJgnx7TTq1iZUjTup5RSlDDTsxKsuysyAMWCwSqs3jNSKSMKJ2OywU4bTHTL/X322cpf6/AIBlWVlUP0DXdBp1k5o3wf/ZIwlCGvFdSjRsSGLGtdNCHe+FUgnIg++RhBFR/QBBhCTJJGGEvrKnyG2NgDwt3hOlpsByRNYZWwB4Uj7lFiVTa5okYcQiipBUFTW8wHVd9vf3mUwmnyMFOmMLRVFoNpvUF+O14FXv11rwkdZFluV3DR52ZoJWpigK5/sXfL/uFhssxAqy67ri727KYFmwLCuD/LfESOuS3vwgCN625P4TkGU5M03zw34wfeELX/i8+B9sukB0P8YO7gAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 56,
                        left: -31,
                        top: -26,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAE5ElEQVR4nO2ZIXDiWhSGP95UICoiroi4IqKiogKBQEQ8UVEREVGx4gkEAoFcUVGBWFGxogKBQFSsQCAiECsQFREIBKICgUBcgbgiogLRmTyR3ixQYCGl3fdm8qlcZhLu/+ecn+QAOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5B/I0aMXP0yD+0/s4lMJ7L/Dz4SaWUuI4kjAcYo5Pz/x3X/szyLzJdeEA/0cjTrKeGA7H6Hkf3/dSsT+6PZSSK+unQSs+lhGO48SWZTEej49mauYL1f2LWNgSPVcAK0YcuyKM8CiKqDVuuP1aP5oBf2U98bQYoZ4eARC2JByOabXaqVjXraCUWhEfhsPMYXn9Tz3rVneSuQW00ggp0GqK0lOK4gxhS4Kgj7AlbqW0tTWMEQAXl42972YURcznOuuWN5LZAHnx92v5J0ZAhHpKjAAIgj6QtIZbqaTClVJIKen2+mn77MI5IQaOLtywtwFBpxELW+J6NwUAPVcIW6KB5wUs9DStiEUxAqy0NZbDstVqI2zJl2sPgHbQ2Ph9RvjshYIVRWnLaK3pPPTSdXV0zUkre5b91oDOnR8LIRG2ZPI0TI0IfrTSOy5sCWkgJndqod+2BkCjUUcpxUPnDq2239XZSyLKOSGOXoV/v++koh/KPe7u2nDTA66z6t9uwLpwrRXLa/fSR9iSzl1zRagGipYE9fimNXzf43vzK0IK3EsfgIewtXODsxcKFsRaa/rBkJmaQaNHPxhyemplFv5bA7SeMxmPOC+VU+HhY4BYMiJ8DPCrNdYrAqAozt60Rrdzj1+tobViNJrulQGGl2EP4TfTtRCC8bgHfMksHnY8B1TdYnxeKaFVssllIyZPw9dN/Fqb485dEyEFz4skAyDJi4We4npXjIbTlQwwvwLrGWMolUpxFEXYXzqUX4YsohMq7hnfBwssaTPv1ii633DcMj/r5wdnwdYT7r5WYq0UWmnOK6VEiFIHGQH8ao3Xu20yYPDzB1ppXO9q4/nGCMdx4svLOoNBm6L7jUt7RvdxQdGyOLVtZoM+fzebPDabLObd4xjgeyK2omeWK8AYoZVCSIkQ9mprLK2NEIBwEKCVTjOg27lHSLG3ka53U3AcJ46iiNPyLYso4llNsYtD5osKpWoNNRpzMm0xm82OVwG+J2IAY0RigloxAra3hhEOvGZAcmwyQOv5m4paNzJ8DDg/L6dGWJYVn11U0GqCqYqXswayXGLerR3XgG1GmAqYDMcbWyMcBK+fafxqDb/WKkCSKa53Re0mSNdZMma5NYBMog8yYJcRRuj62q/WmExGTIZjHsLFxu94b8ash2VWDr7Irtbwq7WVCnC9K/phSNDXhfXX4vUKyJoxpsI+zQDDrorwqzUegi4A9evaztdiY0Ry7uEZs63C9uXdZbRsxC7hsHs+sFwRWTImK0cbLBgjgr4uANzWr2I9V28mRo5cnRiZN8V9WsOs98mYffmQeZ3vidg+sVcegA6dGG1qjU0ZY35VsvJhA0tTEcYISB6JsxqxXgHvLX3Dh09s140wc4T1idFyaxgj4Ne7QtUtxscUbvi0kfUmI2B7a5iJUTt4+tA9fvrM/netsT4xur1vpsH6EfyxPy22VYR5W2z3kunPR4qHP2iAYdkI3/c+Tfh/Dt8TsTEjJ+fz+BeQCoeFSDVPUgAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "tertiary",
        },
        {
            id: 5,
            available: true,
            name: "Bulk Terminal",
            colour: 177,
            fundCostMultiplier: 152,
            probabilityMapGen: 6,
            probabilityInGame: 2,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1, -1],
                    [-1, 0, 5, 15, -1],
                    [9, 15, -1, 15, -1],
                    [-1, 0, 5, 0, -1],
                    [15, 16, 11, 2, -1],
                    [27, 27, 19, 19, -1],
                ],
                [
                    [-1, 14, 1, 14, 2, 19],
                    [-1, -1, 10, -1, 11, 19],
                    [-1, 1, 14, 1, 16, 27],
                    [-1, 3, -1, 3, 14, 27],
                    [-1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1],
                    [27, 13, -1, 7, -1, -1],
                    [27, 16, 1, 13, 1, -1],
                    [19, 2, 4, -1, 4, -1],
                    [19, 11, 13, 1, 13, -1],
                ],
                [
                    [19, 19, 27, 27, -1],
                    [2, 11, 16, 12, -1],
                    [12, -1, 0, 6, -1],
                    [0, 8, 12, -1, -1],
                    [12, -1, 0, 6, -1],
                    [-1, -1, -1, -1, -1],
                ],
            ],
            primary: [
                {
                    cargoLabel: "MNO2",
                    multiplier: 19,
                },
                {
                    cargoLabel: "RUBR",
                    multiplier: 16,
                },
                {
                    cargoLabel: "PLAS",
                    multiplier: 16,
                },
                {
                    cargoLabel: "FECR",
                    multiplier: 14,
                },
                {
                    cargoLabel: "ALUM",
                    multiplier: 11,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "on-water",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 40,
                        left: -31,
                        top: -8,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 40,
                        left: -31,
                        top: -8,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 68,
                        height: 93,
                        left: -35,
                        top: -61,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEQAAABdCAYAAAAcysDhAAAJ3ElEQVR4nO2cL3jiShfGf/0eBAIxYkQEIiICgYiIqKhYgaioqKi44hNXICqv+ETFihVXVFRUViBWrKhYUVGxAlGxYgWioqIiIgKBiBiBQPA8XBEmJCEhf4He79nXpCEhZ+adc857ZjIUfuM3fuM3quPkWIZPb8YrAGF26co2oyvzaG2JonVog1EiAJQ3RXmHbkU2DkZIGhEAajpDdI1DNSMXeyckjwhNxtubt+r3jx82eyOkKBFqOgNAyj5vb94K4JjENG64aGhoIgaGFxwHn7gYnOL7PgC+vzgKMY0ZrEqEYUj6/T6ntgWAlBLgaMTUNlSWCLs1QUoZEgFgdbtI2cb3F0jZDkmBDTGGYZwk7e1DrmvnEHf8guz1wvOsHLEhIri33+9jiI15TUbwtx+Soo+HkuvGk2pZIjqdjRdpUnx/AQSknH1+CZ57ILmuRchwOFz9XPRin2kiTrmhY1yHRAA4fROYAwIIyJjPZ7GjJuXy/g04vFxXImQ4HK5M02SmwH95j13beMRnAER7AoBlXQXnQgBxMvQ5wPCbG9x3JLku9QBNhBAeauEwm/lb9xhGEPPRhHl3e4Zzeh6cW1chKVCcCI19y3WhL0aJ0JBygBCCBZ3YvbvkM0oMgOMM+etpDnwcuc79QpIMKQdBByKjLIQIRzpPPu/v/wDghXVIHUiuiyI3hxQhA9hKirpRSfnsdoMRdb8eRq7LonBSjZIhhEAplZoLoo2MyucG9vo4iz2/abmuiv/k3eC+P2x5hlIqdo9WDCA8JkdOQ0rJ6+trzDsgIEJNZ5xyw8Dw6Pd7YYJ2+iZt5pXslUWuhxhdix/P/8M5Pcf3i8tnspEA19fXmKZJW5iNy3WavYeH6wIUxJFLiO9bGF2Y/PoR+1zLpx6hJDbJToZE2DaohQR8/vikG+4BxEIDwOqec3d7Vsne8/Mt06mH4wyBUV4XYyikMjpnSOkymwb1QlI+IRgtne0fHq55fY0n5aDhzch1mj2NbtfEMAZ0OkZp6S1FSNA5weTXLcZaLZLQKpIkoym5zrLnOENmszGGMQgTfhVCKpXuRtcKG7LdQBMApdiLXGfZAzCMwI5t22vFKY9ChGgP2TTiKnY9OqLttlj/NVlfa1qus+xtP68KCnuI7lBao4QQSMPCn7nhPe77A+cXd+F1yJbrtNkuZBdaafb08+oitw7JQp7Wa7n2/TGu+z38vKh8RvHwcF2rtiiDyush0RFTSiETg9OEXEfl0/O8nfaa8A5oaMUs6rZRLJcOrbaFlO4WMRAog/aSpHy+vAQJ03GG6856O+1FQ09Ks3JfKhMSje88dDoDnNMrJr9uma7rGIDp9Cb8O0s+q9irg1KERBWiSuOKyDWky+chyICShGSFxq77y8t1gKZyQlnkErJc/ADKT5I0yso11COjLpG5sttqn+O+P+Q+aLkoJotNyWcRe1lKtguF6hCrV91DkkjKdRJNhUq0ximDUoWZ53kopVI7orHrWhJZ8hk95kHbU0oxn8/C71UltlRSNU0TCEY56frRzu0ipap85tmLzpzroFIdkuxU2iw2irpynfxemr2mQq3yXKYMysp1FVRJoGnYGyGBXFdH1RGvS8zeCGlSrpsa/SLYa8g0IddV5bMqDpJDysh1U/JZFZUnd2VQRq7ryGcToVVpcpcmna22BNTO7xeR66JkpNmLvtGrikohs8/lvEMm0DQcJIdUwbGI+bCEHAu5hNQtsP5tOPh6SFPIshdNyh92PaTMkgA0kz8+9HpIvlzHUaYj/+r1kDqvEv6v1kOawIdcD0m+OIoizfWbRJ69o6yHZL1OSLvetFzn2dP4UOshUQ+qK9dF5DNqLy1kohvwiqISIVmJMTli+14PidpLI63KLqJGJ3dZ6rKv9ZBsNau2nQoa2g6Rtl8jiqbXQ/LsbbZllUdpQtIWiYpKbVPrIUXsaVIur89WAE8PPwvtRiwdMrsak3WtjFyXUYkixBizwPbl5eXq+pOxyru/0aSaFdNl5FqjCDFF5kgzLJgG28hnnSWXl5ery8vLTGJyCZHS3fqs6RWzfchn7Nmts9huRiklw+FwNRwOt4jJzCH65tn0B0YXwNlpuMj0v4hcp8lsWoIsutwghOD19RXbtlm6S8ZvY2zbDtuj+zkajU4ghRB9g+/7WJaFP9tudFVkTe6yVvPryCeA634DNjuZVNvE7pkAIUkaut9bISOEwDRNpJQxV57Px7Ual4a8HFAnVKJ705RS+C2PpVTh9k7btsPf7kDgIaPR6GTLQ1w3yBmWZSGEYDJxYDqh1T6n0wk6UMVbqsp1lZrC9xe47jcWCwvfn2D35yzdJcbZFX7Hj3mH53kn0T2wW4RoxjQsy8J1gfkmZvO2NuxaJEpDEWJ2raVoe7NZ4MWLhQVYPD4+snx/oXcxRBkqEIPlT2z7jKenp9S6JDWpml0/gxg3bFz05yLJhi0Wk9SG7+pQHimvr6877U2nAhBIKRmPx6EStnqfwnZLKRmN/BN4yrSTSkjHnwOSftsjwUsYSp7nhfGoS3PQoy3Wcm3Gvlt38+0ue+NxPMfpaYKUEiEEd3d3hSrVQqV7lsckiQGYTCY4jsNy4TYm1xCvffLqoGjNoeW0KFIJmcsOTDfnRTzm+/fvOI6D4zhMJhPs4Kdzjci1635DKRWUAZFRj4aCllZ9LEuERioham4BKiQmSVAaMYPBYK1Kk7VLB6M4n48RIr6DuQy0wgghIr/D88O/tTfofFI0NLKwRciPN5fLPz6DegyJ0R6SxC6PmUyoLddR+dS/0DLUL2biNLynrkcksUVIr9M66V3crD79+TcvX4Pf0E7bNizUlqfo8yxiqsp1Uj51wrQsC6UkRLyjrkckkRoy78+3J+/P0Lu4WQGot8egwYlQSqIJuY7K5+PjI1JKWu4ziFNc18VQv0CcZtYRdbFTZd6fb08Azof3K6MrQ4/JCqUm5Ho0GoWfBx6hWFoXWOvQeHia7awj6qIUy39++bZqtQIOx6ObMH7Nro83DYh4W5hb50BYKm9yzLp4M3yMmWIpg7yg1SMZVk3liDyUWkL8+uW/YaN6FzerrFDSnpKXYzQxS9mLyShsao19hUYWKi8yvz/fnugcYxgGanyfSYxGHjHR6vJQHpFErVV3nWPegff5cgVw3rcyk28RjzkWERqNvIaAQK4hyDMAL18/V1KlY2Mvo6FDCWDx9hgmX51kk0edhCFYn9hHm4qiMQ+JQocSBOQsANRjZoGnc43Z9YnME4+CvRAShSbHHPy1UgDqKTOUAmKOi70TouGN708g7jF5OeYYOFq82ldfVmryFSBW4L38nB81hxz9fyDbV19WhhC8j+/1O5Sjt+lD4Hx4vxr+/Zj77nXf+AedvcbKhgtoggAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -35,
                        top: -15,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACQklEQVR4nO3WL1TbQBzA8W/3KiJOnKiIiDgRUYGIqJioQJyIjKhAIBARiImKigkEAjFRUTEZgUBUTCAQFYiJCUQFAlFRERGBiIiYiOh7N1HS8WC8NyCh7O0+71XcicvvX64By7Isy7Isy7Is6//T2nYAD0VRZAB839/sjcfjxuJ8NwXQLsbzHZQDabnea+cCgMHkjDAMG4n1QxOHPod2McmBNJ7vbPaUA3lechNNKX6uAPDDkWni+VubAO1i+jvrpNMS+ncFOL8qyKNLpPJYHXdRssNlKejqIbNkWHu8b16A+6MO6+SVA/OsfJT43PEoioJ2d8By1sw90Mihnh4b4boszvY351cdrxKu3vM8fzrxprp+X62HV4k/9DGNn9VxHX8hOdp7k+ms5SFPJS699V58O+DHct3ybXf8oVr+BUK1YDU/3ayl5yI9F+dqyjDIybKSPC9Z9C9YDReIU4036ZO7AZelwO0dkKZp662TB2jXdZAQEpl9x/dBB5rpdA5SAjDrXSAHHuK4iyc7zN2AZVHQVpr0etxKk2FdYTzbqyq+u7tr/Nsb6EcA5Lmk0ynQWt+tcwDOTz5tfdSf8qogRqORSafJZi3DAQBBEABw/fUYYCuX2996cTB+ODLRDlQFkOLx21QlPrtZ0hXtd5V45cV3gBCCJJkQxzFKKQB6vR4Ah4eH647vfyY52mt1/1Ccf14YT0x8MjVSSqNcfv+UMmE8aeS7vQmvHsvFz5UZT76Rpbcss6yxT1bLsizLsiyrZr8AhH/ymetw/88AAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -40,
                        top: -12,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACHElEQVR4nO3XIXDiQBTG8X9vEBERKyIiVqyIQCAQJ5ERESdOIBCVCEQFohKBQCAQEYgTiArEiRPICEQFogJRUYFARERUICIqEMzsCSbpXTu94UoCiP3NMAzLDG+/feRNAoZhGIZhGIZxMaQ/0tXrqT5FratTFDmU9Efadt1366vpdWn7rJT1w//jo+BCvl8r2pfSKxzA263YLe/yz0K6COliPfykW98wHo9Luxwu4gCEENi2wE3u2S3v6NY3uKsIIQQAj+M+URSVcghnvQR8Fy09i4rj4DgOm82G9EXsv/MVAPP+DVI4dDodgnaoo0m30HlwliGYBVcWSGmxWG8B8ILe/t3z8uCzrUWaplSqTdbRqPD9nvQAsuANzwJgsd6iLFgmWzbf5wglkWHjr+BVv0vRXf/TSQ7Ad9GNmoWU++BJsu/4v4L77SGTXqv0/ZVawHfRrUDkgeMtZ+/4W6UUyoID+fV9acEzhRbM/upZp2E/5GYP6YfByxpuhzq68GAw0PE0ZPE1REiX6uJbHv4SO/7WURsYDAb68ccIYb/eTmQHAZx1uB2qkBuh9GUHgLAr1O5v8gORwmFmSebPKdHTE1W7cjXptYooWZhPd8ILbnXNWtPpdFBK5etxHDMcDknT9CI7Xph6s6+FEFoIoZXL60sprZTSQTs8yfP8sT7dmaAdaqlcbrtNRuEvkviZdZKcdaIbhmEYhmEYhnGw31Jz9d5VLb30AAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -13,
                        top: -19,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACJElEQVR4nO2XIZCbQBiFv+sgEIgViAgEAnGiAoGoiKiIQEZERpxARkREVFRUIE4gEJHIioiKyBOIExEnIiIjIiIQFRERiAhmtoJerlxzM6FNSDPdb4Zh4P9n9+3bNzsACoVCoVAoFAqFQqFQKBSK/4ubOs1hGEqA79vyOVvNmU6ntcb41zha/Hg8lo/3nxGGRmHmANg6rHegbQyS5eYqjXh3TJPjj6RpmgDMvJjNZoetv9QLMye5EzK4NeVZVJ6Ro3bND2K5TGM6ernzMy9GWC3MaYfuB1G+W+2uMhFHi3T8kSyW3xBC4O0yoGqEZ+mV/msxora45zS8ZYRplka0nfKeZTuyrGqE1YkkQJaOLm7OHwsIwolMk0+1EpHqIQBGq1WpLb/2L2bEX09cJxFRMT44hrBKQ57uO40bcbIJ3zICwJn38SydzO7zOFujeXfAy8L1pwm9nstgMGjcAO1UAz0kwxsoD8v052HZng/LmhWxAHyWGIbAzheY5hbXcknTNQhxKhm1OZvjhxJBu1vpcV2XxSLHdQ0AFuMv0O6SJEljSThZAl7znIjKYTmblsVfjHBdo1w4sM0LPrruuSQdpDGnl3kh/fdOJRHbvEAYGtu82PcFyYRBnLJ6iBrRdrYEvObW0H5LRDAIcBxn32PbNlEUYRhWU7Iuhx/E0rZtabfYX0IIGYQT6QdxY/8UF/8Sc/yRdCwLy24xGvb2SVEoFApFA/wAyrzfh8yoYx0AAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -27,
                        top: -12,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACDklEQVR4nO2YIW/bQBSAv0kBBgYHDAwMDA4UBBgEBAQMGBgaFBQEBgYEBAQUDBQG+AcEDBQUBBQMBBgUFBQEFBoMBBgUBBgEBES6Ac9uInWTpTWXLLpPOuCns3zv87vnk8FgMBgMBoPBYDDoxAunygun6tTr+KL7gVXStusexLP7vva1wAkEXPXvP3zrwnMp8jftIlo6HxbHsXKsJ5avBdurGCgTB3CzBVZRkOlcEBoFxHGsnOwZejHCFpA/ISWsM0FRFDhS6lrKAVoERINEvaYJoVVe7+fqOA4AQWADNmJtqdbaZpattWwFbftNRmO1y+YIIehs8zLYiwmCAIDlw7gMSYs83wKQ58cXob0JRoNEZWlyIGLhTbBdF7ns0/EsVlvwf1fLagvHrIiTfHoABncPKp1N/ijCcUoDvlVKgOOIOJmAiqYV0ZNWfc/LS+vTRJxcQEVTEfAu4zNEnI2Aio+a5b6IuCvqJln1in9plmcnoKJJRUApIev9AKD9eIPfH3F7e9s4r7MVUPG3ZlmdItuPN/X8YrPj6+SO4XDYKLezF1CRbXYqasvDcwRlwsJuUWx2dWw8X9Dtdi9LQMV+RQghCMOwlNLp1HPSNOX7c8HPxfS/y68x0SBRvu+Xw6UeQgglhFDB9bdG/xouwpCMxkp6Hp7vMh5dM03m5Ks3FrPRReRnMBgMBoPBYDgGvwCjC+ekqUhCEAAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -15,
                        top: -11,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAExElEQVR4nO2XIXDbSBiFv94IGAgsEBAwWCBgYCAgYBBgIGAQUFBgUBBQUHAgwMAgICAgIKCgICAgIMAgoOCAgUDAAQEDAwMBAQEBgQULBAw0owOKHDttL20lpwX+SGbs7O7/3r5/dw0HDhw4cODAH0lRPJS/u4bfSrFi7wb8te8FmhCFcu9rGHtf4ScQQpSuzrENk6zI6Q2SzXdSyhIgSZI3ba75RyRACFGehcflKAdXdLFNgW2YRKFkiFFKKUutNVprXNdttS1+uwFhGJajHPLRCoAs12S5xjYFvUHCSLoMUo2rc6SUaK0RQrRmQqtxqpnNZuV4PP7huaMoKrXWzEZjAGxhVX9tG4BltGVOkTP0Dc6DdSu17+UM6OfTn/r/6fQGrTXX4ZxtI2rcXh+A0+hfpsLleKw4D5JWam09AUXxUBINcY7lzoElpSy/dYCFYVgGQUySpCilKiOuJztG3KJRjkN8dwdAcjtEu5/4mZR9j9YNkFKW4bXGHumduedTuxxdZjufhWFYLhYLLKuKfBwX3zRCCAHA+P0Z08k78vlHLu40l3ezxia03gJJkryxursPmNWNLPsf/v/6ur4O+PjRx3EkcdwlSVKm0xscB4KHBM/1kF0JwMWdBkBK2bjevRyCxYrS6D/Nnc1FuZ2I48l4x6CRPNqkYJs4LtB6SRyD57k4TrVftfAkSf68BDxnW3wt3M01qJRFFCGdHnOABN57bzfj6kQoJfG8ypxt4bPZAsdpXt/eE5DNRfkhGAFPwlUBaEWiFEIInL4HwNIUwK4RSiksy0JKuRHu+xKA89sMYa2J51e/rGOvCajFu7kGQGUpaIUuCliv6Q5OSMPb6nPAra597hZfgCcjavFKKXxfcvllDcBaK0xpN6pxbwYcT8alSkPcXG8EapXRHZxgAlpr4jjGGZxQAEIIVDwHvjbC8zyUUlvCNWutKHKNLXqN6my1BY4n4/Jv4wF3uGb50OFLVPVuLbzXH5ClEQB2t0eWRgRBAIDv+yRJAkAmcgBWqxVaKUwxAXaFG6bgaNhjfnPaSEMrBljeWTkYxri55kgs6Tod7mcZ0dokM6pXnO/7aK13TNi+44MgwPSqra+F9/zq4RMHDzvCF8vPXH265+as+UOoUQtY3lkJYC4vWC2B0zEyq2Kayvf0paSrNfAkNlqFm/G9/oBoFRKRYnr2jnAbSBdLAPI0xjAF7/9+W40zjdaS28iAjhAYD1U8HQs6szlprzIgs3KE1iwWC3zfJwgCPK867YUQBEFARHU2PBe+vL3B6nvoJAZgeDwAaGXHn9Nowq5/VdYGeLZAmAaJVgDECvqn1Vs+X2SbMY7jfNXjddTrHa+F245ZzdXgmnuJ1m6BRaZxLBBGZYQwCpjNWWR6YwRARv7dqNfCj4Y9Mq1Z3p/vTXjNLy/gjCZlukxxTz4AkF35Lw/y+zs7/jzqtmNimuarCK/55QQURQHA6v4egP4k+KFx2ztumAKdxK8S9e/RaME6BcbjE7Yjvv5BU9N5vO7gdXv8JRovXJsAbIzYpiMsOkJsRMPr9vhLtFKAM5qUALUR29SmjE+GTE7fcXr6ufHrrU1aLcQZTcp/7i8Zn1xgP0a++/hjZR93+IEDBw4caMh/llaHvMyYsecAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -25,
                        top: -20,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAElUlEQVR4nO2YL3TaXBiHn30HgUBcERERcUUEAhERgURERExMVCAmKhAVExOIioqKigoEYmJioqIioqJiAhGBqEAgEBGIiAhERMQVEYiccz+RhkK7nhVG1+4cHsOfQ97k9+S9b+4BDhw4cODAgb1RFGP91tfwphQR/5SA//ZdcD6R+y75vpFSainl6q4XEbpDTXdrQneoaSHEu+6IP+oAx3G0UgqlFFJK3aGm5xOJWWtgNgSOsPBzKFz33YrYWYAQQt8Hx1E57YXClw7NdoLZEKS5Is0VAP04w89hMpm8Owkfdj3w3KvrcVis7jaA02wBkKZp+aoyALqjACEEzWbzxecLgkB3u92dr++l1HY98KhrUo8NLlXM8DfBT04GCCG2qt/KT3e9tK3YyXAQBFrMviKPxwBcqz7f/DuOEcDT4IZhIKWF59m02+0n55RS6iRJPqx/jn8m0BxTq3VetQu2Lh4EgT793OXss6Dhf+dycENwfQGAUuqXwW27bLQsy3Bd94mE0amp/ct047t0JHT7RLAu5jXYeglIKQG4uFZc+iAtyWBwy3Q2xetI4hhs294I/v17yMmJ92xN/zL9EP2QutV7CGtYiiRRrz4DduqASkKSJADEccF0OsO2QQhnFXydLMsYJXcb3/0cBKvzpyOhTf8hcBGha63dh/RL2foE/X5fxzF0uy6PRWRZhmEYT+749fQWACuOSOI5brMJhsXs/ulRiViX8C4F2H5fq6zO+bEJQBgmKxFJkqwEVFTBnfv9QBxNy02TYYAwMGpsiPjhjfjbAraaAY1GgzROubwVAJx+kmRZ+ciT8uH94+BZugDKIWm1j1GzAIoCajUowCl90gt90tFoYym8NlsJMIVgns9RSUxdGGsiMqSU5RpPngZv2H4Z3mgTxzG2013tCxaTq1V9x4RsIfjY9zUEf5rtRWxt2u8N9d14TpErag1BXRjU78PkaoAwDFqtcmNkqgZQdkcYhgB4nodpNUkX8/I3VpN5NGExuUIYZSt8amY4nSWzcZ1vRWdjWO6bnQr3LgLd/3qE63zZEGF7HQDm4ecNEfk0xfPKoVjtFeAhvBBiJcgsIpr1nKOuySJecqccZg3BZGyTTS/2LuKPCvYuAg0QXI0pcoXRcgGwXAd4KqKJRbPVZh5NVjWEECilNj4nScKR8ZNFuuTW8ImG5XLInTOAvYrYSyG/N9QAd+OyrYW0yaIpznEPeL4jquDT6RTP8wjDENd1mbPgUzZisVgSzeuoQhGX85WiM2AR9t+XgArb72uANM6BUgQ83xGmahDH8er4hlvOgGgYYN8/TaUwUHnBNFXAOxdQ4Ryda1OIjY6A50VURMMA1xTlMY0aKi827j78IwIqnKNznef5Rkf8amkQRr+tZfbLITm7+oHlWMSjwV6u/a9sOH63NF5CdHMDQJErzJZJEg7/HQEVz4kAWK49CR6zvP+DpcjVXu8+/GUBFY9nBJQylkqtwq5T3O8s9x0e3khAhd8b6uHwC4PhDcHVGHgIu47lWAB7Dw9vLGCdalO1SKr/FRXB1Rkfj05fJfiBAwcOHAD+B5RDVfzsIy3vAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -29,
                        top: -5,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAElUlEQVR4nO2YL3TaXBiHn30HgUBcERERcUUEAhERgURERExMVCAmKhAVExOIioqKigoEYmJioqIioqJiAhGBqEAgEBGIiAhERMQVEYiccz+RhkK7nhVG1+4cHsOfQ97k9+S9b+4BDhw4cODAgb1RFGP91tfwphQR/5SA//ZdcD6R+y75vpFSainl6q4XEbpDTXdrQneoaSHEu+6IP+oAx3G0UgqlFFJK3aGm5xOJWWtgNgSOsPBzKFz33YrYWYAQQt8Hx1E57YXClw7NdoLZEKS5Is0VAP04w89hMpm8Owkfdj3w3KvrcVis7jaA02wBkKZp+aoyALqjACEEzWbzxecLgkB3u92dr++l1HY98KhrUo8NLlXM8DfBT04GCCG2qt/KT3e9tK3YyXAQBFrMviKPxwBcqz7f/DuOEcDT4IZhIKWF59m02+0n55RS6iRJPqx/jn8m0BxTq3VetQu2Lh4EgT793OXss6Dhf+dycENwfQGAUuqXwW27bLQsy3Bd94mE0amp/ct047t0JHT7RLAu5jXYeglIKQG4uFZc+iAtyWBwy3Q2xetI4hhs294I/v17yMmJ92xN/zL9EP2QutV7CGtYiiRRrz4DduqASkKSJADEccF0OsO2QQhnFXydLMsYJXcb3/0cBKvzpyOhTf8hcBGha63dh/RL2foE/X5fxzF0uy6PRWRZhmEYT+749fQWACuOSOI5brMJhsXs/ulRiViX8C4F2H5fq6zO+bEJQBgmKxFJkqwEVFTBnfv9QBxNy02TYYAwMGpsiPjhjfjbAraaAY1GgzROubwVAJx+kmRZ+ciT8uH94+BZugDKIWm1j1GzAIoCajUowCl90gt90tFoYym8NlsJMIVgns9RSUxdGGsiMqSU5RpPngZv2H4Z3mgTxzG2013tCxaTq1V9x4RsIfjY9zUEf5rtRWxt2u8N9d14TpErag1BXRjU78PkaoAwDFqtcmNkqgZQdkcYhgB4nodpNUkX8/I3VpN5NGExuUIYZSt8amY4nSWzcZ1vRWdjWO6bnQr3LgLd/3qE63zZEGF7HQDm4ecNEfk0xfPKoVjtFeAhvBBiJcgsIpr1nKOuySJecqccZg3BZGyTTS/2LuKPCvYuAg0QXI0pcoXRcgGwXAd4KqKJRbPVZh5NVjWEECilNj4nScKR8ZNFuuTW8ImG5XLInTOAvYrYSyG/N9QAd+OyrYW0yaIpznEPeL4jquDT6RTP8wjDENd1mbPgUzZisVgSzeuoQhGX85WiM2AR9t+XgArb72uANM6BUgQ83xGmahDH8er4hlvOgGgYYN8/TaUwUHnBNFXAOxdQ4Ryda1OIjY6A50VURMMA1xTlMY0aKi827j78IwIqnKNznef5Rkf8amkQRr+tZfbLITm7+oHlWMSjwV6u/a9sOH63NF5CdHMDQJErzJZJEg7/HQEVz4kAWK49CR6zvP+DpcjVXu8+/GUBFY9nBJQylkqtwq5T3O8s9x0e3khAhd8b6uHwC4PhDcHVGHgIu47lWAB7Dw9vLGCdalO1SKr/FRXB1Rkfj05fJfiBAwcOHAD+B5RDVfzsIy3vAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -32,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAExElEQVR4nO2XIXDbSBiFv94IGAgsEBAwWCBgYCAgYBBgIGAQUFBgUBBQUHAgwMAgICAgIKCgICAgIMAgoOCAgUDAAQEDAwMBAQEBgQULBAw0owOKHDttL20lpwX+SGbs7O7/3r5/dw0HDhw4cODAH0lRPJS/u4bfSrFi7wb8te8FmhCFcu9rGHtf4ScQQpSuzrENk6zI6Q2SzXdSyhIgSZI3ba75RyRACFGehcflKAdXdLFNgW2YRKFkiFFKKUutNVprXNdttS1+uwFhGJajHPLRCoAs12S5xjYFvUHCSLoMUo2rc6SUaK0RQrRmQqtxqpnNZuV4PP7huaMoKrXWzEZjAGxhVX9tG4BltGVOkTP0Dc6DdSu17+UM6OfTn/r/6fQGrTXX4ZxtI2rcXh+A0+hfpsLleKw4D5JWam09AUXxUBINcY7lzoElpSy/dYCFYVgGQUySpCilKiOuJztG3KJRjkN8dwdAcjtEu5/4mZR9j9YNkFKW4bXGHumduedTuxxdZjufhWFYLhYLLKuKfBwX3zRCCAHA+P0Z08k78vlHLu40l3ezxia03gJJkryxursPmNWNLPsf/v/6ur4O+PjRx3EkcdwlSVKm0xscB4KHBM/1kF0JwMWdBkBK2bjevRyCxYrS6D/Nnc1FuZ2I48l4x6CRPNqkYJs4LtB6SRyD57k4TrVftfAkSf68BDxnW3wt3M01qJRFFCGdHnOABN57bzfj6kQoJfG8ypxt4bPZAsdpXt/eE5DNRfkhGAFPwlUBaEWiFEIInL4HwNIUwK4RSiksy0JKuRHu+xKA89sMYa2J51e/rGOvCajFu7kGQGUpaIUuCliv6Q5OSMPb6nPAra597hZfgCcjavFKKXxfcvllDcBaK0xpN6pxbwYcT8alSkPcXG8EapXRHZxgAlpr4jjGGZxQAEIIVDwHvjbC8zyUUlvCNWutKHKNLXqN6my1BY4n4/Jv4wF3uGb50OFLVPVuLbzXH5ClEQB2t0eWRgRBAIDv+yRJAkAmcgBWqxVaKUwxAXaFG6bgaNhjfnPaSEMrBljeWTkYxri55kgs6Tod7mcZ0dokM6pXnO/7aK13TNi+44MgwPSqra+F9/zq4RMHDzvCF8vPXH265+as+UOoUQtY3lkJYC4vWC2B0zEyq2Kayvf0paSrNfAkNlqFm/G9/oBoFRKRYnr2jnAbSBdLAPI0xjAF7/9+W40zjdaS28iAjhAYD1U8HQs6szlprzIgs3KE1iwWC3zfJwgCPK867YUQBEFARHU2PBe+vL3B6nvoJAZgeDwAaGXHn9Nowq5/VdYGeLZAmAaJVgDECvqn1Vs+X2SbMY7jfNXjddTrHa+F245ZzdXgmnuJ1m6BRaZxLBBGZYQwCpjNWWR6YwRARv7dqNfCj4Y9Mq1Z3p/vTXjNLy/gjCZlukxxTz4AkF35Lw/y+zs7/jzqtmNimuarCK/55QQURQHA6v4egP4k+KFx2ztumAKdxK8S9e/RaME6BcbjE7Yjvv5BU9N5vO7gdXv8JRovXJsAbIzYpiMsOkJsRMPr9vhLtFKAM5qUALUR29SmjE+GTE7fcXr6ufHrrU1aLcQZTcp/7i8Zn1xgP0a++/hjZR93+IEDBw4caMh/llaHvMyYsecAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 40,
                        left: -31,
                        top: -8,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 92,
                        left: -31,
                        top: -61,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABcCAYAAADefbM+AAAHXklEQVR4nO2aLXTiyhvGf/s/iAhExIgIREQEAoFAVCAqKioqIipWICoQiIorKlZccUXFiooVFStWVFSsqKioWIGoQCAQFQhERAQiYsSICATn5C/CDOGrLR/tPfec+Z3TU1qSybzP+877TAJgsVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxXJgrq+vs2kqs2kqs39zHqXPvuD19XV2cnKC7/u8RAqAaSqzUll8+ey5AHzaRYuBj5MUgHGSIJOEo0aDNE1o1AI+W4gPv9imwAG63WfqtSoAtWqFctmj6pc/VYQPu9A2gQMm+MEw4ujo6L8rgA68UQvMGi8G7rkQhq2Fc3TgkAtRq/n/PQHeyni/3+Pi6xkAQghznuu6AFQqVYRwuHhU/OlU187r+vo6+/ZXB+Bgy2RvF9CBAyb4YuCdixZn/3Q4Ou0RxzG+75ugYS7AVW9CRSyPvniNj3COvQTQE/vx8zd/X/0F5FnXa7x1fkKaJgyG0P9zj3f8A8edUPakGcOt5FNwfXfj+HNhU+McTqlBv9/P9nWOvRQMwzBzXJ+T4yYA3eeeeb2uuZ1dPuG4LmXPQ45GiGoVt+IB4PoVKsJhLCc05QOf5Rx7VUAQBIzllNGwzwTXVIFGBz4Y5kI4hdIX1erGcdvt9kLGYR54vVZdK+6u7CXA7f2Y8NTjZZQgxJThsG/ec12X8XixuU2U4p8Lj9v+K4PCSuCeC52L9c6hxd2VvQQolV0AeoMp4SlbNTe9BJbp+JJxsuocb4m7cww7nwlMU4UQNZoNiRCC1t89E9S65nZxPDGvl4Pv+HljPJRzvJe9BLhsVRhLSW8wRQgJlDdmFnKbVEpxd9kwziGEQ/8lOphzbMtB7gabjXyY1xobQBzHRFHEMJKcHDfpDwbGOd7T3F4Td1cOIkC96jGW0zcn6Ps+wIc4x6787xCDvIwS81qORmuPuWk6xHHM7f3YnCOlZDjsm5/xeES3N6Bc9vB9n6vehIlSfAudQ0xzLQetgHUZumk6COGYZlYq5xubQzrHTdPhz45zP4gA+T5A8KNVvMkpA5CmCWmal3Mcxwd1jqK4u7KXAFEU4bg+9Wq+GVJKrRyjvVrKCb7vc9lia+cA3hR3V3YWIAzDLAiC2VrOb3HXlXORYqa2cQ5tn8sUxd2VrQVot9sZzAMUQlARJcZyunKsUmohO77vGxG2dY63xO2EtSwh4PHxcaubone7QLvdzq6urjIp8w1JGs3bju7owNpM6QwVK2Ab51jH8nUSAgDCTjMLO813P2p/swLa7XYmpUT/ALPfweyS82y+xboKeI9zaJRSK9lfLn8vUSSeSxiGmaf6/HxOXq2IjQLoNa6V1ms8iiKCdITym6YJaheA1VIVwlk70W2coyjCJs7CFo/f2yTVYxj3oNQkKU8JwzADNi6NFQGurq4yHXQUzbeiURShlMobkt9cOEdnc1OGtAh6nG2dQ/OauPd3t7S+/QLg6TFPmEzmzx917/r169eCEEYAfUAxaGY3IHGvjx+cmQlIKTkLWzw93gMsVACsL9U0zdf8Ls6hXeA1cZVS3N/dAtC6uATg8fsD3WGXer0O5NdbFqKk/yGlJAgCpMw3KFJK1KhEEATQBJCQCM5mj7Tv727NhIo9YN1E4zhmOBrjlD0g3to5lt9fJ246EVxe5E+MJzOxx45PvZqf//LyYoSAecK/LP+jFD0xDc5Mw9PKSSlRSnFy9hUAb5bx3w+P5phmI1ioBIB0UlqYVBzHuf3Nxr+6bJmgXNdFKUWlMm+Md3e3+L6/0GO0AOWyR5omDEfjhWtUgjrD4ZDff75Tkq4RUQhBt5tXhO4JZgnoktBdXzdAKSWyNALyCSSJpOq7JLMAvp6HQP5AFDCBObMs6kkts41z6HGFECilTN9IJ6uBA9zdhkyjKUfNc2RZLmQ/juMvRWvdaBHtdjvTGSlWg754rXFC1XdRswx7S5lfDvzh4QHIM+i4vgno4uupOUZndh70hOfnp5W5LYtrAv95w3T0TPWsPZ/3NHeETS7w5q6pXq9njUbD/L284Tk/P8//ngnhOlPzt+tMFwI3Abi+6QHh6ZF5r1ja2gW0AEEQmEfkOnA1KVGr1Xh6uFtIkkYIsdL1txZAU6/Xs3V+vK4iNgWunaNYAVoAbbFFAeI4ZjAYvJrxYrB6TNd1ubm5eVdsW3+YoJulZtMWeDlwmDvHcgXo49/b3Aa9xbv/YuN9K+PL7PzJUHFpDAaDjbu1QziHrqput2vO01Wjf28buGbvDxf1VrO4bdZVIYQgiqKNDbP73KPZCMxYm5xDB67HLLJr4JqDfTxeXBrLDekQzqHRQu8buObgX0Qo2iew1kJ3cQ54X1fflg/7Jka73c5K0ROJe7Ty3jbO4ak+iXu09YOO9/LhX0XpHHuZ3lrr9fuWcxSb3KEzvsynfRdHN0s8iZcopiKvjOV+oUX66MA1n/7lxDAMs+LDFb2B0XxUqW/iX/l2JsyF0EvjszJusVgsFovFovk/8nP2RtPC90YAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABdCAYAAAAVIWCbAAAJMUlEQVR4nO2bL3Tiyh/FP/0dREREREQEYkQEAoFAVCAqKioqIipWICoQFSueqFixYkXFEytWVKxYUVHxREVFxQrEigoEAoFARERERIwYEYHgHH4izBBCoIXSvvPOyT2np6Xkz9z7vfO9kymFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFA+Pm5mY+S+V8lsr5vzmO2kff8ObmZn56eooQglGoAJilcl6z3aOPHgvAh900TzxOUgDiJEEmCcftNmma0G76fLQQ736zTcQB+v0/tJoNAJqNOrbt0RD2h4rwbjfahThgyA/HIcfHx/9dATTxdtM3czxP3HMgCLor52jikAnRbIr/ngAvVXwweOby0zkAruua8xzHAaBeb+C6FpePit9XjdJx3dzczL/8dQVwsGny5hTQxAFDPk/86rLL+bcrjs+eiaIIIYQhDUsBrp+n1N3i1Vfv8R7J8SYB9MB+/PyHr9d/AVnV9RzvXpySpgnDMQx+3+Od/MByptieNNdw6tkQHOFsvP5S2NQkh1VrMxgM5m9NjjcpGATB3HIEpycdAPp/ns3PZc3t/PMTluNgex5yMsFtNHDqHgCOqFN3LWI5pSMf+KjkeJMDfN8nljMm4wFTHOMCDU18OM6EsHLWdxuNjdft9XorFYcl8VazUSruvniTALf3McGZx2iS4LozxuOBec9xHOJ4tblNleLbpcftYMtFYY2458DVZXlyaHH3xZsEqNkOAM/DGcEZOzU3PQWKuBKSOFlPjpfE3ZvD3mcCs1Thuk06bYnrunS/PhtSZc3t8mRqfi6SvxJZYzxUcrwWbxLgc7dOLCXPwxmuKwF7Y2Uhi0mlFHef2yY5XNdiMAoPlhy74iBPg512dpltjQ0giiLCMGQcSk5POgyGQ5Mcr2lu28TdFwcRoNXwiOXsxQEKIQDeJTn2xf8OcZHRJDE/y8mk9JjvHYsoiri9j805UkrG44H5iuMJ/echtu0hhOD6ecpUKb4E1iGGWYqDOqCsQt87Fq5rmWZWs7OFzSGT43vH4veeYz+IANk6wOVHN/+QYwOQpglpmtk5iqKDJkde3H3xJgHCMMRyBK1GthhSSq0do7NayilCCD532Tk5gBfF3Rd7CxAEwdz3/cVczh5xy+ycR75SuySHjs8i8uLui50F6PV6c1gSdF2XulsjlrO1Y5VSK9URQhgRdk2Ol8S9CprzBJ/Hx8edHopenQK9Xm9+fX09lzJbkKThsu3ojg6UVkpXKO+AXZKjDMX7JPgABFedeXDVefVW+4sO6PV6cykl+gtYfPcXt1xW8yWUOeA1yaGhlFqrftH+XqJIPIcgCOaeGvDzT7LVERsF0HNcK63neBiG+OkEJTqmCeoUgHWruq5VOtBdkiMvwiacB10e/+6RNE4gfoZah8SeEQTBHNg4NdYEuL6+nmvSYbhcioZhiFIqa0iis3KOruamCmkR9HV2TQ6NbeLe393S/fILgKfHrGAyWe4/6t7169evFSGMAPqAPGkWDyDR8wDhn5sBSCk5D7o8Pd4DrDgAyq2aptmc3yc5dApsE1cpxf3dLQDdy88APP79QH/cp9VqAdn9ikLU9C+klPi+j5TZAkVKiZrU8H0fOgASEpfzxZb2/d2tGVC+B5QNNIoixpMYy/aAaOfkKL5fJm46dfl8me0YTxdix5ag1cjOH41GRghYFrzmOI65oFIKTw2YudkmhOM4C0EamSBKkSwaoVb5n4dHU00tnlLKWDudxiuD0sinwLbmlu8B28T98uXK3KPutxiPx8xcZc5vtVq4rku/nzlCX6emLe/7Po7jEHFu3KCUyrp/bQJkFk8SSUM4RohPFwGQbYhmA89+by2qWCSusUty6Ou+JG7dbwFwdxswC2ccdy6Qtlyp/sXFhbmGEGK5K6y7pREiinAcx4igoW/ebJ/SEA5qmrURz119eikSf3h4ADJXWY4whC4/nZljdFWWpKf8+fO0JkpRXEP853dmkz80znvLcc+yRMgnmhCCfr8PFLbFhRBzrZQW4uHhgXa7bY4pLnguLi6y1wshHGtmXjvWbIW4IeAI0wOCs2Pznv5u255JAS2A7/tmi1wTV9MazWaTp4e7lSJp5KNZV1wTb3sh/Ym7GoNRFB0BK6uo09NTI0RZJGmCeUc41oz+0z9rxPdNDsv2iJN0reL9n98ZPv82ZLWrNOH8WIfDIWEYGuIs+uzaOmAhApuE2LQ0HQ/7jIfL10XisH9yFJtb/+f3lWO1kEXyuuJlxMN0Wi5AXohWqzUfjUYrvy9ODdd1GQ6HG1drh0gO7aq7BfE80TzhotW3EdfY+iwwGo2Ovl6dzZ8GCUUhtCM0+XyT0fNRE3trcmib62tqYYsos3porxL2bYsIUGkTUK//22Cr1Zo7dkgUu/p1dsFcamgUG9IhksMQWAhdZnVYNrfThlz5LuoxUVxfOc9tdV+/HzAajY6EEHPHcXDscM0ReSGKbtAEdJ/QyaEd8ZrkgKWj9rG6rnhiH3N80gTg7lv3aKcNkSiKjoQQc6WyObhNCKUUtfAJnGPz3j7J4akBiXOcLclZNkxtdcceE8V1Q7yIYeIDWX+Z1s8Mcf3+3n8e125QSiHqcuPUiPu3zPxz0+xgfS2hoYlvanLbrK4tXmZ1/ACA0cO3Nb577wlqNwCoNFNZ1OW6I9pd80whpQRP4qGYuccmBfLIN7m3WF0phde+xKu7KxU/mABaBMjckBeiaUUUdDCOGA6HzNwGzmJzpShC/sFsm9U18WJXV0rRvvgCwK+vn150+EH+LrDsDQqA1LUhptwROSHKVm+64sU4a3sZ0WLF83O8FVwDryOucbCPyubdoJ1gyxRwtzoiX/EyqxdzXCNf8Wn9DOF5W62+CQf/rHC+N8RWC6ZqqyNc1y2teLGr68rnievmNnn4dlS+r/wy3uXD0sXeoFHmCCHE1uZWNsdf09xei3f9tLjpDYspoZ2gIeqStjfbSlzPccsP8IC68Haa4y/h3T8uXxaXWghbplB3gM3NTRP//euvd/n47If8v0AxJfLYluPT+tm7Edf48H9SKK4g23WH/iT3HL9l1fYe+Ff+S0NPCR2Dh25su+BfEQCWIpxc3lCr1Q7a2HbB/wFy2QUr2mSdYQAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 92,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 6,
            available: true,
            name: "Carbon Black Plant",
            colour: 178,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [1, 1, 4],
                    [0, 0, 3],
                    [2, 2, -1],
                ],
                [
                    [0, 0, 1, 4],
                    [2, 2, 3, -1],
                ],
                [
                    [0, 0],
                    [2, 2],
                    [1, 4],
                    [3, -1],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "CTAR",
                    },
                ],
                production: [
                    {
                        cargoLabel: "CBLK",
                        multiplier: [8],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 7,
            available: true,
            name: "Chlor-alkali Plant",
            colour: 191,
            fundCostMultiplier: 170,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [4, 3, 0, 1, 2],
                    [4, 3, 0, 1, 0],
                    [5, 7, 7, 6, 6],
                ],
                [
                    [-1, 0, 6],
                    [2, 1, 6],
                    [0, 0, 7],
                    [4, 3, 5],
                    [4, 3, 5],
                ],
                [
                    [4, 3, 5],
                    [4, 3, 7],
                    [0, 0, 7],
                    [1, 1, 6],
                    [0, 2, 6],
                ],
                [
                    [6, 1, 0, 4, 3, 2, 5],
                    [6, 1, 0, 4, 3, 7, 5],
                ],
                [
                    [0, 2, 0, 6],
                    [0, 1, 0, 6],
                    [4, 3, 7, 7],
                    [4, 3, 5, 5],
                ],
                [
                    [4, 3, 4, 3],
                    [1, 0, 0, 7],
                    [6, 2, 1, 5],
                    [6, 0, 0, 5],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "SALT",
                    },
                ],
                production: [
                    {
                        cargoLabel: "ACID",
                        multiplier: [4],
                    },
                    {
                        cargoLabel: "CHLO",
                        multiplier: [2],
                    },
                    {
                        cargoLabel: "LYE_",
                        multiplier: [2],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAByCAYAAADj29d4AAAPWUlEQVR4nO1cK3DjyBY988pAQKBBAwEBAQEBAwGBAAMDg4CAAIOAgAcGDBiwIGDAgIAFAwIGBAQYBCwIMAhYEGAgYGBgIGAgICAgINCggYGAq/KA1O1WS7KdzGe3XulUTcUftdTn9L23772SB+jRo0ePHj169OjRo0ePHj169OjRo0ePHj169OjRo0ePHj169OjRo8f/Mz78Uxe+v79/BQBKKQDg6urqH5nL4HdfUBDnnAMAZrMZAODp6ekV+P1C/LaL6cTTNEWSJPJ78fmXL18A/D4hfvlFjhGfGgXCTQzm+lCP+11C/LKTtxEHgCRJwDnHR8tAuIkxtC14rgsAmIdLJNQBIeS3CfHTTyqIR1EEQkjtO0GeJlGDOABMxyP5PqFObeyvEuKnnUxd8TRN4WcbUErBGAPjHJssBysKuJfX4C9zsKIANQwAdeL6+1/tGj+8C7SZuiANAIxzsO0WrCiQ8gKfJhN8W6/LwYQAm1Ur8cb7Sohv374B+Hm7xrsHHwpuhBBQSkEIkf/Ee845Hh4eoI4llRCnWMTPjhFvHnTMx9M0RbI9w9V41yrAH38xWNkMruu2x4jly8lCqHivECcf/BYffwoHMAiFURE0LQsAQGwLPMsxMsKD45MkOdkimOtLa3iPEEdjwHt8fLH4gi2uW89XLL+C+f7B8UmSgNve6TEiiTC9K91KzTF+SACd+Hw+BwBp0tlwhG312iMEI8XHCSGY+DkIKaqz5eXk4gSG4wDAwfHiOpxzkOEZGNApxNC2MB2PEH+/xeDiGmmaYjqdvl8AnfhisWgMWmwsXI13rSe8/XuHURCUJl7UTZwrLnJovFW9VmOEbhGSeJKAMVa60GKBIAhOJg8oAhxacbGqKp4jS/FxAmAHYpenO+YiT2F4cLwkrfi2uP6n+0c8PDwg3KxACcEmyzGsjtlsR5gQ430CCMK6+aiTEKC7l4M+Dt8/aOLHxvNqHFASD4JArmySJJhMJlhsVlJkOS/PA5CeQHsPKYCYnBDi48ePAPblKgBpCY7jIE3/QumcQFHFnbw6zzEXIYQArHu8Sv7Tp0+SOLCvKdpAbAucR62L1gUpAKUUnHOs4soDNSHm83nNDZwqmLW5B7aHXUSQU/+Kc4m/YjtTiU+nU3x/LgOrMPvbW4JwToAsB89yyAByImpO57ou1ln50SquPtRcQ1iImKggoL4+ZuKWIp4YJ/52rbg4t0FImVekACUEt7cxhnbp9xdW9Db2aHEB4rgoOIfYwA4Joa6eKsQhF9Eth3Pe8HGV+HNULukflyVJ07JA7PIzPQa8B41tsOAcBWdvEkKFbtq6e9Tyf6DV1IE9cbniVXDb5mVOoVo6JQTI8sNMO9AQ4NI3ES5X4Jy2CgHktWB5TAgVqpu0mbrq43vi9eBG+QrT8SUWL+3E3xIAawKoA02TYNwhhOu6SJKkESy7hNBxso9XxLN1VA6sLkdM0jjnj7hCIwaoF2kTAnhfsDxm6rqPC+LuLkZg7VdZtSyduO5ep6C1FpD+2yIEIf6bgqXo+7/Vx4Wpr7d1MuJ8Auo2yBhDFEXvqwX2UXx/EV0IFacGy8lkcoR4h49nRCHM5HUdx5av9W2QUgrf96WbvUkAQThJVtXJzhpCmIoQl36OcJl2BkshhOseDm5dPi6u6Tg2OGdKOR7KOegusFgscHNzI96+pml6tCcgBVgsFuCcI849AMD5WYsQJjk5WAohCDEPEu/ycd3UVazXaxDlfZik4LYHAuDu7g6TyQS+758kQsMFBpXPvax4Q4gyT8dJwVIIQUh7cDvm48LU1RV/enpCFEXwfR8pgDCJyzIZ5ZwmkwkYY1gsFjKFPybCf9QLE0JAHBcGoRiYBAOT4GVl4GVlgLEVgHq3pS1YXvomrEEiY4TANi9zdcpXuPb2Y/SVVokL8oKU8PEoiuA4DrjtyczT9/3aMbPZTFqC4zivRwUQk1GDW5sQarXWFSxVIUS+rxNXfRxAzcd14q7rNghGUSQJRlGEIAgax6ju0CWCFEBMSF9BXQhxLGOssorTdg2d+CEf11d8Pp/L1/rnQpzZbNYpgvi8TYT/tE2gzZSFEIvFAvP5vOYaXUKou4ZOXDV1NYHpIrtYLORqvlWE2WwmXxNCaiK0CnDIp4ULtMWIhhCKAG3E07RsjT1HlhSoMM4bIgjid3d3Mla9VYT5fI4wDLGjVzWurbXAoUyQVjckyKC+3XXtGgJ6VNcTIkLSckImQYFShOl0KomL/V1E+PV6LcWZTCbyeAC1AChS8h29AnFcmJaFOHloCqDWAsd8mlKKImvPBHUhOKcHiQOo6vtSAOK44GlSE4EQUhNhNpvJbU4XQWSebcTFjRkVDRc45tP7YJkfDJbCNQSEqRuEgHqenJDYHlULFOcR7qBawmQyASGk5teidS9WnHOOHb2CGXyFfTZCYOYw4medal0A4dsiZz/m00KQU3eNLuLuLsaFtb/PyNNEWoIQQfi+EEEI0uXjOnFKKYhJQJQ6otUCCCG4NAr4edwqhF5mHgyWlRDSejTiMi/Qz+m4KDgDT5OaCGpgVFe/jbgd+HLhiEngOHZniVwTIE1TZFX2FhQZPE0IIDkaLNt2DeD0TNC0rFK4KhYAgGm7DRG6iG/zXK60IL5eR0izFDzNDgvQBl0IVclTMkF57JFMUMe5s5NCFJzVLKHL1IWANi1jjyAemz4YOQPPcrA4rl1HCqCubKbk8KoQfr4ffGomqBdOxzJB0fEFABtxSa4SYmCSN/l47p2DkTMAZf9im+egnofbM08mQ513h21CG0JknMFRW1I1Edr7B1KUA5mgEMp1XfBsJ79PkqQ8PtvCtCwUnIN6ntzOxM0cx7HBGJNbccb2LdxCbO3VuD+y72AKh2ZHSCFrEypfqyCEgP/9CApgbdhwHKddiCOZoIC9WSIbjmrXeAhznLtueXwUg9hWw3wFcWHqRuXj6XKNbLXE1nFBPQ/eNsIVQrCIIa7uVDcEEMRMjbQqhICIBzahsFEAeYznwmgIcSgTFMSBsrWVVdfPVs8wqus9R1sYabPfTxwbPMsl8cK7xJZYMCsfNwiBfTbaEy8Y4nxPnBV7C2l0hC477i63CaF+HhQZaF7gRRMCCA4SL8Wi8o6RzAQ5k0IAaGRwQOXj2wgmOkxdIX57S/D4lcPZGZgGPsKXVV0AsVrfqn7/FyeqXYxWMYGIG5jbHWzSFEoXQkUb8TKOMNk3EL5uEFITQnSLAdS2s1biiqmzokA6KLAJR7jxLTDOEW72rlS7OwxAZm/fUr8mBKtcQkT1oW2VbjK6Qba8axXCzgukKYXrurA3S0lcgDGGeTFEEOw/v0r+hOe5WBgjJNEjhhYFCuAxvagJweJYRvU2HxfEv51fgDGGOEnk5yErZItsoE6m7PePasWNLsS2KpqE6WcA1uYYgR+AaUKowVMnP2M2ppeXIKIrXCFMUgCATxi4YcCzbYSbGMTbJ0YA6sQVUz9EfE3+C8OiAPtTnqdhAV1VnhDicxWs1Xggon2XEIQQ2dmXxBehcl1FKMOA57rygag4yzAdj7BBfRvUffwYcZo/oNZKrtDoCY7sDa7Gu87iRu0JqgR1IcoYsQ9uM2aDjz4f7QmOh2WX9/Z2f404SfCZ3ePei3CLJ1xHXxEnCcJNjOnHAusdx6fzCW78M/l5mKR4Ma6Q8gIBf8SF155xtvYDkiTBpV9+/hzVLUIc+2dlEeeWiPa0JsSwyujkQxAnZoLiEXrGLIisJExSUMOQ52wLbm0rHuAR1CKwiInloP16nZmgiAm6EItFDM45BmaZYuoNECmEtmsdywRFnf9iXIElj6CGgY/XBvzxFuFfE3xZ/I1w9xlmVvpvl6nDKPsJZOgDWRntlwOK0Y5pTf0OAWi8BAXAyKhVCMZKIoQe7gTpecMh4kB5t0e83jg3sHd/I9oZsLMccZLgxj8DpRHgtRMPikfQ9AHMad4XDIIAm+e/WmNAoycoaoAuIdzqRw7HWmJfnO4bHirxrkdbRzsGoBzT5QKqqae8gEMMGU5HO4ZN9Xo2m30YU6P1vkAjBhQokx4DKEnFS3iEIlbko5RivL4vJ8c/H9w1rof8IHERI/SkaTmgUPu365zjxbiCQSgKg9V8PKEOLiyGTc5q48Xe4/v+63DHsC7QQLMnqNQAK8OSZkzjJdx8owS6AYg5OKklJohPqgehxU9nDj3zN9oxrJ9iPHwvq0My9OV3AX8EGfpITatjdB1BENTEUcvhRk9QFWGdeQgNC6yjDlDRJYQ4dxfxh+dtqxuoE9bBbQ+jHYOzzSXBke+XWWOF0oVKzGYzmfnde1EtKTtaDa5iCy7ZSNdoe/6z/tyAdpdYeXxOfUjq4XkLYFAreA6hK4oDZQA1dpULkPp3FjGBrMwTGIsQJwfK4TRNYaO9IySgB0ug3goTGOdljCDkRh1+MvGhRZHzrXyv7uMki7G0PXBzALrjrePvN9mHMTVeR74Pz7Zfxa4B1MvhRgzoIs84A1NWVFhESbL8TBVCxAiV+P6XJOWvSQwto1SxyRk+Xhv4erdtfHeKCzxdX7xOA7+RMbKiwLTqGgNaPwAA3JbJUEJlXFAFoYQqdX89E0Q1b/2Gh0palL5diHYO7CwHkB90AT/b4MmwwHOG2XlWM/WTy2Ex+aR6DNnNN/IgQZ4SClNpnTHOQPkSa0PNs+uZoFo3qL8hYnEsb40Bpfu5rosbGsJzXSyLbhcJggCjIgeiCDnfYmFYuDJ3YNWKv6scfn5+/gAAl5eXr0KIAPH+gciKsIlmsLw0CmRxWb2xspZpbaqeAlEOe7YN1fjVGKCueBnc8pOqQpV4Q4AuIc68HAmGNYvQg6XsDVQZJAAUhMoYIdC28ioIIfVyeANkxMSn8wm+bfZdoB9Z8aMCCOhPXQrXcKrv21rmwOkrrwdAkQmq5fDtbTmHOEnw0SKgNAOQlQS1Xt9biQt0ChCG4QcAGI/Hr8BeCD1Y6q1z8deoXpvHZlBhvV5jvV5j8BPK4VOIC3QKINAlhLAIKK6hrr74K4KbgL7yI3sDgMhqcZbxD6woXsWPJgHg03lZDr+wK9Bt+XDDe1dcx1EBBIQQAmqwBIBxkTfcQPQM2xCYS2C7L5PVdLUkUmBMjVdwKOVwBuDnEBc4WQAderAMOQDLkkLUeobKqh8irkMIISxCd4EfIS7w0/7/ACGECJ5uvoFNKAYX1wiCQP5i/BTivxM/fRK6EHor7N9CXOCXTUYI8W8l3qNHjx49APwPiYbd3Id4sRkAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 114,
                        left: -31,
                        top: -83,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 66,
                        left: -31,
                        top: -35,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 66,
                        left: -31,
                        top: -35,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 66,
                        left: -31,
                        top: -35,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAYAAADnodDVAAABoklEQVR4nO3XoXOCYBgG8IfdgmGB8AUCwbBgMCwYDAsGgoGwYDQsLPAHGAyEBcPiooFAMCwQFhYMBILRYDAYDAQDgWAwrLHg4XEo05v3wd3u+SXkvYOX9+HzOwAiIiIiIiIiIiIiIiIiIiIiIinaQz/pjldJ1X3cVHHT9tBPtpsIS+8LVQ+htAFkE1/7AVRdQ7NnYhtujuplUsq4SZr4LorQ7JmYOxPUVBV3mgZV1wAA2frUapTSFyDxDTiXuN56QP2xhaJ6WaQM4NQa38wXCGdzAMC90UFaV+s68vUsx/USx/WkLQ0pAziX6KWJO66XRHGMKI4hawjSlkA20dFTeDj/2vB/rb80toeH/fA+oQkBTQhEcSylz1J2AcueKHZngXdjie7z29EfXFofGDXkE/eDGRbLlbTepAzgVOKWPVHShy+ql5F4nrTtZjzqJ3VdP5l4Ud0w+4kQAkIIaJqA+J4hWO9/m81d4bWuUdp+e4n8AOyBpZwb5LVuZVz0r3ptIFjvj1siBLBfGtV1VIHxqJ9M3WHlH0lERERERERERPRf/QAgrt5PFPQdDQAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 8,
            available: true,
            name: "Coal Mine",
            colour: 1,
            fundCostMultiplier: 252,
            probabilityMapGen: 10,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 5, 4],
                    [0, 0, 3],
                    [1, 1, 2],
                    [3, 2, -1],
                ],
                [
                    [0, 2],
                    [1, 2],
                    [5, 4],
                ],
                [
                    [3, 3, 5],
                    [-1, 0, -1],
                    [-1, 1, 4],
                ],
                [
                    [2, 2, 0, 2],
                    [3, 0, 1, 3],
                    [3, 1, 5, 4],
                ],
                [
                    [3, 2, 0, 0, 2],
                    [5, 4, 1, 1, 3],
                ],
                [
                    [0, 2],
                    [1, 3],
                    [0, 2],
                    [1, 3],
                    [5, 4],
                ],
            ],
            primary: [
                {
                    cargoLabel: "COAL",
                    multiplier: 20,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 110,
                        left: -31,
                        top: -70,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 110,
                        left: -31,
                        top: -70,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -30,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACCklEQVR4nO2Y3ZHbMAyE15kUgBJQAktQ6S6BJbAEdqA8XFYH4SSPHZO6JLPfi39EwVwAXFIGhBBCCCGEEEIIIYQQQgghhBBCCCGEEOI/5vbdEyCllBUAeu9orV02rx9X/dAjKJ4sy7K6+3o2fiSXd4C7r2YGAKi13kopa2sN7g4zQ+8dALbX2d1wWQLcfXV3tNYAfAh0d/Ted8LTPWBy7vf7lLn+nBE0w3amWAqmuN77LgExUWa2vZ/BVA/gWma1Y6XNbCeeieE4juX4ZVmmeMLQDjCz3SRba5uoWusmuNYKACilfIlB0e6+xZjJsHUVxVN0nHxMAtua1Y1i85JgHBrnaFN8K1iuOCcZDS6aHK9TMBPSWtu6IXZKjh13iN77kET8UZAsnBNmlXMioqFFU6PoaIhxbEwkv4txa61vJ+JlE8zigc/WjZOkWDNDKWUnPppc9IMYB9i3P+MC2HXH0XxeYZgJUkgkCszEykbhufVzB7BDzuK+yssd8GzLpSodrWEAHwLZISR7QDDA3ecRTNkFnhiL3jtKKV8ORLHK+bujE+O7HjD8ePlsImiAcYt7VPUjRuwE054FzhIRqxgND/h0d+DxGh+1BQLf8DhM8eyA7A95y0z33kaKByY/DebTYTwMHT39xXGZ0cLJZQk4uQ7gPBm/r/37/wc8a4yzxf41vHt6E0IIIcbwC08sf5p9oY2GAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACjklEQVR4nO2Y4ZGjMAyF391cAS5BJagEl54SKEElqAPux+X5hNcQYCGZ2dE3k1nWMUZ6lmQFIEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSn8yvTxsQqbXOZgYRgbvD3WFmt9r4UQFKKXP8X0Tatbsvrt39FlvfKkDvcERVAQDTNEFEUEoBAJgZ7+X3l9r8+8rF1iilzCPnueMigmma4O5QVZhZiwCmQ1xLRFaFPMqtAowcL6W03Y5jFIMiAP93X1UXgqytfYY/311gxJphDG2GeSQWP8JC6O5fUiKkzKyqeDwep1Lj8hqwFerA0lF3b6LQcV7zb9z5XriBGIeL5S0RMKIPYRIjgg7FdOAcM4OqYpqmNkY49hyfn/fuEuLuGgDgayUH0HY/zlXVNsZI4TWFKqUsImbj2btqxOUCROX7sI5jAFq15/fcyTi3L5oUMRbO+Oz+88reXWESleSDzWyzS9tSvw9xrstQj+nQrdkipxfvbKO02wEqH3eVn63is6f5YYjToVFdiM/sT4Y+HY6IMUyBkfOs3KrazuW4I7XWudb6xdlRKNIROs8xOhOF4CnBZ1Es2hC7xjX7DwvQGxxzjR0bBQktKtwdtdZZVYdChOuW8/Hsj87HMO9tMbNF5R/Vgteu/2Nz4pqSsaixdY07KCKrjYmIzL1T/b0xKlgX+nlrHK0Fh4tgz0D91rTsMYh9/ehoo/P9d6MieXkRHDESYvTLjeOvOjNVnWNux1Z5z1kPnHecnLr5SJEB1o3kC5A+BYBld3dkzaOcaoX58D1CjAx9VVtizn/niNvDR94IlVJmFk8SmyOmQeRqx8nbBTiaPsB9zgMfjIA98+50nHz8rXAvxjucTpIkSZ78BcBOEYAX+w0/AAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC70lEQVR4nO2Y63HjMAyE1zdXAEpACSyBpasElsAS2AHvj1aBYMrRy07mBt9MRkosUgC4eMRAEARBEARBEARBEARBEARBEARBEARBEARBEAT/M4+fNsCSUuoA0FpDrfUjtv35xEv2QOdJzrmrat96/i5+RQBSSr3WCgAQEYgIWmsAgHcH4e87N99Law2qitba4jhRVQDoqoppmm5Pi9sCoKpdRAAApZTdhnKdd15VYVXB+7u5HFFV7dZYnuaeIDDvraO80mmXDrer4FINYH621iAiUNXl5HxRs4hIzzl3OjnLfGHuAlBVjNRxJ6eimXPutVa01pBSAoCVIzTYG51SQikFwJfEmftcx8/sej5Lhcyf3aKEUzWAxsxSXwymcwwKjeWzlPrIIasCrwruQTXM66i+S4E4tdi2JhsEStqeHLDOcTrBIPgOYO/ts9zTB41BPxuIwzXATmsAUEp5KlS88pRTSosqvNx5T4dttffKsEFmILiviHQROTwzHIqaLXq+TVnjrbOUs5X1XCRXNcDK2wbJOrxVNLnfGTUc6td01p4MjbOnYg0VkSVFfC+3TjMQozphawADY9/jORKAb1Ng7vPdj6i26FmDRkUvpbQK2mgvm0IppcVZ/s2mDD/z88MZXgbAnrqV4ZZhvi7Yv1MNo77uFVRKWZ26rwu8ekXM94fSejMAfsix/Z5GA6sitLp6B0spSyqMBh9bN0Yt0M4Ydup0+xzuBN8u4NDDk7DFC8CqBQLPAbIFyl7pyKiDWOfte7a4Mgt8WwOmaXrUWh88BcqbMmVArBP+ZBgE+zvwVRt4DzzXB99pLK21xxXngRODkIh0aziNY1777jAbuiqUIzm/eN9TQOe1PzMKt9Ye0zRBRPqoCPLHpwRP+JWUN4ra0/uP2vyKy5vlnLsdYGwqsD6QUTDsAOO529kRt70g59yBdQscpclePuE88IZvhWWex/0ccIRPOQ+88Wtx2fGPyScd3eLtBvhA/AangyBY+Ac9ZLSiz+plPgAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 9,
            available: true,
            name: "Coke Oven",
            colour: 183,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [7, 9, 8, 9, 8],
                    [1, 0, 2, 0, 6],
                    [3, 5, 4, 5, 3],
                ],
                [
                    [9, 8, -1, 6],
                    [0, 1, 0, 2],
                    [5, 3, 5, 4],
                    [7, -1, 9, 8],
                ],
                [
                    [1, 2, 0, 6],
                    [5, 4, 3, 5],
                    [6, 1, 2, 0],
                    [7, 3, 4, 3],
                    [9, 8, 9, 8],
                ],
                [
                    [-1, 9, 8, 7],
                    [0, 2, 1, 6],
                    [5, 3, 4, 3],
                    [0, 1, 2, 6],
                    [5, 3, 4, 3],
                ],
                [
                    [-1, 9, 8],
                    [9, 8, 6],
                    [2, 0, 1],
                    [6, 4, 5],
                    [2, 1, 0],
                    [7, 5, 4],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "COAL",
                    },
                ],
                production: [
                    {
                        cargoLabel: "COKE",
                        multiplier: [6],
                    },
                    {
                        cargoLabel: "CTAR",
                        multiplier: [1],
                    },
                    {
                        cargoLabel: "SULP",
                        multiplier: [1],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -91,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 10,
            available: true,
            name: "Component Factory",
            colour: 166,
            fundCostMultiplier: 95,
            probabilityMapGen: 8,
            probabilityInGame: 1,
            prospectChance: 0,
            layout: [
                [
                    [1, 0, 1],
                    [2, 3, 2],
                    [1, 4, 4],
                    [2, 3, 4],
                    [2, 3, 4],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "STST",
                    },
                    {
                        cargoLabel: "PLAS",
                    },
                    {
                        cargoLabel: "STAL",
                    },
                    {
                        cargoLabel: "POWR",
                    },
                ],
                production: [
                    {
                        cargoLabel: "VPTS",
                        multiplier: [8, 8, 8, 8],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 100,
                        left: -31,
                        top: -66,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABkCAYAAAA2VDb+AAAH50lEQVR4nO2br3fbyB7FP33HwEBgwAADAwEBgwADgwADgwCDBQUBAf0DDAoKDAoWLHjAoKCgwOCBBQEBBgsCAgwMAgICDAICBAwCDAYICBjknDwgjTxS9Cu2lPTs0SVOImk69+p778xXcqFBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo8G/Hp4+eQBJXV1cv/X4/+r3X69U6x99GAE18s9ngeR4A7yHEhwuQRhxguVxi2zYAjuNEYlQtxIcJkEccYDqdMplMODs7i47VIcS7C1BEHMB1XSaTCZ57zdXyCaA2Id5NgDziSik8z0MIwcXFBUopHMdhNpshhABgs9nocVgsFkA1QtQuQBFxKSWu6+I4DhDc/fPzcxzHYT6f43kejuPgui5CiGgMIQSDwQA4TojaBCgiDiClBIiE0H8HooqYTCbMZjMgIKrP1dcBRwlRuQBFHjfJm8Q1Yf1pnmMeS4oAYNs2379/x3Vd1us1ABcXF+8rQNlw0+TMc4QQESFth7QqMX+HdOLq758oz+Ovu8f3EaBsuJlI3mUtTNIG5nEgygnbtqOc0IHI9WXsuovL63oFKBtuacTM39NIa+iS19DEgdgdN8dZPTxyPhqWFqBVmnEIk7ieBLwON6VUjLzpYx1sQohYDiSF0eWeRlzfcX3N/KmD57exuc8U9CgByhKHeKprT5uiRGUbQl+fFm5Zd1xjsTsJiHdFSMgqSyk8vwA3Nzcvtm1nEjeT2VRe/2zeZfOYGXQQL/eiO64xe9wT139/xo+dU4RMAcrccU1QIxlYZiVkeV5PVkr5Jo8DCEsYNukC4FVVAYvpBPX9v0CwD99sNiwWi9zw0iWufzY/zaDUSHo8LdXzPC5ELyLe6wWf9/hvEuA/eQdXsz+BfWs6nU5frcuamOd5MZLJMhRCRFmgz7Ntm/l8zvn5Oev1OiB/fQnXl1HVzJ86/E91EUIgLBHzuJSSXq+LbXe5vLxmuVxVlwHCasVE0JhOp7Fq0Hc8udan7fg0zs7Oog1M1joupSz0uCZu5sfzGysgUwBX+Xj2Hwxbd8BrIbRX5/N5FIbAq3XftIneuQGpxN/q8eVyZQTn/rgQ5asgdxUQluCWUwCG4o7d824vRJgPs9ksqgjXdVO9PhgMIsGyiEfL2Rs8LoSIHe/1uljtMT8WVxUJIASe7yEsAbugKhwZqFtkjSTxQ9Zx7XEgKnWZcrzX62Kt5sF4yyVDu8dy+3i8ADqwhBDstjsA7q0Rvu8xFo+ZQuj+3SR+yDpe5PHx+DQi/mNxhS0kXSHpOQ7cVSCAbXdfBZiwggnf+D3GrcfUsFwul/vV4oh1PMvjQODz1TwiPrR7ADw8bQMBSiJXAD0B2+6yuQ0FCG1hWYKdv8sMS00yax13HBvhi4M8DrwivmoP8XwPG7c0+UIBhBDcr++D/Xz4N3Md13M1w3JgrYB9+md53HU3yG7/II9304iL+PiVCGBmgOc+A3tbALANBTDD0t9fW6vHCTNEvB6/MgHMDGgLC7XdxXypYQrVVm12z0Fg1u3xWnuB80Efbn8xGH4FYBtYPLIFgOPHq0JKye4xIB/sEg9bx6Gcx5PX6/EreR6wuF8HQvALgE14V80M6CSqwgxLfW6dHi8a/ygBTjqSXre7F2LQp2+DZ2ZA+JEMy3arHba39Xo8a/xKngc8bBW37VOGnae4EPziDPCGX9k8/h1NLnrQuYWtF0yybo+/Wy9wq0gVom87uGodD8tWm44Ir8/x+CJ8XH6Mx5MZU2svsN36PGzXqdYww3Jzu6PdagP5Hu8KGSd+gMfftRcQVgu1g9v2KTcbj3FSiDAsgWgZrNvjH94LbB/u0yuCej1edvyjBSjqBQStzLBsre9y1/G8fUKRx+EDegHhe0Artxcww1KF52R5XEqJbNe7TzhagNjyFqKoF9j5O9Ybl7PBab0eJztDKnszZGaAHtL0pUpUhd4HaOR5XClV2z6hko1QcnnTApi9gJ0ilInidbyeXuAtKN0LSEvg7fx4BoRIhmVyHwD/1l4gRNqDE8j3uFLqaI/bwxrfC5TrBeJVkcyAPI87jn20xxc54x8tgJ7AW3sBCHaCaet8Vb1A1vFer8vzblihAInlbXFf3Ats7/ZPhN6zF3j+50cw5y9fg4y6vD5egLTSLuoF1mErLKWs3ePj8ekr4mlvpg4WoKgX2G0yKoLidVwphbBOjvL48z8/XhEv+/W4UgIU9QL42WFZ1AtIKQ96L6A9fizxUgKYy5sMH4BW1QvosQ71+LHESwlgZkDgvVZhL7Dd+my94PVXnsfLPjOsi3gpAYp6AS9RFckvSRSt43n7BKjG40XIFMCRFpvLbwy+/ASyeoF4VUgpwWpFwhyzjtdNXCNTALdzAoA3/0pHWG/qBTTyPK6UQnbr93gRMgVYrVafAEaj0YsCnO0DkHgeECKtF1BKHbWO101cIzcDYC8Eo9ELHdhcfkMC9pefqb2AfokqpXyXdfxYFAqgsVqtPo1GoxfTGvrLEWYGeASvzCDf4863vz6UuMZB/+hoNHrRP0fWCMNyHQpzNjhl2R4yHgffG9Clzh9fYmN9FHGNg//x0Wj0oqsC4EQFO7yt59MRFsN+n9bnaYy4MP7Pz0cT16hsEloI6a4jAYDflrhG5ZPRQugvRP6uxDVKh2BZrFarT58/f3753Yk3aNCgQYMG8H8PIR3uPlOvsgAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 100,
                        left: -31,
                        top: -66,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 100,
                        left: -31,
                        top: -66,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -20,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAzCAYAAAAn3w6xAAAEoklEQVR4nO1aIXPrOBjcvAkwCBAQEDAoMAgwCDAoCAgoKDxY8EDBwYLAgsKDAQcKAwIeOFDQH1BQUHDggQKDgIIDBQYCBgcKMpMD7uenyJIlO3bSmcvOdBw7tqTdb7+12ilwwgknnHDC/xeDQ020XD1sX9N15fr94u5gazDhIJMvVw/bTEpkmYQQHKlBiL9Wfx5FiN4nJfKCcwCAKoSONF0fXIheJ7ORn8RjUDsc2xG9TVJH/is5Yu/BbeEmBDeSV/EVHLHXoD7hFsfj8nvBeVl9lyiHckTrwZqG28VsWp7r5E2imBwRf97fpRCtBtkn3MgRRP41XZe54HJEH63R+OGuwu1iNjVW3kdY03hthbA+dKhw0x1hGkNF12FpvPkY4WZzBD1LovuO5ytE5aZjh9s+rdHGETtffqVwa9oabR0x9CGfyd2qcs6NE0kpy3t08nXC+oxX1xo+hbq6nm+BqiMGLvImlVVyfbaGCl9H6GO7HDGo6/m6cCOL99kapoXH8dj7FUzrE4IjClllPAAYrtO/wRjDKGB4e88ri7JZjz732RomYdN0jVQT1uXeKGS4nV9V1nV+OS8yYHl/BwD4/eYPTJMILz/XO8RMFVThs/Cn55fig+YI28KbCGsb4zVdY5pEuJ1fIQ8FAIBxjlxKMM4R8mEhAH2pCjEKNhVHqBWkifdZeBfhRsKaWk0lz5R9hPp5CADjeIIse0f+edHmCNO7ed+F646wCatmkktYE3khQnDOIGVeHksBCHVC6I6wtUZbR7h+vzAJq4dbFJ4D2FTIx3FcElaRJEkhAOcMWfbuJQQ5Qif31cJNrTyBcw4pczw/MgAMuPx0gEkdlxBRZG8N4PjhplaeiD8sNwhYgoABH3kxh9EBTRxhC8tjh5ta+YflBsBZeR4wtiuA7gA6JyHo2DYsy0UdMNwAlFYPGMdHLsHOIgDASAjk/7wBAL4RURV0rgtD18fxpLBcKJCHAsv7O9zOryAYMAo2lSwgmK5X3ixZcT0KWfnz2+U5RoE53ExIkgRvaYKAcbCzCAFjJXEdXg6gc/0+X0eYyPcdbkSaiFPFdXwDsNPvRFwXwvR9G0cA/uGWhwKYxOVRDTciDhQ9ThVXYaq4UYAZL4iSEDpxm0N0QWxC4ENimkRQ/8TmIs84L0OtLtzSl7PyXK26CxdxhqenJwwXi8UAAK6/YwsAz5IZhTC9Jdq0humt0Ue42ZCMXsADjuWPxwGg7ARXP96dQhBcwvgIoW6omuzcVosAAftV7Y9cYiQE/s2yWuIXcQYePJfECUP9xjohdKKu1iC4NlR65X/N0z7cCHrFdVQEIPg4wuUAn32Emuw+Ozci7qq4i7hTgCZCEGzndRkR8iGms9nOPXU7Nxco3B4f64kTnAIQmrSGfm47juMJkiTB+mfxTJfh5gtvAQhtHGFzgoriPd5duPmisQCEJo7QjyZ0HW6+aC0AwccRPg4Aug03X+wtAKFNRjRB03DzRWcCEJpkBIErW10dXVdcR+cCEJqFpYT62gP2Dzdf9CYAwac1VPRdcR29C0BwOeLQxAlH+z/d6+/hFgCS80sAwM3N8ihr+Q8rKVQ5A5FZtgAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABzUlEQVR4nO2WLXDCQBCFXzoViArEiogIZAQCcQJRWYFAIBCICkREBaKiAlFRgUBUVFQiEIjKiAhERQUCcSKiIqIiIiJixUlcKiCZ6RTa6SThZ3rfzIkkM3tvN/tuD9BoNJoSWHjjxJ0MkkPr+A2j6ICj0SiRUmbP/baFjvNc+D5FUZiwhTdOOI7gLVeo1WrZeynlURfhPG+ANPHgfQm73kS7GWHqSSilUK1WoZQCM9ATF0nvpg8yLXAcHU1BcouYjDsJc4y5rKAlViAyQWRh6kVZEYQQANbdkHIsXXGWNwCRhbmsQCmFl9cViCwwr5O/va7jzmmibsYIwxBCiGxNvQjHcEjmtkCabEoQSNi2wOiuiVOwRqEWEOYH7IbIvp2CNQrZyJ0MkiCQIDLBHGP4uDTcySB5mr1n3fEwuARzhNl8bY30jx96auS2AICtYvNaY18UUoBd9K4qmTWIBJijzdpYg10Qmei3LUw9ZEUgssqU9YXcU2AXztA1bFugJVawGwLMMZyha/w0NcxaA2EYgjkqS9Y3Su2Av1hDqRDKf0O324UzvN/bIVhqAXaxzRq+7xsA4Pv+XrUc5Ca2bWocQodGo9FoNBqNRqP5v3wC9xsxaKDyCKAAAAAASUVORK5CYII=",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 11,
            available: true,
            name: "Cryo Plant",
            colour: 189,
            fundCostMultiplier: 45,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [1, 2, 3, 4],
                    [3, 0, 6, 5],
                ],
                [
                    [4, 1, 2, 3],
                    [5, 6, 0, 3],
                ],
                [
                    [1, 2],
                    [3, 0],
                    [3, 6],
                    [5, 4],
                ],
                [
                    [5, 4],
                    [1, 6],
                    [2, 3],
                    [0, 3],
                ],
                [
                    [1, 2, 3],
                    [6, 0, 3],
                    [5, 4, -1],
                ],
            ],
            primary: [
                {
                    cargoLabel: "O2__",
                    multiplier: 14,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 106,
                        left: -31,
                        top: -73,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 84,
                        left: -31,
                        top: -52,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABUCAYAAAAyLjFTAAAKiklEQVR4nO1bLVTrzBbdvIWIqBgxYkREREUEIgJRUVFRUXFFBQKBuAKBQFyBQCCuQCAQV1yBQCAQCEQFoqKioqIiIiIiIiIiYsSIERUVrNUn0hmSNE1T+vPxvcdeiwVJ+jNzZp89e84MwDe+8Y1vfOP/FwefetdPfwYeJ3/3O5/7jC+C/6z9jp/+jDEDYCaYU99Bk/aLw7Ve3enPGDPAByOAMnCYO2rW/lCdAZ3+DMwEH4zwcjVnADPQ7/dn/X5/tsM27hTVGTDv8NMpW3hkWRZUEDqdzoH/aM3icAoA6NzxL60RlRjw8vKycoQty4JlWfAfrRk1Jcy6Aac13byFO0bVACzcC64P8dQK9TUhBNFTC9SUeHsB4nAKEZOtNXRXqJQClFIgjsFhQkoJx3FACIHjOPo13h8HZt3A28sUtc4DzMk1qCkzqbGbLmyGtTXAdV0IIZKgIBl5ADDrBqgpYZ7O2TL5eGteI7bT9O2gUgoIIfTflmWBUgpCCAghsCwLUsqVn6E0gnP+pWaMSgFQo70MRRpx2OzDw8d9FbDhcLheC3eM6inAEw0o8j6UUiTTHoGsFWuEYolKma+CtTVgGZQGuINijXAcp1Kq7BvrWeEUpJS6c8s0Ql1/Zay/GCrAKo34yqjEACEEMF2uAQC0BvzbUH0WyGlAXsyUBhQhiqLPtm/nWFsD8p1Z1rm0RnxlHVhbA4qM0Cr8bzCgxAcIIUo1IB2krzYVVmdAiQ+glC5oQF4j/v1GqCKWaUTaCJ2fn8/ygQjDEL1eb+8Lpa0YoTSqGCEhBMIwBCEEUkr9c35+Pnt8fNxrEKqnAI/B+fIKzzoFEBW8dOellGi325Wbsy1sfS2AcOlLNOr1up5FCCGaMVJKmO37WTy42hsLPm2F1xGzvC6k1w5p/H57R40xmO37vdUM/hEjNPAZRrEBgxioMQLgHYAAMRlkzHUQ9sGEtX2AdVwscmU+IIqiTG3AIBTUtkHMpMROrMRcyCjW9wDAbN/Pfp9ZOP95srNAbMUHAOVrgbwRorb9cR1zyCiGSY2PQMQcAFBjDJ4f4Pb+Yfb49LqTtNjKcrgIq4yQojsxGYhlwncT9VSdF0EAEQQYj0cYDkfgQuD2/mHrQfhHjNCEJ51UQQDmTIg5RBAAAAxCMJUSjUYTjFGwHdUcPu0D8p5e+YCixVJeBIXvYsI5YtdLPmve8QnnMAiBQQhqLNGC8XgERim4EPD84FOdLMNKBtzeP8yiwN2qDzisEcgoxPtEYirrutNAkveKIXeXDrgw4fkBgiDA6Um3Sp/WQmkAbu8fZoxSRFv+UoNQTKXAYe1jtNPp8PvMAhcC04kEMYDj9jF+tI+33IoEpSkwHI7g+QEse/HLNzFCCgbJ5vVV28CZM0moPhU6zdLptu3t+FIGtFpN9Ho9EEKBdwscJgybQQiuX6M6l/cBZUbIfH9DiIa+vmob4CKE5wsEQQDHZigrGxBC0O/3Z9vYZisNwHA40io88BMN8PwAjFEY00PUjHe8vr4mnSrRgLwRAoB6bYzLy5s51Xkh1V3XzSyWgGQdEfMJTFbbShBKAzAOapBylDCANpN74+Tatm0wRtFodvDWey79krwRuvx1o1WdEUBOk1ENwzDjMo+Pk2AMBoNMGiWvTQoxmwZh5SwQcAvgAJL+a0ao1LBtG8fNDgAv8768Rnieh5hPwIUE59Worj6n3W7j7u4us8u0LawMwKGYb3DyLjhMjMOEAflAHB8lGmDUFjUi6bjQHT896YIxiihwAUDvMBNCEEVRId2vr69xd3enP5OQ5LtWRnDTAGjMfcC7xzHmlk6NRqOJ0eAVZjfRAG/woREAEPrRQsfVvG4xQ3c6/1shTffr62ucnp7qNOFxgHp9s6N6KwMgGy9AbkT//Ely+O7Bg5QjUPMIwAhAViMAFHY8zwDHceB5HoBE+FTH1bM01PWykty6KPUBk3oXYCYgY33v7PwKAMC5wM+uidAfQ8S+ft5oNNFqNeEc2XCObLRaTXh+gOFwlLmumx+Nl1LCsiyEYYiLiwtcXFxgOBxCCKFTYjI9hJRSB2pb5fVyBsxpPxX3kPwYHCYCkVAcAB6ffRiY53loACBLGfDXP8bgL0ebjXB+9gMA0G63MRgMQAhBvV7Xqg8A/X4fnU5nge7b3mVavyYooHM6DeUD8qs3xijOX2oJk0IX77UYxPuFmCeHqU5OTjKjqWjtuu5SuqfPH2yKjZbDJhH42zUQp1aJRQwAa4IxA7Y5wHUjgFk3MHYlGqnCqIIKBqUUnuehXq9vLd+LUB6AeRks/9WMUYzHAn+7vu6MQhEDBnOJOKyZMOsRqCkxcS7huq7umBrR9KGrKnTfNDDl9YD0EjhVD+BcgJCP7bA/rqHrAaqCs2rtni6Jp+sHeeQryPmF1aZiWCkF3ulpRgOKkK4Jnp50tdUNgkAvpI42aupuUKkipN3gHGoWKEKjkXjmjFCmmLTJEdpd6EB5AJZsh3Ge0KCoM0EQgM9pW1TBKase5+m8bboX4VMaoJDuTDoYavS5EJBySc7Mkc7xKiO8bR9QKQXqR41P7QsosVy1sapQZYTzrNjtLDBHt9stfb6yEfPgSSlKNSBvdvaBShqgcl6BMZrpzPnl9cLzovxPT50KeUenvD+ltJDu+Xub6sLSALR/nM3UyI3Ho1IfwLlY0ICX117pbKHKXEIICCH0tWVZmglFdC+6t8nWWaEPuLy6nTlHNloiMTWtbheuv9wHjMcjXPws1oDkj3jBB6SNkLqugiIGDIcj2Laty/jrbKYWMmA8HuHltQfOhaZyW9zp5/mRzWvEwshX9AF5Ohd1tqjELmL/03uIhQEgJMnhfCBubQ8A8Pr8kOlMXiMUilIgrwFlYldE9yJdiKJI1yEYXW8fsTAAg7fnAyBxdbXDiQ7Ey2sPpyddNNsnmc6Mx6MFDVC/V/mAMlRlgGVZaB7XP7WHuHQtkM6jbrc7AyaYvNcyr+nJawx7I3S7TZgkKHR42gcsWQukZ4G8DkRRtBCEIgZc/rpBGGeLrlVRyQf0er2D/Bk+KUVGI371mvrZwjRY0QfkUXU5XFRyq4q1Dkio1IhDFyY1FjTi0U+Ectk0WOQDgGIdUPXAPFT6pZGvPTJSvU9rV4TSqdH+cTY7Peni4fERQRDAtm098kEQ4PX5YV4xLkdReWuZERqPRzDphyWXUsLzQwRBgFbDhnPSXblTlcZGR2SqiuU6awH1E4bhwmgTQvRyO32PEaDbacB1Xbz1ntc6crvxEZkqYnnbjjAcJqOidpG5BGAcAnP6qzQIwxDMtAGDwjmiiEM381lFDFB7CZ85a7zVM0KqAe0fZ9qIpMWSC4H7IfDcesP4KbvJqufu6UeT8mIm52eG0kHZ9JD1Tk6JqdT4e39zsEwsCaFotZqZGqISsbSqp0FIUnNMY9N/xtj6KTEFlRq9Xu+gTCwJoRCxD2d+rdigttLSkFJm6B9FETY9Xb63Q8mPT68zzw8Qhy5iMU0MEpKyWbqjKkBK1V3XzcwINzc3W23zzhiQR14sJ+/Z54rujFFgKmB3GhgMBvr5rv7vaG8BSKNILFfN3fv+R4q9YVdngL/xjW984xsV8F9BH4IsgwJBpwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHJklEQVR4nO1aIXCrShQ9/VNRUbECgYhAIBARCERFBQLxRQUCgaioiKiI+OKJioonIr6oeCKiIqLiiQpEREQFIiKiAoGoQCAQEYgVKyoqOpMvyG4WStI0IZ038zkznRICy56zd8/evQRo0aJFixYtWrRo0aJFi/8hjr77ga7rLqrnFEUBAIxGo2/vz8EfWCXMyRJCxDl+zBgT5+7u7r5FjIM9hBPnhGVwwrII1e+zLANweCEO0rjruosq8boRJ4SIUSeEQFEUhGEIAHAcR1zv+/7BRGi8YU6+OrqcqGmatffFcQxgRZwQItrIsuxgIjTaaB35qhA8tB3HAaV0I3HZGwghMAyjcRGOm2xMJl83vwkhIgLqQp2TX+cNh0CjAnBUCcif+YhXhfA879vJAw0LQCmFpmni8ybiPFosywIAjEYjAECv1/uwLGqahiAImuyqQOMRkGUZTNOEoiilOS4TBz6u/b1eD0BZCC7OocgDB5oCWZaBMQZd1+E4DgghSNO0NifgYIyBMYb7+3txLk3TUnJk2/ZiOp02aoQHEYCDUiqOdV2vNUj5mEcNUM4K665tCo0KwBgTo3w7swCaY3j1Kr77CuQkid+v63pTXRX4q8nGCCGglOLuxQHUDsDmW93HiVYJc1BKwRhDmqYN9rZAowIAS5NTO1DVEwz/IbXXVKNhXe7AGEOWZSKqxuPxn5kIjR6CRU4potlT6bxMVDbATXNZjgZCiFgCD5Uf7CUAJx6/JEiSBKeV1ninZXP7DOtS5z9KgCpx33OhqgpuH0/QU2ZAPkeODtBZjfy6NHnTvoHPe03T0J80b4DADh7Q/zFYAECeUyRJAts+R/ySYDqdAQBGc094AICtRr7qCTwnCMMQuq6jH9lf7ebW+LIASZIgX5LyPRfT6Qxm14Btn8PtjHfqRN3IR1GE25kF/6kL5HMML5pfAYAdVwE++jmlHyKg11mlrf3IRj+yCxJbwvz1iiiK0J/oUM0i7B+v2C7d3Ap7mSAXgjGKaPZ0JOp/3AMk1InAp4nc3tCaoh/ZUM0TTK/ewdgrlj54EOy9DHLypZNLD7jtFMuioijwH0iRHG3A0JpC13XknvLlzHFX7CSAqiowuy7il6R0fvx2DcQ5UBPxj1cMfKqv5vyrSHkLw7PErrEuFT4EdvaAx2AMVZV2d38/LTalv+vW8SzLEIYhLMsq1QurqfCh8oC9UuE8l5a4ZdjbnbDwgPytdC1f2tahrlhaTYUPgZ0EKI08at72LMXgpCmltfkAX+48zyulwPyPp8Icg8FgMRgMPrxZ2gd7RYCqKugoJ2tHiNf4FEUR6bBMNAgC6Lr+gfS62mAURQAKIYbDYSNC7GSCPPTznK7IL5c+Y8N9PB3m895xHGiaVlsGr0I+x6/jIvT7/Z13iXtvh8VISemv7AHV6EjTFGEYwjTNUngDK5LV0aeUIooiUV7jEcU9Yh98SQA+/1RVge+5AApCcocZY2v3ApRSQZ4XPMU9WF8PCIIAvu8L4mmaloojw+Fw5ymx1RRwLi4X9pmB59+3gH6JPKeYTmew7XPM00IELPtuWRbi9zIxfszDXiYP4KOAy/83NzcAgOvrawBYWxG6Dfo4zwshxk/PCCe/t54SnwrQ/zFYmF0DOaV40y9L33EvYIwBb4UHUEaFGPylByfleZ4wPY5qwsPJysd1xMWOkT5A047xduqDvR3D91wYhrEY3t1uJcKnAjw/z5AkCQzDgO+5yCkVG58S+NKXMSHGpWWJeR4EAcIwFKKsgyzAOuLR+z1I5iDGBPq7D7t7DlVRxKaMse2KL8AWAhBSzPf70agkBAA8BmPQeVa5ngCkECNNirq+aZrwPA9A/e8FZMhLpQw5p2CZjuPOKW69RwAoEb/u9fAYjD8lzvGpAOHk95HvuYuzs3PM00hEBFDUA+IXA7Nw85sb+e0QN8WqENsQjzEBIcC58xNm1xBEGaPoKCcwzs5Fnz/jxbGVCfauvFKDrusuXt9PxWdCCAbdWTEKr0x4QBV1QhQE2IdreagDQEbfoL/76NlDPI+ugYvVdafHrwhnT0dFijTehk4JOyVC4/H4yLm4FMuO4zjIcyo84nj6L0LcCGLV0Y7jeGMpPKS/oLELZODEV3P88ucjZtHKG/Ytle918+ghWPSuvCPXdRdz+gZCFBiGAb5qTKcznKS/8araYNoM1vGVuLcu+5NDXX/3YUvEeeGlo5xgPB4f8Wfv03+gwV+IOBeXC26WshAAN8uX0t6guvZTSoudX6crTFYmzs3tK/N7GzTa2OghWMQvCeZpBB4RADfLBJP0Jxh7h01cAEBGJtDYBWJMAAAXer25dXQLZtf44EVNoNGXo5+ZZTcpUsSYTER1iGkhuk/L1FEq/e9rbtvioK/Hq2Z5djko/i8/i2nQL4yySXPbFt/yENksN13XpLm1aNGiRYsWLT7FfxnKMdFh6IBiAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAJ0lEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAIB3A0BAAAGP8slRAAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 12,
            available: true,
            name: "Electric Arc Furnace",
            colour: 186,
            fundCostMultiplier: 160,
            probabilityMapGen: 5,
            probabilityInGame: 1,
            prospectChance: 0,
            layout: [
                [
                    [1, 0, 8, 8],
                    [1, 0, 8, 8],
                    [1, 0, 7, 6],
                    [1, 0, -1, -1],
                    [2, 3, 5, 4],
                    [2, 3, 3, 5],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "SCMT",
                    },
                    {
                        cargoLabel: "FECR",
                    },
                    {
                        cargoLabel: "QLME",
                    },
                    {
                        cargoLabel: "O2__",
                    },
                ],
                production: [
                    {
                        cargoLabel: "STCB",
                        multiplier: [4, 4, 4, 4],
                    },
                    {
                        cargoLabel: "STST",
                        multiplier: [2, 2, 2, 2],
                    },
                    {
                        cargoLabel: "SLAG",
                        multiplier: [2, 2, 2, 2],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 76,
                        left: -31,
                        top: -45,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 76,
                        left: -31,
                        top: -45,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABMCAYAAADdq7GlAAAFRklEQVR4nO1bIXDjOBR9e1MQYCBgEBAgYHCgIMCgoKDAoGBBQMCCAwcKAw4ULCxYcPCAwYKCBQsKCgoKCgwCChYIFBQECAgEFBgIGBR0xgvc71WcOLYT5+TM5s10Ytkey+/9978UKQUO+L3xwfYLrEJ4fpLO5vOFc38OBpg8/Gj9fTsnwJnbS4/7Lu6To4XzH523nYjwR5sP20d0zgHALxeY2FUKdNIBrPeG17fXvO2fBPDORjvp66j6lv8Xk+NBOtcvAADHceC6/YVr4fM8d0EbxbJzAgDAgPUXHAAA99/DhfaZ20tn8/lSscR8jvD8JK0rQudSgKLfO+ohSRIoJSF+RACyVGgbnXQARd9lWSE004AwjV8/AHH6ccti2TkHNEEbxbJzAtzN30qj9/f1t/za5HiQ0rHjOODcw6prVeicAAAQJzo/dt0+3D7H8en50n0DtpwaxWJZhU4KUAdtFctOFsG6qFMsq7C3DmgLeytA3WJZhb0VAKhfLNdhrwVoAwcBbL+AbRwEsP0CtnEQwPYL2MZBANsvYBu/vQDWvw1eXFyULl7E738AACkRhmE6mUxa3RuwLkAcx6XXtNYAgPF4DABQSrUugnUBXNctvRYE2cKGUgqMMWitWxfBugCmA1ZFnDEGABBCwPd9RFG26hOGYRr9+8/W/VsXwHRAMeLAL+Ke5yGKIgRBkIsQfP4PT+HVVv1bHwWklBgOhxgOh1BK5S4QQoAxBs/zwBgD5zwXaDweQwgBpRSGk6ut+rcuwHg8riROYIzlzjBFGPw12bh/6wKUEaeiR9fpmNpAJgLnHEop9M7HG/VvvQaYOU7RJZLUJhTbdJ+UEgDAhz6QJI36t+4AKm6MMTw9PUEptfI+kzw5QQgBICueUkoopSAdp1H/1gVgjOXDGw2JSqm8LpiWp3YURRBCwPOy7bAoiuD7fi5CGIb7tTXGOYfv+9BaL8wLikIQcUoZKSW01rmLfN+HEAJRFNUWwXoNIGtTtZdSIo7jpRkiEadjKpj0DCLPGIPrumtnmCasC6C1XhCBc47b21sAi5MkM+IkBI0UVAuokJIj6sC6AMXiBiDPZ3KC1hpSyoWIryNelzzQAQGAxbmA7/tL6WDOD+oQf05O3588rezbugBU3MycpoLmeV6e102I9xjDqzF6rIP1H0qORqOUiJs2F0IgCILc/sAycTpfJE6fsfhSyc+6A8wor6rqdE+TiDv9fm0HWBfAHN7asjob9BHPZrX6ty6A7/tbE6eI06eev9Tu37oAAFq3evKyRwJQ4duEeNHqTYgTrAtgLnc1Hc7I6kXidQsg0AEBlFKNc5xQRvzYecR0Ot2PH0tLKfGcnOI5OUWvsOBRhnXEj53HfDitA+sOIOLbRhxATtxcR6yCdQFWoaq4VREvW1VahU4JUBzHNyUeBAGur69r9dkJAba1OhGfPiqcnfJGfXdCAMI2xE0UV4/XoRMCbEKcc54TdxyWPef9l6O6MA8YjUbp3d3dymGxEwIQmuQ4AAz6WVu/E/9ydbFyNaiMPNARATbJcXP36PNltitE6wMP95dro26iEwJskuNaa3z65OfnpJSQs68AAJ34qAvrApgzt7o5bsIk/u07/VPlfOm+MlgXwPO8pYhzzuF5XmmOU5F7uL8EkBEfjUZpE+IE6wLQ7i6wPI6vy3HAjPj6QrcO1gVQSi3lOKE6x5tHvAjrAkwf1VKOm9/mVhHfNNqrYF2AQZ+XjuNk9V0QJ1gXAEBpjpvD2S7IAx3YGLm5uUmB3Vu9DNYdYIs4wb4As69WiHcG2QTmAGv4CSvZ1DOrqApZAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAAEFUlEQVR4nO2ZrXLrOBiGn+wYCAQIGBgYCBQEFBgEFBacSygo7CX0QgIWLjxwQcGChQcsLAgIOCAgQCDAwECgQMAzOUCWbKdNmx+7PTujZ8bj1nUdv6++75XsQCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQiX879w+NOSrkb6/qTsS58KXe53FXWArCqBcaYUe71jzEuegl3udwVRbEDSIVAJ5YisaN93m9jwP3D4+4ud6Uut2sqa9mkClU7E25TMUobfLkB9w+Pu6IodvWP7yxrwyZVmHxGKgQAJp+hahF+H5ovM6AbbleVprIWmRWYcoXcrlnWBlOu3JbPqKzFV8iQfLoBh1JdTzOMMcisQCcWVQtkVjBPJKZcoRNLZYdvhU8z4JDw8t+/WCYSrAbAlCvmiQwlv0kVQMgCbSwqYTATRjfgkPDNZo2UEj3NwGpULYIJAJW1oQVkVoQsIAUlBSobxoTRDPhoAVNt1wCol9KVeT4LJV9Zi04s80QyTyRyu8aUK4BeiwzB4Aa8N+IAz//9w7epE65eSlcBEEQuExmOVda6MGxGX/v1QOXWCEPkwWAG7Av3gv3+9uYaKSVAGGGTz1AvpcsAeNUG3gg/E3iUFGG6vHRmuNiAQyN+deVu+PbmGmPM5Onpyf3B6lDuQBhVL9AfR6jeXjYtY346M3w+bFJ1USWcbcBHpZ6nCcaYyWKxmNzlcofVSCmRWcFVpUPJy6xgXhuAIEy9lLDVbgPm3QpJnQkAVK46tDl/ejzZgI+E+xFfLBaTm5zdTd6ktVDI7Tosenxfm3IVEl9u123IySbktpplY1AgV1CBvC4AmGcS4Kzp8SQD3kv1Q8LL2vU89Mvdp7r/3ae6NwFaYVRtHoT0T93oI1TIAz89BtOP4GgD7h8eexf1Iw4E4QDdDy8TBUL15vpNqlyZ701j3pxUiNDvy9qgpGCeSdcW/jyrocJtVrct0eFYE05ugf1S//v7n+E5vSe+djfnpzsv2IvX06w3n/v9sjROqLHhvGUi0caG81UtXIuk7X2Zn265TNV89pEmnGxAt9SPOd+PrJ5mpEIEofvBF87tispn7bSYq3COTmxoCcD9T9r5mb4J7xlxkgEfCX/e7r1hEu1NQ5sF0JR3pw20caMXKkKKNie8CUK102NzLEsObwfvq8Mor5letYJQIQP0NHMrwMaU/WOqFs6MlPB47OmKeov3hB5idAOgLUePH+VuGfuQS4UIOdBth/fEnyPcM/pL0VfV0KVq9rkKBnjCur+pnrcMuES4Z/TH4ectE3+jQUS3l324TTOX9KZ94AF6zwZj8Kmvxd+qhv0+79ENvL1KGGL04Yu+F3hrWgrt4UXDq9E/NtlP4bf5YuTYldtQwv8XnLKmj0QikcgZ/AJmq2MtPgIi2QAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAACQklEQVR4nO2XrZPjIBiHn7uJQFQgIhAVyJMVFfv/qxUVkStOICoiIhArEMz0RAIlabq3mybbm5v3mekkBYbw/ng/AARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEP5Tfjx7AdZwQVkIDm0O+LZBmwMATdNsvr5q6w/cwxouNiocIbd573sRvMe+t1hrLwSHGVb5el5/wzZX+GXPJb23EeiAGmxUANRKcao0nB0AVitcFUBZAI7Rc6o0Wmv0+Y2groKtIcjPRyf4iGR8G6GtbG/83o7GnKKfNd6+txAcXQh9eJzf8PtfqKAI9QEVFC97LqXAS1jdA6YLaivbvwTXP5NxgNuZbPzRaLoQcDuT+/OY4LDxKs4xen7XFu89Jro8dolHrCbA1HAV1NXAmn73oX9nHAJdCLgqzLalBJn6Sg9xVcg5Y6kQqwgw54Y53uHGaBgMSSFxdr37+zB6AtkjpoaXc6X5tDmgugb4vAir5oA2Xn9Ab3hdLHJncNWwsxR99eDqFP/TmOBy3zF6oBeyViq3p7G+bb685s1CYEoWJTFk+ZwbmHiIL0S6s/MpP+T5FpTMTcvgl0QZDKC7VgMb1TgE4LZtYjg8IQf8jY+EGIkw5IxUEWAcGrl6pPAYWGo8fPNR+G6yTLsPt8mtKJVlPoHHDE887Sg8IsVxB+gi/tOhaagUZd5Y63j87Zeh8nSYd34mIY4oPGSNXS95mgAwUxngRgwz46NrXoqedh3+7Bl+ixvgP8mjlxpBEARhAX8A6fItWJ+3fMQAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAAChElEQVR4nO2YIXPbQBBGnzsBAgYLBAwCDhwIKBAwCDAMCDQICCgIMCgwKCgIMMgPMAgICDAoCDQwKCgwDAwoCAgwOFBgEHAgwMAzV2CfRnE7KbF0bWcfk0bS7X777Z4kUBRFURRFURRFURRFURRFURRFURRFURRF+c9ppVy8KIoAYIxhNpslieVdikVhk7z3PtXyJckE8N7jnGulFiGJANH6AM65lnOOfr8f3rqnLhoXIFr/+vYOY0ySpKska4H+aa8FICJJZ0GjAsTqO+dasLG/iDQZQlqi5fPuKBxfzsN6SBhMXZh8mYaiKEKKOXDQ1ELVbW+9uCFrL+m8jLDtBXS7TYXxC40IsGt9AGstLBZ8vz1jZU9INQeSDUFjDjciANKWyvlmd4baBYjV363weDzEmENg44b4PlAUBYOpC8eX8zCYuiAioU5Ran3/FpEA4L1vbbe7cr28OwrrxU28rrynKArmjx1sNqF7fMFjfs77rmU6KBCRV220D2oVwBhTDr7x9YTBxVm5Xtt+DJnkAORHRwD0+j0eriyS9149x1pbCjE5M3uNufYhGKv++dMgGGNCtYIr/0wmOc9PT6wXN8zvhZPxAoCHK1s6gK7Fz+55rCG+2gSo9m1MPLYEwPrFA7DaHmd2yAuUVu+cfysTv/+xrCvM+lvAOdeqihEdICJBMs+ScwAOtjtBbItMhHanUz7r6e5DLbE28hNi1/rmgFIQv018lZ0CGyEyyUsBll+HSObLZ7nlfmNu/C+M6VSSX8mb18q2TWAjVDx26/3FneQ3VNUB1WTijKhWPIoUz/3zDniL37VGHVWv0tjH0J/YbY2y4r7eIv21Dqir4oqiKIqilPwEnAMJotsi42sAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAADyElEQVR4nO2ZrXfbMBTFr3cCDAIeEBAoEAgICBAIGBgwKCgcKAgcKBgoGCwYGBgYKAwo6B9QUFAwUBAQUFBQIDAQECBQYGAgMGDQczTgynHcJO1qO/Uy/c7piWO3lu597+mrgMfj8Xg8Ho/H4/F4PB6Px9MahBBWCGGbbONdky+vQtPCHa00wIknosbbap0BRJSLN8ZAax002V6rDJBSWiLKxW+D1hggpbRa6yXx/00JOPFCiK1F3vHmBkgprVIqEEJAKZXXe9O13wqklNZ9ElE+57vPKIq2MhW+CWXxQCbcXQPbMeBNSsClvZTSupoXQlitdbCNge9NKUYeWMz75egDO1gCZfFOdLn2HTtlQFl8FEVra9+xMwasEu9EF00o/91OGLBKPLCc/ut2fv+8AevEh3yUiw/5aLcMcPO6S+114t31pn3/P78OICKrlAqiKLLT6TQI+ciG6TWICCEf2TS+2K3lbnlul1LaYuTdMxf5VSN/kW1kQKeJl0opYYyxSqnACU7jiyDkI5sC4OEttNaBEMJu2v1FaYxpEx0sUHsJuHQHFlF34sP0Gi7ticg+t+Pr9Xnd3XtCJQOKKezW9+5aa40wvQaQGeGu27bmr2SAMSYo795c9N3zNDzIo26MeXH0AWA+i6t070XUMga4szylFKSUNjw4xeGwBwD28kgiLK32tnnm9xyVMuD9ycQCAP98AaVUfp/EHu6TFADQ/3yZ3Suk/EtPe77dzhqfJis1wIZfbW8/ApCJduyxEDdXN4h/HoPxIZL4LjegbUddlUvg/k7ln13OQXscRmfPGB9i0JeIP54gvjiq2lQj1DINdvliuppPpphPpgCAQV+CMZY/a1v0gQoZsG4VFxZqfdaVIJaZ00bxQIUMICI8zMfozMf4HS+mq9QYpO6c78MQADA7OwQRWdFB/lOt2/XxqqiIDiz2nv4Tg4jAR+cAgMGwh6sf53iYj0Hh4vdMSvl3Ha9v//vpWW4SZwxHnw4byaC/fqngi+iZlAA8ndc7vWM8zMfZs9/ZfdOlpe/6YX3bo09f7GDQx/n4BwDg67dTMM7x8eBD7Sa8PgMecULKGxsX5dykZ6Jejrj6NQPnDJwxsMdBtgkDXjUIroqe1jooGmNAAAoRN5sjDmAp4vv7ESaPs0mT1LYdLpdGHvENwh1JkiCOExwdnyxFvEicJHV1dYnaDNAx8gwgmBcJL5KsEHh7ewMiBsYY+vdnNfV0mVoPRDYNbJswJllaMAFZxO9urhtfOzRyIvS3DMwESsXodHnjEfd4PB6PZ8EfjdnimT7mBTEAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAAG50lEQVR4nO2YLVTjTBuGr34HUYEYMSIiIiIioiIiogJRUYFArKhAIBAViIpXrEBUrEAgECsQiApERURFRUVFBaKiIiKioqJiRETEiBGICs7JJ9IESoF3f9h9Ta5zOCRNMpn7nueZZzJQUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVHxi4RhmIVhmP3X/fiI2p9otNVqZRcXF3u/n56e/pH3/Q6f2qGXo313dwfArxjhOE6mlNq7JwzDTAgBgLRcprMZaaqxLIklJd3zzk/r+RQDxtN5toweynPXdcvjl0as12sAGlaKtGx0mvCle7vXB9/3M2MMQgiMMVxfX1MIL4iWiuVyhZSSxWKev6Pb/WkTfsuA8XT+Zn6/NmO9XjObzXBdl5NmnftJUl4PggCAfr9f9sX3/SyO45rjOJkQguvr6532jTGMpwuklExGAxzHQSlFt3f5ZkQ0L2eZcGwmicfB1a7m//2o2PnkOhsPehnkOR6GYbaMHnbEFjSCFo2gBcB6vUYpBVCKD4Kg/FNK0bDSnfYLTjrdUvBLhBCkKkZrDcDjU51u75LlcgXAeDzmbjCgeTnLju9W2XzdztuzV3RHaucd/xoBV1dXWRRF5fn5ic3m8OjN0C5CvzgvhD/GIQDtTpvh9Dm0hRCcn9hIy2a1XCBlftzrh+V1gKN2J/8fuOVvs9kMgEQ/sXgY02x92YuI+tEV9dUYq3sFgC3rMA0ZDC5L3QfvCZ9PrjOdJkwWqgxTgPtJxPnJvJzcCiPa7fa7wv1WA8/L2xCCHfFaJ6xWEdOoznGQInVStFGmgCUcomjEfNuHo8Cl3W6XRnQ6HfJB8vP3PtXpdDpMUhCHgnTQp96+wI4iHMfe0blnQCF8tVzgNZqcNBPuJxEvJyWtYXbX5fTinKuvx+g04ftwVkZAITyMHmsAjS8n2TIF6yBCKYXnt7YhDFLa3IYK2DCNBP+c2YAqTfB9PxuNbjDGEAQdRqMb4DkiCiMKfN/HdV28RpNJuiG1W1jJAxvAcWzmMti5fy8FBtdfMq3T7YhskNJCSpv7SVKaUETE69QI7+53hEM+X7zu5Gg0AuBb74jVKiKcbcprvVOH21DtpEAcx7WtuLI6dDpfSY0qjXhZJYwxPG4OiLdzwix1ELYFwO2pQ+C776eAlDbDqcEYQziDb708TI0x/HPWKMvXZLHZT42LcwAaqZVBPrMbY1iuNamKy9HqdPIR1DpCSou2FxGlLsfBsxEvU6DgpRGDQb80Yh6tSyOAUrzf8LZPrvC9OudnS866kx29b0ZAHpI5p+06nheUwrVO8BpNdJrsRIUxhrNjwWw04/TivLx/mVrliBeh/zoirIMIrVM8L+BL97ZWlMFCbHH8mpcR4TgOthvsGFEwni4AWDyMS3M/NKBIgcBa4/nPo/yrqbFM8/B7bYQQAqXySbZ4RtoNdLLkRwwoKCKl0/lKFI1KI7TWDAcC173fE/6uAQDjQS9brfLw1Drl8mZRGw962ffhsqzJ33pHaJ0wnO6nhuM4ZVtRFO2Y8NIIIQQz+YAbOXsrPWNMOQl6fgspJVprpJTc3vQ/jIhu94pi4nxP+IcGvMXvpkZR/5VSKKUwxtSKDh/UXZ42a9ZnimDiF50mODpBJ0sODnPzms0j2u0WtmXtTGTvGfGR8IIfXgkWooUQtD29jY68XK5WEcOpYf4wRuuE8xN7Z7EjpY0xphyRVquFEKIM7cNDgZAB7tCBAxfHaSOEYL3MK79OVhwebJiMBtiWRZKmH/YzjuPaj4j/KQO6l+Oa5wUcBxs8P0DrlO7luCalzTSqb6vGBimfq4bl+Cil0DohjuOaMQbPb+0tbY2OcGwHAMd2kFIC4DaOynsen+oAJGnKbPbwo93+V95dCb7FW19uhdiC1SrC8wKMUZj4gU6nQ/cyz9k4jmubxtdMrVJk0OcQsqftc3F8C4BSM5SCJ7dHIizS+QQhBE+PKb7vMxnd/5rSd/gpA97jtF0vq4aUQTniAHEcA+CdDbNiMXJou2yM4Wl9i+/7bJp9CAYIx2Y5yuv0oWVx5ikGc5Gnkd1AqSXj8fhT9zB+24Du5biWf8VFW/F51Xh932beZ2UM1sktbrsFQKqHbJp9xHZ9blTCoWXhH0Q03A03NzdldXCsvDx+Nn9ti8pxnHzGd3vUheDQshC2hXBsHr59A8A/72KS5wnuzFMMBoO9JfFn8ikp8DPUhWBjDHqZL3ys+gLPEqxSD5OkCNvCSSc0XLmzSfKn+GsGKKVqQohsYwx1IXhMcvFFfnss0Wm+gguH3/9aZP7VCDDG1IjyzYm6dVruzBT5ncy+/vVd4/90m/rl196fyO+Kin/n/5lT+f4bD6SCAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 63,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 13,
            available: true,
            name: "Engine Plant",
            colour: 45,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [2, 2, 2],
                    [2, 2, 0],
                    [4, 4, 1],
                    [3, 3, 6],
                    [4, 5, 6],
                ],
                [
                    [-1, 0, 3, 3],
                    [-1, 1, 6, 4],
                    [2, 2, 5, 3],
                    [2, 2, 5, 2],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "CSTI",
                    },
                    {
                        cargoLabel: "ALUM",
                    },
                    {
                        cargoLabel: "SAND",
                    },
                ],
                production: [
                    {
                        cargoLabel: "VENG",
                        multiplier: [6, 6, 6],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 70,
                        left: -31,
                        top: -39,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 70,
                        left: -31,
                        top: -39,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 70,
                        left: -31,
                        top: -39,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAIL0lEQVR4nO1bIZDjNhR91wkwEBAQMDBYcCAg4MCBBQELFhwsOHCgYMGCgsLCwoUFhQcWHCgoKAg4UFAQEHAgICAgwCDAwEBAQMAgM1tgf0WSJdvJJrs307yZGyeOLeu9///TV7IHXHDBBRdccMEFF1xwwQUXXHDB/w5vXvJhDw8PTwCwXC4xm81e9NkxvMgkiLhSCkopAICU8rsQ4awTCBHnnH9XIpzl4SHiPkiI1xbhpA/uirh/lFI6985mszev4REneciQiBNs4nTt7e2t8/4lM+NZD+ircaAmLIToJf5aHnHU4DZxOvrEQ6neRdzHS3nEQQPHUt0m7xO3r+uKuH8k0Djn8ohBg5yyxvvupzGEEMjzPHr/qTKjc4CuVI+5uX19X40TESGEc76L+Kk9Injz0IhLKY0YdL0/cTrGPMJGF3Efp/II50afuE2sK/J9qR7zCCFEL/Fze4RzkXj/29PdTdUiZuNUNX6u++k4NDOcC9jbn58SLvDjuzKqdN+DQ5Gyo01lEyPe5RGUKUPvHyKC8+GNSJ6W/A4kwhDiXRHzJ3OIR/iiHfr8oR7REgAASIRptnbI+w8OeYTv6n0RDwl1TOcY8ygaKyaCc/Jjxp8AQFaVEWHCFubztZ7i7qYKRszHEOKx+4YQj91LhH0RAQRFaAmQcoZS6aAIy2LslEcscsd4hJ9RMeJde40QaR++CMEMSDkDAKxL6Yqw/gbfI+yJHBMxG4d6hI2QCCFROeeOCNEMIBFKpfFP8qkWYfs7ADgi2A87xCOe00fQajAk4qEAzOdzw3tkf0Ck6Uh4r75giTuIJHHez1YpJiw31/0xq0B9hB+xUPSGEs/zvEU2JGKsWSKU2T1JYM4FM0CwWgCp9f5mLyuO8QhfjEM8wibdFfku4rqs51X8+2u4BH6ZZE8AoJMdAOBqxCG1hmDMESMqQsAjhm6LQwiR7KvxLuLXmwcAwN+FinvAJEsx202gtcKU1X0Aq/aVYovREiHiEbFUH+oRz404Eees5vG4kd0ZsEiuzTlbCMoIG+tSGtIfqr8AdPcR1GbHJg+Eu0CbcKzW+4hnXKBQMi4AecAiuQZnHErvB9da4cNoA8EY1kXpGGWpalEO8YiuGvdxbKoTcZ7VYjKNlgA/+IORAdIDOauPrDkS0VJph7gtSMoZRJLgvfqCSkms9RQAzPvZKjXp7pO3DdEXwT9XZvcos3vosoQuS1xvHnC9eQBno/pfJsAzgVmRQV3dAaizwIYjQMrr+r4XBW6rRUsIEscHCWG/HiICwY68eZ7nD4cQz7hAxvfE7eD5GIVOykbpewGgKvCIDJxzyLxeEWhJpCyg10SczqWcIQUDynAfscAE02zdaoWJuP96aI2LZpwsuWo+57i6yrDb7+3iAoR6ABJi05yfZCnWhdsKp5xBJzto7Mw5EmKSCgj1175MVFuEU9Q4milTRnFeE5dSYjzOsP5ae0BUADuVCbYQtjh2pOm4wrReNdI1NHYtX3BeeyLYq8WhxGdFhpvpLdj6i6lxIQREIjAeZ3hffgXmn01mAHsRgiVAjRCsJshvhnzyBMb4Xohm+dRl1WqvARiPWOIOa0yNCAcTV8vW2FJKfHy7AuYr5PnWnO/MAJqkTUDvFJh1GS2Dtgj0GinM8mkL8VNWGBGBfQYBcDKhHPfXOAD86REP1Xj9u8LWeR9aYp1VwC4BIrDQE+hkh+1OtYSyydPr0PJJgm13CtudMkIIxpzVom85E5xDcI4svXKIc84xHmcA3AhTM0VHW0RCsARocD+SH0YbSK1bkadSuJ8UzqqhtAJnHLTBWjQtNtgaSGBKDACgANGT6qJaBM3Nr3G7kxRCYFnWO1bWtrh2H2AEGNAI2a9TziCVglSq1UeUShv/CGWWYAyTLI02MP46LkRtbj9nBdj8M/J8a9K9UHvyyzLHsszNOMLrJ4DIKhCLJCrXA+geEs7fJ5jl0xY2kFmsabH7ahybmvzHZAXMV1DNfP19A2VAyCQ7TZCwKQoIxlqNEKRnYHCzJrSMEgRjwA6OoCQEmt9iYg0MpfpuU1+nvOdsq5oUg1vjvlegaM/LEUBWzUxUE9mmRkkI2SyFofQvlQZL606vLNvfHQDAfRbOLDFqTDHSwFCNK2/yRPxh9Q6fRn87PQCAQCPkj+AJMJfVGwC4EXgKCUGwPcA+t8C1aYRsIUyJ9LTYNHm/gYlF/GH1DgCQcAHoOoOktcMUmTtOCMESiAkxyeoNjF33fh/gNEKNEOQdQLzFJvgNjL2EBYl7KJTEGG8BwHiF3Q/UWdLTCcaEWBclJlnqbIIIKWfI0b182gi12ECdAYMiDiBpPKMK7B/sRoiywjfAXgEIthDzfGt2dS3TS8MmJ0a1d3S12KGttmaArqQhTuQTazljaWoEkJYQm3z/bTURt78IOUgAgp8RJAR5wrT6BuTfsE2uHSHWeelulgItNrBfvmIRr5Q05FmaQm42YGkKH0S+i/hRAsSEIHumjJhyV4hJlrYaoZAQVO/xVJedxIH9dwJ9xAlHCUAIZYS9QpAQsNK7yyMoA3ziQB1xtd2ntf85MCziPp4lAMEWQpZV3CPQ3QgRfOK0Owx9DqD5DeJHPD4+Hvy3QicRgBDzCACdmyVaJu0lzyZeKRVM+Q9XGwCbo4gTTioAIeYRfS029fJEmI5+xE9BnHAWAQh9naXfYvvwiX+62QGYn4Q44awCEIa22EC9EiQ77pw7ZcR9vIgAhL4WG2jWcHYD4LzECa/631Xoj7JEkjgiFJP6R5RzEie8+n9aAvZCvBV1ORyyjj8X/wHTASMG7OhtGwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -20,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -20,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABzUlEQVR4nO2WLXDCQBCFXzoViArEiogIZAQCcQJRWYFAIBCICkREBaKiAlFRgUBUVFQiEIjKiAhERQUCcSKiIqIiIiJixUlcKiCZ6RTa6SThZ3rfzIkkM3tvN/tuD9BoNJoSWHjjxJ0MkkPr+A2j6ICj0SiRUmbP/baFjvNc+D5FUZiwhTdOOI7gLVeo1WrZeynlURfhPG+ANPHgfQm73kS7GWHqSSilUK1WoZQCM9ATF0nvpg8yLXAcHU1BcouYjDsJc4y5rKAlViAyQWRh6kVZEYQQANbdkHIsXXGWNwCRhbmsQCmFl9cViCwwr5O/va7jzmmibsYIwxBCiGxNvQjHcEjmtkCabEoQSNi2wOiuiVOwRqEWEOYH7IbIvp2CNQrZyJ0MkiCQIDLBHGP4uDTcySB5mr1n3fEwuARzhNl8bY30jx96auS2AICtYvNaY18UUoBd9K4qmTWIBJijzdpYg10Qmei3LUw9ZEUgssqU9YXcU2AXztA1bFugJVawGwLMMZyha/w0NcxaA2EYgjkqS9Y3Su2Av1hDqRDKf0O324UzvN/bIVhqAXaxzRq+7xsA4Pv+XrUc5Ca2bWocQodGo9FoNBqNRqP5v3wC9xsxaKDyCKAAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACXklEQVR4nO2WIXfiQBRGL3sqEBURERHICAQCMaJiRQRiBQKBiKhYUVFZWdGfUVFRUbFiBKKiAoFAVKyIiEAgIkYgIkZEICr2nKzITqCh7ULbQMVcw2QCee9933tDwGKxWCwWi6UmpJS5lDI/dB6v0ajrwUEQ5Ofn5xv7YRjWFvM9fHoy627f3NwA8JWF+LQk7seP+Syalte+75frdSGSJAGg46W4XgudLhicXR9MjA8Hvh8/vjjfVTGSJGEymeD7Pv2TJncPi/K+EAKAq6urvQvx7oBmxktHRfDi94wQSimSJOHitMPdw6Is2tzrnzQP0hE7B3ptxo0QpvXNtVIKgGUsAegNe/waZziOQ5YVnz/7LVyvxXz2G9ct1t/7l3sRYecgg8EgBwjDsNwzQvR6vXKvWng36NBuF67fPSyeFa/1Aq1TxlGTH+IJ1/U4u7zfiwBHu/4gyzIApCwKC8Ow7AAz47AqXEbLBkBn0M9nKXhHEUop2t2AVMVoDa7b4loq4Ilx5HBx2vqE0rZjZwG8ZQRASuGmlBIhxIbjpnAozguzTv8IhkPBaDQCwHU7zOdR+fwsy9B6dUDWzbvbLBTHOUB6LPB9f6PVZ6kHFCd7t9vNjePrYwJFRwDM44go9fc+Ah8Osi7EdDptQOF4tVDj+FtCaJ3Sbouv/S+wDW85XhXCcRyUUgghuL293ft7wM5nwDbEcdwAcoBZop8JMRwOgZUQBq11Han8l1oEgFIEqAhRdXy9Ww5BbQIYqkIYjONxHDfiOK47jVf5tq9A/wptZFlGuxuU7xMWi8VisRyOvzlqNS01TYZeAAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 14,
            available: true,
            name: "Farm",
            colour: 85,
            fundCostMultiplier: 49,
            probabilityMapGen: 15,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [-1, 1, 0, -1],
                    [-1, -1, -1, -1],
                    [7, -1, 4, 5],
                    [2, -1, 6, 3],
                ],
                [
                    [3, 4, 7],
                    [-1, -1, 2],
                    [6, -1, 1],
                    [5, 0, -1],
                ],
                [
                    [7, 1, 6, 3],
                    [0, -1, -1, -1],
                    [4, 2, -1, 5],
                ],
            ],
            primary: [
                {
                    cargoLabel: "FOOD",
                    multiplier: 14,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAEMElEQVR4nO2ZL3SyahzHP7tnYWGBQCAYbjAYCAbCAoGwQFggLBgIhhsMhgXDgnHB8IYFg+GGBYPhBsOC4Q2EhTcY3kBYICwQCASCweA53sAeDjp1iOh2z+VTlMcH9Pv9/XkeBEpKSkpKSkpKSkpKSkpK/necffUP2Id6vb4EkCQpGXMc5yAN/wkDhHC5oiLLMkDyWldr/NW8za3jWxuwS7iiyChiTFGwTD2Xlm9pQFbhafKa8K0MyCM8TR4TvswATTeX4v1iFgD5hQuCMESR5b16wnn2n1wMQvjl+ZwoioBihAOZ56c5mQHrEY8oXrjIgH04egmcIuLiWLBPGRwtA04V8UMp3ICviPghFFYCQrgkyVjmVSIUIAxDovk5QRCeRLiYn6UMDjYgHXGA29tb3GBCEEY4Uw+AhqlhqDazebaEO0S4WqvgvvqZe0BuA9IRF1jmFW4wwfV8/GhBRTpHrVZwPR/XCxh0HneaUITw51+PtKwupmkepwmuR3wx8+NxTQNgNJmiVpVkvqHaGCo47pDWj7uNJhQhvPfUwZl6K9+dhcwGbIq4QJZlNE1j5PRpmBqu5698Phj8pNWycT1/xYSihdfUOvLFLKskIKMBo9Fo+dkcxx0SRjMaRjuJ+LoRAJIs47hDDNUuXHgwz3SZFTIZ0Gg0zkaj0bI/7iW1vf7atu5xvR6QjngvTv2WvXK9IIwAmM8CogyNcZvwhqkRhFEivF45J9hzhfxjv+kxarWSee5k+kZ/HBshznOmHo47XFkqN6HIMtd6HYDeU4dOvx1nmanRbfaw9DYQC29Z3eR4H3IZYKg2vWZ3oxFxxK8/jE+mb8l5InLbyCJ8/NJP5lt6m17vnzxS8hkA0Ppxh6HaH8bTEd/EYPATQ7WTPUKaXcLb1j2W3sYJfzMYP3zoL/f3tyumZOVo9wKT6RsV6fPLSxcLLi6VrTWeTuvB+IEwmqHfNDDkejI+fum/94JLlAvwvOzZkNmAyXMH2P9+O026IYrVoHnT3SlciLu5ukORJVpWNxkXc377C5QLsLW4JNvtv4v/Q+Rp6J81bZbVPTxQqxX86Vty7Ho+k+kDpvYn8N5L1pYz5gGGajN+6SPVdKSaDq8vVJRLKko7GXc9H0uPr5tHuGCvEnga+u9f0Pl0XwCru8B1IwRhNNu4jruej8pLHGW9jh/MeP71SE2/IXp9oduMl9xrtZZLuCBXDxBGTJ47S0MGb7E9LcSeYDJ9+JARALJ0uXEDIwSul4Ah10GvM+41GTjBwTdzBzVBYUTTZrmpR6xvgrZlxCa2lkBBwgWFrAJpI6qpjFiveVjNiF2sl0DRwgWFLoO7jICPGbGLpASOJFxwlH3APhmxjWMLFxz1b/HPMmKdeDmr0Gg0TvbA5iTPBbYZIThkHT+UL3k01rQrSwDtygS+RnhJSUkJwL/oG5kL4wRswwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFZElEQVR4nO2XL5iqTBTGX77HYNhAIBAIBgKBsMGwwWAwGG7YYDBs2GAwbNhgMBC+MMFgMNxgMBgMGwiGGwgGgsFgMBgIBAOBMIGwwcDzzA1+w0UE0bt/7p+PX8EZZZjznvccRqCgoKCgoKCgoKCgoKCgoKCg4PMghLAwDNmv3senEoYhcxyHEUIYADiOwxzH+X+IQAg5CpYQwlarVSTEX+mIrIzzcVKUv8oRaRnngSfhovDf/7GOyMt4Hn+0I67JeB5ctN++R7w143n81o54z4zn8dv0iI/OeB6/1BHXZJxOZoxOZh+2sU/rET+TcTqZsXBhs3Bhv0kEMhyzydRkZDjOXOOtjhDOboAQ1mq1oGmawMcAYBhG5n333Rpr6Bq62kM0F+w8SJ2Hs8+KM5maqQF0HluZaziOw0zTBN8vH/f7fZRKpcz7Tr4Iw5C5rgvTNGEYhsDV5ONLAggXNgt2Hl72NjzPRU/tAMBFIjS+PLC1v8Dw6SsAwKcUsiTBpxQAYPS6VyWN75+Pz/JeXZ3bnpdAuLBZv19PXSdu88aXB3Z7e8sqTZ2JVTmav+/WmFiVr9rHpT1CuCTjLhkxAFCN54ttzAUoNeoCFyXugCybf1uNsNkFAIDbigh77UJXZQBAs9qFruu4b9Yy98HF58/Kc4QQhiHjNZJW4y4ZMVGWAACBT68WIY08m3vBN1jrHRSxFN2jqwqq6iMAQJLlVBHoZMbEinLYa6LvZPWIszUeD/5lb6NdrkPqPAhJla+hXq+zIAgQyCECSjF8+gqfUqzdGey1iykxAQDWcoCt60FXFdT1B7zuS0diJUW4tPkmHS+sVit2d3d30jW57S1xC89z0bm5BxcjS+U8qrUmAwB3v4EoHdZKs7ksSbgph3jdl06uAKLPSRHymm+8HCIHWJbFKpVKao3QyYwFPoUoS1HmefAAMHZmeHqa5ArAA1dVDQBAKcWNssNmF6TaPF4SaVcg3Qm8z3AhxIoC1Gs41+Nya6Tf7yOYvkSbHLoTKIqKdrkOsaKAN7lzgd/d1Y7mG406gGybp2WbBxzP/nZtp76aefO95BwTyR97TzLHcRgft1othloVmqYJ4cJmPXSiwLNOeWkZ57TbrcOc76OqPqJZk7EPvCgo6vtRwACiLHPKogJ7OYD1ssPg0Th5Nq9xQghbexZaaEXJTRMr92TVaDSQ7BGwl2czDwC9Xo+ZWwsBpRAlKbqOnsegvg+fUqiK+COb2+2JzeNOkGQZ1nIAANh4IeTyK9r1J7Tb7WgfP3NyLWV9wRepVqunjlDkrNuOONS3dHSdzvt4vD8E4nqHYKnv/ycGoCoiyuIPQXjg934NSvnuIACW0TOSXb3VarFzGU/yT94Pms2mwHsCVzQ+vvbf12YXwFoOIMlyVNPJTr8PPOi6jrU7xfOoi40XIqhUYM43qFarR+u5rgtN0wTDMARCCDNNMxpfsp9MByQ51yPi40vYuh58enAC9X3clMOjrr5d2wBcbLwQtxUR/h4QRRED0gE2m5P1rsl4klwHJDEM48gRQRCcOCL5d9R4HGD8PDxaJ+4EANB1Hb7nYDh9wnD+FaqqHj94s8G/LyOMd98AAPPxUqB0AU3ThGsynuRiByQ51yM0TRN6vd6RCH1jggEZoDvqRXNb14NStuHtV7DWh67uLcPU5x0Cv8F8vIwCveQMksdPC8BpNpvRAco0D8dYx3HYZDKJfkOmfQzIIHMNbvVzxAN/T94sACfeI+J2rDR1BgDdUe/o1MdRVRVwlyfznI8KnPNuAnCStbiztsIOP4S4lPj7/SN5dwGyuFSInbX9lMA5nyYAJ0uI+XgpzMfZpVBQ8DF8BxzIEd0AubZDAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFjUlEQVR4nO1YLXTqSBi93bMSMSIiAjEiAlGBiKhARCAqEAhERMUKBOKJFRGIFStWVCBWVCAQKyoQCERFRQQCgYhAVCBGRCAQI0YgnsuK9JsOIVB+tz1nc00nU9rMvff7G4ACBQoUKFCgQIECBQoUKPD/w81XH+BQBEGQMNtBvIgwGAwudu5vL4BJXEoJt3YPtRLo9XoXOfu3FYCIq5WAEEITN9eXEOHbCbDLcSEELMsCgItGwrcRwHRcKQVecfe6f6lI+HIBdjn+mQiXqgn/iQDDh0biP79svOuQHCcRiKzjOACQ+5lTRbi6AE/3dwnlrv/8cpPn+K58Z4x9GgnR9BUAMB6PT+Lyy+Wo5kMqBSklAOCvXj9RSkGtBHjFheM4mgCRYbYDt3YPKSWY7YAxhngRgdmO/jyz00iIpq9oNB/Q6XROPt/VBTARLyLwiqvXSik4jgMpJeJFtCFIliyJAGwSL9slcM5PPtNVBfA8LzGfGWOaFGMs3Xt3lhw3idOaV1xIKTeIL95m6PdDVKtVKKVOPuPVBPA8L3Fdd2MvS9AUxLKsLeK7HGeMQQjoueAcAX49+S/3gMhzziGnH/vR9BVu7R5OZk2pwVZC70MITbxslwBARw2B83Lu/jG4Whcwq335bQqLMahaA1EU7e3pVAOIeBiGEALo9wPEcazJkuvhdH7WBeniERAEQQKkBxQidTMGYC3fwBiD67raZUspvZbT11zHzVCntgikxM05oN1GcooIFxPAdBxAWu0XkSYYMwb3nYgpwi7iJijUlVJbxFutavq7W47BYHD0uc9OgXa7nWQHlbzBhsLb931IKaGUQhRFaDQfAACLt9mnoW4Sj6bpsNRuewAAzjls2z6az1ldwPO8JK+Sm0OOWdXd2j2Gw6Ge8qhLlO1SbqiT46PRSM8BrVYL9Vr1nXT5nOMDOEMAqvSMsY1+nUd8nwjU1kxCecTb7TbcW45qNSXf6dThuhaUUhiNRicLcFIKmG2ODpwWvf1X12y1931fEyKMXiYboe7ecvTbDXRHUyilUK1WMZ/PIYRAHMdYi7RrNDs9zMM/YVk22t3D7wUnFcGfYgLeaulnctB0OdvraW32+uFwqEXcVdzyxtwwDGH/jLBeSr037gdgFQsWgLsyEgCYLT83+CgB6B8D0CH84/cebitV+L6rLz2fiUBDju/7W8SDoIn5fA6l1FY3CMN09F2LVwgATtmCWEpwpwTLsjF4GmNC5ysBjQqSsm2jP1ntFOIgARqVlLhcf+xRoSqVmH42kdfrs9OdUgr1WhXhFKjXOUajOYD0vg9AF0nbrWD63MV6KTGf1/U7ZAlw7xwMnsaaNEETX6z2cttbBDuenTQqSOR6kzwA7RAvc1iWpZ//fhqDc75RGEmQvBucUkoXNyqC9MVHHijUWcWCU/kBqxrAKn2QL9s2Xha42ee6iYM+1PHsZLlabYjw0H3aaFtE5rE3Ai9z1OsccRxDCLFzrI3jWKdNq9XCfD4HkIa6WdzG/SB9T8XaOpvDGGA/wLJtNO9r15kESU1TiOfHH6j5wUaRMiOCxCFwzjd6vSZguG0Sp/wmx4mseB+MaC2UAtQTxAIY/DNKjhXiqCKYFWI67GGKNBoIvu9u1QPKd2B7eKF2RsWNiIulTMPccHg2+ePj74wrsMMY2t3xzWPwM2n/NrsZPDaTQ1vhWaNwNjUoIrKpkW1llBpvYV8Tzgv1yfMEwEd+N7sjLQSRJrLHkDZxketwVgiKCBKChp0wDAGk6QMA3oMHhzFEs7Tqk+N7qzq2Q/0xuEu6vdnXfy2+SwjHcSCE0MSzICGyxD/r4ae6buIqX4jkdQ1g09Es5Ppw4pfEVV9CA1QWZdvGcrXSP839/4r4l6BRQdLx7FxRChQoUKDAF+BfKU1KdnMdv7UAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAADvUlEQVR4nO1YoXLjSBB9rgpcMCBg4YADAQICAQYLAgwCBxgILAgQMDgYIGCwYIDBQgGDfMAAAYMFAQKGBgEBCwQCAgINAg4EuKoPXLVKUiTNyHLiS1avyhXLkT3Tr7tfvxEwYMCAAQMGDBgwYMCAAQMGDBgw4P2gtabdbkfH3se7YrfbUZZlpLUmAMiyjLIs+zNI0FqXgtVa02azyYn4lBXRlHG+rpLyqSqiLuMceBVMCt//YSvClnEbPnRFuGbc933yfb81KCbtf68RXTKulKI4jon/2kgA6ivCtZreHK4ZF0KUAg/DkKSUJC8950DqiD5KRXTtcSEE8SsMw5wA3/cpDMPOulAl+V01oouqA8BMeWSMISEESSlzIhbTMd39uGqtgDqijTFkjClVwJtrRF9VN8aQlJJmyssrgANv0oAq0UopklKSUoqEEHS1+Jua7j1oRXTNeB2klMQktKl/HdFxHJMQIg9cKUXGmBIBjH19xKhuIw8PD0iSBPP5fMQ/GAQBAOD+/v7Vd/pCa03T6RRnZ2cjvhZC5P9P0xTr9RoXFxcIggBRFOHx8bF2H9wiQRCMgP+IAJD/dhWlD+s2AgBJkiAMQ6RpislkgjRNsVqtehHRRHSSJHi6MzDrJ2itcXp6iu12CwC4wBYv20f8+OcFv36a0vpKKWKS1us1VPQdf+2+YjKZYDwej7IsoyRJEEURTk5ORqWN2HpcXnokpcx7mMeZEGKvXnNpLSklxXFMM+W96v3r6+v83qY24XusGlHskaYeL44tHmPF8eYSdFcxZd3gnufSLiKOY+JXUSiNMSTOv5bub9KIUunN5/PaspaXHiXjc6x+3yFOnwAAQgg8Pz9juVxibTSWq9+NLdHUWk3ruWCmPGprk+XTCW5ubqwaB5c5ysp9/u0yr4CZ8vIM1W3QJeMuZ4I2tLVJ3aSoqwDc3t52mqO86eJ4a1uIr4uBV43RviS4tIlz6/U9j7ssxIGzJ+D3Xc4EXapmLx+zj7NyWagomhxEsZpswbieJPs61xw2r91loc1mkwdfLH2ugKLHr6LLSfIQzvUVmjSi60Ic9N39Q05Cm8cvfqftJHmwjNvQVyM4aFZum8dvOknOp15+knyTjNvAi+77XL9qXooEVLWg7iR56IzvbUTYW1u9dgE281L1+FJKWiwWiKIIOPuC8FuAQxuq3ujqI1w9PuPderwvXDXCxbwwjtLjfdH3Cc2HybgN+zyz+5AZt8GmEZ8m4zY0acSny7gNTRpxrMCPNj/ZNwDHneP/AmaTmyixMfQSAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFcUlEQVR4nO1YLZPiShQ9edWiBQIRERERgYhARCAQEQjEExGIiBErkPMDEAgEImLEipUjVox4YkXEihURCAQCMQKBiIhARCAQEYiIrrpPsJ3lK5MwsLNv5uVUUaQr6Y97z+l7bzdQoUKFChUqVKhQoUKFChUqVKhQ4e3geR4JIehPr+NNIYSgMAzJ8zwCgDAMKQzD/4cTPM87MNbzPJrP55kjPqQi8hiX7WOnfChFnGNcGn4M6RT5/btVRBHjANBvMhp3+VnD3rUiyjDe/6RTT2fU1UA2QB31vCOkk353jFCuHUAIQVEUwfd9jEYjRTpAto+/7zkqWekWq7WA3aph9rzFas0AANNNqgA7JyXTNbZCIF0DTOXZOzm+aZpXrx0A/rqms+d5B8Z7nke+78M0TeWc8QCwWiUAkBlvaAx1LgAAUg1JksIyGXSVod+vw9AEOirP1GKapnIrRVzsxZcYd10XjUYDjLHccR2zTirbGT6ZpGAqR8cCJpMUQgcGX6Z4GvXQ0lPoOs+ctAgFNrEAUzkeZ4tMAdcq4iIFSMYlw5Jx3/fBkh/4/rWPKIqQF+kBQG3V8LQUSpgwMJXD0ASa9wGEDvCUw3U7ylbdKWL2vEW0FJgtd4pgKkfKUyyX6ywmJElyU0WcoCiq921Ojgm6a9XIMUG9e/sgv7+0oH6TUc9Rqd9k1FF5lhl6jkoAcNeqUUfl1G8y8v0pdVRONnAw3rVZ40XZeJ5Hrutm8pJGj0Yj5b6jUbxew7R0qLqe9fkRp/i76WYBMAxDyguIZdBvMkqMOuqrBKs1Q8cCxpP0ZCw5j1yvbA+Hwxe35MmLMlHdMUG1Wg31Wg1GywAAbOIYAPAcJ5jOtop0HrDbn7JdFCNei4dBmwBA1B3sk3ZRjCiTxy3LyuT+MGhn8n8YtOlh0KZm1ziR6P4Yx0XRtZBb0DFB/SYj+846qBuK6gjl0jwuJ01ThlA00DU32MQbJM0Wvj/OlN69Te3aLogNP8+z/rdWRN4WnG8Zvj/OTubNU4QihCC5gP09/tLkD4M2hfMFVF1FVDfQSFb4/C3OipjNcwyVMWyEgKpyPM3SgwXtz/GaGCG3IOcCZtsCcLoFj/vkxYhSjF8C+84iR+dZexPHCBcxdE3D43R9tSIaZpdsNsVGCNhOG2HwjJRzWJ0mAOCfxRrLySq3/7Hi/5J51HXdm9zQsDjCJo4zRlRdh6pyJNstHPNXChuNRoppmorv+/A8j2S7qI6IwomC+q50/jZJoTY1cC4w3zIMP8+VRkPP63pQx0h7lSAIyDCMm1VWza5BnywNALCYLrHdbmE77ew55hYWi8XJ2Jco4mHQptXzCjWNnWzBY5SOca85jwsxJSGmB+9lIdS7t6lvcxrc6WRZFjkm6L6jFarrllnjkvuI3E7nKiuxtkmk491PPh85AgAGdzr17m0a3OnUtznJXH3J4uXcZSpLoNx9RCm8lEeXXw0KhhoJMS3liDLIuyS5RBGvYrwIQRCcVcQ6qFMw1Ggd1H85Qv6v7dKTymNuT2e7389zQJ5x5xRxE8aLsB8j1kGd9hUhnSHSMYkFSCxQOLk0XDI/7u6ei+LEPqu3YJyV/XAvK5DrzmGaphIMNYoiFzDmsDptIJkA5vjnZ+PzAwFo6yARp1B1BkP7tQS7VcOXmOf2A4DhcIgoin6uY5c1rj1wvQr7MSIYalQmawDA1yefJPvj7u54awOZAhyzntv/t+zxa5EXI17qI8/1vj/N7gI6dm13v/BJP8w4b7XHr8UldcS4y6mt705v8kLk3Jj/ScaLcO0NzbthvAhlz+P7eJeMF6EoRnwYxouQFyM+HONFyIsRf8rwtyscjiCLF6D4Bup34l9ZfxzoY+TLJwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAB/klEQVR4nO2XLW7DQBCFXySDHiVHCOgBCn2EHsMgcIEPUBhQUBhgEGBQEGAQUFiwwNCgMCBwpCloNkocW+vYu/7rfCSK5Dg7742fZwBBEARBEARBEARBEAShP5RSTEQ89Dl6hYhYa81KKQYArTVrrf+HCEqpm2KVUnw4HC5CzLIj6hw338uizKojqhw3hZcxopjrJ9sRNsdtTLojHnHchhFt9BnR1XEbo+4Il47bGE1G+HbcxqAd0cZxIuJTnjg/YG8Z0cXx9D3iU55wlQgZwPTz3PmwXjvCxTN+EeEDd7+jbzciAA4zos9nnMJ7UbrSqSP6TPUmEO2ZaN8qQxpnxNCpXke2i1sXf421I64V8en4I4W4Kv6auozw7vj35xuf8qQ2CKsw2eAjI8odHxyPR6xWq8VZGY6iCEEQLFz82SYOuSgKAEBRFHh5RaP7BsnfdebTFUopzvMcy+XyUi/SNPU6WW3ikDdxOGCQNsw4n7P2V/x0cw8fk2EVrd5qvmdtCnGeDvdeFhlnbzWfs7ZJedcieJljfGVEtoudvOZ6m2NcZ4TtFddkRxhkcu1rHzeLUoZboUYzufaxj5e7ZGy7CgB/GWEYjeM2fMwRo3TcRteMmIzjNtpkxCQdt2HLiNk4bqMuI2bnuI26jBiqcKf79iNorXm73QIA1uv1YOf4BaV/f1sJsiUgAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 52,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAC40lEQVR4nO2Yr5biMBTGP85BjFhRMQIxArECOQ+AQMwDIJArETzAigoEIg+AQFYiVvAAEYhKJAIRUTGiogKBROScu4JNSUtLCrTlz+ZnSs8pvcn9br6bFLBYLBaLxWKxWCwWi8VisdQHY4yklHTvcdSKlJKEEMQYIwAQQpAQ4v9IAmMsMVnGGK1WqzgRL1kReYqr+3RSXqoishRXE0+jkqKef9qKMClu4qkr4hLFTaikPbxH3Kq4iYeuiDIVN/EwHlG14olY+wnJqJt4710roi7FZdQlKX2S+0niqj9Tm0fcQ/F40lH3eF0jM16lFVHnGt94bdp47aTyaxx+/7ue+39pHnGL4ltvTltvflWCIu5QxB3ibisx6bgKciogHfemirhF8a03J7n0SS79q5LA3RZtvDZF3EmUvUn5vLiFPaKMNd4fdWk2G8YDuTYJwCERRSZeNK6pIhpSSmo2mw31MACMx+PGpQOXS5923yH+7H2EYYDfP4cAgPfhr4vfVUVcIQQtFgsMBgN0Op2Gui/N1VXmlQpyeWxbUvonbawssuK6bi83VrriUXYf1Se+9eaH9aybmSERAZtSwKYXjyEdN+uZrC4BznklfbQ/6tLGax9cXbU2QyICNiXl6NckIYvCHlfFXpu7rbi1Rdw53d1p21x98rPZMDazW1prka52YlCMMVJGARwSASC+v4SIO7QNHbx/7LD23/DZ22Ptv+FrMgLEBADQ/ERDqc2dDcIwwPBHH07rHQDgtD8AALvvsJChSikpCAIsFguMx+OGGr+6Lzz4Mvfaeo+PuHNcBlqrU2WvK6+3t9lsaIxbyc61TI+Il0JqZ6evd1XyW29OrtuLl4Nucjq1nVXqPo+n22mWD9R5VskNWsV5XJ9sWvk6T6dnucc3u7sobqKqfYTiYRQ3UYVHPKTiJm71iKdR3MQ1HvGUipswecTLKG4izyNeTnETeR5xr4lX+rXmHPEXGVz3Baos/gJ/pOGHhKh2iQAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 15,
            available: true,
            name: "General Store",
            colour: 168,
            fundCostMultiplier: 15,
            probabilityMapGen: 24,
            probabilityInGame: 12,
            prospectChance: 75,
            layout: [[[0]]],
            primary: [],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [
                {
                    cargoLabel: "FOOD",
                },
            ],
            placement: "in-town",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 48,
                        left: -31,
                        top: -18,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAG6ElEQVR4nO2aoZfiSBfFf7MHgYgoUQIRERGBWIGIGNGiRcSIFogWK1asyB+wYsSKT7ZY0WLFSsSIFiNaIEaMaIFoMWJEixaIiIgIRESJCETO4RPhhUpIgIZmZ0TfcziEIgl177vv1UsCvOENPz1ubm5WNzc3q3Oc+5dznPS1cX9/f7Zz98525hdgNBqtlFKd3z89PQFweXlZucAYQxiG3N7evjvlt3+oAKPRaAUlGWMMu0SQ/QCUUnieh1KKjx8/rk4R4YcIYBMHtojbn2UfGVdK4ft+7btTRPhPBWgSj6II2OS4uMAmbSMIgq0xOSaKotVkMnmxCCflz6FoEhcopbi+vt4qcrYD7IjbY0mStIr1UhHOugqMRqPVaDRaSY4LhGCSJFvHyHdKKcIw3CJvn6tN0CiKXrRcnkWALuJQJ2iP2a8gCPB9v3Zs17Z9LjsdDp3rqwqwj/iuKi/EgyDojPI+4rKdZRnj8fggEV5FgJcQb3OARBzqZATNc3qet7WvMYY4jsmyDK01WuuDnHBSEewqbrC9tDXHmstZs6C1FTh7zN7OsgwArXVtfxmfTqedPI8S4FB7taGtqAmElB1Ve7y53UY8juPW1OgS4WgHjN3eKi+KFx/nXUWdhHa5YBdxsb2Mt4kIMJvNtvgeXQPyosDp9aqXwB5reyVfJp0TbHaGxphavmdZVpEVxHFcidAUSz5LcW3D0Q6IhnqVmKwiLbBd4SlNlhvyosBT62jJ57UTbHISRftdyEF3jncJKqSf7m55WLRzPTkFMveaPDd45qFVCBnTjiIxWV2UDhFsck3iXTneRvz+7hYfGGqXf5/TVq5HXwtoR5GbDOWUE0gIueSJLDc14pUjclMTg9yQfJnURLDJG2Oqgmm7wi6UzZrRJP53eLUR8jlt5XHyxZC9tCVpGWE7NdqEsN1hiyD53LQ6bEQ5hLhyrxkuv1Xnst3UxMkC2DYUewNk7jWJlRpNIZxeb8sJ0v52VfVDiaeuB/G3g+Z/UifoKY2KP5GkCWZNXK9TQjkKx1EkKqyNixh5UdScYq8OQn5fVb+/u+Xp7rYkrl0811t/P6rm2Fw1mjjaAZlFWOczgKrIyaQFmnJbVoPMqgdd6WDnu2BfxINgxCL+zMDts5Df3pMCJ/UBrhqQ5aYSQ8iDZdt19behHVUjLo4AKifYV4OHRnzg9gFYpEuAqm/YhaMF8JRmnqWdQviLaZUaIoy8i1PyotgSwhahSfzv8IoovNpLPAx9/vfwfaf1TxZAkKiQr8VwS4h+r0+QzwjyWeWANqdk7jXPzmVNCE9psq+fMMbUIg5lVPcR/3OaM/7neW/04YQaIKTcgYfJDQkhXvFEXhQMtUtqyizUjqoISyGs1Qqrj/jQmwOQmgW/XX6A5QLCKz7nXlXVtdb01zluE/ei74z/eQae+euyz0D1SNLtpurVBLDhuV6Zr4unKjWALSGy3NQEgXqxnKcpQ+1WQkkFl+ImY2YP8bvoGoCL0Wjv3I8SYDwer/T8kcRkmHyzRrPY2DxRIUkBXpHi9HrVeBN2HyGCaUfVlq9mVQ/2EP+0vOKP/hdgd/SPEmA8Hq+MMUgM87z9oUYtNdbNkPEvQCnyb1M8pUsnLKZ8zy83x6lBKYJVwMTqgj+neSvxz/0/AOj3gfUhr9oJyi0mY0y1ln/ozXnMS/K5VPd1fZDU8NDEg18rkZz3Y9BloXPVgGDdR8xN1poC6vFflLspgn/9vh3xvtL0lcIZDMjm82rOr9oIyT33KIpWsQzGj3hMcdWApd0HNFLDXzyTzDOc9+MyKl8/kRdFa7Gsmqz1xCWKEsmHj78B9Yjr4ZB8saCJszRCk8nk3Ww2e+f7Psa/wPgXpGZRy3NJjSZmsxn39/dVlKUXkOVzWSyr76DezMjNTijJ95VCD4cAKHdQe7ePnadp5w3Sk1aBLkd0pYYNWUblWsEzD6x3riZf/U7mcrH8xoVl5a6Im3QzNk9TUj8Af0BXErzKMrgrNbSjQHXnoF0spQ+A+iWx1/c6r+6UW895G6kfVOfpemT2qg9Hu4QAarYGavcNqj4im5OaBa4qbdzWBwiUOyBfLKqIy/sgnTB0FUv9Ac3+Z4VneTq8SwiBkLeL5Xye1pundQGz+wCBbXUoiZerjNqaxy6c9fF4mxAjyn98DLVbXkxZfYT0++IAKEWIG32ADYm41pvnDS95QvyfPB4XRFG0ktteau0IVw147L9HOYrefFKJMHTdygEP/Qvc+DPDdS8wT1Oetb91L/Gn/X9AE11CCKqLoTVkRZCqbhfIY0jb+CECCHYJIdGGbeKnkrbxQwUQSJMSx3ElRPhrcFbigp9CAEGzW5Nl8BzE3/CGN7wB4P/jJiHBUUCiqgAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "tertiary",
        },
        {
            id: 16,
            available: true,
            name: "Glass Works",
            colour: 151,
            fundCostMultiplier: 95,
            probabilityMapGen: 5,
            probabilityInGame: 1,
            prospectChance: 0,
            layout: [
                [
                    [-1, 0, -1, 0],
                    [2, 1, 2, 1],
                    [-1, 0, -1, 0],
                    [2, 1, 2, 1],
                ],
                [
                    [-1, 0, -1, 0],
                    [2, 1, 2, 1],
                    [-1, -1, 0, -1],
                    [-1, 2, 1, -1],
                ],
                [
                    [-1, 0, -1, -1],
                    [2, 1, -1, 0],
                    [-1, 0, 2, 1],
                    [2, 1, -1, -1],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "SAND",
                    },
                    {
                        cargoLabel: "SASH",
                    },
                ],
                production: [
                    {
                        cargoLabel: "GLAS",
                        multiplier: [8, 8],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -59,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABaCAYAAAAIJFAjAAAFFUlEQVR4nO2bLXPrOBSG33QMDAQEDAwKAgwuKDAIKCgILFh4wQUXFPRn7E8o3B9QuLBwQUBAwYIAg4CCAgMDAwEBA4POdIFzFEmR89F8WJ3VM9Oxk/pD7+tzjo58e4FAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCJyH6XT6OfQYoiFuSsLLshzi9gYXNcAn4cRFDPBROHFWA/qEc87PeduDOIsB+wj3xYSTGqALJ4Gcc0gpjc+EDyacxAD7ieuipZQYj8fG8ZxzZFl2ilsfzVEG9IU6idd/6DsSLqU85tYn40sGuITb4WyH/GQyAbAW7kP4Awca0JfjOnaO20+cfv+tIsAlHOgvaLZwV0Gk/aHZaoAr1HUBNn05rhdE/TsfcBqwK8ddYb+ruLnECyEOHO7pMQw4pLjR/q5QdxkihECSJEiS5AQSjiMCjhdO0L6+dZmQJIkyYWiix8dHtSbf1pzYhriqOoklcbp4CncS7wujZPLnQS8lHqatEe6HFDOX8JeXl9Eh9z81USsPexrP8wQPU/d0poe1/cQp54UQhoFDMwKAaRLvHQUL/oCYJyoSbGwTbEMIOnc+nw8aAVe0k8Sx2tKP/pmYyGe0UuB5HqunSOLswkZPXBcvpVTifVgQjQDg5zX/FG2LJI5hb21E2wLYHgmuXNePIeGz2QxlWQ4aAcoAlnZim7rd60TRtk4TSLwrPXThFD1FUfiRAmUp8drcgKUxyAwASDkztkQSxxvp0Cc+yzJkWYbZbIbFYuFNAQRWBlBYM8ZR4M4wopaNcYJuhG1ClmUbod4nvG89cWmMGoCb35CNVL9sGon76E2ZQOJtU+x0ILb1CCT+6elp2D4AWEcA5xyykeCs2zLGUdcNUs7QxB9o8KFqRMqZMoIiYYEHPM/19ja9rJovoBZD99McwCtKXBtGkFDRtqiSO9ylSwBAXa+jopaNYcJ3Qhmw+PcNAPDrFgAqZUT9vg53qhFNIzeMANaRcAjzLw/9NETAugkSbbthxALdUxZ1a6QGGXHPuxqhR4KN3VPovcbQGO8DaJApZ8oIPdf7agRgFkY6R80Y0ppG6bMEgGFNUH2APv8bg19xP81xG70C0N74sm5r9wr6+fa+6/ghUbOAKDeLnD7QvhoBwEgBG5bGavawI8N1/KUx+gA5/gNAN//fsc4IGjhBg57c/gAAVG+VcUHdjJQzLGvRGbu6Hmsjw4S/lpVHfYCjyOVYAFgLo4FTRBC6aDuFjNmDLbsOs95MsyG4AtbFz85tpvUBLI3RxB8AzFy2w9kV4vr1qNX2QTygFcG+IkciaLHUxB/GYqmvsOlGuIz1If8BIMrz/PMdALYUOeoD7EaowYeKEFflr2WztcP0gUitx/O8ey1mGVHpfYCrRjRdjdBzX9+nIvnrR3c9vcP0wQTVCPUZAWidoKMRwiqS9ZB29RHVW4VaNoaxPtA7BeUrIzJRAlhPe3+X1xhfj1FWJTjjuBH/OAUTdo2w8WIadLErNexQ1oXqNUB1l7VpxDbTLsnOfx7fp0YA5pqBSDnDshS9y2gf2PsPJHbVCP2J2n2Aaxk98BpI8eX8s2sEYT/ZZS16X7UBHteAXdgRQUa4Ghzn7OFJBFztPmQ7RVGMiqIYvSdjvCdj9T1Fwq4Oc2hO9oeSGzViFRF9y+hvVwT3xZUarvcJVd8FLszZC9CuYvlti+C+9BVLwI83Qhf7DxN9NeJ/S57nn5QeQ/IfoAO/0wkYDjQAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -71,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -59,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 17,
            available: true,
            name: "Iron Ore Mine",
            colour: 55,
            fundCostMultiplier: 232,
            probabilityMapGen: 10,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [8, 8, 6, 5],
                    [0, 0, 9, 1],
                    [3, 3, -1, 2],
                    [7, 4, 6, 5],
                ],
            ],
            primary: [
                {
                    cargoLabel: "IORE",
                    multiplier: 20,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -74,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAC00lEQVR4nO3WLVTjSgDF8T/vREREjIiIiIioqEBERKxAViAQiApEBSJiBeKJCkQFoqICseKJFYiKFYgIBALxBAKBqBhRgYyoQCAiKiJ6TlZk290uW+DtBye8c3+qJ0knvXcyk4KIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIyKtY3KTV4iatfua7W7/7x7ymZejemQfAdssHYDAYvDjXmyzg++APDw94TrA6nyQGeFkRb6qAHwUH8H1/7bqycICXFdH4AhafqNd2lAJ1+E3Bl5bnPScg6xcAODtnP8za2ALur0zle13Izx6fjNK1Ir5VFPWx21EIwPgsI26XhLFLsFs8ytvYApaeK2J3VK5Cw9fgD/OMy3OI2yX2ziUdPw4Pb6CAw22nAhideqwV8WVJQB3W97qrz8vgYexyec7G8PAGCoC6hDI5AuDDwRjf63I5PyQMAuyHhLvSo384fxS8fwHGGPI835jzr9cK8TNOOm7V2etVUeAwuZ0CMPy3j/WOucxusNYyvDa03TkzW7J3APbO5d17swpvjCGO441/khpZwOIT1f2VqfY6MNrJCEMXzzPcTWcEgc/HfzKiqF7rh617oA7ePoDhtVmNY4yh2+0/ea9GFmBnLn7nbwDS8zZxu6TTusV4BoAoCtl1UuL7HoOTHsPr9Rk3xqzGyrLTJ+/VyAKS43Kr1RoDEC+mpOdtTDIgCa4oJsM6fFgS7/RI349Jj46B9Rn/svYBsNZu3AOcPxvl11lnm3gxpZgMGe3N6oNRSnI0Ic8zjAmZXlysrl/O+HLjs9Y+OX4jnwCoA8RhyaRvsc42JhnAwQl25pIcTQCIooiiKNjf33/xjH+v0a/BycitAOKwBCAdOVzPw9WjnmWn5HlOUWx+zz+n0QUsLYtIjsutKIqqbze5/zLb/xtRFFVPvdtFRERERJ73GSGpDkCQbd1JAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAC6UlEQVR4nO3YIX/aQBgG8Gf7TSAQEYiKiMgIBGICUYmcQExETOxjTEbuY1QiJhCTiImKigkE4uQJRAUioqKOCfre781xx0KWkInnb0opSd/nvcvdtQARERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER/f/eDV2A9rv8ejTWIs8yAMBmZ/Dtx1OvNQ7agE95cpTXxXyGSZLgUFWuAdrH8qGXWm/aAB1YK+YzAHDBD1XlmjFJEmx2BotpDmMtvjz86rTmmzQgFLwsljhUVS1sTJ5lMNa6110+Gr02IBT8fppjMc0BAPK8H6oK2/0zFtPcjTZwWgMAIB2Pak0AgNXTFgDw01T/lKGXBvjB798CAXDhANRG1ViLSZJgkiSuMfLz/ctr7Vq9UJarNcpi2XqN6LwBsfDpeASg/pxv988AgFl6597T9G4gs2OW3kU/V67WV8+IXhugw8soSiOA08hKMPmZDi1083Qz5H2596O6pmkj3l+Zr5VQ+DzLkI5HMNYiHY9c+M3O1N6T9/U99DoRCg+cBiK262g3XwOA80bIaO5fXmuN0COtPye7hh++zYLY6AJ/Wkuxl7ai2A4g5Fn2p7xuROyrv0A+7kzr3aBxAP0869HIs+zi4hNaEzQ/kDTEWOvWCB3WbwhwPv2vacZfi5bCpRA/vF94bDsKNUIvgP5iqMPrbdA/EIm2TWg0A8piCeB839av/a+hI2vsROjv+/5jEVv1ReczIFawnsJ6lPziFtM8OhO+f54f/YL97VLfKxYaOA8OXL8QXr0I6oIBnBUrDShX64sFyT1DZwV971DwdDxyR2HR+SIYEprCxXwWPLxIEy41QK7VZ3z5Xo8+EN/vB/lboMkBQwsVKQ3wp7k+78dCx+7Zxoc2F8kvb9KIWPjQZ+VkqKd91yPuG+Q/Qnr0Y/oOLm7egEsHo9BUB/oLDww4A5p8rs/gYvD/CvvNuEVoIiJ68wdg+Qn1kbuX0wAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEO0lEQVR4nO2YLX8aSxjFT/qrQCBWIBArVq5AIK6IqEAgKiIQFZF8gIrIKyPvx7gCUVFxRUUEMqLiCgRi5YoVCMSIFbitCGf6zBAgvKWI8zeE3WWY88x5XggghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ4vq5+dMbsEzGgybPMgDAX4//vsveriIAk/Gg6SQJls6BAQCA6bzA399/XnSPHy65+FuYjAcNAHSSBHmWYekcgBfxw16Of77cNpf8/j/mgKeHUbN0Djz5mDzLUJQl8izzwbhEWnw810KH5i/tvnQOVb3CsJdjOi9+P7AWX5Ql0nYrvHdGTk6ByXjQPD2MApv+/zjeaVs+X5QlOkmCtN3C0jkMeznSdgtpu4WqXmE6L5Bnma8L+9Y9hpMCsCt/9222qleo6hVsGhRlGTxDVyydQz/tnrLVrRyVU2/N328/Z8H1x/uRFxnbPm23fL7zPddiDeC953mBH4U7Sz04ygG2XVX1CnmW+ROt6pUvXve3fQDAp14eiM+zDGm75fPbirfvq3oFAL4GDHu5X+8uT5q7PDk5JQ6OIk+fQpjHnSQJTheA3/DSuSBoNhAUXdWrjUDYv+2cUJSld9Djt/8A4GhHHNUFKLBj0iBOBVqWuUsx/bQbpE5c/W1AYGpCXCeYIve3/fV+igY4PBAHpcBkPGjsxmfVArNq4QUyBWhvPtNJEi9s6Rxm1cKnCsVQkIWOobu4Pu/Zovlp7bZD0+LNAWDFPyV/8yzzbY+CKYz36Bjet0EEgH7a9d3jHOwNwNPDqOGQY6NuRdqc5claa/fTrv9cJ0mCwsmATueFF8lnLGyFFB4H4PnIQWlnvnBgoYV5Orag2bZF+8evsV3tdVKYyY+BiAundRXXicWfrQY8PYwa5jjtfq78ZXdg8CieouJfhjbIDOw5xANbHDAZD5qqXgWW46QXW4/tKLam3Xw/7WJWLYJXnjI/Q9Hbugq/i5wqnAQO4HDBQsVNWmueM3+XzmE6L3wnAV7cwPd2uLInTvE/Cndz6kT4wQoHgK+fB0EOclNWFIscg8MU4PO26PE5po6t/vweXrPBi0/bCqf4U4STj1a4FfFywknwc9XC1hbnb54lwTXbCRgI6wZ+rjLidlX0cwknwSQ4qxZe6HB9OhRvx0/rAOuWuBbY9QAEE5/tLDYFLnHKu7i5y5Pm6+dBsAmKBLDRhliFbZ+ncLrFj7KG167FvLd4YB0A4GWUtJuM+7S1PDsEgKCa2xOOezV5y8DyXuKBdRu087MNhM1xe9rx/+po9/iU94l9T6Hb2AgA8PuHBWEe22nOpgZdsC2XY65BONnYSOwGy2ujMIlH4tcCcE3CycYobIeL52gEBcLZwE5sDM6+Qndt7DyR19ywq5rbwhc74RpPHwB+AeysrbM3W/xRAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAGnklEQVR4nO2coXujSBiH394TgUCMGIFAICIqIiIiVlRERFSsWFFx4sSKipMn9k9YWbliRUXlioqKihMVlSsiIlZEVCAiECNGIBB5np4gQ4GSlgYI2d68KoUEvu83v/lmJkMKFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYnn/HPV58/F4/CiEAEAIwc3Nzd7j6U2A8Xj8qLUuHJvNZlxeXu41psE+b5YnDEPG4zHGAVJKHh4e9h5HbwJAKoIQIhOhD/7o7c4HQq8OqEuXxfLgHWCKZRiGhGHIYrHg/Pz8sa3rH7wDui6WBy8AdFssD74LdI0VoO8A+sYK0HcAfdObANPp9Nmx2Wy29zh6Gwa11sxmM4IgyI6FYbj3OHqdByilUEohpextUdR7DegzeTgAAfrm4AXoulj2WgOklK++p+ti2XsRrCNCl8Xy4LuAoati+dsI0BVWgL4DAF61dZ06sSsHIUB5g6SMUqqzex+EAH3SmwBVtv9frQW01kgpCYIgS9yuBl9xwLv8VvgtE5zXiuUu9C5A3xy8AF0Xy4MXoOti+Vtsjb371WCdhN71arCL6l6XgxCgT6wAfQfQN7+VAO9qKrzLBOddTYXtahC7NwjYvcHe6aULmAcd67R616vBvQpgEp/P5wgh0FojhGAymWyt8FprhsNhZ3uDe3k2f1vihrwQABcXF1lc0+k0e07Y1Ivye5rQqQPyiQOF5MsiANzd3QHw5cuXRygmmS+Wbc4HOhGgnDg89dsqEfLn4LkQXf6QolUBqhIHnrX4yVqBUkjX5WbTmuX3CCEyIbp8eqwVAba1eNmqI5W2pHRdrsIlQeSAf/zMFWXyQrQ9HW5USOq2uCFc3gMQrB0YfciSOVmne3/SdblJnOxz+WvkEzeOaKMQNrqAEOIR4OzsDKjuqzpn8fLxfOJX4TITxpwvC2lGievrawDCMGwsQKMukDinhYCMEGa4M1S1qBCC2+UCgCByCEbTrfcpJ64Gp5sz35uED7RQAwauIKFaiLwjquwcHE8L18rbPD8vKCfufzghjiLiFgaHxgKIYEiiNYlWLwpR5Yg8L1ndJO4IiSMEwveIo6hp6EALArieR6J1bSEMdfp4OfGJGxGufjKanLGaL5qGDrThAN9DLZdvFiLvgrqJy2D7mmFXGgugV6kVdxHCiFA38SDwUUrxa37Avxp7ixBGgLqJz+cLwlWIc9xevI0FMMXIOMFQRwg1EMAbEp/9jYoXuKt2CiA0/EZo4Ap0mNrxJSEgLZaQjhquP2TgCkQwRARDTvwEqX+mKz5XEAQ+Qogs8ej4FCU+ZNdWyyVJS7WgkQMm+gqAOZ9JtMIRcqsQhrwjXC8dzqSUtVpcLZcATKNvCHfAZZPgN7TyneBp8oOJviLRaqsjjBPyjjCv67b4NPrGp/g7nnDR8bqN0JvXAOk4AIw8idQ/UElSyxHC9xhNhqzmi9otLv48f/r87VXT0IGWRgFPuEQ6xhMu6NQRrwmhVxG/Np+Pjk9fTBx3QPDXP8WbfvwMy4vGsTdaTU2l8ygdJ028gkjHqRDiM/BU7ROtkcfHCN9jNV9ktcAUNpO4L9JnhFdawckngMI3SFrrxkvi1gSIdJwdLwuyTQjDtsQNK6148EZAKsBwOGxNhEZdwPR/w91GgxlFMTzh4uFW1gjIJe57SDM50jpt+Q3mJ/SQTqXL+4q70ooDDHdx8fzMLdWHDcYR0nGetbgUgsVmJLmO1px56XkjxtzxMxcABEHQyAWtDIPbagBQSN50E0+4SMdh5Hv4QrLwPnKzHmWtD2nyeXwhC0K19Qh9KwLk+3+ZfH3IC5V/bWaAkFr/JU7WCq11a6vCxgKoJHn1PXkR8mKpOH1tJkJb7xHHqDhmpRXJ+vX7vYWdi+DpaPA42ATz5Ean8r35blBoeTd9bSZCbPllTLJOijO/6tvsxM4O+PfX+uh2ydHtkiNXJrhye8uUh0koOmEc3XIuV5Wf1fE6S/5BBojTs+wLFCDrDl+/ft3pX+u0UgOMECee5sTThXPl/l9VD/JDXxUPMkANx/jJItskMTvGQgiCIMiOv5VOdoc/HvMIEKvUq2aorBotTDdQcZz1bx2vuYvJtsQXi8WRue6v5GnsL+83utE9t8u35dTp9vhrQkjXfZY4pC2exwhgrrlyxkBRgPXy5s3Jw56eD9gmhHDTGmwSV8Nx+vemK+QTr7penl2Shz3/Q8VtQqjhuLCFdn9/v7e4evmPkkYIY+VtLW2xWCwWi8XSJf8BB5QgyDqz6xEAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAFT0lEQVR4nO2aLXfbSBhG7+4xEBAYMEBAQMDAwCDAIKAgwCAgoCA/YEHB/pjCgoIFhQUBBQUFBQEFBQYCAQYBBgICAwYICPicLJBHlWXZltxM4p7zXtKpLdvz3HnnQ7FBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB+HP567U70OTdu3dPAEopAN6/f++9f2chwAVfLBYopbDWopRiNpsBfkW8qoB9wR0vIeJVBDSDA1vhmxKajwHM53PgeUW8qIB2cKBzxNuV0HwenlfEiwjoCg7shJ2aRwB0GPKlDHau8VERXgXsG3EXwLXfrA1QBf+0WpKsA2w86QzdbDt+R4QXAX1H3LFa3gOQrAOYXtYBm2K+lMHO2uDajlNEeBGglHoCuL29BeDx8XHnmuaIth/vqgiml/XzbZFul7i7uwNgtVr1zjXqe+EQyuB6q0NOhNvuHF0jqpTi6zIFIMkDkunV3s9pBzej680zH3v31YsAgFGoKOkW0ayIrnJOJldb79Us8+a5oB08vnxDkecUuwW3v5/9Lx2GSsaU1lJac1BEV0U0OVTqLnigNIFSqDiiyPNB/fQmIIwiSmt7i3D0mePt4LMwZ5X9ZDq7JVukg/rprwLiCLNcDhbRrIK+wXUy29ka++JNgM2qUjxFhJPQN3iSxBhjeFgMmPwbvAloM0SEE9A3+GKRsspWBJPh/fImwC1GrhIcfUSYkQIGBJ//iylSwmzYAgjw9+/F7GYUKuyqKsdDIqBaLKHaNcJ4zChUqGSMSsa8iUu0/YnWGhUqkiRGKVUHzyfXGHVZv7dZLikHrgVeBKyLqhOlNUdFOLZEbNpDg+vJhKBjKz2EFwFQBQmUBg6LcJXQrAjXHjLi7hwwFG8CmiPaR4RDxRHT2Rigd3A3VdzrhuCvAjrmeB8RNsvr7axvcDdVTsGbgHaJ9xXR9R7Hgrupcso5wJuANkNEuONs3+BuqpyCNwFDtr+2iOpcYIF+wdtTZQhndQ5wIgKlTgp+yjnAy0lwZj8BsOAfSmsIlO51DnAnwzCqbmu11r1Ofma5BOAq/4AKR/w3oK9e14Dr8jMz+8n7OeAq/8Db4iORCrHFelAfvd0L6KD6s/Y00mj7GVOWvSrCnQOyRdp7xOM4whRF9fpwWCSvd4ORCsltQaRCsFVFHBNhs5yHzevzyfXR4ABpdMMqW/F29EBmy0F99H47HKlw+1/CgxXRxB4JrjfnfrdWMCw78AICclvU7aaMQyKcjH3BHcZatFL1IsnwXdCPADf/Hd83DuZsyzgkAraDu9E21pLZ6nuDeHOdWysuRpzHImjKEh0EW6MPDRFVIdTrQ1uELoPOEU83O8ldvuY2+tX1efkDNBg7fBH0ug26ku+iXhz5NU0iFaKDgGkcEStNGt3wZT2tRx+q8F2Yc/ujKLBTAU2aO0RTVLNdL25kewO6x01RUK7LwVPAWwWY8viS7CTAtiy3p7uD0N7PKApMUZBZc1J48FAB19PR02hdhTfGPRp0XtucBlsjH1bt+i5Pd39WO/SjTqpGlvbu77ML+Pawrr+ZvZmUTwDk3QK2DkobclvUAi7yr8y16nxtV/A0TQd/2+11Dfi6rL5+v5nYJ4Afuaqfa8//rvWgufV18agTlFKk9/fn+QuRNjcTngAKU1WEOy907RauCtziBtWofy8gSRLgtBFv8yq/EjsmQofhTnBozPENf6wAxz4R7jDjgpvxRfX/zVR4juCOs/il6D4RZnyx9VOa+9+Y6/s4CwEOJyILLoDnHWlBEARBEHb4HzWuaiREV0iXAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAFOklEQVR4nO2arXLjSBSFv2wZCAg0aGAgIDDAIEDAYEGAgcGCBQMXBA5YsI8xcB5gQOCABfMACwYMCAgwMAgQGCAgINCggYFAqrzAbk9Hbv/FTlpTdT8kW7Llc+7pe1tVBkEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEH45bmK/QM+fPiwBFBKAfDp06c3/U3RDSiKYum/nk6nwNsZEd2AyWTyzABrLfB2RkQ3oCiKpVIKa+1mGTgT4PWNiG5ANwEO3wR4PSN6Y4AT7FLQ5bWWRm8McISMCC2PSxkR3YBDPeC1E9ELA4At8c6UXVwqEb03oGvEpRMR3YDJZLIMxT8kPJSIbq9wHGtELwxwx8cIDp3fZ9YhI3phgB/1kPBdVe6eC3HIiMGLfvWF2bfOrbUHe0DovDPTCb+7uwveO7oB/vp3r0OcMiKBLeFP+i8SpWH28dl10Q1whJqg/3pfQvz3xuMx8Fy4yt/RWksSMKw3BhyThG7FffEh4YnSpEqRDodk44J6Nt/6zugGOFG74rwv5oeEj9OGqn6gHb5H5Vk/DfDZt767k+IY4TofY62l2XPP6AZ01/Au4e79Xc3NRV1lQ7SZYa0lzzOMMTSArerg/aMbAOEnPz8N1tq9wrtRz9MGYwyz2ZyqrmBUYOuGNtBXohvgi+8eHyu8G3UnvB29Z6GG0ITFQw8MgO3n/WO6+q6oA5RpgZr+Qf3tO4lSG/G9HYO++LOjXtWYsmTRrOxorUWPRqhs2M8p8NKunumE2X/bUfeF32Tt6jyj/o7Bl3b12rRU66ibtTAXdSdc619gDJ4T9cW64k64i/ovNQbPiXq34i7qp4zB395SbIhEafRoRDYu0FqjUkWeZ5vGWJuWMi1Ipn9jyhJYRd2t8Yxy8zmHE16mBUb9jilLTFkGp0B0A95NJwCryq2FbyoHm6jX3jrXoxHvppOgYcCWYe76ENENUHm2Oe5WzgnvVtx9bpdhpiypZ3NushZtH7bu4xPdAIet6k3l/FG2K+qZToJR94V3rw8RvQk6bN1sNjDHdHV/DLod36HrQ0RPgD/OgItEfdf1vXwYcmscwhuY0Bhs10lZXX94bLZlSf1wj64+Yzr3j26Av1e/VNT961tr0NVnnrwx6RN9CRwzBk+NuilLHr9+JZ1/RFefyVVCMWgZD9XW/aMnQOUZtl6t/+5z/L6o77reRd1VPFcJlW2xqWIauH90Axy2qrFedGH/FIDnz/1+1HOVAC16qPihc/4cGh4bA2yPwv4YsB6DpiyP29u7pdGpeDFo91a8S3QDnJBEqZOmQEh4qOJVVVEBt5mmsYut+0dvgvVsftLDkK1+kM4/MjD/Aivh6rpg/hTe6d1mKQCPjWGo0q3z0Q3IxgVwfFf3hecqwWYjbp4MxeDnTu9LveB6qDfHzoRQAqIvgUNTIBR1e10wryqmKdjO9908GSpWFb8ealgs+FIvsLa9gu3tcHQDMp1QrY8PdXW8iqtBS2iNu4o/Ni2NXWCt3fsfiOgGuIeUo7p6p+KmbbnNNF/qxdEV7xLdgJDwfXP83Ip3id4EQ82tsm2wq68q/rOrO+4Hmu+mvfpanyYeevAfIaXUUi0suUrQScIPnXPztKq4ThK+rRv3bZbS2AXfFqwrvjr/EtE+0RNwyhx3nFPxLtENOGWOA1hrr+bz+cWSG70Jdjl1jp9LL3oAvN4a7z3/XGdLpdRyopOlO3amvAXRe0B3r26tvTp1lp9DL3rA/UAzN/WrrHFBEPbyP9wPWsPu6+duAAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 18,
            available: true,
            name: "Scrap Yard",
            colour: 64,
            fundCostMultiplier: 101,
            probabilityMapGen: 14,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1, 4],
                    [-1, 1, 0, 3, 2],
                    [1, 8, 7, 6, 5],
                ],
                [
                    [-1, -1, 4],
                    [6, 0, 2],
                    [-1, 7, 5],
                ],
                [
                    [-1, -1, -1, -1, 4],
                    [-1, 1, 0, 3, 2],
                    [-1, -1, -1, -1, -1],
                    [1, 8, 7, 6, 5],
                ],
            ],
            primary: [
                {
                    cargoLabel: "SCMT",
                    multiplier: 32,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAD/ElEQVR4nO2ZLXPjSBRFj6YMDAY0EBAwEDAwMBA0GBBgsGDAgICAAQEGCwYYBCwICFwQsD9gQUDAAgGDgAADAYGAAQICBgICAQICDwQEpEoDnFYpdry25I9YUzpVqVK1Yqff7fuuuhVoKIdt25lt29lHz2NXfCr7AREB5kLsejIfQWkBNEqp30KE0gIopRARROS3EKFV9YO6FZRSO5pKTdArrpTKlFIZgOM4tXVB6RawbTu/FhGj7i1QOQQdx0EplYkIQRAYjuNkdXRC5QyAuQNg3hY6FOtGZQdotAviODZEpHZ5sLUAsJwFdRJhawFExFh0AdRHhOoChA+cdlReZNEFQRAYUB8RSnFitrPTjsqKxcPbfYEWog4ClHaA2W4DkHadpXtFFwy/fq+FCKUFSLsO6fMznucZxfHFLIhCH7PTB45bhNICeJ5njL4OVt4vuqAOIlQKwWiWvDu+6AKA6d2tccwiVBKg27O4GvRWFqOFgHkWaBH0lrnqZI+Cq0Ev+7/iYfmJoAOxGIxn5+OjEMJY/yvleW2DN7vDbv8LAOljSBzH2Lad7xcAzvutzLZaXE2f9zKnVexkK7zIe1lgmiYAZqf/5kit8Z46eC+rw3Vf7EUATdEFD96En/4dMBeh9dnCcZzs4uIi+/fG/bB22JsAf3w7z0+K+nwAIJICoJTJcDhkOp0yCx/y94yTe/+gYuxcgLPzcR6AkAuR3z8Z9Dk5medBMEtyEUajEaff/yQMQyb3fnYoIbZ6IVLk7Hyc3U9ulsb12Gg0wnVdlNVFkginZ6GsLp7n82N8CYBpWQD408muprWWrQVYVXgUzfJrETFcd97nnueTPoYA/BgPODv9tlS4srrbTmtjKrfAotU1uvCTQR8RMYpPBBEhCn0AhsMhs/AB07K4GF/hTye4rovrugAkSXqQ/zmUFmBV4Rpd+PX19bvPcx2IwSzhMX3Bn07o9xyU1UUphVKKJEkJf07fhOe+2FiAdSsOrCxcvzzVxHGcXxftrsNydntJEASbTm0r1gqwWLgueNHq/938U3kHZ5omSZLSmnn0WhER5O1T9Ts3ZaUAq1a82+0B661exG6RqSdBPUk+pjdFSZIS3/1F6v1NlMJ91IIUvsBBHoNLAqyzesdsbVw4gG2RYQImyGf15t795IbZ7SURr4V3bFRbsCzw93ROWSQXYNNU37RwTZxgkAIpqCeZnxNe3dAXIWrb0LZRT0InjokTjIfHwxQPrwJsk+qbEL9g6B/bIrMswIRQKXiOsV5i4heMQ616kU+L5/JNUn0b4gQjScgdcegVXyRvgV2m+jqKjtjX39iUXIBdWL2WHMurqYaGhoaGhoaGhoaGhoaGhoPxC3rKQZujLSrKAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAEn0lEQVR4nO2aL3SyXhjHP7yHQDDcYCAQCAbDGwwLCwsLBoNh0UBYMBgWFhYXF36B8IaFBcOCwbBgMBgMC4YFg2HBYLjBQFggGAicwy8wGHM68b+Bzzke4HKB+3yfP9zLETIyMjIyMjIyMjIyMjIyMjIyMjIyDkDt+jYQQgS169vgmOP4c+gHRoYn244pxMEEmDd8Mhn/6HMMIfYuwCKPJzm2EHsTYJnhkcGX53+/baP2pCCHEGLnAiwL9aThrusqtm0ryW0kRKFQ/HHPfQqxMwGWeTwyKGn4outt21YqBR/em8DhUmNrAVaFupFXfzX8Mq8FRasV1M5yAYAsd6gUfNSLO4qNl70LsbEAaXL8N8NzhUZQtFqBU2kiDB0AR/pAKILZv0KYBurF3dIx7EKItQVYVdXTGF47ywVV0UIYOnqvjtm/QpY7ePUuwjQQphEe35fQmlX06mN8/WQyJpkqsJ0QqQVY5XFgZahf5rWgKlrIcgdZ7gDg1bu49WFsuGie4d2XcKcOXr3LyNfQe3Wc7hN69ZGCNwC+UkXqVYqNF2AzIVYKkLaqt5//rQx13VQBMPtXcYgL0wDAlVPkYIgjfZxKE6d7gzt18PO18HhFqki9Gj9zHSGWCrBtVQcoWq3AOL+gNG4gDD0euFsf4taHoac/DX9/eaE0bjDyNQD8fI3SuMGmqZJWiB8CbFvV59F79XhfexjF+66copsqWrOK17ZQP9qMik+UVA+9V2fTVFn3rRELsG1VX8S4ZSlOpcmo+BSHuix3Yo+Pik+MfA1TaPj5GgCbpgqAbqrxzHIRi+xTa9e3Qa/zvPSiy/O/DAc9xbbttHZ/w+nefO59D8+8fILzi7BPpYkBlMYNZLmD0/PRTRW3PgTAuy+FETB1mL4NqIoWPV9Dn3uWLHdo/1eOHBTAzwlVFAlRzfqRAmmrehqMsh2ImRsa2b2JfwBuTuC1LaLz66ZKREn1wuurj9Aqx+3t53/fptiTyZjK1TXzzo4FSFvV18FzXfxLG736iJi5sbEAYuai1VqQD4/Tpsq84U6lide3wn3/5xhs21YqV9dM3t/itqSTYwE2yfE0qO93zBwnHnyl8PkmyAm8voWugni14uiQgyFyMIzzOi+/vC1dj5LqURo34rbI+GibZNWkDUBNVPUtTV3MzLgH10WqHrPSPQMhwHG+9ZkWbcTrHW5OJGpGGNZuTiDaFgLQai0cwAGYWzTqKrxNUSA0fFFdS0b5cNAD4M+uPZ7kY/ig/JWhsDPj/ts5oblIB+VtirJOqui9Ol7fwutbiFcL6aBE91lnKR71Ufdj+hevH57CxwMApk7ANPQWKshEP/X9jhk2BaEhXY9KwWdEmCriM1V4tZALRrzM44VCkcn7269vsr0LkEQ6YYjKBefSpEoU4ucGwdsU5fz6Nhh3ntNM2paO6eBfhReRNlWiNrN8u3BSs8mk7aAR8BtpUmUfk7aTiIB5koVtUXGL2MWk7SQFiNh2KZ6GkxRgF0vxtJyUALteiqfhJATYx1I8LUcXYJsPrLvgqALMf6XZ5VI8LUePANjPUjwtJyHAIUL9JDn2v0MA/gcLiHkptrGAywAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAD2ElEQVR4nO2Zr3fiWBTHP/RUICqeQEQgIioQEU8gEBUViBWIihEVCP6AFRUVK0ZUrBiBqFgxckRFBaKisqICgaiIQCAQEYiIiCsQK3rOG5G+HKAUaHlQmOZjgBxIcr/3Zy6Qk5OTk5OTk5OTk5OTk7M3KKWMUsqse54DFzezbVwYbtk7Aazxvu87Od9eCaC1zoyPoggRKax7zr0RQGttoijKjHfFXgigtTYiMnXsy6SADXsRce592AMB4LXxLnLfstMC2NBXSr0qekopJ9fYWQG01iYMwylP+75vXHof4NDlyVxhjX+Z9ia972wAsuxsBNQbTeP7PmEYFqonjY14H3ZQAK21KZUDklEfEaHeaJqH+5vCbBt0xU4JMJv3x8EJT937+d7v95xcc2cEsMbXG01jvQ9py9uU93cGO+zUG02jtTZKKVNvNM2iR96b1qmTgrgzETDp+epJg6fuvdOBZ2eZ9P7k67KFx1Wtsv8RMJv3vu9nxv/x3p/Ne/seUgGsGG/hqgYAcN66cD5hLeIt433fz8J+2drLeRFUSpltCwFgU2DY7xJFUQFWm/mHg9jJ9V/VgE0I0QoOzVW9aCD1/t8X37OqP3vtVfv+VW/gpEYcAAyHAyZf7c24EuJxXObxuZYZf9u5Ixn1sUK81/suOQA4rQUAHB9XXn1hXSEuLy+z34oI/13/mxl/27nj/NsZ1z9vspzf9tR3CNButwsA5dKhgelIsCilzF9nLW5/Xa/kHWv409MTIpJtdarVavad829nlDyP7sNddmzb7W+qBrTb7YKIFGxEvCXEsojQWptwEBMOYkQErTVKKarVKpWgRiWoUfI8Sp7H5cUVlaAGbN94eGMQmhViHsuEeB6PeB6PqOhTPF/j+XrK8O7DHUkcE1Q0cZKsb8kHWbgRsqnByyZm3dQY9HvQh06ng4hw+f0YgDhOPm3uX2kUvv11PTc15nWNl1Zm11jEUUgchSRJQiWo0el0UEqhlCKOE0qlknur3sG7ngVmU2Ne1wConZ5lhc8KkYz6xEmSGW+J7v8hefyRjr+e+53fMj70MGSFKJfSDJqXGjAthIgQx6kAIkJQFJLHHwwT6IXj9AcJnGxg8bmItZ4GV+kakAoB0H3ocBSHlP+P6IvQG42RIwVlH1UUPA+68Hlt8KMs6hpqLEA64FT0Kf2hIAOBog9FHzUWylFEFFPojbZrPDjeB1gh7OfhcJB6eAI5UpRbF0RRVAiKQvRMYdten2QjC5G3usYkSilzP/j8pcdGN0LLBirbNjd5D8vYyl9jqwxUn8VWd4KzqfHl2YUU+PL8BhX7V0FP//7DAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAEAklEQVR4nO2ZIXPrOBSFv3QMBAIuMDAwECgIKDAIKCzYn1BQ2J/QHxKwcOGDCwoWLFywsCAg4IGAAIEAAwOBAgHPZIEs2Umb9rWbOERnxuPGcSKdo3PPlRtISEhISEhISEhISEhISEhISEhISBgBD49POxHZXXoek7EHvC9l1zgHwKpVWGtHn8MQV2MNdF/KrqqqHUCuFCZzVJkba/ijOLsAD49Pu/vSW122axrn2OQa3XoR7nJ10TI4mwAPj0+7qqp27T8/WLaWTa6x5YxcKQBsOUO3Kr6+FE4uwDDcrhtD4xxSVNh6hWzXLFuLrVf+KGc0zhEccgmcTIBjqW6mBdZapKgwmUO3Cikq5plg6xUmczTucqXwvwU4Rrz++w+WmYAzANh6xTyTaPlNrgFiFhjr0Bmji/BtAY4R32zWiAhmWoAz6FZFEQAa52IJSFHFLCAHLQpdjCvClwX4bAPTbNcA6Nfa27ycRcs3zmEyxzwT5pkg2zW2XgHslciY+GUBPlpxgJd//+K3qSeuX2vvAIgkl5nEa41zPgy71TdhP9D4PcKYefCpAIfEA+Fwvru9QUQA4grbcoZ+rX0GwJsyCEKEThCgRcV2OVZnOCrAsRW/vvYTvru9wVo7eX5+9m84E+0OxFUNBMN1lN47S1cy9qcXI+TDJtejOOGNAJ9ZvcwzrLWTxWIxuS9lhzOICFJUXDcmWl6KinlrASIx/VrD1vgDmA8dknsRAGi8O4w9f3uMAnxGPKz4YrGY3JbsbssurZVGtuu46Ql1betVTHzZrvuQky7ktoZlJ1BEqaEBuakAmBcCcNb2eAXwUaofI163vuZh3+4h1cPrkOpBBOiJ0fR5ENM/96uP0jEPQnuMop8QVw+PT3tfGlYciMQBhoPXmQal93r9Jtfe5gdtLIiTKxXrfdlatCjmhfiyCPc5Aw3+cKYviQFOLUIsgUOr//nj9/icvke+9ZML7S4QDuTNtNjr5+G8rK0nal28b5kJxrp4v26VL5G8n6D96bfLNN3YJxYhCjC0+q98MKysmRbkSkWih8EX7x2SKmd9Wyx1vMdkLpYE4D+TD/5mX4RTCHEFfEr8ZXvwnyPVTxr6LIDO3oMyMNavXnSEqD4ngghK9+2xu1Zkx4+j8/oGvvQFb0pB6ZgBZlr4HWAnyuE13SovRk58PA4YknoPpyB6DN8WAHo7BoRVHto4hFyuVMyBYTl8RP6cxAO+PcAbNwzRdOdSRwEC4r6/c897AoxBPODbj8MvWyZhopHEsJZDuE0Ln/S2f+AB9p4NLomTKP2eGw7rfA/DwDtwwpirDyf+XeC9thTLI5CGN6t/6mT/Cs4+2K/26rGJXxTn2NMnJCQkJCQkfBn/AQFsYy0Ccc/aAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAE+UlEQVR4nO2ZrXLjSBSFP28JNDBoICAg0CAgYICBQWDAgIEDBgzMI+RBDAIWBgQsCBiwcIEfIMDAYICBQQMDAYEGBg1U5QWtbkm2FCuJ7VTt6lSpbP3Y6nPuved2SzBgwIABAwYMGDBgwIABAwYMGDBgwIABn4Cfd/e7z7jvH59x0zp+3t3vpJQ7ACnl7tJCfJoAdeIA6/UqnLukEBcXYJ/4a7iEEBcToIu4j/ztzZfG/qUy4uwCdKV6nfjXMSye/mQS2SDE1dX1wX+dQ4izCdAVcU/ME//114x1rDDpNbEQzOdzlFKkcQQ0M8HjlEKcXIBjqZ7GEcaYkX5+JLcWmUww2RK5WbEoDCZbYrIl8/m8kRHnEuJkAvSpcWPMaDabjfw5PU4wxiCTCTqyqEIgkwnTSGKyJTqyB6XRho8I8WEBjrl6G/HbWOwWkQSrATDZkmkkiYUAYB0rAFQh0JFFG8uvhxnGmPAfp8qIdwtwLOLAAXEApdROjxOwGlWIIAJAbm0oAZlMMOm1uyYGJQUqYff89DAyxoxO1TXeLEAfVzfGjJ6fHkb7v1VK7QDUNnNpnl6HlM+tRUeWaSSZRhK5WWGypSNUKxGP2WzWEOK9XaO3AH1cvS3inviPVO7UNkNtM/Q4cQMsSS4iGY7l1jozLKOvI+v+JIdYCG5j0RiDF+K9XeOoAH1dvY24J++J6cg6YtuMRSTd+b0y8EKYbIlJq6gqKUK7/JEejmc/I/oK0SnAe1y9izxWh3QHQlQ9QX8coRqfcuPuZX47Mbw/rGN1kAke+0K0oc7rQAAp5ZtdvQ0/UrnDaqSUyGTCVa5DystkwrQwjlxJTG0z2Gi3AdN6hsROBABylx3a2E4RoBLC7+9nhA9wawZ8+34Xvh9z9X3cpOxuUtzAhEJuVlzl2jl8WdcmWwbHl5tVZXKyNLmNZlEKFJAqyEF+mQAwTSQAKuJVk+vqGh6dJfDP3098+373qqt3Ec8KV/PQTHfv6n7fu7oXoU6MvPKD4P6xiz5CBT/w7TGI3oGu0jhqgo+Pj0ef1tRvnkUKhKLe69excmlea2NQiRMLEep9URiUFEwT6crCX2c15LjN6qokOsbRhf3SaBXgLZOLBvnCDc63O0/Yk9fjpNHP/eciM46oseG6RSTRxobrVSFcicTVvc1vN10mL+/dUwRwpdEqwCkmFz6yepwQCxGI7htfuLZOKr2u2mKqwjU6sqEkAPebuPadpgh9hDDGjFoz4C2Ti5cNTW8Q1aCh8gIo07tWBtq46IWMkKLyCS+CUFV7LI8lUffmcTCuDkSvnfSOf3vzZbf+/dIphPp6h54/uAEUmswP3GrApXS9ntVmhRkrlMycUEUpRkxYHnvCgVTHSPsS7UKvqXCfycVqK1Ff74EyEmW0goFRRtobZAlViLAK9D3eI3klPC8bRh8lD29cDB2bXEAlxH5K+jquT3Y8cmubBudTvgWnIu7xruVwnyVpXQigWcve3MaJc3pTLXiAxtrg3PjQA5E+S9LVVnLz7Z6k0I5YDFJK973cJ651g5pQWaSCs8PH670NJ3kk1qdrBCEiEPmyWd+etDdOnwF1EzwTTvpQtM+S1JfGy4ZRaF+FrraWtnbquq/jLPrut882SCl3LxtzQOom5XBucUac9cVI3yVp/dglycOFXo0dW5J+Ji76crTPhOp/hbe8Kf7P4rMF+BdpQoymL/0thwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAEk0lEQVR4nO2YrXLjShCFv6QEBgQ0EBAQGBBgsEDAwDBgwcILAhbuI/hBDPYRFi64D3FhgIHBAoMAAQMBgQEGA1SlC0YzGitxYif+uVVXp0oVy5lEc053n+4RjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIEf8b3Fx7AzEec2lrawH4p7YX2dvtJR7yHh5zaYuiaAFSpSgTy0Oq2ks8++oZ8JhLC+Ajb/IJsllTJhbdqLNnwtUyoCiK9jGXdtkYnlONySekSgFOBN2ocH9OXC0DfL2bfIKpVujGpb6HZAWyWZMqxd8bc7Z9XtUDyrsMYwySFSHlJSuYJoKpVpSJpbbn9YOrCPCQqnaZCNgSAFOtmCYSUv451QAhK0pj0QlnEeHiJaC1dkRsuZP200SorQ33khXuZ2SIZWIpq9Pu+aICePJ6W5EqFSJ9X5eB/DQRgHCvG7XjE6fuChcpAa11+5hLq7cVeltR3mWAi66pViwTCd/V1rJsTOgEwRhrNyOc2g/OLoCPuo+oySfobcWyi7RuVPACIAhhqhUmn/T/R1Rol352OAVuAb7/mJ/FYOJ6N/kk1LWPqifov0fpnZ+yWbt1f1ahDEy14jnVJ8uEkAEi0p5SiMdcWmyJiCBZwX1dhpSXrGDaGIC+vrcVbEp3QfAC3ShInQgA1C47SvPx9vj9x7wVcVl0C/D8vA6//KwQs5x2lnctS2lksw4m5+vaVCt3X62QzbqfA6Sb/DYly06ggFxDDfKlAGCaCcBR7TEm7rHXA44VIiZeNf1sH6e7qVZhvRcDCCJAT4y69wO/jtRFH6WDH2hR6CwS/UDiHrcAD7MvwG4meBwiRPzwKtGgtNt81+ufUx3aWAwvTqpUqPdlY9CimGbiysKvsyXUThhs2ZfEnn28RTzmeQuwWCxujDE3QyEOKY0d8o3bnG93nnCY9e+y0Nuhj+yyMo6osWHdMhFK088CulGuRNL+2eaPG5epu2d3+xkSH/J5mH3BGHe+2CmBoRD39xOGOCQjfGTLu4xUqUB0aHxhbUwqn/RtMddhTZnYUBKA+5s0+gzor3PWW3mxH8/DE18sFmGYetUDvBB5mgBvl8bTZjBNqn7T0HsBdOkdlUFpXPRCRojqfcKLoHTfHrvvsmT3mn2bY+xL4n7feZq8IP6mAB77SiOGiLT667zfWBNtvNtwHLkysa7eld5JaZ/uYSboCGdNd0WEPfZFfJjqrxE/SACPoRCvYb0VYiECeW9gdJH2BulJxC8+uh7vEZONsY+4xyHEPY4ahb0Q/v61jPBCDKPl6zgedjxqa3cNzqf8AO9FHDiYuMeHzgK/f/18t2vEQgC7tezN7S5zqW/6Aw+wczaAl8T3ufrvXz+PPil+6jB0SNdYb4XZt7nzBltCCiLiPnf3pFE3iIT6iKsfi5OcBg/pGkGIBFS92q1vT7ozztnDXx929WNx0uPwIV3Dl8bThpvg7J3Tv0f8FBEf4izvAw7pGiLSPm248depXP1YnPWFyHtdw4+sw8nyM65+LC7ySmxf1xjiFK5+LC76Wvy90jhnqv8nsa8ERlwQ/wJTlBtcLAlLDQAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAACeUlEQVR4nO3XoVPbYBjH8S+7ioqIV7wi4hWviKioiIio4A9AVFQiJisQiImKCeQEogKBQCAmEBOICERFBLKiYgIRMYGIiIiIqJjoXSZKQkJL4bYbZLvno9JenqfP+3vfu6QghBBCCCGEEEIIIYQQQgghhBACJpNJMZlMivee43e9NP/ersI8z7m+vsb3fYIgAGA6nT5b0yavnX9jMWUhQJZl3N7eYq0FQCnV+iBemt/zPC4vL6vZG4sYj8dFlmUA5HlO2agsLj+3NYhd85fzdrI5F+Hd9gB83y/KG8tG9Wb1EGB7ou9p2/xaa2C9cD/wATg6uarm7dQbDOwKZzkjijVPG1lrqxCUUo3GbTGwK3Qn4WaeNnbcD3zs/hCA+yRp1Hx42iT83mNgV6jljMVigdYaz/OAxx3XWtPJ5gT2Z5VqW5xFluHARS1ndLI5o9EQawzHp4ut9zcC0K7BcRRR7NJV/Y0g6gsvG7eJdg1dpTmLLF3Vxw98jk8X3CcJjqM2dh+2nABrLI6jqs/Rj0EVRD3Rj+edp6Wt5DgKawzWWICNTWsEkKUJLrPqZu2uC8sTUR73T1GfrlKYlp2ALE02rsu1HATp1prGNjrdnK7qQzojS9cBaK0fTsQSAGMMyrgs0/ThB9oTgtPNq+v15hkOSADDbLGen0XcqGkEMP2W7EHCYeAUXrC/viG7AnpkaYIx+m/O/8fW83/B8Y4ar74XYUwYhlsf1Tuf3/UgAPYHPsYYxlEPNz6vvl/FITfx7l5vrf5S9NziX+0wcIqTo4Ni9vVzcRedF6PRqAAY9vhn/ySVXp1MPdFVHAK0btfFW/gfjr0QQgghhAB+AekwGdjXnb7KAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAEW0lEQVR4nO2YoXLrOBSGv7tjIFAgYGBgIFBQsCAgIDBgwYULCgr7CH2Qgn2ECxcsWLiPcEFAYECBgIGBgUCAgGe84EiKnSbd2zZ27sz6n8l0rCiV/l/n/OfIMGPGjBkzZsyYMWPGjBkzZsyYMWPGjBkz/j/4cq2F17nqAHKl+KtyV9vHL9dYNJKPWCwW3X2pu3Pzx8TkAqxz1dnMA+DKOxrv0dUOgGuIkE29YK4UeLA3BTjHrVJsMo0FtNbcY7uX3LDdbidJi0kj4L7UXeO9kPcWvGXTOsy+lmeg8Z7bxk62p8kEWOdKyGcevGWZaVAG0ypceQfKoKudiIP4whT7mkQAk9FZJ+RNqwDYZBqQlLhtLFprESJExVQY3QNMQWdalcjHE04h3ypypXD1VuaHuc65sbcGTCFAIIQyEHLdtIpcaQA2OPCwVDqZ4bJ1NPsajOmWrRu1Txg1Bda56nKloJHnfhRsWkfjRRibeUkJb8UQkSph9jWN99yXuhvLE0YT4L7Unb0p2GQao1UaTxUgEE8IkQHiD9ETbOZFKMYxxlFCa52rLhEFCf/KQn6UEkGICLOvefW7iDCmi8VFe4SLR8A6V511Uupi6PfJA1ICQb6vbOoDokHGEqm1xuxrlq2T52KBq7cX7RgvKoDJ6ACWhZaB0gjJ0gzmbVonogBGHyIiCtF4ETD2BY33LFsnLbMyvOSGVUm3KvmQEA+PT53WIuJFBFiVdKagMzoYXDhBvIVc5sTTtzdFiowkVCQf5qVSCYPIcOUdALra4fNFWvtHhegTj/i0ACcXr+whBRqERDA8s69ZFmKMseEx+1ruCDA0RoJw3ooxVjvwFlfe4ZzD54uBEOf2eEz85WWXvvuUAHHRuhWiNvMptAHJe60wrUrmZ52UPOtCSXRCeFO7A2EOZmlviiRCHNfVDrOvU/N0vJ9zxE/hQwL0w65uD2TT3/ww194UQiSebG/eINTz3un3DTFGSegY43i6UtfbFAUR54jHk1+vfsU5aa4+JMD36lA+i+z8J5JJUObgDeG72COYVhqmGBFxrH8viP1AEiqUSdVsZf5vT5wK9WPiz8/Paf8fToHvFV9OffpzXonS2leCxLQAUspEU+z7weAOEYgXraXIhPhur1/t8fb27izxTwtwDqeE6KPo3z56vUKuVMp/CITDdTnO7afIW8TjiZd5dpZ4xGit8H8Jkbq8cOoxvBMqC5Ud+gci4Orr28TfOvFjXOWlKHBIhXhRcpIKKdRj8xR9g/PEI95DPGJ0AfpRULdQZ0YeIrHo/rF6hFdlcHherX/Hef3qf/fr+XuJR0waAUXGoAIMLj29i080zNXXpwHxc67+57c/Pnw5mkSAvh+cLJmtTY7+WVd/LyZ9LX5siquSrj/28PjU/fP3N8zR7064+sX2dD0T5CDIj3ZulzjxY1xVAIC3evUxiUdcVYCHx6cB+Uu4+ntx9QiAy7r6e/FTCDBFqP+UOE6Ba+BfAROYyjz/VAQAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 55,
                        left: -31,
                        top: -24,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAEG0lEQVR4nO2ZLVDrWBiGn+wgKlYcUVGBOKKioiKiAoGoqFhRsQKBqKhYsQKBuHLFFVcirlixAoFAIBAIxBWIiIgrEBERERFHVEREHFGByExWhJNbSlJSSIF28sx0OjT9yfd+7/fm5AANDQ0NDQ0NDQ0NDQ0NDQ1FSClTKWX60eexCX6r8iatNZAJscmT+QgqCQAgpTTPOyVCJQFs28bzvFyE4XC4MyJUdgCQi6CUwrbtnRChsgBaa2vp751wwloOAJ6Mwi6IsJYAtm0DoJRCSonWeutFWNsBAEopa1dEWFsArbUlhEjN2gDA8zyr/BOfm1c5ADIhjAuklKnjONY2uuBVAhgXdPuHOI5jSSkZjSfpNo7Cqx0AcHd7aY3Gk1QpRTKf0d7vb10evGkEhBDpvXtLt3+I1ppkPtu6PKgswLDdKuyqWSCZUByNJ1ubBysZtltpUVFCiFQIkY7Gk1RKmQ6Hw3Q0nqSwHfcMlR3w1/gAx3EK7a21tkLfpds/xOTBtoZiKV8PeqWFGBdANgLwq/ufXYA3XQUW0VpbZq/APO9UHlxOVxdR5oJtyoOVVBEAfu0ffmYRjqenebMqj0AYRCuPL94jKKWs0HfzEUjmszeecj0sFm6oLQMMi1mwyGg8SSfTk9wF0/5e+nVUvLaom+XCwzDIj9UqQJkLJtMTkvmMq+sbJtMTbNtOnfk+TnJQ588/o6jjy9TuAINxwfHRn1xd3zAaH5PMZ/z7/RuLt9I3P9zaXVBWuOn88KCfr2ArC+CEqtL7FpfGR0dHBP5PhsNDAAaDAUKIJxsp7t0N5xfXaR1ClFl9ufCzs7N8QVddgPih8k2OEcELIs7Pz9FRCIDodBmNj4Fse00IQa+fjYHv+1W//hllHe92e0Bx4Ya9V/9qBXq9HiqM8III+/E10ekyGAzywqM4zp6jmG9n/6X/fPm7stDH09P0x83Fs9dNx/fbe6bw0u/YWAZora0gyE6k1+vhBZkQOgoRnS5RHGePKHsAOI5b6burznhRx5fZmACGfs8mCAJC3yX0XR4QOI77pPAgCHDvroln/sp/uLyU6usUbtjICMgOqX4QzL1Lwgi6f0wQQjxJf8gKj2fZ7C8fW+Qlqz9+fqXVy6jdAYeQkjWW6HHxOPcu0b6HEAIzFqbj5mpgUErl3aua6lcX31+9C1W7AC5YnQ6IloZ9if5dECVAG1qxx717y717+6xwHlRe/FtSfV02kgE/Z1gqwtpXCjHX0JLQkuwV3RLMFMwUKsJ6KdwWUr22fceNhqALlkqw+i0NDwpfCERLZ+547LhKsA4mp9SV6uuy8asAwG2gLRVhibmGGIhBRVhAYeGGTRZueBcBDCrJHKES8llfPF6Q6hvfYn9XAcqoM9XX5VMI8B5W/5Qsj8BH8D8swKlIL7iWZgAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 19,
            available: true,
            name: "Lime Kiln",
            colour: 119,
            fundCostMultiplier: 45,
            probabilityMapGen: 5,
            probabilityInGame: 1,
            prospectChance: 0,
            layout: [
                [
                    [1, 3],
                    [0, 4],
                    [-1, 2],
                ],
                [
                    [1, 3, -1],
                    [0, 4, 2],
                ],
                [
                    [1, 3],
                    [0, 4],
                    [-1, 2],
                    [-1, -1],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "LIME",
                    },
                ],
                production: [
                    {
                        cargoLabel: "QLME",
                        multiplier: [6],
                    },
                    {
                        cargoLabel: "FMSP",
                        multiplier: [2],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 110,
                        left: -31,
                        top: -70,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 110,
                        left: -31,
                        top: -70,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -31,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEl0lEQVR4nO1Zq3brOBTdd1ZBQYCAQEGAgMGAAQICAwoCDAsC/AkG8wGBBfMB/oAL8gEXCBRcMEAg4EIDwQEGAgUFBgIFBV3LA5KjynnXeRSMNnHsJEdn7/OSbSAhISEhISEhISEhISEhISEhISEhISEhISHh/4FvX+0AoSzLrm1bWGvhnLuaX18uQExcSgnnHLz3VxPh5hqLbAMRN8Ygz3MwxmCtRZ7naNsWALpriPDbuQ1OxzcdY6zb9X1Zlt10Ou2MMeCcgzEGYwyUUpBSgq5LKSGE2GnnXDi7AGN2h+8P9xvXdxEvimKD+DVFOLsAb+9vsE0Tzg9FfD6fI8/zQPzamXB2AdpXD6BPPMuyvRGvqiqIMJ/Pt4qwXlZk/1Rxzi4AHzEAQBxxrfVBglVV9bICAKSU0FpjsVigLEsAfWEBgDF2UoacrctSV0f9E3zEUN+O4b0PXd1ai6Io0DQNrLUoyxJ1Xfc6f/x5sVgAACaTCQCAc977TV3XG/aHTI2TBZBSdkKIvY7tFeH731i8jlAUxWDip4hwkgBSys45h6IogmOz2QzGmK1RBhD6AInwMHrHvZT46+cvAEBZlvDeA8BW4ocy57MiDBaAyAshQCKQA8eIkOf58nj7Cs443u8f9hKPCe6z/1kRBjXBmDwACCGgtQ5NbL2rx/N99X9oreG9D1PDew/aGV5iauzCoAxgjHVCCDDGwJiC9zXt33uZsC06GzX+7y9wxvHj5a0X8WMaZnxdSgkAwX5Zlqiq6iC/QQJIKbsleQbO/0Rta4ixgHNmQ4RDXf1SU0MphcfHx4P8BpUAYwxZlgEAhBiDjViY+VQOlIrxHC+KAs45AB/7BMf/gHkbbU1jrTWyLNub6mR/MpmsyGdwzzdgjB3FZfDdIGMMbduiru2K+Bhty1aiLEUA+l29rms456CUCjVODc0YEzY71CTzPIfWGkVRAEBv27xuv20Z3LODkhzee3DOLydArC7nHLWtw3mWZWiaJjjGGIP3HsYsy4PEoTKpqgqz2SwQ3CUCTZB14rQH4Zyvzsd0O30UBm+FKapxCcTixEeK/DmmBpWS9x5P9i6sK8R4tZYG0Bwtwsn3AlpXoQQI1CCBZYYQ+eXv8tArqqraei+wr8bJ7j/ud9xGmUjElVJhzYsJ4JwLCiul4JyB1lXvNxSZtm3xMTKXmeJfOYTINxpmHP1DzW10dxfskx9UBgDQRLfk+zCoB1hrvwEIGw0hBDjnaJomOECgPpBl2UqMMZqmWTnLej1hSHOj9WLizjny8TICAIgX6GIH6DNFhq4PmRoANprbem0PJU44+aEoLSil7ICPlKQabJpm0NSgIxFf1jjg/Yctsj+EOOFsT4XXMyJ2bDqddvHUoBJo2w9xYuJ0DiAQX/YaFyL++vKCN+/xZJ5OuqM9+2NxEsJau/V7ratVAxyDsnl9asTHPM9hrd1I9Wc7P8vDnKu8F4hHklIKdW3gnAn7AqA/NeJjXEqnpPouXEWAz04N4PLECVd7M/TZqXFp4oQvezdIU0MIAe89lFJBiGsQJ3z5y9FYiGsST0hISEhISMB/KMGb4ZWQIKEAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 92,
                        left: -31,
                        top: -60,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -31,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADjUlEQVR4nO2ZoXejSBzHP9xDRESMQCAiRkRERCBOVKxAIE6sqFhxYsWJyhUVEStWVN4fceLESkRFxQoEIiJiBQIREYGIQCBGRETkPU7QSWmTy2U3EHj35mOapqQz8+H7+zEBMBgMBoPBYDAYDAaDwWAwNIOUspRSll3P47/4pa1/rJQCKhFtjdEErQnQCCF6LaE1AUIIlFIopXotwW57AF0KQoi2h+oX+owLIUohRAngeV7vUtBaCUgp96+VUlZfS6D1Juh5HkKIUilFkiSW53lln5LQugCNToHuCX3hKgKUUpZOQZZlllKqN/3gagmAw17QBwlXLYG3KYDuJVw1AfA6BUmSWNCthKuXQD0FUspSS+iKqycAXqcgeP+x001SJyVQT8EqneOMpkA3EjpJALxOQZcSOiuBegoAoqevVhcSOksAvIiAqhdoCXrL3OXcLsb3/bL+8xj1b4pSylI3xGs2xk4TAIe9oL74Y0n4Y2qXD8GgMTHtC0gXfBiJoxP+t14A4IymRxMQb0bEu5vGpteegOeFO4MB4Vqd3OzUUyClLOsSdApms1n5199h4yXRigC9cIBi7J089lgK4CUJwfuPZRAERFHEMl3s7zM+fps3IqO1bajv+yXpAqY3xHF8cpxnAfsUZFlmzWazUrhj4ngOgDdxiaKIIAgQ7hiA6bS6bN7+9u6n19H6TdFzqKfg7u6OMAxL4Y5R+Qpv4qJFfLr/AoDjugDMo8eLx+6FAI1SygrDqs7jeE6xTgH4dH/D7x9uDxauk3AJrTXBabEi2Q3wt/lZx9dToJRilVbRD4KAZbrAcV1m9w/Mo0fCMCQMQwDyvLjomUMrAm5HdrlWOf5ww1oVPNxMfniC+oZJssxZFzvm0SPTiYdwxwghEEKQ5wXp92h/7M/QuIDbkV1FeDPEGQoAis3mLAlKvb5cZlm2f12Pu37Isvz6hSRJLppv4wLU1ibeDBFCEG2HDOzqcpiuzyuFUziOQ54X2MuYib1iRSXtrbgfoZUSEEKQZZmVZZmV5sXZn5M2pdgoxEbt3/s+fwKqWs+ePlPEf7Iq4NvKhgLewUX7gdZvR/lOtW+Pi+3JsaT7shC1FQd//3WgqjO+reqfbYZrw2J92Ro6vR/3Fmm/SMh2WPr30Q7W+lHbOmO0g3lDc++VgDrSpXRtyHfPZ32gGjnjb+mtADhMRJdzMRgMBoPBYDAY/mf8AwNG5pSa1Tm5AAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 20,
            available: true,
            name: "Limestone Mine",
            colour: 69,
            fundCostMultiplier: 232,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 3, -1, 2],
                    [0, 8, 1, 5],
                    [7, 4, -1, 6],
                ],
                [
                    [3, -1, 2],
                    [0, 8, 1],
                    [7, -1, 5],
                    [0, 8, 1],
                    [7, 4, 6],
                ],
                [
                    [0, 8, 1, 3, -1, 2],
                    [7, 6, 0, 8, 1, 5],
                    [-1, -1, 7, 4, 6, -1],
                ],
                [
                    [0, 8, 1],
                    [7, 6, 4],
                    [0, 8, 1],
                    [7, -1, 5],
                    [3, -1, 2],
                ],
            ],
            primary: [
                {
                    cargoLabel: "LIME",
                    multiplier: 20,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -74,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEy0lEQVR4nO2ZoXPbSBSHv9wYCAgsWCAgICBgYBBgEBAgYBBQEHCgoH9AQODBAwcM7g8oKCgoKCwwKCgIMCgIMDAwEAgQEBAQWCAg4BkdkFexHcdtbSnOTd834xlLtrX7fn6/p90nEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB+B9yduoJWKIoqpRSzfFkMnmRub0KAaIoqpIk2Tg3Go34+PFj5/P7o+sBXju9U08AIEkSzs/P0Vo35/I8B7q3xquwQBAElVIK+9Jak+c5xhi6toZY4NQT2Mc+a7TFqxYAahGMMY012ua3t8DJBbgd+NUbd/nkvP8we5HxT26Br3lKsHS49IA8hxx4eLnxTy5AknGGV1ZkOdpxAPCUS2YK6KnOxz+5BbbxlIt2XTzl8pw1bgd+1dZ4J8+A59hnDe26rY3zIgJcX19v/GM/s5wd9hQzDLus8X6RtrYS7FyA8XhcGWMwxvDwUP+FURRVANPp9Mym8yLbXOB4yoXcbBxrd1UbWqRTAcbjcXV3d4fdzAyHwydCLAAW9wy8tdVe0W6Q++hsM2SDD8PwyfI1DMMNISz6YQ48pvpsaQiWDtpxmgzQKzFzY/jnPj56/p0IMB6PqyRJngRud3mWMAyfiABwnsVNFixWNcAK0FxrJcTtt/ujYuhEAMd7WwHcvvMxxmwEvS6CMYbRaMR2jWjYsoatE/aczYhjROhEADe8qQCWhQF2C2GDX68RP7LGLKuvF6intjhUhM6K4Gjgcreo37//nAJw++4xwPXgbVbYwLeLZR6eA2CKOQCJMaAAU2dBbszB8+wsA95GAZN5gaMUJqkDsRnx9+2AXTVim+dqxHQ6RRWGQDkMPF2LUBy2PuhMAEetfNrvk8cxl37J3aIubPussatGAPz7Kd0YY1kYLpYTtOMw8D0WacaX1PxyPK1ZYLN5mRG7l+Rx3HyutWbo142N56yR5zl5nqO1bmxiA1dBCIDreRRZRmkMybxEe85R64ZWBNjd19dM8Jrjybzg+jwkCHyMme4VYj349cABvHRK5keUK9/nZYnH4XuDTleCpckpsgyorTCZxzCPufTrwucoh9Lk9FwFPArRc/vMPqU4Sm8EbgqD8gNK39vIrmNoRYDnm5ce4fIryldQLMCH2P2T73EM6WPajgYZdwuvEcJRGkcpXM/bCBxqK2U75jDwPQa+V/3q6rC1DNjVvBz68Y6+fm0NWxzB1oeYWdpHBWGT3sr3UIVqvgNwdXXBYlb3CYaeqjdN1PuHQzZKRzdEDunprVvDYguoTXmL1hqlFFdXF2itieMUkz7+NjN14If2CI7OgH2Ni33WKI2hND/u8V9dXfDt2z1xnBIEPp9X1t/125PcBn/U09tljaj3gam5+anrrwdub3/2Gl/Sx3XMl9QcNP92imDGWUIJlPWJ1NTWYMn3re/6DzPo+UR8oDRw7940zwHB27CGSTM+sxn4RTEG4GvcziKus35A4FEFS2djN2fRrtvs5d/0qUoDy37ELO1jV5D2LmALZduBWzp9OmxF2LbGulff9KkASlMf37s3zW0Q4Dz9C2g/cMureDy+jhXE0lXggiAIgiAIvz3/Af5bo0LulIorAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAADlklEQVR4nO3YoXbbMBQG4L87AwEGBoYCAgMGBoYBhgMFA3uAgcGCPUBAYcEeYKCwYA9QGDAYUBgQYFAQIGhgYBDmAfdXZK89O01sdzvn/0gbN3V0r66u5AAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi/42Ltx7A+m7VGmMAANnHb7OP593cH0jru1XbPN63AOCcQ31osPv1o517HG9SAeu7VQsAnHlrDfb7LgnxIpq1Et7P9UEA0Dzet5vNA6IkRp6mAIDN5gHWGp8E59ycQ5q3ArjerTXYliXiRYT60Pi/52nqk3D59fssY5u9BzjnsNk8IE9TX/J5mqKpamzLEvWhgTFmtn4wWwIYUJTEAIBtWaKpal/yRbEEAF8V1hqwSU5pljJj04uSuFf2TVXDGONfsy+EDbE+NCg+rSYb5+QVEHb8pqphrfElz+CbqkZT1djvHbZlCQC9JTKlyTI73OpY6mHQQL8q2AT5O9DtEsaYybbGSSogDJ7rmYkAunXOXgAck7MtS1h7fN9+71AUS1hr/D3HNnoCwvXOcgfg1zkD5HVWAn/u98dzALfLbVmiKJaT7AyjJmB9t2qjJEZRLJGnKTabB7+uGTBwDMwYg6JY+h2ASYgXke8FQJcsVsfYSRhlXV1fXbYAUCxzAF3pO+fAQ8+wq8eLqHcYYlXwNQDfJ5gcbpu8Z/Th8yhjP+smDNyYBFmeIV5EcM4hSmI/+PDExyZH4fGXgbLpAfD3AtBLBhO62+5wdf3zrBhOfha4vrpsjUm6QJ62uAa17+p5kfZmlFgB4Zk/SmKfCAZfH5reM0O4JEK3N1/ac5JwUg8Ig8/yDFESw5iu0zNgBs9HXV7nT86mtaaXEGuNf3+8iHpnA2I1ZXkGoEvCKXEAJy6BYQIoDGRYxmxk4UlwuP7DswE1Vd17/Zzddvf0WRVubteviunk0mESsjzrDZKNioZNLzzuhu8hJgHoJ4JBAl2gz3lt8MAITTCsBCaClRCe84fXhkkJyzwMNsTATwn0JWd/IXKcjZ1fDmxgwDHwBrX/H17jQelvwU8ROI12w+GWGBqe60Phk2GUxH8k4JR1/RqjnQRvbtcXN7frC+cqHwSf8oAueAB+5odH4r81uqlMktnnqmFY6qGw+4eVMPXsAxN/IRImgpiQl7o9AB88MM26D83+tXi4c7xkjpn/p7BSREREROb0GwwQSkQ1hIyAAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAACcklEQVR4nO3Xr5abQBTH8V97KhAIBHIEoiICEYngAVZWVFT0AfoQlRX7CH2QFX0ARGREBBIxMgIRsS4V5E4n0z09TQN0xfdjckJCwv0zl0ECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA6/bmf/xp9/R4Ph1H5WWh7Wajfd9ru9lIkvL3H1a9plX/rHt6PBdZrvH5JEvA6TiqbRt13U7OOXnvlZeFDvuDvD/q2/cfi17jIj/+9cvDWZKcK1Vv61DlIsslSd57SVLbNpKkYfAhKbG2bTQMXt1udzlv/oS8m/PHpCl4C/x0HLXdbNR1O+VlEb5jrS9dB++c0/h8knXJMHhVlZPUqKqchsHLufI8ZyJm+ZG44pJUOSdJIWgLTpqqb5WP294+t+/kZaF4uUgKS2W4dNAcibjr5DTwtmlCgPFg2/e9JF0tgbja6TGbD/ZZ2iHWVXMk4u09wTtXhuDtQq260hT4MHgVWR6qObW0VFVORZaH93aeBW3f934637qpyPLLUnCqt7U+f/oo58pQjFvdPQPqbX313qptrJ3Tz/d9r9NxDAmIuyQvi9/OK7I8DE/rhJf+71azLoFUmhxby2lgJk5GOhRNnBhbKvfcMme/Dd6SlHgzZHcDq3Rc5fRYHLh03wxYbJPxp0TESbBBaXcE6dc+YTp/OmbJMFZ1SXfdCRbfCdqwjNkeIR5ssfhWma7xuQI3s2+E/pYFb+1v67/rduG1bZurubHE9niVZ4F0d2jPANL1QIzFHTJ31WOrdcAUwCGs/zjwNBk23OT9YoGbVZ8GX5oHqTWeAF+Nf929AQCAWfwENFGQc9dOx7UAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAGEklEQVR4nO2boVfrWBCHv7enIiLiioiKiAhERQWi4glEBQKBRCBXIFbwR6xYiUQ8gUA+gUAgVlQgEIiKCkQFIqIiIuKKioie0xXplCRNS0pu2u579zMNSZrM/O7M3MklBYvFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrH8OnzbtwFCv9+fK6WWfz8+Pu7EtoMQoN/vz8MwzO07PT3l7u6ucfv+aPoGh05r3wYAhGHI8fExnuct98VxvJN7H4QAkIqgtUYplRNCaKpGHIwAmyirEVdXV3MTNcLWgH0bUIUma8T/QgD4vEZ8lb2nwHXXn5+7s5X9/vuQ664/b/r+e4+Ap/GEQDmctIE4hhh4T495rtv4/fcuQDjjGzqZQ4znOAC0lUukp9y+TX6/TrCt3J2MvHBwAhRpukbsPQU+o+kacfACNF0j9p4C111/ft7xV/a3lVsa4qZrxN4i4Orqag7gLB5wuv/+XB6Lp1PgF50GxfHhcIhSatnd9c4uAQh/3u10GtyZAEXHBdkeDAapEJdX6YGfdzuxq3GFs44DuVGXTyC3D9IlMYBkkRpvUVoEpQZImtSNksYEKDoO5Ea+TIQs64TI4rkuf7+OD0uAMseBFWe7cTqZe67LY+KsnLMuIrI14mGia9tvrAasG3FxQMg6fh+OCSIH/E6p01kGgwEAp4ZrRG0Fq464EI6fAQhmDnS/L509maULHBIRxdog24JExM3NzX5TQCk1B7i4uADg/f195RwxvCiG1jrn+H04Xgojx4tC9no9AB4eHgAIw7CWD7VTIHHOcgaJEOumu6wzSimexiMAgsgh6PbX3qfoeNw6Wxz5Uct+IzWg5SoSyoXIRkRZOAedfu5a2TBXSq113P9+wjSKmK4G3Ha21/t6igqOSLQm0fFGIcoiIsumUBfHHeXhKIXy20yjqLbtRgRw220SrSsLIVTJ8aLjPTcinLzS7V0wGY5q224mAvw28Xi8tRDZKKjquBf0SqfJr2JEAD1JQ/ErQogIVR0PAp84jnkb1kz+BY08DG0jhAhQ1fHhcEQ4CXE6Zmw1IoAUI4kEoYoQcUsBWzh++hfxdIQ7qV8AwcCKUMtV6DANx01CQFosIZ01XP+IlqtQwREqOOLET/D0K57noVxFEPgopZaOR50zYvV9ee14PCYxUAtqCzCbpkYkOv5UCCEnxGJ7W8e9Tme5mlQHI2uCKjjCUen/6zYJIZGQjQjZ3mbEpQ8wgREBsiNaRQhB+W26vSOAyo5Lqsj36mImAkpyvIoQehItp7OqjkuqmMKIAMUQrypE2TU+c1xSxVQf0Mj/BbYRQtrZqo5LqpjCiADbTH9FIdK+QAPVHC+mSl321geIEI5SX3L8oPqAtMP7jfsASFvZz4Qw0QeI4wfZB0A1IYRt+oCi4wfdB0A1Iar0AU05LjTSB2SL0yYhyq5R1fGDXQ/wOumDerFKy+NuOvXFOMpLFzWjD8fl+9MoMrbm9xnG1wOip2sA2ue3ALn1ACgXAtY7LpEhIy6fehIdxjRY1gcARE/XSzE21QjpAzrTEZ5+XR7v9tIpUq4hZFPFBLUF8KY/6On7XI4XWfeskN2WPkBy/W34nnO+WCP60S396Lau+eZqQE/f4zkOgwrnZpfKJOQ/W+yUEb9M7gGIgDhJatttZBYIW5sNKZv+oLwPELI9g4x4N7wh0lMiPTXiPNSMgPMOy7e43nRCOEsAlTsn0XGu6hd5eXwBFn1AZrEzm+OXyT1vSYLnOEvHtb9YFo5HdVww94KEiPESqdx+5WiCmcNQ/Qmkzw5et0eiNY5SuO00BeRTKns/umWQvgXDqcuK46PRyIjtxt8QKQpxvEiPsJXkhJDpUMg+EkvIiwDHrQS9eIni+fnZqM2NvSMkQrzpj33BzFluZ4WAdMTjJOH9+B8SremGN4xmDkEQAOZGvEhjr8k9jVNxs0JIFISthJ6+B8BLFnntfIjTdV/QfoegKeMy7OyXo8WIkGjIFjYg93YINDfyws5/OrtOiOz7Qk3k+jr29tthEWLiHAPNj7TFYrFYLKv8B7Br/cMW+PtSAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 22,
            available: true,
            name: "Potash Mine",
            colour: 125,
            fundCostMultiplier: 232,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 3, -1, 2],
                    [0, 8, 1, 5],
                    [7, 4, -1, 6],
                ],
                [
                    [3, -1, 2],
                    [0, 8, 1],
                    [7, -1, 5],
                    [0, 8, 1],
                    [7, 4, 6],
                ],
                [
                    [0, 8, 1, 3, -1, 2],
                    [7, 6, 0, 8, 1, 5],
                    [-1, -1, 7, 4, 6, -1],
                ],
                [
                    [0, 8, 1],
                    [7, 6, 4],
                    [0, 8, 1],
                    [7, -1, 5],
                    [3, -1, 2],
                ],
            ],
            primary: [
                {
                    cargoLabel: "POTA",
                    multiplier: 20,
                },
                {
                    cargoLabel: "SALT",
                    multiplier: 15,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -74,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEy0lEQVR4nO2ZoXPbSBSHv9wYCAgsWCAgICBgYBBgEBAgYBBQEHCgoH9AQODBAwcM7g8oKCgoKCwwKCgIMCgIMDAwEAgQEBAQWCAg4BkdkFexHcdtbSnOTd834xlLtrX7fn6/p90nEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB+B9yduoJWKIoqpRSzfFkMnmRub0KAaIoqpIk2Tg3Go34+PFj5/P7o+sBXju9U08AIEkSzs/P0Vo35/I8B7q3xquwQBAElVIK+9Jak+c5xhi6toZY4NQT2Mc+a7TFqxYAahGMMY012ua3t8DJBbgd+NUbd/nkvP8we5HxT26Br3lKsHS49IA8hxx4eLnxTy5AknGGV1ZkOdpxAPCUS2YK6KnOxz+5BbbxlIt2XTzl8pw1bgd+1dZ4J8+A59hnDe26rY3zIgJcX19v/GM/s5wd9hQzDLus8X6RtrYS7FyA8XhcGWMwxvDwUP+FURRVANPp9Mym8yLbXOB4yoXcbBxrd1UbWqRTAcbjcXV3d4fdzAyHwydCLAAW9wy8tdVe0W6Q++hsM2SDD8PwyfI1DMMNISz6YQ48pvpsaQiWDtpxmgzQKzFzY/jnPj56/p0IMB6PqyRJngRud3mWMAyfiABwnsVNFixWNcAK0FxrJcTtt/ujYuhEAMd7WwHcvvMxxmwEvS6CMYbRaMR2jWjYsoatE/aczYhjROhEADe8qQCWhQF2C2GDX68RP7LGLKuvF6intjhUhM6K4Gjgcreo37//nAJw++4xwPXgbVbYwLeLZR6eA2CKOQCJMaAAU2dBbszB8+wsA95GAZN5gaMUJqkDsRnx9+2AXTVim+dqxHQ6RRWGQDkMPF2LUBy2PuhMAEetfNrvk8cxl37J3aIubPussatGAPz7Kd0YY1kYLpYTtOMw8D0WacaX1PxyPK1ZYLN5mRG7l+Rx3HyutWbo142N56yR5zl5nqO1bmxiA1dBCIDreRRZRmkMybxEe85R64ZWBNjd19dM8Jrjybzg+jwkCHyMme4VYj349cABvHRK5keUK9/nZYnH4XuDTleCpckpsgyorTCZxzCPufTrwucoh9Lk9FwFPArRc/vMPqU4Sm8EbgqD8gNK39vIrmNoRYDnm5ce4fIryldQLMCH2P2T73EM6WPajgYZdwuvEcJRGkcpXM/bCBxqK2U75jDwPQa+V/3q6rC1DNjVvBz68Y6+fm0NWxzB1oeYWdpHBWGT3sr3UIVqvgNwdXXBYlb3CYaeqjdN1PuHQzZKRzdEDunprVvDYguoTXmL1hqlFFdXF2itieMUkz7+NjN14If2CI7OgH2Ni33WKI2hND/u8V9dXfDt2z1xnBIEPp9X1t/125PcBn/U09tljaj3gam5+anrrwdub3/2Gl/Sx3XMl9QcNP92imDGWUIJlPWJ1NTWYMn3re/6DzPo+UR8oDRw7940zwHB27CGSTM+sxn4RTEG4GvcziKus35A4FEFS2djN2fRrtvs5d/0qUoDy37ELO1jV5D2LmALZduBWzp9OmxF2LbGulff9KkASlMf37s3zW0Q4Dz9C2g/cMureDy+jhXE0lXggiAIgiAIvz3/Af5bo0LulIorAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAADX0lEQVR4nO2YLZLbQBCFv6QMBAQEDAYYLAgwMBAIzAF8gBwhhzAIXBCYI+QAewAdIkDAYGGAwAABAYMBrlKAq8cjr7eS9UrapOp9VVv+WZc8/eb1m5ZBCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYT4b3j3ll9e7Vy/LDoAPu7Cm6zl/Vt8abVzffN90QO0XUH9mPHzW9a/xVpmV73auR7Adt5lR3xYUD9mlOswuxNmc0DzfdFXO9c3PrBxLS470nYFcBKhXIf4ek5mU9v63WVHqjqnXAfqxyz+f1se8GFB2xVsv/nZ1jWrAPZ849oogsuO7P2SxgcAyvXpca5WmKUFLOCsyKrOWbksWn7jWoDoCpcdsZCcmslVtp1vfBjYfuUylkUXX2/LA8AgEOvHjC8/uknXOKkD0sRfudPObsvDoPiVO/35sKCqc+AkhokwNZOoe3nUmdXTomHoCgtBew6w90uWRTdpHozugLR462cTAk59blkAZ3GqOsdlx/i+D4t4XKYBOjajCpD2u9kdiH1uBdr75gR79GERr2XHZVXnbFw72aQ4mgDpkLMtD+z9Mva1FQznwpZFx8a18QQwEcp1iFkAJ7HMHVOI8GoBvn7e9F8/b3oghpn1rk14VnBV5/iwiCFnO75x7aAt4NT/qXB7vwQY/Xi8OVysaIC7vImjbOMDK5cNhp005Ay7B2i7IrrAhAPitYB4PTgfk78OK+4f9q8Ox5sckBb/6UMbhxpL9bT4FMuCtiuiGI0PA9fY5xof2JYHtuXhiTuureNWXqzg5c4DVwtNHWEjrxVtz1MXAFeFuxyULFOqOufXYQXwKieMIgAwuJu7tLEtOJ0ETRQ4j8bAYLdXLnt29w0TAW4T4iblTIS7vBks0iY8w5xgyZ+Ou+lnDBMBhkKkRT7HrS4YLQRNCHNCOudfvncpSnrs/anYMYIvZRQBYNgOcM6F9EeOtDUs1f+2+LELN0a56HO5ADyZ61PSO8PGh6sCTFW4McokeP+wf2cLtSLsLg/OQ0zbFbjs+GQk/lPQTcno6l5zw2Wfp6Tpf+mEqXcfJvxB5NqQYoI8l/bw+mPtpcz6E/TfTm5zFP7PMMY4K4QQQghxC78BV24kzToAK6UAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAACf0lEQVR4nO3XLZabUBjG8X97EAgEAoFARIxARCBGzgIiR3QBIyu7gMouY5ZQUTkLqKyIiIiIiEAgEAjEFTknFcxLLnTak5kQOuL5mSSEr/fjXi4gIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi79uH/3HRx4f4mKUhZeVYFS1P64hV0QKQfTnMek+zXuzxIT4WuWO9DbEEZGnIMq3ZVAlJ3FA3MWXl2LcZAN++b656j1c5+ddPy6N9X0RlX+UidwDUTQzAMq0BqFzQJ8W3TGsqF/Dj102/beqEBFOeDE7BL6LyubotmyoBXL+PtT4Mg0/ihvU2xLokiQPS8MD97Y40PFC5AOjOP1UiJjmJX3GAu5uusmXVBW3BQVd9q7zf9va/7VNWDn+4AP1Q+blL+n0vTcRFB48Dv7/d9QH6E9vTOgIYDAG/2uNtNj/Yf+MOWRXtZIn4+JaD4M/g7UatutAFXrmAIj9VMw0PAKThgSJ3/W87zoK2/esmpshd301F7qhcQBI3LKKSz3fbv97POS6eAxZROfht1TbWzv7/WWqfIelz4H6XdPvH+PNGkbt+8rROeOl6rzXpEBgbJ8fGsp8QqzjQd4MlZzxMYJhQGyqXPDInfwy+Jin+YsieBlZpv8rjbePA4e1zwNUWGf9KhJ8EmyjtiQCndQLQb7NkmCmChxlWgi8lwtYI/sTm8x+V4zE+VeBm8oXQuSx4a38b/92iqftcpvVg3rjG8niWd4Hx6tDeAWA4Ifr8Dpm66r5ZO2DfZlB1498PfJyMfZux3w2PvdZL0axvg+cuVq79BvhuvHX1JiIiIpP4DW2eaQ+t5EraAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 23,
            available: true,
            name: "Quarry",
            colour: 194,
            fundCostMultiplier: 210,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 9, 8, 7, -1],
                    [6, 5, 4, 3, -1],
                    [-1, -1, -1, 2, -1],
                    [-1, 1, -1, 0, -1],
                ],
                [
                    [6, 5, 4, 3, -1],
                    [-1, -1, -1, 2, -1],
                    [-1, 1, -1, 0, -1],
                    [-1, 9, 8, 7, -1],
                ],
            ],
            primary: [
                {
                    cargoLabel: "SAND",
                    multiplier: 14,
                },
                {
                    cargoLabel: "LIME",
                    multiplier: 14,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -22,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 79,
                        height: 71,
                        left: -63,
                        top: -55,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABw0lEQVR4nO3Un3fzUBjA8e/eUwgUAhcKgUEhEAgUAoNBITAYFAaDQGE4CAT6BxQKg8FgEBgUB4PAoBgIBAqFQiBQKAQCgZyTF7If3TmvNKfvTnLO/VjuuXly7/MjIEmSJEmSJEmSJEmdEM2Vav18Xp0iVu8UQX5LNFcqAEUMiFKLXZBVQsvoGZw1jfnndMf7f0zTrADcwCLeKAgt43ayJAht9qlKuaZxN3QiAYemfnZmuznxm4K/2qHfwD5VGV/dNkpC49b5TaqqVovr7+eXxGTpxVhOhip63E8mGMorI684+j6t/wc8O2pl6gVQz77/XgJ11c+HJY+OQGgBC18A6dHxW9cB5mjy3crlliRJmNp9DP2C+4eAoWFxNwy5uqm32G6OKi5Y2CHjuUKWZUfdqXUJOJzl/a6ufLJ9Z3EN2kABYB7qP95ZejG2mxOvy+6PgBAC51LBXxXA/mN1zNM2hy2U+Q7I6PUHvM1C0rjAuhuQJMdV/lPrEuBc1lU2hoLRj0TU6w/OBqFlpPEG2y0/qp40/l7rRuBT4HtVlPYZaTn+qvjqCld/YvpSNmr3f2ltAg4FvlcBRGmf2WzWiTNLkiR1wl8aSZz6L36eFQAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -22,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -22,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABqUlEQVR4nO3VL3LCQBQG8C+dyIgIJBJRsaICGYHgABwhIgKB7AE4QkVFZY6wAhkRgUAgIiIqECsqEBErEBXMbEVmGcoMhJSQMNPvZ2Iy897u+7MAEREREREREREREf0fTpfBQ+GazBXQWgMAlFKt5+O2HRAA4ig0APC2zgAA4/EYK5UAqv1cWr3x04rPxyMAgCw0+ps13vOv1jvgqY0gcRSaOApN5goAZcW9QXnwYqsgpexsFO8a+FLFN7sMeVLO/CjwjNA+cl8jXe5avYy77IBzMy4LjWCvIRfp4ZDTiTCfhULu63ukUqnR2752xkeBZ9LlzrHf6USYD5l3MgaNBD2t+HA4xEolGHgvCPYar4vUmYm+6WLJVblpBGzF50kK4LjiRfmV0tGBZ+z/tuK3xGzan16BULiVWz1PlDOdiEOr7wc+bLs3eoIb1apGnXf8uNpdzniVq5KqM+N2qz9aq59TO8k4Co19x3vfxeGgM9E3Xbzjt6q9BIut+vWOA2W773s+nuEjRd5cdo/KLrLRyYbvLqMW2YM+2jYnIiIiIiIiIiIiIiIiuuwHVIz55/lJG0QAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -22,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB1klEQVR4nO3Wr3LbQBDH8a8yggIGhgYGBgYHBAwKBAT8AH6AAgEDg8A+QB+hoCDQjyAQaCAQEBBgIFAQIFBQICAQUOCZK1CVUTVpbCex5D+/DzKw5nZvd+8ORERERERERERERORyOF0uHhnXrl1DURQAZFnWejxu2wsCLOeRBfj2sAZgOp1yn60gaz+WVne8WfGv0xCAOC8YPD7wPf3ZegdctbHIch7Z5Tyya9cAZcW9UZl4/isjjuPORvGgC79W8cenNemqnPkw8KwpeqS9guTuqdXNOMgZ8L8Zj/OCYFMQ3ybPiVcJb0Y9krj9EfjQBfeZ8cXM2Js4dZq/2/YhizYrPplMuM9WjDyfYFPw5TZxrs3AVhtQr3zX3hXELjMeBp4F6GrGt3lTMJFxbfjp86sVr///mCretFdQu854lfBiZuyPPDu6qtft9A7Y9x4f94cA3MSpc8zJw5YOOIV7/L1e7IBdKt7/nf/zzSkmD40OeOs9fspc2O3ldm0GFsp2H/eHnEPyAI7v+/acZ3ybK3h5xqvkoTzV017xfLqfFd/3re/7tmrxuuoVdxHqGxAGnl3MzOUkD+UGXFTF/3KrUz3NM8b9IQlp1zGJiIiIiIiIiIiIHMwfwyxVFl81fZwAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -22,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEYElEQVR4nO2ZoXujSByG3+RBrECMGBERgUBURIxAVFRERFYgkCsqECdWrKhc0T8gomLFiYiKihOIiJURiBURiBERFYgRFScQiIqKPA8nWFjSZru9a7eBPV4DDxDg++Y33wwT6Onp6enp6enp6enp6enp6enp6XmIEKL46/1pcej3+BUMn3NRMLLQafqr3+UgDJ5zkT+2iqOxSzY5IcsytNYYY57127bzrAqQtgBgtVoBIITAcZzfoktYT50Mw7DIsows+QKAEGO01sxmM7IsAyi6Xgl7KyAMw8L3/WK1WiGlxMgJq3sbz/NQSlEdV0p1vhJ2DFBK7QgXQrBarQiC4JHw38WE2gClVGGM2St8sVgwm81q4b9TJQzhu3jHcYiiqBbYFD6fz+v9xWKx1wQhROdMGDTFVxhjOD8/J0mSndDTWhOGYX1cKQVAHMcAhGHIfD7vVCgOhBCF4zgIIXBdlyzLMMZgjCEIglp404Rqvyk8TVM8z+PTp0+dMmBYiRdC1Ac9z6u7w77Qi6KIOI4Jw5DpdFpXT/MeXcFqtrwQot5+m+wQRVEdhlEUAXAZ+ADcOQ5pmiKlBKi3XcICauFNqtasTICy1Cd5xmWiAVDra3BP3+5tfwHDp8rWdV2EEIRhSBAEAMxNXJe8tiaI9Ett3kMTu8AQIM9zmtuKypxmNbi2Ir3TtQnT4/fYOgHK0aNr7MwEkyQB3B0jmgEppURKWZvw0VNcJpp4fY2UkjRNmZ7YnZoLWM1WU9sN2oDWOVB2AXgcbp7ncbLOmZsYC4G2Jqj1Fbl4B8Af/qT4c7npxHA4FHaKLwW+LIUAzGYzbPd7l3jYx/M852ZUmtPMAye/J/56N+iKeAArv3O5WMUAXMymACwbYZbn+aOMSNMUYwyuU3YF11H4UgAKuC6uNtvOGDCE7y2+zHKyv8tZoJWJnRaHMuSyLGNEirBTrCTm7J2DLwXLLOcy0WhrwtnE6kwOWFCG33S75fNmORj5k0LYBoAqHqoWP3a2jAA5GnMEZOaWtdYcK0jvDRbiABJeRl2qHybj4vPmdqd0q0Q/kg43mSH+erdzPhiLIrrNBwCTmVO4tsIYw0dPAXC2uGp9V7Dgm9C83DZFVvsxm5/eqBoaz70pl4lGbX/+mzYwhFLoRuSPWvg5BONyDaDKg7mJATqTBfVE6L+IB4hu88GHybgYCZvzL/EAdofGtpvwrGXxHzES9qPs2DdVvgrPWmvCiwwAqMRL2wZguVwO9k2V28qLDKhEP2S5XA66kgcvroCL46O9wrqSBy83YH0z+JEJm5UZtD0PXqUCLtY3PxxB2p4Hr1IBT51vex682ICKp4xocx686Vy9jd8LT/49/tq08Xvhzd2fn06Lq/tyvQHKZbhDLqAc5MHNrgCHNeHVQvDf0Kb5wZtmQJO25MFBE3h+Oi2+WuKgXeHgS1aHzoODZECTh+sHb83BKwDA9/0ivdP10Ki1/v9UAJTfCwBbmeN53ps++x9zIHv9hhb0jwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -35,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -35,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 24,
            available: true,
            name: "Sheet and Pipe Mill",
            colour: 160,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [1, 2, 2, 1, 6, 7],
                    [1, 2, 2, 1, 6, -1],
                    [0, 10, 2, 1, 2, 11],
                    [5, 9, -1, 12, 12, 8],
                ],
                [
                    [3, 3, 0, 5],
                    [4, 4, 9, 10],
                    [4, 4, 4, -1],
                    [3, 3, 3, 13],
                    [6, 6, 4, 13],
                    [7, -1, 11, 8],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "STCB",
                    },
                    {
                        cargoLabel: "ZINC",
                    },
                    {
                        cargoLabel: "ACID",
                    },
                ],
                production: [
                    {
                        cargoLabel: "STSH",
                        multiplier: [4, 4, 4],
                    },
                    {
                        cargoLabel: "PIPE",
                        multiplier: [3, 3, 3],
                    },
                    {
                        cargoLabel: "ENSP",
                        multiplier: [1, 1, 1],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -34,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAGtElEQVR4nO2bLXSjWBiG3+5BXIH4xBVXRCAQEREVFStGRFSMGBFRUTGionJlxYiVI1ZUrBwxYsSIiIqKihUrIioqIiIiKhAIBALxCQSCc7KCXHIhQCB/7e7mNZw2F7jvw/dHTgucdNJJJ5100kknnXTSSSed9P/T2VveXKjrRfl3lk2tzk1jht1zIYhgK4XXn5+38vImAIS6XrQ1unYuyeUxOz9h3gnCUQEIdb2we+5O15D9PuIwhK0U4jAEsILQuzjHyx+XnTwdBcC2oX49TAEARITxTOWmy0dgewgHBbBtqJvGH37eg9Q5AutTHur7hHAQALuGuh18BQCQOkcyuKs0GExnlRDY90CO2xrCXgEcO9RNCKa6QNgLgLcM9V0h7ATgvYT6LhC2AvAeQz2YzirvuQlCJwDvPdS3gdAKwL8p1LtCaASwz1n9mE+5C4RKAIea1d8bBKAE4Biz+jFDvWqNNq4/O9PGywv/K6Gu15SNW/O7DECV+W30niEA68YhHBBRFgGOwgLCARIfiLYDEMrrHMJ7DPWycWaG4ziw9AlEBA4B9Eog9M+i+aiiMUJcA3ARTGe1Bslxwb6Xb7Jq87usaWNcHy8uLtYB5CDk8oPAX4KoXmeCU8HbQuhi3Pd9MPMKADMXLp4O7sG+B4lvBRAsuB5EgjwSEqbC5g8FYXB11dq467q5cQDwPK8iBZaylQL7Xi0I3/cL4Koi4b2Eujau5Xlevvdf9El6AS0HGP20bKUAZBGR3dnJ0iPwgWi13gQBmUVCGjPY9/J0qJI22GWNBhFMZ7Dmd5l54YDUecGD6xZnGtM4AFwkQQbAiUM4cVgA4aZPkPG3NRD64hqE/zwpgDA/3yeEwdXVRuPi433BuN5L2filTHApYgBYpYAUAgM7hbRt/AiLIPx4gjh0YaG6+CHxMxBAIZLMmnDIUBcf7xH/PQE5PZgNdTqdrhmHFOAgQo8kAo5WAGwlECNFnDJuFEES4f4VRRBYz/kCiMBfK5a71IQuxgGA/QBA9ROHFPBfQ7z0f8ctfc/uQXIFwPcZc+cOA/8ecAA/MkDM/OKTDWtAJIYbs33K9pHQpaqXjYuXr5XGOciGGrKtLJWzLUASFVNAv8E98AhpzLjuTTIQTn8jCK26rrEpErap6qZxO/LBKVUaH6cZ1GvrITceMSMy54AiCImkCcTrehvU2tQ+qyKhq3GttsYFSSSc5X3Bq44AKQQU2Vl4vK4W1IIwaoSWjgiza2gQ1vxuNVlG6xC6Gq/L8SrjgghJ6SFFy5/zCIiSBDDW6FToAqKqa2gQyTz7OozDWd41NIR9Gf+r9wWceo3GtXQKAFgOQgAU2WsLBVH+DY++sGUTxsEQvs/wU8Zk/oobJXDXz+aEujmick7AeKsB5lImuHKzqj7GbQ5akAQ5xXP1/FIHIgcQctwahNbT8uZ+yphGPm6cfgZCD1TCgZs+FTa/BqLCeNMAc+VmT5yDKK/q5dzeZFwrykfhGpUvYoLQXUORjSfc5hExjfzKiKgcmZcqP/GqAcY0Pk6v8jzftOfydw2mCoNQlcyCZuaTZROw7PkhxxD9zEybGlHXPoFuxa2qqrc1HjEj4OyaFgDQh495UdCG21zMVgoqzFKmsX02gKgy/mXQwzRMWlf1tsYDjhCHISZCgfr9FYDHx8czABiNaDGXq3Bsk0chx7DPu7dPs7pr47dKQA4GmWnctq7qTUqYkXAE136BRwO46RMmk0n+bXghBR4fH8+Gw+FCzO8h0jkS9aMWhCIbc+OYbZQKa+pAfLKt/KWLiArGASCKojztysbL6djGOPUIABWMVwIAkC8aDocLrgGRcPM3p3UgxsEQv6aPcBwC4hiXIsG5UpBSIoqi/FilfRvXqi2CTSDaqgxC6wm3+M1+ALBquVLKwlGrbLwpx7sY12rsAkA1CF72f2A1PzRtWoOIY87bZ7B8JzefPgCQXG6pFAhtiptrv4ConXGtjQC0TBAuv2BOxd5tDlBt2qduYdq8Nv75eYA/B89r16qSNu6pZXGbzTr/vUNrAFom3dGIFpF7nn/WpX1GsxjStvMnHzHjS/AJgprvnzAjDjz01WtlVe+qzgBMme3z2Vrlbpv2KW0bAUfoo9h266CZxqlPaJvjm7QTAC3dPuu6RpN01SclKj8/lHGtvQAA9tM+yzqkca29AdDa1D7NwalJcRhm5jtW9a7aOwCtTe0zMF5mImaQUhCzGwhrgO8pwcV2Vb2rDgZAa1P71G9mgfUBJLOXJF1cj6E3+X+B0Wi0YGa4YZYMnhoc3bjWP88MfwPPZVAyAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHMUlEQVR4nO2boXviyhqHX/pERESMGBGBiEBUIBCIFSsQiCsqECsqKlZUXHFkRf+AIyuuPGLFESsQKypWXIFAVFQgEIgKRERERMSIiIg8D1eECZMQQqCwPftcfibbZJKZ9zfzfd8k7cJFF1100UUXXXTRRRdddNFF/39qHXvj9d33VRyGJEoRB0ssRzS6L43V1rkkHB89jvfqqI5NeFsIABKl1sfoqIGksfoQIw7u8NPjZBXM5gV4x3WJwxDHdYne3t41oDhY/lIjDupoH7x5/JeXGSGE4K/neO+zPyo0GndwCHyiFE7wJwDDm3uguRFlnTs0Gj1Ywyt/ifA6wDZ8u9+jyqBkcgeAcHsE1s3RAz1XaOx9YBW81j743yE0ah90avh/YmjsfMAh8L9zaFTeWAevVQWv9TuFxtYNHwH/kaFRaHhq+N8hNPIG74Vv0ubY1XHOd43Wp8fJCngXWJM2x8Kf+12j1R4+rfTgITPiELAmbU4RGud612h5FiuAdPCUg5hGvBe+SZuPDI2W53krEh/WK6vKiH8q/CnU6vV6KxXOwfbYZ8QhYE3aHBsacbDEZXwcse0hhEAphe/7rSvP84Cs7mYj9kCCNX3Amj4QzOYEszntfi834xTwwE54fa0W3vYQbm//0QRf/9zv9/PTV2qdXQ814iNCQ8OXQcpHABKffGXb3vb1sgH6qA1oYkT3y5dfAq/8ZWHmNUh5rLPZbAs8lne4t98qxwBglQ3QEkKgws2RtgeJjzV9ACDgfFWjDJ/GKp95pVQOrMc8mUzW4OSzHcs7OsMBy8kU4bUJjecvl5sEetVPiwbsWgkfFRoa3px5PcblclmYcR0aesaF187a+0EB3DTxCqBvCcpG+L5fGJS+Ie38sdeIU4WGOfPmGDS4/zatTG4muBN9x379swA+lAn9JNgYAOAKh74leLh2C0aUQ8NxXSLn342MeE/VqJp5vdR3guvQKIF70UsOPpQJKthsp680vHQcum2XtyCgbwlunLTSiDgMjzLiPTNfSG6wG3w9xvKMS7fDUCb4byFj7mkLSVtIACyAUMVIxyGKs6N0HBZByI1sIx2bv/3Nw2X0HcWnghHJolmy1JBNZx7YSm4afDKZbIGbMQ4wlEn283rGhWPhuC4sIVi/VFmQrYAojontFAlEcfYhIrZT4lTx1btGCsHT3EcphUz+QkS93AiL01SNQrYP55VZPRzf50bUgks7Bx+nWU66tX5kk6gTOlFmgJ79cTDgtj3FyU7zk3u6/hN44Ed1Rmx0jBGFmYdNHae+nM1msxxcx3gVuC0kiYryZQ+lFaBn3HIEP9SIBzklVHH+UvJDjUhjxW17WmmE6f6hRpThzaXu3n7LwbO2xXKm+ykvdRPcFiL/lqAVKbU2I9rkAFc4+U1A/rO07czBMxmRytvN3n79kjIcDrMY3ypnL3kfZfD/th9R6bIWXEsKQbS+dlXZYm2K47qFc7aQ+SoZBwP8VDGLfL5613vL564NlWu/Ni5nZoybWR2yZGwLWbmtrlOlATokNuAiXxmmEeNggO8r/FQxXbzVGrFzZ1kFbpQzvSr0jH/pZDGugijP6mZsNwWvNQAgSpKtc2UjtH6uZ6FuRezaWZr/rsvqegOjgohx+iWP87LK4Lpc75IVdXrI5ZxQxWBvN3CFk9V6Y0nr5BjHap0jBG7iMOZrbdUwoUxVge9LbuWsXlYdeKRUXgWuptNpK+0PiDo9+u3qD47mpseU+T2uXDUOyRFl8Mduu3LGq2L8EPBARcRhyNR2ia4/ZwwAz8/PLYDRaLTq8kIYVv9GZtfDHdfFDY+rGib4vWsjZTarY+4bZ/U6JUqRqIiO88pSdOmkP5lOp/lXYctsbBqB0VmThBKqGKfngrGIdhlhbrHL4ABRFOVhVwYvh2MTcNEWgCiAVxqgtTFCrBZys+TqjHCFwyIHF4Vr2ohxMOBT+oznCYhjhkLSW8NHUZQfq3RqcK1KA7S0Eb2eWtnpgsT9Ox9M1ln9b2nKRmj95J4/nB+Ak5/TK8BcCbovE7wuxg8B19pZBk3N5/OWkJ+xF0/I8LFwTe8Yy4M2ZZZPXTV0Fi7PupAWQm7PS5Pk1nFeESIDbwIPe1aAKf3AwWCwUosn7HSBYvNmFqpN4iy8KhuzZzkC1tsLXcL00tfQdy9d/tN92XpWlTT40l0nt/n84L8PaGyAlmlER72yEMWyZK6IuqoRzdffHtZLPlKKx+AGW9T3rz+PX7tvlVn9UB1sgJbZ6WgkVlGnl19rUjWk4xCoiGuKSXaXaSa4uBY0jfF9OtoAU8dUDS0d/8Kt2IZyPnCtkxig9d6qUdY5wbVOaoDWfD5vmclSGwHF/UKd4jDM4MV5wLXOYgDsrxqB8TITKYVwXez5V2yry7dU0OG4rH6ozmaA1r6qod/MAuszQmZbYx1Kv0If8h8VRqPRSilFJ8yCYel2fzm41v8AC+b/ZGc36zcAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADf0lEQVR4nO2YLXTqSBiGH/YgIiI+MSICEYFAIBCIiooIxBVXIK6oqFhZUVmxYkVFxRUrkSsqKhArVlRUIBAVCEREBAIRgUCMGIFAcE5WhKSlP7d/FHr2fI/KhEm+vO+8mZkAiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIo/1Mq275hr9fLAE5PTx/d++ePgwwg9AwAR1fXW6//Vrb2AIVwzw/KcyYI6H47rBTCb6y3cc1JzQf2a8SHCxfC4U68CQIGgyG19Bp4LFxEcM6V7ZOaT71uaJ9f7tyIdxfs9XpZHMd4EtJqNoBceJIkVEeXwMvCv4IRby70VNRHtzd4EgLQCIXx5cX6OD83WuV9C7EisnHPI39FvW7o344A+Gsw2ZkB1dd2/FXUw0Yb8VbEccwkDUlTt+6ZAnAQ5q2R3JnmnCtHvH87Yjyf4mb2Q2Lew4tOPze5JUkCgHgrHv5+dXaM8TzscglAGApwl4jQMxsjXgiviWHmLH9P7NdJQBzHAHz/8TsAg8EQkgmNtSh4nIiCZpAvd0lajGwKgBW3MeI1Me8W8FFeNGAR9wG4BjwJS+FPJWJuLXb4szzvBfky11y3CyOqJk9NK6xjnWPm9mfEq6N21PYzAL91BDxIBJTC++NFJTJeZjyPQHxuVg26tRkAy/kCAOP7GBHSlcPNLP/6Jyyd5czk9zoffcFJsD9eVACO6Gdwl4j7wp+6zveFqd8imcR8q07K89Y5QhFiLN69VaFIw654tQEF941Y8Fh4FEUZyahsiy9AbgRLmLtFmYACPwhYrpfImhiiqJkNh8OdpOC3917YHy8qT4nvdDob/UTyES2MCCSfF+y9DdBiPi+PZ87S6XRyI3fAuw14SCF+dPUnAHa5ZO4WuNsbYFoa8Ryraa+M/z/T852Z8OZX4FcUO7y4ma//rWRdZDwEoBhn42+mYDG+IIoiMIbpdEqaDqG+zSd7nq0lAPLd3cHxBYdzOJxDerjCfV9hl8tyU3SfYsRbrRbGGKy1iAhnnYuNb4TPZKsTTRRFmYjQbrcBytfhNoAwrCLXeeDqJk/A+MCRpitEqoTuEBHBrFMAsIuJ8FMKdLvdDHhkRNKoEoYezuVpqI3yDdHBcf7xNBgMgN0IL/jUQs8Z4a/ngGb3D2A/wgt2UvChEQX7FF6w08LdbjdzzpV/hOxTuKLk/Afj6IX8CkbSogAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAB8UlEQVR4nO2WIVDDMBSGv3FIZEQEAlkRMYlAIpETCARiAjFZgUAgKpAIBGICiZiYQCAQCCQCURGBREQ8gURwN8RY1/Xa0ZZ24458rkvvLXn///4GPB6P5x/TWfcGyjIIo4nWKnk+C08a2ftGE0XaZnZ4rRTOCVophjejSRO1/6wDsooDDK8uAOgPTqeNaMARf7IBacVfYkvXBAA4keS3vPX+ca/yeTab3XqzROchAFrPFXcyVz69boyp9R9rd0BeuO0fHE2CIFhQeZkjlNaIc/SPe52qYbnWECwKN3mLsdYSxxYnkrwfnYfcjYY4EZTWybo4hxOpFZYrH4G8cMtavXd0kqzNHAEB/cHpguIAzs0bVGc0VjoCdcPt6jJCbRuUUhgTTBUWSXKhzGgU7WktIVg13HZ3PnkWQX1bG+DjdQxbe7nvPzw+QaoZy2itAXlhZK0lbeXCz1nG6tfjuDMIDxfqRdf3nf0D9eNofLyOl+6zlREosnrWyjP10xccYwy3t6NSVi8ajSqXolZHoIlwW2b1wtGoQCsOKPsdL6tgtl6ZcCtLKw6QtxgLiKgkjKC+gnn1fgq3srTSgOzBsuGXDjeIeX66r1QPqlu9iJXcA7rd7uS3YdUWK7kK7+588v4+Vc45wYk0pqDH4/F4PB5PXb4AY86TPCwQYNgAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADO0lEQVR4nO1YIXDiQBR93CBOVESsWFERUVGBQCAqEAhkRUUFouJEBQKBqEAgEBEVERWICERFJQKBQCAQCEQFIiICEYFY8cWKExXM5ES6aZID2oTtzN1MniEkP4/9/7//sgEoUKDA/wLTNINqtRro5Pyhk+y7EE/89q6tlbusi8iynagzQhCGdr+kixsIEx8NH3VSAtCkgNHzOOCMQQgCZwycM3QerJOlatlOEC+slBJC0Km0CeRWQHxha9cD5wzT8QjTMXDf6YFzFsXkUcToeRwobsWh0Gg0gsVioUVhuRSwr+NCEPoDO0yeMZyqCMY5BBGm4xGklNF5IoLv+5Ev7Do4SWm5ChBfnDV4AICwCBR2ae16f13PChIClUoF/YEdfieCYRhYLSbYXPswDAOm2URtWc3Fr/DpCOwzt/jiBIVdBsLEq5XLKFZdF4Lged5Bvn2/q4qpPokI5Z8X6PXaqD1ZMM0mGGPw/XyJKxxVwCFzE0QgISCI4LreXkWoxbuuB8/zQFv3y2ZplhGMeu2oeACwW41xdmZgOlmh0+2DMQbnqpcYjzw4aiST2TJwXTd6/Nx3eonrQhCICM1GHYzzqCiq4/PpSyndcc7ZUb64IswyAqNShZQSTusNjncHxhiu6hf4tbsFagAqA8AdAJUByuVBZmM8esPoeRzEE0tLXSXL+bvpvXeciEBbF51uf2+8Oj7ElyiCaQbNZhvzuYN+u4rhyxSP1wwVTihfngEAWLOLZsPGYvk7cwGOjsBXpf62mSTkKiXhytxpMUvf90vzuQMpJc7lCq/dHYYTgfrTOVrWDmwrQfMn+FuWNXcAn5jg22YCgZsosbT5fUh9VrLsm4DzcK4ZYxja/VLtRgQ6zbLlGEGtfofN2xJKFXReBttKAEauAmSSjGU7QRapp0ej1bpF2lNU3Ff40qMBhArJlfk7Mu0E04qIS9113cROcF/8IQUN7bhZ1vfuLNM4NXEFLSRps4w/BeJxWRUUP97HpwNaXobSZqme+2lkMUvFe4xPB7S8Dh8ajfU6GWc5sxIwS5x7BZA2yw8zvDzKpwPaJZUHh0ZjvV5/+/r+iX+EDo1GgQIFChQoUKDAd+IPYHsKaGBGqAsAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: -10,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACdUlEQVR4nO2XIWzbUBCGv0wBBgEHDB4weMAgIMAgoGBgYLCwYCBgYGAgYGAwoKAwoCCgwKAgYKBgIGAgYKBgwMAgIKDggQADgwMFAZU8EMXtJk2L0sQO8CeZWGfdu9/3n+5BQ0NDQ0NDQ8MRsdYWdZ/hX7SrSCIiWGsLEUFVcc61qsi7C2+qSuSca6kqIlJVyp2oTADgpP78lkosAJQWODUqt8Cp0VigqkSNBRoLPFtgMpmczGJ0NAtEUVQA+EGPfLXg+4/7Is8yJtdXeB1TijAcDmudCwfvgKcLiperb75aAPDl84B0sSzjvI4BNt1QZ0ccRAARKQsIE0vbC1FVkvO0jFFVlsuNADdxjG8MXuf5qUuIg7WfiBSq2rLWFuL3AdA8Qfw+NrCk6d02DlXFWotzjuubKQCzu1sA4jiu1BJHmQGaJ0TRBWmeYAOL7/sAhL23pSUenzwAbm/G+L7PfD4/xlH+y6vV7g6mhZvP8Hv9P963HyYA5eUn9wd0jCGbDRGR7Q2RNE2B+pakvTugO5gWEmwGWScIWavy9DAhiiLWZyPox4gNWNzNNjHGMOg64vtN8X7Qw7lF7dvh3gKs70csVTHnE8L37wDI8inrsxFiAwDUregYQ9RO6IVrxuNx2RHW9Eo71Mne6ltrC1WlHQ7xROgYgwQGsQE/Ly8BiD5+QldZ+c2g64jjuBQhTdPa7wavHoKeCGtV8kUCgPF+0TXCMuuiqwwJDDab0Qt9RqNR7QX/zd4COOdaIlKsVfFEeFxtit/6u8uCPNsMxm/T65MrfMurOkBVWyRXAHjmQ7nEbP29mn892cK3HPSAL6+8p+DvXfgNhSH7vUzsaSIAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAB+UlEQVR4nO2VoXKDMBzGv93tASLyABERFRMViImJCMTEBKJyEjmxB6jcA0xUVlRMTPQRIpATEYiJigpERQUiomKOiV16XAsU2gS6u/wkxyV8/3w/Ang8Ho/nfyCEKOI4LmyueWNzMVcIIQrOOQghGN3dY7tZYTqdWvn2WxuLuOIwOAD87LbQWlvb4yoH0BQ8yzKs1+vK9+fzeedWXJUCJkie53iKngEcB9da4+V1iu1mBSklLlXjKhpQ5fjHYoYwDI+CA8DHYgbOOYIguFiNQRtQV/Usy6C1rg3epEaSJJ0yDTKANo5XBW+rRhcNelWg7Pj9wyOA5iCHVT+lxnaz6qxBLw2oclxKedLxtmpcooHTAbhwvCm41hqj2zU+1W7YAbh2vKo9aZqelcXqAMbjcREEQavgdfd4kxrG8XJ7zg1usPoTZIxhuVyCMQYAIIR0vsc555BStqp6kraveh1WBmBOHvgbgnFcKdU6eBfHk3R3k9r4cFhSIIqiIkkSMMbAGAOlFEqpfZDZ+xu6qmHL8VNYaQCldH/yZQ1W318ghLRWwzhe1sBVcIO1xaMoKiilAACl1H4YRg3zbDKZOLnOzsXJBmYYeZ6jSY0hgxucbhTHcWFOXgixH0YYhkcauK56Hc43rVKjrMFQwQ29bm6GoZTqveoej8dTxS9CKs2JnYTOpgAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAB/0lEQVR4nO2XIXPbQBCFv8wUFAQsEDAwOCBgUGAgUHjAP6KgoEAwoMCwUD8gINCwoEDAoFDAMMDAoMBA4EBBgMCBws6opJcqjjSjc0+OMqMHPfbe7btv36xh0qRJkyaFUZqmtda6ful7+OgqVKEsy+rZfMHxxz3WWsqyZLfbBas/lN6EKmStReSBxbv3AIjcE8dxPXYjzrpYmqbPGtNa13Eco5RCRHh7PQMYPRHeF2pDfbVaMZsvuLvNEBHajPi+/UoURaMzwnsE2lA3xlAUBTefvwBwd5tRluWjEUVRPJo0ttHwvkAf1D9+ugF4QoSIoJQa3Wh4Hezw74t6mxFjywivA9frdS0izOYL4HljTdRfS0Z4HdSFf1/Uu4joMu4SRngd8CG5ro+/485X7Iv6mDLi7MLL5bLuesXXlBH/XbBphIgwVEa47+/3ew6HQzAjghTyGY1zMsJaS1EUGGPQWrPdbsdlgNOQGZHnOUopkiQBCEbCYOFybkY0UW9ulkmSUFUVxpigJAT7N3gq9zrW2tqtxdZa4Ni5Mp+i/vDz+Pc3kOc5WmuMMSiliKIoyD0vsnD4jEYb6q5p91lVVcFy4KKrZx8j2lCPoiho000NNgJt+rb/dQUH4OloOPyhHfXNZjO+RSiUmmF5iv9Qr97UixsA/0bD4T9005MmTZrk9AfxZfjYs3gbXQAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 25,
            available: true,
            name: "Slag Grinding Plant",
            colour: 19,
            fundCostMultiplier: 100,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [7, -1, 0, 0],
                    [6, -1, 1, 1],
                    [5, -1, 2, -1],
                    [6, 4, 3, 8],
                ],
                [
                    [7, -1, 1, 0],
                    [6, -1, 1, 0],
                    [5, -1, 2, -1],
                    [6, 4, 3, 8],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "SLAG",
                    },
                ],
                production: [
                    {
                        cargoLabel: "CMNT",
                        multiplier: [5],
                    },
                    {
                        cargoLabel: "FMSP",
                        multiplier: [3],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB4CAYAAABCQPQeAAADkElEQVR4nO2YrXLjMBSFz+4UGggYFAQIBAb0AQIMAgMKFuzj7IMUFOwDBCwsKCgoKAgINBAwCDAQCOyMFzhXkRQlzY/t7M6cb6aTxpFlnaN7r2QBhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQ/4Fvt3hoURSNMSa4prXG6+vr4OMZ9IG+8IfJBgBgjAUA2M0IwPBGDPKglPD8/hH1egG7mQAAbP3Wfg5sxF2fnYtwY0wgXGsNPwWUUgCm22+tEcYAWuumbyN6MeCY8PF47NrV6909cr1WCqb8A5VVAPo34nuXnRVF0WitGxH+MNkgv390v/vi/Qiw1qKuawBAnucAAJVP27+sgsoqGGOgtW6Komi6HHMnEXBqqJdlCaAVL/lvrYXazropAT2eu/ZDpMZVBpwb6iLcVCMAI1hrnElKTZwRPn2nxkUGHBJerxfBoNuBmlaAm/G2yiulYK0F0Fb83YgmwOcKtn6DrQFgjjzPkec5TNmmRks3EXHWDYeWM5nFer1w39vBGXy8PzthEu4i3jfBx13/XLlrejxvIyCfBvddu3yeFAGXhLoTnhLm/e8bsEsHMWniTOgrNY4acGmoy+5u95RtfreVPGjfFrr9T2dUPt21zarOU+OgAXG4n1LVjbHbUMzcjPiifOFxX35kpL4DuzBXWdXZqnFSrmitG3nwj5+/8PT0hNlsBgAuGparLAhhESFGyODDwSIohH5KJPuKakZg8rY2yD6irusgbQ7ViLOKoNa6EeEvLy94mGzcrMvgZOB7213PCJVVLmRFpAiMDUqlTcoAN8bx3Jnw8f7sniPFcrn6DDRftH5qrZvUzMbVfS/fIxPsZrRnlERCUOk9c1LFM2WE+20bGYvFIqn1qp3UMSM+5kuMf+u94habkYoEMS4QGRnip4wzPmFEPOMxnbxc+EYAXrG6IhL8e2MjADjxqfRQWfWlcKHTt6tURMT5fSgS/KXS68+1TdUHvx9pe+5usJf37NiIeDbjPI6rebwa+KR2jtZaGGMu0tLriYssnz7lyGB2VwBAIBTA3pLpGybtgTCKLhUuDHIk5iLibnv8dWSt/6Iftyx2dTgy6KGo21B5OewT14AU1854zE2OxePUiAtlvCm6Jse/4iYGCJIa/orh06dw4aYGCH5EiAnL5fKfGNugpFYN0jN/Ackf7Un+o0ftAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB4CAYAAABCQPQeAAADSElEQVR4nO2YrXbbQBCFb3sMDRYIGiwQDBAwKAgwKCzwI/QRCgr7CAF9hDxEQICBQUGAgUCgwAJDgwWGPkcF65FHK6mOHUlOz7kfsbU/s76zM7MrA4QQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHk/+DT2Ataa8vjJ9br9ejrx4z2A5bLZemKp+rZ72cAbu+IydALLJfLMkkSAIArAJPcH3v+hDYXouJWjhjEAYvFovTewxgDVzzBFYBNv1X9xhgAH8MRvS6khXvvgcNr1ef3M5jpFia5hzEGEhW73Q63TI1eIiDLslJEN8RP7gAAZvoaxE08AMA5h/l8jiRJbpoa7zIsP1Djd3+C6EMQbK09tQHBOQhpEFIhzJHIkH6/C44YOiKuMqh33HtfiZRdlHYz3YYJk7tQD5yDOEx/16RpCmC81LjI0GKxKJ1z1Q8BgpAYa221kzi8Vo6J50qbjJeIAIIjNi+PJ6dGEeGc68UJbzJirS2rcD3uuIiRUNaO0KHcNibu1206NcQ5Q6bGPydmWVbqnYl3SdpiEfpZp4pQzBzwA8AKmL9kDTtjpkbrBLmu6t0AmuF+bqdb7FZ2jDHY/MqB30C6tQ2bXbXiXGpc6ojGQBGvBbVFQZfILie0RZE4r3hwSH+eRIrgtnXlctXXqfG5q6MtT7UQAKcqH6FzXeewvido2yJe5368lpDnee05TVOkaVrdNM10CzPdSuSUDQMRnR6q0mC6rc71jTng62QBIHhcvC3jas9RMbsEHfKrwxrzfVazq49cfavcvDzC72cXnRBnB9YcATREC34/q4VrfFJIu8zb3B+QPtuGLW2/C72upEKe51cdjRdNsNaW8eJtOR2jL0VdAnUEtd0xutLt0h2PuWpifC+Iv9dOhkh48eCAFZA+21bRVVGL7R7Hant9XIbe/S6gC5UOcWH+5TtWq1U49qY55v70/qWjQd8G5Zhss9eXcKEXQ3FqAPrtTlX1tjpyplj2veMxvRrsOnYuLZbx/whDCBcGMdxXsRxSuDDoAtcWyzGEC6MsVIuIyd0oxe2tjLpg7T3jRjv+ITj+lXb2nk4IIUPzF0jkXlDAD+L1AAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB4CAYAAABCQPQeAAAEe0lEQVR4nO2YIXAiSRSGv7tCIEa0QEQgWiBOIBArIhAIRERExIqIiBUnVqxYERF5YsWKiJUnEBEREREIBAIRgUBEIBCIES1GIFqMQCBSxYpJd5qBJIQAuat6X1UqzNB0v//v97p7BgRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB+D/wx0cM2mg05saYhXtaa+7u7vYez14HDIXXqlMAjEkBSKdlYP9G7GWgVcJLByfYSZt0WgUgtf3s/56NKOyycyfcGLMgXGtNWAJKKaD+eJUZYQxoree7NmInHT8341prKpUKANXpBTM74bx7iFKKUqkEgLUWE3d8X7vOiK12+FKqlw5OaDabfK6eYhNFd3DEp/KAmZ0A8GNw5E24H1yhSllG7Lo0tlIC66Z6KP7s8w02UXT6Ra5NjdR2MKaK1tq330dpvMuAl4S7VAewEzCTGTZR/HUKtdqEarHI39dTP9MUssUwTH/A92OVwsQdVJRk7cx2jPhzkx81Go251nruhNeqU0oHJ0tBZ4EaAH7Wb+kOjtDlKWZ8R7lWRJXqnOkhZ3rIt1pmpDMitX1M3MFaC+DLQ5Xq2V+UoKIEYwxa63mj0ZhvouVNGbBuqsdx7MXfD64AuIkOOP/S5VO5zLcri00UAONZxJdmgZmd0LuA4dhwbeqkaQoPI0zcwcSgK8e+/22WxloN11nV4zjmfvDLZ4ITDmCSiN7FjPPuIant072MAOjcwL/xIfFowK/vR4zGfVrdabYOFJ6yiFn7SXypvtVd48UG66zqjl6vh51kgbrTnadQhYcR3cuI05+1ha8uDscAJJMZ523QlebjOEXfJh5ls+zqH7KM2Mau8ewXefFhqjsD3Irt7hmT+oHDYF1wxhhuv04o14oc/zjkYZptgYXoAICHWeSFO3EAg7v2Qmx5I0zc8ZmRpumbjFirBLTWczfw59N/aLVafvbdrA9HkTcoq1FI09QH6wJx/bTOCpRrRWyi+N6u+++c8GrlyYDb29usr0Bg3ohNS+NN24fWeu6E93o9atWpn3UXnDNh6bgbGKGiBFWqk9o+rbMCl+Ovvp0T3uv1AHxf7nNIaICP8ZXSGI4eFjRvtH9qrecrZ/bRhNCMMPC8Cem0jNZ6aS3Jz7a7Dsd4LhPyuMxot9srtb7rJPWSEffHQyrXeiFwWDYjXB/yxi2IzBmitfZGeONXGJGf8TxbOVOHRsCTGW/NhPwTYig0vA948avKQ0XJq8IdW30YWpURYVm4a1g2g0IVpdSCkFCc+13YR9iPa/vWY/FOHofzRuRnM1/H+dU8/C58OILFsgjvGWM20rLTNy5u+wyJy4ZmoQGwIBRY2jJDw1x7WMyiTYU79vJKzGeEe9AJZjd/bnilH78tbuudwF5fivoDVVDDIfk1YBXvnfE8H/JaPF8a+YUy/Oyuty3c8SEGOFxphDtGyC6FOz7UAEeYEc6E4XD4n4htr6zaNYQd8xttL/VpuDGaJAAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 120,
                        left: -31,
                        top: -89,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 26,
            available: true,
            name: "Soda Ash Mine",
            colour: 169,
            fundCostMultiplier: 180,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [3, -1, 2, 1],
                    [0, 6, 5, 8],
                    [7, 4, -1, 9],
                ],
                [
                    [3, -1, 2],
                    [0, 6, 5],
                    [7, 4, 1],
                    [0, 9, 8],
                    [7, 6, 5],
                ],
                [
                    [0, 1, 4, 3, -1, 2],
                    [7, 8, 0, 3, -1, 2],
                    [-1, 4, 7, 6, 5, 9],
                ],
                [
                    [0, 4, 1],
                    [7, -1, 8],
                    [3, -1, 2],
                    [3, -1, 2],
                    [6, 5, 9],
                ],
            ],
            primary: [
                {
                    cargoLabel: "SASH",
                    multiplier: 16,
                },
                {
                    cargoLabel: "SALT",
                    multiplier: 18,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -88,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -74,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAACk0lEQVR4nO3YvbHiMBSG4W93KECBC3Dg4IYuwgEFEFAiAQUQuAhCAgUuwAEFaMYb7B6NLOx7+bOZnXmfBPAP+BwfHclIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8JIQwXC6XIYQwhBCG0+k0LP2bv5b+ge8cDocYYF3Xcs7per2qqqqbYzebzSLXulniS+ekAafqupYkFUWhoijU9/3otW1bhRAG772+vr7emohVKmAq8N1up77vdb1e452fU1WVvPfxfdu22m63b7n2RRMwFbhzTk3TSJK896qqSn3f63w+q2katW0b97dtK0kqy3KUBEk6n8+SpP1+/1IMiyQgD9w5F99bcJJGd9V7L+eciqKIibH9XdeNzrX9knQ8HrXb7Z7uEW/vAXPBl2U5Oq7v+xiYcy4OAxsKaZBd18XqsH5hybHPIYTheDw+XBFvr4A0AWnwFmyaiDQw22dB27b0HBv/do5tt+9O+8i9iVglASYNPh/Tti0NLN/eNI289zFx9l7SbBP9KRGr9wDpNhEWdNd1sQryO50eZ8MlD/6Zhvj70RPukV9IOralvyWbN0YLRlIMNE1MWi1FUUgaJ/LZ2WDxdcB3Q0K6neKsB+SlLilWSPoq3Zb/I8lYbSk8lYi0AebNcGqcp8mwIWGeTcKqzwJzK8J83s9ngrmub/6LCjCn02nILzifLtNA54KWpjv/x9cB97JqmFormKlttt2WwubZJrjq02CurutR6acNMV84pQ0vDf7VZ4GPJkDSzdiuqmq0BJbeU+pzPpKAuf8FyrIc3X3ptQZ3j49VQF3XMdB7Gty7AzerN8HvFkbPrudf8ZFZYG4I5JYM3Hz0T1HpNhlrBA0A+OcPP7Kzg0PbMecAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAEAElEQVR4nO2YvXHrOhSE129UAAIUgAAFoAQFLMGBS1TgAhywCIYIGDBkwIAFcIYvuG/hA+rHlkXr3WC/GY9kiaKw5+wewAaEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCiLvIOa/LsqzLsqzP+s5/nvVFt8g5r+M4VqKXZVk/Pj6eVoj/jZzzajs/juNK8c8owstv3vwW4ziu8zzDOYd5ns/ejzGi73vEGNG2LZqmweFw2H29u0Xg3vzO84wYIwBgGAbEGDEMQ/mh+L7vEUJA27Z7LbXi4QJcy++tz/D6vu/hvUcIAdM0oWkahBAQQsAwDGjbFjHGUqjfGI6HRz6cc14BwHsP7z2maYL3Hm3bYlmW9ZZlh2EAADjnSgy2UWiaBm3bIqWElNIjS73KjzL13fx2XVe9/vr6ir7vAfwpAAUCQAih5J2/816cAXxvnme8vb3tMg9+FIHv5pddc85V4mOMCCGUfFvx9ne6hDOgaZpyv9PptJ5Op4cjcXcV2X0K6fsezjl476vuAigLnqapKpotBEUPw3BWCPucbuN30kHv7+8A8GNH/MgB7PQ0TWVhFEVo2WmaKrH8jL2OBQNQFcTe03sP4LN4jEhK6SFH3FWAnHPpftM06Lqu5NzGgPbmNRyMIQTM84yu6yqBtP0WOsY5V7rOYtEJhEW9twjfLgAn/iP5jTHCOVcJpjC+x7nB91lECkwpFfftwZcFGMdxzTmv3I9tfinSZpadtVM7pVQ+572vBicL2rZtsblzrooF8GfwppTKrrPdfS7tRt/h5uDggYUWZnfsQLPbFu2/fdza1b5O7MmP3d4OTusq3mcr/t5heNUB4ziuzDjtvld+uTuweBRPUd77q0VmYfcQD1xxQM55HYahslyMsWxnFm5HzKS9notPKaHruuqRdgdQTpD28ZKlbSweFU6qozAnKAeV7QS71HVdybftJIvgnEPXdZW9L+WXQrmL8F50Czu9ZS/h5MUKB4Dj8VgONfaoa4+ue+QXqA9CW7tfE032OgofKP54PFZfRsHzPJfnFnZ9m9/ta3YnAFAiYEXZTNs1XGIv4aSKAO0NfFrSirLP7bkcQPlzlrOA9raFs911zlXzgext8a94OZ1O6/F4rBZBkQDObMxs2n2ewumWS/m9lmnLs8UD/xUA+Bx8Nqs259by3CEAVNPcdni7V5PvHFieJR64MARtIWyebbe3/6uj3bdd/krsM4Ve46wAwGeuid2iiI0Gr7+W5S1/g3BytpCtGyyXjsJkeyT+za1rT64uaDsb+NwKY4G2hxrgd/fuPbm5oEtuuDXN7eDbOuFvFA8A/wLFMc8wXxamuwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 122,
                        left: -31,
                        top: -90,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAC00lEQVR4nO3WIVDjWADG8T83ERERT0RERERUVCAiIk4gKxAIRAWiAhGxAnGiAlGBqKhArDhxAlGxAhGBQCBOIBCIiicqkBUVCERERURnsiKb3nb3biDADrmZ76c6Sea9+b6X91IQEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREXl367u0XN+l5XuNt/NeA/1qdejBhQfAbscHYDQavSlD6wv4MfjT0xOeE2zuJ4kBXl9Eawv4t+AAvu9vPVfkDvD6IlpVwPoL1d6OUqAK/1/Ba/V9zwnIhjkAzt7Fi3O1ooDHG1P6Xh8WFz/fjNKtIr6X59W1+0kIwPQiI+4WhLFLsJ+/KFsrCqg9V8T+pNiEhn+CP60yri8h7hbYB5d0+rLw0LICjnedEmBy7rFVxLctAVVY3+tvftfBw9jl+pJG4aFlBUBVQpGcAPD5aIrv9bleHRMGAfZzwkPhMTxe/RR8eAXGGBaLRaNMv/2KEK9x1nPL3sGgjAKH2f0cgPHfQ6x3ynV2h7WW8a2h665Y2oKDI7APLr9/MpvwxhjiOG70J+nDC1h/oXy8MeVBDyZ7GWHo4nmGh/mSIPD568+MKKr2+nHnEaiCd49gfGs24xhj6PeHjef/8ALs0sXv/QFAetkl7hb0OvcYzwAQRSH7Tkr8OGB0NmB8u73ixpjNWFl23nj+Dy8gOS12Op0pAPF6TnrZxSQjkuCGfDauwocF8d6A9NOU9OQU2F7xb3sfAGttozPAeb8ob2edXeL1nHw2ZnKwrC5GKcnJjMUiw5iQ+dXV5vl6xeuDz1rbeM4PfwOgChCHBbOhxTq7mGQER2fYpUtyMgMgiiLyPOfw8PBNK/6j1nwGZxO3BIjDAoB04nC7Cjevepads1gsyPNm3/nntKaAWl1EclrsRFFUfn/IvXW1/5eiKCqbfttFRERERJ73FTzEDkAgBQHfAAAAAElFTkSuQmCC",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 27,
            available: true,
            name: "Tyre Plant",
            colour: 143,
            fundCostMultiplier: 130,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [2, 1, 2],
                    [2, 1, 0],
                    [3, 4, 6],
                    [6, 5, 7],
                ],
                [
                    [1, 2, 1, 0, 6],
                    [1, 2, 6, 6, 7],
                    [3, 4, 6, 7, 5],
                ],
                [
                    [1, 0, 6],
                    [1, 2, 7],
                    [1, 2, 5],
                    [3, 4, 7],
                    [6, 6, -1],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "RUBR",
                    },
                    {
                        cargoLabel: "CBLK",
                    },
                    {
                        cargoLabel: "SULP",
                    },
                    {
                        cargoLabel: "STWR",
                    },
                ],
                production: [
                    {
                        cargoLabel: "TYRE",
                        multiplier: [8, 8, 8, 8],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -58,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -58,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -58,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABaCAYAAAAIJFAjAAAJS0lEQVR4nO1bLXTbyBb+9h0DA4ELBggYCAgYBAQYBBQEFAQsMAgICHigoCCgYMEDDywwCChYUGAQsKAgIMCgwMAgICDAwCAgQEDAwGDAgACDnJMHRlcejWf048RN31l95/SklaWZ+b6597tX4xRo0aJFixYtWrRo0aJFixYtWrRo0aJFixYt/jH47b0X4MJoNHqJ4zj/99nZ2S+5zr1gNBq9RFFU+DOdTl/2Nd8vpywRvYzHYxAR/xuXl5eYTCZ7WWtnH4O+FpeXlyAiEBGEEHud6197Hf3/AK0AP2OS0Wj0cn19nf8pu/fTp09b1z5//ry3te3dA0aj0cvV1VXh2nQ6fTk5OSmY2rdv314AYDab4fT0FIPBAIA2wdlstrf17V2Ar1+/wuXqDCZ+c3OTf56mKZRSICLEcQyzJ3hr/JQq4HJ1m7gJvjeOYxARlFJ7W9u7lUEX8TKwd7x1V/jL9QGucDfT5q2F2HsVKHN19gXz70mSgIgwGAzyVJjP5/k94/EY4/EYdSpKHewtApq4uimEUmrLBF1VYDweA3h9RLx5f+1ydSFEwdgAFCpDXZNjQ3Q9x1HVVIg3i4BdXJ3JuAiZUcGwhSIinJ2dAdCpswteLYBrx4H6u2ruqL3DvnGUUvmOJ0mCvyZrfBl28zRrgp0FKNtxc9E+Vzf/botgj2NeM3f8r8kaXSKIfgSlFgCae8LOAiwWesLT01MAKBiVGQVJkmAwGFS2ti6y5mf2jjNxAKBeCAr0c03NcWcBuDx9//GE898DfPz4EcC2EHVc3RTMFMLOcRdxtVyBoh4gi+PVFeJVHhDHMR6eQlzfSnz/cVcQ4ubmplDbGUze9go7BeoSV8tV6RqrhHi1CXY5ZEkUhHClhg8m+TrEfbAN1BTZJ0RjAdj80jQFAARhiLVSXiFcqeFy+qocN3fc3nmVLpHKFHEcb5VWFsJXLmsLYLu+r+Q0FaIJcRsqXeqfyxWSZZK30Ty2i3iapnl01hLAV+54oqeFXhhHQt2I4Nfi1xIPl1eF9TBMYQHg8m/9zOdh8T6vAHUaHCLCWimslcTTqrhQnxDAAlEU5eOMb7uvIm6Tt3eciXdJZPd2ywWoanC4tHEoHwQAAuBBiYIQ/NMWYrIAvkQ6hb58lwjC3Ymb5KuId4kQhCGAtFyAOg0OAFxc/AkAiOIeRn/+gQPcFYToWiFpCqGUJulz9ZywJ9TNnoK9qJp4Np9aFKJ4SwApZeEGl3kBgHzUC+rTUUEcWwhXahCt9TMeV8+F8IS6y9yqiC/nCz1IWJxjSwA2p+8/nrIriy0hiAjTuf78enZTiIy6QrhQtuMMn6t3J+tS4vHzIwbh9hqcJiiEQCfoZELw5EUhzE7Pruu8cMAjRL+auEm+bMfZ1X3EhbrH6fEQ86fi+rwC5JNGsXb47LotBHuE73DTbkhMIdJ0pZuWCuKAv5zZrh6EoZP4bKnn15FtvDD4BGBweasrhN3g8E+nWSL2EmdUEbddnVPMJs5jRlEPShX9rVSA49U3AMCtunAKIeXKa5YmEdMsOSqklBiPxwU/8pWzqhxnV/cRr/p2eUsAJnXQC7FUEsPDALd391BZDrMQQjwDKDdLALlZTudFYeyDkF1znFXk8wCbeBT1AABpeluY2ysAL2ypJHoksAQQBIRjSwiehM2yLCJ8qFPOfDluu3oV8clCK/Xv4zVMeFOgR5vQYXWDgHCYpQbRp4JZ1o0IYPslyEW8KsdtV68izuMRpeUC2OXMvEYB4aCnB2SabJa8iKryab4ElRMvz3Hb1auI83iVrTATHqWHAICT8D67qs/2YfUS7BFEh7XKZxRFtYhX5bjt6lXEeTwV8no8AsxmMyil0Al0izu91w+cHGkh2BvMfA+yxQHl5fPivIfBYIDTi0kl8aoct1FFnMezI9ybAiSKBFiI/0Qivy8/zzMEGB6ucHuXblUN03q6JBp3blWuvmsnuPXlKH+NZe5klwQ6AaETEC7TQ1xm6WEuwI6I4WGAsJMUxsl3sd/PXf1ptYJariDUPc77GzHtnTaJp+ktJosQk0WYj9l0PK8AfPOH3gPOjp+9QphtLouWC2JUDVOI/POShZo5DqCQ4yZxfYLU35xM1RyvUgCTSJIkGB6unELwvVLeQ8p75xi2EHzuX7bQshw3ifOOM5qOx6g8E+TzgeEhL0QLMZs9QimFx5V+tfvvQE+olMontYVgnPfhbVmb5ji7et1OUClV+LrOK4B4vIMAIOmDUwgp9UQdw1yIKKvvEkIcbQlhomnn5usEzUOSsvEAoPdwh+XBh8I6vO8CPRJYKukVglWkjnZ5Lp8cEVw2TSFMNO3cdu0EmTgACCIsUdwQ77vAGoAggS6gS9jjHfok8IjNw0IIrJeZN/T0dY4Iu38Q4qgwT9POrWknaBPnZyr7AIZUEiKLgiQ8wDFpITgiaDDIUkJ3gkJEetEdd/+ghdhEQtPOzdcJ2uP5iAM6epOnpPDtkLcRUpkIADBf9oEeEK8e8tQwERi1No+IaFuI8983i23audVxdZs43y+lxKwbAt1w63nvu0CQlTome/8YIqaHPDWezfuzvkBHRFkn+AwiysvZW3SC7Ee9hzsn8eunToH41dVV9bfDaZqiZ5B3wf6GyITr/EB3gpmR9fte4k1znF3dDPc6xEsFQAl5Tguz/bUXazZAphB5OJcQb5rjuas3JO4VgA8u4q1bdehLS5hNF2gcoDg6wePDAMgShzvBpmd4Za7elDjDa4IJDgBo42MweUECQXbffD5HFEWOiNgWgj9v0gm6ctzl6k2JewXg/5w0HA5fWIgBHnH/uOm7pZIIssUP1kuI1RrPWWMkpYSvEyy8MDXs3Owct129KXGvAAxbiKP+CgkOChHBvyVik5NS5qnRtBME3DnOibdrqPtQ+TLkiggAiBz3EhHUj78hAMy7PURRVBDCRN3OjY/QZt0wvwa8njij8SAsBOfz8XqFpZKIzr/oiLibbN4jSGC67uYk+PcF53NZSVyn0v6IMyojwIYdEbcKQBg6IwJA7hHT9eZXWZm8j3ie49gfcUZjARi2EGXlE9BCpGmaOzpQbFkB/FTijJ0FYLg8IgFwTP5myiYO7D/UfXi1AAxfarBHMExHB96POOPNBGCUCdHJzBB4f+KMvU9qVw27AXov4oyfNjkL8asQb5HhfxY32P5CtG6IAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 90,
                        left: -31,
                        top: -58,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -32,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACgElEQVR4nN1YuRXjIBQcbQW/hB+4AAIXQOACHKgEhQ5dgktQqBJUggIX4IACHFACHbDBGj8dSAgJ7H2exOYU8GeGA8gMZrbMbMd5Qgg71+ZnwMyWiCwR2bquLQAIISZ5PwsX/bqu3yzw5X0TRWwDR12lVLAtM1tjDACAiKC1Lnx5sWNIiT8xlYUQVmsNrTXm6DvWNxGBmQd1fHnfQnD1+xFnZns6nUBEaJoGUkpordEvd9FlZiilCiKyAGCMKV75kzrpp5UIYxPrG1hVVXZc7tJCiIG++6zo9/FfesBSxB11D4cD2rYFEWHMCKUUALy17Yu4m3gO/cd41ARSynd0rtfrJOL9tJRykRFuIHOsyIEtW+xglWIjHirv6x7IH/GQR63qLCbiS+WpJ+pDrEf5+pgwIDbic+mmabwrvkujSO9RxbhzRxkhBIwxbwqVZYnH44G5ciEEiAhKKffrNVhX/3a74XK5RC2ClNK6CVRVha7rVo+vLEt0XYexIQcZEEq7zl4HpKhdJVajuTxqMNg5TfvS5/N54Pi+Ae/V6Nz49npUVVUW8HhAP6Luf6qIr9HoEiNSelTbtjDGFJOP0L8TGo7H40RTruHcEXavRvvlPo/I4VGLuhszIrSPb9GoY5XWOsiIHB4VxJLGx9hzclzjEak9CtjwHrCENRpdivgaj3AS631zV8STLkBIo8/nEyn3cQBRHuVDdgbs2afXlLvF2KrxjzEg1rVD5e4Q43atrUfr5Ax4/c6eI3LfNWKR/Hq6dI7Yw4g1d40tyPoet4URyffxALI/SPY1GuMRLuL3+z3K1WPx0RfZFHeN1Pj4k/Seu0YOfPVNPvau8ZOIuWvkwF9Eyw/RyR8waAAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEkUlEQVR4nO1YLXTiShi9vINAID6BiECMqEA8MSKiAhGBWLFiRMQTFRURiIonIioqKlZUVCJWIFZUrIioqKhAIFYgIiJWrFgxIiIC8QlEBOfME0tyhhCg8Oh73T17DWd+mLnfnZtvfoDfeBuQUhoppfm/eezFaxCVUhoiMkRkRqPR2xXhlERtIYUQJggCE4ahISKjlDJvxhGvQdTzvFLIMAyNLWwQBEYI8TYcUSVyKqJVIYUQxvM8EwRBWa4KLYQwQojaOYQQR7ulUa0oBkqSpCGEMIPBAESE8XgMIoIQAmdnZ4iiCEQEu93zPCRJAgDQWm+Mbc+htQYA+L6POI5RlKWUYGbY7ZPJBMxcBIskSRpF4EQEZkZwdY2bcLh1zm1o2gXP80wRQBiGZjKZIIqiNaJJkiBJkpKo3W4TlVKagmgVzAwp5ZqQvu+vCb2r3YZ/McR4dHdo3PUCaK0PInIIURtEtFPIfUJXx2ZmZNn83wtARAcROZSoTbgq3CFlABBNGABHB14rwDHW3Ee0DnUO2FUu+jMzmLkhmjB6iQYxl4lvPp9j/Ckqy5exj+ZoM8dVsdbBTk51yWhXsrKJrn63Tl5kcyFE+f9qcrXb6xKqaMJwm/BOXWLg9cugP7kR7u4+4vp6iODS3yvAXgfsKxc7g9Yay7MrtPs+3ud3uOh7pu10Mbx52CChtW4QkWFmDAaDjU+JiDCdTguBa4PQSzQIMPP5HE+PM+hUA1cRnh5naLdpX9wlXuyAbSs+nU4hhED+ZwjqOsifQ5yLJTpNgJwO2k4XAGqFKFB1xK4t1AYRGdnMcaZuMZ/P8V6dY/blOyaTj7i5vX+RA9Y6HGNN6fom7ymIvgsAYJ0CAPLnEPPOBf7uPQEAtrkBAIIgMFEUre3x+yClNMwM568x3OUMOTdx3j/D/SQHdR1knwO0+h8g+i6eh72tY240rE5icF1345svhLCJKhUanWosFoyme7kmBKcZWl/vS0fEg2gnmUPw45A2xGTyEa3+Bwwcjc/THC0itB0HevIE7/YW09tb5NnnlwtQnWT1W2tNpZTJeldwvj0DAAohOuoaf85jfO244DSDl4aYdu9BXQezu8FJBCj4MTPa7g1yZizS73BaM2T5OeRlgDRO0Pw+2vlJ/bFrAq11Y7X1bA2e0wxZ7x2y3juIrkC7TeA0gxDdsm9y/gDgx2dxSqz4NRbxB4hWDKc1w2AwhNOaIY0TdF25d4yjV2P5AONHCgDwre0DABZZBgDouhKcZlhkGdqOAycdI0kSeJ6Hx8fHkzmgDoVrX5pIjyajlDKdTgdCCMRxjHjxYy/uuhLOtxHiRb8MPusGyL/c1O/nqwuNnfzq6t4slFImCAKzfIAJgsAopYzneeUVl4i2XlXrrtM/zetQFUqpMvjexcPWu7uN4o4/Go2MlXA36n4q7FrxKmwH2AJU614TO3eBY8DMjX33AFug4ihto67ul4C9uoUIRXlXn9fEyR3wEgghypcjZm6sLlmFIGW/os8vherjZt2K73oAPTWa+7ucFtsOKLYrXnqI+WXwX674b/zGOv4Bcs2QVxYqyw8AAAAASUVORK5CYII=",
                    },
                },
            ],
            type: "secondary",
        },
        {
            id: 28,
            available: true,
            name: "Vehicle Distributor",
            colour: 207,
            fundCostMultiplier: 8,
            probabilityMapGen: 10,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [1, 1, 1, 1],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [
                {
                    cargoLabel: "VEHI",
                },
            ],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 59,
                        left: -31,
                        top: -28,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAFW0lEQVR4nO2ZIXTiShiFv32nAoEYERERMSICURERUVHxBKICgUBUICoQFYiKioqKFRWIiArEiogVFSsqEBUViApEBSICgYgYEYGIiEBU9ByeSBMCBMruQttzXj5FEpjJvXP/mWSAgoKCgoKCgoKCgoKCgoKCgoKCgoL/Ed8+opPe42CmiwMARuOA1lnjQ/rdhr3eSCK83+8TRRG+72PbNgC6UfkSRuzlBpaFR1FEGIZEUYRz6+J5HpNgjG5UAD7ViJ12vE54llq9iTcaE/hDoiiiWq1+qhE76XAb4QCapq2cj6II4NOM+KuO3hO+LFjTNIDcc+ftq08pjT/q4HdGPCEMw4Xj5FzyvaPjk7Q0Tk9P8X3/Q4z4rYY3CU/E+b4PgGma6XHyGRaN2JQWgKurK6SU6Lr+uQa8J3zZBGBFTPaaECI1arkNmAuv344AeO5UP8eAP5nc8kYX4slOCLH2GFaFX/1bQhcHHB0d7c2Ag00Xw8mEcAJKqQVB198dPM/jefBIGIYr9Z2NffK7ZbHJcRRFdDqdjPBRKnw4HBLsQOQmNhpw1fUA6LRPAFLBnufhjcb4vo8QYiXCQojcsoDFia/VauUKv7+/B6DRaOxE5CY2GtBpW0yCca4RMB/F5ae8u5/dhWuapqWp2EZ4/0khDYmUEqXUzkVn2WhAIrTTPllrRDbiSTKWa13TNEzT3ChcSknvwaNcFkhDriRnX2w0QEqJEILnwSO+79Nptzca8dC7A+ZPd78z4j+6Dcrlp1S8lMZ+FC+x0QAhBKZpctvtAQdbGQHzut+mxptn1xxWLKSUHy4e3jEg4bBioQLF00CxjRG1k2OArWq8XBZpP1nxulFCKYVSisvLy5njOHtZCrcyIBlRFSim0wjLsngaqLVGuGMBkDvi521noe28eteNEqIcn7v325jBkFYrmrmuu3MT1hpQr9dn6U1mIqkChWmalMtibSIO7fUjDouis6MupYFulDh7bfBzes+v/jm+H1FTbSq31wghdp6EXANardYsu64rFRCGYZoAANuy03NZIwCE8Aggd1ZfV+fJctd9OsWqlDjTGrwMjmheOKmZ+yiDFQMS8cmjr+/7KwmA1VRMp1G6agDYtp07qyefH6Y6D7cjhF1npALuuj6lgzMAOq9lmkYf+/s8RR82B7iu+63Vas0A+v0+ANVqK2fEghUTbNtO9/3WzeqJeADxdv7QNsE2GQ0fCYYeP86P9y48IbcEsiYA9PsuEBuRIKWRWxpZ8mb14dDjJVC8VOoIaWBoJQCC8IVD2+TQNrno+TzvWXjCP+suuK77TdM0NE1DCIEQgn7fxfcf01dZKY1YpLG4nC2jGyUuL2Lzku+Xxj382zaD3oAgfEmNCO+6aTI+go3LYLLsZNMApPHMK40sUho4ThvX7cXtndUY1X8hbAP5GKeKqYdyexiWzdAbAqADQoiZlBLP8z6+BJZZZ0ReaQArLzCP1w1ujuLtrUAa1F77eM12PPLDHhCbFYYhLyett2OZJG+vRvxRo4kRyVIZRRGmaWJZVvpZSol7VsOS8b6A8bacRb06/ddm+kzQfRYIYz4pRireARj/iF+F9VoXPYjfMqMo2rkJf9XgshEwf2qUUqIbFTRdX3goGhyc0DTGaUqklDwcVFfaVoMhevCWsNopbreDUuprGZCwXBrLuz8wX84qzbtZTffSBCil+OXpHDZqqMGQ6WRCWdfRA5dq7RTnJt4m+1Il8LcYVWd2ak2AOAFmcMNF4KAHbrzvqDWZDm/2Kjzh0/6TM6rODKCsx/WfjPi+ov5lMarOzKg6MyHEzLKs2fu/KCgoKCgo2BX/ATYGle05JfwiAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 59,
                        left: -31,
                        top: -28,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "tertiary",
        },
        {
            id: 29,
            available: true,
            name: "Wharf",
            colour: 37,
            fundCostMultiplier: 152,
            probabilityMapGen: 6,
            probabilityInGame: 2,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1, -1],
                    [-1, 0, 5, 15, -1],
                    [9, 15, -1, 15, -1],
                    [-1, 0, 5, 0, -1],
                    [15, 16, 11, 2, -1],
                    [27, 27, 19, 19, -1],
                ],
                [
                    [-1, 14, 1, 14, 2, 19],
                    [-1, -1, 10, -1, 11, 19],
                    [-1, 1, 14, 1, 16, 27],
                    [-1, 3, -1, 3, 14, 27],
                    [-1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1],
                    [27, 13, -1, 7, -1, -1],
                    [27, 16, 1, 13, 1, -1],
                    [19, 2, 4, -1, 4, -1],
                    [19, 11, 13, 1, 13, -1],
                ],
                [
                    [19, 19, 27, 27, -1],
                    [2, 11, 16, 12, -1],
                    [12, -1, 0, 6, -1],
                    [0, 8, 12, -1, -1],
                    [12, -1, 0, 6, -1],
                    [-1, -1, -1, -1, -1],
                ],
            ],
            primary: [
                {
                    cargoLabel: "ENSP",
                    multiplier: 12,
                },
                {
                    cargoLabel: "ZINC",
                    multiplier: 16,
                },
                {
                    cargoLabel: "POWR",
                    multiplier: 14,
                },
                {
                    cargoLabel: "COAT",
                    multiplier: 10,
                },
                {
                    cargoLabel: "SOAP",
                    multiplier: 10,
                },
            ],
            secondary: {
                acceptance: [],
                production: [],
            },
            tertiary: [],
            placement: "on-water",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 40,
                        left: -31,
                        top: -8,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 40,
                        left: -31,
                        top: -8,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 68,
                        height: 93,
                        left: -35,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -35,
                        top: -15,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACQklEQVR4nO3WL1TbQBzA8W/3KiJOnKiIiDgRUYGIqJioQJyIjKhAIBARiImKigkEAjFRUTEZgUBUTCAQFYiJCUQFAlFRERGBiIiYiOh7N1HS8WC8NyCh7O0+71XcicvvX64By7Isy7Isy7Is6//T2nYAD0VRZAB839/sjcfjxuJ8NwXQLsbzHZQDabnea+cCgMHkjDAMG4n1QxOHPod2McmBNJ7vbPaUA3lechNNKX6uAPDDkWni+VubAO1i+jvrpNMS+ncFOL8qyKNLpPJYHXdRssNlKejqIbNkWHu8b16A+6MO6+SVA/OsfJT43PEoioJ2d8By1sw90Mihnh4b4boszvY351cdrxKu3vM8fzrxprp+X62HV4k/9DGNn9VxHX8hOdp7k+ms5SFPJS699V58O+DHct3ybXf8oVr+BUK1YDU/3ayl5yI9F+dqyjDIybKSPC9Z9C9YDReIU4036ZO7AZelwO0dkKZp662TB2jXdZAQEpl9x/dBB5rpdA5SAjDrXSAHHuK4iyc7zN2AZVHQVpr0etxKk2FdYTzbqyq+u7tr/Nsb6EcA5Lmk0ynQWt+tcwDOTz5tfdSf8qogRqORSafJZi3DAQBBEABw/fUYYCuX2996cTB+ODLRDlQFkOLx21QlPrtZ0hXtd5V45cV3gBCCJJkQxzFKKQB6vR4Ah4eH647vfyY52mt1/1Ccf14YT0x8MjVSSqNcfv+UMmE8aeS7vQmvHsvFz5UZT76Rpbcss6yxT1bLsizLsiyrZr8AhH/ymetw/88AAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -40,
                        top: -12,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACHElEQVR4nO3XIXDiQBTG8X9vEBERKyIiVqyIQCAQJ5ERESdOIBCVCEQFohKBQCAQEYgTiArEiRPICEQFogJRUYFARERUICIqEMzsCSbpXTu94UoCiP3NMAzLDG+/feRNAoZhGIZhGIZxMaQ/0tXrqT5FratTFDmU9Efadt1366vpdWn7rJT1w//jo+BCvl8r2pfSKxzA263YLe/yz0K6COliPfykW98wHo9Luxwu4gCEENi2wE3u2S3v6NY3uKsIIQQAj+M+URSVcghnvQR8Fy09i4rj4DgOm82G9EXsv/MVAPP+DVI4dDodgnaoo0m30HlwliGYBVcWSGmxWG8B8ILe/t3z8uCzrUWaplSqTdbRqPD9nvQAsuANzwJgsd6iLFgmWzbf5wglkWHjr+BVv0vRXf/TSQ7Ad9GNmoWU++BJsu/4v4L77SGTXqv0/ZVawHfRrUDkgeMtZ+/4W6UUyoID+fV9acEzhRbM/upZp2E/5GYP6YfByxpuhzq68GAw0PE0ZPE1REiX6uJbHv4SO/7WURsYDAb68ccIYb/eTmQHAZx1uB2qkBuh9GUHgLAr1O5v8gORwmFmSebPKdHTE1W7cjXptYooWZhPd8ILbnXNWtPpdFBK5etxHDMcDknT9CI7Xph6s6+FEFoIoZXL60sprZTSQTs8yfP8sT7dmaAdaqlcbrtNRuEvkviZdZKcdaIbhmEYhmEYhnGw31Jz9d5VLb30AAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -13,
                        top: -19,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACJElEQVR4nO2XIZCbQBiFv+sgEIgViAgEAnGiAoGoiKiIQEZERpxARkREVFRUIE4gEJHIioiKyBOIExEnIiIjIiIQFRERiAhmtoJerlxzM6FNSDPdb4Zh4P9n9+3bNzsACoVCoVAoFAqFQqFQKBSK/4ubOs1hGEqA79vyOVvNmU6ntcb41zha/Hg8lo/3nxGGRmHmANg6rHegbQyS5eYqjXh3TJPjj6RpmgDMvJjNZoetv9QLMye5EzK4NeVZVJ6Ro3bND2K5TGM6ernzMy9GWC3MaYfuB1G+W+2uMhFHi3T8kSyW3xBC4O0yoGqEZ+mV/msxora45zS8ZYRplka0nfKeZTuyrGqE1YkkQJaOLm7OHwsIwolMk0+1EpHqIQBGq1WpLb/2L2bEX09cJxFRMT44hrBKQ57uO40bcbIJ3zICwJn38SydzO7zOFujeXfAy8L1pwm9nstgMGjcAO1UAz0kwxsoD8v052HZng/LmhWxAHyWGIbAzheY5hbXcknTNQhxKhm1OZvjhxJBu1vpcV2XxSLHdQ0AFuMv0O6SJEljSThZAl7znIjKYTmblsVfjHBdo1w4sM0LPrruuSQdpDGnl3kh/fdOJRHbvEAYGtu82PcFyYRBnLJ6iBrRdrYEvObW0H5LRDAIcBxn32PbNlEUYRhWU7Iuhx/E0rZtabfYX0IIGYQT6QdxY/8UF/8Sc/yRdCwLy24xGvb2SVEoFApFA/wAyrzfh8yoYx0AAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -27,
                        top: -12,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAACDklEQVR4nO2YIW/bQBSAv0kBBgYHDAwMDA4UBBgEBAQMGBgaFBQEBgYEBAQUDBQG+AcEDBQUBBQMBBgUFBQEFBoMBBgUBBgEBES6Ac9uInWTpTWXLLpPOuCns3zv87vnk8FgMBgMBoPBYDDoxAunygun6tTr+KL7gVXStusexLP7vva1wAkEXPXvP3zrwnMp8jftIlo6HxbHsXKsJ5avBdurGCgTB3CzBVZRkOlcEBoFxHGsnOwZejHCFpA/ISWsM0FRFDhS6lrKAVoERINEvaYJoVVe7+fqOA4AQWADNmJtqdbaZpattWwFbftNRmO1y+YIIehs8zLYiwmCAIDlw7gMSYs83wKQ58cXob0JRoNEZWlyIGLhTbBdF7ns0/EsVlvwf1fLagvHrIiTfHoABncPKp1N/ijCcUoDvlVKgOOIOJmAiqYV0ZNWfc/LS+vTRJxcQEVTEfAu4zNEnI2Aio+a5b6IuCvqJln1in9plmcnoKJJRUApIev9AKD9eIPfH3F7e9s4r7MVUPG3ZlmdItuPN/X8YrPj6+SO4XDYKLezF1CRbXYqasvDcwRlwsJuUWx2dWw8X9Dtdi9LQMV+RQghCMOwlNLp1HPSNOX7c8HPxfS/y68x0SBRvu+Xw6UeQgglhFDB9bdG/xouwpCMxkp6Hp7vMh5dM03m5Ks3FrPRReRnMBgMBoPBYDgGvwCjC+ekqUhCEAAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -15,
                        top: -11,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAExElEQVR4nO2XIXDbSBiFv94IGAgsEBAwWCBgYCAgYBBgIGAQUFBgUBBQUHAgwMAgICAgIKCgICAgIMAgoOCAgUDAAQEDAwMBAQEBgQULBAw0owOKHDttL20lpwX+SGbs7O7/3r5/dw0HDhw4cODAH0lRPJS/u4bfSrFi7wb8te8FmhCFcu9rGHtf4ScQQpSuzrENk6zI6Q2SzXdSyhIgSZI3ba75RyRACFGehcflKAdXdLFNgW2YRKFkiFFKKUutNVprXNdttS1+uwFhGJajHPLRCoAs12S5xjYFvUHCSLoMUo2rc6SUaK0RQrRmQqtxqpnNZuV4PP7huaMoKrXWzEZjAGxhVX9tG4BltGVOkTP0Dc6DdSu17+UM6OfTn/r/6fQGrTXX4ZxtI2rcXh+A0+hfpsLleKw4D5JWam09AUXxUBINcY7lzoElpSy/dYCFYVgGQUySpCilKiOuJztG3KJRjkN8dwdAcjtEu5/4mZR9j9YNkFKW4bXGHumduedTuxxdZjufhWFYLhYLLKuKfBwX3zRCCAHA+P0Z08k78vlHLu40l3ezxia03gJJkryxursPmNWNLPsf/v/6ur4O+PjRx3EkcdwlSVKm0xscB4KHBM/1kF0JwMWdBkBK2bjevRyCxYrS6D/Nnc1FuZ2I48l4x6CRPNqkYJs4LtB6SRyD57k4TrVftfAkSf68BDxnW3wt3M01qJRFFCGdHnOABN57bzfj6kQoJfG8ypxt4bPZAsdpXt/eE5DNRfkhGAFPwlUBaEWiFEIInL4HwNIUwK4RSiksy0JKuRHu+xKA89sMYa2J51e/rGOvCajFu7kGQGUpaIUuCliv6Q5OSMPb6nPAra597hZfgCcjavFKKXxfcvllDcBaK0xpN6pxbwYcT8alSkPcXG8EapXRHZxgAlpr4jjGGZxQAEIIVDwHvjbC8zyUUlvCNWutKHKNLXqN6my1BY4n4/Jv4wF3uGb50OFLVPVuLbzXH5ClEQB2t0eWRgRBAIDv+yRJAkAmcgBWqxVaKUwxAXaFG6bgaNhjfnPaSEMrBljeWTkYxri55kgs6Tod7mcZ0dokM6pXnO/7aK13TNi+44MgwPSqra+F9/zq4RMHDzvCF8vPXH265+as+UOoUQtY3lkJYC4vWC2B0zEyq2Kayvf0paSrNfAkNlqFm/G9/oBoFRKRYnr2jnAbSBdLAPI0xjAF7/9+W40zjdaS28iAjhAYD1U8HQs6szlprzIgs3KE1iwWC3zfJwgCPK867YUQBEFARHU2PBe+vL3B6nvoJAZgeDwAaGXHn9Nowq5/VdYGeLZAmAaJVgDECvqn1Vs+X2SbMY7jfNXjddTrHa+F245ZzdXgmnuJ1m6BRaZxLBBGZYQwCpjNWWR6YwRARv7dqNfCj4Y9Mq1Z3p/vTXjNLy/gjCZlukxxTz4AkF35Lw/y+zs7/jzqtmNimuarCK/55QQURQHA6v4egP4k+KFx2ztumAKdxK8S9e/RaME6BcbjE7Yjvv5BU9N5vO7gdXv8JRovXJsAbIzYpiMsOkJsRMPr9vhLtFKAM5qUALUR29SmjE+GTE7fcXr6ufHrrU1aLcQZTcp/7i8Zn1xgP0a++/hjZR93+IEDBw4caMh/llaHvMyYsecAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -25,
                        top: -20,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAElUlEQVR4nO2YL3TaXBiHn30HgUBcERERcUUEAhERgURERExMVCAmKhAVExOIioqKigoEYmJioqIioqJiAhGBqEAgEBGIiAhERMQVEYiccz+RhkK7nhVG1+4cHsOfQ97k9+S9b+4BDhw4cODAgb1RFGP91tfwphQR/5SA//ZdcD6R+y75vpFSainl6q4XEbpDTXdrQneoaSHEu+6IP+oAx3G0UgqlFFJK3aGm5xOJWWtgNgSOsPBzKFz33YrYWYAQQt8Hx1E57YXClw7NdoLZEKS5Is0VAP04w89hMpm8Owkfdj3w3KvrcVis7jaA02wBkKZp+aoyALqjACEEzWbzxecLgkB3u92dr++l1HY98KhrUo8NLlXM8DfBT04GCCG2qt/KT3e9tK3YyXAQBFrMviKPxwBcqz7f/DuOEcDT4IZhIKWF59m02+0n55RS6iRJPqx/jn8m0BxTq3VetQu2Lh4EgT793OXss6Dhf+dycENwfQGAUuqXwW27bLQsy3Bd94mE0amp/ct047t0JHT7RLAu5jXYeglIKQG4uFZc+iAtyWBwy3Q2xetI4hhs294I/v17yMmJ92xN/zL9EP2QutV7CGtYiiRRrz4DduqASkKSJADEccF0OsO2QQhnFXydLMsYJXcb3/0cBKvzpyOhTf8hcBGha63dh/RL2foE/X5fxzF0uy6PRWRZhmEYT+749fQWACuOSOI5brMJhsXs/ulRiViX8C4F2H5fq6zO+bEJQBgmKxFJkqwEVFTBnfv9QBxNy02TYYAwMGpsiPjhjfjbAraaAY1GgzROubwVAJx+kmRZ+ciT8uH94+BZugDKIWm1j1GzAIoCajUowCl90gt90tFoYym8NlsJMIVgns9RSUxdGGsiMqSU5RpPngZv2H4Z3mgTxzG2013tCxaTq1V9x4RsIfjY9zUEf5rtRWxt2u8N9d14TpErag1BXRjU78PkaoAwDFqtcmNkqgZQdkcYhgB4nodpNUkX8/I3VpN5NGExuUIYZSt8amY4nSWzcZ1vRWdjWO6bnQr3LgLd/3qE63zZEGF7HQDm4ecNEfk0xfPKoVjtFeAhvBBiJcgsIpr1nKOuySJecqccZg3BZGyTTS/2LuKPCvYuAg0QXI0pcoXRcgGwXAd4KqKJRbPVZh5NVjWEECilNj4nScKR8ZNFuuTW8ImG5XLInTOAvYrYSyG/N9QAd+OyrYW0yaIpznEPeL4jquDT6RTP8wjDENd1mbPgUzZisVgSzeuoQhGX85WiM2AR9t+XgArb72uANM6BUgQ83xGmahDH8er4hlvOgGgYYN8/TaUwUHnBNFXAOxdQ4Ryda1OIjY6A50VURMMA1xTlMY0aKi827j78IwIqnKNznef5Rkf8amkQRr+tZfbLITm7+oHlWMSjwV6u/a9sOH63NF5CdHMDQJErzJZJEg7/HQEVz4kAWK49CR6zvP+DpcjVXu8+/GUBFY9nBJQylkqtwq5T3O8s9x0e3khAhd8b6uHwC4PhDcHVGHgIu47lWAB7Dw9vLGCdalO1SKr/FRXB1Rkfj05fJfiBAwcOHAD+B5RDVfzsIy3vAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -29,
                        top: -5,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAElUlEQVR4nO2YL3TaXBiHn30HgUBcERERcUUEAhERgURERExMVCAmKhAVExOIioqKigoEYmJioqIioqJiAhGBqEAgEBGIiAhERMQVEYiccz+RhkK7nhVG1+4cHsOfQ97k9+S9b+4BDhw4cODAgb1RFGP91tfwphQR/5SA//ZdcD6R+y75vpFSainl6q4XEbpDTXdrQneoaSHEu+6IP+oAx3G0UgqlFFJK3aGm5xOJWWtgNgSOsPBzKFz33YrYWYAQQt8Hx1E57YXClw7NdoLZEKS5Is0VAP04w89hMpm8Owkfdj3w3KvrcVis7jaA02wBkKZp+aoyALqjACEEzWbzxecLgkB3u92dr++l1HY98KhrUo8NLlXM8DfBT04GCCG2qt/KT3e9tK3YyXAQBFrMviKPxwBcqz7f/DuOEcDT4IZhIKWF59m02+0n55RS6iRJPqx/jn8m0BxTq3VetQu2Lh4EgT793OXss6Dhf+dycENwfQGAUuqXwW27bLQsy3Bd94mE0amp/ct047t0JHT7RLAu5jXYeglIKQG4uFZc+iAtyWBwy3Q2xetI4hhs294I/v17yMmJ92xN/zL9EP2QutV7CGtYiiRRrz4DduqASkKSJADEccF0OsO2QQhnFXydLMsYJXcb3/0cBKvzpyOhTf8hcBGha63dh/RL2foE/X5fxzF0uy6PRWRZhmEYT+749fQWACuOSOI5brMJhsXs/ulRiViX8C4F2H5fq6zO+bEJQBgmKxFJkqwEVFTBnfv9QBxNy02TYYAwMGpsiPjhjfjbAraaAY1GgzROubwVAJx+kmRZ+ciT8uH94+BZugDKIWm1j1GzAIoCajUowCl90gt90tFoYym8NlsJMIVgns9RSUxdGGsiMqSU5RpPngZv2H4Z3mgTxzG2013tCxaTq1V9x4RsIfjY9zUEf5rtRWxt2u8N9d14TpErag1BXRjU78PkaoAwDFqtcmNkqgZQdkcYhgB4nodpNUkX8/I3VpN5NGExuUIYZSt8amY4nSWzcZ1vRWdjWO6bnQr3LgLd/3qE63zZEGF7HQDm4ecNEfk0xfPKoVjtFeAhvBBiJcgsIpr1nKOuySJecqccZg3BZGyTTS/2LuKPCvYuAg0QXI0pcoXRcgGwXAd4KqKJRbPVZh5NVjWEECilNj4nScKR8ZNFuuTW8ImG5XLInTOAvYrYSyG/N9QAd+OyrYW0yaIpznEPeL4jquDT6RTP8wjDENd1mbPgUzZisVgSzeuoQhGX85WiM2AR9t+XgArb72uANM6BUgQ83xGmahDH8er4hlvOgGgYYN8/TaUwUHnBNFXAOxdQ4Ryda1OIjY6A50VURMMA1xTlMY0aKi827j78IwIqnKNznef5Rkf8amkQRr+tZfbLITm7+oHlWMSjwV6u/a9sOH63NF5CdHMDQJErzJZJEg7/HQEVz4kAWK49CR6zvP+DpcjVXu8+/GUBFY9nBJQylkqtwq5T3O8s9x0e3khAhd8b6uHwC4PhDcHVGHgIu47lWAB7Dw9vLGCdalO1SKr/FRXB1Rkfj05fJfiBAwcOHAD+B5RDVfzsIy3vAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 39,
                        left: -32,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAExElEQVR4nO2XIXDbSBiFv94IGAgsEBAwWCBgYCAgYBBgIGAQUFBgUBBQUHAgwMAgICAgIKCgICAgIMAgoOCAgUDAAQEDAwMBAQEBgQULBAw0owOKHDttL20lpwX+SGbs7O7/3r5/dw0HDhw4cODAH0lRPJS/u4bfSrFi7wb8te8FmhCFcu9rGHtf4ScQQpSuzrENk6zI6Q2SzXdSyhIgSZI3ba75RyRACFGehcflKAdXdLFNgW2YRKFkiFFKKUutNVprXNdttS1+uwFhGJajHPLRCoAs12S5xjYFvUHCSLoMUo2rc6SUaK0RQrRmQqtxqpnNZuV4PP7huaMoKrXWzEZjAGxhVX9tG4BltGVOkTP0Dc6DdSu17+UM6OfTn/r/6fQGrTXX4ZxtI2rcXh+A0+hfpsLleKw4D5JWam09AUXxUBINcY7lzoElpSy/dYCFYVgGQUySpCilKiOuJztG3KJRjkN8dwdAcjtEu5/4mZR9j9YNkFKW4bXGHumduedTuxxdZjufhWFYLhYLLKuKfBwX3zRCCAHA+P0Z08k78vlHLu40l3ezxia03gJJkryxursPmNWNLPsf/v/6ur4O+PjRx3EkcdwlSVKm0xscB4KHBM/1kF0JwMWdBkBK2bjevRyCxYrS6D/Nnc1FuZ2I48l4x6CRPNqkYJs4LtB6SRyD57k4TrVftfAkSf68BDxnW3wt3M01qJRFFCGdHnOABN57bzfj6kQoJfG8ypxt4bPZAsdpXt/eE5DNRfkhGAFPwlUBaEWiFEIInL4HwNIUwK4RSiksy0JKuRHu+xKA89sMYa2J51e/rGOvCajFu7kGQGUpaIUuCliv6Q5OSMPb6nPAra597hZfgCcjavFKKXxfcvllDcBaK0xpN6pxbwYcT8alSkPcXG8EapXRHZxgAlpr4jjGGZxQAEIIVDwHvjbC8zyUUlvCNWutKHKNLXqN6my1BY4n4/Jv4wF3uGb50OFLVPVuLbzXH5ClEQB2t0eWRgRBAIDv+yRJAkAmcgBWqxVaKUwxAXaFG6bgaNhjfnPaSEMrBljeWTkYxri55kgs6Tod7mcZ0dokM6pXnO/7aK13TNi+44MgwPSqra+F9/zq4RMHDzvCF8vPXH265+as+UOoUQtY3lkJYC4vWC2B0zEyq2Kayvf0paSrNfAkNlqFm/G9/oBoFRKRYnr2jnAbSBdLAPI0xjAF7/9+W40zjdaS28iAjhAYD1U8HQs6szlprzIgs3KE1iwWC3zfJwgCPK867YUQBEFARHU2PBe+vL3B6nvoJAZgeDwAaGXHn9Nowq5/VdYGeLZAmAaJVgDECvqn1Vs+X2SbMY7jfNXjddTrHa+F245ZzdXgmnuJ1m6BRaZxLBBGZYQwCpjNWWR6YwRARv7dqNfCj4Y9Mq1Z3p/vTXjNLy/gjCZlukxxTz4AkF35Lw/y+zs7/jzqtmNimuarCK/55QQURQHA6v4egP4k+KFx2ztumAKdxK8S9e/RaME6BcbjE7Yjvv5BU9N5vO7gdXv8JRovXJsAbIzYpiMsOkJsRMPr9vhLtFKAM5qUALUR29SmjE+GTE7fcXr6ufHrrU1aLcQZTcp/7i8Zn1xgP0a++/hjZR93+IEDBw4caMh/llaHvMyYsecAAAAASUVORK5CYII=",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 40,
                        left: -31,
                        top: -8,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 92,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABdCAYAAAAVIWCbAAAJhElEQVR4nO2bLXDiWhzFf30TERERERGBiIiIQCAQFYgKRAUiomIFogJRUbGiomJFRcWKFRUVKyoqKlYgKipWICoqEIgKBCICgUBEXBGByEyeCPcSIED5aN+8mZyZTmlJ7r3n/D/OvaGFAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBA+P29jaJozCJozD5L9ehffWEt7e3Sb1ex3Ec3gMBQByFiWZYR1+9FoAvmzRLfDSOABiNx4TjMcfVKlE0plp2+WohPn2yVcQBOp1XKmUPgLJXwjBsPMf4UhE+baJtiAOKfK8fcHx8/P8VQBKvll1V41nitgm+35y7RxKHVIhy2fn/CbAp4t3uG+ffGgBYlqXuM00TgFLJw7J0zp8Ffy+83HXd3t4m198vAA5WJnu7gCQOKPJZ4hfnTRo3FxyfvjEcDnEcR5GGmQBXbxNK1uLo83N8hnPsJYBc2N3vP/y4+g6kUZc13jyrE0Vjen3o/n3CPrlDNycYdqjGMEvpEkzHXDn+TNhIOYeuVel2u8m+zrGXgr7vJ7rpUD+pAdB5fVOv85pb4/IF3TQxbJtwMMDyPMySDYDplChZOqNwQi1s81XOsVcGuK7LKIwZ9LtMMFUWSEjivX4qhJ5JfcvzlsZzBk+06nUcpzUXcZgRr5S9XHF3xV4C3D+N8E9t3gdjLCum3++q90zTZDSab24TIbg5t7nvzo/TMLrUK3Wq5QveA7FE3Dbh4jzfOaS4u2IvATTDBOCtF+OfslVzCwcDvvs69bqrIp6Sz3eOTeLuzGHnO4E4ElhWmVo1xLIsmj/eVGrnNbfzkwkATW9I/TIl9lnO8VHsJcBls8QoDHnrxVhWCBiqueXBcRyEEHymc2yLg5wGa9V0mFXEJYbDIUEQ0A9C6ic1ur2eco6PNLd14u6KgwhQ8WxGYbxxgY7jABzUOfbFP4cY5H0wVq/DwSD3ml81neFwyP3TSN0ThiH9fld9jUYDOm89DMPGcRyu3iZMhODa1w+xzFwcNAPyIvSrpmNZumpmmpFubHZ1jlVz/N1x7QcRIN0HWNw1s4ccA4AoGhNFaToPh8OdnQOWSyAr7q7YS4AgCNBNh4qXboaEEEvXSK8OwwmO43DZZGvnADaKuyt2FsD3/cR13Wktp0fcvHTOIhupbZxD2ucisuLuiq0FaLVaCcwIWpZFydIYhfHStUKIueg4jqNE2NY5Nol74ZeTMS7Pz89bHYo+7AKtViu5urpKwjDdkETBrO3Ijg7kRkpGKJsB2zhHHhbnGeMC4F/UEv+i9uFH7RszoNVqJWEYIr+A6Xd3OuUsmpuQlwEfcQ4JIcRS9BfT3x4LxraJ7/uJLbr8fh2vzYiVAsgal0rLGg+CADcaIJyaaoLSBWA5VS1Lz13oNs6RFWEVGn6T558txt4JjN5AqzE2YnzfT4CVpbEkwNXVVSJJB8FsKxoEAUKItCE5tbl7ZDRXRUiKIMfZ1jkk1on79HhP8/oBgJfnNGDhePb8Ufauh4eHOSGUAPKCLGmmB5DhWxfHbagFhGFIw2/y8vwEMJcBkJ+qUZTW/C7OIV1gnbhCCJ4e7wFonl8C8PyzTaffoVKpAOl8i0Jo8hdhGOK6LmGYblDCMEQMNFzXhRpACGOLxvSR9tPjvVpQtgfkLXQ4HNIfjNANGxhu7RyL7+eJG00sLs/TJ8aTqdgj3aHipfe/v78rIWAWcM00TTWgEAJbdImt9KxumuZUEC8VRAjG00YoVf7TflbRlOIJIVRqR5PR3KIksi6wrrlle8A6ca+vL9QcJbdCv98ntoS6v1KpYFkWnU6aEXIcTaa867qYpsmQhsoGIUTa/bUBkKb4eBziOaYS4tuZD6QPRNOFp7/Xp1FcJC6xjXPIcTeJW3IrADze+8RBzHHtjNAI56J/dnamxnAchyPHcRJAXaCEGA4xTVOJICEnL1freI6JmKRtxLbmTy+LxNvtNpBmlW46itD5t1N1jYzKjPSE19eXJVEWxVXEf/8iHrziNVqzdcepI2QdzXEcOp0OMG2CTilVKQspRKfToVqtLi2i3+vQ76WKAiojTH3aCyYaph7PEc9iG+eQ65GPyCVxMdEol8u8tB9VkDTvRDXytDH7KpCSeBAEVO2AzsBKBTDCCLAo60MWdKBer2OaJu12O9eSJMFsRph6TOflzxLxXZ1DN2xG42gp4p3fv+i9/VVkZVZJwtm19nq9OeJM+2zuRigvI6QQq7amMiMWBZLEYXfnWGxund+/5q6VQi6Sz4u4JB5Ek5kAkWXAaDbguoyQpdFut6lWq1iWRa/XW7lbO4RzyKx6nBLPEs0SXpfqi8QlNAARuYBQQiwKsq40JPlsk5H1KInt6xwyzeWYUthF5KV6YMwTdg2dISCiMiDQ/vYD/G8/QPxRQsgMWMS6jMgrjTAMMU1TlYfsE1II+TmixDrnyJLMRn5TxCVhGfneOOUohMCqNNE8QzvyGtfJyfktr48/ABjpFZiIpUyQP28SYjEbJIF9nUNm1C6pLiM+No45PikD8HjTPNIABi8/jwYv4DWuEwDR/zO9ab40FrHOPoUQaMELmMfqvV2cwxZdxuZxuiVn1jBlqptGn+GopIgvIhvxSelUEZfvz7nA4OXnEcBp6y6xS5bKiFWlsbFZ1i+hc0/sNlSzy2KVc2SbnOE2sTKpvljjVXs+xeV3GXEhBLh+yq99s3QkzrXBvw/fjwDOb54STUsv6Txc71Ya1aY6U4RhCHaIjSC2jpULZJFtcvukuhACu3qOXbLmIv4hASSyN3qN62RVachM+EiP6PV6xJanHq4sipA9mK1LdUl8sasLIaieXQPw8OPbxueDH34oOnj5eSR7hG3biM7dSiEkNgmRt3v7aKpLZGu84l99mPjWAkgRAAbAIIoTgNOyu7JZfiQjshHPS/VFH5fIRnxSOsWx7bWpvgo7fy7gGZrqEwCvjz92cg3LsnIjvtjVNzW3/OfKm7H3R2OPN80jr3Gd6OVvTGDthkr+nBXCcZy1zS2vxj/S3D6Kg3w2KEsD0mYphVjlGlkhqna8lriscd31sYGSY29V45twEAGykGI49e+JABDPK0vDCCMomcDq5iaJS2s+NA4ugMSwc3cE8xmRJ8Q6H5+UTj+NuMSX/VFy5ewmEb1HIHNsLYVUSyadQeYcP21s7zm7ts/Al/+XRuXsJrFNk0HnTtngoRvbNvhP/k0F0vNGybGJ4xhN0w7a2LbBv0ICe/vIAdWRAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAABdCAYAAAAVIWCbAAAJPElEQVR4nO2bIXDizBvGf/0PIiIiIiICsSICgUAgKhAViIqKiIoTiApExYkTFRUnTlR84sSJihMnKio+UVFRcQJxogKBQCAQERGIiBUrIhDM8BdhlxACLZT25pvJM9NpKclmn+d99n02KYUSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRIkD4+bmZj5L5HyWyPnfnEfloy94c3Mzb7fbCCEYhgqAWSLnFds9+ui5AHzYRbPEJ3ECwCSOkXHMcbNJksQ06z4fLcS7X2wTcYBe7w+Neg2Aeq2KbXvUhP2hIrzbhXYhDhjyg1HI8fHxf1cATbxZ980azxL3HAiCzso5mjikQtTr4r8nwEsV7/efufh0BoDruuY8x3EAqFZruK7FxaPi92WtcF43Nzfz6y+XAAdbJm9OAU0cMOSzxC8vOpx9u+T49JkoihBCGNKwFODqeUrVzY++eo33SI43CaAn9uPnv3y9+gKkVddrvHPeJkliBiPo/77HO/mB5UyxPWnGcKrpFBzhbBx/KWxiksOqNOn3+/O3JsebFAyCYG45gvZJC4Den2fzc1FzO/v8hOU42J6HHI9xazWcqgeAI6pUXYuJnNKSD3xUcrzJAb7vM5EzxqM+UxzjAg1NfDBKhbAy1ndrtbXxxPiebruNEN2VisOSeKNeKxR3X7xJgNv7CcGpx3Ac47ozRqO+ec9xHCaT1eY2VYpvFx63/dVxzuw+7UabZv2SYajWiHsOXF4UJ4cWd1+8SYCK7QDwPJgRnLJTc5PjMV8Ci3bbNxVPyRcnx0vi7s1h7zOBWaJw3TqtpsR1XTpfn421i5rbxckUgE4tov05JfZeyfFavEmAz50qEyl5HsxwXQnYprkVQQiBUor3TI5dcZC7wVYzHWYTcY0oigjDkFEoaZ+06A8GJjle09y2ibsvDiJAo+YxkbMXJyiEADhocrwV/zvEIMNxbH6W43HhMd9bFlEUcXs/MedIKRmN+uZrMhnTex5g2x5CCK6ep0yV4jqwDjHNQhzUAUUV+t6ycF3LNLOKnW5s9k2OTdf4vefcDyJAug9w+dHJ3uTYACRJTJKkdo6iaO/kgPUlkBV3X7xJgDAMsRxBo5ZuhpRSa8forJZyihCCzx12Tg7gRXH3xd4CBEEw931/sZbTW9wiO2eRrdQuyaHjM4+suPtiZwG63e4clgRd16XqVpjI2dqxSqmV6gghjAi7JsdL4l4G9XmMz+Pj4043Ra9OgW63O7+6uppLmW5IknDZdnRHBworpSuUdcAuyVGE/HVifACCy9Y8uGy9+lH7iw7odrtzKSX6C1h89xeXXFbzJRQ54DXJoaGUWqt+3v5erIg9hyAI5p7q8/NPvNURGwXQa1wrrdd4GIb4yRglWqYJ6hSAdau6rlU40V2SIyvCJpwFHR7/6RLXTmDyDJUWsT0jCII5sHFprAlwdXU116TDcLkVDcMQpVTakERr5RxdzU0V0iLocXZNDo1t4t7f3dK5/gXA02NaMBkvnz/q3vXr168VIYwA+oAsaRY3INFzH+GfmQlIKTkLOjw93gOsOACKrZok6ZrfJzl0CmwTVynF/d0tAJ2LzwA8/vNAb9Sj0WgA6fXyQlT0L6SU+L6PlOkGRUqJGlfwfR9aABJil7PFI+37u1szoWwPKJpoFEWMxhMs2wOinZMj/36RuMnU5fNF+sR4uhB7YgkatfT84XBohIBlwSuO45gBlVJ4qs/MTe/VHcdZCFJLBVGKeNEItcr/PjyaamrxlFLG2sl0sjIpjWwKbGtu2R6wTdzr60tzjarfYDQaMXOVOb/RaOC6Lr1e6gg9TkVb3vd9HMch4sy4QSmVdv/KGEgtHseSmnCMEJ/OAyB9IJpOPP29tahinrjGLsmhx31J3KrfAODuNmAWzjhunSNtuVL98/NzM4YQYvlUWHdLI0QU4TiOEUFDX7zebFMTDmqathHPXb17yRN/eHgAUldZjjCELj6dmmN0VZakp/z587QmSl5cQ/znd2bjP9TOust5z9JEyCaaEIJerwfkHosLIeZaKS3Ew8MDzWbTHJPf8Jyfn6evF0I41sy8dqzZCnFDwBGmBwSnx+Y9/d22PZMCWgDf980jck1cTSvU63WeHu5WiqSRjWZdcU286YX0xu5qDEZRdASs7KLa7bYRoiiSNMGsIxxrRu/p3zXi+yaHZXtM4mSt4r2f3xk8/zZktas04excB4MBYRga4iz67No+YCECm4TYtDUdDXqMBsvXeeKwf3Lkm1vv5/eVY7WQefK64kXEw2RaLEBWiEajMR8Ohyu/zy8N13UZDAYbd2uHSA7tqrsF8SzRLOG81bcR19h6LzAcDo++Xp7On/oxeSG0IzT5bJPR61ETe2tyaJvrMbWweRRZPbRXCfu2RQSopA6o1/9tsNFozB07JJq4+nU6YCY1NPIN6RDJYQgshC6yOiybW7smV76L6oRoUl05z210Xv88YDgcHgkh5o7j4NjhmiOyQuTdoAnoPqGTQzviNckBS0ftY3Vd8dg+5vikDsDdt87RTg9Eoig6EkLMlUrX4DYhlFJUwidwjs17+ySHp/rEznG6JWfZMLXVHXtENKka4nkMYh9I+8u0emqI6/f3/vO4doNSClGVG5fGpHfLzD8zzQ7W9xIamvimJrfN6triRVbHDwAYPnxb47v3M0HtBgCVpCqLqlx3RLNj7imklOBJPBQz99ikQBbZJvcWqyul8JoXeFV3peIHE0CLAKkbskLUrYicDsYRg8GAmVvDWTxcyYuQvTHbZnVNPN/VlVI0z68B+PX104sOP8jfBZa9QQGQuDZMKHZERoii3ZuueD7Oml5KNF/x7BpvBFfA64hrHOyjslk3aCfYMgHcrY7IVrzI6vkc18hWfFo9RXjeVqtvwsE/K5ztDROrAVO11RGu6xZWPN/VdeWzxHVzGz98Oyp+rvwy3uXD0vneoFHkCCHE1uZWtMZf09xei3f9tLjpDYsloZ2gIaqSpjfbSlyvccsP8ICq8HZa4y/h3T8uXxSXWghbJlB1gM3NTRP//evLu3x89kP+XyCfEllsy/Fp9fTdiGt8+D8p5HeQzapDb5y5j9+ya3sP/JX/0tBLQsfgoRvbLvgrAsBShJOLGyqVykEb2y74P2dgGOMXDipVAAAAAElFTkSuQmCC",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 92,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 93,
                        left: -31,
                        top: -61,
                        base64Data:
                            "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",
                    },
                },
            ],
            type: "primary",
        },
        {
            id: 30,
            available: true,
            name: "Wire and Section Mill",
            colour: 43,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 0,
            prospectChance: 0,
            layout: [
                [
                    [0, 0, 0, 0, 0, 6],
                    [0, 0, 0, 0, 5, 4],
                    [1, 1, 8, 7, 7, 7],
                    [1, 1, 9, 9, 8, 8],
                ],
                [
                    [2, 2, 3, 3],
                    [2, 2, 3, 3],
                    [2, 2, 7, 9],
                    [2, 2, 8, 9],
                    [2, 5, 8, 7],
                    [6, 4, 8, 7],
                ],
            ],
            primary: [],
            secondary: {
                acceptance: [
                    {
                        cargoLabel: "STCB",
                    },
                    {
                        cargoLabel: "ACID",
                    },
                    {
                        cargoLabel: "SOAP",
                    },
                ],
                production: [
                    {
                        cargoLabel: "STSE",
                        multiplier: [4, 4, 4],
                    },
                    {
                        cargoLabel: "STWR",
                        multiplier: [3, 3, 3],
                    },
                    {
                        cargoLabel: "ENSP",
                        multiplier: [1, 1, 1],
                    },
                ],
            },
            tertiary: [],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 64,
                        left: -31,
                        top: -33,
                        base64Data:
                            "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",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABwElEQVR4nO2WLXLDMBCFv8wYBBgsCDAoECgICDDIAXqEwhygR+oheoTCgoKCAoGCgABDgwCDAIPMqMBVp1HzYyuyYuCPKbFlv7ert4aRkZGRkeEjIkYlmDzPjcowofadhNqoL0TEyK5CFjlVqZvfshwRoVi/UZTXaRisAX+FT7eacn8oHJo1gNbaW8fgDLhUcbsGqL6a/4u9v47BGNBVeJZBPWvWWuuJe3/bozEIA1SCadPqtuKyaNbzZMPrJuGajLi5ASrDSJZTFAVKKS/h12REdAPcVq1qQaYVbIHZzzUnWr1Nxd374XxGRDPg0hmvakEpBfyv+F2teS+lk3A3I069V+8GdBlnx4SnacqH3nndP082ALx87uIb4DPOjgln1lzXNSPgvHBLcAOuGWfHWr1rRgDkDwvm8yWPT89xDfAdZ23O+LmM6FJxl2AGxBhnIYVbghigEkyV9j/OXOFdWv0UQQyw575KBaC3cRai4i5BNlotUwP8VtXiVqzPceZL0A2tEev9PXAovO9x5ksvG1sj7Iv7ZASEOeOXiPIp3DYjYlTcJcqD2mZETOGWqA88lRExWn1QrJapsWaMjIzclG9Bnt5r6fckhwAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 31,
                        left: -31,
                        top: 0,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAABsUlEQVR4nO2XLW7DQBCFv0oBBgYLAgwXBAQULAgoKCjsEXKIHqkHKOwReoAAg4CAAoMCg4ABBgGRtiSOrCj+3fVPJD/qeHb26X0zDsyaNWvWLHfpCGuMsXqBVUrZsftpqifXAjrC6vUbIoKkMQAqMsg+RkKFiDif0aecmjPGWOB68aIR0QJOy+kb4dSUXmAB1LMB7hsB005E42Z0hL29SJ6A4BiTpo9pRG0TdYy/r84czisAZH95XmFEEY3k7D6DXFXZQBvG2xiRJAlaaySNSdJxTag8vAvjRSPK0OAILEFOChXIqGg0SkAXxl8j4S+4/P4mEUmSoAKZxIyoPGS7CS3QmfEXE5JlWakRU1ifjYq3NaLIOEc6GQHDJKJR0e/PD3s47Ih/9gBOjBfRmML67FSsLhFNGK+aEUOuT6dCrjNiCuvTqUgZGl0Yb70+M/GSBK883Saij/UJoDLxNg96maw+1ue994FrWgC+dtk0DcjlY30W318vfgE/F8/VqwFO67PAeG6kz4vnGvS7u8n6BL+M12mUf2JlRoB/xus0igFlaPTB+ENouwltnopZs2YNqn8+GHt6fsCGOQAAAABJRU5ErkJggg==",
                    },
                },
                {
                    sprite: {
                        width: 64,
                        height: 51,
                        left: -31,
                        top: -21,
                        base64Data:
                            "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAzCAYAAAAn3w6xAAAD+klEQVR4nO2aoXLjSBCGf18ZBBg0MBAIaGBgYDDADzDA4OACg3sAgXuAwDzAAYMFBwUWGiwwXGAQcMDAYEBAgMBAA4EBBgFbNQcUeSVFY8mSLNVW6UeWSp6Zv+frHrUTYNCgQYMGDRo0aNCgXsXMlplt1/OOu54wr7RpIQS01p3O31sA0sZXqxWYGcfjsfN1dB6AvPEoihBFEYio66UAAP7oaqJ0jq/XawghEATBaDabdY59WncnoAj15+fnEQBIKa0xBgBgjIFS6t7L+aS7BaAK6kSEKIqQBKEPtZ4Ct6A+nU6x2+1GQBwMIUTbyylVawTcgnpyL6GBiH7fFKiLOhEhDMPMdR/vAbVToAnq6XtSSqu1xvevG2itwR46fRu8mYA2UJdS2o9rq/97AS8EzEnBnBTIE5BzsvrtBfqEUTN75aocgDZRV0ohMf4QKZw+jBMR9NsLzAkgT0B4sEqp1oLAzFZrnRmvNAXugTozA1PAnBTepwI8lzAnBf32EgfCEzCvCuZVtWD7eqPlJKAL1PM7DgDmVcHzAFrE12hwMjg8XA9Am6gTEfbfglLUE+NAbPwdwHwcj6XisSydDegjgGW14ZZ+I5MCSQVuivpqtcL3rxuoww60iI+2MtRpIUALgfk4xHwcYns8j36EY/AYNp0y5AlIKW3RaVGn38gS8MDwfb8x6saYeMHvBJwU6IwP9N2oJzu+PZ5HRGR5DEvMlYrkrenqDkDuoTpVPZ3jnCx4QmCPL8aBz6jnjReOk0+ZR77gXrffyKRAPkduqeqe9wvRPOrMXAt1Z8oYAzzGAa2Trmk5CahT1Z07hWLUAaAK6pdxHvlivO7JdDUAdVGvcpwVGcc0fl5rDebrqKeNNzmZrgYg/dB0OkUQBCMppV0ulzHqDY6zxHgm4CVFMm18vV4jDEOc1RYz+Tf2+z1ms9llrGS9zGxdHoqUCUAedd/37f5bEOfgosJOwb3jn8xPCHQ2MCBggmyRLED9dfcPHgCcJktMbjiZfN+3ALDf78sDkAyQ4JQUlDrHmZALzOdLbP1/Cyf+c/YTwAQ/QsSBKEE9CeSXL2SrvoSlPbh6isIakP5S8hZWuFNwo749HgAcCs2nn/trObGHiC/320K9zHhhALTWo81mk3mgcKdQHfVrYmZ7iOLPRVW9CepVu8jSdji9U8AEbz/j3aiKepHa7jeqoO5S5d8DfgUitOnrMtTzSvcbYRgiCILR09OTvTfqLt38i1Ad1DNq2G/URd2lXv42WKffaIq6S50HoKjf6AJ1l3oloEvUXeo8AH2h7lIvBPSBukudTJKWEMIul0uEYZg59pJ/jujKeKLeCOgadZd6qwF9Gx80aBAA4H8/kX6B9HllvAAAAABJRU5ErkJggg==",
                    },
                },
            ],
            type: "secondary",
        },
    ],
    cargoes: [
        {
            id: 0,
            available: true,
            label: "PASS",
            abbreviation: "PS",
            name: "Passengers",
            unitName: "Passengers",
            weight: 1,
            colour: 152,
            price: 5633,
            penaltyLowerBound: 0,
            penaltyLength: 22,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA2ElEQVR4nG2QIW/CcBTEfzQIBOKRIP4kE4gJ5AQCWYlATlRMTFZsyXCTCD7ARD8AAoEAj0Ag+AATFQgEYqKOCuSSmyhtge7My7vcy909QAIp9J1+1zPlO0hmJjMTSB5A6Hd4ew7YH765hjXSbFoLLyd7j09EywX3yMUegNsmTIevFdGgt2TY35XCA7AB4m1CHI0B6LpacZCmJwDpBTQBxdHHTZmuQ+FoJ5DqAHME7p3JV7tibc0HAOqVYBcE/iqzPf/wGVC2/k9kTVdwtSxPGf6YqHyNtYoyf+63UOCDFM5SAAAAAElFTkSuQmCC",
            },
            longName: "passengers",
            classes: 1,
        },
        {
            id: 1,
            available: true,
            label: "ACID",
            abbreviation: "AC",
            name: "Acid",
            unitName: "Litres",
            weight: 24,
            colour: 183,
            price: 4482,
            penaltyLowerBound: 24,
            penaltyLength: 48,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNkYPj/n4EIwIQucObDX4YzH/4SVvjhAxEm7nnwF64Y3VRGZDee+fCXwWAGC4ZpLBX/ESbCTGNgYGAQ6RBAoTGsniAAMe1NxQcGkQ4BhjcVH1AV7nnwl2GBAguDCpKJMMVYTYQBmEnIJsI9g2yqAgMDg8yDPwwuCsxwhQCwozVOI3QthQAAAABJRU5ErkJggg==",
            },
            longName: "acid",
            classes: 320,
        },
        {
            id: 2,
            available: true,
            label: "MAIL",
            abbreviation: "ML",
            name: "Mail",
            unitName: "Bags",
            weight: 4,
            colour: 15,
            price: 6867,
            penaltyLowerBound: 6,
            penaltyLength: 24,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA7UlEQVR4nI2PoU7EUBBFTzcrEU+MqHgCgSxJxYqKFSvBVVZAgqioRCIqK/iEfsIIxDosH1CxAvEE8omKCgRyk0EsbcIGwU2uuTlzcycBM/6h9XnQd/cchgOSerr+dcmTubFtbgHwXohxYhrjL3gF0JTXeC/LtfeCpJ5pjEtBUm3FnKRI6hc4xgnvhe0+cDEMXGKsnaTsqpY37ZjGCMDT/p2vzYbss4SrEj5gtata8jzn8fmFoxQcpSB3jiwWNJnSP4TTnhCCqaqpqoUQrK5rCyFY393Z6dHZ2AI550xVrSmzM+gHnK2q1jY3f0Bm39APf+YvpcZ4AAAAAElFTkSuQmCC",
            },
            longName: "mail",
            classes: 2,
        },
        {
            id: 3,
            available: true,
            label: "STAL",
            abbreviation: "AS",
            name: "Alloy Steel",
            unitName: "Tonnes",
            weight: 16,
            colour: 61,
            price: 5263,
            penaltyLowerBound: 14,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "alloy steel",
            classes: 32,
        },
        {
            id: 4,
            available: true,
            label: "ALUM",
            abbreviation: "AM",
            name: "Aluminium",
            unitName: "Tonnes",
            weight: 16,
            colour: 166,
            price: 5756,
            penaltyLowerBound: 7,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "aluminium",
            classes: 32,
        },
        {
            id: 6,
            available: true,
            label: "VEHI",
            abbreviation: "VS",
            name: "Vehicles",
            unitName: "Tonnes",
            weight: 16,
            colour: 45,
            price: 6743,
            penaltyLowerBound: 15,
            penaltyLength: 128,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA0ElEQVR4nI2PrRIBYRSGnzWiIGzYsOGYEcwQNgpm3MKGL4iiIAgbXIDmuwhBEARBVDRhg2BnttkgCIKoHWGtRXJmzsz5ec7P64Aqf1jlHwig+pUNE7qBy+F4y/NF+91yQJVh8sV3A5eenwJgTb88HXZiOMUUcQEBROv9a2NzpgDhyAdgs4JwAE0R7NaF6+UFeuNcdc3LV9R9cL3yD88nnVZxRESNMdjlo4SBdGtoTTKizq4UI9Igy86INDDGYDd1ovCei7HzYlb100VEf2ug+gTSiEd4SIZHawAAAABJRU5ErkJggg==",
            },
            longName: "vehicles",
            classes: 1056,
        },
        {
            id: 7,
            available: true,
            label: "CBLK",
            abbreviation: "CB",
            name: "Carbon Black",
            unitName: "Tonnes",
            weight: 16,
            colour: 157,
            price: 6291,
            penaltyLowerBound: 40,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAaklEQVR4nI2Q0Q3AIAhET9MBzg1w/6HqBrKB/UIRm6b8SMzLOyABY+BH5fghUkGWA7ysIQtIQlVBEkCBan83GmSvN2dvi/Ax4x6JCXlrEpERI6OVJPIX5BOS3VGkHnOtJfsC/R2tWrtn/wAzqETS9YAM5gAAAABJRU5ErkJggg==",
            },
            longName: "carbon black",
            classes: 2576,
        },
        {
            id: 8,
            available: true,
            label: "STCB",
            abbreviation: "CS",
            name: "Carbon Steel",
            unitName: "Tonnes",
            weight: 16,
            colour: 51,
            price: 5222,
            penaltyLowerBound: 14,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "carbon steel",
            classes: 32,
        },
        {
            id: 9,
            available: true,
            label: "CSTI",
            abbreviation: "CI",
            name: "Cast Iron",
            unitName: "Tonnes",
            weight: 16,
            colour: 141,
            price: 4934,
            penaltyLowerBound: 15,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "cast iron",
            classes: 32,
        },
        {
            id: 10,
            available: true,
            label: "CMNT",
            abbreviation: "CE",
            name: "Cement",
            unitName: "Tonnes",
            weight: 16,
            colour: 189,
            price: 4852,
            penaltyLowerBound: 18,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuklEQVR4nI2QoQ6CYBDHfzij8YKB8LERvkA0EHgB38DoA1jcbGQbm4UHMPogBh7hApsEA+ELBCIbBgbKLFy52+63393+HvQ9C2q1BAJYj4MxAQBhlCAiPO63f6MxAeLb2eJwPHO6XL/gaHJvnWwiMgEj7Blj+tEWhhYRwTk369Pprq3p2pqyVFR1BqnqAFbVi/VmS9M0dG0NQFE8iSKLqmKtJc9SvN8cd8ke9x4M4lviOCHP0uHHpYF/AE2nQJOj4LF2AAAAAElFTkSuQmCC",
            },
            longName: "cement",
            classes: 2576,
        },
        {
            id: 11,
            available: true,
            label: "CHLO",
            abbreviation: "CH",
            name: "Chlorine",
            unitName: "Litres",
            weight: 32,
            colour: 55,
            price: 4728,
            penaltyLowerBound: 20,
            penaltyLength: 40,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAj0lEQVR4nGNkYPj/n4EIwIQucObMSoYzZ1YSVvjkyR3CJm7Y0MrwwOAGwxGRLRimMiK7ccKDWIacFUswTGOp+I8wccOGVriESIcACo1h9Z0LTxgYGBgY3lR8YBDpEGB4U/EBVeGGDa0Mexj2MAhI8MBNginGaiIMwExCNhHuGWRTRSQEGBQuaDAEBFTDFQIAWF420gTgwGcAAAAASUVORK5CYII=",
            },
            longName: "chlorine",
            classes: 320,
        },
        {
            id: 12,
            available: true,
            label: "FOOD",
            abbreviation: "FD",
            name: "Food",
            unitName: "Tonnes",
            weight: 16,
            colour: 186,
            price: 6908,
            penaltyLowerBound: 0,
            penaltyLength: 20,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA1klEQVR4nH2PIY4CQRBFXyccoI8wCYgRI1YgOAICgRw5DuSQrEBwAMTKFSORSCQHQBTJij0AosWIFogSKzaBpBCTDpAQKilRlV+/3gfMwExELMZoMUb7+T1Z2qd2ImJZlgEQQgAgzW38Y/jRB8Bl056pXtmv5UlUrgeE8E/YXTqhiJiqMm8mAGyXh9eOG7AAjEV4h+DKqjYA0W/eIbguFYgceURIJU2Lqt6FGxwJwXuPquK955znnIBeutxXdfdyNHpybL+aLkxyTFVWCwCKIgdg9TkD4AaYSHdlLu2vQgAAAABJRU5ErkJggg==",
            },
            longName: "food",
            classes: 132,
        },
        {
            id: 13,
            available: true,
            label: "SOAP",
            abbreviation: "CN",
            name: "Cleaning Agents",
            unitName: "Litres",
            weight: 16,
            colour: 43,
            price: 4975,
            penaltyLowerBound: 20,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nI1PQQ6AMAjrHA/XP/qYHWrqwbHAXIwkhFIa0hZAwo/aHJDXINmONHtJsUk+3Xbl2yQCJJ5YiKOgzxkDUpnDuFezOnaziiF04jO1i1LygFPqlb/IvTzGj9HKDUDci8fjWjORAAAAAElFTkSuQmCC",
            },
            longName: "cleaning agents",
            classes: 32,
        },
        {
            id: 14,
            available: true,
            label: "COAL",
            abbreviation: "CL",
            name: "Coal",
            unitName: "Tonnes",
            weight: 16,
            colour: 148,
            price: 3536,
            penaltyLowerBound: 40,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAu0lEQVR4nI2QrQ7CQBCEP5rKiiNBVCCO5EQFYnF9gT4zL4CoQFRUIE6cQCBIWFFR0aSI/pCWkDBy8u3MZDfQ9/yhaG1Ye8CY7W/QZQXGbFFVjDFf8Ax2rR8TLaoKsIDjKa1rwR1zfF0iIgCEEBhvhsTn4wqAr8shsdnhnFtMiEROY40ZKpKUplGq2332RE5ETbvDWksIARHB1yVd65FsT1VVuGMOwGb6o8uKecJaqq8POGmaEicp18t59t/ttkHo5cGo9QAAAABJRU5ErkJggg==",
            },
            longName: "coal",
            classes: 16,
        },
        {
            id: 15,
            available: true,
            label: "CTAR",
            abbreviation: "CT",
            name: "Coal Tar",
            unitName: "Tonnes",
            weight: 16,
            colour: 5,
            price: 4029,
            penaltyLowerBound: 64,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nJWQwQ2DMBAExxEFbKQrwCWYDigYKZTgDkIBfriDXAfOI0IBgxRlv7Ozjw3QWkoj+6zrkz5DSiMxRsyMeZ6Zpgk4i0FSizEeQC/WWr9FSUgi58yVOADUWk9wE82MUsqnuF+8EiVx24C74+70opnh7n8sur9+LgIEaK0/V7ofysvy4A1UmUNLwAc2TwAAAABJRU5ErkJggg==",
            },
            longName: "coal tar",
            classes: 320,
        },
        {
            id: 16,
            available: true,
            label: "COKE",
            abbreviation: "CK",
            name: "Coke",
            unitName: "Tonnes",
            weight: 16,
            colour: 160,
            price: 3988,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAApElEQVR4nI2QoQ6DQBBEXwkScXWIiiU5UYFYHH/eH6hAVJxAVCBO1Hf/gAq4a6Bt0pGzs28ne4B55g8Ve0Okwbnj72AKmBnOuY/wF6JgZgCbcJloAL7tmcYBVQUgxsi6sxATYRqHTPTebyoUqt16xi0nqhozI9wf2VPtKMwMESHGiKoyjcMyPJ8IIeDbHoBD+qNIkyvsZfZ8B5NSlbKquV0v2X8Bqrc7xKAY1TsAAAAASUVORK5CYII=",
            },
            longName: "coke",
            classes: 16,
        },
        {
            id: 17,
            available: true,
            label: "POWR",
            abbreviation: "EP",
            name: "Electrical Parts",
            unitName: "Tonnes",
            weight: 16,
            colour: 127,
            price: 6085,
            penaltyLowerBound: 7,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAeUlEQVR4nGNkYPj/n4EIwAJjCAgIwgU/fHiPwWdgYPj/X0BA4D8Dw///LhIM/3HxGWFWJ+iwMihIsDDIyHAwpCx4j8FngCj8j2ICNj4TzB0JOqwMNjocDHMSBLHyB9BERgaG//8jEgoZGBgYGHR0NBiuXLkBDz9kPgB9+2mSZDcjMwAAAABJRU5ErkJggg==",
            },
            longName: "electrical parts",
            classes: 32,
        },
        {
            id: 18,
            available: true,
            label: "ENSP",
            abbreviation: "ES",
            name: "Engineering Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 143,
            price: 7072,
            penaltyLowerBound: 2,
            penaltyLength: 32,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAsklEQVR4nGNkYPj/n4EIwESMIgYGBgYmAwNDBgMDQ4YrcxQZ/lxhZPhzhZHBwMAQQyEjzOorcxThgjop93FbvWDPH4Ynd34wLNjzBy7p4hPLEJFQyMDAwMDAAhPkENBhyNnwhyHCAS7E8OHDG0wTTzwRYbC4sYfhA48NXFJAQIRBREQEVaHEliUMVwwMGD701KCY+ObNG4RCF59YhiUMkOBcwvCfIaekFcNEhIOwAGQ3AgBUeTVvFQN4EAAAAABJRU5ErkJggg==",
            },
            longName: "engineering supplies",
            classes: 32,
        },
        {
            id: 19,
            available: true,
            label: "FMSP",
            abbreviation: "FS",
            name: "Farm Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 37,
            price: 6990,
            penaltyLowerBound: 2,
            penaltyLength: 32,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAxElEQVR4nI2PsWkDUQyGv3cTyEXAxRW/wYULFy9wRYorM0CKM2QMj+ARPMKNkCGuTOnS4Fe4TKEBAkpx9mGHBCwQ/JI+SfwJInggqqvoSby3T+T8/D/Y1TMK4O686JuBBHC3VPUk1mfnUBtarph/HKiBgYS7T2DaQfQS7s72MhBQgFegBkRQ9RJtKZgZe7MJAjgCb013b+Ya+6ZDN9q/PsfXECEtACjlNJpoNhNgZrj7CP6+Ki1oS2GQbtsRf6WkyDlP9Q+9rk0f6aQUlAAAAABJRU5ErkJggg==",
            },
            longName: "farm supplies",
            classes: 32,
        },
        {
            id: 21,
            available: true,
            label: "FECR",
            abbreviation: "FC",
            name: "Ferrochrome",
            unitName: "Tonnes",
            weight: 16,
            colour: 146,
            price: 4358,
            penaltyLowerBound: 40,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuklEQVR4nI2QoQ6CYBDHfzij8YKB8LERvkA0EHgB38DoA1jcbGQbm4UHMPogBh7hApsEA+ELBCIbBgbKLFy52+63393+HvQ9C2q1BAJYj4MxAQBhlCAiPO63f6MxAeLb2eJwPHO6XL/gaHJvnWwiMgEj7Blj+tEWhhYRwTk369Pprq3p2pqyVFR1BqnqAFbVi/VmS9M0dG0NQFE8iSKLqmKtJc9SvN8cd8ke9x4M4lviOCHP0uHHpYF/AE2nQJOj4LF2AAAAAElFTkSuQmCC",
            },
            longName: "ferrochrome",
            classes: 16,
        },
        {
            id: 22,
            available: true,
            label: "GLAS",
            abbreviation: "GL",
            name: "Glass",
            unitName: "Tonnes",
            weight: 10,
            colour: 214,
            price: 5427,
            penaltyLowerBound: 12,
            penaltyLength: 180,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA4klEQVR4nI2QIW7DUBBEn6sPDAwXGDjcwMAgwOEFgY0UEJCygB7AwJUKAwx6gACDSiUBlUJ9gxYEGAT4AAYfLCyM9Aus/qRSQJftaGZ3ZgJwjn/M3S1wt32kqRd/sACcq8sZANXrJwDt27MnDLZnUx0wACIxqpa6nCESs29aAIr5EmNGgQHouyMAkiQAqIZIFPLVflxe77ZrZ8w314K+G3eJQoqH+5FYrhKX5lNULSIxAOdz5C9leXYJ09QLVC2/ftOs8MRTd+Lp5f22RwC1A6qDDxNcF16uJgCk+RSATXXwwh8DnUfu5MyJ/QAAAABJRU5ErkJggg==",
            },
            longName: "glass",
            classes: 32,
        },
        {
            id: 23,
            available: true,
            label: "IORE",
            abbreviation: "OR",
            name: "Iron ore",
            unitName: "Tonnes",
            weight: 16,
            colour: 8,
            price: 3700,
            penaltyLowerBound: 40,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuElEQVR4nI2QIQ6DQBBFHw1iSSq2yQjESgSCC9Qhe4Aeg0P0ED0MEkcPQNI9wIoKxLoiNtmKDaQ4xsyIlz/zJoMYOVCnIxBAvg6tFAA0pSDnM4/XewdmEGMrBaIU87JsIIBoTdePafWa9A+J1lvS83ZNia2oKEqltaZEtGb2ftc3GR88Pngm98E6t4Oscwkc5i8614Sg8MEDMEyWuqqwzlEbQ9ePSWa9524uzMuSRJSibepNJjv68B+sXURZr1LIsAAAAABJRU5ErkJggg==",
            },
            longName: "iron ore",
            classes: 16,
        },
        {
            id: 24,
            available: true,
            label: "LIME",
            abbreviation: "LS",
            name: "Limestone",
            unitName: "Tonnes",
            weight: 16,
            colour: 172,
            price: 3783,
            penaltyLowerBound: 38,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAyklEQVR4nI2QLY4CQRBG3xDEiBYtkCVKIhArW7TkGOwJOAF+zN5gJFcgWcEBWrREjkCMqAMgELheQeidCYYvKfFVXv02UAofaDk15+MBABFhs93PwMUUijEAoCq16A18ya08KWVEhPT7U/MNlHI+HnArj28dt8cd3zpUhXE0ADbbPYtplZnhWwfAZRhQFcye8PJrvWYcDVUBIKVcV3gddr+eaPpuV1SEGAMpZWIMXIahdk45/+/Yd991fAwBM0NEZiDPh79H3+1m/g/Y+VYTHEBb8QAAAABJRU5ErkJggg==",
            },
            longName: "limestone",
            classes: 16,
        },
        {
            id: 25,
            available: true,
            label: "LYE_",
            abbreviation: "SY",
            name: "Sodium Hydroxide",
            unitName: "Litres",
            weight: 24,
            colour: 177,
            price: 4441,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAsklEQVR4nI2PvW3DQAyFPzsa4AoCcakhVGQ0jaCxUtLADXClShq4ggMwYIpAshW7MAHiAeTD+zlBJm/M+f9B9YrZ7RU3c1tVzYjI1lqqaj7+Tpt1xA+9d9wdd2ccR0SEYfgAYCea3VjXlen768lzmPMvo+oVgGmaAJClHPBQRkSotQLQZ0eWQp/9Lttay4hIM0szy1jIUsoBIyLP7r6XEJFd8RFrrc9ltqy9dwAul08AfgHGP3zi2tsw/AAAAABJRU5ErkJggg==",
            },
            longName: "sodium hydroxide",
            classes: 320,
        },
        {
            id: 27,
            available: true,
            label: "MNO2",
            abbreviation: "MN",
            name: "Manganese",
            unitName: "Tonnes",
            weight: 16,
            colour: 181,
            price: 3906,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuklEQVR4nI2QoQ6CYBDHfzij8YKB8LERvkA0EHgB38DoA1jcbGQbm4UHMPogBh7hApsEA+ELBCIbBgbKLFy52+63393+HvQ9C2q1BAJYj4MxAQBhlCAiPO63f6MxAeLb2eJwPHO6XL/gaHJvnWwiMgEj7Blj+tEWhhYRwTk369Pprq3p2pqyVFR1BqnqAFbVi/VmS9M0dG0NQFE8iSKLqmKtJc9SvN8cd8ke9x4M4lviOCHP0uHHpYF/AE2nQJOj4LF2AAAAAElFTkSuQmCC",
            },
            longName: "manganese",
            classes: 16,
        },
        {
            id: 28,
            available: true,
            label: "O2__",
            abbreviation: "O2",
            name: "Oxygen",
            unitName: "Litres",
            weight: 16,
            colour: 194,
            price: 5592,
            penaltyLowerBound: 22,
            penaltyLength: 44,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAeUlEQVR4nGNkYPj/nwEKLCa8ZEAGJwrE4WxGmEKLCS8ZHrz4gqJQQYIHrpiRgeH/f5iiFy9+oCiUkOCAK2a0mPDiP7IiCwMRiLUX3qAoZkI2wcJAhOHEhTcMJy68gWuAARSF+AALii+RTIJZjeJrojxDUvDAPYMnwAGk3Uc3BPqMrQAAAABJRU5ErkJggg==",
            },
            longName: "oxygen",
            classes: 64,
        },
        {
            id: 29,
            available: true,
            label: "COAT",
            abbreviation: "PC",
            name: "Paints & Coatings",
            unitName: "Litres",
            weight: 16,
            colour: 168,
            price: 5551,
            penaltyLowerBound: 20,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAsklEQVR4nI2QIQ7CQBBFX2FFBQkViBUVFT0AogkcBLHHQHAEDsABkIhKHMgeoKISgVhRsSQkLElFBUkRpSUrmnTMn2T+zMsfD5qGETUZYwIQQwOVvtGmJpI+qZoPG+NMEZiShQyBS2s05sE28wE4bWYIMUUlN8p7TRhX7Dt0URRosySSPnmeAyuOO5BByNU+3TCHtUabukebyjrqpD6rf59+Xo4KAGvbrU77qz8sgDf24V9HVTzBhT7piAAAAABJRU5ErkJggg==",
            },
            longName: "paints & coatings",
            classes: 32,
        },
        {
            id: 30,
            available: true,
            label: "IRON",
            abbreviation: "PI",
            name: "Pig Iron",
            unitName: "Tonnes",
            weight: 16,
            colour: 155,
            price: 4893,
            penaltyLowerBound: 8,
            penaltyLength: 64,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "pig iron",
            classes: 32,
        },
        {
            id: 31,
            available: true,
            label: "PIPE",
            abbreviation: "PP",
            name: "Pipe",
            unitName: "Tonnes",
            weight: 16,
            colour: 210,
            price: 5921,
            penaltyLowerBound: 30,
            penaltyLength: 42,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAe0lEQVR4nGNkYPj/n4EIwESMIsoUtvTMZNiw4yg2tf//w3BLz4z/AgIC/wUEBP5v2HHkP7IciokHDhyBs1esWINiHAuylTo6GQxTGBgYREREGHR0NBg27DjKEOBhjbAa3UpsTmDBZuWbN2/QnGCN8IyLT8z/iISC/7j4AI2mVrLKi7IsAAAAAElFTkSuQmCC",
            },
            longName: "pipe",
            classes: 1056,
        },
        {
            id: 32,
            available: true,
            label: "PLAS",
            abbreviation: "PL",
            name: "Plastics",
            unitName: "Litres",
            weight: 16,
            colour: 169,
            price: 5798,
            penaltyLowerBound: 12,
            penaltyLength: 36,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAUUlEQVR4nMWQsQ3AIBADD/YfiRFSZARGSJHSyGlAiFci0cWV7+3C+gQ2G8rDSG0JImeAUhvnPcPIXTbYpcrDvzEr2MelD+4HaS1E/nFj2n34A/x8nAXFyvvyAAAAAElFTkSuQmCC",
            },
            longName: "plastics",
            classes: 528,
        },
        {
            id: 33,
            available: true,
            label: "QLME",
            abbreviation: "QL",
            name: "Quicklime",
            unitName: "Tonnes",
            weight: 16,
            colour: 119,
            price: 4605,
            penaltyLowerBound: 8,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAqUlEQVR4nI2PsQoCQQxE34kfkOJAyy0C+gH3/3WE/YCzS7nCFfsBC7Fx11MsDKSZzExmJojgjzl8A2Y31vX+ixvR18yilBKttTCz2N+m/rqUBwDzPJNzRkQQEc7nEwDH7ltrpdaKu5NSGhic3hnNbgCklBAR3B13R1VH3lGmE1R1CLZte7nC1FqLPdAFy7J8ZD3knAFQ1UHqbp3k7ozW63ofrvsy1+sFgCe7KW+J/+44PAAAAABJRU5ErkJggg==",
            },
            longName: "quicklime",
            classes: 528,
        },
        {
            id: 34,
            available: true,
            label: "RUBR",
            abbreviation: "RB",
            name: "Rubber",
            unitName: "Litres",
            weight: 16,
            colour: 26,
            price: 4523,
            penaltyLowerBound: 10,
            penaltyLength: 36,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA5ElEQVR4nGWQIW7DQBBF31YGCwZMJAODBQYFBgGllQpyAMMcIAfoMXqEgsIcoNBSCw0itcAwwCBggUFhwAKDlbbAipU4H45m3vsaAylt3YpChVyEXJXX7x+WMVunad/u8X4A4OR7hs/ubtnUFckGvSG2x/7OkAFkRSQ6JRaOtvllaXjnmUxECCHA4AEY5cxus7sh/pXKQwgBEcFWSl44ZsOjEp9K7KaYZpeyNigIXBtGOYNfc+oOZE2fqCszqy8GdSW5OMrSAi8TsenThO2Yjq4SowAjBlJaPreuzNzbyZq3jy/+AV9RWIQq+ACLAAAAAElFTkSuQmCC",
            },
            longName: "rubber",
            classes: 64,
        },
        {
            id: 35,
            available: true,
            label: "SALT",
            abbreviation: "NA",
            name: "Salt",
            unitName: "Tonnes",
            weight: 16,
            colour: 69,
            price: 3865,
            penaltyLowerBound: 36,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAqUlEQVR4nI2PsQoCQQxE34kfkOJAyy0C+gH3/3WE/YCzS7nCFfsBC7Fx11MsDKSZzExmJojgjzl8A2Y31vX+ixvR18yilBKttTCz2N+m/rqUBwDzPJNzRkQQEc7nEwDH7ltrpdaKu5NSGhic3hnNbgCklBAR3B13R1VH3lGmE1R1CLZte7nC1FqLPdAFy7J8ZD3knAFQ1UHqbp3k7ozW63ofrvsy1+sFgCe7KW+J/+44PAAAAABJRU5ErkJggg==",
            },
            longName: "salt",
            classes: 16,
        },
        {
            id: 36,
            available: true,
            label: "SAND",
            abbreviation: "SA",
            name: "Sand",
            unitName: "Tonnes",
            weight: 16,
            colour: 85,
            price: 3824,
            penaltyLowerBound: 64,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAArElEQVR4nLWPIQ7CQBREX5uKCsSKFStW9AAIjoPBcwUSBKICblDZhENQiUBwgB5gxRcVFRUVFZssoumSEASGkZM38/8kEAI/KP0F+g+YfRpVuaPI1jjfsj9evzc29QGASUsMLUoghOZ84eHuWKsxRjE8R6bCI9IDUFY3kvq0Dcpq8mw1RzuF821sWuDU5BsG6Zn8iBNh0oIxity937dWz6fjCGtxMoNdNwDEQS8a0T16zwR4mgAAAABJRU5ErkJggg==",
            },
            longName: "sand",
            classes: 16,
        },
        {
            id: 37,
            available: true,
            label: "SCMT",
            abbreviation: "SM",
            name: "Scrap Metal",
            unitName: "Tonnes",
            weight: 16,
            colour: 56,
            price: 4399,
            penaltyLowerBound: 36,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAmklEQVR4nI2PIQ7CQBBFHwSBQKzAkiAQCMQeYUkqEJWIFRyDIyB7ARIEh8C3srJixciRyBX44kqWNtAxk0xe/rw/gbZlxEzHQACz74Nze4wxxBi7XVXlJ/FSXP+/PvsVIUgCF2497GiXNSEIWe45moio/i5zeNUA3FIuBXMaRBXd+WFHgGyxBeCB7RR6oJ1vEFVO95KnNr00gDf8eS++mw+W2wAAAABJRU5ErkJggg==",
            },
            longName: "scrap metal",
            classes: 4112,
        },
        {
            id: 38,
            available: true,
            label: "SLAG",
            abbreviation: "SG",
            name: "Slag",
            unitName: "Tonnes",
            weight: 16,
            colour: 19,
            price: 3495,
            penaltyLowerBound: 64,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAt0lEQVR4nI2QIY7CYBBGH6QSMeuQQ1K5YkgQKxCVHGCPUNEDIVbsgXoAZEWPMAf4kw/RLaTAJkzymcn7XiazAok3Zv24cN9h9vE/OAOZiZk9wS+MTmYCLOBqtgHUn18Ml56IAGAcR/46kzEzGU4jw6W/Geu6XpywjtgDcOgnS7XZkpn85C9mBkDEHtxdpUNmpqZpZGZyd7VtKzNTOaPyjZj+KLm7ynkqzLlDuoNzSociQofjabG/Ar3QXHxO/p3KAAAAAElFTkSuQmCC",
            },
            longName: "slag",
            classes: 16,
        },
        {
            id: 39,
            available: true,
            label: "SASH",
            abbreviation: "SO",
            name: "Soda Ash",
            unitName: "Tonnes",
            weight: 16,
            colour: 121,
            price: 3947,
            penaltyLowerBound: 14,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuElEQVR4nI2PPW4CQQyFPwhHsJQtKEbiCnsQjkNBSZHjcAwjzQGmoJiCwkhTzAEcmSLaBbIpYsl6kv30flYQwT9m/fugesHs/hc3YlpVDXePUkqoarz+VpO1+zetNXrv9N5JKSEibDYfAMxEszu1VvZnWXja1+4no+oFgHEcAbid0hu+lRERcs4AbI+V2ymxPdanbCkl3D3MLMwshsM13H2B6977XEJEZsVXzDkvy0xZW2sADMMnAA8anIFGZ/MoIgAAAABJRU5ErkJggg==",
            },
            longName: "soda ash",
            classes: 528,
        },
        {
            id: 40,
            available: true,
            label: "STST",
            abbreviation: "SS",
            name: "Stainless Steel",
            unitName: "Tonnes",
            weight: 16,
            colour: 125,
            price: 5345,
            penaltyLowerBound: 16,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "stainless steel",
            classes: 32,
        },
        {
            id: 41,
            available: true,
            label: "STSE",
            abbreviation: "SE",
            name: "Steel Sections",
            unitName: "Tonnes",
            weight: 16,
            colour: 209,
            price: 5839,
            penaltyLowerBound: 14,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAV0lEQVR4nGNkYPj/n4EIwESMIpIUsjAwMDBEJBQyiIiIMDAwMDBM6almwCH2/z8Dw///EQkF/2FsbGJwq9+8eYNhHbIYEwMDA4OJjSfcOhhAF2McuOABADlDJ5mgYO1YAAAAAElFTkSuQmCC",
            },
            longName: "steel sections",
            classes: 32,
        },
        {
            id: 42,
            available: true,
            label: "STSH",
            abbreviation: "SH",
            name: "Steel Sheet",
            unitName: "Tonnes",
            weight: 16,
            colour: 63,
            price: 5715,
            penaltyLowerBound: 14,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "steel sheet",
            classes: 32,
        },
        {
            id: 43,
            available: true,
            label: "STWR",
            abbreviation: "SW",
            name: "Steel Wire Rod",
            unitName: "Tonnes",
            weight: 16,
            colour: 111,
            price: 5674,
            penaltyLowerBound: 30,
            penaltyLength: 42,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASUlEQVR4nGNkYPj/n4EIwIRNMCAgEJvw///I2MDA4D+6GNRW7IoCAgKwK1RQUCCgAY8iVGcgGY9LA06rkdlYTcSt6P9/RmIDHABgeIn0VhHRlgAAAABJRU5ErkJggg==",
            },
            longName: "steel wire rod",
            classes: 32,
        },
        {
            id: 44,
            available: true,
            label: "SULP",
            abbreviation: "SU",
            name: "Sulphur",
            unitName: "Tonnes",
            weight: 16,
            colour: 65,
            price: 4317,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAjUlEQVR4nI2PsQ3DMAwE35lAAVymTJExPFJG0AgZRyWH4AgpVLhwqeKBTxFLthIXJsCC5PHJHwAJJ+Ly28jpCvpwxEo1cwpiiSJNOQXtZw1kiaKjQXSIJR6ADuUUNlWH6OjBvUK3QGvwZuYeMdsLeBjG6YnxtgA0zO/wnZPWnaqKf7+2Yl1odc21d9rMBx3pzQzX2XxIAAAAAElFTkSuQmCC",
            },
            longName: "sulphur",
            classes: 576,
        },
        {
            id: 45,
            available: true,
            label: "TYRE",
            abbreviation: "TY",
            name: "Tyres",
            unitName: "Tonnes",
            weight: 16,
            colour: 10,
            price: 6126,
            penaltyLowerBound: 8,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAW0lEQVR4nGNkYPj/n4EIwILMUVBQRJF88OA+nM0IM1FBQZHhw4cPKAoFBATgipnQFX348J7hw4f3UPYHuC1MyCbAFKCzMRTiAygKBQQEsbJJ8gwjcjgSFTyEAABp6i4Ik4wOWwAAAABJRU5ErkJggg==",
            },
            longName: "tyres",
            classes: 32,
        },
        {
            id: 46,
            available: true,
            label: "VBOD",
            abbreviation: "VB",
            name: "Vehicle Bodies",
            unitName: "Tonnes",
            weight: 16,
            colour: 126,
            price: 6044,
            penaltyLowerBound: 5,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuklEQVR4nI2PrQ6CYBSGH5yBYDhsBAKR4CaBYCBwEVyAgQswGLwAg9FANBptchEGg8HCZjAaDGx8d/AZPiYwdeNN5+c577tjgdYM0GgIBDDudVlJHLlcbpXpD7PPygKtycoeH0cu980UAKXqFhRxUEEO4Rwpkq9YpWosgq0GkGpnhkGOPFamTs/wejaO3tJ8PfHMufjgeq2d5yNF0om2Fy3cJKj4SGrvO890JOKg3DVpeAWgKE6/wX96A9oLNSJVybe2AAAAAElFTkSuQmCC",
            },
            longName: "vehicle bodies",
            classes: 1056,
        },
        {
            id: 47,
            available: true,
            label: "VENG",
            abbreviation: "VE",
            name: "Vehicle Engines",
            unitName: "Tonnes",
            weight: 16,
            colour: 62,
            price: 6209,
            penaltyLowerBound: 6,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAU0lEQVR4nGNkYPj/n4EIwESMIgyFJSWlWGkGBgYGRpjVAQGBOE3bsGE9xESYThUVFaw03Oo7d+4Q58YPHz4w4KNR3Ojg4IjTtAMH9iMUEmU1MQAAxXYile1Q6c8AAAAASUVORK5CYII=",
            },
            longName: "vehicle engines",
            classes: 32,
        },
        {
            id: 48,
            available: true,
            label: "VPTS",
            abbreviation: "VP",
            name: "Vehicle Parts",
            unitName: "Tonnes",
            weight: 16,
            colour: 207,
            price: 6168,
            penaltyLowerBound: 7,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAsUlEQVR4nI2QvQ3CMBCFv6AM4AFSHJJLiktPARuYLRiALnUktokHQcIDIOGCAbzB0YCBKAVf9XR69+6nATP+oAXAj5/KbQAghEMtxTixAsB1hGPH6bwFP7Lb7Sml4L2v5gbM8CO47pNaHoTNZSERCF382SnGiZQSpZRZ4je3AZF1Nanqy/hCtQcgpSuqPTlnROTdYAZmqmrOOXPOmaoamIlI1e38XyJSdc732dULo+c8ARxKSdQm/5XAAAAAAElFTkSuQmCC",
            },
            longName: "vehicle parts",
            classes: 32,
        },
        {
            id: 49,
            available: true,
            label: "ZINC",
            abbreviation: "ZN",
            name: "Zinc",
            unitName: "Tonnes",
            weight: 16,
            colour: 190,
            price: 5181,
            penaltyLowerBound: 12,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAx0lEQVR4nI2QoQ7CYAyEvxEeYRKHQUyUhEdAIkhAIBATSASShImJCQQCMYlAIiDB8QLIJVQgEDwAAjGBJCmC7GdzVN31Ls1dPTDjj6n9YwKol8lmewBARFBVJuGgLJuBWaZ3y/Ru3d7YRMTxQvfArLi02x/J8yfv1wOA6SxCROhI85sxXSeICKNhvxRj7yIAeGAm0sZvBCyTGFWtGAAm4eBXJs+fzKMYAL3evqWCVvU9qhe38H3fYb3eXHP3x+x8qpgA0tXC4Q8rE1QUzT/0LgAAAABJRU5ErkJggg==",
            },
            longName: "zinc",
            classes: 32,
        },
        {
            id: 50,
            available: true,
            label: "POTA",
            abbreviation: "PA",
            name: "Potash",
            unitName: "Tonnes",
            weight: 16,
            colour: 83,
            price: 4194,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA2klEQVR4nI3OIW7DQBCF4d9RDmAwwAdYsCAH2LDCBY1Us4IcocBH6BEKcoSCsIKSBeExLFywoNDggT2AJZdUrtRWVQeOvpn3GlgW/jGb74s09JyPh79hGnpKnsilkIb+d3iKe6xLqFZC8FTNnOL+JzQzNEVC8JQ84XYXzGyFDSxLGnqqZiRhZrS2BWAcM9457p9fvz5KwvmOXAolT1TNWNuuR81j8Iu17Rrjdhc0RcYxr10lsQnBE27eyKUgCU2Rqpnbu/cVOd+xjU8vAJyPhzVGEu6z0kO6QoIPDJ1g4JB3zBMAAAAASUVORK5CYII=",
            },
            longName: "potash",
            classes: 16,
        },
    ],
};
