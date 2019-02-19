import React, { Component } from "react";
import './Poems.css';

class Poems extends Component {
    constructor(props){
        super();
        this.state={
            likes : 4
            }
            
        }


    changeLike=()=>{
        this.setState({
            likes : this.state.likes + 1
        });
    };


    render(){
        return (
            <div className="container-fluid poem">
                <h1>Some of my creations...</h1><br></br>
                <div className="row poemRow">
                    <div className='col-md-2'></div>
                    <div className="col-md-2 col-sm-12 poemCols">
                        <h4>पहली सी मोहब्बत</h4><hr className="line"></hr>
                        <p>मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग,<br></br>
                           अब तू मुझसे दूर जाने का बाहाना न मांग।<br></br>
                           तूने ले तो ली थी मेरी खुद्दारी मुझसे,<br></br>
                           अब तू मुझसे वक़्त-ऐ-गुफ़्तगू ना मांग।...<br></br>
                        </p>
                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#poemModal1">Read Full</button>
                    </div>
                    <div className="col-md-2 col-sm-12 poemCols">
                    <h4>शीत शिला पर सो रही हुँ</h4><hr className="line"></hr>
                        <p>कानों में यूँ गोल कर, <br></br>
                            कपास फंसाए बहरों सुनलो।<br></br>
                            आँखों पर ये काली पट्टी,<br></br>
                            बांधे बैठे अंधों सुनलो।...<br></br>
                            <br></br>
                        </p>
                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#poemModal2">Read Full</button>
                    </div>
                    <div className="col-md-2 col-sm-12 poemCols">
                    <h4>इश्क़ है तू</h4><hr className="line"></hr>
                        <p>एक शायर का अधूरा ग़ज़ल है तू,<br></br>
                            एक सवाल का आधा उत्तर है तू,<br></br>
                            जो पूरा ना हो सका किसी होनहार का हसीन सपना है तू,<br></br>
                            लेखक की छूटी कहानी है तू...<br></br>
                        </p>
                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#poemModal3">Read Full</button>
                    </div>
                    <div className="col-md-2 col-sm-12 poemCols">
                    <h4>आखिर क्यों?</h4><hr className="line"></hr>
                        <p>सर्दियो से पतझर आया,<br></br>
                            पर कुछ चीज़े समझ न आती।<br></br>
                            की क्यों देखते ही ये गुड मॉर्निंग,<br></br>
                            मेरे चेहरे पर मुस्कान आती।<br></br>
                            <br></br>
                        </p>
                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#poemModal4">Read Full</button>
                    </div>
                    <div className='col-md-2'></div>
                </div>

                {/* Modal 1*/}

                <div class="modal fade" id="poemModal1" tabindex="-1" role="dialog" aria-labelledby="peomModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="poemModalLabel">पहली सी मोहब्बत</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"><p>
                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग,<br></br>
                            अब तू मुझसे दूर जाने का बाहाना न मांग।<br></br>
                            तूने ले तो ली थी मेरी खुद्दारी मुझसे,<br></br>
                            अब तू मुझसे वक़्त-ऐ-गुफ़्तगू ना मांग।<br></br><br></br>

                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग।<br></br><br></br>

                            शिकायतें बहुत है पर, तुझे अब इंतला क्या करू,<br></br>
                            तू सब सही करने की जोर आज़माइश न मांग।<br></br>
                            हर शब में याद तो तू आएगा खुदगर्ज़ मुझे<br></br>
                            मगर अब ख्वाब में वस्ल की जहमत ना मांग।<br></br><br></br>

                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग।<br></br><br></br>

                            हैसीयत न थी ये उल्फत इज़हार किया जाए तुझे,<br></br>
                            अब तू ठहर जाने की गुज़ारिश पर हामी ना मांग।<br></br>
                            मौको पर मिलने की मनाही नही है मगर,<br></br>
                            तू अब मिलने पर वही तबस्सुम ना मांग।<br></br><br></br>

                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग।<br></br><br></br>

                            तू क्या ज़रा भी वाकिफ ना था मेरे दर्द से ओ बेखबर?<br></br>
                            अब तू मेरी परवाह का तकल्लुफ ना मांग।<br></br>
                            रह जाने दे मुझे मगरूरियत में मेरी, मगर तू<br></br>
                            इस मरासिम की जैसी कमज़ोर माफी ना मांग।<br></br><br></br>

                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग।<br></br><br></br>

                            हमदम तेरी कशिश के कहर में बह गया था मै,<br></br>
                            तेरी नूरानी निगाहों की झील में डूब गया था मैं,<br></br>
                            डूब गया था मैं तेरी जुल्फों के दरिया मैं,<br></br>
                            अब तू मुझसे मेरा ये महफूज़ किनारा ना मांग।<br></br><br></br>

                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग।<br></br><br></br>

                            मुकाम-ए-मोहब्बत को छूने की कोशिश थी मेरी,<br></br>
                            अब तू उस कोशिश की मुझसे सच्चाईयां ना मांग।<br></br>
                            साथ निभाने चले थे कभी एक दूसरे का मगर,<br></br>
                            अब तू मुझसे मेरी ये तनहाइयाँ ना मांग।<br></br><br></br>

                            मुझसे पहली सी मोहब्बत मेरे मेहबूब ना मांग।<br></br><br></br>
                            </p>
                             </div>
                            <div class="modal-footer">
                                <p>{this.state.likes}</p>
                                <button type="button" class="btn btn-primary" onClick={this.changeLike}><span>&#128077;</span> Like</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 2 */}

                <div class="modal fade" id="poemModal2" tabindex="-1" role="dialog" aria-labelledby="peomModalLabel2" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="poemModalLabel2">शीत शिला पर सो रही हुँ</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"><p>
                            कानों में यूँ गोल कर, <br></br>
                            कपास फंसाए बहरों सुनलो।<br></br>
                            आँखों पर ये काली पट्टी,<br></br>
                            बांधे बैठे अंधों सुनलो।<br></br>
                            अपने मुह पर बेशर्मी के,<br></br>
                            ताले टंगे मौन सुनलो।<br></br>
                            मैं अजन्मी एक बेटी,<br></br>
                            आज तुमको पुकार रही हूँ।<br></br>
                            अपनी बस इस बेबसी को,<br></br>
                            इश्वर तक पहुँचा रही हूँ॥<br></br><br></br>

                            क्या ख़ता थी मेरी कि जो, <br></br>
                            माँ ने मुझ पर सितम जताया।<br></br>
                            क्या ख़ता थी मेरी की जो,<br></br>
                            उसका दूध न मुह लगाया।<br></br>
                            अपनी किस मजबूरी का ये, <br></br>
                            बापू तुमने क़र्ज़ चुकाया?<br></br>
                            ए मेरे जनक तुम सुनलो,<br></br>
                            शीत शिला पर सो रही हूँ॥<br></br><br></br>

                            दुनिया के आदर्श ऊँचे पर, <br></br>
                            कर्म नीच ही रह गये हैं।<br></br>
                            न जाने इस समाज की,<br></br>
                            कितनी पीढ़ा हम सह रहे हैं।<br></br>
                            मेरी जितनी कितनी जाने <br></br>
                            जाने रोज़ आसमानी हो रहे हैं।<br></br>
                            ए मेरे जनक तुम सुनलो,<br></br>
                            शीत शिला पर सो रही हूँ॥<br></br><br></br>

                            काश पहले जानी होती मैं,<br></br>
                            इश्वर से विनती तो करती।<br></br>
                            चाहे नर्क में जाना पड़ता,<br></br>
                            पर इस गर्भ मे मैं ना मरती।<br></br>
                            लेकिन आज भूके कुत्तों द्वारा,<br></br>
                            मैं निहारी जा रही हूँ।<br></br>
                            ए मेरे जनक तुम सुनलो,<br></br>
                            शीत शिला पर सो रही हूँ॥<br></br><br></br>

                            सुना था मैंने की यहाँ पर,<br></br>
                            कन्या की हैं पूजा होती।<br></br>
                            काश मैं भी जन्म लेती और,<br></br>
                            माँ की गोद में सिसक कर रोती।<br></br>
                            लेकिन मैं एक मांस का टुकड़ा,<br></br>
                            आज अंतिम साँसे ले रही हूँ। <br></br>
                            ए मेरे जनक तुम सुनलो,<br></br>
                            शीत शिला पर सो रही हूँ॥<br></br><br></br>
                                            

                            Stop Female Foeticide!


                            </p>
                             </div>
                            <div class="modal-footer">
                                <p>{this.state.likes}</p>
                                <button type="button" class="btn btn-primary" onClick={this.changeLike}><span>&#128077;</span> Like</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 3 */}

                <div class="modal fade" id="poemModal3" tabindex="-1" role="dialog" aria-labelledby="peomModalLabel3" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="poemModalLabel3"> इश्क़ है तू</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"><p>
                            एक शायर का अधूरा ग़ज़ल है तू,<br></br>
                            एक सवाल का आधा उत्तर है तू,<br></br>
                            जो पूरा ना हो सका किसी होनहार का हसीन सपना है तू,<br></br>
                            लेखक की छूटी कहानी है तू,<br></br>
                            जो किसी राजा की न हुई वो रानी है तू,<br></br>
                            किसी मरीज का अधूरा इलाज है तू,<br></br>
                            किसी जिम्मेदार की नाकाफी लाज है तू<br></br>
                            अरे पगले!! इश्क़ है तू।<br></br><br></br>

                            किसी साधु की संपन्न न हुई तपस्या है तू,<br></br>
                            किसी परिवार की गंभीर समस्या है तू,<br></br>
                            अरे तू वो बन्द गली जिसमे मुसाफिर फस जाए,<br></br>
                            तू तो वो ख्वाब है जिसे सोचकर कोई उदास भी हस जाए,<br></br>
                            इस दिल के लिए अजीब सी मुसीबत है तू,<br></br>
                            नियति की नापाक नियत है तू,<br></br>
                            अरे पगले!! इश्क़ है तू।<br></br><br></br>

                            एक मोर की असफल उड़ान है तू,<br></br>
                            किसी कोयल का पुराना गान है तू,<br></br>
                            किसी शेर की कमज़ोर दहाड़ है तू,<br></br>
                            अरे एक चींटी के सामने पहाड़ है तू,<br></br>
                            किसी मजबूर की मज़बूत आस है तू,<br></br>
                            किसी प्यासे की बे-बुझी प्यास है तू,<br></br>
                            अरे पगले !! इश्क़ है तू।<br></br><br></br>

                            छुपाये हुए आँसुओ का दर्द है तू,<br></br>
                            ज़ख्मों को जो दवा न भर सके वो चीज़ है तू,<br></br>
                            दिल से निकली हुई थमी सी धडक़न है तू,<br></br>
                            साथ होकर भी अकेलेपन का ऐहसास है तू,<br></br>
                            इन हवाओं की गुमनाम मंज़िल है तू,<br></br>
                            अरे पगले!! ईश्क़ है तू।<br></br><br></br>

                            जीवन की नाव में टूटी हुई पतवार है तू,<br></br>
                            किसी सैनिक की बे-धार तलवार है तू,<br></br>
                            नदी की कल-काल का अजीब सुकून है तू,<br></br>
                            गर्म खून का आवारा जुनून है तू,<br></br>
                            निशाने पर जो ना लगा वो तीर है तू,<br></br>
                            जो सबको अपने होने से हरा दे वो वीर है तू,<br></br>
                            अरे पगले!! इश्क़ है तू।<br></br><br></br>

                            उजाले में भी अंधेरे का ऐहसास है तू,<br></br>
                            भीड़ में भी साथ कि आस है तू,<br></br>
                            जो चीज़ किस्मत में न लिखी वो चीज़ है तू,<br></br>
                            मिलकर फिरसे बिछड़ने का रीत है तू,<br></br>
                            भरोसे का टूटा हुआ दूसरा नाम है तू,<br></br>
                            काल्पनिक नहीं असल में दर्द है तू,<br></br>
                            अरे पगले !! इश्क़ है तू।<br></br><br></br>


                            </p>
                             </div>
                            <div class="modal-footer">
                                <p>{this.state.likes}</p>
                                <button type="button" class="btn btn-primary" onClick={this.changeLike}><span>&#128077;</span> Like</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 4 */}

                <div class="modal fade" id="poemModal4" tabindex="-1" role="dialog" aria-labelledby="peomModalLabel4" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="poemModalLabel4">आखिर क्यों?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body"><p>
                            सर्दियो से पतझर आया,<br></br>
                            पर कुछ चीज़े समझ न आती।<br></br>
                            की क्यों देखते ही ये गुड मॉर्निंग,<br></br>
                            मेरे चेहरे पर मुस्कान आती।<br></br><br></br>

                            की क्यों देखते ही तुमको अब,<br></br>
                            दिल में पानी सा उतर है आता।<br></br>
                            इस चेहरे की चमक को देखूं<br></br>
                            मै क्यों फूला न समाता।<br></br><br></br>

                            बात करु अगर निगाहों की तो,<br></br>
                            ऊपर देख उन पुतलिओ को घुमाना<br></br>
                            क्यों है मानो मेरा उन पकलों पर <br></br>
                            बैठ मेरा जहां घूम आना।<br></br><br></br>

                            की क्यों मै उन नज़रो में नज़र<br></br>
                            डाल नही पाता हुँ, उनमे<br></br>
                            वो शमा को देख में क्यों<br></br>
                            चुंधिया जाता हुँ।<br></br><br></br>

                            की क्यों देख मुस्कान वो ऐसी<br></br>
                            पर्वत से गिरता झरना हो जैसी,<br></br>
                            मै परेशानी सारी भूल जाता।<br></br><br></br>

                            सुबह से बात न हो तो<br></br>
                            क्यों शाम को बैचैनी सताती है,<br></br>
                            तुम्हारा बिन बताये नदारद रहना <br></br>
                            क्यों डर मुझमे बैठाती है।<br></br><br></br>

                            ये लिखना सब कुछ व्यर्थ है मेरा<br></br>
                            क्योंकि उस तरफ है अंधेरा,<br></br>
                            पर ना लिखू बात तुम तक <br></br>
                            मुह से बोलने की असमर्थता ने घेरा।<br></br><br></br>

                            मै जनता हुँ उस लायक नही हुँ मैं<br></br>
                            और ये सब बस नामुमकिन है।<br></br><br></br>



                            </p>
                             </div>
                            <div class="modal-footer">
                                <p>{this.state.likes}</p>
                                <button type="button" class="btn btn-primary" onClick={this.changeLike}><span>&#128077;</span> Like</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Poems;