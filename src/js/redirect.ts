// IINSERT DATA IN RESULT.HTML
const setResult = (type: any) => {
        sessionStorage.setItem('dig', type + 1);
        window.location.href = `result.html?id=${type + 1}`;
};

// GET THE RESULT AND LINK TO HIS PATERN//
export const redirect = (scoreLevel: string) => {
        switch (scoreLevel) {
                // パターン1
                case '12211':
                case '12221':
                case '12231':
                case '12311':
                case '12321':
                case '12331':
                case '13211':
                case '13221':
                case '13231':
                case '13311':
                case '13321':
                case '13331':
                case '22211':
                case '22221':
                case '22231':
                case '22311':
                case '22321':
                case '22331':
                case '22333':
                case '23211':
                case '23221':
                case '23231':
                case '23233':
                case '23311':
                case '23321':
                case '23323':
                case '23331':
                case '23332':
                case '23333':
                case '32211':
                case '32221':
                case '32231':
                case '32233':
                case '32311':
                case '32321':
                case '32323':
                case '32331':
                case '32332':
                case '32333':
                case '33211':
                case '33221':
                case '33223':
                case '33231':
                case '33232':
                case '33233':
                case '33311':
                case '33321':
                case '33322':
                case '33323':
                case '33331':
                case '33332':
                case '33333':
                        setResult(0);
                        break;
                // パターン2
                case '11111':
                case '22222':
                case '22223':
                case '22232':
                case '22233':
                case '22322':
                case '22323':
                case '22332':
                case '23222':
                case '23223':
                case '23232':
                case '23322':
                case '32222':
                case '32223':
                case '32232':
                case '32322':
                case '33222':
                        setResult(1);
                        break;
                // パターン3
                case '11121':
                case '11131':
                case '11221':
                case '11222':
                case '11223':
                case '11231':
                case '11232':
                case '11233':
                case '11321':
                case '11322':
                case '11323':
                case '11331':
                case '11332':
                case '11333':
                case '12121':
                case '12131':
                case '12222':
                case '12223':
                case '12232':
                case '12233':
                case '12322':
                case '12323':
                case '12332':
                case '12333':
                case '13121':
                case '13131':
                case '13222':
                case '13223':
                case '13232':
                case '13233':
                case '13322':
                case '13323':
                case '13332':
                case '13333':
                        setResult(2);
                        break;
                // パターン4
                case '21111':
                case '21222':
                case '21223':
                case '21232':
                case '21233':
                case '21322':
                case '21323':
                case '21332':
                case '21333':
                case '22111':
                case '23111':
                case '31111':
                case '31222':
                case '31223':
                case '31232':
                case '31233':
                case '31322':
                case '31323':
                case '31332':
                case '31333':
                case '32111':
                case '33111':
                        setResult(3);
                        break;
                // パターン5
                case '21121':
                case '21131':
                case '21221':
                case '21231':
                case '21331':
                case '22121':
                case '22131':
                case '23121':
                case '23131':
                case '31121':
                case '31131':
                case '31221':
                case '31231':
                case '31331':
                case '32121':
                case '32131':
                case '33121':
                case '33131':
                        setResult(4);
                        break;
                // パターン6
                case '12111':
                case '12112':
                case '12113':
                case '12122':
                case '12123':
                case '12132':
                case '12133':
                case '12212':
                case '12213':
                case '13111':
                case '13112':
                case '13113':
                case '13122':
                case '13123':
                case '13132':
                case '13133':
                case '13212':
                case '13213':
                case '13312':
                case '13313':
                case '22112':
                case '22113':
                case '22212':
                case '22213':
                case '22312':
                case '22313':
                case '23112':
                case '23113':
                case '23212':
                case '23213':
                case '23312':
                case '23313':
                case '32112':
                case '32113':
                case '32212':
                case '32213':
                case '32312':
                case '32313':
                case '33112':
                case '33113':
                case '33212':
                case '33213':
                case '33312':
                case '33313':
                        setResult(5);
                        break;
                // パターン7
                case '11112':
                case '11113':
                case '11122':
                case '11123':
                case '11132':
                case '11133':
                case '11212':
                case '11213':
                case '11312':
                case '11313':
                case '12312':
                case '12313':
                case '21112':
                case '21113':
                case '21212':
                case '21213':
                case '21312':
                case '21313':
                case '31112':
                case '31113':
                case '31212':
                case '31213':
                case '31312':
                case '31313':
                        setResult(6);
                        break;
                // パターン8
                case '11211':
                case '11311':
                case '21211':
                case '21311':
                case '21321':
                case '31211':
                case '31311':
                case '31321':
                        setResult(7);
                        break;
                // パターン9
                case '21122':
                case '21123':
                case '21132':
                case '21133':
                case '22122':
                case '22123':
                case '22132':
                case '22133':
                case '23122':
                case '23123':
                case '23132':
                case '23133':
                case '31122':
                case '31123':
                case '31132':
                case '31133':
                case '32122':
                case '32123':
                case '32132':
                case '32133':
                case '33122':
                case '33123':
                case '33132':
                case '33133':
                        setResult(8);
                        break;
                default:
                // code block
        }
};
