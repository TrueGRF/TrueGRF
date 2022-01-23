export const config = {
    version: 3,
    general: {
        grfid: "TRU1",
        name: "TrueGRF",
        description: "Your first NewGRF based on FIRS4 BasicTemperate (some industries are missing!)",
    },
    industries: [
        {
            id: 0,
            available: true,
            name: "Cider Mill",
            colour: 191,
            fundCostMultiplier: 50,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [-1, 0],
                    [-1, -1],
                    [2, 1],
                ],
                [[2, 1, 0]],
                [
                    [-1, 0],
                    [2, 1],
                ],
                [[0, 2, 1]],
                [
                    [2, 1, 0],
                    [2, 1, -1],
                ],
            ],
            cargoAcceptance: ["FRUT"],
            cargoProduction: ["BEER"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 91,
                                left: -31,
                                top: -60,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 91,
                                left: -31,
                                top: -60,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABbCAYAAADDeIOGAAAU8ElEQVR4nO2cLZDcxrbHf34lINCgQQMBAQGBAQICAxYsWLDAYIFBgIFBgEFAwAUXGARcYPBAwAUBAQYBBgYGBgsMFgxYMGCAgMAAAQGBBg0aNBBQ1T7Qao00O2s7jmMnr3KqtrzzIanP/3z9z+lew/8Def62vfvca6MvuZCvLc/ftnf1rvlD9/hbAvDmzZu7/1bqi9zrf77IXb6xvPoue/S51/4tPcAYA6g/pHiQv6UH2D5i+7+Xf1h5+JsC8CXlHwC+9QK+tfwDwLdewOfK9e6nz2Z/c/nbAfDkh/O7Ib6l6+wXAeFvBcCTH87vEiWn118ChL8NAMfKB/mjIPxlAHjyw/mDSgTlo/4MObjp/aHrgc8H4dVvb+++CJv6oxIUTBIJwH9+fP3o+DNgUj5OU5JUojtLKp4wyA0AaSq5Wr/8qE6vfnt7B9C79/ylAAgSgKjqlvB+1J8BMMRbkkSSpOP79gLwykRp/EEQguIBsKHrvz0Ac+Wj/owh3gKgjSVREjk4Wl0i02b6fA4AeEWiNJ5eH4NwSvHw/b9MN3hK+ag/ozUGpRQDDSK6gQFAAoccEJQJinWd5dd3P94F7wiKh9eadyTERPbi2wJw7Pq2y5Fpg+syerchziBLHDYSExgybUjG78fiMQBd945UPIF0g+4sUX9OXe+5eLIBPDCGniT1r1OegPVh85epAr7H97LTN3T2Atvl7O2w+DzkAvAKACSppHPvME3Bfqf4+c1/2Oob4OAlqXgyeUDn3k3XfjMPOI59NU64BvyMb6dvQMM6ucT2ij7ekSg5fj5el8Z03Tsic86+3vO+/g9SKR4XTycAojReKK5cjCImSmPvLV9R5wdliLdE/dkU49mQEJcJWnengUjk5Opzxc8vLgDIyoTta39v3dnJ9RMpp/fMbQYk3waAObExY1wbYzCUZElFG2meqe/Ymz0k0AzVAggjVhhjJsVXRYkwinXm79/PnpWKJwxspjxg2hWQ4JRms9l8ew8IGV6NMWAjAUBLTTPUpDIid+UEhOlqXuubhcX7fYRIW7SWaGMpC/j+qgR8BTBNgdY+h1zXb3jx4ieur2vgG1DheewP8XZKbvPfsyGh3x9s0wwVvagpioI20qyKkqIoKMoSYyzARJgSJdHaUtUturPozjLEt4gyQpT+ntfX7yjKEvgGALguo6m8pQBk2mC7fJHd20gTrwauiqeU6Xc8Hn07gHJxeTH9LoxCpC1ycNguB3xSTcVjtLYTGOerQw9RlCWu8vf/6iEgq2sALFc0HYi0JUkbBhr62KINPLv4EWAiRkHi1QAahJbEqwFX+RK5khE2EiilMB0o5ctmlnilNVBtUs4vOlzxFFcNqGxPksqvD0AifYxzAoh0JDYq24/f9u4cJFjdJRY07Pd7RNrihscQbRHRDSKBVpfTNXs7sM6fsdUb2Fzw+GlH11l/729VBvemY6VS/6K65vHLV8ChoQmLA98YzUEA7wHGWATKx/4s7QdPGOItFgH4a4uyZFttYHNBeeFb6G/iAUGUEKQ/vARmXF3GY92WU7sbRKYrwIeASyxi42MfpFe2y5FJtcgl2ljW+TNcYqmr6iQI3wSAp//7Fphb/NCoKN7f6+4AbLeffq+rCohYyQgG3yvItMEiiAZGbnG4NkszsjSj7dp7IHzVdvjJD+d3ZZF517MXDHKz6OiC9eddnO58Fgdf4uqmI3YFIm1ZyQg3XB48ID1slc+tDx6E7fZ20XOcJV+xGzzu/IJy874+KN+5dySpxDQFRhtSsWK/39N0oFJLkltAYgGrDUqdAcaXwpFIzUV3HUNluDT19F6l1ljdfB0PmCt/PM3p3DsUYxiMbq87O1JWz9yKoiB+47s3W14Bh6oRSuWcVh/H/lOjp7VstjWX6zOkijDW/vlEKCgfSEqQ4OZJKn3HNoZAfZtg2tWCuQFIEVGkCbK6RlbXuC5jv99PhAqY6HSQufJKSqw+lIuf37wjGsSfFwLnT8s7JQVB+cD5gwQ3f6hJKSgW94ujmNt2vyifMOcR7z0NHq2/1RueGo2SkmavsdoDUWa5J0nSg/XFATh/Wt4BxK7AOdAcmN5cQpmbu/qLFz/Rdn5JV1dPaLuWbASiKvbEmw4lBMY5ijTBOHcCCIvWhqdGT+4O3jvSPPP32u4mIL4YAEHxIDt9w6ooocsOlHfMAwfFk4Ob18smpb72gHXOW1ZJgbkoofVufNvuOc9W9MPo1iMQyerftNRcSUlrDxn/ZrdFNQ1lnlOeram2O/oo/uMAzBXPI0MzHOJQKQlq4HazYc0lTQdWKZRSJ1396uoJ9XXDVfF0mv4qMrS2E3g3GZS1w40rj6OYne1Yj4XfGEOyvcGuz3hS+sRYtQ1l5sOwajywAYTPBuDY4gDNoFDyfhkC38jUdU2j4cX3p129vm6mJgWyQ0kc6XAAoSpAbDoA+qFHDJ5Z3rZ7sjAKGiUo31nLu2pLJhVVwxQOvxuAY8WPFQ6LXCeX9PuxgwufJSladydd/aC4nMgR6YZE+lxxDEIIhziKJ28IEuLbr8975K7d08pLsH5W2DUt8DvmAedPy7uQ2ec/iZJI5+M7jLmi/oy8tIi0pd9HrJNLv5hx8VdXT6Z+XGV7inN973lzKpykEkU87RiFnHCT+e+I4d7lKKXorKXMffk16XcIIRffkckn5IDjTcvjOX7UK+IM+raij74DzIKS5qVFG4vbZ/51VE6uroiJxROwTIPLyF7A+DtwoMdpDF1/MhziMRzmihl9SIBVWpDFkrZrF9/7IA8Iih+TmKhX0xRXqcPQIs5KrNn5RRsmj7BdTpI2oOxEWopzSRhtd927BTOc7+J07t0EAhxK50PhAD4pRoMAeow1QD7+GLI0w82werAMPvnh/G6za1gnl1MdD21mGF3b2TaW6zL/WToudLbTa7vDjs/8/bCzO7f8IDe025o4TYEDRTb0frfn1gCJzxdHINxkELcHxYKkeUYWHSrExb9/Zas3DEbTR/HpHPDu19tHq6Jkp2+mGV7n3vuuKxJ+s3LcqnZdRjNUNEOF6zLKIpuU7GWBU5osqe49I0nlZG3wzLDatbS6nAYghh7bryeyJMqI4iqfXh/nhNUzP1/oo2Ur3bYd2Uoy5B2bn38gufaJUJkPhEBIWKaraSM91XGRtoTby8HRDC1RmzBkmmaoULtLsssE3XWYtiJyHXbc5T3dqfnBZQiPZMwf+52iKFZobXBK45II3XW8fXnD6kpRpGoKDT8EhSRR6FExJ8fDE02LTgybV+PEeXxuNAisNJ9WBZQr2OkbT2C6DGMMeztMCoXsGrUJW33jlZ+5ITDt8Wltp4XrzrJrlylcG0vfVpPyoowwxvD25Q1JmiKEpCjLaWcohObO3LL5+QcAnDSLxihq/HVCyHsl85MACAruqw1toxehAX7YMP/eXPmwx5+Kx/c6wiSVrLOIrvfldBA+Vq3I2DWvcUrz9uUNRVlO9w7POoSB4vXmFy4uLxb3PjbAtMbBc4OmvOJ9kZ0GIHtc3IUNBynldPFcSaUUO31DHpW4QS8eEiQaU64bLqdeffG5vViAADCIFOnaSYljxdNcIrR/77p+h0sscrR2sG4fxcjkkAfW69L/W65ZPXtJfV4S6d94IdRpAGS3R+uOdXJJkpVLcMaF7KvNFBpOmQUQQaYydbS1fRwGAQSANHaY5Bzwk9wwz0tziasGduYWl1heb36hr5c5JRCieOgXvX/bdqzPc7SsSLmmuK3YvfEzxpMAVPXwKK9qTPuGrb6ZFJPj7ur0wMkb/EZF8Ih+Hy2GmH28Q6bNvY2OQW6mMdjcE9LYEfdrD0guMTs7uXpQWip1z+PA9wb5KiFfJSipuE3O0LIi0r9xsddkWvHWpkgRPQwAgIwkuRUEIKRSRCIllsMExqkFhNCIXTFtgQVCFGjyXObkJ4DgSZY66erzZx5PgFzkidB1tOaXKEZ89y9SrnmmHa+uBe93/jnBcF3TPgyAHSxSRGRSLYDY6puToRFkHhqhajSVpI93GGMO54DGMAgnNXRn/RB0TG4Pufpc6SzzSfP55Y/jqNzL1bDjnBb39r+TqwshpynQHMQPVgHrBmpnKNKEYYiROuJUaBzLQ1XDGLOY4YEnO3PFP+bqQWkAbVvqqsKZN6xvqykHvH1/y7lYL1z92HPiq3/RlFcPA7BSKUWaIAa/8xRFPSqO7wEhlaLfR3xq1ZjvDpt2NSkOn+bq2rYILSmKAhHdsL6t2P22wY1OEiZEXdPe6/4AbquKbCVpqYnbNx/nASuVTswvTxOKRE1AxHaYgPi9VSNMdZNE/S5Xb6lx5g1Pjca8qw+jMT2eIp3R4PDs26oizSXZ85e0j8+J2zc8047EfWAgosRhMQFd5w577CqOgRgz9OQ2xpoao/Y0w4o88iCcqhoGXzVqXWGNwdWGi+TCWz3OFko7PI/QtqWtah5ngvVtRWcNGyCVijLLffu7axYsL80zqCC++hdJotjqDVmreWYFQwRD5Kg6fRqA7HFx1xpDEkmUELjZZ/3QU4k1mb3xI2o7JsxIIi0TEDJdEUVj1eg8GFJmtN0tAEVRcLvZLBjcsasnWh1cfaOprj2fSKVCSekHGoOYen8xLENgfX51T3EpBeAtmkX9aQDyqmZTFuRRSapvUBwsad2ASGTYdUaKCDv+bgdLJhXSDguPWCeXKKXo7Qmwx01LOFj9+eWPbPUGYTTrW01nl4oD5KuEF7cR/y6WlDeOYpLvf+K13nDRvpkUN+OJU2sP5izP1qcBuNE8uqzqu1h2bLKUPCoZVgnO7adFzwcLK5WixxvLVNHW+zFZgjoRGg9JcPUi0jw1fhsLPHdP5xY3BmsGstQPOvy1B8XiE4orJaiaBuccQgjSEcgHc4CMJDjvDVAjpPRgJCVzAmrdQCKhSBP2w4BwnpCslUJbh+khtj35LDT6fYRTB8stsvpGL2JcSYmwimQVTRY/O1vRNGPHN5a+DksaSVZpinQ+xuu9pszzSfFaG5+7rPNA2A+cD5jiOvJIBTBi2VFlKfn6GW48jQk+USotQ3ghhPBnei2EZDn3CDuskEr5CXF02tUni2OwRi0sDj5klJG0xWNEtSVRgnawlCQL5bfjBBjA9L6ca+tIPuQBcyBWKmVvuoVXxLKjy6+Q+tpXDHc4qRIIibZuSphFktIPPdbFs2QZsbbDR2M8XyVYM0wWN9YiVQSx45coJv7viwn0AbC6XyjfWr+yTMb0cY/pfRXrh/7DRChPk+nG4A84JVIgI0nswFWv6QXcqjXtYJelcyyZczJi3TBR7NBrdNagxnKWr5LDgUkzTHU8gJJlKUpKduljfoli+u0vFLfV5K0hrjtrSfMM59ykPEBre+J+OS77IBGKWRIh8GUmAJHigWD3mo1SExBzOdUwBSCKNKHMclZ45X+uFUPkyFce+ADGscWD4tvbmmHEPJw+ixyUec71+xtqbe49W6iDNprhwwD0x68HvxMz9wgYO8eqJm6u2SgF62fUKueUBIoNM4IlzcLiQR6y+Pa2ZtPtWc8YYJDgBc45WpFgj+iwMwet4g8xQfAe0MYWMWa2QDObTiNFNL0OLnhcNXZFSv5AwzTt88O9GAfoG6D0Fi+3v1B0A3q22/uviyv6BnZUCwYYNkCvxzezLPNrtBZGvtHHPRDTi0/cG4w5jJvmiW2uxAIIWCTLuiwgKpGVT5hO+M+FgxnHmrL6Ln3M9nwzKb5tPf9YZ6txs8NLtHKwOyTdzlrfgjuHHFvfQMellJBlWGuR3R7iT/CAIE4sXwshJyYIkEmFdeOgRES01kw0eQ6ELa9o9Q2Zk1MYBZnH+CmLP7+8orOOVEpKcjrriIeDO/dDz2p2Nm6hOEfDk/WapmlQTfUwACa2KASq9zeYb0AeM0HwRKizEalU1M5MYMRRPAHR714vKHYWSfJV4i2uDxa/6faI4b7F46FHJvE071NKQecXEkfxtOdfqxwpJUqpKQSOJcsyuLz8QDfYS/pAasY80w89Ji/nXntSjndr50AEbwgUexcN9ywuBm9xYwwrcsrMYIwZXTynPCuotjvMmNBc5NcWtrzzPJ8UDx6g6/EESXG1eP3Rdjjk2JADCtOwH+f3/cwFnYDYHUpMqBjausMBabhHpgqTPBjjfRSjcnCGaau7ahqq8ahLmDbPAe+sJTvPPqr4y1/fP/ogAMdAiAHk1fdQXZM174lVOgEQqkE/9PSIaTg5JUxzSJgLiu3AjNQ2WDwo1lmHjQ2qEXR45W+ramp6nHOcl+UiBML7qZQfVTzIgwBEV89o25a0vj3wgeoayisS+Z7eDv4g/ugjwnmLxSwtEhLm3FsCEKsRxOBd8339VApSBBUNMb6rq7VBqNiTr/G94/sCuM1rkotnuM3rBxX/KAA//fTTI4CXL1/embbFdXtsZ4j1G0gElFfI9j16eyAifjHL7B4SpreQY6XS8TyPp84Z5SLGpxMdo3sbayiznH3X0dqeDIhjb+3O2sURmSEajXHxzCuu5IOKfxSAU0BE1TXdvvPs6/0IxGeKSsccIw3CKvY0U4wDixiXSUy9m+WG8bHGGs9MR4+LBsGQe/f/mOJBPokHwGkgbHd/GjN3SJOXRA8wQdXLyVmC8idjvG38Vna6AmHphxblYpDLAeiQS2ox8Ovr+hHUn6rW7z8ldgzEbrtfdIHGGp8EE0GhGzANvTyQkOMw6axdxHgf96RIX3KNIZ0xuizLUMpvtPb7W+IoZsglZ+fFaPFPV/yzAQgyByIkSyUEXWg/xxwRkuWpigHiXownvk8ijuIJHDjU9qm8JT16SHn16tVnKR7kswEIcgqI1hr694dkGQNxdY3dPxAOSlHvKgDiPqYfHcbYgwdkWUa8vUGnMbLreXm9+SJH/b/43wsEIOLt++m9eASiffOKRIqJJMWJwHaGi7OCnyuLtZbMaVQcT+RJCcEqz6nFMLP4l5M/7Q8mnj9/7k+Nz4AIrNCHikGmCtsZLtdn/Nq5ib8bY0ibHeCTm0rST87qv1f+cAg8JMFSz58/v4vMlqixwIFZxlGMcIemMh/rfxJ1lJdX6MTnjM9Nbp8qX+2PpuY5Yi6d9R7QrM6QMwr7Z1n8WL76f6Ly8uXLu3h7gxv/lCUAUI9s5mspHuSb/S8ywSNyWePcxynrP/KP/CN/ivwfWiELaqml7J4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 91,
                                left: -31,
                                top: -60,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:FRUT [] 6 =\nprod_cargo_types ctt:BEER [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 1,
            available: true,
            name: "Clay Pit",
            colour: 45,
            fundCostMultiplier: 200,
            probabilityMapGen: 7,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, 17, 16, 15, -1],
                    [14, 13, 12, 11, 10],
                    [9, 8, 7, 6, 5],
                    [4, 3, 2, 1, 0],
                ],
                [
                    [14, 13, 12, 11, 10],
                    [9, 8, 7, 6, 5],
                    [4, 3, 2, 1, 0],
                    [-1, 17, 16, 15, -1],
                ],
            ],
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["KAOL"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEDElEQVR4nO2ZIXTqSBSGv+6pQCBGjEAgRkRUICIiKioQiIoVCMTKCkRFxROVFYiKJyqeqECuWIFAICoQCMSKioiIiIoRIxAVI0YgEHtOVqQTAqX73raBmv4mhEPuzP/dOzeZcMQnKR5cZDWpAEgfY/746+HoM+Zx8EHT+0G2sgZvHsCfr6whGvx50DkdbLD0fpBtnD/GCHmMFKL4zkM5JIi9D5LeD7L0MaZ1GrHQCc0gJH2MCQJJ58eE4e9nAASBLK6xzuHsPwB7Xxp7C57eD7LFsgZAs74C8syWNRw9IIWkd34KrI3X2opauiiqwzrH+Y/JXub6W9UB0/tBNv3WzSA3LldPLHTCyhqscwDr4zI/DhfH3CaOy0lCEEhWcwOA1hbrHFIIpt+62U2vlW2P91FVRvV77zRDgXqWBIEsTAJIIYomV5avgNHzijAMMcbgnGN80UZrSxBItLYApCvD7TitvAo2Ak6n0wzg/Pz83QPd9FpZq6aKcyGPAYo1DTCrNbDWQvyArAviWhPnHJ1OB2stSZLw/awF7M+410bg0WiUAYiXtVclCFgbT5KETqdDHMevjJc/G2P23qQ3Bri9vc0AgiAAqgEBEIZhppR6Zbzf7xPH8Svjh4SwM3iVIMIwzIwx9Hq9ncavr6+ZzWYkSfImkH1C+M/AHwXhzSul8BC8qbLxn0GYz+c45/YC4ZeCvgdE2byXMYbr6+udWS4bD8MQgPl8DkC/3+fu7u7zAHj9HxBCiEwphRACISKcy8t/uxJ2rX1vvN1uAxBFETc3N58PwOtXQIRhmOXmBVKeEicxqqkwZvYmhG3jEGAWhv5Fm6urq70AOH7PRT4b2yDKzxFCCIIgwFqLUk201kgpcU6glGI8HtPr9QjDkPF4DOSl7pzDWoFZGKJQ4pxDSrl7IhXoXQC83gIxGo2y4XCIEAJrLXGcIIRAqSbWCoACAqyN+1tlDsq9/N5+ZIo/1YcAeG2DgPWyAJBSEidxcR4EAVrrwrhzjknSoNPJM+2Nx3EOyFpVxTR3qhIAXuVG1e12M/eyHygvAWt1AUcIgXOOqTmhJtZxvPEoijDGYIypcpobqnw3CHDZ3dy1jcd3xRLw8g0SoN5oABTlHkVRsQwAtNa0z+qV7wSh4gqA3PyTNbjlOnQURcTxDGNmG88F283NGy4bN8Yg6rqIPZxUuzGqHMBwkh5ddlvZE5py5SqlkFKitS4Mbje4XcZFHeZ/L48A5qRVT7d6AJBDAGif6QwoQLjSOwLf/MraNn4iFVVnfFt7AeDlM+dBOJffJn3mPYDl8zMr52jUNa5u9prxbR3srbDvDQBumYPwm6RTlb8skY0m9nmx96yX9Sl/RviOfiIVT3ad8S996Utf+tKB9S/EHrk662ZZjQAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACSElEQVR4nO2Xr3biQBSHP86JiKgYEVGBQCAr9wF4AETlCkQfoKJyJWJlH6BixYoViBWIFUhkBRJRERGBHDECgeg5WcG56e10aEg3CfRsPjUkZOb+7r+Z6XEiZpNxbpIIZ58B+PrrT+8UdrS+6OLuOhfR2gHDYUKa2tYd0dpii7vrXMZa9KZ/QX+zBSBNLcNhAsCX6c9WbGt8kdlknAPEowH9zZY0tcU7k0QkxhS/rXMkxmCdAyAxpnFHNDa5pLqkeTwasFtmmCQC9lkgYy1aSIwpMqLJ0qh9Ukl1EQD76MfrDc4+Fyku4vyoC1ImPnU7IqprotX0Jk9TWwh39qWe2Wyx6r/WOUwSVRa/3mV1mVvwz95cTW9y2EdUd3VJb40vtor45TbjYb6uPWM/PKEI9wXAa2G6D4TqXxMSv95lfP9dv3ChcgmIcOCNSBk7a4PfCtL99fchmhYPFRyg93Fpbn4UD0VZBOomqL/xyS4t3+4fz+McoIXD4WiVoZ2ldwifNsXDOxkg+7gcVKTJHUK/850kKS+i/RJpqsEdw5tF/Rr3o1UmVBMqA012uZ+3zYj7FBZLxP3GtLu6wASaVUhQyCGhjr/cZgA83J8m6pqejriOdOjsXoY+Bxx61naNl1EYoo+wckOzzr0y3hfzXnpr4tGAp6fVWQkXSntA6O4einToeZHqJ2pwx3DQMLnGVqWNw0udlBo6m4zz0FXW57MJF442eP7jNl8tllzFA+Cl/udZetYpXkZlw6VZfnbhHR0dHR0dHR3/PX8BxYKXQA5tTngAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 96,
                                height: 86,
                                left: -63,
                                top: -55,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACEElEQVR4nO2XoXPbMBSHv94ZBAgECBgYCBQEGBYEFBQOFBQEDAwODA4MFAQGBOwPKBgcGBgoCCgcGCgoNBgIEDAwEDAQCPCdBmIpTrJLt7W5czd9RD5Zp7zf7+m9yBCJRP5nTo618cW5cP7523d7tN95Ks8e2PTdKydMjW4sP4wO83014dmCmk5yh8wQosbaIZgSANNs1tzcFr0zIXnqBvPJ2FksQgmgXk+24gFkmoEpt4zoE39twPzD2KEBBQKB1a0JmtYMsNoGM+STrT4OfxzWfDJ2KIJgP3rRqM1a/77P/LYBXeHYDKHA2uF6bE2QMsWY6mjBHoNHDegedS8Y6lb09tqu+FASADJjdnPXuwYIBwzwwr0QVUl0aoBO5u0QIeqNUAhH3s+ty6Dc3b437GXl0/zKGVNxv0zJk+VWnatKUogGIeq9jboZ332efe3f358nBDabzVxSL1CVxOYJomjCWIiG3CZBvJTpen6lUWenB+v++uN9b8UDnNy9v3JlShAqRB1M0HoVBGu9QqnBdp23F57uKZEyRT8se531LiHI6SR359kpZbpuZqqSFCsNMkOpAaLY3GR8L9jt+n3P9q/YC3g6yR1APlAsR2OSekEzvNwaR6MzjCnRD8uQ9bfXty9OPBz4FuiWxuBCYTrXW39CXn9evEjRXR4V8OXNpfNNEPgnREcikUgkEolEIhF+AtrgAX0wgYVgAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAD+ElEQVR4nO2YL3TqSBSHv54TERExYkRERAQCgahARFSsWIFYUVGBeKJixRMVTz5RUYFArHhi5RMrKhAIxBPIigoEAoF4IgIRgRgxAhHBOXkizJBAaHu2ELrn7M8w+dNJft/ce+emF5xJ/vVdJoSH1iuE8Pj5T//iHO9R+0Obt18zMzbmtV7Z68vR37W+U20PG3+5zqZBB1LFY7wqXTMAhPDscV0gTv6Q6cNtptwmLCdIIQAYexG+lPz1NN27fzcqTg3iZJNPH24zpbU9NuZnruYyzcdjL+JxvrD3VKWE0alAHH3S0fe7zJ0npK2AIFlZw3GsaDRk5d98Wvh2bCCY8a6ODeJok42+32UARfNJ4FX+Aii3iUx/AnkkDCdLUi+18xXNF3eLY6fGuyfp30R5VQ9BynwlpQwArGkogynKlSGpWjD2IgCGkyXLtdozfarUOFoEvASiqCBZobRGCmF/ixo7DXClrQ1VEHZT5D19xNFrQBEEVMMoRoFJhV0YVQUStlvl7rl/21CdbBewIADZ9pEywJ0n1mSxBhRVBLELAfaL5KGoeGtqnLwPKIIghGazXY6AijSAcm14mq9IUPbat+5vAOjCNvtl8FyKjvz66w1VrW1n/ybKZNu3fYAxCWUQxbErQ0baYThb0/8zL5TGeBzHdm7TXbort/TMm0sHgPv7+0qvtX8L9G+irNlp7+0GVbLFMuoC+8an020nuXAu7diYjtchXT20BVerNd3HHyXPzrvcvFOmLzCRUIqCjWlF9Yq31RTa7e3x5pxWa4RykEIwWj4jfR+lNc9JzFXQYPDpj0xIh8630QWcCYBSCQTbniB2Fe6B1Yat8baa2tUMGpcQF74l/AgpBFLkkTOaT7lutRnNp7TckJYbAjBPF1zR4P5zJ2utnHMBWOaDYNswqc7ng6vdWcf5rrExjx+RxJNSL+F6KWlaqB9JPrbGvTXXQtJSIVqt6T2OL+AMNQA2O0MIl78/2HMHjW/OF1c+iWfbyfzIbqcm1FtuiJAO+BHPiyeuXBet1gB7NaB2AIPBIBObPH8pzI1cGeaG/YjAS0vmpRDV9WMDajCfANBaOXvGjc5WBLXWpdV2Zj8AmAGb5pFgCZJFnu/k5vdMs7BR4sqQZOUSNFIG88mLxu1zj2/tbYrj+ODe3CdvnhSAs6RpPqjIVxc9s/cW/+eQxDO0WqPB5vhrOksKAJg06HQ6L75DqZOsUph3lwDp0+LVFd9V7QB6vV4G0Gg0gC0IeB1GlQygr8PJx/gafKt2QcDbo+KYOhsAIwMC9qOiDhBnB1DUofQ4JYgPBcCoThAfEoBRHSA+NACjXRDdbvc/8d5HV6/Xy4pF838dQb8AgjhphwTUoL4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFSklEQVR4nNWZH3jrXBzHP3ufQCAQOFAIBAKFQKAwGAwuFAaFwuBC4cJgMBgUBoMLg8FgcLFQGAwKg8GFQaFQCBQGhUAgEAgUAn2eXsg92Wlukvbdbrv3/Uqbc05Oft/f/5wc8ElodM5XpmmQJAtM0+B1cHPwGXLs/aHNXn8lSau/EtHofq8y7e1hqsVVqGOmaQCQJIu9KWLnD5HEgTWiReura9TxXStiZ5sXY7xIVEVdSEjsShF/fdNmr78CSi0rUVRInTcU8bcV8dc2a3TOV+p10ZJVFtYXGqmxXJuHcoXtIjQ+vInM6lAdx0UCct2R4/E0HZe6fdk9u/CIf957Y7PXX6klrYiqcXV+PPcBOLRdTNPI11eRV+fl/0bnfCXD7j3Q/u0NqqvXWagodBHq+kkwK/WWsufUyfWehmprBajJTRVGvW57h2tk5HwRdYoqs3hxbVFZKqSBtg2NjSGgulhRuKLQk2BWuodcqwpeJCeJ1XlOVSkd3X//Y22z11953euNoVGpJanJKgtZCGZJsDHZlWX2usS2KSGqMlT96gsdgJYZYts2zuuE0+FTKdc/BuuI141DeUmrK2d1tb+o5G0U2NAEAF0vi2zndcIsDQBwdRtTaLTvRmuc8xxQ1rnVJZ4yYqmxzOfKPEOFa9qExKV757FOuQGGzTt00eDL00ktcdNycGOboBFDBONwzvNFZ5XEy9wjNLWOV+FleEfn/KqSeJnLHjleXuZKlWqujxf7g/HcJw1TEtaJA+iiwTQ8xD8bIqyEb49DHC3AbUSkLwGzNMDVbcbhPNtv6TBO57i6TRIvMYXGVdddubr9FgLFFrZouU1uuMm9tymVlW49H4HTwYxf+Gr7nJyCsBKGj6e0D58RVsL1tZvdICzchbbm+lIhszTI56UH5FXgdXBzoNbQulhXUVcWtyVfrACSeEMTuVvL38i5pH25wH/SGbxENE8hDk0mqYdhGxCHOXmElf+fGUtc3eb7j+cDNSFWVgG1u9qmMZHzZYlrG2+RaxuawHMdHC0TPPUfuP8Zctt5k20YeDz0fQ57CabQuOh2cfURo6mTEz/SdcbhPLf898fZdlWgCLXzKwuD4vU2IaOOyzlZuqSlU/8BANsI8ZopkMX+4OeSaeRw/zXgfBBz3xMIK+F2YKCbLsQhwEbiWytAVcRHXlqqckOR+OPIf7tpOScIAr61DdzmERd3zzjuIWfOhJPTbEn7coEpjrhtT/hyo3P+xcLV7cq6/24FqIooI1ZFtK4cqjHuNiKiKOFx8rZ3HGWWD+Y/ue2A1ciUdTNprsn00PdpXy44aTY3WryId79KlnnESeto7fVWdXf1PUEl3oqnpK6FPstcd5DY9I51Bi8pcZz1CXGUounZc5aLCADNaPB0NSH0U7o/GgRB8C4uHz4PqPIIST4N07xBki7f9TSc1wmmyJQwFS06ZrYmNDKrT0ODlrVYUwTAXWeMsBJCP+XbcIk/W37OeYBENLo/kG9eZaVNt/R8bZG8bFTScEz4u2myFjr4r7SsBdPQoHesI4TgsmshhCCNI9qXC1r99OCj5OEd5wFViEb3BxGZR1RWhd/RYgqNqWjhxkvG4ZxW+5ggSkj1zNKO4zFfxrTiVwIMescWAK4jaPXT/+aZYBFqjij26rLEARxZWe0OhIEdv+WTQBiEvg/CwrIEZ1fD/8epcBFe93qlJjwgd314q9cAludlpH/D8rydEZfY25ehh68nq5mxhDhc68tl45JjxxYvYu/fBq/O2ivDSFgEhWZpz8QlPuWLLMDzRWc1DucYtoG3bPxxULEv/AILVTODXr1M1wAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAD8ElEQVR4nMVZLXfiQBS93RMRgRgRgUAgIhAVCERFRSWiAlGxYgU/ALESUVGxorKiP6CiYmVFxUpEBQJRgaiIiECsiIhAROScrGBfePMykw9K6DWQmcnk3fc9yRm+CN3JLFOqgzjeQqkOPp7uz75CjpM/dDCdZ0Sa/xL+vjyeVKaTPYxbnIOPKdUBAMTx9mSKaP0hRByARlRan6/h420r4ltbG3cns2wwnWd0LYkunh9ysnyN9JLuZJZ1J7N8n2Pj6Nol0ibLEqTly7xB4tgecbTNpJWkJW1Jz906SDqpNg+YFdZGaHx6E8rqgD2OJQFad+kP8bp6KyjFdk8bHnFwDhhM5xkvaRK2cT7/FrwDAC7651Cqk6+3kefz9F/mmqZwmt7AXb3MQlJoCb5+Ga6N3mJ6TplchzRUtRXAkxsXhl+PhxcaGZqXKFOUyeJyrVQWBxmobmhUhgB3MSmcFHoZro170FouuCRHxMo8R+Yawsvjr8LawXReq3xatUQ32yzUg4d1HFYmO1NmL0tsVQmRy1D223U8AMDNcOfkt7e3Rq6FEJDErf9VUdhkkwCGkC9zWU5SriUl22SwhWLX8XLi/scSynPw+8d1BgDfn181ReQX8nR2iIVsY6Z9e/CwQVTZCtf1HrL48NyH74QYpwGCINrd4zmIo1STjxTh8Dpuw+L5AZPZrSYIF8ZE/tIf5mXOqFSlj8v+4C14R7JJEMOuIKU6cLcugL2rAyFG0QpQKiceRyncqz7c9QaeUojiGKu7aQYwD5AtLCdYxxJl3lO3VJaVO/l8GeP+x3L363v5PUEQ5cTjKNXmRndPZ5oCCKbkV5oLUAyBpuTL9uGkTcTHaQAAiOJY40Eu7/seojjOLT9+eDHnAAl5kqtqTGieVwe5tk6VkFlcglucyPH49n0PQRBp1gb2FpeobBZ4LTWFgbyuEzJ8XM7JLE4I0j58J8xdHQDcqz6SRaiRJ2sDMFq8sQIIVW90yiqHaR2NAUUXvxk6BdcmUpTZCWRxfg3YLS7R+CTV9NjbJMY5+SCItPKlPCeP4+S8V7A8uX1d4oSDj5Imj7geXWrHW07QdE4AUHB7Ik/ZG0BOWHm7sCBv4GhKnPDp9wE2jyDyySZB0kkLc7Y6PopWWlIzxTmwD42qGK/CUd8I1S2dnPh97x0rb6R1bjaY6vhncfR3grJqSPKmBoaIkeuTxSnuCXWyelM0fiFSBTqHS0W4Wxddxy0cUjxRr3ubLYL//5uUs0Nxku8CvK6PolWezalHTxahVs54nLdFnHCyL0N/fk4yYGdV3qlJ0oeWs0Nx8m+DdC4Hik0MUDyvt40v+SIL7BVB7Wvbrm7DP7yv2//gP+8aAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAFd0lEQVR4nMWZH5jjWhjGf7NPIBA4EAgEAoVAIVBYGCwMFAoLCwMDFxYGFgcGLgwsLly4sDCwMDCwUCgMLAxcKAQKhUIgUAgEAoE+Ty9kvtOTNO3MdjqdV/Lk5N953/N+f5Kc8E7whpcrpRzyvEAph9ntt5P3mMfRHxpeXK2EtLkVLH79c9Q5He1h5ooDPPRdANJ5zEXiA6CUA0CeF0cT4s0fIsSBDfJQCeAqRZbnfM3DDVe8tRBvdvNmjJvkR8mYQXBGmSXYbgBUQgBahCbeSoiD3zS8uFrBerWbq38bpPidSBM2IU5wleI88Y4ixIdD3cgbXq684eUqzwu96lARl32TfGwtKLs+sbXA70TE1gIAvxOR5XmNvNxLKUc/51DzfrWaktWhvtqm7ZVyuO/ZAIySMQDR0gMqwmWWkOV5zRmuUgxiZ2u1ELzWEXtfbFrdnKSMAXp8FD3FfzFjEJwxSsZaAIGrlD4HoO+EOgyaIrQ9Z98+4o8vEvu1Tapp2zwv+NqZaNKD4EyvsFhexsx9UyCzRG7LK0o52IVNT6X8+PHjjzi9OAeEF1crWXVzMib5s+ijnpygSUhiPlp6REuPUTKu7afzmGjp4XcioEqagra80sTd+WB1dz54cY54Vq1mHd9lQ4Ecv+/ZtTpfdn06patX3Fz9aOnVxgAtgtxjEK+ToTkXz1r3Fd/8mMeypFtYzMOPXF9f7+S49WCb1U1yPi7TPNmwphz/rmb6XmbmF6LNbRj26JTr7tDMCdIzADovmKQBelFIwJxeNuExndO1A6ZlAq6P7Z9uFWJjcBfxXeMAdmFROkse+m4trqOlh6vURhIUAdqEkusEMtZ3Qv6aBnyKLH2sjO849Tt6P8+WTJ0lAN2iOk/2b/4d1zjrnbbOra30PDf20Hcps4SHYkbfCWvbQXAGUCt1ALYbbK0MthvUzn8oZlrQ+TzTxE5tm8d0/nShvyb+5IJuYdVE+fxzdALwIby4erax+P3zO0o5rZke1i6Qcpflud72nVDvC2Jr0UpeGiLZCnnJBbYbaPK/phOmZcLQ8yBL9f26dlDNzV0TJksrIbJUi3J3Plhdf+qutAOaLawQ3FV6xCXnHQcrH9USmBAFalndjG+z+ZHjco4kTNMZkkylefq1WFSkXF+Tq070N6yv8XS+hIIug7PbbydmM7Er1k2cdxzK+K425ipFbC3oOyF9JyS2FroDlFbXdoNa+yvCyXmz2QSoyqicJ9dI5zj0PIbd3loEt+oZuoXFtEyYlkklRJZCltItLG7upydmHthaBcQRQr6tzAl5J3Bq8Q6Q+g6z2UTHvZCTkJD4ljfC5puh34lqoSGNlAm5n3YCaDd07QDlVi7IsyWff45Orr+crbYmwW0w84OIYK66E2w2IyYk27eNSTxLHpBS2KwSfifibvofp3b1PiGChGGP2WxSE0FywNRZQpZycz/drw9oE8LMCZe9Ki61/ZtxyFocmajEctn1axYXSK2XTN+28s0yGVsLiqRYzwFeRFyw97uAYKcoAhHH9XGcXA8Lgb4TahdIIhXywMbYBnF5Bpt1/jns/TbYdATAoHfKaPJYyw9tMMNGcoZkd6BWSWRMxBAUSVFz3UtXvIlXfw/Y5oiaCIYDyFKcwKnlhmZya7bCgjDsMRn/rnb2XPEmDvZ5ads3wMuet+GEpgOkCgC1pknqPlQ9RVGojTr+Whz8m2CzauR5oUUwV74tIZowHWLG+r5W34ajfBU2XdBWNs1vBVAnLDg0ccGb/xe4ublZbS2VLaUTqn5+29vboXG0P0PylWZaJmuCjT7efId/a+KCo/8bvP5ytq4aT52bkP6TBuZQeJc/sgDjr8PVY1kCMPQ8en/fvstc/gd1PCvwcf0wUAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAE0klEQVR4nO2YrXfcOBTFf9ljYCBgIGAQYGAQYBAwwCCgoKCgIGBAQcCChQUFCwIGLAgIWFDQP2DBgoKAgIIBBQUFAwYMMAgwEAgwMBAQMPA5LlCksT3JJu1kkp6zfQFjK/p699379GT4Zb/sl/2fbW9XE784Eh3AgUy4qhVfvpqdrbWNPfqmXhyJ7lWegQKDAaBu4apWg34/CyDBY010Ps27Rq+A1jYkIBD2WRlehLa9EqltO1IdPD8QWy8+m2YdgEiEj7pIBEbZX28KLEDWHBDPLY8fXng2zTqRCIyJoL4GuW9/sWCUOiPVBSTDcUYZzwzVGi+N5wLht+8dMJtm3fk07wTWSSE0AFW7b3+jHIBYL4bOq/WjwUACSSA4kLaTS5pPbQ9G3UW81Jl1Dhtpz4CeOeobE5EkIXVdrSWh2GDFfFE822lx72KzadYJBAZD0aZkQbnRp4pyUl34rO/MOVxrjTyMMMqs27FyaHSLETYXP4cc7lzo/M+8cxsGvPNVlBMH11Bf44BpdEsY3Rwoch8htNe6kTcsWFbISUxdV0gZD1nRNwXzqgCeBoiNBc7OzjqtNVEUbXReLpeeAc55gEa3yCgaMOBWuaghQ5JJilqWg1OjL5WnAMJPfPD76YOS0Gtpz/NQzQGG0R9ZHyTAsqPWt0sF1hJBQDKUyK7ksXef41obvvz7nuO3s0H7a9lSliWpubLRl9HgGBxH21nfWceA/v/GeQJsMm1KZZ8fGYwNBmi93ngUCf8eRWI8FoCTVKC1JlRzz4Yqyj31+870IzyWiwfsJoe4/uMcUa+0f14269PnR8HYGBQfv+1g7fwYhP8C5CQVNKuPg7aiTcnTyjsEtzPE6/+mSHKMui0/9IFs9GqrqvLOzn1pOCDueu/bbSD0bez8Bhhyn6IKyYNqICvHKseyfk3RrFa2j0i/G4R7OzpGwDrqYxb0309SQaA/+RPAOegcGOtcytjnASeNfhJ0EvBHZ6/w8vJQ6/26+8aXJngQEPeWwtXlh73q8oOfqJ8j7soXSSV52QxpH+sF4eEb71QWJnbvy83CysgI6F2wlEEtS6SMEUIjbv6SStoByXpsGB0SRocPZsGD7wLV5Ye9q3/O75xUa0McSP/+OYy9ky5SfWmouPYOuH4uMYpaI2Xs+yYTq3G1LDHK+LuEauqbydb3i9OLxd7pxeLxJHCXxcdvu37UAeJAMs1jaGoC/QmAUme8bCqKRvni6GVT8Tm0DqZRMXDC0X/cJifxsGgayeT074c73betz9F+jogDyfQwIL1aeIfdBl1OyMKEolGATWxOKiq20eyfBOM8sFEjKBvxbfb/aFXV4fSvbprHxO2cuq48vVVcY5S9SL0RrX8fW78sBptHVFNbNig8KxxA2zru7NFr7Pm7407XLSYLqNrJBhvARjCppI+6+3gyLo5gVAyp7SM+tp1dMmbTrEsmKfsVLKUFojzIaa6/Qn1NMklZlJI8rRFFS9EosjAZMKSfD35U4/fZzq+bH09ed5EMuDD2aIxkwFJOaFYfPRNcTnBWRTl5WqOWJWcXxU73+GQfHubvjjuACyOJ9QLHjq9N40veflG0a8edPfmHyNk067IwwWQBomj5HMYDQF69v/y5Pontyvo54jqGP06f1nFn3wBPPvyLmb0TZwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACXElEQVR4nO2XL2/bQBiHn00BBgYHXhBgYFBgYFAQUFAQGDAQUDBYUDBQMBg4WDiwD1BQODCwD1BYOGAwUBBgEHDgQICBJQ+cXueipGrWdZMz3SNFln3WRb/f++deQyQSiUQiR8P0PO2m52n3Wvu9ea2N/gXT87QrJAcgH6UALL4+/JGGozBAIx6Kl8m4X0+rlvd331+kZfAGhOI16ipeJKO5XwJgZISzv2/EoA1Q8dOkJTGn5ImwLkf9elq1GNncN2VGVq/5kTiuFt8O0jZIA1T4bFz2z8KUBx99a2tEvGjrHE2ZkVQ1YgyPjxbg2YwYlAFPCbd2hcjmmlYt4NO+Hnszkqre2a8pMypXclct+Xl7s1fr27+i5AXsPdpysHbV34r4LNAyaMoMoI+6Ej5XistFN55f7/zHYAwA3+imiY9unkgvuCgmfdT1qohkiDFY53DWryVVTb1dMQAYkzKeX3fF5aI3YrT72jDQKOcrwUoN5ch3fZY+5aWmgb7+YVMS2cr/AGbrByjPuKuWOLfGGH+SaDYMpgfs6/jgjRDJtt5t7pesyxFp1ZJMc5KqxtmWkxPpzVDUkI+uAOhN0J4wGAMAPszLDjZTHrlPf+321vqa1vNfBWsJhISGONvyePpubzMclAHKzcXZVrOSybg3QKOuhIMQ+IifNruGzD7vnwsGaUBIaEYxmwC+yWmnB2+CToLhYCTGMPl0ezxzwHPcXJx14RispRESHn1PRT3kqAyAICNy3x+ALSN0Jngu8srRGaCoEdoflPnVl//nY+gQQiMO/QCKRCKRSCQCwC8CbftP+DFsbAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE7UlEQVR4nO2ZH3jrahzHP7tPIBB4IRAoFAqDwKAwGBQGgwOFCxcuFAYHBhcOHLw4vDC4MBgMLlwoHBgMCgcGhUJgUAgcCAQCgUKeJxey39s3abO1XdcD9/1I2qRvku/vf1KwWCwWi8VisVgsFovFYrFYLBbL/4ejn3nxUeiUMyckyzIA4jg++P04h74gwN3lqAT4azoD4Pz8nKf4EeLD38tBLd70+J/nAwDGaUZnPuUm+nHwCPjlEBe5uxyVd5ejcuaEQOVxr1cJT5OY8Xj801LxQy/8msfn+Yzoscr5wZlXhpkiUhmT7/lBjfEhNaAtx8dpxlmRMf420SI/D8PyOY2JVPbmeQdnXrlvA+31ZJvmuAiR7edhWP49jlrvZXDmlQDHfheAruPx9d+nvdz7Xk7S9Hi/3+cpfqTnnXBWZHz5Njm6CjvlLkVucOaVA7fAVSd6n98PAPCigt/uv71Lw7sWb5Lj4uWrsFNum+OviTd5jyF26gKj0HmzqkeP8dHnYahDvegpJNw3ucY68V3Xx4sK0jTBiwq8qAAgDx1ur4fl7fVwo3ObbGW1bfq4WbDeynFzjf7sFiRej67jAZX4PHToJJClBXGQ4vsBaZrQTXx6PZ/05b5+BHD5dbPWutGPtslxqeqbhropWoQDK54HUH7VtH4EaEPkoaMjQfmOPiZc/PW6IbbOm7vLUSk57i9SLXTTHDcr+nMaV/teRJseF8TzTcQAynd0RJwUVX3wleLB6QFw/5STOTnJ+GbtfW09B6RJXOvjIqrwFccoJkRr14nwgVswWTg18SK8ay6QL8lSsK8UMzcjTRM6BDoiAC0e4ME75X5SnT9zcpTyYHhVAiuG2KlySk6bed42pJjCzbBexyKb4aoT7XUvKmreN70OMHMq64j4aeeC+yiGtBIOoJRHltU/K+XxfHd9tJMBth1eLoKwtl/yOQ5SuonPNJnTD3or65v5PnOSmpebTP0+9/O8Vbw+r6pSTPbvfe5uChfBpkdlu66i+35Qa2+wDP/5PK2FfU3804tQH+1l2YrgvUTAtsIBLRDQIt8iTVc9blb4LC2YH58Cy0InrBMt+0W4sBcDvCYeluEOrK3oIrbZwrJ02d5gmQYzJ6FQn5ZeB3i5ZFM0rBcuvOtp0Cxwgik+Dx09qJj9WqKgk1ReFU+fLBSoam2aZVq4r5QecqZ+H6i8LuFeKa+EiveFZHxzlNDOThHQnNiAleotiMdNQ8h3Ed70vK8UgM55qfaF+gSuz/0k1u2trci1ebzJTl0AqkEmyOe6tYl4s5CtC3cxjqTFuqJmIuEOcDNNUIW3ku+mEdoGnjZ2rgHXv57qKGib1oCVyg91b0O9wkveA7Uit1gscDtudcBodfB6jr/Fu4vgP79/0oYQgWYKiIel3cmDC6Dz2hxuJMdjenx/mlXHX8S6uaON0Gxnu7K3Nnj95bQ025tpBCEPHU4WlbeBFdEAt5MU13VrBc4Mewn5bUO9jb0PQs1nci8q6PV85vNU14giGFUHFym4PrcPzwC4rrsUWnj1Ks/7Qr2ND3sD+/BHZQjJ6ThItfCb7xFuvr5m1IywZnLbNx/+Cvr2elgmzoVuXSZtbcwcZvYV6m0c7B18MLwqzSGlKRwO4/EmB/9H5nj0tVz3eCocSrjw0/6SCl5eUGw7uVksFovFYrFYLJa98B9OVj2m0GKSPAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 64,
                                left: -31,
                                top: -22,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEuElEQVR4nO2ZLXTqSBTHf+yJqIiIiEBERCAqIhCICgQCUVFRsWJFBaKiomLFisonKyqeqFixoqLiSURFRUXFEwgEIuIJRAQCERERUcE5WTFcmAwfBUrpnrPzM/lu8r//e+8MU7BYLBaLxWKxWCwWi8VisVgsFsv/h8pXvrwTOcXAiciyDIAkSQ7+Pc6hXwjwcNkpAL73BwC02216yQskh/+Wg0bcdPxbuwVAN80Ihn3u49HBM+C3Q7zk4bJTPFx2ioETAcpxt6aEp+OEbrf7ZaX4qS9e5/gwHxC/qJpvNd0iyjxiL+P1Z37QYHxKD1hV4900oznJ6D69zoSL4EnN47V7+BLY6wu3qfGr86j4uxtXzP11tJpuIfv7ypS9/BHT8UajQS95oebWaU4y/np6rVxHQSEB0J3fBBF+Wo3KF0K4uet9SMOHHt6kxuXjd6lx3XFTvN+olo4vb3ZrpDs91ImconVysdZx/f5tHF8nGpTwNB0Tjn3ySLUwN56QRw7BGE6/bxeIrW7etMZF8NV5VPxKk41cF+HHfkjouIs3hOD7c9eDMYyqapulEzxfBSNLJwD88fi0kbaNbtq2xjdtalAWDiyIl1QXl0GJBhg4Y+qTeVD044GjsuS9QKy9+JnjuCkcDPGhctyNlbvi9qgK9TePNMvwPbWFchbo90qwVpXG0pObOK7XtYjZRrwIr+ZDjrz6gnATCYSkuIgVJBh6IGAeGNmagSgd7DqOb8NCrYfTCwmER/PGJqKluQmS5mbdmwF5cWql4/ZkWDp3d3dXmQVgmxoX97atcWHZcObGylVdvATA852Vqd4PTkv3N0bP9P0GAI+9fPoCtbmouTwO84Xvq9Tr9WLfNf7eUKaLD8ZzV6Vx6YEQ9/V67gen3P+M8SYub29v2nsb9PoxmZPjeUtGEo1fD7cVmP4WWDVXF479kJiEYz/klfhd4SXR4XQzVlaYLo+qQDoNiF8lnzom7uuB6AenPL4mMEzwfJcsy/ECtQXoJWXxWab25brnuTPhQqVerxcAzUm68Ht82wnMMrfDI790nEcOaTouNbo0VRkwqirhtZo/S3lQaT+snynxPiVBsq8fLztvChecwWBQAWhGwSxtN61zPdWvwhYAyVs6E51HDjnlMRzmXV5Pf1DD23CaDr7nqeBkWUn8MkSwiNcZd+8r4+WPAdoocB0FxSY1bja1Yz+k5YbkkVMSaoqW6WtSTUsBELG64yL+2T1RwmEm/j3HJQCrHDdxxO04fb/GddGgJi5+owrxZCZYFy6iAVxUc/OZp750dF08wD1tev0YSGY1vSrtTTYVLuz8a/D295NCH7f1AOiYQQmMfNTdBkqpbrqtn3uvuW3Kh9cD/rk9L3TRMm2Vc9LJzTQXZCzXU32dcDknqb+rcGFvK0I/Ls4KczZmTlv1sRy0YQ3InOXOwnLx4+79f2dFSOf5z/Ni3fV+cEpt8MS3TA2Zeo2vamr7SPVVfNoipATC9zyGw5RazZ91dVM0rK7tfaX6Kj59FfbHxVmhu62zrKObWbCvVF/FwZahq+fXhT5JWTaUHcJxk4Ovwx93boplKS4cSrjwZf+Sqp5fF7D9zM1isVgsFovFYrHshX8BP01hZM14PQgAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -35,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAYAAADnodDVAAAJgUlEQVR4nO2aL3Tq2BrFf7wVEYGIOAIREYGoiIiIqEAgEBUjKhBXjEBUVFQ8UVlRceWIESNGjKioGIGoqKhARCAQEREIBOKICETEEYgK1soT6QlJCLf0NqWd9Wabhr89e3/7+3NOgH/xL/7FPw13F6P07mKUfvY6PgUj10gdx0kdx2lEhFYTizoWNOHfw4iNUAB02x4PDw//KB4/DR39u4tR6g6c9Pz8/P/HASPXSIO1DUC7CyPT4foxePf6/xECjFwjjQwXAMdxWK4j5hPZyNr/08SXfCTuLkZp//RXYEu+2/Y+d1HHxEfkfRFfOgW09ZVSjeZ9EV82BYp573keAFPDavz/GI1/YwPQ/T4Ko1Leq+nTZy/tONiX931hNj7+frkaUM17Ea0IkucWZALo66bwpWpAXd5rfET04QsJ8KN+P7StxiP/5fBa3g9tKx3aVuMu+BIOKFr/NxkwMp18hydME4BxrD7EAZ8uQF3eF4ed5PmZuuum8KkCvGXO/6gi+Kk4ZM7vCzPP/Y8Q4dMmwa31VZ7313tOdsaxam0L4PvSoHiqFEVR61NSoGj9urwvoukiGMzuuZ0E/Nf3cAdO+ikCFBdxzP19Xbc5ugB1izhkk3Pl2u/K/32uO6oAdS3vcTZ79XNXrp3+MY/flQL7XFcSQN9wGLlGOnKNRm8+VFseZEfah4y4f8zj1nsc8CPXlQS4nQQkK0lkuESGy+0kaEyUagSAN53n/6wDXnNdSYAr12FqWLRPsihZltWIKD+b9+/FIa7bmQMSUyKeHRJT4jgOvY16EUUhnh2klNxOAq5cB00qeBEFskgD9E9/ZfTXXat4uuN5WfSvH4OWHmoOHW6uXDtdqfWbBAhm9wRrm9tBn99kUHsXqSTAthdHAPS+kbK2GhHFA/rC4wGPORLIdnjjWLVeE0EXwbfsBusGrcca1705r3rfvPR8bfHQVrko4nkrin4spUQpxZXrcB8rAJRS3A76QNkpj08PewcdLZIugofUguK0V7yRok+UtOBB8txqZLr6CFFGf921oNwCD22H+jZa1fp9YabCNNGua0yAKu4uRulf64imRQlnk1cd8KN7CZq0TqVxrD5mEApm98Qzheg4qCQjNf07aiWmBLJCa0wWqOkT7ZPDu49/OuBH3WffvQTHcVKo31c0vhvct8u7uTxLAR4nAQbgdDbIlUE8U+C+v9BqVO8lSCmxTy2krF9vow6oi4CyTTR5khgK5AF+aW+Qckl/s8E1tn9htyVfuQ4PbYXjOLRPKDmlbtQ9FxaO4yCendI6i1NlYwK8erqTxCCy+/t2b4CyTwCweplg+jX9d2kk9K0OavqEN0/ywalYT3T6zOWU6qAFkKwkUJ44q4W0sRSoGzrczvMOeYD7pwW/tDfMATWdZ6LYgrjwfaJj546ZrxJ6/S6PwawwxUUAdCuuW64jpoaFmj5xXbPPKO0rYtWMA+pG3dzGqwL5ZEsx7voAWCdW9jhOstcL79Gf6w37LGYxwjS5GbrpzdBNYb/rHh4eWm5H7KyzY7V3HPBuAfZuNkQWQdHZJe95HkYYZFW54IycdEEwXbkHl7+UXr8Zumld3mu772uX1Z3lTwtwc3mWvpr3OudtkV8L08QIAzZ+Pyf5fHrGfGVyH2az/mpjlwRbPM6Io4iO1c5dEi8WO3l/6O7yXQ64uTxLdVWvi0Ce9xpJTBxF2fWLCBu/jxEGWGdD5psuk8kEyKr6/dOCjpqRbLKPdKw2J6c2aqHy7yiSL7pOp8ZbcLAAReIA8XSyEwE1fSrZNiddsbkQgo3fZzKZIITAsiyiKML3fTzP4z5cIwwwvW/5Z3S36G467HWdsLk839aIKurS4lXL3AzdtEqgSF4vor/aYPXcvKpbPZfVxqZjbK282tgkSUIURQwGA8IwRCnFYDAoPa+vf/XbJfHUdM6a1U63EUKwfLin1+/uFNzv4/kPOe51wM3lWa2SP4qAms7zqg7k5B9nK+YrsxTxyWTCcDjE87z8+er1fbjO6scLoTWrWtd11GxbUJN423leiuXl+f7U2FGnLuLFoqOUAsgjcN492SGvFgqr52Lbgj/Hc6SUDIfDPOIXFxeEYUgURVxfXzOZTIiiqPR8yQlnJ4e5riB+jlcckT8o5neReNfK+vXvYQTARii6bY/eJhNCmclOjqvpHKvn8jhbIWU2xmoRNKki8ddECIKA34fnpf19t+1hL8OcuBa9joMWIlll18LYCtEqzekvFkLYueLFiENmPRGtSLxOHv26f/i4NHLyGlJKrq+va6NcJK4rexAEAFxcXDAej0uuW21szNlT2XUnVokDSZx3kypULIEaB3Q3HWAbcd/3mcmsTY1MB2WbTMcBvWEmiG2LrM0VXZDE/DGJ862tZfkoldm/6oS6AqiJ9/v9fA1hGG5dZ5s743Wegi/P6WhDFnEthCb+d7hulQQoCnH/tMgj/pAo1PQpJ1xCZRFacWFkDsjIWwhxShiFOLaDlJO9IlSJQxcZSy5Gfca31/WuK1hcX9dFvUpcY2cz9P3PpxbA0lilVvyMa5tMK++xbZHN7oUCY3rfeGaKeFmEZVl0u12SJMFxbJbLJUIIlMq2qOPxOO8C4/EYyKyulCJJLGQs8T2BUgohsk5QS74m4ocQ13h9DqjWiOoCYEd9YcA0Efi+z3K5BLoA+L5HGI5RSuXpUCTueR5RFAFdlsslg0GfMIz49s1nHtxthS8u4SeJa7y6HdaOKHWJwpyebMijDuSbH2uznQaFEIRRmD/udjOCmrhSioeow2CQRdpxsoEpDDNnJImTEa2p6FUcSlzj4POAXIjicCRs8k1njUN0BymmQJIssSwLyNJEKcWTPMG0tp/TxH3fR0qZOyXP7RrybyWu8ebN0PfxvJUPE0k5KhrV6IzHv2FZFo6zfY8ukADtTtZ5kiSzt+/7L/VCAbBcLlkkElETLhVLVCz5O1y33koe3nEipEWopkaygUUiUevtV2dtbIKUk9JcoIubhiZcJC6lxGq/HK4UqvvPRryKdx+JlWrES0qcAAuWpZNYx3GyTctymRPUEdeoI2614UQ42/c0RFyjsTPBohCiY9Pr2EznWQPVQmiC+rr4GI5LXKPx+wLFYtlzewC5EEpl7VBHXguwXq14VopOe4lqy6MQ1/jwHyDrGpGsYhaJBECtMyH0JunUyZJbdLbt7aOJaxzlF9jVnaZ2xIlwWCTHjXgVR/8JetERVeh2dsz1fNpv8PUpzbEjXsX/AL+jgW9yK1JlAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:KAOL [] 16 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 2,
            available: true,
            name: "Coal Mine",
            colour: 1,
            fundCostMultiplier: 252,
            probabilityMapGen: 7,
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
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["COAL"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:COAL [] 20 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 3,
            available: true,
            name: "Dairy",
            colour: 169,
            fundCostMultiplier: 45,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [6, 5, 7, 0],
                    [4, 3, 2, 1],
                ],
                [
                    [-1, -1, 7, 0],
                    [6, 5, 2, 1],
                    [4, 3, 7, 7],
                ],
                [
                    [6, 5, -1, -1],
                    [4, 3, 7, 0],
                    [7, 7, 2, 1],
                ],
                [
                    [6, 5, 7, -1],
                    [4, 3, 7, 0],
                    [6, 5, 2, 1],
                    [4, 3, 7, -1],
                ],
                [
                    [7, 0],
                    [2, 1],
                    [6, 5],
                    [4, 3],
                ],
                [
                    [6, 5, 7, 0],
                    [4, 3, 2, 1],
                    [6, 5, 7, -1],
                    [4, 3, 7, -1],
                ],
            ],
            cargoAcceptance: ["MILK"],
            cargoProduction: ["FOOD"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -63,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAYAAACTtRI1AAADC0lEQVR4nO2ZrXLbQBSFjzsGAQILBAICDAwK8xB6AME8gGChoWFBgUBBoUFBQaFgoUFBQGCggB9AYIGBQWZUkDnxzWZTJ/5bZeZ8JLFm7d179uy9d21ACCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ+1KWZV9VVZ96HeNzT2iD7rru3NO/4GwCVFXVO+fQti3yPB9E8MAZBGDgZDqdAhjG7gMnFKAsy346ncJ7D+89nHPw3g8mcHJ0AXjGu65D27YAgDzPwWfk5uYGXdehaZpjL+FdHE2A2WzWA3g647Q6nzH4oiiQ5zmausIFsmNNvzcHC1CWZc8dZvDEWr4oCgDA3c+v2GCN26sNJhMAd4eu4DD2FqAsy6dyxuwObG1u7V4UBf78+II8u8TyqoP3D3AYY7Xa7L3wY/FuAXjGmdTCDE8hgEcHMPj7z2MAj6JcX2fwfgPnLrDC+sAQDuPNArCcee8BbO1Om/P/WI3Psgzer+HcGEYveJ/eAaNdA2wDw7JmoQNiDQ7HFkWB++YbAOD2ahv0ZHKB5ff1zjWcklcnt3WcO2wdYLE5IAaPAgDc/poDAP5eAs6NsWoehiXAbDbrbZDhWQ8zPXd8V3tr3QA8CpFlGX7fDcQBtoEhYS23rxmQHU9hrCNiiRHYCjGfz9MKYAPnYu0OA8/POYCnXMDn9pjws4D/u4JCLJfLYTmA2PJmRbFBkzBIK6DNGxTJjm+aZhgCkKqqerrBXmKA58FbgfiM77NjKF74Xo5PLcCLPmCxWIyA59fY2K6HNzvuOgN8TbjYe1Ly5j7ABvPa9Zb2tjtuieWN1A548+S297c2t8kvDNpm/1gT9aEEIPYuACBq8zDxsbrYMsqxPHKp2Hty3v93uSAUKBSiruuPKQDh0QgtHrbNsUQKILkDDv5ChGc4/PIzJFY6h8CnY33QYrEY1XU9il2WWClijkjNyexnHRHuvhUi9RE4+eS2j7B/WSJTl8GT/zBiO0s+i124UnF29W0f0bZtcgckYyi/Dv8DRqAKJABm1EUAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 96,
                                left: -31,
                                top: -65,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -62,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAYAAACTtRI1AAAFZElEQVR4nO1aLXLjSBh9s7VgwIIGggECAoEGAgsDBAYEGAgYDDQICAwImCPoAAN0AAMBH0BHENABGugAAg0WpsoDvF/7U6tb9iR2uqeqX1UqiaxIee973+sfCYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi4KXa73cHn/f/yeXMAGMcRu93u4EuIv33clEMpBaUUhBATN2w2my+fcX/vDuCQUmIcR+2Kz7jnp6i8hIeHh0OWZUjTVB8TQgAAkiQBcFs3BCEA/WwKARzFuKUQQQgghIBSSh/Lsgyr1Wpy7FZCeBdgvV5Pet0UYskRwMfF8B6CSikkSaKJCyH0l5QSTdNgGIbJ31wzLINxAA2FJAQXhMAdQed+tDWCEQA4zQkAIM9zjOMI/hnhmmEZhAA24mZ1x3FEkiSQUuq/vYYjvM8Eqb/J6lJKZFkG4DgPIBcopfRx4EheSqnPJyH4zPLt7e1A17y/v7eK4d0BNBGiCgPQDqDjNvCWIJAQr6+vkFKi73v9mcsN3h0ghNCECVwIALryZP8sy9B1nT7fJN40jT6/LMvF+3sXgMCrbVa967pJb3PyRVFokkS86zrdEtQqLgQjALUA/07g+QCcHJGmKcqy1FYn4mmaapcskQcCEgDAzAEkBLUHWb0sS13Zvu9nxIGTaME7wKw2/51XnBNvmmZWdZN427b6Gnz0MOFdAAIf42kESJJklup930NKqY8RYU58GAZ0vUK5XgFA2A4wbU/kbanOw40qOwwDhBBT4psCUh6DMvgWADDpceAUbibxNE2R5znattXndl1nJW6uIVzwLgCv+Llw46SAowuafW8lfhwy38IfBfg4Tj0OXBZuACD+EZPPaa6QpncAhvBbgI/jvxNuRMxO/D9stwXqug7fAWR1095W4szqBBtxpZTOj6X+BwIQQEo5mbkRXMRNoWzEsyxDURRomiZ8B+R5PiMF4Gy4EWzEAftq0Qbve4LvC7cTaM+wKIqJkDZRbfDuANvMDXARP4UbMO1vvpdY1/Xsei54d0Cz75He57rifDcIOFV8uy1QPj7ocDMhhEBd13h6ribXOwfvDjCtTi3gCjeaCfJ1g674Qli64F8AI9zIAdutmIUb7fURsixD/u/morB0wXsLmFanylK48VHCVtVLw9IF7wLwHidIKVEUxWzvv6oqbL7/mJznIs6vF/RiyDZz45MXIQSqqnIuc8/NBIHl/QDvDuDjOIEqRhXnqW4Py+koYV5vCd4dQOFG4zgR23z/sRhuS2F56QgABCAAYN+8OLfMJaFoc4QTr+v6OJX+EyZCwMfCLc9zrFYrPRH69vgMfE0mE6GlEPQugNnjAPSGKOCeCfLtMxvxS9vAuwDvDTc6z0Y8uxNQqkPbtnh6ekJRFFiv14eXl5fZyxTeM+B3lrnnsiK7E2hVh58/5xsswHHavN1uDwBQ1/UXIAABzHADjtWlcMvzXE+IeLjpZfMZ4rbHbFJKLYR3AcxlLlVWKTUnvikmq0YpJZRB3CTMH7PRdZMkCccBrpkbhZtJ3NoGjueAXAx66ErECd4FcC1zvz0+z4iT1dv2tIPEBeHPEmliRZU3iRO8C8B7HHhfuJkvVHC4iBO8CzCxOnuY6SKeJIn+WSml3xckEc5V3IR3AUyr00NPM9x4OJK9zYCz9fg5eBfAFm6TIc7Y+LQ9QPl/W+xdL3z5F+CCcONvjZr7/VVVfehNtyBekwPmc3fqddPubK/gKv97EA7g4K/E8b1ACrprESd4FwA4hRjBfIMcAPb7/U3c6l0AbnVu+Y+G26XwLgAtTsyKX9vqLngXwAy5W1ndBe8CuBYpEZ+EX1i6NWLAqyW4AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -43,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -43,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAYAAACTtRI1AAAD1klEQVR4nO2arXLjSBRGz2wtHNCgoYFAA0EDwwADPYCBQB7AwA9gYLCPkAcICBwoELAgwMBggUGAoUADwQECAoGu0gLlyrKs1Exl5Glv7T1ETqxK+/vuX7ccUBRFURRFURRFURRFURRFURRFURRFURRFURRFUa5Hnuf1y8tLHWr9P0It3KWqqmBG3IQB0+mULMuCGHETBhRFAYD3/rcbEdyAw+EAwHa7ZbvdAr/XiD+v9Yc/gzGmNSFJErz3eO9xzpHnef32dmA2u/8y5prBMwBgtVoBTTMUXl9fAUjTlOl0yuFwwPvx1w6eAY+Pj+1rYwwAs9mMNE1xzpFlGdA0Sufc6OsHN6CqKowxGGOYzWZsNhsAsix7j7onSRKg6Q1jE9yAKIpa4dL8oBGbpinz+fysNMZm1IbyGY7HY+29b6eBRDyKIqqqYrV6IEki0jQFII7jUT9z8AzoRjxJkjbi9/d/Ub1VRJPoqusHNyBNU7z3Hwq31gJHnHN471ksFjXA8/PzKJkQ3AAA5xxJshoQDlE0AYr2PuccVVWxXq9rgIeHh18y4ib2Ad77ZhJ8NVhrMcYQRROstcTxpL1HKMuyfb1er+vlcvnpneLNZMB5xGmFf/v2N7OZARoTqqrCWnsxGT5bGsENkMgOCa+q6n3zcwQao4wxZ+LLssQ512bFcrmsy7L8aSOCGyAMCz/1gO4uUEwQ0WKIZBE0GeGc+2GPCG6ACNtsngaEN8bkeQGcSqDbA6QpWmspy7I1Qa7r9br23n+YEcENkNPeUA+I4wl3dzF5/k97v5wX4LwZivju77qZsVwua2PMRUYENwAaE/rCF4s7yrJkt9u193Sv1tqLZtg3BGj3D4JMjKenpy9wAwZIysfx9zPhWZa9j8PoTEC3zrsp3xcq9KeFMQbvfWtEcAOkBPrCp9MpcClARMsJUkR3zRjKBHlP+oVkwE0choCziMsRWa5ZlrXPDcuybJul9ANpjP0s6PeErnAhuAF5ntfywSXaIn673VIUxVmDk0jK7rEvEk6ToUtfuBC8BPr0Iy4lInR/lnQeSn3hI+HCTRkgEe8jaS3jUtIdmkdl1tr2YaqY8SPhQnADThuh5lFYP9W793T3DCI8iiKKomjf+1nhQvAeIIeYrmA41bjUcj/iURQBp+8Tdrvdp7QEN2A+n9fdCEtj6zMU8V8RLtxMCQj9Ehg74n2CGzA014dqfGzhQnADZLMDl8Jh/Ij3CW7AUHO7ZsT7BDegH3Fovi67tnAh+BTY7/f1mF39P8d+v6/n83mw/xFSFEVRFEVRFEVRFEVRFOX/xb/fNIM/qkalDwAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -43,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAYAAACTtRI1AAADc0lEQVR4nO2aoXrbMBSFj/cVFggIBhjoAQICCgP8AAEBfYCAgELDwsKCgcGCwQADwwIDP4BBwECAgEGhgUC5B7rrynLcuKlje9v9UdNPrXSO7j2S6wIMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw/TNbrcrD4dDOfY6vg09IQkXQmC/3w89fYPBDHCFG2OGmvpDri49wW63K+fzOfI8r+14kiQoiuLS05/kYgacEi6lnEQV9G5Alx2XUvY97dn0ZkDXUpdSVp+FEH1NfzZfNuD5+bn0fb9VuDGmJpTKn74em7MN+Gy42aKnIJw42wCtNbTWWK/XyPMcURQ1hNm9bu+8lBJa67+7BRaLBYwxiKIIABCGYcMIEu0aUxQFlFKTqIQvXYSEEBBCVEZorRGGIbbbbaPPjTE1wVrrr0zdG2cbQGe4lBJJmiPLMuR5jiRJGkbQWPtnpsKnW2Cz2ZRA/QgT1wL5i0H+ksOfaSilkCQJgOOtAWAyLdDZgM1mU1K5uwghYF5NZyOmUv5ABwNIuJva9vlOZe4a8euwx4/vAQCcrIixaDVgtVqVSikYY6C1bvQtiS+KAr4/q93v2443ygjg3Yg4jnsRci4NA8IwLO3QIjG2YNeMJEmhlKoZ4SKlxNPPtNEaY1MZQOFm96dSCsCbeK3fFk7fsxFCINtn1Rjfnx2d7FhGjM0VCbcvJ7SDVAlCCCilKnPchdulT0YEwbI2piiKo2E5NldPT08e8FYBxphKvN3HlAFSykZ/Synh+6KRAUmSwrwarNfz2lg3LMemagHbiGq3/izWNcUYU8uHIHiviLYMANA5LIekEYK2EW4A2ncAe/FRFCEIgpOCuoTl0LQeg64Rdh64FeD7PrIsgzGmMiJJ0AjDrmE5JCcvQmTEarWqhaW72/Rg5BphV82xsBybzg9DcRx7cRx7UkpkWfvihRBVRdCjMuH7sypTxLWYZgacgipiu92Wx26IBFUEIaXEYuFXnyefAae4vb31AGC5XJZdAhDoHpZD4vX1i9qMoEsT/UGEApTG3tzc9LaGc+h9ctcI1wCCjHh8fBzVgN5fjKRp6qVpWhnRhpsRY3Gxl6Npmnr39/feR6+/phCCg5VfW0bc3d39WxlwCteIsQ0YjeVyWT48PIz+HyIMwzAMwzAMwzAMwzAMw/xf/AbsCXLG3BWFWgAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -43,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAYAAACTtRI1AAACqElEQVR4nO2bq3LjMBSG/+4UBBQICgQEGBjsA/gBAgsCAgIKCgICAwwMAgwNFhQEBC4MCDA0CFyQB1iwwMCgIFAgoKAzWuCVc2l925nE06PzIc/YntH5fCQdaeQ7EGO5XGrHcSCEgBACruveVT1/f6uG3YIkSfRkMimCF0Jgv99rKWWpBFICttst1uv1mYA6vl2/WbclTVMopZBlGZRStc+TEjAYDIprKzMgyzKcDoBKqdosICUAOHYBE3idAFKDIJBnAQA4jgMAtd2AXAYIeQy8yThAT0DvHY7jNJoBAGICVvGhuDZf/jlWle+QGgNmoweEP/foiTc8SAnRl4jn3yFn5e+QErCKD4jmg7OpkDOAM0BVvkNKgPUZAADhszzLgDpITYP/AzkB6i1PaisLISCvBNtAToChSf8HiApoGjxAVEAbSApoOgACRAW0gbQA63aFL7GyEjSFUFPICeBC6B9WF0KAxWuBtrCArhvQNeQE8DR4Mg1yJWhjJdgWFtB1A66JlWPA6SxgjslUQU4AL4YusO6ECMC7wrwp2gYW0HUDuoYFdN2AazObVRwPAUEB5oisYbVaVT5PTkCapq2eJyegLWQEDB+fdNk93/dL75EQMHx80gPZQ+/w+8O9xWIBpVSphMpfyr4KoedqL3zBZrMBAMj7V+zf+wDydUGapoii6NNf6EicE/TCFwCAyH5h6OciTODT6RRA+fqARBcwDP0XAMB4PC6+uqFshUhGwPbHvLjehXMEQQClVCGhLANIjAFJkmggD7zoDhdfPIoixHH8IV4SGbAL5wCOY4HhtAs4hz+fvktCQPKaB2dEGIIgANBuh+hL4/WhkyTRoefq3W6nR6OR9oduaRFEFq8POwNnGIZhGIZhGIZhGIZhGIZhGIZhGIZhSvgLazTrkSQM0YcAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 94,
                                left: -31,
                                top: -63,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAYAAACTtRI1AAAALklEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+DdeXgAB0+OlPgAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:MILK [] 6 =\nprod_cargo_types ctt:FOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 4,
            available: true,
            name: "Dairy Farm",
            colour: 164,
            fundCostMultiplier: 60,
            probabilityMapGen: 11,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [5, -1, 1, 0],
                    [4, -1, 6, 7],
                    [3, -1, -1, 2],
                ],
                [
                    [7, -1, 4],
                    [6, 2, 5],
                    [0, 1, 3],
                ],
                [
                    [-1, 2, 1],
                    [0, 7, 6],
                    [-1, -1, -1],
                    [3, 4, 5],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["LVST", "MILK"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAExUlEQVR4nO2ZIXTiShiFv30HgYiIiIhAIFZERCAiKiqeiIhYsQIRUYFAIFY8sQKBqKioqKhYUYFAVCAqERGIiBUrIiIiKlasQEQgEBEIzukTMDSBAEMKu33n5TMNkyHl3v/+MyFASUlJSUlJSUlJSUlJyf+PD3/6AxxDo9F4AVBVdT3m+/6bNPwnDBDCtZqJpmkA678N06DdahbW8a4N2Cdc1zV0MabrfHYuC2l5lwbICk9T1IR3ZcCxwuPpNDNWxIQ/ZoB16byI40USA8dVPA9hyDFrQkX+I58GIVypzJnNZoCccCFus+riHCBtVJrfZsBmxWccV3ExtmlKeizPnEOcvQWKVnwfecLTHNMGZ0vAWyqeruTmMewWXoSTG1Ck4pvR3TyWEZ6edwwnawEhXFU1PjsXa6EA0+mU2bxCHE8PRv3YiucJF/Nl2uDNBqQrDtBsNlHCgGn8i2TkA1Bvt6jaDsl8GbjNFX0zAfuE76u0rmmYRo3oeSK9BhQ2IF1xwWfnAiUMUMKIJAhQLIukYaKEEVEQYAyHaxPykFnc0nPSx0L47Okb5pcujuOcZxHcrPgimSzHLQuAX/0B5uoYoGo7LGyH+tjj2XVzTZBd3NLjIjVC+PebLsnIpw7wpSutR9qAvIoLNE3Dsiwmjw/U2y0Io8z5h4cxnY6DGUZEKRNko74Z+13CL4A4Zb4MUgYMh8OXQ3PmY496nLC4WlacsbdlBEB9NVexnb0VT68PeVHPE14LAlRgIiNqxV8yk1zX/QBQubtj7rrMxx5z112/rtzdUbWd9fyHh/H69Xzs0enYmetN41/Lc0m8lYJdi6F92QDg+02XSatJPU6ot1solkUNMAC/3TpC+pJC9wFV2wHbIRl7EAT7J/cHVMKIpGFCw4QgIBn5zPU6mu0wm8yAV7GHom5aFkm7hdJ0UYBa2MNvt9CbLjpA2DtKi1QC8nh23UzVBXkVB6A/oGo7VIdD6u3WOgWw/SVmb8VvbtCbLvHT8HV+0+X29qmQjsIG7KQ/WLbG2Ms9LdpD3COAXNQXX7+iN13s5+/Uej0+9geZ63a7zYwpski1wCdDPbgIbtEfgMSKrFYXVBX9YNQBar0eP4KAi/se45ub9TXipyFWGGEEAcnqf34y1JfR8+zgvYB0Ah6vOwSVRHZ6Lun2qK9ei/sHUXFt5G9FvdbrMYkTgoZJ4nmMjctMtf9OpcHTFb794yIjHiQTsL6YwUtkqJj311Ql3pesFj2BEkYk/QGsVuuq7eRuZwvbIX4acmXWwKzxCNR0BVaGXJk1fvQHJE03I9w3VPgZSouHI3eBtBEYKvP7a4w983ftFkoYIbKkjfytfTwCPvYHPIrV3YBJnHDx7Rb7yuExmqB73puECwptg1uJqCQ0dswVd4Hz/mArEcByH18JT5N4Hjqv/T350iVomEyMS3QDotEt/jjMfp4CvOl5QMaI6w6mqmcSsez5160yLxG7ErSrBU4lXHCSByJ5iTDY7nnIJmIfmy1wauGCkz4R2msE24nYh2iBcwkXnOWZ4DGJ2MW5hQvO+lj8UCLy8HQF/7qTff8Z+S2/C+wyIs1bt7Oi/JGfxsSttanqaJqO/zMEfk/F3xWfDPWl0PeMkpKSkhPxL9wiAPIlisbLAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFfElEQVR4nO2ZL3DqShTGf/cNIgIRsSJiBSICEXFFRQUCgaioQFQgnqioqKhEVjxR8URlRQUCUYFAVCAqrohAVCAiEBURFRERKyIQEZ3hibAhgd4SuE3/zOObYZJsId1zzne+/bL5wZbodrvzg4ODtfFOp/Nj23t9BRSedLfbnQPUajWEEJimiWmaRFEEkB6/WyL+KvKlbrc71wELIXJ/0+P6MxgM5qXMtCRU/uTHuupAjg3fCRsZoKsPSZBv4TuyoFALrMIPIqIoIqYKJEz4jtWHLROQ7f9ZnO+eTez4qtiYgKfRde5aKQVA1XgBWFsFAMzYe5/ZfQAKiaD/cIUhbKCTDBhi7TtRFPE8uXvPuX0INjJACCM9DyYDgskAAHdwhQpDIn+UfgC8iUfj8LCk6b4/CjHAEDbCkgCoMFj7exAopBQ0Dg+pSfm+MywZW/kAKZfUl40LgDTg7xa4xk7LIEDs37/jND4PGxmgVIxc17wcG1YxfnzcahJX17dzSwhCpbjsnn/os8TGBAhhECsftTKujAYWIKXkOUh0IQgCnoOgcDv0+sOcY7SEoNcfzs9OTz4sCYVaQKkYYUlUGKQiGIxvgKTatUUSpJTUpEQWSEDr+O+5e3qSXocLfxEqxdX17YdZ6UIiKOsOAD8PfhIEKj2HRPzu70e028dv3iNLc9cdE4/usAH39IRmfwhANLzhaeRyt8Vj+p9i56dB3QKwTMZreI3mnZM2EQGzkYvNMvAW0ALq17dzx3FoHzVKT8TGFkgc4DqKrAJv0TxudqidnQIgFsEDcHaKJQQqDLl/GJfeChsTECufWPlr43oVyPb7+PExFcRmsznP0lwjGt7w1D3HcRzMk7M0CZydYgwGvDSSVgqV+pAkFBJBzYIgUKkIKqOxGEuuV9V/9mJQW5ynNO+ep9WeTqeoMMRoHfHSH2K0jpjFlfQhyxKCqvFSehK2MkJSitQSr7aAVn+dBNuuEx7/TfW4CbxO81ApZnHl1SOQnpeZhJ1F8C0jFAQBQgg6nYT6kdWDXj+h+aLSALY0mcXLauuk6OtZXMFxHKYTl7K8wUYGKBVvfVMpJa1WM/l9GPLSOMZ8GKfBCytZP3SFdeWFZWEtNl0MU1IZj/COGtj260L8HtjaCUopUOSXwWQ8ob42RJAEHyqFLU1UGCIsiT+dAqSVXlabxXcsomGPCGj2+swODpi+X7xr2NoJaiOknaBWfe3/tQb4N5dpRf0gSu4ThtjSBBL6C8vKVb8yHmF4Y4KaTVArr+pZFEqAdoJZZJ1g9qjhjVyiYS9NQtV4SftaH+MowHGclOrNXp+oVmN477H69um4bpYiglutAlnHp5fB38EGfvX6KRO08GUr7vs+04lLs9fnZBGwaZr8e3UGnrdVILtiZxF8ywlqb9AizwQAx3EIgyeiowZPl5frAud51I+OkMPk+eDBqnL3z3mBUHZDoT3BWPmpAVo6wHUnCHkRhCUTphOX+NdDqurPv/l/2cAv6uD6HgCjp+hzlkHI7wl6k2RCugW0+GkxfG0vQBugLNV/hyRwcxG4CZQXPOxghHJOUJylewGbNkE2reUPVhW3bkLJFV9FKU6wKKK6SXB3y8UnBK6x857gqhHKQovgW5jUTaD8Ht+EnfcERTwG2um1lDJnhiZ1iM06xuNT7ncPVhV3oeqfFXQWW70YSVcCOxHDA9nOOcHG4SFBugqYTKMQ6iaxaSHubrmoA773JQLXeDMBifta+oDsnmD2xcjqnqBmQhponTlRCJhfKngopAHGqxqgVwFY3xMc3Y3y118s6Cw2TizrwX82k5eeht1GxGMqso1kknkvoPDclep/cRSe5DYPI98l+D322GOPPfbYY4899tjj/4v/AHenyb86MYWdAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAEMElEQVR4nO2ZLXTiShiGn95TgUBEICKuiIiIiKgYsaIiAlFRiYhcUVGxYgUCgaiIqEBUXHEFAlGBiEQgEAjEFRGIiIgIxIoIBAKB2HOyAoaGEH7ahoV7Ns85OYQwmZn3ne/7Zk4LBQUFBQUFBQUFBQUFfyBXp+q43XHjsR9sPVeV5Wez2TzZ2O/hJJNod9w4mk6JoimqWsHPMMLUK8D5jch9cClerSwFJo1I4/vB2Y3IddBd4m9MA5kOlxYRuQ22T/wlR0Qug+wTn+QSI+LTne/LebVSWa/+IVPOFRG5dOo4TqzrOuGP2cGVl9/TppwrInLrTFOJH7456LrOyAs3xCbFj/1gXRcuISJyM8CyrNgaDgkBw1kakY6IrJU/966RmwH1ej02Wy0mwLxeB0BRlIMRITlXRPz1kZeyEEJQFgJtdT8YTpjNZvRsG1WBculnZi2Qn4eeR9HyHpbCZVT44RQ/nOI4Tuw4TvzeeecWAd1uN75utZjfmACUqncABLZNuGojU+MjEZFOn7wi4vr9UvcjhS8GfQC0xG+z2QzP81AVhXLp50aNOHSIytpKZUGVqNbt+r7dcWOAh6+1vUbkbgDAYDCgKo1odzCFYO55lITgueVStTR6ts1IheeXLiMvyIyIfYersR9wK3T+sWtb4/9QYRIdF9251YAkYRjS+G5vPnz4ymLQp1GvIYRABzTD2lsjDou3+VKvo8HmZVhHzzUXA+4NZaP46Lq+1aZUvaNUvWMx6LMY9NfFUuctNVhMuRU6yb8j7BOvAeVWCx2owvpTCHH03HOLgNenR7zrOQCapvHwzdlqMxgM1kbAcqIax+8aafE6yy3XXAk2hUCsrmPJpQb0gtnVo6XGfhThPz0CoN7WtiIhDEMGvTbPL92N5zI1AAIgaDYJWO4at0Jn5C0jIi2+JgTlVou5EJSBOVD2PBRFOXruuUXAv8PoqhfMrnrB7AogGrmMX5422mSlhmRh2+vU0FfX266xFN/4/iZey+jDW23B7+EkRVAa4c8iXEM5mBql6h2l7ltUmDtSQzMs9NXvVuJ978Yk6PdRa6nCewQnMUCSNOL16ZH/XltMJpPMts8td10bgMxdQ9YMufPLFVdrNo1m+0NzPMk5II1Mi3tDiaORy9gfYaTaKGVl43vWgaokBF+A4Y2J6jioAO1O5vvHctIISJNOjWSNsIbbK5jeNSRZK95o1IjczeJ6DL/VAMk+I5JkHqhWJFc8crsYd3eIsb9+lj6b7OK3pMAuZGpgEGMoLF6eNlJD13UmwTDzXbniBmwId+8thjtMy+KsBkiSRviGgnk954bdu0bkdrHaHf5OHHjce4thOIYw0d8RXIQBkg0j9hyotlb8A8IlF2WA5Jhd47PCJRfxD8pDyIJmKiqViroUzueES/4XBsB2Vc9DfEFBQUFBQcGfzS+oUBK5v0vSvAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFEklEQVR4nO1YLZPiShQ92WrRIgLRAhERgYhARCAQEQjEExGICMQKJD8AgUCMiBgxYuWIFSOeWBGxYgUCgUAgRiAQEQhEBAIRgYjoqvsEr7MDTAhfM/tmXk4VVXRBf9x7Tt97+wIFChQoUKBAgQIFChQoUKBAgQIF3g++75OUkv70Od4VUkoKw5B83ycACMOQwjD8fzjB9/0dY33fp+l0mjriUyoii3E13nfKp1LEa4wrw/ehnKL+/2EVkcc4AHSqjO6a/FXDPrQiTmG889WglsGoWQY5ADXE645QTnrrGKFdu4CUkhaLBYIgwGAw0JQD1Hj//y1XkJ1ssFxJODUdk+cNlisGABivEw3YOiker7CREskKYIKnv6n1Lcu6+uwA8OWayb7v7xjv+z4FQQDLsrTXjAeA5TIGgNR4s8xQ4hIAoNQQxwlsi8EQDJ1OCWZZoiF4qhbLsrRbKeJsLx5j3PM8VCoVMMYy13WtEgm2NXw0SsAER8MGRqME0gB638Z4GrRQMxIYBk+dNAsl1pEEExyPk1mqgGsVcZYCFOOKYcV4EARg8S/8/N7BYrFAVqQHAFHT8TSXWhgzMMFhliWq3SGkAfCEw/Ma2kZsFTF53mAxl5jMt4pggiPhCebzVRoT4ji+qSIOkBfVOw4n1wK1azq5FqjVdXby+7EDdaqMWq6gTpVRQ/A0M7RcQQDQrunUEJw6VUZBMKaG4OQAO+tdmzWOysb3ffI8L5WXMnowGGjdRpmi1QqWbUAYRjrnV5Tgr6qXBsAwDCkrIJ6CTpVRbJZQWsZYrhgaNnA3Sg7WUvuo86pxv98/eiUPfjglqrsWSNd1lHQdZs0EAKyjCADwHMUYTzaach6wvZ9qnBcjLsV9r04AIEsuXpJ2Vow4JY/btp3K/b5XT+V/36vTfa9O1aZ5INGXa+wXRddCXUHXAnWqjJy2vVM35NUR2rl5XG2aJAyhrKBprbGO1oirNfx8nGitrkN1fRvE+g/TdP6tFZF1Bacbhp+Pk4N9sxShSSlJHeDlHT+2+X2vTuF0BmEILEomKvESDz+itIhZP0cQjGEtJYTgeJokOwd6ucclMUJdQc4lrLoN4PAK7s/JihEnMX4OnLZNrsHT8TqKEM4iGOUyHserqxVRsZrksDHWUsJx6wiHz0g4h92oAgD+nq0wHy0z5+8r/ovKo57n3aRDw6IF1lGUMiIMA0JwxJsNXOt3ChsMBpplWVoQBPB9n9Q4r45YhCMNpW3p/GOUQFTL4FxiumHoP0y1SsXImrpTxyh7teFwSKZp3qyyqjZN+mqXAQCz8RybzQaOW0+/R9zGbDY7WPscRdz36rR8XkIvs4MruI+TY9yt3uOqEGp1Heo4nHptg2zbJtcCdRvl3LVumTXO6UdkTrrmPd5rG9TqOtRrG9RxOKlcfc7h1d6nVJbAaf2Ik3BqHr0Vspok5yjiIsbzMBwO37RDo565LYNtP/++A/ZxTBE3YTwPt+7ZKcMV83fN7fe8OPGS1Vswzk7944usQGEYkhp7nrczPgV1AySjBMJgMMu/j+DUdHyL+JGZQL/fx2KxAIA0a1z74LoIl8aI708BKfbvmtvnrQOkCnCtUub8N7nj1+KSGKHe9UEwTnsBDUff9he+Gjtz3+2OX4tzYsRdk1Pd2L7eVEPktTX/k4zn4do64sMwnodLYsSHZDwPeTHi0zCeh6wY8ekYz0NWjPhThr9f4bAHVbwA+R2ot8Q/cRq6r7NdlJ4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 52,
                                left: -31,
                                top: -21,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAFEklEQVR4nO1YLZPiShQ92WrRIgLRAhERgYhARCAQEQjEExGICMQKJD8AgUCMiBgxYuWIFSOeWBGxYgUCgUAgRiAQEQhEBAIRgYjoqvsEr7MDTAhfM/tmXk4VVXRBf9x7Tt97+wIFChQoUKBAgQIFChQoUKBAgQIF3g++75OUkv70Od4VUkoKw5B83ycACMOQwjD8fzjB9/0dY33fp+l0mjriUyoii3E13nfKp1LEa4wrw/ehnKL+/2EVkcc4AHSqjO6a/FXDPrQiTmG889WglsGoWQY5ADXE645QTnrrGKFdu4CUkhaLBYIgwGAw0JQD1Hj//y1XkJ1ssFxJODUdk+cNlisGABivEw3YOiker7CREskKYIKnv6n1Lcu6+uwA8OWayb7v7xjv+z4FQQDLsrTXjAeA5TIGgNR4s8xQ4hIAoNQQxwlsi8EQDJ1OCWZZoiF4qhbLsrRbKeJsLx5j3PM8VCoVMMYy13WtEgm2NXw0SsAER8MGRqME0gB638Z4GrRQMxIYBk+dNAsl1pEEExyPk1mqgGsVcZYCFOOKYcV4EARg8S/8/N7BYrFAVqQHAFHT8TSXWhgzMMFhliWq3SGkAfCEw/Ma2kZsFTF53mAxl5jMt4pggiPhCebzVRoT4ji+qSIOkBfVOw4n1wK1azq5FqjVdXby+7EDdaqMWq6gTpVRQ/A0M7RcQQDQrunUEJw6VUZBMKaG4OQAO+tdmzWOysb3ffI8L5WXMnowGGjdRpmi1QqWbUAYRjrnV5Tgr6qXBsAwDCkrIJ6CTpVRbJZQWsZYrhgaNnA3Sg7WUvuo86pxv98/eiUPfjglqrsWSNd1lHQdZs0EAKyjCADwHMUYTzaach6wvZ9qnBcjLsV9r04AIEsuXpJ2Vow4JY/btp3K/b5XT+V/36vTfa9O1aZ5INGXa+wXRddCXUHXAnWqjJy2vVM35NUR2rl5XG2aJAyhrKBprbGO1oirNfx8nGitrkN1fRvE+g/TdP6tFZF1Bacbhp+Pk4N9sxShSSlJHeDlHT+2+X2vTuF0BmEILEomKvESDz+itIhZP0cQjGEtJYTgeJokOwd6ucclMUJdQc4lrLoN4PAK7s/JihEnMX4OnLZNrsHT8TqKEM4iGOUyHserqxVRsZrksDHWUsJx6wiHz0g4h92oAgD+nq0wHy0z5+8r/ovKo57n3aRDw6IF1lGUMiIMA0JwxJsNXOt3ChsMBpplWVoQBPB9n9Q4r45YhCMNpW3p/GOUQFTL4FxiumHoP0y1SsXImrpTxyh7teFwSKZp3qyyqjZN+mqXAQCz8RybzQaOW0+/R9zGbDY7WPscRdz36rR8XkIvs4MruI+TY9yt3uOqEGp1Heo4nHptg2zbJtcCdRvl3LVumTXO6UdkTrrmPd5rG9TqOtRrG9RxOKlcfc7h1d6nVJbAaf2Ik3BqHr0Vspok5yjiIsbzMBwO37RDo565LYNtP/++A/ZxTBE3YTwPt+7ZKcMV83fN7fe8OPGS1Vswzk7944usQGEYkhp7nrczPgV1AySjBMJgMMu/j+DUdHyL+JGZQL/fx2KxAIA0a1z74LoIl8aI708BKfbvmtvnrQOkCnCtUub8N7nj1+KSGKHe9UEwTnsBDUff9he+Gjtz3+2OX4tzYsRdk1Pd2L7eVEPktTX/k4zn4do64sMwnodLYsSHZDwPeTHi0zCeh6wY8ekYz0NWjPhThr9f4bAHVbwA+R2ot8Q/cRq6r7NdlJ4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:LVST [] 12 =\nprod_cargo_types ctt:MILK [] 14 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 5,
            available: true,
            name: "Dredging Site",
            colour: 194,
            fundCostMultiplier: 180,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, -1],
                    [-1, -1, 0],
                    [-1, -1, -1],
                ],
            ],
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["SAND"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 66,
                                height: 100,
                                left: -33,
                                top: -67,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:SAND [] 17 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 6,
            available: true,
            name: "Fishing Grounds",
            colour: 160,
            fundCostMultiplier: 88,
            probabilityMapGen: 14,
            probabilityInGame: 14,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1, -1, -1],
                    [-1, -1, -1, 3, 2, -1, -1],
                    [-1, -1, -1, 1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1, -1, -1, -1],
                    [-1, -1, -1, 1, -1, -1, -1, -1],
                    [-1, -1, -1, 3, 2, 2, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, 1, -1, -1],
                    [-1, -1, 2, -1, -1, 3, -1, -1],
                    [-1, -1, -1, -1, -1, 1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1, -1, -1],
                ],
                [
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, 1, -1, -1],
                    [-1, -1, -1, 3, -1, -1],
                    [-1, -1, -1, 2, -1, -1],
                    [-1, -1, 2, 0, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: [],
            cargoProduction: ["FISH"],
            placement: "on-water",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAA3klEQVR4nO3YIQ7CMBQG4BeyA3AEjsABkDtIjzI5UcEBEBUTk0gOsAMgJionJiqQFYiXPAQjWUICZLSUZf+nqrrXPy/dS4kAACCOfp8JH7eSuo5XVrE2tp7vB7+cY30iiGgBlLomd82IaBTGRIZIOqK/7qQn1rPkSov1LKqoJhdvPYshkmZuAYSiikqKIYBvO2mWQnUSAADAj5gZTW7BR+HHsNKH3jiS4AGUuqZuWGNyw+QGb7nTWtjtknVKtPeAT+RKD48mTcoy0rGepT1shFta5n0xviwX+ccAAEjtBlGae1sOFtqAAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAAdElEQVR4nO3WoQ2AMBRF0RdmY5COgkQwRAWCkSoRjFDZ5GOoJgH6CeEeVfebp64EAPATJVsle/sfVed5LOVikrR5Hj3hOsA4LVqPdx3jV1Iu1ofJUi4Whvl/AwAAcF1sUJGuIXRHq4r8zABUJBUJAAAA4EE7dPI1oVf0+eEAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAArklEQVR4nO3WrRECMRCG4R3mCqAESqAA5BWSUpCICApAIpBICqAAxIkUgIhARiB2ZhGcOH9J5n7ep4DN5MvkmxUBAACYgfe5Mb3vLefMTc5hJYWk/4t/XlnnziaAk79J/DYiMghjTUJSa523kNTc8bq+ABYlPram8TCJV6zeAa3zfZk9ax89DSGpdZedaSfr/MvDIltEm5dYTmoa1QGllpOaRgXAcsJyAgAAgNn6Aa/CXpgNuNfNAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 63,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAABAElEQVR4nO3WIY7CQBTG8S8bxEqOsEfgACs5SI/AEZAVFQhkBQKBRHIA5IoViEpERQWyAjHJW0E3IatmJ51mWv4/VTN97cu8L08CAACpqTczc8eFxa7zFrtAiKp1jx+/fUevlWQD8uKg5j6T9NSMV1K1zpZZYVXrLFvv021Ac5qbaz7T/UAPwSOwzIpuTs//OjdUuPkKbsB2u9KtnkuSfK/pkOEW3fOM+gZVtt7bV/5urpT3mUkZTbghQTvJrlLvtybJReiv37yoI7x7FA3Ii4Ou3TPhSXiOVKpr8yAZELo2T0bVOruUH+Yues0ZDlmbAQAAAAAAAAAAAAAAAAA9+AHFAJklT88g4QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\nprod_cargo_types ctt:FISH [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 7,
            available: true,
            name: "General Store",
            colour: 168,
            fundCostMultiplier: 15,
            probabilityMapGen: 24,
            probabilityInGame: 12,
            prospectChance: 75,
            layout: [[[0]]],
            cargoAcceptance: ["FOOD", "GOOD", "BEER"],
            cargoProduction: [],
            placement: "in-town",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAACO0lEQVR4nN1ZvdXDIAyUN2CEjJAig2QIlylTpmSEDOgRsgFfJT9F4SR+DH7vuya2Apg7xGHDQifh+XymEMJ+/3q9ljP6Mf2hmngIgT6fz379eDym9mnawyRxSRphVkYMf4gecQkUl+KMFmJY4xZxom/yXjYQjRPi8EbRHEe/XIaI9jhfM2Sc6FgxDmsoN+KSrETJiHO50YbZ3YDl6hJ6ZHOZwJDERxtmc8Va4kT+yOeyJdeOrsNoEaK6AjK3kpFCYljErXoINUIUF/TW8Zx5IaNjoDneYpitRukW8pYzCaucN+KtholE5LgnBPyzlHirw3PdVsNERokEQUL8BJk4mne60yhNLSF6DBP5hbdyICH2G8vcch3y5rzV2RbDLCFe8xwWYvGWM0RUxnLEOd5rmN4ct4AMU2LPgPf7nWThmrnJ0AQ0tDAIiGAIgbZtywpSklUSewboP2KMKaccIiOvvbKXywW2IWOlIy7Jy7qWINADNLQQpcQsYSzDLCVeO9KM4lVAI8aYdMwyNyKibdu+7q05j7Knhrg2TInm9wCNGGPyOpUjg3wDGaUlbs57UJYe9iaosa5rul6vX52tMUxrxDlurRwarcQZ3V+DpYZZQrwHrZ/E3fsB9/s93W43mIoMPU894pZhSvTuDh22I7Sua9LLXA7eymEZpsRR22LT9gQRLEMbSZwxbFdYvllKWAY3kzhj+LkAv0fkSOYwizjjtJMhInvv4N+cDGl4Gy2zD0lPOZEl+n2zPOt0+A8ZzpDJ1o3gxgAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 49,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n}\n\nlocal type{\n    cargo iterator\n}\n\naccept_cargo_types ctt:FOOD [] 1 =\naccept_cargo_types ctt:GOOD [] 1 =\naccept_cargo_types ctt:BEER [] 1 =\n\n\n/*\n The following is a replication of what FIRS is doing for a tertiary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_tertiary.pynml\n*/\n\n/* On arrival of supplies, clear the stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, do nothing. */\ncb:production_every_256_ticks def{\n}\n\ncb:production_initial def{\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "tertiary",
        },
        {
            id: 8,
            available: true,
            name: "Glass Works",
            colour: 151,
            fundCostMultiplier: 95,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [3, 0, 3, 0],
                    [2, 1, 2, 1],
                    [3, 0, 3, 0],
                    [2, 1, 2, 1],
                ],
                [
                    [3, 0, 3, 0],
                    [2, 1, 2, 1],
                    [-1, 3, 0, -1],
                    [-1, 2, 1, -1],
                ],
                [
                    [3, 0, -1, -1],
                    [2, 1, 3, 0],
                    [3, 0, 2, 1],
                    [2, 1, -1, -1],
                ],
            ],
            cargoAcceptance: ["SAND", "RFPR"],
            cargoProduction: ["GOOD"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 90,
                                left: -31,
                                top: -59,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABaCAYAAAAIJFAjAAAFbElEQVR4nO2bIXPrOBSFT98YGAgIGBgUBAQ8UBAQUBAQWLBwwQMLCvoz9qcUFCxYWPhAQEDBAwYBAQEPGAQYGAgIGGSmC9yrSIrkxIkdZ2f0zXTsNImte3zv0ZXdAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQ6If5fP459BiiIU5Kged5PsTpDa4qwC0FTlxFgFsMnOhVAF/gnPM+T9uKXgQ4JfBbEaFTAfTAKUDOOYQQxmviFkToRAD7iutBCyEwGo2Mz3POMR6Puzj1xVwkgC/VKXj9h35HgQshLjl1Z5wlgCtwO53tlJ9OpwD2gd9C+gMtBfDVuI5d4/YVp/f/VxngChzwG5oduMsQaX9oGgVwpboegI2vxnVD1H93CzgFOFbjrrQ/Zm6u4MuybDnc7jEEaGNutH8s1V2ClGWJJEmQJEkHIVxGBFweOEH7+tYlQpIkSoShiV5eXtSavKk5sQVxuToFS8HpwVO6U/C3wl0y/bvVTYnneWWkexszcwX+/v5+1+b8XRNVot3VeFsmeJ67pzM9re0rTjVflqUh4NDcAcA8iU/Ogow/I+aJygQbWwRbEIK+u1wuB82Ab7STxLHa0o/+mpiKN1SixNsyVleRgrONja64HrwQQgV/CwuiOwD4855/llWFJI5hb23KqgLQnAmuWtc/Q4EvFgvkeT5oBigBWFoHK4vqpC+WVeUUgYJ3lYceOGUPTb1CiEGEUCWQ5wIf8gEsjUFiAEDKmbElkjg+KAdf8OPxGOPxGIvFAlmW+droT8751W+TGyYoRn8AAKQUmLF1vf+VESlnKIRUW8LOhCzL1HuuK07Q69Vq5RzYtTLC8AA8/AUhhXpTSoGnaKMCpizQBQAORSCaegQS4PX1tXGAfQsRAXtj45xDSAHO6i1jHEVRX3UZ7yCxO8gIYF8OGZ7xttTb2/TiAVJZ9CWEWgw9zScAPpDj3hCCAi2rCttkhllal0ZR7LOiENIQ4awBHKEvIZQH0JQ3ffwOAPg3v8fofoQoq1O0rKpGjyAom05ltTucak+hKyGUBwAw5n4SIvu1QcoZ1kXZ6BG2OerYPYXea5wrAHGpEEYG0iBTzpD92qh9CsznEYBpjPqMUY/SmkbptQDg1uxkLi0N1Qfo878x+C+e5hM8Rh900nrL6q3dK+jft/ddn++Cc/sINQuU+aHJ6QOljPjxCABbZZYAGkuApbGaPezM8JXMJbTNCKMP8JmcfqVo0OQR283WOKAuBnnHNpmp47EqMkT4Z9u9CDrHhDD7AK22V5hBSoEJ6s6OBk0Dp4wg7E5RF00/3oytwdLYyLA+OZYR34C9+dm1zbQ+gKUxZLwDYNaync6uFNePt8IMH/LhKsHr+DxCmaDP5CgIWizJeGcslnzGpgvhEraP+j8FW4hoMpl8/gaABpNLOUNZVGYqp2tI7FSGuJy/ELKxwxwSEiFarVZ1bUwmtSqWEFu9D3B5hKw9Qq99fZ9M8sf3+ngkRPH7Oh7ggzxBNUI+IYB9BrgaIWpk9JR29RHbzRaFkIawQ2CboXeKmHwJMS5zAIdrhHybgzOOh/KnM2DC9gibvqdBwjcLeBdjx0rDTmU9UN0DVHdZmEI0idYlJ/UBTZziEYC5ZiBSzrDOS+8yuk9adYJtsEsDcCx+vqD7CK4Ok1W19l2XQNtF0dlLSZcQwOGVbVpGA90JcO5q8Ow/krJLg4RwNTjO2aPdfRMvnd4POAefEMcaoUvXAl3dEersDyUPzPJLCN8y+tzge7kn2Ae6R+gzhL2MPtUD+ror3PvDh2NmeUyAqzwX6BOfRwDNd4Su9WToav8w4fMIm2s/JB3s0TSVxtBPh/8DZvQtuCTVWHsAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 102,
                                left: -31,
                                top: -71,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAAr0lEQVR4nO2YQQ6AIAwE4Qf8/5X8QG/G1BhACuzizs1EaDshUAhBCCGEEEL8k1j7Y0rpuH/nnKvHIlMswhZuYRfxmnypcAuriEfSrYVb2ERcyfYWbmEREb0Lt6CLGLYCLKgi3PeAEmgi3E6BVlBEdPcBvawW8bkT9GaViOagu4n4HGwXEd1B2EW4Tc4qwn1SNhHDlhfL3WL4RoN+u5x25KC+L0xvPtBemJa1oShvjCc/aFQWY/pNDAAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:SAND [] 6 =\naccept_cargo_types ctt:RFPR [] 2 =\nprod_cargo_types ctt:GOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 9,
            available: true,
            name: "Steel Mill",
            colour: 10,
            fundCostMultiplier: 190,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [-1, 1, 1, 1, -1, 9],
                    [-1, 2, 2, 2, 7, 8],
                    [-1, 6, 3, 0, 3, 4],
                    [-1, 5, -1, -1, 3, 0],
                ],
                [
                    [6, 9, -1, 9],
                    [7, 8, 7, 8],
                    [3, 1, 1, 4],
                    [1, 2, 2, -1],
                    [2, 5, 3, 0],
                    [-1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["IORE", "COAL", "SCMT"],
            cargoProduction: ["STEL"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -91,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAAGf0lEQVR4nO2crXfbSBTFr/cYFAQMEAgoGCAQEDDAoKBAQGDBgoCAwoDAggX5AxYULihcEBBYYFBQUGBgUFBgMMCgQGBAQYHBgAULfI4WNE99kmXLGo0kN53fOTmJow9rrt68+2Y8MhAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQMAHUspcCJErpfKxr6XKb0O8yfnWQCk1xFu1ZhABvk3l3m1JkuRXV1ejRUbvAiRJkgshite8sUmS5MYYLJdLJEkyigjTvt9Aa41X6hm+CYlk+hkP2hbbjPneNay1sNbuPUef9C6AtXby0chcCAODCxijJ3y7MQY8QoZmkBwAoLaR51sDALjAF8jNeqhLKeFdAKVUvq8/xxtTek3J8QsuYKJL35dyFF4FuLmc5vHGwFpbEkJtvwIAskjuHFMVZWi8CHBzOc2vn4v8Yb2dzL/aCQBorSckhJ4+rz3ufGsKUcYSwosAD+vtJItkIUSapri7u8uB70IA9f38bPvj77roGAJvXUAIgej3P5FFEpuPb2He3SNNU7x58yYHfvRz3jWyZxLAd3HGwpsA1losFgsIIRC/+qsQQv/zd5HtgXLXiP8ze883FN4E0FpPqHHz+bwkBGX7eGNKXYMi4AsunoYNCiHyx9/gQnCqXYMzRjk8ad6lGaVUbowBAEgpi0ZTlSc3a9j4ZVHuqu0a/9ozrKYCs63FJlalUlgIgeVy6eXamugcATTGF0KUGv+4DdZacBvkXaPOBnmOGCIiOglAd/6YgQzZIA18hBA7Nsi7xlBCdAoz3ufpN48A+ltrDSklrLWQUoK6CwnxQnzDZ3tedA356hZCCMznc2itJzzKfHcN5whQSuW8wdQF6uA2yKnaYNU+qwVVHxHhrKZSKqfQJxHoLpML0LZqF6HXtK8QAiL7BBNdQgiB2WyGxWIxSER0ToJ1Ddy3Xx2U/Gg0eKig6iNHdBaA30WXWR0+BpBSFj91BdUhIVzxHgHHCmGtLU2IVEnTFGmaNgpBOcIVbxHQ9higPCGyrxRuEoIqS1c6J0HK/FyEpgiozgNyJyHiOK49drFYFPvyyvJhvXVqS6cIEEKUPP2Y0Kf990ENz7Js53eWZUW+ub6+xu3tbRERrnSOgLo7WQc1PE1TrFarnWOEEIjjuGgwF4L/vyoyndcY49QWr9PiXeywLTyS7u7u8Pr1a6fzdBaALqRaBteRnH2FeXcPMOtrKwjtzz9rnM/nrc7B8TIfkCTJznigmtiEEFj++xxZJKG2651JUGttEeYASt2kTzrnAF4IEfS3tbZUzmZZViqDadt2lrSy07o84JoDvEQAD8eqECZ6WXj2dLXEbDYrBKNtIvuAKNMH34PEttZSgwvRutQBnXOAlBJa69q7x6NjGt8gW61w9vEtpvYMs8eIAACDl7BTC5V9KCKCjufwfOMLLy6glNoZ43OstVitVq2FMNPyear4+ETZiwtQZdfkBLSvlBLaXgIRDgqRsLnDOnxEgncXaIKqRxKNnOFQjugTLwJorZ2O41EzfXFTEkJuPh1VW3TFuwu0gYQr5YhHIWz8RxERfdJZAHIBF+rsk2aDtNbIItmpyjuG0SJgn3B89jjemB2PbzPsPobOAtAqL5eJES5cXWOySNaOHPe9dsGrC7S5I1w4oLkxfSXDUV2gjX32hZck2NUFxsRrDmjLKawfHrwSJLrYp09GzQFPJgJcGtLFPn3itRJs2xAX+/SN1who25AnkQNcXaCLffpkNBfoYp/ESYwFgPEqwZMZC/zSlaCv+YCx8BoBh0Ky2l+72KdPTmIs8NPXAT7mA8bCuwu0adCTmA8A9n82yKn7f3CBX8kFqrgK5ztneHWBthfX1j77SJi9jgWaPiht6wJ0vqaVZm3odSzQ1DgX+xQHVqW7cDJjgbHqgVFnhFzs8+SSIOBW0rq4QB/zhycxFmizuMI3XtYIJUnSOjPzVSLAeCPCk5wRGlKMk3EBzpCO4CyA1npCnswb0qYr/PRjAXpgmiczei6Qrxusw8eM0EmsEwSA9+/fF+t0kyTJqVJrigZaYOlqbz5yhfev0Wl6jo+e+asusByLwb5Gp45jZ4Sa9tlsNs7XMKoAvmaEoihyPnZUAdq6QN2cQxRFuL+/d37uYZAvKahCeYAnP/4IHv2fP1zB4ce4PihBjCIAcXV1lfNyeN/zAHUC0NfzdGVUATj8Aeh99tn1bgcCgUAgEAhw/gcO3X/Ly5Xz4QAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -91,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -91,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB6CAYAAAAPiFUVAAASJUlEQVR4nO1dLXTiTNu++p6ICMSIiIiIERERiAgEogKBqKhAIFasWLGiYsUnKipe8YpHVFQ84hGIihWPWFGxomIFAlGBQCAqIiJGRIyIGBERkXPyick9DH8tUOi7z/f1PocDBJLMdd2/c2cCwId8yId8yId8yId8yId8yId8yId8yIf8f5Oz//YAXpKrnl8niAAAk8nktx7r0aXX69Wc85pzXjPG6l6vV5/iPM4pDnoMEUKAc770/hTy2xLgVwJKMQBAXD1DIDjJef51kqMeQaTDoZQCAAjv/GTn+W0JAADGGAAgQnKyc/y2BDDGjAUkiAwZx5aTx4BDUxkFQQJOZBxbTkpAr9erfwkBQEAphV6vV+9Kgm0Bp5STEvDWVMYYQ5gL5GEMliXYb+/d5KQxQKcyBaUUeP609/5KKaQeBwCIln/k0Wk5KQFvTWXk/4eQt6ucPAscmsrsGCC885NlgZMS8JZUJoQAY+yfnQXeksr+T2SBt4Ig4k5JxrvEgDDX5swLufN+vJAG9D+6FD40lYmWbyyAKslTyLtlgX1TmW327Tz952eBfVOZUsq4z7MXws3nRx/fYDCof9ssQN9PPQ4GXVThSMXwt3ZQA0BLJr9/FghKgQLxUcYzGAxqAMiglaOkOv10+NBUZr7PtAW8JQbYGif51A4BBKclgBcSAnrwERIIuDvva7sPz58wKfbvCW7S+O15GwDwo3Cg1IktYD2ViZ33tS1m7rQBqJ33fUnjo6yAEAK35238AHufGMAYQztPoZi31/6dSiEF29l9dtH4VdDCCBw3T8+4PW+f9soQY6y2s4AQAkKInc7JOa+bY+C8yvFYOFv3NRpvtcy2OAwBLIAP3RJjVxdi/VLioXQhhPj9swAAPHshUIi1z3fR+NAtMWY+HpTCEBJj18fY9TGExAPn75MFqK3l5vOdo4DtPvSe5CUft4E/wMVdInEdwZDQUwnmfoSH0sXQLU/rArYZM8b2cgHbfSgLxHFsPhdCt9tsjc/ncx3cCq1X29SvI615pRR6pcTcj6CUOj0Bppjx44NiQKfS1aBSCp/8RRolH7ej+lKEf4UEerybBQC6tN2HgNc0bqJ6A/w68jeCHbql2U6uxTk/fRAE9k9lAPl4tVMeH7sehu4zHjjHXdKQ0Lz+4ivt7422gfXA/G4W8FoqAxZRHdhN42Tqnuchzp6XtP9QancxbflG4/RMRLxLDCAStsWAboC6w4KD8jiRQMFt4vobTX0VOL1/t34AvbdlMBjUg8Gg9jsDPDkefsgScRgiDkOMsgI3T8/41KrAGMND6aJf6pba2PUxdEtwriu6finBGMOk8flN59q2/d36AfaEZpc8vlqy/gDbmMfJ3xkrjWZt0rf5Ph3/XSzAS+fNhEZrPQs7axr/UTgYZYXR+I/C2arlWCbGKvbV+FXQMsc8eSHUDVCXXmwGdNmqAACe5evks7Yvb/P3TXn8NR+nZ/v4diB9t2uDfiUgqgyiyjBTiXn0Smk0ssnfydQ557hLJAXSgzROxx+7vtl+chfwK4EwF01PD+BOsPS8SgKZOpHwFlOP4xijrFgioV9K5Hluth+VgL8uujU9ugFqG3inUga05zjGDbgTLJHwULpLPn5sjd8l0hB78/R83CwwFymeixwAEIAZ4DNHv25Xwnx39RLJTCXoMR0TJq4P1RRC+0T1HyzGKFvOINeRj3EOjD0fV4HECBzzIEQ/e4Z6qwt0A9TdAPUwYHU3QK2KCtLhkA7HzGHm0akUOpUeLFnBqpAlNPOFN2ncNvu7ROJTq0Ke58YS8jzHQ+miV8rDCKAlrBThM6glja8+2oGPdrDQuec4S+1R2yUOTWcvkWD7/thKo1n7/DACVoPbqsbbgQ+ftQxwiviAToF5VaF85Ry7Ao/jGHeJfJUE2xKy9jk+tSqkaXoYAW4+f1HjAJbSXYdFW00fAPKqQl4UrwJfjeoU0Oj1vpYwdMvDCJASRrukaVvjeVGAO4EBTuA6bHGVd1cX2CWq72sJRMI8aB8YBD3g+yzB91liBm5rnISA2+/zokCHReYzuyrcBny1JLbz+D6WYBdU5A4HlcLcRw2XA6UAdNbDl060ETTJY+GYUpiEwM9UgjaL8Ny4i10eb+r22H2AfimXvjN2fczn863dodUO0tsJ2JOITeK1WsiLAqLK9PGdAM9euAb8i+8acl4CtYmEo88F1trVAV9zjW3mvSpEFsUNUWWmMrRN+rss18x4W6W3qzscfy7wBiJIOixaKo9tIHeJXJs72FH9tcBozy+OMhdYs4Q3EkGBst1kjHaevmoJRAKBsrevkmBbzigrjmcBq0S85Bq7SNEQAeBVS3iLOxxMABUsO1/7s4h4TLK93CIviq2WsKs7bCPhIAIuvcBUfNuI2MU1iIhdybA1Tq93dYdtMeEgAqh93WlmepsIINnHNV4jwraEVeCb3GFTsbRKwlFiwCYiDnGNXWPEthS5qb22KSYQCQdPh4MtC5Z2IWIf19gmqylykzu8FBNimZjvn6QneCzX2BYjaIK1zR02xYR50N5oLQcRkO1o3sd2jU1WsUuKjGWy1AWySXiX+wb3IWLfOiIvildjwndZmi7QxPXRKyWuIx9RGB7WFC32mOjY0nEYUCnMsDk2KLl4XpOAA6XA95mebtOkq4TVUDWXxV1MOMcE2kImnOO7ELhmEnmpz3s3nwI48NqgqDK4TUfoEPn67Q8AwP1f/34xWG4kZAMRdtkMHuK7EPjiS9Nh7pUSXqR7kt9F069wOYADCeBOAIn9rSC+ugYAjMdjfZyoB9HcS7grEYaQDUR4rdaSxr/4Eh5j8IIQN+NHfcAGOGMMRekdRkCr1QLU7gSsAndauj/YcgrEcQwhmkVUiTgsWK4QQRrPlTKmbgOHE0LlMzDvwBiwq6wCB/Qlcy9oOoLNytH5fG41ZgS4j/qtrgEA8GCA69N1oPIZOGdQOaDy2WEEBIwhzbbf/7MNeBzHiOMYVTIBAEh0AQD9y881AIwf/z4DACFxtkrEqrzmGgDA/HjpSjFraeBC6HHF8fC4FvAacLri44SXAAA/fVwionN+UQPA7OnXViJ2dg2sL7a0gc/nDxDZgavEVguh+OoaSqlXgc/n87PO+UUN1TQQPQ3cz7Wfyub9quxCxCbXIOCe560BZ4yBtfK3WcCuGicfJ1NXDQEEvGwswhCzRfZxDWAB3FiABVwIvf9hWeDyM2IsAydfi+PYrN7YFThtJ9N/TXZ1DQJurjZZwBlj+Gtwvh8Bf/zxhw5WG4CzZhkcY8z8UsSuwIHdwdvyGhH0Ok3TpfeMMQxdfXVyJwJWgRNYAk4H3lfjwGHAV2Wja7h8CThjzFjEZDI563WjOkvFyxdGtmm80+kgz3Pznh5h+3wJ4EvAW06JCAkSRIiQYDSRBxOxOs7V9QU2cAD48fmyfpg8Ydjb4gIvAQcWJkUHjON4Z413nDkAIJMSid8z9wX3er16XyJonLPZbKmCbLsCGWLE1TN4K8R/rN8t+Rp5NSkvz7dkgbBZpkpC9foq8P7l5zqOfDOA14AniIzGnWgANIOme4OnykevF9X2OV4Cvs0yq2SOgVtCFIC30nkKmIdcKahmer41BjDGEIbhkind399v8PHF8tSXgMsoBEMFXypA6QHbLpAgAuccvppCsi445/UFLzFVvoktm4BT2mWMGQW91FX0GMO3X9Ozvo/a816YDKVpivl8jn6/byyCBvDzl74RutdtI3m8NyXnVh9nOSQYVOJAwYMQBS74MviWnMCHr7epKRjzAeiGxnA43Jp9NqXdywi1x5i2AG9xp9rXyKtNbeCw7S4A6B3jONb9tBUiBhf6O5NpAoSXUNmz2Y98nMydMQbpa83PhZ79XfDSgCcJfA1eKQUwoMskgv43BFjPPmTqZHm7/jZRwDwkjZUQxo0EjEYjCCEwGo2glFoiYjgcrsWI8TiDUgotR5usFmUGDelBwgNjero7Fy44B34JFxdcL3KWvAsoZYAD68GNzrsaizaJ53lABpOtgIX5f428ut/RZffGA8RxXCul4AU6OF1/+7LkY2QRBHA2mwEAHh4eTKawT0wmyjkHAPhqiqny0WUSCSKEYQgnfTTAtwU3IsO2nE1Z4zJCfcG7mGUzdAI9nrlIEfOF4u5luZ2AXq9XCyHQdvUJKbh9/Xy5BM4mAlhohgixwVPBRCRQEJwqH8PhcC/g5Fr2cW1ruIxQd1gEUaTgrRBRGBrT/9ncSULxYqMLbIvqs9kMyeMdPv/nh8kOdozodDpLpeh4PF4y4VVSguE3DK3z9vt9Y0V5nhtCIySQrItERQsiFK029QAW4mrQrhPlrbkFpcFV4CQvWgC5AKAj/mT6DNZ0cUJnjt6nfxsSmoNjOByu1eAPDw/gnCMMQ6RpatzEJmQ8Hq9pnIjq9/tI09QQ4aupsYL5fG6CKgCwqEI1eQK5wEV8gdvnbA04ycbrAra2GPMMaD+fQqkcSuVIqxj3fz/i5uYGYRiarJGmqTHlTqeDMAwxHA7R6XTAGDPg//xZGnKIlDRNzbltkgg8oOMHAfXVFJxzE3iFELrOWJFt4LcSYBc/SuWIIx/zRKIML+Hn0yUiAODq6gq3t7fwPG8pfT48PABYriwJ+JdeiT9/lsZtbHMPw3ApjjDGdDHFuvglXCSI4CcppspHhMQc44KXSJRWVt4Qmec5XvpF2jUCrnq+mVG1nNKYPgEuw8slIvruojt8e3uL0Wi0RsR4PEYYhhiPx/ifgYs/f5Z4lDGAhXYJOJk2kaa8Er6aIkJiQOaOAKCt5MlxDXmmjsDC9z3PQ0tOMLg6r696/hoRJgheRqgD34dkXTAsZngAUKkxmHeOonKN1hl1cdJfuI583CWLJuloNAJjDJ8+fVqyJoAyRBt+do8c56YSBIAofUSn8xnF7O9mYD5Y7iJpceMCknXR9XRBI8ZjcK4/y0qJTMVN3bEMsvB7QKKDJuGk9OkQK3oQyRLwfr+P8XgMft6FmOqUEyHBrIoNEf1OF0ma4ovvwmMMd4k0qWk0GmmrurpaI0IGX4FEB7WoCWqtBnwVXsJpGqar4qspEqVrhwgJqjBEkgKRDwhHQeV6LmAXQkI0jPAI8DWVVz3UAPCv0USejSbyjBiOkJjBmlle0vgnywHmoSokWtDzgfFsiigMkakcnufhOtKLFJ1kgqughaFb4vb2Fjc3NxBC4FOzWjQqdHzYlONXwdNnFAsYY5BP95gq37hQgghFqktoYLkQ45wbS6GZLeE2MYA20PsLricznHPIKNTPlUSiPATlHKwdo+NlmLkBbp8zxDw0Jx36jplszEVqBg8At896NWjSGi5tJ+0TIZmUSwSR9sm6Cr9n9q3CSwghltKhCYJK34DRkhMAgBDizK4V1oLgaCKXvhAhgZ806SnQ7DvRAGmaQfoMnTLDTTvAvSxxL0vkSiFo0qbneeY1Ablp68tivezagJKsizRNkUlpQBV+D5WnjNYTRMikNAGRyIuQIE31QokqvDSfiSI1z5xzPCY421Q2vzqLiuO47jKJTEozYyMtUCkLAF+be/upxvbkHF/7l0bjdtM0LboIuufIpk+4GrRM/ifwlOunyjeTMdpGGqaiipRUhZeLfoCcwHN0GP3+XL2Icef2UxzH+kboaobIaUG2KsA5h8rHgLMogQdNt5VKz4FbmtcEZvzso9+WeMraGLbul/oC9EyE0fzB/lyyrjmfrQx7ir1ra23vRuRqLrVndbZFrFoAEcA5xyyLwHiIUikMW/fmc9u6bHAkdsoEFgUWBc1MSjwm+2E6uBNLrgFoEnhzexsN0i5pycRtAj71KvyYOOgEydrMDtBk0fFJiCDP85YyRRVemnbdvvLmnjyVmfYcnfxxkzn3+338mDhgPIQSKTrBIv0C6xZFz/Yx6RwADgZO8uarw5QxIss1UqvtZAcrgMx1gMvqDn9jsEScJgtIoC9iJGpBAtJUm3yqv/9W4CRHWyVm1xFUTCWIkNLAG5FMt6IeHZ0GKd+T29jzACLH9vXVeuWtcvQVIjS4q960pu5gkgKVpwC16NJe8ATggJP6TQxZAM9zXVVKdM33J5PJ2eTYg8U7/MuMPddgke4OS79pkTdtL7ISJ300DQ+ylJ8/f550jO/21zUULIkEey2And9J48fy8dfk3f+7p9fr1YyxpbaW53k7tbpPIf+1Py+i3wyinH7MwLaP/C9K4I1XWe4IKgAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 122,
                                left: -31,
                                top: -91,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:IORE [] 3 =\naccept_cargo_types ctt:COAL [] 2 =\naccept_cargo_types ctt:SCMT [] 3 =\nprod_cargo_types ctt:STEL [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 10,
            available: true,
            name: "Iron Ore Mine",
            colour: 55,
            fundCostMultiplier: 232,
            probabilityMapGen: 7,
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
            cargoAcceptance: ["ENSP"],
            cargoProduction: ["IORE"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:ENSP [] 1 =\nprod_cargo_types ctt:IORE [] 20 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 11,
            available: true,
            name: "Scrap Yard",
            colour: 64,
            fundCostMultiplier: 101,
            probabilityMapGen: 7,
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
            cargoAcceptance: [],
            cargoProduction: ["SCMT"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 55,
                                left: -31,
                                top: -24,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAD/ElEQVR4nO2ZLXPjSBRFj6YMDAY0EBAwEDAwMBA0GBBgsGDAgICAAQEGCwYYBCwICFwQsD9gQUDAAgGDgAADAYGAAQICBgICAQICDwQEpEoDnFYpdry25I9YUzpVqVK1Yqff7fuuuhVoKIdt25lt29lHz2NXfCr7AREB5kLsejIfQWkBNEqp30KE0gIopRARROS3EKFV9YO6FZRSO5pKTdArrpTKlFIZgOM4tXVB6RawbTu/FhGj7i1QOQQdx0EplYkIQRAYjuNkdXRC5QyAuQNg3hY6FOtGZQdotAviODZEpHZ5sLUAsJwFdRJhawFExFh0AdRHhOoChA+cdlReZNEFQRAYUB8RSnFitrPTjsqKxcPbfYEWog4ClHaA2W4DkHadpXtFFwy/fq+FCKUFSLsO6fMznucZxfHFLIhCH7PTB45bhNICeJ5njL4OVt4vuqAOIlQKwWiWvDu+6AKA6d2tccwiVBKg27O4GvRWFqOFgHkWaBH0lrnqZI+Cq0Ev+7/iYfmJoAOxGIxn5+OjEMJY/yvleW2DN7vDbv8LAOljSBzH2Lad7xcAzvutzLZaXE2f9zKnVexkK7zIe1lgmiYAZqf/5kit8Z46eC+rw3Vf7EUATdEFD96En/4dMBeh9dnCcZzs4uIi+/fG/bB22JsAf3w7z0+K+nwAIJICoJTJcDhkOp0yCx/y94yTe/+gYuxcgLPzcR6AkAuR3z8Z9Dk5medBMEtyEUajEaff/yQMQyb3fnYoIbZ6IVLk7Hyc3U9ulsb12Gg0wnVdlNVFkginZ6GsLp7n82N8CYBpWQD408muprWWrQVYVXgUzfJrETFcd97nnueTPoYA/BgPODv9tlS4srrbTmtjKrfAotU1uvCTQR8RMYpPBBEhCn0AhsMhs/AB07K4GF/hTye4rovrugAkSXqQ/zmUFmBV4Rpd+PX19bvPcx2IwSzhMX3Bn07o9xyU1UUphVKKJEkJf07fhOe+2FiAdSsOrCxcvzzVxHGcXxftrsNydntJEASbTm0r1gqwWLgueNHq/938U3kHZ5omSZLSmnn0WhER5O1T9Ts3ZaUAq1a82+0B661exG6RqSdBPUk+pjdFSZIS3/1F6v1NlMJ91IIUvsBBHoNLAqyzesdsbVw4gG2RYQImyGf15t795IbZ7SURr4V3bFRbsCzw93ROWSQXYNNU37RwTZxgkAIpqCeZnxNe3dAXIWrb0LZRT0InjokTjIfHwxQPrwJsk+qbEL9g6B/bIrMswIRQKXiOsV5i4heMQ616kU+L5/JNUn0b4gQjScgdcegVXyRvgV2m+jqKjtjX39iUXIBdWL2WHMurqYaGhoaGhoaGhoaGhoaGhoPxC3rKQZujLSrKAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\nprod_cargo_types ctt:SCMT [] 32 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 12,
            available: true,
            name: "Metal Workshop",
            colour: 166,
            fundCostMultiplier: 120,
            probabilityMapGen: 5,
            probabilityInGame: 3,
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
            cargoAcceptance: ["STEL", "RFPR"],
            cargoProduction: ["GOOD"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 70,
                                left: -31,
                                top: -39,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAFMUlEQVR4nO2aLXDbSBiGn9wICAh8QEDAwMDAIMDAIMDAICAgIMCgIKAgIKDggMHBgIACgwMGBQYFBQcMCgoCCgwCCgoKAgICBAwMBBYICGhGB9aryH+9xpasU+NnxhNltdr1934/Wnl1RMW4arqJbdk0azXEs7n8ODnaZbydLt43vZokX0MQkfRz2z2mczPc2o4/8vyCRTI8O0kAep7FuRNz5dlc1fW54Osw2XbcyggA0D1urrQ1O6ttL8Ha6eo9Mnl4RByLVr2BeDb1+jHNTpO7T2Pq9eOtx62MAIbH6RSmoGYRvv+w83iVEWCKYhpCW2oL7d++P+00bmUEAHBieAymiCVE8RP2VN8Od6FSRVAs0R/HwqwFWiftncaslADAgvHi2TuPVzkB8qYyNeDBvuZJXLqzIZ48t/ejC1R8Aky2GrcyAgBEKmDivcMWgRic2EN2HLMyAhxHH6ghTHi30D6wP+NbD1xuOW5lBDBchB+wI5uTdmPesv0qECpUBB/saybes/fVLAJ0DbiNr7Yet1IREKmAz3J9qAFZXl0N6M6GeJEDwEmtwaupAQZx8vVZ5QQw7PoQZKikAHkZDxUVIE8qKcDjdJrbWJUUIE8qLYBZDe5C5QRQYZwev8ofRA7rgJyprAB5hD9U8FnAoGbRT0W4vb1NAHzfR0QYDAZrN1ArK8AmjOFKKZRSmON+v5+sE2GvArQ7Z8n3+7vctuTVLIK6Ps4abhARlFLp33XsrQa0O2cJQLfbTVqt1tbb2VnEs5lYHn7jFN/38X1/xfMikvbv9/sr8+5NAMfSi5Yw1nnb7XaTbre7tRCqc47fOEUphe/7q+czImS9vyzCXlJAe18L4FgRoeMRxvq41WolIsJk8muvutQv/wRYazSQetwYvRz+y6lQ+CsyJvQNJhIMJiIcKyKMbTbViOWqvmzIsuHrzhmUUoxGoyPYgwDrwtwYDaupEYczLMdLhViu6tnCZtrXsUmkbGQMBoOjQgUw3jfezRq7fJwVJQ5n9Ho94NnjWdZV+l8l2380GhUnQLtzlmwKd0P2vDl3cdYBFovYJv4r37N9lvu123pbvbAiuM7by+Gezf/rK7258e3+buHLZ43cVNBM+8/u+abt9PQUgE83b4CCakA277MCmP8NjhVx+Vb/zv/PXzrk37wf8+3+bqMhLwn5rPeNx43hN2/eAgUIYEI/m9uOFaGUwnK8tJ/x+NXbXqkvaxa6DkjzGOONVY+XTa7qjz6OE4Dh37cACx43yJPOcbEEgPFUlRoBuU5+6pGAzmOAD6MRcThDRNLcP56/yWEFentr9Bj8PilQa2gjTXhfZ4QwTJ+ied88Z96eQiLACGGMzUaEF+gUiJS+5uus3DfWc538vEni4eKrAFgvxOf3PVz3+Vb48T76fVLAw0WF8Yrh2dSwRff9EZ3Prxrn+RVeTK4CzAjAgaeohziCIzr3s0IEwfOiSBzJc/qtyPUHETsUPFzE0UtYDxfQhtcadioEkPYpm1wFEMdChTEiguu6afuP6BzfukzDH1jpUxa5poDZtpJgSByAhYOHSzj3djx77ttoAAR5Tr8VhSyFQ18XPdFrndTbKhScuk6Dxy+DIqZ+MYXcgno1WfwZbG60FTgrt8iyb4OFTr4sBOg6MSP4PRdCm8gKETkqbfdwS38W2Mu+wHiqjrJPfXYowHzdUDJ73R0eT9WRWRu4rr2wJC6LUrfHv0T9MqcHShBAhfFCHSibUiLApMH/gVIEyL7oVDZ7F2D5jnDgwIEDB0rkX6xrRw257Ur1AAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAEbklEQVR4nN1ZrXbjPBC9PcfAwCDAwMDAIGBBoEBAwMKCAsMPLCwo7APkIQr3AQoWBvQBCgICBD4QUBBgYCAgYGAQ4HO8IJnpWJGTNM3POSsUxZI8c+fOn3yHG43p0327NCGUUpv5dHp3Czmu/tL8IW5HqUKYTgAA63IOALCmRKr+uzoQV3vZ9Om+BYAwnaDUfxAnKWhevb8iHGY8B67HiIu/RCpeFAWSoATwaXFigMsIAur3bHlRGS92uFQcgFdR06QYFHMMfv5icPrWX4oRZz+UFF+vClYMAKy1AIA4jpEEJT9fl3NEUYW6HiBMJ6w4PdeLF4xShSiq0Awezg7E2Q7L87wFAKVUh+qS+taUMI0BAIxShWWpgWBj4VGy5vXAhgHLUkONnz/nF8ga3z6ELH7Ip0l4rTVGyRphOmHr0m81fub/TJMiy7K9MQL4PhAnb3Z9vCgKZFnGzynSu8HPp0hRFLBmxnvV+HlHUQkc7SeQgNOB+PKmY4IbzSX1JTvIv2n9stSIkxyBXXTSowucL13K92mtMZvNvqTT0YunT/etRJyEIz/dBwTRWj5n5beuIX8H1RtW1aijvC8muECdwoiDi6ZP9y292JfHg+ptA8iqZitLJaWfu0rT3AXWHdbaTvwAwFmB9tB+11UOAdH7MH+I2+E67lAV6Pp8YBcAwJGdaOzSfRX9YMFJWaKzaVKmvrSwXrxwhiCGmCaFNbNNsNwqKtPp0oRAM/cysg+InT8fHx9bX0FCFncRdgsYOSfrL00I4DPVkWDSolT5RXWDOgoAYCeruDGg1H+2wKcnZw2euD5OG6WwZA2y0CFqE3AkJAGhlEL1/opVaBEnObIs4/NcxrhgEUs66VRrLrCOKbElEHf7orq0kAx2BJRevGwsS7l8u56EkMAM6w+mqvs+GTM4JQYTDOsPdhPXMH2KBdUb7P8VBj9/7TDGZZzWussAedC+2pyKFgo+QfWGuh7sCEbWj+oG4TDr9VEJXJykzIJh/cEsoeBLe+idy1KzEWRgPJoBcEZf90Y+SPTsO5hcBdjU/QC44fGuX7wgCZIOY9zzRsmaWeAzzFcY0hsD3JHnedunaPX+iirbUk5EferuVtEPjIeGGxyfIERPXwxxIzylRsr11swQJznLSo0Wycs1yhG9w1F1gBRc+mxfZUZNDgUmYJP+rLWfMUUUQAA66YzmVTY5WELve75P8aMBkED4ovy+kpi6vyRIECcprCnRxGNOV6ZJ+fxBMec4ITtK17X6CqhTm6Sz9gIyGHKmEILLvH1MuqJiyO0eZcEk7xuUUl9uir7VDcq87lKTLOq6BuV9X/oqVjUMhgCwUzn6LE4MyrLset2gO/oYsS9qy/Vu1pDpjm6KfOef2v2542w3Qn23vlTrE93dYCepLe8IL30RQuMid4KdpsYTvIDdgov+u5biNG5yK+y7H/AVSNQNAvg21fvGVb8LAP7a3VcwEYsu/YHkJl+GgF0g6L9/7suQOw4B8c9+G3SHC8Stvg7/BUb3XEvOEKzkAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
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
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:STEL [] 6 =\naccept_cargo_types ctt:RFPR [] 2 =\nprod_cargo_types ctt:GOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "secondary",
        },
        {
            id: 13,
            available: true,
            name: "Orchard and Piggery",
            colour: 85,
            fundCostMultiplier: 54,
            probabilityMapGen: 11,
            probabilityInGame: 4,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1],
                    [-1, 0, 0],
                    [-1, -1, 0],
                ],
                [
                    [-1, -1],
                    [-1, -1],
                    [-1, -1],
                    [0, 0],
                    [-1, 0],
                ],
                [
                    [-1, -1, 0, -1],
                    [-1, -1, 0, 0],
                ],
                [
                    [-1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, 0],
                    [-1, -1, -1, -1, -1],
                    [-1, -1, -1, 0, -1],
                    [-1, -1, -1, -1, 0],
                ],
            ],
            cargoAcceptance: ["FMSP"],
            cargoProduction: ["FRUT", "LVST"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 2022,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -28,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAYAAADLjIzcAAAFa0lEQVR4nO2XL5iqTBTGX77HYNhAIBAIBgKBsMGwwWAwGG7YYDBs2GAwbNhgMBC+MMFgMNxgMBgMGwiGGwgGgsFgMBgIBAOBMIGwwcDzzA1+w0UE0bt/7p+PX8EZZZjznvccRqCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoOATIISwMAzZr97HpxKGIXMchxFCGAA4jsMcx/l/iEAIOQqWEMJWq1UkxF/piKyM83FSlL/KEWkZ54En4aLw3/+xjsjLeB5/tCOuyXgeXLTfvke8NeN5/NaOeM+M5/Hb9IiPzngev9QR12ScTmaMTmYftrFP6xE/k3E6mbFwYbNwYb9JBDIcs8nUZGQ4zlzjrY4Qzm6AENZqtaBpmsDHAGAYRuZ9990aa+gautpDNBfsPEidh7PPijOZmqkBdB5bmWs4jsNM0wTfLx/3+32USqXM+06+CMOQua4L0zRhGIbA1eTjSwIIFzYLdh5e9jY8z0VP7QDARSI0vjywtb/A8OkrAMCnFLIkwacUAGD0ulclje+fj8/yXl2d256XQLiwWb9fT10nbvPGlwd2e3vLKk2diVU5mr/v1phYla/ax6U9Qrgk4y4ZMQBQjeeLbcwFKDXqAhcl7oAsm39bjbDZBQCA24oIe+1CV2UAQLPaha7ruG/WMvfBxefPynOEEIYh4zWSVuMuGTFRlgAAgU+vFiGNPJt7wTdY6x0UsRTdo6sKquojAECS5VQR6GTGxIpy2Gui72T1iLM1Hg/+ZW+jXa5D6jwISZWvoV6vsyAIEMghAkoxfPoKn1Ks3RnstYspMQEA1nKAretBVxXU9Qe87ktHYiVFuLT5Jh0vrFYrdnd3d9I1ue0tcQvPc9G5uQcXI0vlPKq1JgMAd7+BKB3WSrO5LEm4KYd43ZdOrgCiz0kR8ppvvBwiB1iWxSqVSmqN0MmMBT6FKEtR5nnwADB2Znh6muQKwANXVQ0AQCnFjbLDZhek2jxeEmlXIN0JvM9wIcSKAtRrONfjcmuk3+8jmL5Emxy6EyiKina5DrGigDe5c4Hf3dWO5huNOoBsm6dlmwccz/52bae+mnnzveQcE8kfe08yx3EYH7daLYZaFZqmCeHCZj10osCzTnlpGee0263DnO+jqj6iWZOxD7woKOr7UcAAoixzyqICezmA9bLD4NE4eTavcUIIW3sWWmhFyU0TK/dk1Wg0kOwRsJdnMw8AvV6PmVsLAaUQJSm6jp7HoL4Pn1Koivgjm9vtic3jTpBkGdZyAADYeCHk8iva9Se02+1oHz9zci1lfcEXqVarp45Q5KzbjjjUt3R0nc77eLw/BOJ6h2Cp7/8nBqAqIsriD0F44Pd+DUr57iAAltEzkl291WqxcxlP8k/eD5rNpsB7Alc0Pr7239dmF8BaDiDJclTTyU6/Dzzouo61O8XzqIuNFyKoVGDON6hWq0frua4LTdMEwzAEQggzTTMaX7KfTAckOdcj4uNL2LoefHpwAvV93JTDo66+XdsAXGy8ELcVEf4eEEURA9IBNpuT9a7JeJJcByQxDOPIEUEQnDgi+XfUeBxg/Dw8WifuBADQdR2+52A4fcJw/hWqqh4/eLPBvy8jjHffAADz8VKgdAFN04RrMp7kYgckOdcjNE0Ter3ekQh9Y4IBGaA76kVzW9eDUrbh7Vew1oeu7i3D1OcdAr/BfLyMAr3kDJLHTwvAaTab0QHKNA/HWMdx2GQyiX5Dpn0MyCBzDW71c8QDf0/eLAAn3iPidqw0dQYA3VHv6NTHUVUVcJcn85yPCpzzbgJwkrW4s7bCDj+EuJT4+/0jeXcBsrhUiJ21/ZTAOZ8mACdLiPl4KczH2aVQUPAxfAcjzxHd4glW7gAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:FMSP [] 1 =\nprod_cargo_types ctt:FRUT [] 9 =\nprod_cargo_types ctt:LVST [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 15,
            available: true,
            name: "Port",
            colour: 186,
            fundCostMultiplier: 152,
            probabilityMapGen: 10,
            probabilityInGame: 2,
            prospectChance: 75,
            layout: [
                [
                    [-1, -1, -1],
                    [-1, 1, 7],
                    [-1, 12, 7],
                    [10, 1, -1],
                    [24, 16, -1],
                ],
                [
                    [-1, 6, 13, -1],
                    [-1, 6, 2, 16],
                    [-1, -1, 4, 24],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                    [-1, -1, -1, -1],
                ],
                [
                    [16, 7, -1, -1],
                    [16, -1, 9, -1],
                    [16, 0, 11, -1],
                    [-1, -1, 5, -1],
                    [-1, -1, -1, -1],
                ],
                [
                    [16, 16, -1],
                    [0, 11, -1],
                    [12, 8, -1],
                    [1, -1, -1],
                    [11, 8, -1],
                    [-1, -1, -1],
                ],
                [
                    [16, 2, 2, 2, 3, -1],
                    [-1, -1, 12, 0, 7, -1],
                    [-1, -1, 11, 11, 7, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
            ],
            cargoAcceptance: ["GOOD", "KAOL", "FOOD"],
            cargoProduction: ["ENSP", "FMSP", "RFPR"],
            placement: "on-water",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -35,
                                top: -15,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB1klEQVR4nO3UoXebUBTH8e92IhCIKyIQCASiYiICMVERgUAiIiImKhD8GfkDIiYmKyoqEBMVExEVFREVEREVERWIioonEBOInsMEJd2yU9ETGOz0fkxOrnjv/u57PFBKKaWUUkop9f586LuBQ3EcVwC+7+9ry+Wysz4HM4DQoXJ9C8+CvKxrI2MDMPt6SRRFnfT6sYtF3yJ0qM7PpHJ9a1/zLDCm5C7OKH4+dbp/bzcgdKhOP9Wh8xJOnwdwdVtg4mvEc3lanODJmOvSJs/zTnr95wP4/apDHd6zYPNQ/hV8Y7kURdFZeOhoAG64rGzHYXf5Zb9+c+JN4OY7N6af4I1WN2iCH/qcJ4M58UOtbPRacHHrWvI4Y31fH3nfJ35o1MYikbfjZr1iFJwBL8Gt24w0Ddmdl38EtxcnuDJm40y4Lwry3ba3x7iVAQDYtiAPN/g+hJOQLNuACACr4AcyG1bwxlEDmE6nlf94B0AwEYwRoABgPg8wxmCMwb6YDy5446gBBEFAnm1h9R2AcTQDwBgDwPbbov4/wOCN1j4BsUewvgJg+/y7f9wGGLxxVGMiUiVJgud5QH0jANI07e1Vf6ujGxSRSqzipWB5/0VwpZRSSin13v0CRFfW5gkBg4EAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -31,
                                top: -14,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB3ElEQVR4nO3VL2/bQBjH8e+mgAMBDzAwOGBgUFBQMBhoUDAwONAXEFDQFzBQYBAQEBAwMFAQUBgYEFAQUGBQGDBgYFBgcKAgIJIHrHOnVpW6JXYNng+JfJH8PL/74wOllFJKKaV6wybT6uRiUXVR61MXRd7LJtNqGIavxreLi9b6HLT14n/xVnCxr8eO7XPrFd4h3m/ZZzfNs9gQsSHm/pars5L5fN7acejFBIgIw6EQFnfssxuuzkrC7QoRAeBhfs1qtWplEj70CCQhlY0NgyAgCALKssQ9Sf1fEgGwvr7ESsB4PG6lhw/5CPrgkQFrDZvfOwDi8x/1bxw3wZc7g3OOPM9b6bXTHeCDj2IDUAcvdpTljvLbmsfAYmcj9hKQGcv60ZHn21YXqZMdkIRUo1ODtXXwoqhXPCvq4BLVwbtY8ZdaLZKEVN/PpQmc7yAy/QjutVLMBwea89234N5Ri/qt7lca6o/c8t71Lrh3cPE0Tat8MWPzZYbYkJPN1yZ8H1f8pYOaSNO0evg5RYbPl4mfCKDXwb2jXIPuaQ+ADAec3l02E2IlYNnRdfa/DpqALMsY/7oliqJmLM9zJpMJzrleB/cOak5EKgAx7nnQRAC92+pKKaWUUkop9bc/qM/dnt2/LEAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -31,
                                top: -8,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB60lEQVR4nO2WIXTaQByHv+4hIiJOnEBEnEBMnoiYQEwgJhGVFRXIiYnJiQlERURFJLJiYgJZgUAgEAgkAhERMYGIiIjgvUxk0IZ1K+kCjNf/Z+4ld7n87rv/5QUEQRAEQRAEQRAEQRCE18VFlcH9fj8H+JEU1/FyxnA4rDTH/8be4cMwzMc3X1Bug7VOATAORBk0Vi6DxeosRbzZd6DWGoCJf8tqlWGch761Thlcq7z3Vue1Jzwwe++aMSbvOMXOT/xblNdEDzt036ni3jI7y4qoFNIYkyul8LMYKIvwPac09lxEvCjc30RoXYhot4o2jjPiuCzC6wQ5QDz6fHI5/xSgakWMnD4AbrNZ6lvcXZ1MRC0v3rcignX45PPKK4RMbzpHF9GoY5Ioii4Akl8i2rNPMIOJf8cSaM2uiB1omzHjSUTDvwYeFu5Mv3F5aZnWEaYitQjY8KQI4N4LmAMfWOC6CpPO0TrBepbRKAKl6oxRiYOW3O7RoN0t9Vtrmc9TrHUBmIdfod1lMBgc7SjUWgG77FaEPxkWHY9EWOsWCweSdM17aw8Z6TcOKmDDn0SM77+j3AZJut6ObbVax4i05SgCNuyK6H3slRZsjCEIgmNGOuw34DmMMTlZtL1OMlW0SXLyHyRBEAThNfATiIe7sq2n7KAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -27,
                                top: -12,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB0ElEQVR4nO2XIXPbMBSAv94FGBgIGBgYGBgUFBgYDAQMGAwKFuQnBAwMFAQODPQnFBYMFgwUBBQMFAQEGhoIDAQIDBjszgOKsqW3dr6tkZO79xH53unk9z4/6WQQBEEQBEEQBCEkWX3dZ/V1P3YeZ6Ff6IuO03Qv3tzOgucCIwg4n93+8aurLMWab8FFTEK+TGvdJ9EDq7WlO9eAKxwgbe6JrKUJmRABBWit+6T5ClONihWYB4oCNo3CWktSFKFS2SOYgPV6TR25599rTZIEgLKMgRi1ifrJJuam2QTZCkH3W57nvVKKqjMuMNWUZQnA6vMHFyoijOkAMObwIkY5eZ+KuM+uiNOUYjWjyiLaDvJtt7QdHLIjRhHgeUlEkjgDeeQkwGFEjCrAM6QjpkW0m//4OHk1EUchwDNEBPyS8RoijkqA5yUR+o3aHZL+rPifw/IoBXj+1hHgJDTTLwBc3F2Sz96zWCwG13XUAjzPifC3yIu7y91c+/0Hb68+Mp/PB9UW9Cr8r7RtewZgtyLemU9ggJUrmHjixi1VVQ1e+yQEeJ6KUEpR1zVKqb2il8vl4DVPYgs8R57n7s+ya3cx2yk3WnvStQmCIAiCIAjCgfkJ/EK6kPgqs/sAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -27,
                                top: -12,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAB0ElEQVR4nO2XIXPbMBSAv94FGBgIGBgYGBgUFBgYDAQMGAwKFuQnBAwMFAQODPQnFBYMFgwUBBQMFAQEGhoIDAQIDBjszgOKsqW3dr6tkZO79xH53unk9z4/6WQQBEEQBEEQBCEkWX3dZ/V1P3YeZ6Ff6IuO03Qv3tzOgucCIwg4n93+8aurLMWab8FFTEK+TGvdJ9EDq7WlO9eAKxwgbe6JrKUJmRABBWit+6T5ClONihWYB4oCNo3CWktSFKFS2SOYgPV6TR25599rTZIEgLKMgRi1ifrJJuam2QTZCkH3W57nvVKKqjMuMNWUZQnA6vMHFyoijOkAMObwIkY5eZ+KuM+uiNOUYjWjyiLaDvJtt7QdHLIjRhHgeUlEkjgDeeQkwGFEjCrAM6QjpkW0m//4OHk1EUchwDNEBPyS8RoijkqA5yUR+o3aHZL+rPifw/IoBXj+1hHgJDTTLwBc3F2Sz96zWCwG13XUAjzPifC3yIu7y91c+/0Hb68+Mp/PB9UW9Cr8r7RtewZgtyLemU9ggJUrmHjixi1VVQ1e+yQEeJ6KUEpR1zVKqb2il8vl4DVPYgs8R57n7s+ya3cx2yk3WnvStQmCIAiCIAjCgfkJ/EK6kPgqs/sAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -15,
                                top: -11,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAEN0lEQVR4nO2YIXTiShSGv56DQERERERERCAiECMQCAQiYkUFAoFArFix4okVKypWIBArEE8gKioRCERFRQUCgahARFRERERERESMiEDknDxBkwKFLlDasufxm+TMhJn7/blzZwicddZZZ5111v9WF58dwC5qNBqpqzRRDZ2H3/ZfEfPRZNi91LB7qVkgNQuk1atxeszxC8cc7K3q9/spgKZptFqtCwDpe6hmiaTeQ9F1ZBAedc6TSKdl8ExeIAHo9iYUFBWAoqqhWRZxGDLuXwJgWdabGE7CgHr9WxqEPj/+aQCbjfh97QCQxBKtXKH3zcifEUIcbMRJGNBo/Ez9wEdVVLYZkUkIQaM7o3NZQAiB4zh5+yEmnEgN8DANABUZq4xGzooRsDBjOJxxfT0Gow6wAn+oTsIAKSX+dIK4bGw0omwJpHQolUoALJfB5Sw4REcz4PZ+mja+1N60pBL3llivo6qrGZEtBSEUQKGlLdL/6uqGKIo2LpVd9ekZYLUHKcHNStujG2PoSW5EBg7g+z4A4/EY2zYB6NwlB8//YQbc3k9TgOUssdqDdD5u4wMsvURDXwA9ujGVahnHcRBCMB77OTRA/0EFIHJd5jI6KK53N2Ar+PQX82EbDBMCH12HKIbQnWBadWBhxFz61GwbIIfPwOPwuRpUDJeJt39872bAa+Al/Q6aVaD61FPl8d8hALoOc29CmJAbkWkT+FxKysoUqdWByd5xHt2A3cBX9/goiij/aAGsGOG7E4jAtm36D+oKOCzgbaePWzap2BbOaP94j3YQeg283Kzmz71WsaMoIookAOHgHl1ftMv6YCt8WBNIrY4z6ly4cZJaSmEvpjcbYNi9FKD/s5rDHwK+uEqK3hSAghcT2JvB294AR5hPaQ/OqHMwx8E/zMC/xYstTHRuuBr4zKe/MI2IeakGgKapT9eXBhwKHhQrKIryJvBMB9UAqz1IW173RXvL6xIUYx79mCILoIja1nEy8CJL4MUQ1opcBn5XbQLg3feOtnT3NmAbPEAgI2ScYKCCD7NEYm4x4rPBM+1lwCb44OkAIgAZr57IKgUV6UmAPCPyiXcAn9hfAfCOkOrbtPPAy/CBjDBULYdfB5eJzO/d8uJLjjppA6AkfOga/5N2mmAdflkZ/Dr0upSnPe29q/q+OvggtA6+CXpZr4F/DzxaX7sfCp5pLwOyIrcOPZcSpFx5tqiqzKVcuWbPrq/xfQ8vx9TOE2f7/rKk//zvo6huPuhsAv/INf4n7RxAUW+9MKCgqCSxzL/awmYjMvCS/Z2Z454EeKadA3HjJBWl9ov2bSZ8mXXRVPPk3vi6dg5INDtpedTBB2Z6a6WvGQ5JCiqFpZ0gqNc/parvq72KoA+YgBkOX/SFNQGA1OrEcXyyb3xdOxtQERYzOhSFxWQ6W+lTFCW//xugzzrrWf8BIhh+XvfNrIYAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 4061,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 39,
                                left: -45,
                                top: -15,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAD8ElEQVR4nO2YL3DiSgCHv76JQESsiEAgIiIiKiIQCMSJioqKigoE4okTTyBOIE4gKioqECcQFRUnEAhEBAJRgUCcQFRUICIQiIiIFREIZnIit+FPuV6AcKXz+MwO2ezO/j42u5vAiRMnTpw48b/lbN8O7Go7EoU8+XEL13X37u9DUfr6FJkakakR2dV2VPr6FL33mLZlr38sl69E5sUVopBHTn1C32f6VD8DuGs+RFZB4DgOtm0f7czYemD1ej0CaLWnAGi6AKBQKhP6Pv9d6lgF8ardsYrQ0t5Yr9cj0zSXrkyT8ABVJ8QqFDa27XRGPDw87TjEw5JKgAovpcSXEAQBAJVPcxzHwTCMje06nRFSSizLymzAWZN6BqyHBxgMJ3geWBYrItaDO44O6LhulkPPhlQCRqMRlmURPwJGIkHXBUIIPE8yGLqc287G4BALPEb+2ebmyWRCvzdA10KqVzpCDzAMiRACXRcYhoEQAsfRubgwgTh4t/u81yDd/vBg22sqAZ52RX9iA/CpbL6qNwxJ0VkE77dqK8GVDLvaPrpzQioBwcuImZS4z3nc53xy3bIsBsMJAJ7nAdD8UkvqVfDeQ4NBq8H5oPZKgtsfRof8h/9EqjXAzo8ZTxd7vpJw7fjJjLAs69Vz3ntooM+hoAlGgYSCgE4V0zSjXPmOcbt6dn1ZPoPFNFe//xbpdgHrGhuXsW+j6YKZjBfBZRHLZ4QghEGrQUETTDVJiOT8S+VXbelX2WN2BCJSCSg6NiMPin6HUb6SzIRlEddMeOk/YhkgWAQ3KnHwTWeF85sS7y0idefOzW2E56I/P69IUOSEgTO9I1RKLy4xjPie3x2UFGpbfen+QIlQdYcWsVWnzs1tVHRsRt37P4qYW/H+P7PKe4tw+8Oo1vyBns+vyMmCnTpzbm6jzvcGlXIxUxFKQBBIAPzBmFz5jvuqSevfMgDj82amIvbqxLqM3wx1/2knEeuo4DlvCIDmhQDUvg8TAYrpRTsTCZlY3FXEOiq4MVldm6uPvVcCIBsJmT5Pu4hYaR/kAJDhHKFrSXn1zaX9+Squm8uVNvtKOMjKuo0ItWt4+QYzGVA3Bsk9UxmstJHhPC4zlHDQPTatCFicKZav17QukE7ErhL+ymkrjYi3+J0MGc4TCUctQOHc3MYvPW8cqN5CmPF3hs/hIxDLUBI+hADFNiLmoUTTRVLCQsQy6mv0trzrV9pNIhTLoTeV68z8zscToFhfI4AVGYqsw8ORCFCMw3nU/NZN3jXWWZdS9DuYQHuPHEclQJE8GoAIBkgpNwpR+Jd1et17bF37GIvgNizLWCYMw5XfXr959FlOHCM/AaotOVMs/B8BAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 59,
                                left: -31,
                                top: -27,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 66,
                                left: -31,
                                top: -34,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 72,
                                left: -31,
                                top: -40,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 83,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 84,
                                left: -31,
                                top: -52,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 49,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6+6AAAEVUlEQVR4nO2Zr3fjRhDHP9cXYBAgYCBgICBgEHAg4EBAgMFBAcOAAoGCAwUCBw4WFAQUFBwIPGgQcMB/wIECA4OCAAMBAQGDBQYGfU8F6Sij8Sp2Ett5fdGXWJJXOzvf+bkr6NChQ4cOHTp06PA28e61BCdJUvX7fZbLJf1+n5ubm1dZy9GFpmlaybUor6+PTcTJsQSlaVoFQcBisUAsDxAEAc65+jpJkgrg9vb2KEQcXIgobqGJkN84juv/gKN4xMEmT5KkiuO4YV3n3IbF5VogRMjzQ4fG3ieVGBcXh3tLavfXsCSIwvLc5ol9h8beJsuyrIIH19ZuL4qIi+txj0F7jYSFYF9EvHgSKWfWwj7LAjUJzjmm+ZDTMGS8/p0g7HMaDli4sGF5PY8ODyH4+vr6RTo8+2XJ1nCvlLUQsGFhUao4z8h/zAgGIetpxofoH/on1CQAzPJe4x2BEK29yTn37Bzx5JckxrV7AvWihAibyAR5ccJ6mBBdnN8vPi8AWE8zlv0rfh1+B2h4g56jLWzk/6eGxs6DpZzZ7Gyv7b0QJG4NMXmRs1o5Ts5/bhDhipLe39e1R8xGE3rTz96comVp4qWk7krET7sonmVZpa0ogkTBOI5rC9hxzrnGgsvhR6JBxNnwPb27WxZ/fMLlBWfL/0LiLAO3ZNL7jMuLBrG6fGpZ8lyPTZKkksT8GFpZ0nXcl5A0fFlaoL2kHH7CFSXBIAQgvJuSFznrYcLVEL6vwvp/8YbRaOTtFQS+nkGvF+7Ds80jNh5mWVZpgb5Yt+4uilrr6+dfPkz57a+PANydjgFYlSUAg/P3uKJkVZachiFhccN8Pufy8vLRvkFXBa28yLUIgmCjatQ3vgbG1m2bee14HRY6Ger4jKKI2WzGbHVRKx/e/clsdVErXw5S1j++MB6PG+9awjV85PvkC6RqvNOKy2Af60KCTKq9wtexiUBLqMz/S/yNr4srlsslzjnyPCeKIubzOVEUMRqN6rnbQs8m27ZSrNdj+5UND7BKi+K+rK4XYoXqeezi9WKdcxsW32YAG99WblsoatQeYAemaVrZjstmX219gW13dQurF2znnEwmtcV9Vha5D2X0QSHrgbYhsx7o21S1VgHfNvaxbOzLvj5SbM/gU1RftxHXtg5oVgZBW6e4tVmwDZDd1m4jQcOXN2TBeozIse9AMxm35R5NwLYWeedO0Pb+vgVYpbU7+qyi3daXrZ9CoiV/103Si/YCsgh776vVtoy2KePzBp88mRv85W1XPHs3KG3mNi+wBPmIeOygxO4BfPfumLtBCwkN6+I2YfksqLGtwvjmhKdb3GJvJ0K7VI22nkCXTGjmANtxive89CBEcJAzQWttX+nzkWFPhnUvImGy78PRg50KWyJs7LahzUv2ZXGLo30X0AnLurv9Hx6I+N9+F7DQRPg2MW29+qHxat8GteK6mzzWJzHBm/863KFDhw4dOnR4u/gXberUC3vOlPAAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAYAAADsg90UAAAFIUlEQVR4nO1aK3TjRhS97gkwMBAQEDAQEDAIWGCwICDAYKFAYECBQcGCAoEFCwsKDAoKCgwLAwwWGBgELCgQEFhgMEBAQMBggIFBz3GB9ypPzyM7H8fpOatLIkujee++v6QALVq0aNGiRYsWLX5MdN5KcBzHW9/3sVqt4Ps+ptPpm+hydqHj8XjLY5KXx+c2xMW5BI3H463neTDGgJ4HAM/zYK2tjuM43gLAbDY7iyFeXQiJa0hD8G8URdU1AGeJiFfbPI7jbRRFNe9aa/c8zmOChuD5106Nk2/KHGeIAztPyvCX0EYgYZ7XdeLUqXGyzZIk2QIPoS3DnkQY4nLdIcioYVoQpzLEizdhO9MednkWQGUEay3m+QC9IMDN5nd4gY9e0IexQc3zch+ZHjTwZDJ5EYdn38xqDexIaQ8B2PMwSRXDBPnXFF4/wGae4H34L/wLVEYAgDTv1u4haGgZTdbaZ9eIJ9/EHJfhCaBSiobQhYzIiwtsBjHCq+FO+bwAAGzmCVb+LX4dfAGAWjTIPZrShtefmhqPXsx2pquzPta/aSCGNRAhL3Ks1xYXw59rhrBFie63SRUR6egO3fknZ02RsqTh2VIfa4ifHkM8SZKt9CIFkWAURZUH9DprbU3hcvABYT/E5eAdussZzB8fYfMCl6vvKXGZAHaFu+4n2LyoGVa2TymL5+XaOI63LMyH0Ggl2cddBUnCVaUJGSXl4CNsUcLrBwCAYDlHXuTYDGLcDoAv66C6zmgYjUbOWYFwzQxSX2CXnk0RsXcySZKtFOjKdR3uJKq9L89/fj/Hb/98AAAsezcAgHVZAgD6w3ewRYl1WaIXBAiKKbIsw/X19cG5QXYFSZ5yNTzP2+sa1Q/XAKP7tq68er1MC1kMZX6GYYg0TZGuryrywfJPpOurinzZH2Pz9TNubm5q92qDS7iM75JPsGt0JHEudlmdRuCmMipcExsFaoNy/1+iv/GXucVqtYK1FnmeIwxDZFmGMAwxGo2qvZtSTxfbplYs9dHzyl4EaNIk7qrqUhEtVO6jlZfKWmv3PH7MATq/tdymVHTtuVcDxuPxVk9cuvpK7xN63JUjrFRY73l3d1d53OVlyn1oow+EdATqgUxHoC7kYRg2dwHXY+yhauyqvi6j6JnBRVQeNxmuSQ+g3hlce4dhiMViAeARg5AegPRj7TEjSLjqBhWWayhH3wPUi3FT7dEGoK6S+DAwWCz942+EWC05++unOhKnIK0sIZWWYNjqak3i2pCu6JFGaGp/aZrCGFMRx24UedmzgCTUFKoyN7XhXBHhigaXPO6tSTeFOomPBisslj7CfoG86D/9nSAjQo6ZMg2oqJ7d5esuHuvhip4/tI+OCFd6krjL42a9qd3/7JeinKiYGhSuldGQJOU5V867oqypU/C6DnXTqxOOel3kAOz6EoA9/jB0DLPZrDObzToyZ5sKYJPShDGmGoy4XqaSMWZPBj1ujMFiscAwMDVZUW/3XoGeT8t6LXqxAYjpdNqZTCadQ23qUE7zbxRF8DzPmVYyeo4R16G+8/iDnCzLOlmWdU7+XYA1Qs8ROpeb0oPXdaroAYuh7vW+IS/6VY5r7Dxua8Tl9bN9F5DdgRMiUJ/ODs0bwOOquguatMTZPkNJQ7geYpr6d9MAQ+Iah8i68GbfBiVx1yO4Jl6FusJTCWv8b74ON4W6rhUvJazxZgYgOFBpj9/f359Ft7N9HW4Ciadp+mb/I9CiRYsWLVr8oPgPsU+KSLuSNJEAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAYAAADsg90UAAAFCUlEQVR4nO2ZLXDjVhDHf+kYGBgICAgYCBgYBBgEHAgIMDhQIGB4oMCg4ECBwIGDBwoCCgoKAgsPBBwwDDhQYGBwIMBAQMBA4AEDg864wLe61frJceKPgOo/47H8JO++/e+nJGjQoEGDBg0aNGjw/8TFaylOkmQdhiFFURCGIXd3d6+yl7MrHY/HazkW4/XxuYlonUvReDxeB0HAfD5HPA8QBAHOufI4SZI1wP39/VmIOLkSMdxCEyHfvV6vPAecJSJOJjxJknWv16t41zm35XE5FggRsn7q1Di6UMlxCXHYeFKHv4YlQQyWdVsnjp0aRxOWpukafoS2DnsxREJcX7cLOmokLQTHIuJgIdLOrId9ngVKEpxzTLI+nShitPqdIArpRF3mLqp4XsvR6SEE397eHmTDi/8s1Ro2RlkPAVseFqPyq5Ts65SgG7GapLyJ/yVsUZIAMM3alf8IhGgdTc65F9eIZ/9JclyHJ1BuSoiwhUyQ5S1W/YT4+mqz+SwHYDVJKcJ3/Nb/AlCJBi2jLm3k/HNTY++LpZ3Z6myP7W8hSMIaemR5xnLpaF39UiHC5Qva327LiJgOP9OefPDWFK1LEy8tdV8iftrH8DRN19qLokgM7PV6pQfsdc65yoYX/bfE3ZjL/oD24z3zP97jspzL4ntKXKbgCj63P+CyvEKsbp9al6zra5MkWUth3oValnQf9xUkDV+VFugoWfTf4/IFQTcCIHqckOUZq37Cuz58WUbleYmG4XDonRUEvplB7xc26VkXEVuLaZqutUJfrttwF0Ot9/X6xzcTPv3zFoDHzgiA5WIBQPdqgMsXLBcLOlFElN8xm824ubnZOTforqCNF70WQRBsdY3yh2+AsX3bVl57vU4LXQx1fsZxzHQ6Zbq8Lo2PHv9kurwujV90x6y+fmQ0GlX+awnX8JHv0y+QrnGhDZeLfawLCSJUR4VvYhOFllCR/2vvb/6av6MoCpxzZFlGHMfMZjPiOGY4HJay61LPFtu6Vqz3Y+eVizRN10EQkGWZ12gx3FfV9UasUi3Hbl5v1jm35fGnHGDz2+qtS0UNiYCW9qoQURRFJfd9xmuC9NyuJz3NtiVOZD48PBC7W34ejXDO1fZ5H+HSgUS3jQLt/bqbqos4jtcAg8Fgiwh7G7urGvuqr48UOzNo+O4ULel1qaChO4OgblJsAcTdgtlstiVEE1G3Mcuw9o58rFxNhl6z0Lq0vjpCfaH/1IjcAugUSyDksp1heCiJkNCyd3VQrf62dvgMt/LtGB2G4ZbhVpeGJkG+97038D4SeyoifJvzhap+0mPbqJUtxPharZav121LfMmDkxbAMuxA/mNxn4io6wKyUbth/bhLju1wJZ7fJcdGhOzlpXeDLQC37AGuJMISsk9qyEZsrbDQRuo1X4exncMn89DnAS2tQIiQCLDYRYSva2j4vAdVo+wgo88VRVGpP4caLmhlWXYBEMdxeQ+QtwewcluRIL+fS4QUKd89Rkm+qQHz+bwSCSLjWIYLyiLoI8KmhsU+7VNgc7kuPeS8JexU7wm2uoAQARsyALJ8szH5FuxTLPUcob/tWGsHnUOL2754tnAhpbLWLcjyDRHfVjFQP1na4UXIqJvVT42DlfgIeYoIqBqu2+i5XokJjq7MRwhsEzGdTiv3D6/1dvjoL0d1DTGoECNEvJbhgrO9HRZivj/4ePJhZYMGDRo0aNDg5PgPj2xBW+ZaI/sAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                id: 3981,
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 50,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    level_requirements dict\n    random_prod_factor dict\n    supply_requirement integer\n\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    total_delivered integer\n    current_production_level integer\n    random_range integer\n\n    i iterator\n    level iterator\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    base_prod_factor integer\n\n    num_supplies_delivered 27 list\n}\n\nlevel_requirements 0 [] 100 =\nlevel_requirements 16 [] 150 =\nlevel_requirements 16 5 * [] 300 =\n\nrandom_prod_factor 0 [] 8 =\nrandom_prod_factor 1 [] 12 =\nrandom_prod_factor 5 [] 16 =\nrandom_prod_factor 7 [] 20 =\nrandom_prod_factor 10 [] 24 =\nrandom_prod_factor 11 [] 28 =\nrandom_prod_factor 12 [] 32 =\nrandom_prod_factor 13 [] 36 =\n\nsupply_requirement 8 =\n\naccept_cargo_types ctt:GOOD [] 1 =\naccept_cargo_types ctt:KAOL [] 1 =\naccept_cargo_types ctt:FOOD [] 1 =\nprod_cargo_types ctt:ENSP [] 19 =\nprod_cargo_types ctt:FMSP [] 7 =\nprod_cargo_types ctt:RFPR [] 19 =\n\n\n/*\n The following is a replication of what FIRS is doing for a primary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_primary.pynml\n*/\n\n/* Get the total amount of supplies delivered in last 27 production cycles. */\nfunc:produce_total_supplies_delivered def{\n    i 0 26 [..] loop{\n        total_delivered total_delivered num_supplies_delivered i [] + =\n    }\n}\n\n/* Calculate current production level, based on delivered supplies. */\nfunc:produce_calculate_current_production_level def{\n    func:produce_total_supplies_delivered ()\n\n    level level_requirements loop{\n        current_production_level\n            level_requirements level []\n            current_production_level\n            total_delivered supply_requirement / level >=\n        =\n    }\n}\n\n/* Set the number of supplied cycles remaining per cargo - used to display 'supplied' (or not) in the industry window. */\nfunc:update_supplied_cycles_remaining_per_cargo def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\n/* Shift the array of supplies_delivered values one place to the left, and zero the last entry. */\nfunc:produce_256_ticks_shift_supplies_delivered def{\n    i 0 25 [..] loop{\n        num_supplies_delivered i [] num_supplies_delivered i 1 + [] =\n    }\n    num_supplies_delivered 26 [] 0 =\n}\n\n/* On arrival of supplies, push the amount to perm storage, then clear from stockpile. */\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        num_supplies_delivered 26 [] num_supplies_delivered 26 [] industry:cargo_incoming_waiting cargo [] + =\n\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n    }\n\n    /*\n     Update the production level immediately, so that production level text immediately updates in industry window.\n     Production won't actually increase until next 256 tick production cycle.\n    */\n    func:produce_calculate_current_production_level ()\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n}\n\n/* On 256 ticks, if supplied, produce extra output cargo at appropriate multiplier. */\ncb:production_every_256_ticks def{\n    func:produce_calculate_current_production_level ()\n    func:update_supplied_cycles_remaining_per_cargo ()\n    func:produce_256_ticks_shift_supplies_delivered ()\n\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] prod_cargo_types cargo [] industry:production_level base_prod_factor current_production_level * * * 16 16 100 * * / =\n    }\n}\n\ncb:production_initial def{\n    /* Highest value in random_prod_factor is 13. */\n    random_range industry:random_bits 14 % =\n\n    level random_prod_factor loop{\n        base_prod_factor\n            random_prod_factor level []\n            base_prod_factor\n            random_range level >=\n        =\n    }\n\n    /* Initial production level. Can be changed with cheats. */\n    result:value 16 =\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
            type: "primary",
        },
        {
            id: 16,
            available: true,
            name: "Stockyard",
            colour: 177,
            fundCostMultiplier: 115,
            probabilityMapGen: 5,
            probabilityInGame: 3,
            prospectChance: 0,
            layout: [
                [
                    [-1, -1, -1, -1, 0],
                    [-1, 7, -1, 4, 1],
                    [10, 8, -1, 5, 2],
                    [-1, 9, -1, 6, 3],
                ],
            ],
            cargoAcceptance: ["LVST"],
            cargoProduction: ["FOOD"],
            placement: "anywhere",
            placementCustom: [],
            tiles: [
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 44,
                                left: -31,
                                top: -13,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAACD0lEQVR4nO2ZoXajQBSGv+6JQCBGjKhAICJXrIhYwSMgRkasqOgD7KNUIiorEBGIyAhERUUEMgKBiIhAjIjAZQUhzcmm2TW5wznwGUD9M/+5c+dnBhyRpukhTdODK/2OibRgN+lya6WlryJmQN8m3iFmQJIkFEVBkiQApGkqJX2TBykhY8zBWstkkwPw/NIaMJ/PxcZwDbEK0Fq3ghMFwOvvuZT0TcQMUEq1L/5Rcn/8xkoN4SriBkyUxgOglpK+yTdpQQ9ogEBpaemriBsAECjVGxPEDLDWArCPYl4q/7gM3CNmwKkJAr6vqKNfvNlASv5LnCwB5SugNcI1ohXQVcHpOSQD4HPiXSg6XxauEMsBi8UCay1hGAIlgZqdjHCJeBDSm3fWnvvm1yH+L8AOjNew7YkRok1Qa82PcAqAVppZs5WS/xLxXaA+BiIYWBLs2EcxbzYg6MEOAI6CkO8rNt/jYSVBe1b6g02Cl++DS4IdfUqC4rtAWZbU9QfAsJIgtCZMp1NWq5Wk7E1EDaiqCoBZsyXYNWSN+2MR8R4QhiEqfmIfxRivkZb/i7sbYIw5GGNOl6BVVZEtCxoU+yi+t/w/uasB5xM/x/cVj4+abFncU/6/uHsFZFn2AO15wHq9xn9f9ioIid4Nwmci/Nns+PAi8vzV6d2guPilEXmeOzXAGZfNcWRkZGRkZGRkRJg/YfCX9k4ZvzUAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 74,
                                left: -31,
                                top: -43,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 88,
                                left: -31,
                                top: -57,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABYCAYAAABF7PEoAAAIqUlEQVR4nO2boXPbShfFf/EICAgsEAgwMBB4oMDAoCAgICDAwOADBgEBAQEfCCgofH9AQGCAQUFBgYGBQUGAgYFBgUGBgYCBQIDAggCDzuQB+UqrleQkfa+WmubMZCzJVqx79txz765kFovF42KxeOQPhfPx40cAhIT3798f1HpFe4YjG08RsVgsHl8jOU4QBACEYQgUiRDczZf7vbI9IVWAUgoArTWQEXHSH+79ovaJVhzHuQNBEKRkmFivvu3pkvYLx/d9AORVtn3fJ47jVxu4IFVA2aj/CWj5vl8a/J9CiAOZ8UF14EopBoPBI8BkMnk15dCxDwgZcRynPmD6QxAEr4qIllKqdNSlP5AU0Vrj+35OLR8+fHgUMn5XtCAZdZMEpVTaGMl2HMfpn43fmYiWuWOqwZS97IsqgiDA933CMExfAQaDwePFxcVvRUTLlLRsm4oQ6Qsk4DIlQOIdw573OOx5vwURDmTOL7kO+coAFOQvBqmUSo+70R0AXndIHMcM2jTeLA8uLi4ezcB3IY7jNA0gm0BJ4O3jy9xxE77vMxqNGkdEy64Apg/YMpdU0FoThiFudIcb3eF1h3jdYSFw20eaaJY7FWCOuNkfmCMuRmhCCAzDEHu6DVmJvb6+rl0RrbLgJa+DIMgF/rD8ko64yD0IgtQL5HNa6/S8MAzTbbOSaK1pQsUodIJmGdRaZ4GT5biNIAhyI2x2j0KiSaaopqqS7BOOBGnLWKTukri6oEwtkO8Yy6pK1fl1w4G8WaXmRjbiEpSQZVYCgR20dJA2sfb31Y20D7ADlzwWdZh5LDCJgeqqYR+vqjJ1wDFzXKRuBmZXARNly2lAwQ+qUKakfaPlRne0jy/xusPchMjsCO28FtiLKWbgclzmDZCRYVaGutHyusPSBRH71fxMGIaV3Z75uuv9pqw4OVX9f9kxc1QF0uxUuX3VSDdGAWVrAea2vWBip4YY5HNH1Jw8NQGtOI4Jw7A0AOn57Wmy7As5VS5fRiA0qwy25B5AmdTLRsoMXvbNrlFIk/eqpN4UFbTsA3aAZaNlBm+Ottn+yrGqPqEpKigQIE2RuRJkS9rEUwZqzwJN0pqggtbJyQknJyfpxUjzU1bfTUkPzy45PT3j9PSs9B/vUtCulnrfODg5TJatLm6+APDtW3YvcFepuhp2mS8WAPT6f7MOIwC+fv2cmw88Ve7qXiVylKMAuL29Zblccnt7C8DdXbLoYbu+bC+iQ77cJUEfvf9KvFpsP3O4swcoK6l1wlFesiTwQym63S6jq2Q+YCpCAjcveDH/CiR5bZJxfZNXg4ky86wbTlv5RDpbD3C2irCJEEWYkBxefV+k+26cqeHy/3kybKNsAgkOQFv5PMjFbBXBQ7JfpoiytlcqRFVqgFvwhEakgGzIaDjKxwVgW6IqiLAVIQqaThLZ26nR6/XS72lC4ILCmqALbIx9ZSmiyizlxok5MRKfeM4qUV0oELAB2ls1uECkY9rKRxRRZZZChD26Zq03O8KmkOBIgHJxP4763EyXnKlkPwkefEmNnzBLE00JXOBIgGZuep4iPjrm63TGVeeBWGtibT1L9IRZ7iKikQowoTwFJESs3iVEnKkkPTzDLGMdFzziKSKaFDxsJ0ORjnMTnfTVICI+OmOs2+mJsY7xlZ+Spzwn+XMUylHc3t5yeXmJzDUETQoejBSALA2Si/xRIMJGWyki+0aJ1VmOPyT3Fv53na8aTUFaBcbjMVprOp0OENJWvQIRnmfMC/rnObOExDA3bNXhZ8oAGkuEE4m5/fUXAP5qzjc3k3qOCE+VmuVsh1lmCkuO20SMRqNfGN7TyFJAcvMeBu6GqIQIu3cvM8tjEm8QszRN1jf6CSGibjiQuLsE1+0ExFrjK5+ejmAV5YhQKjG03HKYQYR7fMV4OuN8+3mZbMlr+n+8Qg9WCxxIcrYjy1TfdfqmjFybvCJeYpYStBl8vuzWuyzWMi8M4OGoz2fdTtthmRe0lU9vEzEejxmNRtsnxZKZnr12aJplWib756j++a+M5afQAntEJKcTIlzAVyolQvoFfzVnvV4Thd+KRHhZTxEZpjiZLlH9cx6O+tjE14WWvy1dufsCVgN0s/ZSRch9vbbyGbibUiJMszTJ9bbETKbLXxvVC+DIjK9jrf1B0eVn6xkDIWKjnmWWPzDSoKKhqhMFD4BiTpsXLimwXIcFGZuKMM83z4WE0KYg9QAJ7ClzE6j+OTO6WWpIxbDMEjIfMD3CLot1ofCwdBAEO83NhJjljO52cqS2CyoZoeZ6g1LN+3lObjIk0h24G7hfMdm46XvSCVaZpXt8xc10xlUHlusQ/91WEZvtSE8/JSf1zwkCiFb1jz6ULIl1Oh3W9AEYzKeFllip3ovMkntycvfm00ZIX1AwwfV6zWS6ZIPi4aiP6p9zapmb4DlmGek4F3CTggdohYfvmLmHuYOepzg89JlMl3Q6HX5siRi4mxebpYm2sYDSFKS/GRqPx8lNj+mnvKTXOiXi4ShJjZeYpQTcObvis27vmBPUg9ZkMjmYTCYH6cgevgNCHsY3pURAZpa9TUT3flXaCYpPmAF7nqJzdsWM7n6iewZSE5Rfdcjz/AsNEOLN5yjvCMhLu9PpsO6f8wD0pp9KOsFecULUoAZIUHhCxFbEwj0EQvz551wAplnKTK/MLM0KYHtEEwyxQIDAJmK2JcJElVn2NlFulTldEapoqOpEJQECmwgxS28+rTRLmfdLGQRKO8FGmOBzP1iliOeYZaRj9PRT8qc1QUBj5gIvXph7qVmCNdLbTtBLe4Kal8R+9sTnmqU90mVrhHXiXy/N2oqYaUjMsgsUAzZvnjQB//kjakKE9ADB/fed+T5axbU+JvfLvryMiDK8WgIENhHHm/ucGl49AYIyIgD+Xqz+DAIENhGz2az2n8/WgsFg0LgfUr/hDW94wxve8IY3/FH4B6kG/T5Pfb9yAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 85,
                                left: -31,
                                top: -54,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 104,
                                left: -31,
                                top: -73,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAABoCAYAAABBlvaFAAAFPElEQVR4nO2arVfjShiHn94TgYh4xYiKCERFRUXFCkTFihVXIK5YsQKxAoFAIO4fgEBesQJRgbhiRQQCgUBUICoQiApERAQiAjEiogLRc1iRpvRraNK0hHDmOYfTln5k5jfv/N53ZlJjTY5b3kvT81BKIeLy97lfW/e3ymStRn/35KU3BBGZ/B3uwsH/t5UTwVn1AdNIH3guTa+O1HdQbh1XKeB22+3dOG+O2LKRPvvaIgof6Q8GTAvjNZsAtI5PKxUFKyNgfqQB+oMBnXYbERdXKUQpoiAYR0G1MArgH+y/QNJZAGfkAiBKcXR0yO31DVprVDxkqPU7NHU7GAW4vO1TFzfzSIfhI8cVzAQrp4DWeulI9x7ucXCpizvxgiryl+mNyyiuRfHTwv/D8JFfF78XOu81drfZzq2xMgJMIz39WsTdekO3hTECABzcTzPSJt4UAD7PSJtYKcBnJ5cAVSx0VpFLAFPBU2VhCk2BIIoAszBVoJAATc9j5Aw31ZZSyCSA1HdmXtc/UTZYKwKe4mqP+jSZBIifnpPHT9TxlFwRsKwQSpfJVSWTAKaVXpoFqkzhLFB1MgtQ9XRnIpMAekWhU2VztIuhshtQNoUFGDnDSu8TFBKgqhuh02QWYFnBs8ocq4D1gLIbUDaFBXBG7tp1gO/7L0WvX5SV5wJZyJsF0o6HUbyJyxcikwBBFNFRqvDe33zHH4P7Qr+3CTIJkC56hlqvJYKp4x8hixSaAkEUsVffAd6eApf/HgHw/b8uAPGTAMmNF2WzEQ8wkY588OuUZxaFuL+vyBQwYdoPMJlcy0vuMJkXokxyCRDHwwUPmK4QjSYXv851T9SCEGWSSwBTuos7/xDz2vH7/g0wu1bwJHnebDQA6N3fIe5WZ2AmCrVA/TwBZjuednp+oRTFGk8UvZ06t/1Hzr7sAXARXBdpQmFy1QEp6dxd1vH51Ka1Jv3m8/jRdQV/OOIhKH8nKVcdMB/q8VNIGIbG72mtaTQaxEEfTxTR2AvEFUDjurJ+yzdErrVAt9vl6OiIhic0PCGO48l7S0deqcln0imgtUZEkhsuPoAAmT0g2fkR2u02Fyc/ADj85QPQ6/UmAiilZsTQWkOzA4D3FKCCPkoCtOpUrxBK57njCMCCEL7vz3xeRGaEGdBEtRQ7D33oX9GU8neUcqZBSZ6k6WuYvDYJYfKHqJVEBA/9PJffCmsJ4IgiOTAfh/oKIWD5wieoN4EgTxM2TmYBpis+PTY0ZRCi2+0yGAzodpN0OT81PsIqMCWzAD9+X9fOzvZeIKnqnufeTyq9pGMjg1n6vj/JDvAxhHhTgMsorhHF8JCcAqcpbdjZ5+p6wMnuEB3HkzJ3IkxGs2yMy+Iyye0BqQiuKwStr9xc33IgiUDPwA75zbJM1l4LpEWM6wq6kwiRRkQes7y6ulq3CRsh5x0iMunc5HFKiKC1z+/4dY9Aj0tfJQpPFOI6yZ8jiCMTkyyT3BGQToPEyEZLhUjJYpZls9a5QBiGaH0HvFaH00JMm+Vl7OGN35s2SyXqQ5wt5oqA4+PjGsDpXvMlijXpHUKefJmJiNxmWSJrmeDpXZAIIYFRiJQsZlkmhXaETEK029+ApG5YbpaJED+LXHxDbORw9PQuqF0EutYeL3fhNbyXeQTwITZDYMPnAmlEnEOyOxyGQLjgETBrlmWylW3ZPGZZNlvdl85jlmXxLhvzq8yyTN71ZGJeCL6VL0CpnJ+fl36HiMVisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrF8av4ANU9WSqvOBQ4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 91,
                                left: -31,
                                top: -60,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 98,
                                left: -31,
                                top: -67,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 54,
                                left: -31,
                                top: -23,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAYAAAB3Ep8CAAAEjUlEQVR4nOVaoZLjOBTs3TIwEBAQCAg0ODAfE7BgPuDAgYP3GQcXHJgPGLDwwIGAgIUDDiw4YBgQYCBgYOCqLPC28izLkWZma6TJddVWbEWe9Wv16/ds5QNeicfHx/Nrrr+/v//w2nt4DaqXXsjA26MFAOz/fvw5d/TGeDYBfuBPX/+BMQZN00BrDWsttNYAAGstuq5D0zSwdprP87ZtYYzB4XD4KYG8FMkE+IHbU+uCAKbA/GABwBjjiOBca607zo0oAWuBN02DpmmmMWvdsQSVQHRd58ZJSm5ECfjyx28AgE9//gUAeDphFixXm9KnKqgIf6WNMWjb1h3nRtSBf7/bngHgZHsAgoinJzdH5j0ARwJXGkDwuG1bHA6HrFUgiYBhHFBXNYAlEfv93q28VIb0h2t4eHgouwwO4zA712q6xE8NgoHTDH1jlJVCmmUuJFUBrr4kY6MVgCURbdu6dJDlkJCeQS/Iiaj8fv3FnG0/YqPVQg11Vbsx248AlqkBYLb68hx4BykAYBY8g6YqeL6WGvv9fvXv+mUyB57dCZKIkBoAQKuJnBARfrUoAVEC5IqfbA+tKhcsMY1fCElVRAkekFwFhnEI+gBwqQyENM1rRIS6x7fGi54GpR9I0AiZBkRd1djo6XitfOZC1IF32+q81RsA63nvE8KUkWbpz2ND9eVos1aBjymThnFwN+yPAwgGuTZ+MctqkTo5ECXAKI26qt3N+rKXAXPFufr8J6+TYyUgSQGErP0SMvBrc+uqhu3HxdyciBJAY2Pepqwg5/gPUMClhS5FBVECZJ6ulTt/NX1z5HUkopTggWeYYOimQ13h0Z4ALEkBLqtPlJAGyR7Q9TZ43vXWHUtCfMJ8UwQQrCxvjSgBMnAZNGGUhlHaBWaUnl3v9wIAnAn6isiBpDIoP2mKMlBfHQTnhhqiUnwgSQEywBHpspWmOYyDI0SO5Ua0FfMlTXS9hVHafaZgrZnKiSQTpAJkOrBDlN+vpQJRUuDEi6oA0yIk4RAJskqE2uScSCagwuTYUgUhZaSgJCVEPYBBTuanZ9+FAo6NhcpiTkQVUEGhgpoFUUEtGqFUHwDKcH8iSgDLHkuY7Uc3JlNApsQa/JJaghKSPGBEv6j/RmlUUNjqzaIzXAOJKglJBNAAJRh0qJ/3G56SkfxOyigdbYOfu7oleEGUgK3e4GhP6H4sNIP0S6AEO75rc+S2Wk4k7QtIg+NnBQWtKth+XH25eU0RJTwKAxEP2O12Z2Auc5ZEBh8C3d3242wO3wmW5BGrBDB4YN4FjuhnAcjVly0vlcHveU0J7wAkoinQbu4AALr96sYmEq4Hwj1EKfVSZC8R3xn6oQTu6Zv239n3a/kvX4xKxWy0mhGRe2co+T/3iWhO3wDI/cBqduy/AfLVQLwbAog1IkKQpc4ngIS9OwKIGBGhFef2Og3yXRNApCqCvzMCLh3gTRBAxDzCNz/iZgggQlUjVBKBiZTP3463RQDhE3HXXX4PJH3g4b/uNgkgrvURN60AHyEi/lcEED4RuX8tng273e4sH7hy4TsP/mjEbSNg0gAAAABJRU5ErkJggg==",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 76,
                                left: -31,
                                top: -45,
                                base64Data:
                                    "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",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 32,
                                left: -31,
                                top: -1,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAA+0lEQVR4nO3XIW7DMBTG8b+ngsIAg4KAQB9goKBgwHDABygs2DFyhB5gsKAwxygsDAwoKAgoKAjLQJpqVQc24ETKvh+KLMXPn6Un+RlG5ta79no+8/HWAOC9p6oqym0OwHHhACiKwsSoP4ux6V+sXQUOqt22W/CeLMvY34JDvPAA0Tb+rY2zLUCaWADyQznomV6GLPaTNLGkiSU/lOa4cIQQ2iHrj94CfY+H4AYN3hv9Anox+1xERERE5JnJl90b/HSpAVit3pk33XcztxT15emnKT1b70H6sdS/LgHYXx/HhCmF/u6e8rOsDUDtZg9T2VSDi4iIiIiI/Gtf53o+qcnFCW4AAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
                {
                    sprites: [
                        {
                            sprite: {
                                width: 64,
                                height: 31,
                                left: -31,
                                top: 0,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAADFUlEQVR4nM1ZzdWjMAyc7NsCfHAJFJISKMIlUEZKSBEp5CuBEjjQAXv4nshkkI1JgOxcEgy29S9ZvuBLaNt2ijFiGAbEGHG/3y/foOP0TVNKk/035vn/2YI4bbOU0jQMAwDANA8ATdOg7/vF+OPxOIW2wzdhxoFfhgGg73uwC9hvCOFFIEdbxGGLt207sXYVHvPAq1vw81GC2H1R83HWuqdZ1Tibv37Pc/Z2jd0Wa9t2Dm6mQWXCLCKndR2ztViYhr0E8fEils5YkwyP+KZp8PPzg6ZpFoyO4/gy7s0dxxHAr4Bvt9tHPLw9WTXuEZwThmqb36sFmEC8dRjvWsTfrRPMx0MIGMdx/jViQwjzf2WQYe9tvseUravvNEgCT4VsFcSf2g9TSlPXdXNKM9824mOMaJpmJo7TnQmFwYIyqCWFEF7msiUMw/BiUYbr9Tqxda5hVVqax0vQSF4yc33X9/3MoH6j35asRrFmEdmXlsdZwxroSpE6Z/45AXFlyMyVagleh93PQ04Qi8Gu6ybP93gDJtrbmAOX1gM8FmNcaJ6Z4jn2nrOAR5/95hSgBdX84BUw7McKZXxNA17gsnGPWYPFkFymKdFkPHABZjBBXJhxLVS8nKyEeAzkLIeJMuZ4Dd5PNe3FhBJdtQpZWIDBM10bX1u8Fl6AywVOLxYoHZ4CvP2AZ0xYxACL+hqMvIVybqD1AftkLlja9xwTPKGU6FmzCu9Qlc0CKaWJmfEOJsr4GmpSoiegXED0aAGWmQTYkAUUa65RY25KvK5Tml9zSCqV4mvH6OqykaurXG7WFFRTqOTMl9fzvi+ts+WQtPkAoRZhyPk2H2q0rDV/96L9FnjprRZvnwZzBROnUsNWhoBnMZVrlWmwfbdjtEs/AIBboeWan/ZOvwWeZ4JSbGF82irbrSOk7W6g7oywdrDxXOcTjSsO6Qlq2gSWGmbGta6wZ01nRzRHD+sKW0FV0y3inkEugxx1T3D4vQBfgQHlokn7fXuaeg6n3Qxpl0Y7x3sHt1qcfjfodZFrStaj8JUbWeD/uR3+BzEzUNtKZdtVAAAAAElFTkSuQmCC",
                            },
                            drawType: "recolour",
                            alwaysDraw: true,
                        },
                        {
                            sprite: {
                                width: 64,
                                height: 49,
                                left: -31,
                                top: -18,
                                base64Data:
                                    "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6+6AAAD/klEQVR4nN2aIXejWhSFv3mrAhFxxRUREQgEoqIiIuLJiBEjIpCV/QGVFRWVkf0BFRUVIyoqRoyIGBEREYEYEYGIiKi4AhGB6Fp9ghwCBCYNeZ1buk2yCKzL3mefzYEAljGbzV5ns9mrrfVPbC0suLq6AlIhAAaDwZe/ub51Afr9PlEUWRPCugBxHAP2hLAugDEm++55HpCK8reEsC6A1hqAKIqArQjy+d5CWBcg74DyNs/z6Pf7wPsJYV0AcUBeCK01SiniOM4+30sI6wJAseJRFKG1JooiPM8riKCUqmyNyWTC9fV1IyGsC2CMyVwA294X0sYYlFIopbLtAOPxGIDJNARH0xTWBRDyecLSAnni4oAgCIAN8cTw8uPhqPWtCyAE5btUXOYD+f3i4gLYJa5zxzeBdQGksvJdWgD4Y8WFeKfn4yS7V5K3wroAqlRBqfy+igvxBEjanAGwdcFbKq61LhBeuR7L5bLx2h9CgIOIb+y+PuuzBpZhuOOiQ2BdgLf0OACJwUkMZvAVgMfHkOHQLVwpmsC6APuIO4khcXRG/O7+F8HorDAXtFqAl8dbYNfq69UCrSuId7b7wQtKqcIgdSj+OeLc/xdopQpVTxydXta+nWMGX7m7/5WG5Ia4VNt1e+nxm6GpKewLoDWdno/WKfGV6zFxurXEy9VufQsIxOqS6qqTbi8Sf9lUfkkch9nvrb4M1qW6FLWOeBAEzG8umf+ebq8UDWC9BTKrl1JdrC69HschcRwTBAHu7ynzm0uAo8jDBxCgmOpk5PcRl/3Xq8VR61tvgWKqL3NPgyZAvdXNhnjYO213CEqPC/L3BHU97iSG++Q0zYxc+zSBdQGqUr1s8wSyW97xwiEYDVDrONu/1XPAn3o8/6B0vHCI/EFtZjSFdQGqUj1v+fHCYeV6n3cSnN9cZoRlGoSUePzvt88/CWqd3uM7G8tLqqtOemqffxI0hk7P5z46YTgcZKl+yCTY6gy4M720xxtMglrro8jDBxCgySSYJz5xuketb70FDpkEgR3irt8nAnj40Wh96wK8ZRKU/YwxBeIA8+nPo9rAugD7JkF5BD7hBHrdjPjt9xUAo7Pj5gDrAuxL9enmFMvEHaVIcv8nNIV1AcrEZfwtW12Ia99n/fxMp9v9HAJIqgvC3ilQXfEqHHsvYF2AqlSH6oqvn58rj2+1A+pS3VG7j7o63d1rfutboC7VqyouTgA495fgO+2/F8hb3SwW24ruuh0Q4rB8uE03DIe4rtt4fesCSI8L6ixdJt5TaXbIu0Kj0ej16enp4BelrAtQxjbV0+mwjnjYLWZEE/LwAQWQVD/35+9KXGBdgHLQSQvkiYddn/xbQMeSzuM/75Vykp0U1asAAAAASUVORK5CYII=",
                            },
                            drawType: "recolour",
                            alwaysDraw: false,
                        },
                    ],
                },
            ],
            callbacks:
                "const type{\n    accept_cargo_types cargodict\n    prod_cargo_types cargodict\n}\n\nlocal type{\n    current_production_ratio integer\n    total_cargo_produced_this_cycle integer\n    total_cargo_to_distribute_this_cycle integer\n\n    cargo iterator\n}\n\nindustry:storage type{\n    supplied_cycles_remaining_cargo cargodict\n\n    total_produced_cargo_available integer\n}\n\naccept_cargo_types ctt:LVST [] 6 =\nprod_cargo_types ctt:FOOD [] 8 =\n\n\n/*\n The following is a replication of what FIRS is doing for a secondary industry.\n See: https://github.com/andythenorth/firs/blob/4.4.0/src/templates/produce_secondary.pynml\n*/\n\ncb:production_cargo_arrival def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo []\n            28\n            supplied_cycles_remaining_cargo cargo []\n        industry:cargo_incoming_waiting cargo [] 0 >\n        =\n\n        current_production_ratio\n            current_production_ratio\n                accept_cargo_types cargo []\n                0\n            supplied_cycles_remaining_cargo cargo [] 0 >\n            +\n        =\n\n        total_cargo_produced_this_cycle\n            total_cargo_produced_this_cycle\n            industry:cargo_incoming_waiting cargo [] current_production_ratio * 8 /\n            +\n        =\n    }\n\n    /*\n     When low cargo amounts are delivered, it's possible that final output\n     cargo amounts < 1, which means no cargo is distributed. Prevent that by\n     stockpiling produced cargo on each production cycle until there is enough\n     to distribute. The case is triggered by low amounts being moved to the\n     produce cycle as a vehicle gradually unloads, and was noticeable with\n     Road Hog trams.\n    */\n    total_produced_cargo_available total_produced_cargo_available total_cargo_produced_this_cycle + =\n\n    /*\n     Then check min. distributed by dividing over 8, to get the amount divided\n     by max possible output cargos. 8 is the pathological case, this could be\n     made more accurate by checking the lowest output ratio in current economy.\n     For accuracy, this could also store remainders using mod(8) or so, but eh, TMWFTLB?\n    */\n    total_cargo_to_distribute_this_cycle\n        total_produced_cargo_available\n        0\n        total_produced_cargo_available 8 >=\n    =\n    total_produced_cargo_available total_produced_cargo_available total_cargo_to_distribute_this_cycle - =\n\n    cargo accept_cargo_types loop{\n        result:inputs cargo [] industry:cargo_incoming_waiting cargo [] =\n    }\n    cargo prod_cargo_types loop{\n        result:outputs cargo [] total_cargo_to_distribute_this_cycle prod_cargo_types cargo [] * 8 / =\n    }\n}\n\ncb:production_every_256_ticks def{\n    cargo accept_cargo_types loop{\n        supplied_cycles_remaining_cargo cargo [] supplied_cycles_remaining_cargo cargo [] 1 - 0 max =\n    }\n}\n\ncb:production_change_monthly def{\n    result:value 0 =\n}\n\ncb:production_change_random def{\n    result:value 0 =\n}\n",
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
            label: "BEER",
            abbreviation: "AL",
            name: "Alcohol",
            unitName: "Litres",
            weight: 17,
            colour: 183,
            price: 6826,
            penaltyLowerBound: 9,
            penaltyLength: 36,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAuElEQVR4nI2QPQrCQBCFP0MCKSy2SGG5RSB7gJQWlhYWKTyAR/AgHsBjpEzhEXKADVjsAVZIkUKIsBZJ1h8U8mCYN8zjzQ/gHDgni9Btjks31d8RMBOzheFE8lxg7d03tG48VyobhLKIsDYmSWJkEWHKHqvUm5/7P/o6xseOWxQnsSdvU85yB8ABB8B6zAFAIVMunQYgEcK7rKrK88Xwwwgphx3rusWUvT9Iqezl+AtaNxhjeHQ3AJ49YUEWHX5GzwAAAABJRU5ErkJggg==",
            },
            longName: "alcohol",
            classes: 64,
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
            label: "RFPR",
            abbreviation: "CH",
            name: "Chemicals",
            unitName: "Litres",
            weight: 19,
            colour: 61,
            price: 4728,
            penaltyLowerBound: 20,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAl0lEQVR4nGNkYPj/n4EIwIQucObDX4YzH/4SVvjhAxEm7nnwF64Y3VRGZDee+fCXwWAGC4ZpLBX/ESbCTGNgYGAQ6RBAoTGsDokwYGBgYGB4U/GBQaRDgOFNxQdUhXse/GVIyTBgkJCQgZsEU4zVRBiAmYRsIgPEM///73nw57+Ch85/iwSP/z4lEf/3PPjzHybHwPD/PwDovESUR1b+DgAAAABJRU5ErkJggg==",
            },
            longName: "chemicals",
            classes: 288,
        },
        {
            id: 4,
            available: true,
            label: "COAL",
            abbreviation: "CL",
            name: "Coal",
            unitName: "Tonnes",
            weight: 16,
            colour: 166,
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
            id: 5,
            available: true,
            label: "GOOD",
            abbreviation: "GD",
            name: "Goods",
            unitName: "Crates",
            weight: 8,
            colour: 45,
            price: 6702,
            penaltyLowerBound: 10,
            penaltyLength: 56,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAz0lEQVR4nG3Pr07DYBSG8d/IRAWiogISxGTFRAUC/C6BC8CjcFzC8FwGchK5ZBUTExWfQFRUTFRUTFSQDNF8HSN71MnJ854/E45HWK/eFXkO6roxX7z4y2S9Wh6jsAsBLgamoSqFqpTPH86kGIpMoW33QlWCZBskWSpF33bnIhR9KslSrk9CkqWqj1d925mG3RZ8/QyBxTwfJWi+6+GZ+PXy6VHbdbJ0EIq7Gxh7V/7Rdt3Ferwx1MOKODHSHHrNYX9aHXm+vwX5bAbePjfgF0SGUZFCWfPzAAAAAElFTkSuQmCC",
            },
            longName: "goods",
            classes: 4,
        },
        {
            id: 6,
            available: true,
            label: "ENSP",
            abbreviation: "ES",
            name: "Engineering Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 157,
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
            id: 7,
            available: true,
            label: "FMSP",
            abbreviation: "FS",
            name: "Farm Supplies",
            unitName: "Crates",
            weight: 10,
            colour: 51,
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
            id: 8,
            available: true,
            label: "FISH",
            abbreviation: "FI",
            name: "Fish",
            unitName: "Tonnes",
            weight: 16,
            colour: 141,
            price: 5510,
            penaltyLowerBound: 0,
            penaltyLength: 18,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAt0lEQVR4nGNgYPj/HxnPWbDmP7oYA8P//4w5JS3/p/RUM8xZsJZhz4EjDAwMDAwiIiIMEgIMDDU11QwwwGSgo8EQkVDIcOHKDQYXBxsGHRURBgMdDYYDJ24wRCQUIhS+eHKDYcWCfgYDHQ2GPQeOMLz4wMBw4coNBgcLDQYRERG4QkaIGwgDJlwScxasReHDTcwpaWXA5ym4QpgCERGIZ148ucEgIaPBsGLNBgYRERGE1YQ8RbRnAP4JXiPdSUIBAAAAAElFTkSuQmCC",
            },
            longName: "fish",
            classes: 132,
        },
        {
            id: 9,
            available: true,
            label: "FRUT",
            abbreviation: "FT",
            name: "Fruit",
            unitName: "Tonnes",
            weight: 16,
            colour: 189,
            price: 5098,
            penaltyLowerBound: 0,
            penaltyLength: 26,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABHElEQVR4nFWPIUzDUBRFz5YJBBJR8UkmKxAlqRjJSCYqJ0aCqJiABIFATExUTiCKQ4CbQCAmJiYmKiommjCBmKioQHxRUfFFxcTETz6iaQcneea9e+/LBYwBY5J1aMZz1/R9x6Txm6n39bST9Qs90WKhI2SsGUwEofyg71+Sxu/UdLJ0y8PTCLvTo/SWbF5zoucZOyujPOwbYRtAqYIs3TJQgnDsk32uiIcBCx3xPbuvEmuHUgXeqc16GOABajXAH21wXJfR4zWtqS8MwJkQICuTd2GT3GkWM8Xctcl/JK2qFUz9cwrPQsaaoT4BwBFW9a0sj0KAaHLDLi+aAo6wUGV5LFOzy4vm8Jd8f/ifWBPeXpFJid3tAhAsv/gFSSd66Fyot6UAAAAASUVORK5CYII=",
            },
            longName: "fruit",
            classes: 160,
        },
        {
            id: 10,
            available: true,
            label: "IORE",
            abbreviation: "OR",
            name: "Iron Ore",
            unitName: "Tonnes",
            weight: 16,
            colour: 55,
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
            id: 11,
            available: true,
            label: "KAOL",
            abbreviation: "KA",
            name: "Kaolin",
            unitName: "Tonnes",
            weight: 16,
            colour: 43,
            price: 4112,
            penaltyLowerBound: 30,
            penaltyLength: 255,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfElEQVR4nKWQQQrDQAhFX9IcwIX3P88U5iAGXHgAg13NNLMpgQqC8p//gxtU8aD2J9D/YOaF2fkbvAP3eYLDRVWnqKpkXl/Q7KT3TkQA4O7LAcDe2htVRUQWwd1x95kGVLXWKjPLzCozZ48dqrbxcLOTiEBEUFWO47UkfABX5Fb3dDIyIAAAAABJRU5ErkJggg==",
            },
            longName: "kaolin",
            classes: 576,
        },
        {
            id: 13,
            available: true,
            label: "LVST",
            abbreviation: "LV",
            name: "Livestock",
            unitName: "Items",
            weight: 3,
            colour: 148,
            price: 5016,
            penaltyLowerBound: 0,
            penaltyLength: 15,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA00lEQVR4nHWQMWrDUAyGP5cOHVXw6EGBjj1ED9Gh0DVHeAEPHTp68JgxYws5hAdn9xEMecMbA9WYwfAyPKIhJQKhX+KX9EtAzqqaQwgZ8l2vVDVzYzEeUV0R49FrD1fQdZ3HEDaYGaorJz6aGSLCNE0AtG2LmQHQ1zXvsRArEclmf95tZsz9FoB6/ekTqyK2mMgzc79FtClNMTnZNQK8fbyyP4+eizacdr//JwIswwGLif15JKWZ8LIux9y+5rpuGRrsKSHa8DV8w70HL8Po+LT7yReelnKMPqc6IwAAAABJRU5ErkJggg==",
            },
            longName: "livestock",
            classes: 32,
        },
        {
            id: 14,
            available: true,
            label: "MILK",
            abbreviation: "MK",
            name: "Milk",
            unitName: "Litres",
            weight: 17,
            colour: 5,
            price: 5386,
            penaltyLowerBound: 0,
            penaltyLength: 16,
            sprite: {
                width: 10,
                height: 10,
                top: 0,
                left: 0,
                base64Data:
                    "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAi0lEQVR4nGNgYPj/HxcO6Fnwv2TNASgfj8IdO3b8//PlzX8Ghv//mRigIKBnIUPJmoMwLsOOHTsZRCRUGBgYGBhu3LjJAFeYoSPB0OGhw4AO7jx5w6CiogJRiK4bG2BC5sB0E1SID+BU6OHhzsDAwMDw4cMHBhYWZgYWfKaYGCgzMDAoI0xE140NAADY9kmX5Tu7dAAAAABJRU5ErkJggg==",
            },
            longName: "milk",
            classes: 192,
        },
        {
            id: 15,
            available: true,
            label: "SAND",
            abbreviation: "SA",
            name: "Sand",
            unitName: "Tonnes",
            weight: 16,
            colour: 160,
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
            id: 16,
            available: true,
            label: "SCMT",
            abbreviation: "SM",
            name: "Scrap Metal",
            unitName: "Tonnes",
            weight: 16,
            colour: 127,
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
            id: 17,
            available: true,
            label: "STEL",
            abbreviation: "SL",
            name: "Steel",
            unitName: "Tonnes",
            weight: 16,
            colour: 143,
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
            longName: "steel",
            classes: 32,
        },
    ],
};
